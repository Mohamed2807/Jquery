$(document).ready(function(){
    $(".btn").click(function(){
        console.log("called");
        $("#write").text("status ="+$("div").scrollTop()+"px");   
    });
});
$(document).bind("contextmenu",function(e){
    return false;
      });

$(document).ready(function(){
    console.log("hello1");
    $(".btn1").click(function(){
        $("#get").load("demo.txt");
    })
})