$(function () {
    var $tile = $('div.tile');
    $tile.append('<div><button class="tile-minimize"><p>-</p></button></div>');
    console.log($tile);

    var minimizedTiles = [];

    $('button.tile-minimize').click(function () {
        $(this).parent().slideUp(function () {
            minimizedTiles.add($(this));
        });
    });
})