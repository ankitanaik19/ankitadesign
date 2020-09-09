    $(document).ready(function(){
    $(window).scroll(function(){
    var positiontop = $(document).scrollTop();
    console.log(positiontop);
    if ((positiontop > 107) && (positiontop < 273)) {
     $("#allwork").addClass("animated fadeInLeft");
    }
    if ((positiontop > 273) && (positiontop < 626)) {
        $("#workrow1").addClass("animated flipInX");
   }
    if ((positiontop > 626) && (positiontop < 671)) {
        $("#workrow2").addClass("animated flipInX");
    }
    if ((positiontop > 775) && (positiontop < 1089)) {
        $("#clients").addClass("animated bounceIn");
       }

       if ((positiontop > 1499) && (positiontop < 1582)) {
        $("#quo1").addClass("animated fadeInUp");
    }
    if ((positiontop > 1582) && (positiontop < 1880)) {
        $("#quo2").addClass("animated fadeInUp");
    }
     
});
});
