$(document).ready(function() {
    $(".top_sidemenu_toggle").click(function() {
        $(".sidemenu").addClass("active");
    });

    $(".sidemenu_close").click(function() {
        $(".sidemenu").removeClass("active");
    });
});