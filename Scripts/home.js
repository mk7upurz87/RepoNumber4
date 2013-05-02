$(function () {
    var $tile = $('div.tile');
    $tile.append('<div class="btn-minimize tile-minimize">-</div>');

    var modifiedTiles = {};

    /***********************************************************
     * Minimize the tile that the minimize button resides on,
     * add that tile to a map of minimized tiles and pair it to
     * it's original height
     **********************************************************/
    var minimize = function (e) {
        e.preventDefault();

        var $tile = $(this).parents('.tile');
        modifiedTiles[$tile.id] = $tile.attr("height");

        var $sibling = $tile.siblings('.tile');
        modifiedTiles[$sibling.id] = $sibling.attr("height");

        $tile.animate({
            height: '15px'
        }).siblings('.tile').animate({
            height: '910px'
        })
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

    $('.tile-minimize').click(minimize);
})