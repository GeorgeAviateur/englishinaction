 var aux=0;
 var pasar=0;
 var fin=0;
 var cont1=0,cont2=0,cont3=0;
 var cuentabien=0,cuentabien1=0,cuentabien2=0,cont=0;
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




	if(valorGiro==0&&cont1<2){
		$('#boton2').css('display','none');
		$('#boton1').css('display','inline-block');
		}
		else
			if(valorGiro==0&&cont1>2){
		$('#boton2').css('display','none');
		$('#boton1').css('display','none');
		
		$('#botonRetro2').css('display','none');
		$('#botonRetro1').css('display','inline-block');
				
			}
		
	if(valorGiro==1&&cont2<2){
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
		$('#boton1').css('display','none');
		
		$('#botonRetro1').css('display','none');
		$('#botonRetro2').css('display','inline-block');
				
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
if(cont1+cont2==6){
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


resultado(cuentabien,13);
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
	var traeana5=new String( f.like5.value );
	var traeana6=new String( f.like6.value ); 
	traeana1=traeana1.toLowerCase();
	traeana2=traeana2.toLowerCase();
	traeana3=traeana3.toLowerCase();
	traeana4=traeana4.toLowerCase();
	traeana5=traeana5.toLowerCase();
	traeana6=traeana6.toLowerCase();
	
	
var traeana=[traeana1,traeana2,traeana3,traeana4,traeana5,traeana6];
	temp=0;
	
	var rtaana = ["going to the movies","going to a bar","share time with friends","action movies","listening to music","drinking and singing"];
	

	
	for(var i=0 ; i<  6;i++){	
					if(traeana[i]=="")
						$('#cuadro #like'+(i+1)).css('border','1px solid gray');	
					if(traeana[i]!="")
						$('#cuadro #like'+(i+1)).css('border','3px solid #d9364d');

						for(var j=0; j<6; j++){
							if(traeana[i]==rtaana[j]){
								$('#cuadro #like'+(i+1)).css('border','3px solid #44af81');
								
								cont++;
								almCad[j]=rtaana[j];
								rtaana[j]="-No mas-";
								}
							}
						}
						
var disana1=new String( f.dlike1.value ); 
var disana2=new String( f.dlike2.value ); 	
	disana1=disana1.toLowerCase();
	disana2=disana2.toLowerCase();
	$('#dlike1').css('border','3px solid #fc484c');
	if(disana1=="drama movies"){
					$('#dlike1').css('border','3px solid #44af81');
					cont++;
				}

	$('#dlike2').css('border','3px solid #fc484c');
	if(disana2=="dancing"){
					$('#dlike2').css('border','3px solid #44af81');
					cont++;
				}
				
				cuentabien1=cont;
				if(cuentabien1<5&&cont1<3){document.getElementById('tryA').play();}
				
				//cuando se acaben las oportunidades llenar las respuestas correctas
				if(cuentabien1<5&&cont1==3){
					$('#cuadro3 input').attr('disabled', 'disabled');
							muestraRetro(1);
							document.getElementById('thecorrect').play();
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
	
	
	var rtasarah = ["going to the gym","wokr out","meet a lot of people"];
	
	traesarah1=traesarah1.toLowerCase();
	traesarah2=traesarah2.toLowerCase();
	traesarah3=traesarah3.toLowerCase();
	
	traesarah=[traesarah1,traesarah2,traesarah3];
	

	for(var i=0 ; i<3;i++){	
					if(traesarah[i]=="")
						$('#cuadro2 #like'+(i+1)).css('border','1px solid gray');	
					if(traesarah[i]!=""){
						document.getElementById('tryA').play();
						$('#cuadro2 #like'+(i+1)).css('border','3px solid #d9364d');}

						for(var j=0; j<3; j++){
							if(traesarah[i]==rtasarah[j]){
								$('#cuadro2 #like'+(i+1)).css('border','3px solid #44af81');
								rtasarah[j]="-No mas-";
								cont++;
								}
							}
						}

	


	cuentabien2=cont;		

	if(cuentabien2<5&&cont2==3){
	
				
					$('#cuadro2 input').attr('disabled', 'disabled');
					$("#botonRetro2").css("display","inline-block");
					$("#boton2").css("display","none");
					muestraRetro(2);
					document.getElementById('thecorrect').play();}
			
			}
			
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~REVISA SAM


	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~REVISA disgustos	

					
		if(cont1==3){$('#boton1').css('display','none');}
		if(cont2==3){$('#boton2').css('display','none');}
	
		if(cont1+cont2==6){
			document.getElementById("check").style.animation="alumbra 2s infinite";
			document.getElementById("check").style.webkitAnimation="alumbra 2s infinite";}
			
		if (cont>6){
			document.getElementById("check").style.animation="alumbra 2s infinite";
			document.getElementById("check").style.webkitAnimation="alumbra 2s infinite";
			fin=4; $('.sig').css('display','inline');
		
		}
		

	cont=0;
	
cuentabien=cuentabien1+cuentabien2;

}

function muestraRetro(num){
	
	
	
	
	
	
	if(num==1){
	document.getElementById("eatmyshorts").innerHTML="<h6><p>Hello my name is Rose and I’m 19 years old. I study at Javeriana University and I also work on weekends. <b> In my free time I enjoy going to the movies with my friends</b>.   When we go, we usually like to watch <b>action films</b>; we <b>don’t like drama</b>. I also like <b>going to bars</b> with my friends When we go there we enjoy <b>listening to music</b>, <b>drinking</b> some beers and <b>singing</b> together. I don`t like <b>dancing</b> though. </p></h6>";
temp=setTimeout(function(){
document.getElementById('rose').play();	
			},2900);
}		
			else if(num==2)	{	
		document.getElementById("eatmyshorts").innerHTML="<h6><p>Hello my name is Tim and I’m 21 years old.  I’m a Med student at  the National University. In my free time I usually like <b>going to the gym</b>.  I love <b>working out</b>.   At the gym I meet a lot of people, especially beautiful girls, hahaha. <b>I don’t like eating fast food</b> because it is bad for my health. <b>I don’t like drinking alcohol</b> either.</p></h6>";
temp=setTimeout(function(){
document.getElementById('tim').play();	
			},2900);				
		}
		$("#activator").click();
		$("#activator").css('pointer-events','none');
	
	
	
	
	
	
	
}
