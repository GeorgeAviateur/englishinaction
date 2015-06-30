var aux=0;
var contar=[0,0,0,0,0,0,0,0,0];
var aud=[0,0,0,0,0,0,0,0,0];
var cuentabien=0;
var Index=0;

$(document).ready(function(){
	var controlAudio=-1;
	var controlOpciones=0;
	var aciertos=0;
	//alert("funciona jquery tambien");
		document.getElementById('primero').disabled=true;
	document.getElementById('segundo').disabled=true;
	document.getElementById('tercero').disabled=true;
	document.getElementById('primero1').disabled=true;
	document.getElementById('segundo1').disabled=true;
	document.getElementById('tercero1').disabled=true;
	document.getElementById('primero2').disabled=true;
	document.getElementById('segundo2').disabled=true;
	document.getElementById('tercero2').disabled=true;
	document.getElementById('primero3').disabled=true;
	document.getElementById('segundo3').disabled=true;
	document.getElementById('tercero3').disabled=true;
	document.getElementById('primero4').disabled=true;
	document.getElementById('segundo4').disabled=true;
	document.getElementById('tercero4').disabled=true;
	document.getElementById('primero5').disabled=true;
	document.getElementById('segundo5').disabled=true;
	document.getElementById('tercero5').disabled=true;
	document.getElementById('primero6').disabled=true;
	document.getElementById('segundo6').disabled=true;
	document.getElementById('tercero6').disabled=true;
	document.getElementById('primero7').disabled=true;
	document.getElementById('segundo7').disabled=true;
	document.getElementById('tercero7').disabled=true;
	document.getElementById('primero8').disabled=true;
	document.getElementById('segundo8').disabled=true;
	document.getElementById('tercero8').disabled=true;
	
	
	
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
		
		
		$("#contenedorFormularios").css("display","block");
		$("#audioCompleto").css("display","block");
	});
	
	

	$("#reproducirTodo").click(function(){
		$("audio").get(1).play();
		$("hojaUsuario").append("<a href='actividad5.html'>NEXT</a>")
	});
	
	//$("#Container").css("display","table-cell");
});




