$(document).ready(function() {
    $(".banner-fa-back").click(function() {
        $("#workcontent").show();
        $("#clients").show();
        $("#quote").show();
        $("#aboutcontent").hide();
        $("#contact").hide();
        $("#gallery").hide();
        $("#services").hide();
        $("#features").hide();
        $(".footer").show();
    });
});