 var aux=0;
 var pasar=0;
 var fin=0;
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
	$('#void').css('display','inline-block');
	$('#sig').css('opacity','.3');
	$('#audio1').css('display','inline');
	//no olvide pasar el pasar=1 dentro del settimeout
		
		
		
		
		pasar=1;
		
		
		temp=setTimeout(function(){
$('#sig').css('opacity','1');
		document.getElementById("sig").style.animation="alumbra 2s infinite";
		document.getElementById("sig").style.webkitAnimation="alumbra 2s infinite";
		
		},30000);
		
		
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

document.getElementById("radio").pause();
document.getElementById("rose").pause();
document.getElementById("tim").pause();

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
	document.getElementById("radio").pause();
document.getElementById("rose").pause();
document.getElementById("tim").pause();
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
document.getElementById("radio").pause();
document.getElementById("rose").pause();
document.getElementById("tim").pause();
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


resultado(cuentabien,6);
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
	 
	traeana1=traeana1.toLowerCase();
	traeana2=traeana2.toLowerCase();

	
var traeana=[traeana1,traeana2];
	temp=0;
	
	var rtaana = ["he's going to spend more time helping others","he's going to join an environmental group"];
	

	
	for(var i=0 ; i<  2;i++){	
					if(traeana[i]=="")
						$('#cuadro #like'+(i+1)).css('border','1px solid gray');
							
					if(traeana[i]!="")
						$('#cuadro #like'+(i+1)).css('border','3px solid #d9364d');

						for(var j=0; j<2; j++){
							if(traeana[i]==rtaana[j]){
								$('#cuadro #like'+(i+1)).css('border','3px solid #44af81');
								
								cont++;
								
								}
							}
						}
						

				
				cuentabien1=cont;
				if(cuentabien1<2&&cont1<3){document.getElementById('tryA').play();}
				if(cuentabien1==2){document.getElementById('retrowell').play();cont1=3;}
				
				//cuando se acaben las oportunidades llenar las respuestas correctas
				if(cuentabien1<2&&cont1==3){
					$('#cuadro1 input').attr('disabled', 'disabled');
					document.getElementById('thecorrect').play();
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

	
	var rtasarah = ["he's going to study law","he's going to do his best","he's going to show his parents she can be responsible"];
	
	traesarah1=traesarah1.toLowerCase();
	traesarah2=traesarah2.toLowerCase();
	traesarah3=traesarah3.toLowerCase();
	
	traesarah=[traesarah1,traesarah2,traesarah3];
	

	for(var i=0 ; i<3;i++){	
					if(traesarah[i]=="")
						$('#cuadro2 #like'+(i+1)).css('border','1px solid gray');	
					if(traesarah[i]!="")
						$('#cuadro2 #like'+(i+1)).css('border','3px solid #d9364d');

						for(var j=0; j<3; j++){
							if(traesarah[i]==rtasarah[j]){
								$('#cuadro2 #like'+(i+1)).css('border','3px solid #44af81');
								rtasarah[j]="-No mas-";
								cont++;
								}
							}
						}

	

	
	
	cuentabien2=cont;		
	if(cuentabien2<4&&cont2<3){document.getElementById('tryA').play();}
	if(cuentabien2==3){document.getElementById('retrowell').play();cont2=3;}
	if(cuentabien2<3&&cont2==3){
	
				
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
	var disana1=new String( f.dlike1.value ); 
	
	disana1=disana1.toLowerCase();
	
	$('#dlike1').css('border','3px solid #fc484c');
	if(disana1=="drama movies"){
		document.getElementById('retrowell').play();
					$('#dlike1').css('border','3px solid #44af81');
					cont++;
					cont3=3;
					
				}
				else{
					document.getElementById('tryA').play();
				}
	
	cuentabien3=cont;
			
			if(cuentabien3<1&&cont3==3){
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
	
	
	
	
	
	
	if(num==1){
		
	document.getElementById("eatmyshorts").innerHTML="<h6><p>It’s the beginning of the New Year and I feel like it’s a fresh start.  This year, I’m going <b>to spend more time helping others</b>. I'm <b>going to join an environmental group</b> and adopt an animal. I’m going to try hard to keep my resolutions.</p></h6>";}
else					
			if(num==2)		{
				
			document.getElementById("eatmyshorts").innerHTML="<h6><p>I really want to go college <b>to study law</b>. I’m going to study hard and try my <b>best</b> to do well in school. I’m <b>going to show my parents I can be responsible</b>.</p></h6>";}

				else			
		if(num==3){		
		document.getElementById("eatmyshorts").innerHTML="<h6><p>I’m <b>going to volunteer my time to help others</b>. I really believe that it's very important to help those who need our help. I also think that the more you do for others</b>, the better you feel about yourself.</p></h6>"}
		
		
		
	
	
						$('#overlay').fadeIn('fast',function(){
							$('#box').animate({'left':'90px'},500);
						});
					
	
	
	
}
