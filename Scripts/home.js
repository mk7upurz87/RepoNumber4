$(function() {  
    var $tile = $('.tile');
    $tile.each(function(e){
        e.find('h3').first().after('<button class="tile-minimize">_</button>');
    })
})