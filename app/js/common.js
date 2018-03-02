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
});
