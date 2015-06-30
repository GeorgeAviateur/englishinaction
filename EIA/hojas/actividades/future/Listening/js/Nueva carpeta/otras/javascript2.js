var cont=0,aux=0;
$(document).ready(function(){
	var controlAudio=-1;
	var controlOpciones=0;
	var aciertos=0;
	//alert("funciona jquery tambien");

$("#image1").click(function(){document.getElementById("audio1").play(); $("#imagenes img").css('opacity','0.6');  $("#image1").css('opacity','1'); $(".ingreso").css('z-index','0');  $("#ingreso1").css('z-index','1'); });
$("#image2").click(function(){document.getElementById("audio2").play(); $("#imagenes img").css('opacity','0.6');  $("#image2").css('opacity','1'); $(".ingreso").css('z-index','0');  $("#ingreso2").css('z-index','1'); });
$("#image3").click(function(){document.getElementById("audio3").play(); $("#imagenes img").css('opacity','0.6');  $("#image3").css('opacity','1'); $(".ingreso").css('z-index','0');  $("#ingreso3").css('z-index','1'); });
$("#image4").click(function(){document.getElementById("audio4").play(); $("#imagenes img").css('opacity','0.6');  $("#image4").css('opacity','1'); $(".ingreso").css('z-index','0');  $("#ingreso4").css('z-index','1'); });
$("#image5").click(function(){document.getElementById("audio5").play(); $("#imagenes img").css('opacity','0.6');  $("#image5").css('opacity','1'); $(".ingreso").css('z-index','0');  $("#ingreso5").css('z-index','1'); });
$("#image6").click(function(){document.getElementById("audio6").play(); $("#imagenes img").css('opacity','0.6');  $("#image6").css('opacity','1'); $(".ingreso").css('z-index','0');  $("#ingreso6").css('z-index','1'); });
$("#image7").click(function(){document.getElementById("audio7").play(); $("#imagenes img").css('opacity','0.6');  $("#image7").css('opacity','1'); $(".ingreso").css('z-index','0');  $("#ingreso7").css('z-index','1'); });
$("#image8").click(function(){document.getElementById("audio8").play(); $("#imagenes img").css('opacity','0.6');  $("#image8").css('opacity','1'); $(".ingreso").css('z-index','0');  $("#ingreso8").css('z-index','1'); });
$("#image9").click(function(){document.getElementById("audio9").play(); $("#imagenes img").css('opacity','0.6');  $("#image9").css('opacity','1'); $(".ingreso").css('z-index','0');  $("#ingreso9").css('z-index','1'); });	
	
	$("input .ingreso").click(function(){
		$("#mostrarBoton").click(function(){
			$("#boton").css("display","inline");
		});
	});
	
	
	$("#continuar").click( function() {
		//alert("entra al metodo");
		var usuario1=$("input#ingreso1").val();
		var respuesta1=$("input#correcto1").val();
		var usuario2=$("input#ingreso2").val();
		var respuesta2=$("input#correcto2").val();
		var usuario3=$("input#ingreso3").val();
		var respuesta3=$("input#correcto3").val();
		var usuario4=$("input#ingreso4").val();
		var respuesta4=$("input#correcto4").val();
		var usuario5=$("input#ingreso5").val();
		var respuesta5=$("input#correcto5").val();
		var usuario6=$("input#ingreso6").val();
		var respuesta6=$("input#correcto6").val();
		var usuario7=$("input#ingreso7").val();
		var respuesta7=$("input#correcto7").val();
		var usuario8=$("input#ingreso8").val();
		var respuesta8=$("input#correcto8").val();
		var usuario9=$("input#ingreso9").val();
		var respuesta9=$("input#correcto9").val();
		if(usuario1==respuesta1){
			aciertos++;
			$("input#usuario1").val(usuario1);
		}
		else{
			$("input#usuario1").val(usuario1);
		}
		if(usuario2==respuesta2){
			aciertos++;
			$("input#usuario2").val(usuario2);
		}
		else{
			$("input#usuario2").val(usuario2);
		}
		if(usuario3==respuesta3){
			aciertos++;
			$("input#usuario3").val(usuario3);
		}
		else{
			$("input#usuario3").val(usuario3);
		}
		if(usuario4==respuesta4){
			aciertos++;
			$("input#usuario4").val(usuario4);
		}
		else{
			$("input#usuario4").val(usuario4);
		}
		if(usuario5==respuesta5){
			aciertos++;
			$("input#usuario5").val(usuario5);
		}
		else{
			$("input#usuario5").val(usuario5);
		}
		if(usuario6==respuesta6){
			aciertos++;
			$("input#usuario6").val(usuario6);
		}
		else{
			$("input#usuario6").val(usuario6);
		}
		if(usuario7==respuesta7){
			aciertos++;
			$("input#usuario7").val(usuario7);
		}
		else{
			$("input#usuario7").val(usuario7);
		}
		if(usuario8==respuesta8){
			aciertos++;
			$("input#usuario8").val(usuario8);
		}
		else{
			$("input#usuario8").val(usuario8);
		}
		if(usuario9==respuesta9){
			aciertos++;
			$("input#usuario9").val(usuario9);
		}
		else{
			$("input#usuario9").val(usuario9);
		}
		//alert(aciertos);
		if(aciertos<=5){
			$("audio").get(9).play();
			aciertos=0;
		}
		if(aciertos>5 && aciertos<7){
			$("audio").get(10).play();
			aciertos=0;
		}
		if(aciertos>8){
			$("audio").get(11).play();
			aciertos=0;
		}
		$("#contenedorFormularios").css("display","block");
		$("#audioCompleto").css("display","block");
	});

	$("#reproducirTodo").click(function(){
		$("audio").get(1).play();
		$("hojaUsuario").append("<a href='actividad5.html'>NEXT</a>")
	});
});




