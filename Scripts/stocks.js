$(function () {
    $("#stockSubmit").button();

    // When the form is submitted:
    $("#stockForm").submit(function (e) {
        e.preventDefault();
        var tickerSymbol = $("#stockInput").val();

        new Markit.QuoteService(tickerSymbol, function (jsonResult) {
            this.clearResult();

            //Catch errors
            //$("p").text("About to if..");
            if (!jsonResult.Data || jsonResult.Message) {
                this.renderAlert(jsonResult);
                return;
            }
            this.success(jsonResult);
            new MarkitTime.TimeseriesService(tickerSymbol, 365);
        });
    });

    // Auto Complete
    $("#stockInput").focus().autocomplete({
        source: function (request, response) {
            $.ajax({
                beforeSend: function () {
                    $("span.help-inline").show();
                    $("span.label-info").empty().hide();
                },
                url: "http://dev.markitondemand.com/api/Lookup/jsonp",
                dataType: "jsonp",
                data: {
                    input: request.term
                },
                success: function (data) {
                    response($.map(data, function (item) {
                        return {
                            label: item.Name + " (" + item.Exchange + ")",
                            value: item.Symbol
                        }
                    }));
                    $("span.help-inline").hide();
                }
            });
        },
        minLength: 0,
        select: function (event, ui) {

            //console.log(ui.item);
            $("span.label-info").html("You selected " + ui.item.label).fadeIn("fast");
        },
        open: function () {
            $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
        },
        close: function () {
            $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
        }
    });
});

// Prototype some methods onto our Quote Service
Markit.QuoteService.prototype.clearResult = function () {

    //$("p").text("clearResult");
    this.resetForm();
    $("#resultContainer").remove();
    $("div.alert").remove();
};

Markit.QuoteService.prototype.resetForm = function () {

    //$("p").text("resetForm");
    $("#stockSubmit").button("refresh");
    $("#stockForm").removeClass("error");
    var $input = $("#stockInput");
    $input
        .val($input.val().toUpperCase())
        .select()
        .focus();
};

Markit.QuoteService.prototype.success = function (jsonResult) {
    var $container = $("<div class='hide' id='resultContainer' style='width:100%' />");
    $container.append("<h4>" + jsonResult.Data.Name + " (" + jsonResult.Data.Symbol + ")</h4>");
    $container.append(this.renderResultTable(jsonResult));

    $("#stockForm").after($container);
    $container.fadeIn('500');
    this.resetForm();
};

Markit.QuoteService.prototype.renderAlert = function (jsonResult) {
    var $form = $("#stockForm");
    $form.addClass("error");
    $form.before("<div class='alert alert-error'><a class='close' data-dismiss='alert'>&times;</a>" + jsonResult.Message + "</div>");
    var $divalert = $("div.alert");
    if($divalert) {
        $divalert.alert();
    }
};

Markit.QuoteService.prototype.renderResultTable = function (jsonResult) {
    var $table = $("<table />"),
        $thead = $("<thead />"),
        $tbody = $("<tbody />"),
        tableHeadCells = [],
        tableCells = [];

    tableHeadCells.push("<tr>");
    tableHeadCells.push("<th>Last Price</th>");
    tableHeadCells.push("<th>Change</th>");
    tableHeadCells.push("<th>Change Percent</th>");
    tableHeadCells.push("<th>Change Percent YTD</th>");
    tableHeadCells.push("<th>Last Traded</th>");
    tableHeadCells.push("</tr>");

    tableCells.push("<tr>");
    tableCells.push("<td>$", jsonResult.Data.LastPrice, "</td>");
    tableCells.push("<td>", this.formatChgPct(jsonResult.Data.Change), "</td>");
    tableCells.push("<td>", this.formatChgPct(jsonResult.Data.ChangePercent), "%</td>");
    tableCells.push("<td>", jsonResult.Data.ChangePercentYTD.toFixed(2), "%</td>");
    tableCells.push("<td>", jsonResult.Data.Timestamp, "</td>");
    tableCells.push("</tr>");

    $table.addClass("table");
    $table.attr('border', '1');
    $thead.append(tableHeadCells.join(""));
    $tbody.append(tableCells.join(""));

    $table.append($thead).append($tbody);

    return $table;
};

Markit.QuoteService.prototype.formatChgPct = function (chg) {

    //the quote API returns negative numbers already,
    //so we just need to add the + sign to positive numbers
    return (chg <= 0) ? chg.toFixed(2) : "+" + chg.toFixed(2);
};