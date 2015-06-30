$("document").ready(function(){
	//alert("funciona jquery4");
	var controlAudio=0;
	var controlOpciones=0;
	var controlentrada1=0;
	var controlentrada2=0;
	var controlentrada3=0;
	var controlentrada4=0;
	var errores1=0;
	var errores2=0;
	var errores3=0;
	var errores4=0;	
	$("input.ingreso").click(function(){
		$("#mostrarBoton").click(function(){
			$("#boton").css("display","inline");
		});
	});
	$("#RDingreso1").focus(function(){
		if(controlentrada1==1 && errores1>0){
			alert("sorry!!");
			$("input[name='Rlikes']").attr('disabled','disabled');
		}
			var RLusuario1=$("input#RLingreso1").val();
			var respuesta1=$("input#CRLingreso1").val();
			var RLusuario2=$("input#RLingreso2").val();
			var respuesta2=$("input#CRLingreso2").val();
			var RLusuario3=$("input#RLingreso3").val();
			var respuesta3=$("input#CRLingreso3").val();
			var RLusuario4=$("input#RLingreso4").val();
			var respuesta4=$("input#CRLingreso4").val();
			var RLusuario5=$("input#RLingreso5").val();
			var respuesta5=$("input#CRLingreso5").val();
			var RLusuario6=$("input#RLingreso6").val();
			var respuesta6=$("input#CRLingreso6").val();
				if(RLusuario1==respuesta1){
					$("input#URLingreso1").val(RLusuario1);
				}	
				else{
					errores1++;
					$("input#URLingreso1").val(RLusuario1);
				}
				if(RLusuario2==respuesta2){
					$("input#URLingreso2").val(RLusuario2);
				}	
				else{
					errores1++;
					$("input#URLingreso2").val(RLusuario2);
				}
				if(RLusuario3==respuesta3){
					$("input#URLingreso3").val(RLusuario3);
				}	
				else{
					errores1++;
					$("input#URLingreso3").val(RLusuario3);
				}
				if(RLusuario4==respuesta4){
					$("input#URLingreso4").val(RLusuario4);
				}	
				else{
					errores1++;
					$("input#URLingreso4").val(RLusuario4);
				}
				if(RLusuario5==respuesta5){
					$("input#URLingreso5").val(RLusuario5);
				}	
				else{
					errores1++;
					$("input#URLingreso5").val(RLusuario5);
				}
				if(RLusuario5==respuesta5){
					$("input#URLingreso5").val(RLusuario5);
				}	
				else{
					errores1++;
					$("input#URLingreso6").val(RLusuario6);
				}
				if(errores1==0){
					alert("well done!");
				}
				else{
					alert("tienes "+ errores1 +" errores en Rose Like, try again");
				}
				controlentrada1++;
	});
	$("#TLingreso1").focus(function(){
		
		if(controlentrada2==1 && errores2>0){
			alert("sorry!!");
			$("input[name='Rdislikes']").attr('disabled','disabled');
		}
			var RDusuario1=$("input#RDingreso1").val();
			var respuesta1=$("input#CRDingreso1").val();
			var RDusuario2=$("input#RDingreso2").val();
			var respuesta2=$("input#CRDingreso2").val();
				if(RDusuario1==respuesta1){
					$("input#URDingreso1").val(RDusuario1);
				}	
				else{
					errores2++;
					$("input#URDingreso1").val(RDusuario1);
				}
				if(RDusuario2==respuesta2){
					$("input#URDingreso2").val(RDusuario2);
				}	
				else{
					errores2++;
					$("input#URDingreso2").val(RDusuario2);
				}
				if(errores2==0){
					alert("well done!");
				}
				else{
					alert("tienes "+ errores2 +" errores en Rose Dislike, try again");
				}
				controlentrada2++;
	});
	$("#TDingreso1").focus(function(){
		
		if(controlentrada3==1 && errores3>0){
			alert("sorry!!");
			$("input[name='Tlikes']").attr('disabled','disabled');
		}
			var TLusuario1=$("input#TLingreso1").val();
			var respuesta1=$("input#CTLingreso1").val();
			var TLusuario2=$("input#TLingreso2").val();
			var respuesta2=$("input#CTLingreso2").val();
			var TLusuario3=$("input#UTLingreso3").val();
			var respuesta3=$("input#CTLingreso3").val();
				if(TLusuario1==respuesta1){
					$("input#UTLingreso1").val(TLusuario1);
				}	
				else{
					errores3++;
					$("input#UTLingreso1").val(TLusuario1);
				}
				if(TLusuario2==respuesta2){
					$("input#UTLingreso2").val(TLusuario2);
				}	
				else{
					errores3++;
					$("input#UTLingreso2").val(TLusuario2);
				}
				if(TLusuario3==respuesta3){
					$("input#UTLingreso3").val(TLusuario3);
				}	
				else{
					errores3++;
					$("input#UTLingreso3").val(TLusuario3);
				}
				if(errores3==0){
					alert("well done!");
				}
				else{
					alert("tienes "+ errores3 +" errores en Tim Like, try again");
				}
				controlentrada3++;
	});
	$("#TDingreso4").focus(function(){
		
		if(controlentrada4==1 && errores4>0){
			alert("sorry!!");
			$("input[name='Tdislikes']").attr('disabled','disabled');
		}
			var TDusuario1=$("input#TDingreso1").val();
			var respuesta1=$("input#CTDingreso1").val();
			var TDusuario2=$("input#TDingreso2").val();
			var respuesta2=$("input#CTDingreso2").val();
				if(TDusuario1==respuesta1){
					$("input#UTDingreso1").val(TDusuario1);
				}	
				else{
					errores4++;
					$("input#UTDingreso1").val(TDusuario1);
				}
				if(TDusuario2==respuesta2){
					$("input#UTDingreso2").val(TDusuario2);
				}	
				else{
					errores4++;
					$("input#UTDingreso2").val(TDusuario2);
				}
				if(errores4==0){
					alert("well done!");
				}
				else{
					alert("tienes "+ errores4 +" errores en Tim Dislike, try again");
				}
				controlentrada4++;
				$("#boton").css("display","inline-block");
	});
	$(".reproducir").click(function(){
		$("audio").get(controlAudio).play();
		controlOpciones++;
		if(controlOpciones==3){
			alert("no se pueden realizar mas intentos");
			controlAudio = 1000;
		}
	});
	$("#formulario").click(function(){
		$("#texto").css("display","inline-block");
		$("#ocultos").css("display","inline-block");
	});
});