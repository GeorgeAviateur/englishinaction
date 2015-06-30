var aux=0;
var pasar=0;
var fin=0;
var audio1, audio2, audio3;
var cont1=0,cont2=0,cont3=0;
var cuentabien=0,cuentabien1=0,cuentabien2=0,cuentabien3=0,cont=0;
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*    ACCIONES PARA LA ACTIVIDAD NUMERO 2 DE READING*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function enviar_formulario(tipo){
if(tipo==0)
   check(document.formulario1,0);
if(tipo==1)
   check(document.formulario2,1);
if(tipo==2)
   check(document.formulario3,2);

} 
function carga(){
		
$('#sig').css('opacity', '1');
	audio1 = document.getElementById("au1");
	audio2 = document.getElementById("au2");
	audio3 = document.getElementById("au3");
	pasar=1;
   $('#informa').css('opacity', '.1');
	temp = setTimeout(function () {
		$('#informa').css('opacity', '1');
	}, 30000);
	$('#plane').addClass("muestrame");
		
	}

function rueda(valorGiro){




	if(valorGiro==0&&cont1<3){
		$('#boton2').css('display','none');
		$('#boton3').css('display','none');
		$('#boton1').css('display','inline-block');
		}
		else
			if(valorGiro==0&&cont1>2){
				
				
		$('#boton2').css('display','none');
		$('#boton3').css('display','none');
		$('#boton1').css('display','none');
		
		$('#botonRetro1').css('display','none');
		$('#botonRetro3').css('display','none');
		$('#botonRetro2').css('display','none');

		$('#botonRetro1').css('display','inline-block');
				
			}
	
	if(valorGiro==1&&cont2<3){
		$('#boton1').css('display','none');
		$('#boton3').css('display','none');
		$('#boton2').css('display','inline-block');
		$('#botonRetro1').css('display','none');
		$('#botonRetro3').css('display','none');
		$('#botonRetro2').css('display','none');
		}
		else
			if(valorGiro==1&&cont2>2){
				
		$('#boton2').css('display','none');
		$('#boton3').css('display','none');
		$('#boton1').css('display','none');
		
		
		$('#botonRetro1').css('display','none');
		$('#botonRetro3').css('display','none');
		$('#botonRetro2').css('display','none');

		$('#botonRetro2').css('display','inline-block');
				
			}
	
	if(valorGiro==2&&cont3<3){
		$('#boton2').css('display','none');
		$('#boton1').css('display','none');
		$('#boton3').css('display','inline-block');
				$('#botonRetro1').css('display','none');
		$('#botonRetro3').css('display','none');
		$('#botonRetro2').css('display','none');
		}
		else
			if(valorGiro==2&&cont3>2){
				
		$('#boton2').css('display','none');
		$('#boton3').css('display','none');
		$('#boton1').css('display','none');
		
		$('#botonRetro1').css('display','none');
		$('#botonRetro3').css('display','none');
		$('#botonRetro2').css('display','none');
		
		$('#botonRetro3').css('display','inline-block');
				
			}
	
}
function activa(id,ac){
	
	if(id==1){
		
		$('#card1').css('display','inline-block');
		$('#card1').css('display','table');
		$('#card2').css('display','none');
		$('#card3').css('display','none');
		$('.contImage img').css('top','5%');
		
		if(ac!=2){
		$('#title').css('display','inline-block');
		$('#title3').css('display','none');
		$('#title2').css('display','none');
		}
		
		if(ac!=0){
		$('#audio1').css('display','inline-block');
		$('#audio2').css('display','none');
		$('#audio3').css('display','none');
		
		}
		
	}
	if(id==2){
	
		$('#card1').css('display','none');
		$('#card2').css('display','inline-block');
		$('#card2').css('display','table');
		$('#card3').css('display','none');
		$('.contImage img').css('top','5%');		
		if(ac!=2){
		$('#title3').css('display','none');
		$('#title2').css('display','inline-block');
		$('#title').css('display','none');
		}
		if(ac!=0){
		$('#audio2').css('display','inline-block');
		$('#audio1').css('display','none');
		$('#audio3').css('display','none');
	
		}
		
	}
	if(id==3){
	
		$('#card1').css('display','none');
		$('#card2').css('display','none');
		$('#card3').css('display','inline-block');
		$('#card3').css('display','table');
$('.contImage img').css('top','5%');		
		if(ac!=2){
		$('#title3').css('display','inline-block');
		$('#title2').css('display','none');
		$('#title').css('display','none');
		}
		if(ac!=0){
		$('#audio3').css('display','inline-block');
		$('#audio2').css('display','none');
		$('#audio1').css('display','none');
	
		
		}
		}

}

