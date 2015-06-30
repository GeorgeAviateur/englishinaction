var j,m=3,s=0,correcta=0,incorrecta=0;


function inic(){

for (var i=0;i<10;i++){
	j=i+1;
	document.getElementById("cid"+j).disabled=false;
	}	
	}


function revisar(){

var respuestas=["Talk","Keep","Jogging","Abs","Sit-Ups","Healthy","Dark","Vegetables","Water","Sleeping"];
	
	
	j=0;
	
	
	for (var i=0;i<10;i++){
	j=i+1;
	$("#cid"+j).css('background-color','#fc484c');
	var posicion=document.getElementById("cid"+j).options.selectedIndex; //posicion
	var cad=document.getElementById("cid"+j).options[posicion].text;
	
	
	$("#cid"+j).css('color','white');


	

		if (cad==respuestas[i]){
		
		//alert(document.getElementById("cid"+j).options[posicion].text); //valor
		$("#cid"+j).css('background-color','#44af81');
		
	correcta++;
		}
	
	document.getElementById("cid"+j).disabled=true;

	}
	incorrecta=10-correcta;
	$("#navegacion").css('display','none');
	$("#reloj").css('display','none');
	$(".sol").css('display','inline-block');
	$("#imageart").css('display','none');
	$(".sig2").css('display','inline-block');
	$(".sig").css('display','none');
	$("#fragmento").css('width','500px');
	$("#blanco").css('height','20%');
	$(".sol").css('height','20%');
	$("select").css('height','18px');
	$("select").css('font-size','0.9em');
	$("#informa").css('display','none');
	$("#navegacion").css('display','inline-block');
	
	}


function siguiente(){

$('#r1').css('display','none');
$('.sig2').css('display','none');
resultado(correcta,10);



}


