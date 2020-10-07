$(document).ready(function() {
    $(".wedding").click(function() {
        $(".wedshow").show(1000);
        $(".wedding").css({ "backgroundColor": "#3c3b3b", "color": "#fff" });
        $(".showallwork").css({ "backgroundColor": "#e8e8e8", "color": "#3c3c3c" });
        $(".baby").css({ "backgroundColor": "#e8e8e8", "color": "#3c3c3c" });
        $(".adventure").css({ "backgroundColor": "#e8e8e8", "color": "#3c3c3c" });
        $(".model").css({ "backgroundColor": "#e8e8e8", "color": "#3c3c3c" });
        $(".nature").css({ "backgroundColor": "#e8e8e8", "color": "#3c3c3c" });
        $(".food").css({ "backgroundColor": "#e8e8e8", "color": "#3c3c3c" });

        $("#hideallwork").hide(1000);
        $(".babyshow").hide(1000);
        $(".adventureshow").hide(1000);
        $(".modelshow").hide(1000);
        $(".natureshow").hide(1000);
        $(".foodshow").hide(1000);

    });
});