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
		
		},22000);
		
		
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


function cuadro(){

document.getElementById("radio").pause();

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
	
	

	
	
var traeana=[traeana1,traeana2,traeana3,traeana4,traeana5,traeana6];
	temp=0;
	
	var rtaana = ["Londres","November 11th 1988","5 years","18 years","to play with balls and cars","vegetables"];

	
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
						

				
				cuentabien1=cont;
				if(cuentabien1<6&&cont1<3){document.getElementById('tryA').play();}
				
				//cuando se acaben las oportunidades llenar las respuestas correctas
				if(cuentabien1<6&&cont1==3){
					$('#cuadro3 input').attr('disabled', 'disabled');
							muestraRetro(1);
							document.getElementById('thecorrect').play();
							$("#botonRetro1").css("display","inline-block");
							$("#boton1").css("display","none");
				}
	}
	
			
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~REVISA SAM


	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~REVISA disgustos	

					
		if(cont1==3){$('#boton1').css('display','none');}
		
	
		if(cont1==3){
			document.getElementById("check").style.animation="alumbra 2s infinite";
			document.getElementById("check").style.webkitAnimation="alumbra 2s infinite";}
			
		if (cont>3){
			document.getElementById("check").style.animation="alumbra 2s infinite";
			document.getElementById("check").style.webkitAnimation="alumbra 2s infinite";
			fin=4; 
		
		}
		

	cont=0;
	
cuentabien=cuentabien1+cuentabien2;

}

function muestraRetro(num){
	
	
	
	
	
	
	if(num==1){
	document.getElementById("eatmyshorts").innerHTML="<h6><p>Hello my name is William Green.  I was born in <b>London</b>, on <b>November 11th, 1988</b>. I started elementary school when I was <b>5 years</b> old. I studied at St Thomas.  There I learned many things, made many friends and I was very happy. I attended high school on the same place. I graduated when I was <b>18 years</b> old. When I was a child, I liked <b>to play with balls and cars</b>.  My favorite food were hamburgers, I loved them! I didn’t like <b>vegetables</b>.  I also enjoyed watching cartoons and animated films. I had a wonderful childhood.  I was a happy boy.</p></h6>";
temp=setTimeout(function(){
document.getElementById('radio').play();	
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
