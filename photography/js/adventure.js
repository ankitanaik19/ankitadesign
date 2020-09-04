$(document).ready(function(){
    $(".adventure").click(function(){
      $("button.adventure").css({"backgroundColor":"#3c3b3b", "color": "#fff"});
      $("button.showallwork").css({"backgroundColor":"#e8e8e8", "color": "#3c3c3c"});
      $("button.wedding").css({"backgroundColor":"#e8e8e8", "color": "#3c3c3c"});
      $("button.baby").css({"backgroundColor":"#e8e8e8", "color": "#3c3c3c"});
      $("button.model").css({"backgroundColor":"#e8e8e8", "color": "#3c3c3c"});
      $("button.nature").css({"backgroundColor":"#e8e8e8", "color": "#3c3c3c"});
      $("button.food").css({"backgroundColor":"#e8e8e8", "color": "#3c3c3c"});

      $(".adventureshow").show(1000);	
      $("#hideallwork").hide(1000);
      $(".wedshow").hide(1000);
      $(".babyshow").hide(1000);
      $(".modelshow").hide(1000);
      $(".natureshow").hide(1000);
      $(".foodshow").hide(1000);
    });   
  });


 
  