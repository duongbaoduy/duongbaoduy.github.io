$(document).ready(function () {
    
    $("p code").each(function() {
	$(this).parent().css("overflow-x","auto");
	$(this).css("word-wrap","normal").css("white-space","pre");
    });
    
    $(".navbar-fixed-top").autoHidingNavbar({
	// see next for specifications
    });
    function toggleNavbarMethod() {
        if ($(window).width() >  768) {
            $('.navbar .dropdown').on('mouseover', function(){
                $('.dropdown-toggle', this).trigger('click'); 
            }).on('mouseout', function(){
                $('.dropdown-toggle', this).trigger('click').blur();
            });
        }
        else {
            $('.navbar .dropdown').off('mouseover').off('mouseout');
        }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
});
