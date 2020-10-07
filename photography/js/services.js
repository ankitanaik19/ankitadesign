$(document).ready(function(){
  $(window).scroll(function(){
  var positiontop = $(document).scrollTop();
  console.log(positiontop);
     if ((positiontop > 40) && (positiontop < 544)) {
       $("#row2left").addClass("animated fadeInLeft");
    }
     if ((positiontop > 40) && (positiontop < 544)) {
       $("#row2right").addClass("animated fadeInRight");
    }
     if ((positiontop > 544) && (positiontop < 1082)) {
       $("#row3left").addClass("animated fadeInLeft");
    }
     if ((positiontop > 544) && (positiontop < 1082)) {
       $("#row3right").addClass("animated fadeInRight");
    }
     if ((positiontop > 1082) && (positiontop < 1580)) {
       $("#row4left").addClass("animated fadeInLeft");
    }
     if ((positiontop > 1082) && (positiontop < 1580)) {
       $("#row4right").addClass("animated fadeInRight");
    }
    if ((positiontop > 1580) && (positiontop < 2091)) {
       $("#row5left").addClass("animated fadeInLeft");
    }
    if ((positiontop > 1580) && (positiontop < 2091)) {
       $("#row5right").addClass("animated fadeInRight");
     }
    if ((positiontop > 2091) && (positiontop < 2589)) {
       $("#row6left").addClass("animated fadeInLeft");
     }
    if ((positiontop > 2091) && (positiontop < 2589)) {
       $("#row6right").addClass("animated fadeInRight");
    }
    if ((positiontop > 2592) && (positiontop < 3099)) {
      $("#row7left").addClass("animated fadeInLeft");
    }
   if ((positiontop > 2592) && (positiontop < 3099)) {
      $("#row7right").addClass("animated fadeInRight");
   }
    if ((positiontop > 3099) && (positiontop < 3524)) {
       $("#feature1").addClass("animated fadeInUp");
    }
    if ((positiontop > 3099) && (positiontop < 3524)) {
       $("#feature1").addClass("animated fadeInUp");
    }
    if ((positiontop > 3524) && (positiontop < 3873)) {
       $("#feature2").addClass("animated fadeInUp");
    }
    if ((positiontop > 3524) && (positiontop < 3873)) {
       $("#feature2").addClass("animated fadeInUp");
  }

});
});