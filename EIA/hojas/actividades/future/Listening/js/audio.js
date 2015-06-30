$("document").ready(function(){

	var controlAudio=0,ctrl2=0,ctrl3=0;
	var controlReproduccion=0;
	var controlPregunta=0;
	var controlRespuesta=0;
	var time;
	//metodo para controlar el audio principal
	$("#audio1 #reproducir").click(function(){
	
	
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
			},55000);
	
	
	});
	
	
	
	
	$("#audio2 #reproducir").click(function(){
		ctrl2++;
		
		if(ctrl2>3){
			
			$("#audio2 #reproducir").css('display','none');
			document.getElementById("continuar").click();
		}else
		{
		
		
		$("#radio2").get(controlReproduccion).play();
		$("#audio2 #reproducir").css('display','none');
		$("#audio2 #reproducir2").css('display','inline-block');
		}
		
	
		
		setTimeout(function(){
			$("#audio2 #reproducir2").css('display','none');
			$("#audio2 #reproducir").css('display','inline-block');
			},20000);
	
	
	});
	
	
	
		$("#audio3 #reproducir").click(function(){
		
		ctrl3++;
		if(ctrl3>3){
			
			$("#audio3 #reproducir").css('display','none');
			document.getElementById("continuar").click();
		}else
		{
		
		
		$("#radio3").get(controlReproduccion).play();
		$("#audio3 #reproducir").css('display','none');
		$("#audio3 #reproducir2").css('display','inline-block');
		}
		
	
		
		setTimeout(function(){
			$("#audio3 #reproducir2").css('display','none');
			$("#audio3 #reproducir").css('display','inline-block');
			},20000);
	
	
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




