var tucha=0;
var otratucha=0;
var correct;
function reading(){
	if (ejreading[0]==1||ejreading[1]==1||ejreading[2]==1||ejreading[3]==1||ejreading[4]==1){
		$('#texto').css('display','none'); 
		$('#imageart').css('display','none'); 
		$('#q1').css('display','inline-block'); 
		
		audio.play();
	}
	
	if (ejreading[5]==1){
		
		correct=[9,8,2,1,10,4,3,5,7,0,6]
		checkOrder(correct);
	}
	
	var rta1;
	var rta2;
	
	if (ejreading[6]==1){rta1="Health";rta2="Meet";}
	if (ejreading[7]==1){rta1="Like";rta2="Treadmill";}
	if (ejreading[8]==1){rta1="Aerobics";rta2="Weight";}
	if (ejreading[9]==1){rta1="Strength";rta2="Healthy";}
	
	if (ejreading[6]==1||ejreading[7]==1||ejreading[8]==1||ejreading[9]==1){
		var posicion=document.getElementById("cid1").options.selectedIndex;
		var cad=document.getElementById("cid1").options[posicion].text;
		var posicion2=document.getElementById("cid2").options.selectedIndex;
		var cad2=document.getElementById("cid2").options[posicion2].text;
		var count=0;
		if (cad==rta1){
		$("#cid1").css('background-color','#44af81');
		count++;
		}
		else
			$("#cid1").css('background-color','#fc484c');
		
			
		if (cad2==rta2){
		$("#cid2").css('background-color','#44af81');
		count++;
		}
			else
				$("#cid2").css('background-color','#fc484c');
			
		if(count<2){
		setTimeout(function(){preguntaAle2(false);},6500);
		audioMal.play();
		}
		else{
			setTimeout(function(){preguntaAle2(true);},6500);
			audioBien.play();
		}
	}
	
	
	if (ejreading[11]==1||ejreading[12]==1||ejreading[13]==1||ejreading[14]==1||ejreading[15]==1){
		$('#texto').css('display','none'); 
		$('#continuar').css('display','none'); 
		$('#imageart').css('display','none'); 
		$('#ask').css('display','inline-block'); 
		$('#continuar1').css('display','inline-block'); 
		
		audio.play();
	}
	
	
	
	
	
}
	
	
function checkOrder(correcta){
	alert(correcta[0]);
	var first_p =$(".container ul li").index($("#uno"));
					
			if(first_p==correcta[0]){
			document.getElementById("uno").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
			}
			else
			document.getElementById("uno").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
			first_p =$(".container ul li").index($("#dos"));
			if(first_p==correcta[1]){
			document.getElementById("dos").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
			}
			else
			document.getElementById("dos").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
		//----------------
		first_p =$(".container ul li").index($("#tres"));
		if(first_p==correcta[2]){
			document.getElementById("tres").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
			}
			else
			document.getElementById("tres").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
		//----------------
			first_p =$(".container ul li").index($("#cuatro"));
			if(first_p==correcta[3]){
			document.getElementById("cuatro").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
			}
			else
			document.getElementById("cuatro").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
//----------------			
			first_p =$(".container ul li").index($("#cinco"));
			 if(first_p==correcta[4]){
			document.getElementById("cinco").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
			}
			else
			document.getElementById("cinco").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
//----------------
			first_p =$(".container ul li").index($("#seis"));
			if(first_p==correcta[5]){
			document.getElementById("seis").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
			}
			else
			document.getElementById("seis").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
//----------------
			first_p =$(".container ul li").index($("#siete"));
			if(first_p==correcta[6]){
			document.getElementById("siete").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
			}
			else
			document.getElementById("siete").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";		
//----------------
			first_p =$(".container ul li").index($("#ocho"));
			if(first_p==correcta[7]){
			document.getElementById("ocho").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
			}
			else
			document.getElementById("ocho").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
//----------------
			first_p =$(".container ul li").index($("#nueve"));
			if(first_p==correcta[8]){
			document.getElementById("nueve").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
			}
			else
			document.getElementById("nueve").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
//----------------
			first_p =$(".container ul li").index($("#diez"));
			if(first_p==correcta[9]){
			document.getElementById("diez").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
			}
			else
			document.getElementById("diez").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
	//----------------
			first_p =$(".container ul li").index($("#once"));
			if(first_p==correcta[10]){
			document.getElementById("once").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
			}
			else
			document.getElementById("once").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
}









function correcta(lleva){
	
	audioBien.play();	
	
	$('.acertar h2').addClass('bn');
	$('#q1 .ans').css('cursor','default');
	$('#q1 h2').removeClass('ans');
	document.getElementById('esto').removeAttribute("onclick");
	document.getElementById('es').removeAttribute("onclick");
	document.getElementById('udec1').removeAttribute("onclick");
		
	setTimeout(function(){
	$('.acertar h2').removeClass('bn');
		preguntaAle2(true);},3000);
	}
	
	
function erronea(lleva){
clearTimeout(temp);
	$('.negar h2').addClass('malongo');
	$('.acertar h2').addClass('bn');
	$('#q1 .ans').css('cursor','default');
	$('#q1 h2').removeClass('ans');
				
	document.getElementById('esto').removeAttribute("onclick");
	document.getElementById('es').removeAttribute("onclick");
	document.getElementById('udec1').removeAttribute("onclick");
				
	audioMal.play();

				
			
			
			
		
			
				
				setTimeout(function(){$('.negar h2').removeClass('malongo');$('.acertar h2').removeClass('bn');preguntaAle2(false);},6500);
				
	}
