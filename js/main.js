var zoom = window.innerWidth/640;
document.getElementById('resize-content').style.opacity = 1;
document.getElementById('resize-content').style.zoom = zoom;

$(document).ready(function(){

    $( "#conteudo" ).load( "http://thinkandlove.com.br/m/" , function(){
        $('.loading').hide();
    });

    $(document).on('tap', '.btn-externo', function(e){
        e.preventDefault();
        var _button = this;
        window.open(decodeURIComponent( $(_button).attr('rel') ), '_system');
    });

    $(document).on('tap', '.btn', function(e){
        e.preventDefault();
        var _button = this;
        $('.loading').show();

        setTimeout(function(){
            $nav.animate({top: '-35%'}, 200, function(){
                $overlay.fadeOut(200);
            });
        }, 100);

        $( "#conteudo" ).load( $(this).attr('rel') , function(){

            // PAGINA CAUSAS
            if ( $(_button).attr('rel').indexOf("causas") != -1 ) {
                $.each( $('.causas article') , function(i, el){
                    var _this = this;

                    setTimeout(function(){
                       $(_this).animate({
                        'opacity':1.0
                       }, 600);
                    },200 + ( i * 200 ));
                });
            };

            // PAGINA ONGS
            if ( $(_button).attr('rel').indexOf("ongs") != -1 || $(_button).attr('rel').indexOf("causas_categoria") != -1 ) {
                $.each( $('.ong-list article img') , function(){
                    var _this = this;

                    $(_this).attr('src' , $(_this).attr('src').replace("/m/", '') );
                });

                if ( $(_button).attr('rel').indexOf("ongs") != -1 ) {
                    if ((navigator.userAgent.indexOf('iPhone') != -1) || (navigator.userAgent.indexOf('iPod') != -1)){
                        jQuery('select').selectric({
                            disableOnMobile: false
                        });
                    }
                }

                jQuery('.filter-ongs').on('change', function(){
                    var letra = jQuery(this).val();
                    jQuery('.hidden-item').hide();
                    jQuery('.display-'+letra).show();
                });

                if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
                    document.write('<style>.ong-list .ong-image:before{left:-11px;}</style>');
                }
            };

            // PAGINA CAUSA
            if ( $(_button).attr('rel').indexOf("causa") != -1 ) {
                $.each( $('.box-img img') , function(){
                    var _this = this;
                    $(_this).attr('src' , $(_this).attr('src').replace("/m/", '') );
                });
            };

            $('.loading').hide();
            $('.box-iframe').css('height' , $(window).height() / zoom );
        });

        return false;
    });

    var $body         = $('body'),
        $btnmenu      = $('.header .btn-menu'),
        $btnmenuclose = $('.overlay .btn-menu'),
        $btnvoltar    = $('.btn-voltar'),
        $overlay      = $('.overlay'),
        $nav          = $overlay.find('nav'),
        eventClick    = 'tap';

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

    $(document).on('tap', '.btn-youtube', function(e){
        e.preventDefault();
        $('.box-iframe').fadeIn();
        var _this = $(this);
        var ifr = $('#loader');
        var str = _this.attr('rel').split("v=");
        var str = str[1].split("&");
        $(ifr).html('<object><param name="movie" value="http://www.youtube.com/v/'+str[0]+'"></param><embed src="http://www.youtube.com/v/'+str[0]+'" type="application/x-shockwave-flash"></embed></object>');
        return false; 
    });

    $(document).on('tap', '.box-iframe .close, .box-iframe', function(e){
        e.preventDefault();
        $('.box-iframe').fadeOut();
        var ifr = document.getElementById('loader');
        ifr.src = '';
        return false; 
    });

});