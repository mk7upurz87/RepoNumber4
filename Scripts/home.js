$(function () {

    $('body').append('<div runat="server" id="fbHiddenContent" style="display:none"></div>');

    var $tile = $('div.tile');
    $tile.append('<div class="btn tile-minimize">-</div>');

    var modifiedTiles = {};

    /***********************************************************
     * Minimize the tile that the minimize button resides on,
     * add that tile to a map of minimized tiles and pair it to
     * it's original height
     **********************************************************/
    var minimize = function (e) {

        var $tile = $(this).parents('.tile');
        modifiedTiles[$tile.id] = $tile.attr("height");

        var $sibling = $tile.siblings('.tile');
        modifiedTiles[$sibling.id] = $sibling.attr("height");

        $tile.animate({
            height: '20px'
        }).siblings('.tile').animate({
            height: '910px'
        })

        $('.tile-minimize').off('click');
        $('.tile-minimize').on('click', restore);
    }

    /************************************************************
     * Restore the tile that the minimize button resides by asking
     * the map for the tiles id and reassigning that tiles original
     * height
     ************************************************************/
    var restore = function(e) {        
        e.preventDefault();
        var $tile = $(e.target).parents('.tile');

        $tile.animate({
            height: modifiedTiles[this.id],
        }).siblings('.tile').animate({
            height: modifiedTiles[this.id]
        })
    };
    $('.tile-minimize').off('click');
    $('.tile-minimize').on('click', minimize);
})