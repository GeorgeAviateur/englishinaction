
$(document).ready(function() {
    var controlAudio=1;
    var controlRespuesta;
    var controlImagen;
    var contadorBuenas=0;
    var contadorMalas=0;
    document.getElementById("reproducir").addEventListener("click",reproducirAudio);
    
    
    function reproducirAudio(){
		var audio=document.getElementById("text");
		audio.play();
		$('#personaje1 img').css('border','3px groove #ffff5c');
		auto=setTimeout(function (){
				$('#personaje2 img').css('border','3px groove #ffff5c');
				$('#personaje1 img').css('border','none');
				},2000);
		auto=setTimeout(function (){
				$('#personaje2 img').css('border','3px groove #ffff5c');
				$('#personaje1 img').css('border','none');
				$('#imageart span').css('display','inline');
				},4000);
				}
	
	
	
	
	
	$("#continuar").click(function(){$("#r1").css('display','none');$("#continuar").css('display','none');resul();});
});