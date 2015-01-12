var zoom = window.innerWidth/640;
document.getElementById('resize-content').style.opacity = 1;
document.getElementById('resize-content').style.zoom = zoom;

function _link(data){
   window.open(decodeURIComponent(data), '_system');
}

$(document).ready(function(){

    $( "#conteudo" ).load( "http://thinkandlove.com.br/m_/" , function(){
        $('.loading').hide();
    });

    $(document).on('touchstart', '.btn', function(e){
        e.preventDefault();

        $('.loading').show();

        setTimeout(function(){
            $nav.animate({top: '-35%'}, 200, function(){
                $overlay.fadeOut(200);
            });
        }, 100);
        
        $( "#conteudo" ).load( $(this).attr('rel') , function(){
            $('.loading').hide();
        });

        return false;
    });

    var $body         = $('body'),
        $btnmenu      = $('.header .btn-menu'),
        $btnmenuclose = $('.overlay .btn-menu'),
        $btnvoltar    = $('.btn-voltar'),
        $overlay      = $('.overlay'),
        $nav          = $overlay.find('nav'),
        eventClick    = 'touchstart';

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

    
    if ((navigator.userAgent.indexOf('iPhone') != -1) || (navigator.userAgent.indexOf('iPod') != -1)){
        jQuery('select').selectric({
            disableOnMobile: false
        });
    }

    $(document).on('touchstart', '.btn-youtube', function(e){
        e.preventDefault();
        $('.box-iframe').fadeIn();
        var _this = $(this);
        var ifr = document.getElementById('loader');
        var str = _this.attr('rel').split("v=");
        var str = str[1].split("&");
        ifr.src = '//www.youtube.com/embed/'+str[0];
        return false; 
    });

    $(document).on('touchstart', '.box-iframe .close, .box-iframe', function(e){
        e.preventDefault();
        $('.box-iframe').fadeOut();
        var ifr = document.getElementById('loader');
        ifr.src = '';
        return false; 
    });

});