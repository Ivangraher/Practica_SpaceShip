$(document).ready(iniciar);

var carta = $("<img src = 'carta.jpg'/>");
function iniciar(){
    $('#btn_empezar').click();
    $('#tablero > div > img').click(sendAjax);
    
}

function sendAjax(){
    var ficha = $(this).attr('title');
    var padre = $(this).parent().attr('id');
    $.ajax({
        type:"POST",
        url:"index.php",
        dataType:"json",
        data:{"carta": ficha,
            "id":padre
                },
        success: function(respuesta){
         var a = respuesta.ficha;
         var b = respuesta.id;
         var c = respuesta.id2;
        
         //$("#ficha").html('title'); 
         var i = $('<img />');
         i.attr('src',a);
         $("#"+b+" > img").remove();
         $("#"+b).append(i);
         $("#"+b).off();
         $("#"+c).off();
         
        
        if(c != -1){
        var c = respuesta.id2;
            window.setTimeout(function(){
            $("#"+b).html(carta);
            $("#"+c).html(carta);
            },2000);           
            
        }
        }
    });
    

}

