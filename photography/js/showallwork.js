$(document).ready(function() {
    $(".showallwork").click(function() {
        $("#hideallwork").show(1000);
        $(".showallwork").css({ "backgroundColor": "#3c3c3c", "color": "#fff" });
        $(".wedding").css({ "backgroundColor": "#e8e8e8", "color": "#3c3c3c" });
        $(".baby").css({ "backgroundColor": "#e8e8e8", "color": "#3c3c3c" });
        $(".fashion").css({ "backgroundColor": "#e8e8e8", "color": "#3c3c3c" });
        $(".adventure").css({ "backgroundColor": "#e8e8e8", "color": "#3c3c3c" });
        $(".nature").css({ "backgroundColor": "#e8e8e8", "color": "#3c3c3c" });
        $(".food").css({ "backgroundColor": "#e8e8e8", "color": "#3c3c3c" });
        $(".wedshow").hide(1000);
        $(".natureshow").hide(1000);
        $(".modelshow").hide(1000);
        $(".foodshow").hide(1000);
        $(".adventureshow").hide(1000);
        $(".babyshow").hide(1000);
    });


});