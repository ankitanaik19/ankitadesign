$(document).ready(function(){
  $("#edubtn").click(function(){
    $("#education").show();
    $("#experience").hide();
  });
  $("#expbtn").click(function(){
    $("#experience").show();
    $("#education").hide();
  });
});