function cuadro(){


if(pasar==1){
	$('#void').css('display','none');
	$('#r1 aside').css('display','none');
	
	$('.sig2').css('display','inline');
	$('.sig').css('display','none');
	$('#cuadro').css('display','inline');
	$('#cuadro2').css('display','none');
	$('#cuadro3').css('display','none');


	$('.check').css('display','inline');
	$('.prev2').css('display','inline');
	$('.prev').css('display','none');
	
	$('#blanco').css('display','inline-block');
	

	
	$('#title').css('display','none');
	$('#title2').css('display','none');
	$('#title3').css('display','none');
	$('#title4').css('display','inline');
}
}



function sincuadro(){
	$('#void').css('display','inline-block');
	$('#r1 aside').css('display','inline-block');
	
	$('.sig2').css('display','none');
	$('.sig').css('display','inline-block');
	$('#cuadro').css('display','none');
	$('#cuadro2').css('display','inline-block');
	$('#cuadro3').css('display','inline-block');


	$('.check').css('display','none');
	$('.prev2').css('display','none');
	$('.prev').css('display','inline-block');
	
	$('#blanco').css('display','none');
	
	$('#title').css('display','inline-block');
	$('#title2').css('display','none');
	$('#title3').css('display','none');
	$('#title4').css('display','none');
	

	
	
}
function sinnada(){


if(cont1+cont2+cont3==9){
$('#blanco').css('display','none');
$('#cuadro').css('display','none');
$('.check').css('display','none');
$('.prev2').css('display','none');
$('#title2').css('display','none');
$('#title3').css('display','none');
$('#title4').css('display','inline-block');
$('article').css('display','none');
$('.sig').css('display','none');
$('.sig2').css('display','none');
$('#r1 aside').css('display','inline-block');


resultado(cuentabien,15);
cuentabien=0;
}



}
var almCad=['','','','',''];
var temp=0;
var almNumber=[0,0,0,0,0];



function check(f,formul){
cont=0;


$('.prev2').css('display','inline-block');
$('.prev2').css('float','left');

if(formul==0&&cont1<3){
cont1++;
	var traeana1=new String( f.like1.value ); 
	var traeana2=new String( f.like2.value ); 
	var traeana3=new String( f.like3.value ); 
	var traeana4=new String( f.like4.value ); 
	traeana1=traeana1.toLowerCase();
	traeana2=traeana2.toLowerCase();
	traeana3=traeana3.toLowerCase();
	traeana4=traeana4.toLowerCase();
	
var traeana=[traeana1,traeana2,traeana3,traeana4];
	temp=0;
	
	var rtaana = ["going out to have dinner","hamburgers","hot dogs","coke","spending time together"];
	

	
	for(var i=0 ; i<  4;i++){	
					if(traeana[i]=="")
						$('#cuadro #like'+(i+1)).css('border','1px solid gray');	
					if(traeana[i]!="")
						$('#cuadro #like'+(i+1)).css('border','3px solid #d9364d');

						for(var j=0; j<5; j++){
							if(traeana[i]==rtaana[j]){
								$('#cuadro #like'+(i+1)).css('border','3px solid #44af81');
								
								cont++;
								almCad[j]=rtaana[j];
								rtaana[j]="-No mas-";
								}
							}
						}
						
var disana=new String( f.dlike1.value ); 	
	disana=disana.toLowerCase();
	$('#dlike1').css('border','3px solid #fc484c');
	if(disana=="pickles"){
					$('#dlike1').css('border','3px solid #44af81');
					cont++;
				}
				
				cuentabien1=cont;
				if(cuentabien1<5&&cont1<3){document.getElementById('tryA').play();}
				
				//cuando se acaben las oportunidades llenar las respuestas correctas
				if(cuentabien2<5&&cont1==3){
					$('#cuadro input').attr('disabled', 'disabled');
							muestraRetro(1);
							$("#botonRetro1").css("display","inline-block");
							$("#boton1").css("display","none");
				}
	}
	else
	if(formul==1&&cont2<3){
	cont2++;		
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~REVISA SARAH
	
	
	var traesarah1=new String( f.like1.value ); 
	var traesarah2=new String( f.like2.value ); 
	var traesarah3=new String( f.like3.value ); 
	var traesarah4=new String( f.like4.value ); 
	
	var rtasarah = ["going to the gym","doing aerobics","going to the cinema","action movies","going to a pub","drink beer"];
	
	traesarah1=traesarah1.toLowerCase();
	traesarah2=traesarah2.toLowerCase();
	traesarah3=traesarah3.toLowerCase();
	traesarah4=traesarah4.toLowerCase();
	traesarah=[traesarah1,traesarah2,traesarah3,traesarah4];
	

	for(var i=0 ; i<5;i++){	
					if(traesarah[i]=="")
						$('#cuadro2 #like'+(i+1)).css('border','1px solid gray');	
					if(traesarah[i]!="")
						$('#cuadro2 #like'+(i+1)).css('border','3px solid #d9364d');

						for(var j=0; j<5; j++){
							if(traesarah[i]==rtasarah[j]){
								$('#cuadro2 #like'+(i+1)).css('border','3px solid #44af81');
								rtasarah[j]="-No mas-";
								cont++;
								}
							}
						}

	

	var dissarah=new String( f.dlike2.value ); 
	dissarah=dissarah.toLowerCase();
	$('#dlike2').css('border','3px solid #fc484c');
	if(dissarah=="loud music"){
				$('#dlike2').css('border','3px solid #44af81');
				cont++;
				}
	
	cuentabien2=cont;		
	if(cuentabien2<5&&cont2<3){document.getElementById('tryA').play();}
	if(cuentabien2<5&&cont2==3){
	
				
					$('#cuadro2 input').attr('disabled', 'disabled');
					$("#botonRetro2").css("display","inline-block");
					$("#boton2").css("display","none");
					muestraRetro(2);
					document.getElementById('thecorrect').play();}
			
			}
			else
			if(formul==2&&cont3<3){
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~REVISA SAM
	
	cont3++;
	var traesam1=new String( f.like1.value ); 
	var traesam2=new String( f.like2.value ); 
	var traesam3=new String( f.like3.value ); 
	var traesam4=new String( f.like4.value ); 
	
	
	var rtasam = ["listening to music","korean pop","riding his motorbike","speed"];
	
	
	traesam1=traesam1.toLowerCase();
	traesam2=traesam2.toLowerCase();
	traesam3=traesam3.toLowerCase();
	traesam4=traesam4.toLowerCase();
	
	traesam=[traesam1,traesam2,traesam3,traesam4];
	
	for(var i=0 ; i<5;i++){	
					if(traesam[i]=="")
						$('#cuadro3 #like'+(i+1)).css('border','1px solid gray');	
					if(traesam[i]!="")
						$('#cuadro3 #like'+(i+1)).css('border','3px solid #d9364d');

						for(var j=0; j<5; j++){
							if(traesam[i]==rtasam[j]){
								$('#cuadro3 #like'+(i+1)).css('border','3px solid #44af81');
								rtasam[j]="-No mas-";
								cont++;
								}
							}
						}

	var dissam=new String( f.dlike3.value ); 
	dissam=dissam.toLowerCase();
	$('#dlike3').css('border','3px solid #fc484c');
	if(dissam=="tropical music"){
				$('#dlike3').css('border','3px solid #44af81');
				cont++;
				}
	cuentabien3=cont;
			if(cuentabien2<5&&cont3<3){document.getElementById('tryA').play();}
			if(cuentabien2<5&&cont3==3){
				$('#cuadro3 input').attr('disabled', 'disabled');
				$("#botonRetro3").css("display","inline-block");
							$("#boton3").css("display","none");
				document.getElementById('thecorrect').play();
				muestraRetro(3);
				}
			
			}

	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~REVISA disgustos	

					
		if(cont1==3){$('#boton1').css('display','none');}
		if(cont2==3){$('#boton2').css('display','none');}
		if(cont3==3){$('#boton3').css('display','none');}
		if(cont1+cont2+cont3==9){
			document.getElementById("check").style.animation="alumbra 2s infinite";
			document.getElementById("check").style.webkitAnimation="alumbra 2s infinite";}
			
		if (cont>6){
			document.getElementById("check").style.animation="alumbra 2s infinite";
			document.getElementById("check").style.webkitAnimation="alumbra 2s infinite";
			fin=4; $('.sig').css('display','inline');
		
		}
		

	cont=0;
	
cuentabien=cuentabien1+cuentabien2+cuentabien3;

}

