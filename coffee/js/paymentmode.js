
$(document).ready(function(){
  $("#savedcards").click(function(){
    $("#savedcards").css("border-left", "5px solid #934715");
    $("#savedcards").css("border-right", "0px");
    $("#cash").css("border-left", "1px solid #d2d2d2");
    $("#cash").css("border-right", "1px solid #d2d2d2");
    $("#creditdebit").css("border-left", "1px solid #d2d2d2");
    $("#creditdebit").css("border-right", "1px solid #d2d2d2");
    $("#netbanking").css("border-left", "1px solid #d2d2d2");
    $("#netbanking").css("border-right", "1px solid #d2d2d2");
    $("#gift").css("border-left", "1px solid #d2d2d2");
    $("#gift").css("border-right", "1px solid #d2d2d2");
    $(".savedcards").show();
    $(".cash").hide();
    $(".creditdebit").hide();
     $(".netbanking").hide();
     $(".gift").hide();
  });
});

$(document).ready(function(){
  $("#cash").click(function(){
    $("#cash").css("border-left", "5px solid #934715");
    $("#cash").css("border-right", "0px");
    $("#savedcards").css("border-left", "1px solid #d2d2d2");
    $("#savedcards").css("border-right", "1px solid #d2d2d2");
    $("#creditdebit").css("border-left", "1px solid #d2d2d2");
    $("#creditdebit").css("border-right", "1px solid #d2d2d2");
    $("#netbanking").css("border-left", "1px solid #d2d2d2");
    $("#netbanking").css("border-right", "1px solid #d2d2d2");
    $("#gift").css("border-left", "1px solid #d2d2d2");
    $("#gift").css("border-right", "1px solid #d2d2d2");
    $(".cash").show();
    $(".savedcards").hide();
     $(".creditdebit").hide();
     $(".netbanking").hide();
     $(".gift").hide();
  });
});

$(document).ready(function(){
    $("#creditdebit").click(function(){
        $("#creditdebit").css("border-left", "5px solid #934715");
        $("#creditdebit").css("border-right", "0px");
        $("#savedcards").css("border-left", "1px solid #d2d2d2");
        $("#savedcards").css("border-right", "1px solid #d2d2d2");
        $("#cash").css("border-left", "1px solid #d2d2d2");
        $("#cash").css("border-right", "1px solid #d2d2d2");
        $("#netbanking").css("border-left", "1px solid #d2d2d2");
        $("#netbanking").css("border-right", "1px solid #d2d2d2");
        $("#gift").css("border-left", "1px solid #d2d2d2");
        $("#gift").css("border-right", "1px solid #d2d2d2");
        $(".creditdebit").show();
       $(".cash").hide();
       $(".savedcards").hide();
       $(".netbanking").hide();
       $(".gift").hide();
    });
  });

  $(document).ready(function(){
    $("#netbanking").click(function(){
        $("#netbanking").css("border-left", "5px solid #934715");
        $("#netbanking").css("border-right", "0px");
        $("#savedcards").css("border-left", "1px solid #d2d2d2");
        $("#savedcards").css("border-right", "1px solid #d2d2d2");
        $("#cash").css("border-left", "1px solid #d2d2d2");
        $("#cash").css("border-right", "1px solid #d2d2d2");
        $("#creditdebit").css("border-left", "1px solid #d2d2d2");
        $("#creditdebit").css("border-right", "1px solid #d2d2d2");
        $("#gift").css("border-left", "1px solid #d2d2d2");
        $("#gift").css("border-right", "1px solid #d2d2d2");
       $(".netbanking").show();
       $(".cash").hide();
       $(".savedcards").hide();
       $(".creditdebit").hide();
       $(".gift").hide();
    });
  });

  $(document).ready(function(){
    $("#gift").click(function(){
        $("#gift").css("border-left", "5px solid #934715");
        $("#gift").css("border-right", "0px");
        $("#savedcards").css("border-left", "1px solid #d2d2d2");
        $("#savedcards").css("border-right", "1px solid #d2d2d2");
        $("#cash").css("border-left", "1px solid #d2d2d2");
        $("#cash").css("border-right", "1px solid #d2d2d2");
        $("#netbanking").css("border-left", "1px solid #d2d2d2");       
        $("#netbanking").css("border-right", "1px solid #d2d2d2");       
        $("#creditdebit").css("border-right", "1px solid #d2d2d2");      
        $("#creditdebit").css("border-right", "1px solid #d2d2d2");      
       $(".gift").show();
       $(".cash").hide();
       $(".savedcards").hide();
       $(".creditdebit").hide();
       $(".netbanking").hide();
    });
  });

  $(document).ready(function(){
      $(".oldbank").click(function(){
        $(".savedcards").show();
        $(".netbanking").hide();
        
      });
  });

  $(document).ready(function(){
    $(".newbank").click(function(){
      $(".creditdebit").show();
      $(".netbanking").hide();
      
    });
});

  $(document).ready(function(){
    $('input[type="radio"]').click(function(){
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".cvvsaved").not(targetBox).hide();
        $(targetBox).show();
    });
});