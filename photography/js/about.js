$(document).ready(function() {
    $(".about").click(function() {
     $("#aboutcontent").show();
     $("#ab1").addClass("animated fadeInUp");
        $("#banner-content").hide();
        $("#workcontent").hide();
        $("#services").hide();
        $("#gallery").hide();
        $("#features").hide();
        $("#contact").hide();
        $("#clients").hide();
        $("#quote").hide();
        $(".footer").show();
        
    });
});