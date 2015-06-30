var tucha=0;
var otratucha=0;
var correct;
function reading(){
	if (ejreading[0]==1||ejreading[1]==1||ejreading[2]==1){
		$('#texto').css('display','none'); 
		$('#imageart').css('display','none'); 
		$('#q1').css('display','inline-block'); 
		
		audio.play();
	}
	
	var rta1;
	var rta2;
	
	if (ejreading[3]==1){rta1="Spend";rta2="Vacation";}
	if (ejreading[4]==1){rta1="Buy";rta2="Interesting";}
	if (ejreading[5]==1){rta1="Climb";rta2="Try";}
	if (ejreading[6]==1){rta1="Volcano";rta2="Piramyds";}
	if (ejreading[7]==1){rta1="Hiking";rta2="Trip";}
	
	if (ejreading[3]==1||ejreading[4]==1||ejreading[5]==1||ejreading[6]==1||ejreading[7]==1){
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
