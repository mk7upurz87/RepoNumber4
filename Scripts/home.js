$(function () {
    var $tile = $('div.tile');
    $tile.append('<div>click my minimize button  --&gt<button class="tile-minimize"><b>_</b></button></div>');
    console.log($tile);

    var minimizedTiles = [];

    $('button.tile-minimize').click(function () {
        $(this).parent().slideUp(function () {
            minimizedTiles.add($(this));
        });
    });
})