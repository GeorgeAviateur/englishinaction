$(document).ready(function() {



    $('.slideshow').cycle({
		fx: 'zoom',
		next: '#next',
		prev: '#previous',
		timeout: '20000'// choose your transition type, ex: fade, scrollUp, shuffle, etc...
	});
    var controlAudio=1;
    var controlRespuesta;
    var controlImagen;
    var contadorBuenas=0;
    var contadorMalas=0;
    document.getElementById("reproducir").addEventListener("click",reproducirAudio);
    document.getElementById("imagen1").addEventListener("click",validarRespuestaImagen1);
    document.getElementById("imagen2").addEventListener("click",validarRespuestaImagen2);
    document.getElementById("imagen3").addEventListener("click",validarRespuestaImagen3);
    document.getElementById("imagen4").addEventListener("click",validarRespuestaImagen4);
    document.getElementById("imagen5").addEventListener("click",validarRespuestaImagen5);
    document.getElementById("imagen6").addEventListener("click",validarRespuestaImagen6);
    document.getElementById("imagen7").addEventListener("click",validarRespuestaImagen7);    
    
    function validarRespuestaImagen1() {
        if (controlRespuesta==1) {
            alert("la respuesta es correcta");
	    contadorBuenas++;
        }
        else{
            alert("la respuesta es incorrecta");
	    contadorMalas++;
        }
	$("#contadorBien").text(""+contadorBuenas);
	$("#contadorMal").text(""+contadorMalas);
    }
     function validarRespuestaImagen2() {
        if (controlRespuesta==2) {
            alert("la respuesta es correcta");
	    contadorBuenas++;
        }
        else{
            alert("la respuesta es incorrecta");
	    contadorMalas++;
        }
	$("#contadorBien").text(""+contadorBuenas);
	$("#contadorMal").text(""+contadorMalas);
    }
    function validarRespuestaImagen3() {
        if (controlRespuesta==3) {
            alert("la respuesta es correcta");
	    contadorBuenas++;
        }
        else{
            alert("la respuesta es incorrecta");
	    contadorMalas++;
        }
	$("#contadorBien").text(""+contadorBuenas);
	$("#contadorMal").text(""+contadorMalas);
        
    }
    function validarRespuestaImagen4() {
        if (controlRespuesta==4) {
            alert("la respuesta es correcta");
	    contadorBuenas++;
        }
        else{
            alert("la respuesta es incorrecta");
	    contadorMalas++;
        }
	$("#contadorBien").text(""+contadorBuenas);
	$("#contadorMal").text(""+contadorMalas);
        
    }
    function validarRespuestaImagen5() {
        if (controlRespuesta==5) {
            alert("la respuesta es correcta");
	    contadorBuenas++;
        }
        else{
            alert("la respuesta es incorrecta");
	    contadorMalas++;
        }
	$("#contadorBien").text(""+contadorBuenas);
	$("#contadorMal").text(""+contadorMalas);
        
    }
    function validarRespuestaImagen6() {
        if (controlRespuesta==6) {
            alert("la respuesta es correcta");
	    contadorBuenas++;
        }
        else{
            alert("la respuesta es incorrecta");
	    contadorMalas++;
        }
	$("#contadorBien").text(""+contadorBuenas);
	$("#contadorMal").text(""+contadorMalas);
    
    }
    function validarRespuestaImagen7() {
        if (controlRespuesta==7) {
            alert("la respuesta es correcta");
	    contadorBuenas++;
        }
        else{
            alert("la respuesta es incorrecta");
	    contadorMalas++;	    
        }
	if (controlAudio==7) {
	    controlRespuesta=null;
	}
	$("#contadorBien").text(""+contadorBuenas);
	$("#contadorMal").text(""+contadorMalas);
    
    }
    
    function reproducirAudio(){
        switch(controlAudio){        
            case 1: {
                var audio=document.getElementById("audio1");
                audio.play();
                controlRespuesta=1;
                controlAudio++;
                }
            break;
            case 2: {
                var audio=document.getElementById("audio2");
                audio.play();
                controlRespuesta=2;
                controlAudio++;
            break;
            }      
            case 3: {
                var audio=document.getElementById("audio3");
                audio.play();
                controlRespuesta=3;
                controlAudio++;
                }
            break;
            case 4: {
                var audio=document.getElementById("audio4");
                audio.play();
                controlRespuesta=4;
                controlAudio++;
            break;
            }      
            case 5: {
                var audio=document.getElementById("audio5");
                audio.play();
                controlRespuesta=5;
                controlAudio++;
                }
            break;
            case 6: {
                var audio=document.getElementById("audio6");
                audio.play();
                controlRespuesta=6;
                controlAudio++;
            break;
            }
            case 7: {
                var audio=document.getElementById("audio7");
                audio.play();
                controlRespuesta=7;
                controlAudio++;
            break;
            }
        }
    }
	$("#continuar").click(function(){$("#r1").css('display','none');$('#reproducir').css('display','none');$("#continuar").css('display','none');resultado(contadorBuenas,7);});
});
