$("document").ready(function(){
    $("input").keypress(function(event) {
         if(event.which== '13'){
            return false;
         }
    });
    
	var audio=0;
    var arregloPreguntas=['What is your favorite food?','Do you like going to the gym?','Why do you like science fiction films?','Does your mother like cooking pasta?','What do you usually do in your free time?'];
	var aux=0,cont=0;
	var cuentabien=0;
    
	$("#reproducir").click(reproducirAudio);
    $(".verificarRespuesta").click(validarRespuesta);
		
		function reproducirAudio() {
			if(audio==0){
				$("audio").get(0).play();
				audio=1;
				
				}
				else	
					if(audio==1){
						$("audio").get(0).pause();
						audio=0;
						}
		}
	
		function validarRespuesta() {
			var indice = document.form.miSelect.selectedIndex;
			cont++;
			if(aux==3)
				if (indice==0 && document.getElementById('cuadro4').value==arregloPreguntas[3]){
					$("audio").get(1).play();
					alert("good job");
					$("input#cuadro5").css('display','inline');
					$("input#cuadro4").css('display', 'none');
					aux++;
					cuentabien++;
					}
					else{
						$("audio").get(2).play();
						if(cont==2){
							aux++;
							cont=0;
							$("input#cuadro5").css('display','inline');
							$("input#cuadro4").css('display', 'none');
							alert("Sorry! :( \n you dont have more chances");
							}
							else{
								if(indice!=0)
									alert("Sorry, Try again: review you answer");
								if(document.getElementById('cuadro4').value!=arregloPreguntas[3])
									alert("Sorry, Try again: review you question");
								}
						}
										
			else
				if(aux==4)
					if (indice==1 && document.getElementById('cuadro5').value==arregloPreguntas[4]) {
						$("audio").get(1).play();
						alert("good job");
						
						resul();
						aux++;
						cuentabien++;
						}
						else{
							$("audio").get(2).play();
							if(cont==2){
								aux++;cont=0;
								alert("Sorry! :( \n you dont have more chances");
								resul();
								
								}
								else{
								
								if(indice!=1)
									alert("Sorry, Try again: review you answer");
								if(document.getElementById('cuadro5').value!=arregloPreguntas[4])
									alert("Sorry, Try again: review you question");
									
								}
						
			}
			else
				if(aux==1){
					if (indice==2 && document.getElementById('cuadro2').value==arregloPreguntas[1]) {
						$("audio").get(1).play();
						alert("good job");
						$("input#cuadro3").css('display','inline');
						$("input#cuadro2").css('display', 'none');
						aux++;
						cuentabien++;
						}
						else{
							$("audio").get(2).play();
							if(cont==2){
								aux++;cont=0;
								$("input#cuadro3").css('display','inline');
								$("input#cuadro2").css('display', 'none');
								alert("Sorry! :( \n you dont have more chances");
								}
							else
								{
								
								if(indice!=2)
									alert("Sorry, Try again: review you answer");
								if(document.getElementById('cuadro2').value!=arregloPreguntas[1])
									alert("Sorry, Try again: review you question");
									
								}
							}
			}
			
			else
				if(aux==0)
					if (indice==3 && document.getElementById('cuadro1').value==arregloPreguntas[0]) {
							$("audio").get(1).play();
							alert("good job");
							$("input#cuadro2").css('display','inline');
							$("input#cuadro1").css('display', 'none');
							cuentabien++;
							aux++;
							cont=0;
							}
							else{
								$("audio").get(2).play();
								if(cont==2){
									aux++;
									cont=0;
									$("input#cuadro2").css('display','inline');
									$("input#cuadro1").css('display', 'none');
									alert("Sorry! :( \n you dont have more chances");
									}
									else{								
										if(indice!=3)
											alert("Sorry, Try again: review you answer");
										if(document.getElementById('cuadro1').value!=arregloPreguntas[0])
											alert("Sorry, Try again: review you question");
									}
			}
			else
				if(aux==2)
					if (indice==4 && document.getElementById('cuadro3').value==arregloPreguntas[2]) {
						$("audio").get(1).play();
						alert("good job");
						$("input#cuadro4").css('display','inline');
						$("input#cuadro3").css('display', 'none');
						aux++;
						cuentabien++;
						}
							else{
								$("audio").get(2).play();
								if(cont==2){
									aux++;
									cont=0;
									$("input#cuadro4").css('display','inline');
									$("input#cuadro3").css('display', 'none');
									alert("Sorry! :( \n you dont have more chances");
									}
									else{
										if(indice!=4)
											alert("Sorry, Try again: review you answer");
										if(document.getElementById('cuadro3').value!=arregloPreguntas[2])
											alert("Sorry, Try again: review you question");
							}
			}
        }
});


function resul(){
	$("#continuar").css('display', 'none');
	$("#reproducir").css('display', 'none');
	$('#r1').css('display','none');
	$('.sig').css('display','none');
	
	
	resultado(cuentabien,5);
	}
