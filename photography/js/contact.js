$(document).ready(function() {
    $(".contact").click(function() {
        $("#closenav").hide();
        $("#contact").show();
        $("#workcontent").hide();
        $("#services").hide();
        $("#gallery").hide();
        $("#features").hide();
        $("#clients").hide();
        $("#quote").hide();
        $("#aboutcontent").hide();
        $(".footer").show();
    });
});