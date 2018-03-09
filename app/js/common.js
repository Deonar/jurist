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
    //Question page
    $(document).ready(function() {
        $('.answer-container').hide();
        $('.question_wrapper > .question_item').click(function (event) {
            $(this).toggleClass('question-active');
            $(this).children(".answer-container").slideToggle();
            event.stopPropagation();
        });
        $('.question_item').children('button').click(function (event) {
                $(this).closest('.question_item').toggleClass('question-active');
                $(this).closest(".answer-container").slideToggle();
                event.stopPropagation();
        });
    });
    //Slider
    $(document).ready(function(){
        $('.service-slide').slick({
            slidesToShow: 1,
            adaptiveHeight: true,
            prevArrow:'<button type="button" class="slick-prev"></button>',
            nextArrow:'<button type="button" class="slick-next"></button>'
        });
    });
    //Scroll
    $(document).ready(function(){
        $("#menu_footer").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });
});
