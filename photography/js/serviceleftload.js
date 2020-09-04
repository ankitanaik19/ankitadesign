$(window).on("scroll", function() {
    if ($(window).scrollTop()) {
        $("#left").addClass("servicelefttload");

    } else {
        $("#left").removeClass("servicelefttload");
    }
})