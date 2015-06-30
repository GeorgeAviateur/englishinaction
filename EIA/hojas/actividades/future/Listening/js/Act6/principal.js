var i=0;
var aux=0;
var ubic="";
//var ficty=0;
//var ficty1=0;
var cuentabien=0;
var cuentamal=0;
var activar1 = new Array(5);
var a1="";
var a2="";
var a3="";
var a4="";
var a5="";
var guardando="";
var recibe="";
var respuesta="";
var lock=false;
var compara="";
var audio;
var pausito;
var m=0;
var homero11=0;
var homero22=0;
var homero33=0;
var homero44=0;
var homero55=0;
var cosiño=0;
var contador=0,contador1=0,contador2=0,contador3=0,contador4=0;



function carga(){
	$('#listeniando').css('display','inline');
	$('#e1').css('display','inline');
}
//---------------------------------------------------------------------------------------------------------------------------
function sololetras(e){
if ((e.keyCode != 32)&& (e.keyCode != 39) && (e.keyCode < 65) || (e.keyCode > 90) && (e.keyCode < 97) || (e.keyCode > 122))
e.returnValue = false;
}
//---------------------------------------------------------------------------------------------------------------------------
function activaaudio1(){
		if((more==0)){
			$('#perendengues1').css('display','inline');

			audio=document.getElementById('a1');
			if (audio.paused) {
			audio.play();
			$("#reproduce00").css('display','inline');
			contador++;
			//homero11++;
		} 
		if (contador==1){
			$('#perendengues1').css('pointer-events','auto'); 
			document.getElementById("primero").checked = true;
			$('#perendengues1').css('pointer-events','none'); 
		}
		if (contador==2){
			$('#perendengues1').css('pointer-events','auto'); 
			document.getElementById("segundo").checked = true;
			$('#perendengues1').css('pointer-events','none'); 
		}
		if (contador==3){
			$('#perendengues1').css('pointer-events','auto'); 
			document.getElementById("tercero").checked = true;
			$('#perendengues1').css('pointer-events','none'); 
			$("#reproduce00").css('opacity','0.4');
			$('#reproduce00').css('pointer-events','none');
			/*$("#reproduce00").css('opacity','0.4');
			$('#reproduce00').css('pointer-events','none');*/
		}
}
//---------------------------------------------------------------------------------------
if((more==1)){

	audio=document.getElementById('a2');

	if (audio.paused) {
		audio.play();
		$("#reproduce11").css('display','inline');
		$("#perendengues2").css('display','inline');
		contador1++;
		//homero22++;
	} 
	if (contador1==1){
		$('#perendengues2').css('pointer-events','auto'); 
		document.getElementById("primero2").checked = true;
		$('#perendengues2').css('pointer-events','none'); 
	}
	if (contador1==2){
		$('#perendengues2').css('pointer-events','auto'); 
		document.getElementById("segundo2").checked = true;
		$('#perendengues2').css('pointer-events','none'); 
	}
	if (contador1==3){
		$('#perendengues2').css('pointer-events','auto'); 
		document.getElementById("tercero2").checked = true;
		$('#perendengues2').css('pointer-events','none'); 
		$("#reproduce11").css('opacity','0.4');
		$('#reproduce11').css('pointer-events','none');

	/*$("#reproduce00").css('opacity','0.4');
	$('#reproduce00').css('pointer-events','none');*/
	}

}

if((more==2)){

		audio=document.getElementById('a3');

		if (audio.paused) {
			audio.play();
			$("#reproduce22").css('display','inline');
			contador2++;
			//homero22++;
		} 
		if (contador2==1){
			$('#perendengues3').css('pointer-events','auto'); 
			document.getElementById("primero3").checked = true;
			$('#perendengues3').css('pointer-events','none'); 
		}
		if (contador2==2){
			$('#perendengues3').css('pointer-events','auto'); 
			document.getElementById("segundo3").checked = true;
			$('#perendengues3').css('pointer-events','none'); 
		}
		if (contador2==3){
			$('#perendengues3').css('pointer-events','auto'); 
			document.getElementById("tercero3").checked = true;
			$('#perendengues3').css('pointer-events','none'); 
			$("#reproduce22").css('opacity','0.4');
			$('#reproduce22').css('pointer-events','none');

		/*$("#reproduce00").css('opacity','0.4');
		$('#reproduce00').css('pointer-events','none');*/
		}



}
//------------------------------------------------------------------------------------------
if((more==3)){
	audio=document.getElementById('a4');

	if (audio.paused) {
		audio.play();
		$("#reproduce33").css('display','inline');
		contador3++;
		//homero22++;
	} 
	if (contador3==1){
		$('#perendengues4').css('pointer-events','auto'); 
		document.getElementById("primero4").checked = true;
		$('#perendengues4').css('pointer-events','none'); 
	}
	if (contador3==2){
		$('#perendengues4').css('pointer-events','auto'); 
		document.getElementById("segundo4").checked = true;
		$('#perendengues4').css('pointer-events','none'); 
	}
	if (contador3==3){
		$('#perendengues4').css('pointer-events','auto'); 
		document.getElementById("tercero4").checked = true;
		$('#perendengues4').css('pointer-events','none'); 
		$("#reproduce33").css('opacity','0.4');
		$('#reproduce33').css('pointer-events','none');

		/*$("#reproduce00").css('opacity','0.4');
		$('#reproduce00').css('pointer-events','none');*/
	}

}

//------------------------------------------------------------------------------------------------

if(((more==4)||(more==-1))){
	audio=document.getElementById('a5');

		if (audio.paused) {
			audio.play();
			$("#reproduce44").css('display','inline');
			contador4++;
			//homero55++;
			} 
				if (contador4==1){
					$('#perendengues5').css('pointer-events','auto'); 
					document.getElementById("primero5").checked = true;
					$('#perendengues5').css('pointer-events','none'); 
				}
				if (contador4==2){
					$('#perendengues5').css('pointer-events','auto'); 
					document.getElementById("segundo5").checked = true;
					$('#perendengues5').css('pointer-events','none'); 
				}
				if (contador4==3){
					$('#perendengues5').css('pointer-events','auto'); 
					document.getElementById("tercero5").checked = true;
					$('#perendengues5').css('pointer-events','none'); 
					$("#reproduce44").css('opacity','0.4');
					$('#reproduce44').css('pointer-events','none');
					$('#siguien').css('display','inline'); 

					/*$("#reproduce00").css('opacity','0.4');
					$('#reproduce00').css('pointer-events','none');*/
				}


}

}
//---------------------------------------------------------------------------------------------------------------------------
function capturar(botoncito){
	
var form1 = document.getElementById("form2");

a1=form1.what_is_your_favorite_food.value;
a2=form1.do_you_like_going_to_the_gym.value;
a3=form1.why_do_you_like_science_fiction_films.value;
a4=form1.does_your_mother_like_cooking_pasta.value;
a5=form1.what_do_you_usually_do_in_your_free_time.value;
a1=a1.toLowerCase();
a1=a1.replace(/\s/g,"_");
a2=a2.toLowerCase();
a2=a2.replace(/\s/g,"_");
a3=a3.toLowerCase();
a3=a3.replace(/\s/g,"_");
a4=a4.toLowerCase();
a4=a4.replace(/\s/g,"_");
a5=a5.toLowerCase();
a5=a5.replace(/\s/g,"_");

if(compara!=botoncito){
//aux=0;
lock=false;
compara="";
}

if(lock==false){
compara=botoncito;
lock=true;
}
if (botoncito=="e1"){

		indice=document.getElementById("cuadro1").selectedIndex;
	if ((a1 == "what_are_you_going_to_do_next_weekend"&& indice==3)) {
			//alert("muy bien1");
			document.getElementById('bien').play();
			$('#'+a1).css('opacity','0.6');
			$(form1.what_is_your_favorite_food).css('pointer-events','none'); 
			$(form1.what_is_your_favorite_food).css('border','4px solid green');
			//$('#campiño1').css('border','2px solid #308c58');
			$(form1.e1).css('pointer-events','none');
			$(form1.e1).css('opacity','0.6');
			setTimeout(function(){
				$('#reproduce00').css('opacity','0.9');
				$('#reproduce00').css('pointer-events','auto'); activar1[0] = 1;},700);
			cuentabien++;
			homero11=1;
			indice=0;
			//ficty++;
	}
	else{
			aux++;
			if(aux<=2){
			document.getElementById('sorry').play();
			//alert("Try again. You have 3 attempts, get: "+aux+" attempts");
			$(what_is_your_favorite_food).css('border','4px solid red');
			//$('#campiño1').css('border','2px solid #fc484c');
			}
			if ((aux>2)&&(a1!="what_are_you_going_to_do_next_weekend") && (indice!=3)){
			//alert("You've exhausted your attempts");
			$(form1.what_is_your_favorite_food).css('pointer-events','none'); 
			/*$(form1.what_food_do_you_like).css('border','2px solid #fc484c');
			$('#campiño1').css('border','2px solid #fc484c');*/
			document.getElementById('correc').play();
		
			$('#'+a1).css('opacity','0.6');
			$(form1.e1).css('pointer-events','none');
			$(form1.e1).css('opacity','0.6');
			$(form1.what_is_your_favorite_food).css('opacity','0.6');
			$('#ti1').css('display','none');
			setTimeout(function(){
				$('#m1').css('display','inline');
				
				
				$('#m1').css('visibility','visible');
				$('#reproduce00').css('opacity','0.4'); 
				document.getElementById('a1').play();
				$('#reproduce00').css('pointer-events','none');			 
			    },3500);
			    $('#reproduce00').css('pointer-events','none');
			  

			//$('#perendengues1').css('pointer-events','none'); 
			//$("#reproduce00").css('opacity','0.4');
			//$('#reproduce00').css('pointer-events','none');

			    
				//$('#perendengues1').css('display', 'none');
			cuentamal++;
			homero11=1;
			//ficty++;
			}
	}  
}
//***********************************************************************
if (botoncito=="e2"){
	indice=document.getElementById("cuadro2").selectedIndex;
		
	if ((a2=="where_are_you_going_to_travel_next_vacation" && indice==2)) {
			//alert("muy bien2");
			document.getElementById('bien').play();
			$('#'+a2).css('opacity','0.6');
			$(form1.do_you_like_going_to_the_gym).css('pointer-events','none'); 
			$(form1.do_you_like_going_to_the_gym).css('border','4px solid #308c58');
			//$('#campiño2').css('border','2px solid #308c58');
			$(form1.e2).css('pointer-events','none');
			$(form1.e2).css('opacity','0.6');
			setTimeout(function(){
				$('#reproduce11').css('opacity','0.9');
				$('#reproduce11').css('pointer-events','none'); activar1[1] = 1;},700);
			cuentabien++;
			homero22=1;
			//ficty++;
	}
	else{
			aux++;
			if(aux<=2){
				document.getElementById('sorry').play();
				//alert("Try again. You have 3 attempts, get: "+aux+" attempts");
				$(form1.do_you_like_going_to_the_gym).css('border','4px solid #fc484c');
			//$('#campiño2').css('border','2px solid #fc484c');
			}
			if ((aux>2)&&(a2!="where_are_you_going_to_travel_next_vacation")){
				//alert("You've exhausted your attempts");
				$(form1.do_you_like_going_to_the_gym).css('pointer-events','none'); 
				/*$(form1.what_drink_does_she_like).css('border','2px solid #fc484c');
				$('#campiño2').css('border','2px solid #fc484c');*/
				document.getElementById('correc').play();
				$('#'+a2).css('opacity','0.6');
				$(form1.e2).css('pointer-events','none');
				$(form1.e2).css('opacity','0.6');
				$(form1.do_you_like_going_to_the_gym).css('opacity','0.6');
				$('#ti2').css('display','none');
				setTimeout(function(){
					$('#m2').css('display','inline');
					$('#m2').css('visibility','visible');
					$('#reproduce11').css('opacity','0.4');activar1[1] = 1; 
					document.getElementById('a2').play();
					$('#reproduce11').css('pointer-events','none');},2000);
				cuentamal++;
				homero22=1;
				//ficty++;
			}
	}  
}

//****************************************************************************
if (botoncito=="e3"){
	indice=document.getElementById("cuadro3").selectedIndex;
	if ((a3=="will_people_live_longer_in_the_future" && indice==4)) {
		//alert("muy bien3");
		document.getElementById('bien').play();
		$('#'+a3).css('opacity','0.6');
		$(form1.why_do_you_like_science_fiction_films).css('pointer-events','none'); 
		$(form1.why_do_you_like_science_fiction_films).css('border','3px solid #308c58');
		//$('#campiño3').css('border','2px solid #308c58');
		$(form1.why_do_you_like_science_fiction_films).css('opacity','0.6');
		$(form1.e3).css('pointer-events','none');
		$(form1.e3).css('opacity','0.6');
		setTimeout(function(){$('#reproduce22').css('opacity','0.9');
			$('#reproduce22').css('pointer-events','auto'); activar1[2] = 1;},700);
		cuentabien++;
		homero33=1;
		//ficty++;
	}
	else{
		aux++;
		if(aux<=2){
			document.getElementById('sorry').play();
			//alert("Try again. You have 3 attempts, get: "+aux+" attempts");
			$(form1.why_do_you_like_science_fiction_films).css('border','3px solid #fc484c');
			//$('#campiño3').css('border','2px solid #fc484c');
		}
		if ((aux>2)&&(a4!="will_people_live_longer_in_the_future")){
			//alert("You've exhausted your attempts");
			$(form1.why_do_you_like_science_fiction_films).css('pointer-events','none'); 
			/*$(form1.when_does_he_usually_go_to_the_movies).css('border','2px solid #fc484c');
			$('#campiño3').css('border','2px solid #fc484c');*/
			document.getElementById('correc').play();
			$('#'+a3).css('opacity','0.6');
			$(form1.e3).css('pointer-events','none');
			$(form1.e3).css('opacity','0.6');
			$(form1.why_do_you_like_science_fiction_films).css('opacity','0.6');
			$('#ti3').css('display','none');
			setTimeout(function(){
				$('#m3').css('display','inline');
				$('#m3').css('visibility','visible');
				$('#reproduce22').css('opacity','0.9');activar1[2] = 1; 
				document.getElementById('a3').play();
				$('#reproduce22').css('pointer-events','none');},2000);
			cuentamal++;
			homero33=1;
			//ficty++;
		}
	}  
}
//**********************************************************************
if (botoncito=="e4"){
		indice=document.getElementById("cuadro4").selectedIndex;
	if ((a4=="is_sue_going_to_watch_movies_this_weekend" && indice==0)) {
		//alert("muy bien4");
		document.getElementById('bien').play();
		$(form1.e4).css('pointer-events','none');
		$(form1.e4).css('opacity','0.6');
		$(form1.does_your_mother_like_cooking_pasta).css('pointer-events','none'); 
		$(form1.does_your_mother_like_cooking_pasta).css('border','3px solid #308c58');
		//$('#campiño4').css('border','2px solid #308c58');
		$('#does_your_mother_like_cooking_pasta').css('opacity','0.6');
		setTimeout(function(){$('#reproduce33').css('opacity','0.9');
		$('#reproduce33').css('pointer-events','auto'); activar1[3] = 1;},700);
		cuentabien++;
		homero44=1;
		//ficty++;
	}
	else{
		aux++;
		if(aux<=2){
			document.getElementById('sorry').play();
			//alert("Try again. You have 3 attempts, get: "+aux+" attempts");
			$(form1.does_your_mother_like_cooking_pasta).css('border','3px solid #fc484c');
			//$('#campiño4').css('border','2px solid #fc484c');
		}
		if ((aux>2)&&((a4!="is_Sue_going_to_watch_movies_this_weekend"))){
			//alert("You've exhausted your attempts");
			$(form1.does_your_mother_like_cooking_pasta).css('pointer-events','none'); 
			/*$(form1.why_dont_he_like_horror_films).css('border','2px solid #fc484c');
			$('#campiño4').css('border','2px solid #fc484c');*/
			document.getElementById('correc').play();
			$('#does_your_mother_like_cooking_pasta').css('opacity','0.6');
			$(form1.e4).css('pointer-events','none');
			$(form1.e4).css('opacity','0.6');
			$(form1.does_your_mother_like_cooking_pasta).css('opacity','0.6');
			$('#ti4').css('display','none');
			setTimeout(function(){
				$('#m4').css('display','inline');
				$('#m4').css('visibility','visible');
				$('#reproduce33').css('opacity','0.9');activar1[3] = 1; 
				document.getElementById('a4').play(); 
				$('#reproduce33').css('pointer-events','auto');},2000);
			cuentamal++;
			homero44=1;
			//ficty++;
		}
	}  
}
//********************************************************************
if (botoncito=="e5"){
		indice=document.getElementById("cuadro5").selectedIndex;
	if ((a5=="will_there_be_enough_water_in_the_future" && indice==1)) {
		//alert("muy bien5");
		document.getElementById('bien').play();
		 $('#siguien').css('display','inline');
		 $('.centered-btns_nav').css('display','none');
		 $('#e5').css('display','none');
		$(form1.e5).css('pointer-events','none');
		$(form1.e5).css('opacity','0.6');
		$(form1.what_do_you_usually_do_in_your_free_time).css('pointer-events','none'); 
		$(form1.what_do_you_usually_do_in_your_free_time).css('border','3px solid #308c58');
		//$('#campiño5').css('border','2px solid #308c58');
		$('#'+a5).css('opacity','0.6');
		setTimeout(function(){$('#reproduce44').css('opacity','0.9');$('#reproduce44').css('pointer-events','auto'); activar1[4] = 1;},700);
		cuentabien++;
		homero55=1;
		$('#siguien').css('opacity','1');
		//ficty++;
	}
	else{
		aux++;
		if(aux<=2){
		document.getElementById('sorry').play();
		//alert("Try again. You have 3 attempts, get: "+aux+" attempts");
		$(form1.what_do_you_usually_do_in_your_free_time).css('border','3px solid #fc484c');
		//$('#campiño5').css('border','2px solid #fc484c');
		}
		if ((aux>2)&&(a5!="will_there_be_enough_water_in_the_future")){
			//alert("You've exhausted your attempts");
			$(form1.what_do_you_usually_do_in_your_free_time).css('pointer-events','none'); 
			/*$(form1.what_kind_of_music_do_they_enjoy_dancing).css('border','2px solid #fc484c');
			$('#campiño5').css('border','2px solid #fc484c');*/
			document.getElementById('correc').play();
			$('#'+a5).css('opacity','0.6');
			$(form1.e5).css('pointer-events','none');
			$(form1.e5).css('opacity','0.6');
			$(form1.what_do_you_usually_do_in_your_free_time).css('opacity','0.6');
			$('#ti5').css('display','none');
			setTimeout(function(){
				$('#m5').css('display','inline');
				$('#m5').css('visibility','visible');
				$('#reproduce44').css('opacity','0.9');activar1[4] = 1; 
				document.getElementById('a5').play();
				$('#reproduce44').css('pointer-events','auto');},2000);
			

			cuentamal++;
			homero55=1;
			//ficty++;
				$('#e5').css('display','none');
			$('#siguien').css('display','inline');
			$('#siguien').css('opacity','1');
		}
	}

}
	/*if(ficty==5){
	//setTimeout(function(){automatico1();},7000)
	setTimeout(function(){$('#escuchar').css('opacity','0.9');$('#escuchar').css('pointer-events','auto');},2000);
	}*/
}

function finaliza(){
$('#siguien').css('display','none'); 
	$('.perendengues').css('display','none'); 
	$('#q1').css('display','none');
	$('.sig').css('display','none');
	$('#listeniando').css('display','none');
	$('#r1').css('display','none');
	$('.listeniando').css('display','none');
	$('#escuchar').css('display','none');

	resultado(cuentabien,5);

	
	
}
