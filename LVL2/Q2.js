$(document).bind("contextmenu",function(e){
    return false;
      });

$(document).ready(function () {
    $("#getArea").click(function () { 
        console.log("hello1");
        console.log($("#area").val());
        $("#a").text("==>"+$("#area").val());
          });
});

$(document).ready(function () {
    $("#getinput").click(function () { 
        console.log("hello2");
        console.log($("#textbox").val());
        $("#b").text("==>"+$("#textbox").val());
          });
});
$(document).ready(function(){
    $("#area").keydown(function(){
      $("#area").css("background-color", "yellow");
    });
    $("#area").keyup(function(){
      $("#area").css("background-color", "pink");
    });
    $("#aa").click(function(){
      $("#area").triggerHandler("keydown");
    });
    $("#bb").click(function(){
      $("#area").triggerHandler("keyup");
    });
  });