$(document).ready(function() {
    $(".gall").click(function() {
        $("#gallery").show();
        $("#workcontent").hide();
        $("#aboutcontent").hide();
        $("#clients").hide();
        $("#quote").hide();
        $("#services").hide();
        $("#features").hide();
        $("#contact").hide();
        $(".footer").show();
    });
});