function check(){
cont=0;

// INSTANCIAS

	var traecarlos1=new String( forml1.ingreso1.value ); 
	var traecarlos2=new String( forml1.ingreso2.value ); 
	var traecarlos3=new String( forml1.ingreso3.value ); 
	var traecarlos4=new String( forml1.ingreso4.value ); 
	var traecarlos5=new String( forml1.ingreso5.value ); 
	var traecarlos6=new String( forml1.ingreso6.value ); 
	var traecarlos7=new String( forml1.ingreso7.value ); 
	var traecarlos8=new String( forml1.ingreso8.value ); 
	var traecarlos9=new String( forml1.ingreso9.value ); 
	
	traecarlos1=traecarlos1.toLowerCase();
	traecarlos2=traecarlos2.toLowerCase();
	traecarlos3=traecarlos3.toLowerCase();
	traecarlos4=traecarlos4.toLowerCase();
	traecarlos5=traecarlos5.toLowerCase();
	traecarlos6=traecarlos6.toLowerCase();
	traecarlos7=traecarlos7.toLowerCase();
	traecarlos8=traecarlos8.toLowerCase();
	traecarlos9=traecarlos9.toLowerCase();
	
	
	
	
	
//respuestas	
	var rtacarlos = ["weight lifting","eat fast food","drink beer","talk to friends","take a yoga class","watch drama films","watch adventure films","take a step class","dance"];
	
	if(traecarlos1==rtacarlos[0]){document.getElementById("ingreso1").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";cont++}
		else
		document.getElementById("ingreso1").style.background="white";
		
	if(traecarlos2==rtacarlos[1]){document.getElementById("ingreso2").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";cont++}
		else
			document.getElementById("ingreso2").style.background="white";
		
	if(traecarlos3==rtacarlos[2]){document.getElementById("ingreso3").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";cont++}
		else
			document.getElementById("ingreso3").style.background="white";
		
	if(traecarlos4==rtacarlos[3]){document.getElementById("ingreso4").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";cont++}
		else
			document.getElementById("ingreso4").style.background="white";
		
	if(traecarlos5==rtacarlos[4]){document.getElementById("ingreso5").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";cont++}
		else
			document.getElementById("ingreso5").style.background="white";
		
	if(traecarlos6==rtacarlos[5]){document.getElementById("ingreso6").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";cont++}
		else
			document.getElementById("ingreso6").style.background="white";
		
	if(traecarlos7==rtacarlos[6]){document.getElementById("ingreso7").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";cont++}
		else
			document.getElementById("ingreso7").style.background="white";
		
	if(traecarlos8==rtacarlos[7]){document.getElementById("ingreso8").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";cont++}
		else
			document.getElementById("ingreso8").style.background="white";
		
	if(traecarlos9==rtacarlos[8]){document.getElementById("ingreso9").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";cont++}
		else
			document.getElementById("ingreso9").style.background="white";
	

	

return cont;

}
function compara(){
if(aux==0){
$('#contenedorFormularios').css('display','inline-block');
$('#hojaRespuestas').css('display','none');
$('#imagenes').css('display','none');
$('#informa').css('visibility','hidden');
$('#manito').css('visibility','hidden');
$('#blanco').css('height','100%');
aux++;
}
else
if(aux==1)enviar();

}

function enviar(){

$("#r1").css('display','none');
$(".sig").css('display','none');
resultado(cont,9);


}


