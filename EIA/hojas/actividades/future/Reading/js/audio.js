$("document").ready(function(){

	var ctrl2=0,ctrl3=0;
	var controlReproduccion=0;
	var controlPregunta=0;
	var controlRespuesta=0;
	var time;
	//metodo para controlar el audio principal
	$("#audio1 #reproducir").click(function(){
		
		$("#radio").get(controlReproduccion).play();
		$("#reproducir").css('display','none');
		$(".tossing").css('animation','none');
		$(".tossing").css('-webkit-animation','none');
		$("#reproducir2").css('display','inline-block');
		
		
	
	
		
	
	
	});
	$("#audio1 #reproducir2").click(function(){
		
		$("#radio").get(controlReproduccion).pause();
		$("#reproducir2").css('display','none');
		$("#reproducir").css('display','inline-block');
		
		
		
	
	
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




