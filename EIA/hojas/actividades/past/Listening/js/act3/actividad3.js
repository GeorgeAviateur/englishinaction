var j,m=3,s=0,correcta=0,incorrecta=0;



 function carga(){
 	
 	$('.perendengues').css('visibility','hidden');
 	$('#audio1').css('visibility','hidden');
	 $('#sig').css('opacity','.3');
	$('#audio1').css('visibility','hidden');
	
$("#blanco").css('height','8%');
$('#instruccion').css('visibility','hidden');
$('#instruccion').css('visibility','visible');
$('#audio1').css('visibility','visible');
$('#audio1').css('opacity','1');
$('#audio1').css('pointer-events','auto');
$('.perendengues').css('visibility','visible');
	
	
	
		
		temp=setTimeout(function(){
$('#sig').css('opacity','1');
$('#audio1').css('visibility','visible');
		document.getElementById("sig").style.animation="alumbra 4s infinite";
		document.getElementById("sig").style.webkitAnimation="alumbra 4s infinite";
		//document.getElementById("hablame").play();		
		},27000);
	}
	
	
function inic(){

	$('liste').css('display','inline')
	$('liste').css('visibility','visible')
	for (var i=0;i<10;i++){
		j=i+1;
		document.getElementById("cid"+j).disabled=true;
		}
			
			$('#blanco').css('opacity','0.2');
			setTimeout(function(){beable();},26000);
}
function beable(){
	
	for (var i=0;i<10;i++){
		j=i+1;
		document.getElementById("cid"+j).disabled=false;
		}

$('#blanco').css('opacity','1');






		}

function reloj(){

	if(m<10)
			document.getElementById('cuenta').innerHTML="0"+m;
					else
						document.getElementById('cuenta').innerHTML=m;
	
	if(s<10)
			document.getElementById('cuenta').innerHTML+=":0"+s;
					else
						document.getElementById('cuenta').innerHTML+=":"+s;
			
	if(m==0&&s==0)
			revisar();

	if(s==0){m--; s=60;}
	
	if(m==1){
			$('#reloj').css('animation','parpadea 1s linear');
			$('#reloj figure').css('color','#ff8540');
			}
	
	if(m==0){
			$('#reloj figure').css('color','#fc484c');
			$('#reloj figure').css('font-size','1.2em');
	
			if(s>10)
					$('#reloj figure').css('left','40%');
					else
						$('#reloj figure').css('left','40%');
		
			$('#reloj figure').css('top','40%');
		
			if(s>20)
					$('#reloj').css('animation','parpadea 1s linear infinite');
					else
					$('#reloj').css('animation','parpadea .5s linear infinite');
				
			document.getElementById('cuenta').innerHTML=s;
	}

	s--;
	setTimeout(function(){reloj();},1000);
}

function revisar(){

document.getElementById("radio").pause();
radio.currentTime=0;
var respuestas=["talk","stay","jogging","abs","sit-Ups","healthy","dark","vegetables","water","sleeping"];
	
	setTimeout(function(){
		document.getElementById("radio").play();},900);

	j=0;
	
	
	$('#blanco').css('opacity','1');
	$('#r1').css('opacity','1');
	$('#fragmento').css('width','90%');

	$('.perendengues').css('visibility','hidden');
$('.perendengues').css('display','none');
$('#audio1').css('visibility','hidden');
$('#audio1').css('display','none');
	
	
	
	for (var i=0;i<10;i++){
	j=i+1;
	$("#cid"+j).css('background-color','#fc484c');
	var posicion=document.getElementById("cid"+j).options.selectedIndex; //posicion
	var cad=document.getElementById("cid"+j).options[posicion].text;
	
	
	$("#cid"+j).css('color','white');
	cad=cad.toLowerCase();

	

		if (cad==respuestas[i]){
		
		//alert(document.getElementById("cid"+j).options[posicion].text); //valor
		$("#cid"+j).css('background-color','#44af81');
		
	correcta++;
		}
	
	document.getElementById("cid"+j).disabled=true;

	}
	incorrecta=10-correcta;
	
	$(".sol").css('display','inline-block');
	$("#imageart").css('display','none');
	$("#r1").css('height','60%');
	
	$(".sig2").css('display','inline-block');
	$("#corr2").css('display','inline');
	$(".sig").css('display','none');
	$("#blanco").css('padding','0%');
	$("#blanco #fragmento").css('height','auto');
	$("#blanco").css('height','8%');
	$("#blanco").css('margin-bottom','18px');
	$("#fragmento").css('display','block');
	
	
	$(".sol").css('height','auto');
	$("select").css('height','18px');
	$("select").css('font-size','0.9em');
	$("#informa").css('display','none');
	
	
	document.getElementById("bien").pause();
	document.getElementById("instruyeme").pause();
	
	
	
	}


function siguiente(){
document.getElementById("radio").pause();
$('#r1').css('display','none');

$('.sig2').css('display','none');
$('instruccion').css('visibility','hidden');
$('informa').css('visibility','hidden');

$('instruccion').css('display','none');
$('informa').css('display','none');



	document.getElementById("instruyeme").pause();

resultado(correcta,10);

}