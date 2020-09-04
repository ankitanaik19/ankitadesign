$(document).ready(function() {
    $(".baby").click(function() {
        $(".baby").css({ "backgroundColor": "#3c3b3b", "color": "#fff" });
        $(".showallwork").css({ "backgroundColor": "#e8e8e8", "color": "#3c3c3c" });
        $(".wedding").css({ "backgroundColor": "#e8e8e8", "color": "#3c3c3c" });
        $(".adventure").css({ "backgroundColor": "#e8e8e8", "color": "#3c3c3c" });
        $(".model").css({ "backgroundColor": "#e8e8e8", "color": "#3c3c3c" });
        $(".nature").css({ "backgroundColor": "#e8e8e8", "color": "#3c3c3c" });
        $(".food").css({ "backgroundColor": "#e8e8e8", "color": "#3c3c3c" });

        $(".babyshow").show(1000);
        $("#hideallwork").hide(1000);
        $(".wedshow").hide(1000);
        $(".adventureshow").hide(1000);
        $(".modelshow").hide(1000);
        $(".natureshow").hide(1000);
        $(".foodshow").hide(1000);
    });
});