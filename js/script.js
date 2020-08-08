function Brain() {
    return confirm('Diste clic en el Cerebro, ¿Deseas ir a la pagina principal?')
       
}
function sendComentary() {
    let envio= document.getElementById('Coment').value
        if (envio) {
            document.getElementById('Coment').value =("")
            document.getElementById('registro').innerHTML = "!!Hemos registrado su comentario!!"
        }else{ alert('Ingresa un valor')
    }
       
        
}

$(document).ready(function(){
    $('.collapsible').collapsible();

  });

$('.collapsible-header').mouseover(function(){
    $(this).css("background","indigo").css("color","white")
});
$('.collapsible-header').mouseout(function(){
    $(this).css("background","white").css("color","black")
});