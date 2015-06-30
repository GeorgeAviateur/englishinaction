var j,m=3,s=0,correcta=0,incorrecta=0;



 function carga(){
	 
	$("#countdown").countdown360({}).start();
	$('#plane').addClass("muestrame");

     $('#informa').css('opacity','.1');
		temp=setTimeout(function(){$('#informa').css('opacity','1');},30000);
     
	for (var i=0;i<9;i++){
		j=i+1;
		document.getElementById("cid"+j).disabled=false;
		}		
		
	}

function revisar(){

var respuestas=["health","meet","like","treadmill","aerobics","weight","strength","stay","healthy"];
	
	
	j=0;
	
	
	$('#blanco').css('opacity','1');
	$('#r1').css('opacity','1');
	$('#fragmento').css('width','99%');
	
	
	
	for (var i=0;i<9;i++){
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
    
	incorrecta=9-correcta;
	$("#countdown").css('display','none');
	$(".sol").css('display','inline-block');
	$("#imageart").css('display','none');
	$("#r1").css('height','60%');
	
	$(".sig2").css('display','inline-block');
	$("#corr2").css('display','block');
	
	$(".sig").css('display','none');
	$("#blanco").css('padding','0%');
	$("#blanco #fragmento").css('height','auto');
	$("#blanco").css('height','auto');
	$("#fragmento").css('display','block');
	$("#blanco").css('top','0%');
	$("#blanco").css('margin-top','3.5%');
	
	$(".sol").css('height','auto');
	$("#blanco").css('margin-bottom','18px');
	
	$("select").css('height','18px');
	$("select").css('font-size','0.9em');
	$("#informa").css('display','none');
	
	document.getElementById('hablame').play();
	document.getElementById("bien").pause();
	document.getElementById("instruyeme").pause();
	$("#countdown").countdown360({}).stop();
	
	
	}


function siguiente(){

$('#r1').css('display','none');
$('.sig2').css('display','none');
document.getElementById("hablame").pause();


	document.getElementById("instruyeme").pause();
	document.getElementById("hablame").pause();
resultado(correcta,9);

}