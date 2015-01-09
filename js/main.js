$(document).ready(function(){
    header_components_init();

    
    if ((navigator.userAgent.indexOf('iPhone') != -1) || (navigator.userAgent.indexOf('iPod') != -1)){
        jQuery('select').selectric({
            disableOnMobile: false
        });
    }

    $('.btn-youtube').on('click', function(e){
        e.preventDefault();
        $('.box-iframe').fadeIn();
        var _this = $(this);
        var ifr = document.getElementById('loader');
        var str = _this.attr('href').split("v=");
        var str = str[1].split("&");
        ifr.src = '//www.youtube.com/embed/'+str[0];
        return false; 
    });

    $('.box-iframe .close, .box-iframe ').on('click', function(e){
        e.preventDefault();
        $('.box-iframe').fadeOut();
        var ifr = document.getElementById('loader');
        ifr.src = '';
        return false; 
    });

});

function header_components_init(){
    var $body       = $('body'),
        $btnmenu    = $('.header .btn-menu'),
        $btnmenuclose    = $('.overlay .btn-menu'),
        $btnvoltar  = $('.btn-voltar'),
        $overlay    = $('.overlay'),
        $nav        = $overlay.find('nav'),
        eventClick  = 'click';

    $btnmenu.on(eventClick, function(e){

        setTimeout(function(){

            $overlay.fadeIn(200, function(){
                $nav.animate({top: 0}, 250);
            });

        }, 100);
    });

    $overlay.find('.inner').on(eventClick, function(e){
        setTimeout(function(){
            $nav.animate({top: '-35%'}, 200, function(){
                $overlay.fadeOut(200);
            });
        }, 100);
    });

    $btnmenuclose.on(eventClick, function(e){
        setTimeout(function(){
            $nav.animate({top: '-35%'}, 200, function(){
                $overlay.fadeOut(200);
            });
        }, 100);
    });

    $btnvoltar.on(eventClick, function(e){
        e.preventDefault();

        window.history.back();
    });
}
