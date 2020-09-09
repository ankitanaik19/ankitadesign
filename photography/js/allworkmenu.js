$(document).ready(function() {
    $(".banner-fa-back").click(function() {
        $("#workcontent").show();
       $("#allwork").addClass("animated fadeInLeft");
       $("#workrow1").addClass("animated flipInX");
       
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