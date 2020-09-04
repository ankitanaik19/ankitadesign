$(window).on("scroll", function() {
    if ($(window).scrollTop()) {
        $("nav").addClass("navbg");

    } else {
        $("nav").removeClass("navbg");
    }
})