$(document).ready(function() {
    $(".contact").click(function() {
        $("#contact").show();
        $("#workcontent").hide();
        $("#banner-content").hide();
        $("#services").hide();
        $("#gallery").hide();
        $("#features").hide();
        $("#clients").hide();
        $("#quote").hide();
        $("#aboutcontent").hide();
        $(".footer").show();
    });
});