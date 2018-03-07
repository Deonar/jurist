$(function() {


    //ToggleMenu
    $(document).ready(function() {
        $('#toggleMenu').click(function() {
            $('.top-nav_menu').slideToggle(500);
        });//end slide toggle
        $(window).resize(function() {
            if (  $(window).width() > 960 ) {
                $('.top-nav_menu').removeAttr('style');
            }
        });
    });
    $(document).mouseup(function (e) {
        var container = $(".top-nav_menu, #toggleMenu");
        if (container.has(e.target).length === 0 && $(window).width() < 960 ){
            $('.top-nav_menu').hide();
        }
    });
    //Service-list
    (function($) {
        $(function() {
            $("ul.service__tabs").on("click", "li:not(.active)", function() {
                $(this)
                    .addClass("active")
                    .siblings()
                    .removeClass("active")
                    .closest("div.service-wrapper")
                    .find("div.service__content")
                    .removeClass("active")
                    .eq($(this).index())
                    .addClass("active");
            });
        });
    })(jQuery);
    //Readmore
    $('.news-description').readmore({
        collapsedHeight: 75,
        speed: 500,
        moreLink: '<a class="readmore-js-toggle" href="#">Подробнее</a>',
        lessLink: '<a class="readmore-js-toggle" href="#">Свернуть</a>',
        afterToggle: function(trigger, element, expanded) {
            if(! expanded) {
                $('html, body').animate( { scrollTop: element.offset().top }, {duration: 100 } );
            }
        }
    });
});