function muestraRetro(num){
	
	audio1.currentTime = 0;
	audio2.currentTime = 0;
	audio3.currentTime = 0;
	
	
	
	
	if(num==1){

	document.getElementById("eatmyshorts").innerHTML="<h6><p>They are Ana and Carol.  They are 20 years old.  They are friends and they study medicine at National University. In their leisure time they like <b>going out to have dinner</b>.  They usually <b>go to a fast food restaurant</b>.  Ana likes <b>hamburgers</b> and Carol likes <b>hot dogs</b>. They both always have a <b>coke</b> with their food and they hate <b>pickles</b>. They really enjoy <b>spending time together</b>.</p></h6>";
    
    }
else					
			if(num==2)		{
			
			document.getElementById("eatmyshorts").innerHTML="<h6><p>She is 21 years old.  She is a student.  In her free time She usually <b>goes to the gym</b>.  She likes to do <b>aerobics</b>. At weekends she likes to <b>go to the cinema</b> with her boyfriend.  They both like <b>action movies</b>.  They also enjoy <b>going to a pub to drink some beers</b> but they don’t like <b>loud music</b>.</p></h6>";}

				else			
		if(num==3){		
            
		document.getElementById("eatmyshorts").innerHTML="<h6><p> His name is Sam.  He is 19 years old. In his free time he likes <b>listening to music</b>. He loves <b>Korean pop</b>.  He doesn't like <b>tropical music</b>. He also enjoys <b>riding his motorbike</b>. He loves <b>speed</b>!.</p></h6>"}
		
		
		
	
	
						$('#overlay').fadeIn('fast',function(){
							$('#box').animate({'left':'12%'},500);
						});
					
	
	
	
}
