$(document).ready(function() {
    $(".services").click(function() {
        $("#services").show();
        $("#aboutcontent").hide();
        $("#clients").hide();
        $("#quote").hide();
        $("#workcontent").hide();
        $("#gallery").hide();
        $("#features").show();
        $("#contact").hide();
        $(".footer").show();
    });
});