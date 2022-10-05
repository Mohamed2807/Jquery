$(document).ready(function () {
    $(document).keydown(function (event) {
        if(event.key=='Shift'){}
        else{
       keyEvent(event.key,'blue');
       if(event.key=='.'){}
            else if(event.key=='+')
                operation(event.key)
            else if(event.key=='-')
                operation(event.key)
                    else if(event.key=='='||event.key=='Enter')
                    operation('=')
                            else if(event.key=='*')
                            operation(event.key)
                                else if(event.key=='Delete')
                                    clearAll();
                                    else if(event.key=='/')
                                    operation(event.key)
                                        else if(event.key=='Backspace')
                                        removeValue();
                                            else if($("#"+event.key).attr("class")=='num')
                                            appendNum(Number(event.key));
        }
    });
    $(document).keyup(function (event) {
        if(event.key=='Shift'){}
        else{
            console.log(event.key);
        keyEvent(event.key,'transparent');}
     });

});
function mouseDown(id) {
    console.log("down"+id);
    $("#"+id).css("background-color", "blue");
    if(id=='dot'){}
    else if(id=='plus')
        operation('+')
    else if(id=='min')
        operation('-')
        else if(id=='dot'){}
        
            else if(id=='equal')
            operation('=')
                    else if(id=='mul')
                    operation('*')
                        else if(id=='div')
                        operation('/')
                            else if(id=='Backspace')
                            removeValue();
                                else if(id=='Delete')
                                    clearAll();
                                        else if($("#"+id).attr("class")=='num')
                                        appendNum(Number(id));
  }

  
  function mouseUp(id) {
    console.log("up"+id);
    $(document).ready(function () {
        $("#"+id).css("background-color", "transparent");
    });
   
  }
function keyEvent(keyValue,color){
    if(keyValue=='.')
        keyValue='dot';
    else if(keyValue=='+')
            keyValue='plus';
        else if(keyValue=='-')
                keyValue='min';
            else if(keyValue=='=')
                    keyValue='equal';
                        else if(keyValue=='/')
                        keyValue='div';
                            else if(keyValue=='*')
                            keyValue='mul';
        
    $('#'+keyValue).css("background-color", color);
}
$(document).ready(()=>{
    $("#calc").val(0);
    $("#result").val(0);
    
});
let value;
function appendNum(num){
    if($('#calc').val()==0){
        if(num=='.')
            $('#calc').val(num+0);
        else
            $('#calc').val(num);
    }
    else{
            if(num=='.')
            $('#calc').val(document.getElementById("calc").value+num);
            else
            $('#calc').val(($('#calc').val()*10)+num);
    }
}
let isOperator=false;
function removeValue(){
    if($('#calc').val()=='0'){
        $("#sym").val('');
        $("#result").val('');
        isOperator=false;
    }
    if($('#calc').val()[($('#calc').val()[length-1])]=='.')
        $('#calc').val(($('#calc').val()/10).substring(0, (($('#calc').val()/10).length() - 1)));
    else
         $('#calc').val(Math.round($('#calc').val()/10)) 

}
let currentSymbol='';
let previousData=0;
let previousSymbol='';
function clearAll(){
    $('#calc').val(0);
    $('#result').val('');
    $("#sym").val('');

}
function operation(symbol){
   
    
    if(isOperator){ 
       if( $('#calc').val()!=''){
            if(previousSymbol=='='&& $('#calc').val()!=0){
                previousData=Number($('#calc').val());
                $('#calc').val(0);
                $('#result').val(0);
                
            }
            else{

                calculation(previousSymbol);
                previousData=Number($('#result').val());
                $('#calc').val('');
                console.log("true");
            }
        
       }
       if(symbol=='=')
       $("#sym").val(symbol);
       else
        $("#sym").val(previousData+symbol);
    }else{
        
            previousData=Number($('#calc').val());
            $('#calc').val(0);
            $("#sym").val(previousData+symbol);
            console.log("false");
            isOperator=true;}
            previousSymbol=symbol;
}
function calculation(symbol){
    switch(symbol){
        case '+':$('#result').val(previousData+Number($('#calc').val()));break;
        case '-':$('#result').val(previousData-Number($('#calc').val()));break;
        case '*':$('#result').val(previousData*Number($('#calc').val()));break;
        case '/':$('#result').val(previousData/Number($('#calc').val()));break;
        case '=': previousData=Number($('#result').val());break;
    }
    
}
