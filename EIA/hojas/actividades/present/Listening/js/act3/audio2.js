$("document").ready(function(){

	var ctrl2=0,ctrl3=0;
	var controlReproduccion=0;
	var controlPregunta=0;
	var controlRespuesta=0;
	var time;
	var controlAudio=0;
	//metodo para controlar el audio principal








		$("#audio1 #reproducir").click(function(){
	
	$("#radio").get(controlReproduccion).play();
		$("#reproducir").css('display','none');
		$(".tossing").css('animation','none');
		$(".tossing").css('-webkit-animation','none');
		
		
		
		$("#reproducir2").css('display','inline-block');
		controlAudio++;
		
		if(controlAudio>3){
			
			$("#reproducir").css('display','none');
			document.getElementById("continuar").click();
		}else
		{
		
		
		$("#radio").get(controlReproduccion).play();
		$("#reproducir").css('display','none');
		$("#reproducir2").css('display','inline-block');
		}
		
	
		time=document.getElementById("continuar");
		setTimeout(function(){
			$("#reproducir2").css('display','none');
			$("#reproducir").css('display','inline-block');
			},43200);


			if (controlAudio==1){
			$('#perendengues1').css('pointer-events','auto'); 
			document.getElementById("primero").checked = true;
			$('#perendengues1').css('pointer-events','none');

		}
		if (controlAudio==2){
			$('#perendengues1').css('pointer-events','auto'); 
			document.getElementById("segundo").checked = true;
			$('#perendengues1').css('pointer-events','none'); 
		}
		if (controlAudio==3){
			$('#perendengues1').css('pointer-events','auto'); 
			document.getElementById("tercero").checked = true;
			$('#perendengues1').css('pointer-events','none'); 
			$("#reproducir").css('opacity','0.4');
			$('#reproducir').css('pointer-events','none');
			/*$("#reproduce00").css('opacity','0.4');
			$('#reproduce00').css('pointer-events','none');*/
		}
	
	
	});
	
		
		
	
	
		
	
	
	
	
	

	
	
	
	
	//tres metodos para controlar los audios de cada pregunta
	$("#q1").mouseover(function(){
		$(".preguntasAudio1").click(function(){
			$("audio").get(1).play();
		});
	});
	$("#q2").mouseover(function(){
		$(".preguntasAudio2").click(function(){
			$("audio").get(1).pause();
			$("audio").get(2).play();
		});
	});
	$("#q3").mouseover(function(){
		$(".preguntasAudio3").click(function(){
			$("audio").get(1).pause();
			$("audio").get(2).pause();
			$("audio").get(3).play();
		});
	});



});