function capturar(NUMBER){
	
	
	/*  SI REVISA PRIMERA IMAGEN*/	
	if(NUMBER==1){
		var traecarlos1=new String( form1.weight_lifting.value );
		traecarlos1=traecarlos1.toLowerCase();
		
		if(traecarlos1=="weight lifting"){
			cuentabien++;
			document.getElementById('see1').style.border="4px solid #44af81";
			document.getElementById('e1').style.visibility="hidden";
			document.getElementById('bien').play();
			}
			else{
				if(contar[0]==0){
					document.getElementById('tryA').play();
					contar[0]++;
				}
					else
						if(contar[0]>0){
							$('#ti1').css('display','inline-block');
							document.getElementById('see1').style.border="4px solid #d9364d";
							document.getElementById('e1').style.visibility="hidden";
							document.getElementById('thecorrect').play();
							 auto=setTimeout(function(){
        					 document.getElementById('rta1').play(); },2700);
        				     
							}
			}
	}
	/*  SI REVISA SEGUNDA IMAGEN*/	
	if(NUMBER==2){

		var traecarlos1=new String( form1.eat_fast_food.value );
		traecarlos1=traecarlos1.toLowerCase();
		
		if(traecarlos1=="eat fast food"){
			cuentabien++;
			document.getElementById('see2').style.border="4px solid #44af81";
			document.getElementById('e2').style.visibility="hidden";
			document.getElementById('bien').play();
			}
			else{
				if(contar[1]==0){
					document.getElementById('tryA').play();
					contar[1]++;
				}
					else
						if(contar[1]>0){
							$('#ti2').css('display','inline-block');
							document.getElementById('see2').style.border="4px solid #d9364d";
							document.getElementById('thecorrect').play();
							document.getElementById('e2').style.visibility="hidden";
							auto=setTimeout(function(){
        					 document.getElementById('rta2').play(); },2700);

							}
			}
	}
	
	/*  SI REVISA TERCERA IMAGEN*/	
	if(NUMBER==3){
		var traecarlos1=new String( form1.drink_beer.value );
		traecarlos1=traecarlos1.toLowerCase();
		
		if(traecarlos1=="drink beer"){
			cuentabien++;
			document.getElementById('see3').style.border="4px solid #44af81";
			document.getElementById('e3').style.visibility="hidden";
			document.getElementById('bien').play();
			}
			else{
				if(contar[2]==0){
					document.getElementById('tryA').play();
					contar[2]++;
				}
					else
						if(contar[2]>0){
							$('#ti3').css('display','inline-block');
							document.getElementById('see3').style.border="4px solid #d9364d";
							document.getElementById('thecorrect').play();
							document.getElementById('e3').style.visibility="hidden";
							auto=setTimeout(function(){
        					 document.getElementById('rta3').play(); },2700);
							}
			}
	}
	
	/*  SI REVISA CUARTA IMAGEN*/	
	if(NUMBER==4){
		var traecarlos1=new String( form1.talk_to_friends.value );
		traecarlos1=traecarlos1.toLowerCase();
		
		if(traecarlos1=="talk to friends"){
			cuentabien++;
			document.getElementById('see4').style.border="4px solid #44af81";
			document.getElementById('e4').style.visibility="hidden";
			document.getElementById('bien').play();
			}
			else{
				if(contar[3]==0){
					document.getElementById('tryA').play();
					contar[3]++;
				}
					else
						if(contar[3]>0){
							$('#ti4').css('display','inline-block');
							document.getElementById('see4').style.border="4px solid #d9364d";
							document.getElementById('thecorrect').play();
							document.getElementById('e4').style.visibility="hidden";
							auto=setTimeout(function(){
        					 document.getElementById('rta4').play(); },2700);
							}
			}
	}
	
	/*  SI REVISA QUINTA IMAGEN*/	
	if(NUMBER==5){
		var traecarlos1=new String( form1.take_a_yoga_class.value );
		traecarlos1=traecarlos1.toLowerCase();
		
		if(traecarlos1=="take a yoga class"){
			cuentabien++;
			document.getElementById('see5').style.border="4px solid #44af81";
			document.getElementById('e5').style.visibility="hidden";
			document.getElementById('bien').play();
			}
			else{
				if(contar[4]==0){
					document.getElementById('tryA').play();
					contar[4]++;
				}
					else
						if(contar[4]>0){
							$('#ti5').css('display','inline');
							document.getElementById('see5').style.border="4px solid #d9364d";
							document.getElementById('thecorrect').play();
							document.getElementById('e5').style.visibility="hidden";
							auto=setTimeout(function(){
        					 document.getElementById('rta5').play(); },2700);
							}
			}
	}
	
	/*  SI REVISA SEXTA IMAGEN*/	
	if(NUMBER==6){
		var traecarlos1=new String( form1.watch_drama_films.value );
		traecarlos1=traecarlos1.toLowerCase();
		
		if(traecarlos1=="watch drama films"){
			cuentabien++;
			document.getElementById('see6').style.border="4px solid #44af81";
			document.getElementById('e6').style.visibility="hidden";
			document.getElementById('bien').play();
			}
			else{
				if(contar[5]==0){
					document.getElementById('tryA').play();
					contar[5]++;
				}
					else
						if(contar[5]>0){
							$('#ti6').css('display','inline');
							document.getElementById('see6').style.border="4px solid #d9364d";
							document.getElementById('thecorrect').play();
							document.getElementById('e6').style.visibility="hidden";
							auto=setTimeout(function(){
        					 document.getElementById('rta6').play(); },2700);
							}
			}
	}
	/*  SI REVISA SEPTIMA IMAGEN*/
	if(NUMBER==7){
		var traecarlos1=new String( form1.watch_adventure_films.value );
		traecarlos1=traecarlos1.toLowerCase();
		
		if(traecarlos1=="watch adventure films"){
			cuentabien++;
			document.getElementById('see7').style.border="4px solid #44af81";
			document.getElementById('e7').style.visibility="hidden";
			document.getElementById('bien').play();
			}
			else{
				if(contar[6]==0){
					document.getElementById('tryA').play();
					contar[6]++;
				}
					else
						if(contar[6]>0){
							$('#ti7').css('display','inline');
							document.getElementById('see7').style.border="4px solid #d9364d";
							document.getElementById('thecorrect').play();
							document.getElementById('e7').style.visibility="hidden";
							auto=setTimeout(function(){
        					 document.getElementById('rta7').play(); },2700);
							}
			}
	}
	/*  SI REVISA OCTAVA IMAGEN*/
	if(NUMBER==8){
		var traecarlos1=new String( form1.take_a_step_class.value );
		traecarlos1=traecarlos1.toLowerCase();
		
		if(traecarlos1=="take a step class"){
			cuentabien++;
			document.getElementById('see8').style.border="4px solid #44af81";
			document.getElementById('e8').style.visibility="hidden";
			document.getElementById('bien').play();
			}
			else{
				if(contar[7]==0){
					document.getElementById('tryA').play();
					contar[7]++;
				}
					else
						if(contar[7]>0){
							$('#ti8').css('display','inline');
							document.getElementById('see8').style.border="4px solid #d9364d";
							document.getElementById('thecorrect').play();
							document.getElementById('e8').style.visibility="hidden";
							auto=setTimeout(function(){
        					 document.getElementById('rta8').play(); },2700);
							}
			}
	}
	/*  SI REVISA NOVENA IMAGEN*/
	if(NUMBER==9){
		$("#sig").css('opacity','1');
		var traecarlos1=new String( form1.dance.value );
		traecarlos1=traecarlos1.toLowerCase();
		
		if(traecarlos1=="dance"){
			cuentabien++;
			document.getElementById('see9').style.border="4px solid #44af81";
			document.getElementById('e9').style.visibility="hidden";
			document.getElementById('bien').play();
			}
			else{
				if(contar[8]==0){
					document.getElementById('tryA').play();
					contar[8]++;
				}
					else
						if(contar[8]>0){
							$('#ti9').css('display','inline');
							document.getElementById('see9').style.border="4px solid #d9364d";
							document.getElementById('thecorrect').play();
							document.getElementById('e9').style.visibility="hidden";
							auto=setTimeout(function(){
        					 document.getElementById('rta9').play(); },2700);
							}
			}
	}
	

	
	
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

function finaliza(){
	$("#perendengues9").css('display','none');
	$(".perendengues").css('display','none');
	$("#r1").css('display','none');
	$(".sig").css('display','none');
	$('.prev').css('display','none');
	$('div#rep').css('display','none');
	 $('#rep').css('display','none');
	 
	
	$('#perendengues1').css('display','none');
	
	
	
	resultado(cuentabien,9);
}
/*
function carga(){
	
	
			$('#hojaRespuesta form').css('display','none');
			
			
			
			/* para pasar de imagenes es mejor usar el jquery que ocultará el slider y mostrará las imagenes, luego mostrar de nue
			auto=setTimeout(function(){
				document.getElementById('imagen1').value=rta[0]; 
				document.getElementById('She loves listening to music').click(); 
				
				},0500);
			
			auto=setTimeout(function(){
				document.getElementById('imagen1').value=rta[9];
				document.getElementById('She hates horror movies').click();
				//document.getElementById('a2').play();
				},4000);
			
			auto=setTimeout(function(){
				document.getElementById('imagen1').value=rta[8];
				document.getElementById("He doesn't like exercising").click();
				
				//document.getElementById('ola2').click();
				//document.getElementById('a3').play();
				},8000);
			
			auto=setTimeout(function(){
				document.getElementById('imagen1').value=rta[7]; 
				document.getElementById('She loves going to the gym').click(); 
				//document.getElementById('a4').play();
				},12000);
			
			auto=setTimeout(function(){
				document.getElementById('imagen1').value=rta[6];
				document.getElementById('They enjoy doing exercise').click();
				//document.getElementById('a5').play();
				},17000);
			
			auto=setTimeout(function(){
				document.getElementById('imagen1').value=rta[5];
				document.getElementById('They love going to the movies').click();
				//document.getElementById('a6').play();
				},21250);
			
			auto=setTimeout(function(){
				document.getElementById('imagen1').value=rta[4];
				document.getElementById('They enjoy dancing').click();
				//document.getElementById('a7').play();xx=1;
				},26100);
				
			auto=setTimeout(function(){
				document.getElementById('imagen1').value=rta[3]; 
				document.getElementById("He doesn't like whiskey").click();
				//document.getElementById('a7').play();xx=1; 
				},30000);
				
			auto=setTimeout(function(){
				document.getElementById('imagen1').value=rta[2];
				document.getElementById('They like cocktails').click();
				//document.getElementById('a7').play();xx=1;
				},33000);
			
			auto=setTimeout(function(){
				document.getElementById('imagen1').value=rta[1];
				
				//document.getElementById('a7').play();
				document.getElementById('He likes hamburgers').click();},36220);

			auto=setTimeout(function(){ document.getElementById('imagen1').value=rta[0]; document.getElementById('She loves listening to music').click()
			//document.getElementById('a1').play();
			document.getElementById('label').innerHTML="Select an image for:";prime();
			},39370);
			
			


}
*/


	var intents=[0,0,0,0,0,0,0,0,0];
function reproduceAudio(){
	
	
	
	if(Index==0){
		
		if(intents[0]<3){
		document.getElementById('rta1').play();
		
		}
		if(intents[0]==0){
		$('#perendengues3').css('pointer-events','auto'); 
        document.getElementById("primero").checked = true;
        $('#perendengues3').css('pointer-events','none');
        }
		else
		if(intents[0]==1){
		$('#perendengues3').css('pointer-events','auto'); 
        document.getElementById("segundo").checked = true; 
		$('#perendengues3').css('pointer-events','none'); 
        }
		if(intents[0]==2){
		$('#perendengues3').css('pointer-events','auto'); 
        document.getElementById("tercero").checked = true;
		$('#perendengues3').css('pointer-events','none'); 
        }
		
		intents[0]++;
	}
	
	
	if(Index==1){
		
		if(intents[1]<3)
		document.getElementById('rta2').play();
		
		if(intents[1]==0){
        document.getElementById("primero1").checked = true;
        }
		else
		if(intents[1]==1){
        document.getElementById("segundo1").checked = true; 
        }
		if(intents[1]==2){
        document.getElementById("tercero1").checked = true;
        }
		intents[1]++;
	}
	
	
	if(Index==2){
		
		if(intents[2]<3)
		document.getElementById('rta3').play();
		
		if(intents[2]==0){
        document.getElementById("primero2").checked = true;
        }
		else
		if(intents[2]==1){
        document.getElementById("segundo2").checked = true; 
        }
		if(intents[2]==2){
        document.getElementById("tercero2").checked = true;
        }
		intents[2]++;
	}
	
	
	if(Index==3){
		
		if(intents[3]<3)
		document.getElementById('rta4').play();
		
		if(intents[3]==0){
        document.getElementById("primero3").checked = true;
        }
		else
		if(intents[3]==1){
        document.getElementById("segundo3").checked = true; 
        }
		if(intents[3]==2){
        document.getElementById("tercero3").checked = true;
        }
		intents[3]++;
	}
		
	if(Index==4){
		
		if(intents[4]<3)
		document.getElementById('rta5').play();
		
		if(intents[4]==0){
        document.getElementById("primero4").checked = true;
        }
		else
		if(intents[4]==1){
        document.getElementById("segundo4").checked = true; 
        }
		if(intents[4]==2){
        document.getElementById("tercero4").checked = true;
        }
		intents[4]++;
	}
	if(Index==5){
		
		if(intents[5]<3)
		document.getElementById('rta6').play();
		
		if(intents[5]==0){
        document.getElementById("primero5").checked = true;
        }
		else
		if(intents[5]==1){
        document.getElementById("segundo5").checked = true; 
        }
		if(intents[5]==2){
        document.getElementById("tercero5").checked = true;
        }
		intents[5]++;
	}
	
	if(Index==6){
		
		if(intents[6]<3)
		document.getElementById('rta7').play();
		
		if(intents[6]==0){
        document.getElementById("primero6").checked = true;
        }
		else
		if(intents[6]==1){
        document.getElementById("segundo6").checked = true; 
        }
		if(intents[6]==2){
        document.getElementById("tercero6").checked = true;
        }
		intents[6]++;
	}
	
	
		if(Index==7){
		
		if(intents[7]<3)
		document.getElementById('rta8').play();
		if(intents[7]==0){
        document.getElementById("primero7").checked = true;
        }
		else
		if(intents[7]==1){
        document.getElementById("segundo7").checked = true; 
        }
		if(intents[7]==2){
        document.getElementById("tercero7").checked = true;
        }
		intents[7]++;
	}
		if(Index==8){
		
		if(intents[8]<8)
		document.getElementById('rta9').play();
		
		if(intents[8]==0){
        document.getElementById("primero8").checked = true;
        }
		else
		if(intents[8]==1){
        document.getElementById("segundo8").checked = true; 
        }
		if(intents[8]==2){
        document.getElementById("tercero8").checked = true;
        }
		intents[8]++;
	}
		
	
}


function llevameLejos(_CurrentIndex){
	Index=_CurrentIndex;
}
function carga(){
	$('div#rep').css('display','inline');
	 $('#rep').css('display','block');
	 
	
	$('.perendengues').css('visibility','visible');
	
	
	
	
	}
	