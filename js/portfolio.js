$(document).ready(function(){
  $("#allbtn").click(function(){
    $("#all").show();
    $("#webdesign").hide();
  });
  $("#designbtn").click(function(){
    $("#webdesign").show();
    $("#all").hide();
  });
});