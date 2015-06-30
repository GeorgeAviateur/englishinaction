/*jslint browser: true*/
/*global $, jQuery, alert*/
var ejreading = new Array(32);
var alo;
var end = 0;
/*var ejspeaking = new Array(12);
var ejreading = new Array(12);
var ejreadingning = new Array(12);*/
var activar = new Array(32);
var suplente = new Array(32);
var bart1 = 0;
var bart2 = 0;
/*var activar1 = new Array(12);
var activar2 = new Array(12);
var activar3 = new Array(12);*/
var respuestinha;
var contadorsinho = 0;
var j; /*,m=1,s=0;*/
var audio;
var audio1;
var pausito;
var Cad;
var pausito1;
var audio3;
var pausito3;
var audio4;
var pausito4;
var instru = 0;
var contador = 0;
var contador1 = 0;
var tiempo = 0;
var activarlistening = new Array(12);
var aux = 0,
	aux2 = 1,
	end = 0,
	cuentabien = 0,
	cuentamal = 0;
var temporizador, temporizador2;
var cadVariables = location.search.substring(1, location.search.length);
//-------------------------------------------------------------------------------------------------------------------------------------
function habilidad() {
    "use strict";
    $('#continuar').css('display', 'inline');
	var aleatorio = Math.round(Math.random() * 9);
    
	$('#olas').css('display', 'none');
	$('#pregun').css('display', 'none');
	$('#advertisment').css('display', 'none');
	$('#advertisment2').css('display', 'none');
    $('#myRoundabout li').css('pointer-events','none');
	if ((aleatorio == 0) || (aleatorio == 1) || (aleatorio == 2) || (aleatorio == 3) || (aleatorio == 4) || (aleatorio == 5) || (aleatorio == 6)) {
			//$('#fotocosinos').css('display','none');
			$('#perendengues').css('display', 'none');
			$('#perendengues').css('display', 'none');
			$('#reproducir00').css('display', 'none');
			$('#cuadroPreguntas').css('display', 'inline');
			$('.orden').css('display', 'inline');
			$('.orden').css('margin-top', '1%');
			$('.orden').css('margin-bottom', '2%');
		}
		ejreading[aleatorio] = 1;
		//alert(aleatorio);
		//}
	}
	//-------------------------------------------------------------------------------------------------------------------------------------
	//--------------------------------------------------------------------------------------------------------------------------------
function objetivos() {
		$('#objetivos').css('visi', '0.6');
		document.getElementById('obj').innerHTML = 'To evaluate the listening skills acquired during the use of this module.';
	}
	//-----------------------------------------------------------------------------------------------------------------------------------
function instruccion() {
		/*if(contador>0){
		audio.pause();
		audio.currentTime = 0;
		}*/
		if ((ejreading[0] == 1) || (ejreading[1] == 1) || (ejreading[2] == 1) || (ejreading[3] == 1) || (ejreading[4] == 1) || (ejreading[5] == 1) || (ejreading[6] == 1)) {
			audio1 = document.createElement("audio");
			audio1.setAttribute("id", "instruyeme");
			audio1.setAttribute("controls", "controls");
			var source = document.createElement("source");
			source.setAttribute("src", "../../../audios/instrucciones/listening/proceso/i1.wav");
			source.setAttribute("type", "audio/mpeg");
			audio1.appendChild(source);
			document.getElementById('instruccion').innerHTML = '<h5>Listen to the pronunciation of a free time activity three times and match it with the correct picture. Click on the picture to listen to the activity. Then press "NEXT" to continue. </h5>';
		}
		if ((ejreading[7] == 1) || (ejreading[8] == 1) || (ejreading[9] == 1) || (ejreading[10] == 1) || (ejreading[11] == 1) || (ejreading[12] == 1) || (ejreading[13] == 1) || (ejreading[14] == 1) || (ejreading[15] == 1)) {
			audio1 = document.createElement("audio");
			audio1.setAttribute("id", "instruyeme");
			audio1.setAttribute("controls", "controls");
			var source = document.createElement("source");
			source.setAttribute("src", "../../../audios/instrucciones/listening/proceso/i2.wav");
			source.setAttribute("type", "audio/mpeg");
			audio1.appendChild(source);
			document.getElementById('ins').innerHTML = '<h5>Click on the picture and listen to the pronunciation.  Then write the word you heard and press "NEXT" to continue. You can listen to the word three times. You have one opportunity to do the activity to answer.';
		}
		if ((ejreading[16] == 1) || (ejreading[17] == 1) || (ejreading[18] == 1) || (ejreading[19] == 1) || (ejreading[20] == 1)) {
			audio1 = document.createElement("audio");
			audio1.setAttribute("id", "instruyeme");
			audio1.setAttribute("controls", "controls");
			var source = document.createElement("source");
			source.setAttribute("src", "../../../audios/instrucciones/listening/proceso/i5.wav");
			source.setAttribute("type", "audio/mpeg");
			audio1.appendChild(source);
			document.getElementById('instruccion').innerHTML = '<h5> Listen to a man talking about teenager’s films preferences.  Then answer the question.  Choose a, b or c. You can listen to the audio three times, but you have just one opportunity to answer. It is recommended that you take notes. Press "NEXT" to continue.</h5';
		}
		if ((ejreading[19] == 1) || (ejreading[20] == 1) || (ejreading[21] == 1) || (ejreading[22] == 1) || (ejreading[23] == 1) || (ejreading[24] == 1) || (ejreading[25] == 1)) {
			audio1 = document.createElement("audio");
			audio1.setAttribute("id", "instruyeme");
			audio1.setAttribute("controls", "controls");
			var source = document.createElement("source");
			source.setAttribute("src", "../../../audios/instrucciones/listening/proceso/i6.wav");
			source.setAttribute("type", "audio/mpeg");
			audio1.appendChild(source);
			document.getElementById('instruccion').innerHTML = '<h5>Listen to the question and type it  in the correct order. Then, choose the answer that best fits the question. You have one opportunity to do the activity. Press "NEXT" to continue.</h5>';
		}
	}
	//-------------------------------------------------------------------------------------------------------------------------------------
function redireccionar() {
		window.location = "libro.html?" + cadVariables;
	}
	//-----------------------------------------------------------------------------------------------------------------------------------
function goAll12() {
	$('#r1').css('opacity', '1');
	$('#blanco').css('opacity', '1');
	changehand(2);
	$('#plane').addClass("muestrame");
	$('aside').css('z-index', '12');
	var talk = document.getElementById('hablame');
	if (talk) talk.play();
	$('#startActi').css('display', 'none');
	$('.sig').css('pointer-events', 'auto');
	$('.prev').css('opacity', '1');
	$('.prev').css('pointer-events', 'auto');
	//$('a').css('pointer-events','auto');
	$('.fuckencio').css('display', 'block');
	$('#myRoundabout li').css('pointer-events','auto');
	parrafos();
}

function readme12(time) {
	$('#r1').css('opacity', '0.2');
	$('#blanco').css('opacity', '0.2');
	$('.fuckencio').css('display', 'none');
	$('.sig').css('pointer-events', 'none');
	//$('#blanco').css('pointer-events','none');
	$('.sig').css('opacity', '0.2');
	$('#continuar1').css('opacity', '1');
	$('.prev').css('opacity', '0.2');
	$('.prev').css('pointer-events', 'none');
	//$('a').css('pointer-events','none');
	$('#alumbraobj').addClass('bigEntrance');
	//$('#continuar').css('display','none');
	document.getElementById('georgeRules').innerHTML += "<div id='startActi' onclick='goAll12()'><h1>START</h1></div>";
	$('#startActi').css('visibility', 'hidden');
	changehand(1);
	changehand(2);
	insob12();
	$('#objetivos').css('visibility', 'visible');
	tiempito = time;
	temp = setTimeout(function () {
		ins12();
		$('#alumbraobj').removeClass('bigEntrance');
		$('#objetivos').css('visibility', 'hidden');
		$('#instruccion').css('visibility', 'visible');
		changehand(0);
		changehand(3);
		$('#alumbrains').addClass('bigEntrance');
		/*var readIns=document.getElementById('instruyeme');
		if(readIns)*/
		audio1.play();
	}, 7000);
	temp = setTimeout(function () {
		$('#startActi').css('visibility', 'visible');
		$('#instruccion').css('visibility', 'hidden');
		$('#startActi').addClass('bigEntrance');
		$('#startActi').css('opacity', '1');
	}, time);
	temp = setTimeout(function () {
		$('#startActi').removeClass('bigEntrance');
		$('#startActi').addClass('floating');
	}, time + 2000);
}

function ins12() {
	instruccion();
	if (aux == 0) {
		$('#objetivos').css('visibility', 'hidden');
		$('#txt').css('display', 'inline-block');
		if (tiempito < 14000) {
			tiempito = 14000;
		}
		aux2 = 1;
		$('#instruccion').css('animation', 'pasadoaparece .5s linear');
		$('#instruccion').css('visibility', 'visible');
		clearTimeout(temporizador);
		temporizador2 = setTimeout(function () {
			ins12();
		}, tiempito - 7000);
		aux = 1;
	} else
	if (aux == 1) {
		$('#instruccion').css('z-index', '-1');
		$('#instruccion').css('visibility', 'hidden');
		aux = 0;
		$('#txt').css('display', 'none');
		clearTimeout(temporizador2);
	}
}
function darale(){return ejreading;}
function insob12() {
		objetivos();
		if (aux2 == 1) {
			$('#txt').css('display', 'inline-block');
			$('#instruccion').css('visibility', 'hidden');
			aux = 0;
			$('#objetivos').css('visibility', 'visible');
			clearTimeout(temporizador2);
			temporizador = setTimeout(function () {
				$('#txt').css('display', 'none');
			}, 7000);
			aux2 = 0;
		} else
		if (aux2 == 0) {
			$('#objetivos').css('visibility', 'hidden');
			$('#txt').css('display', 'none');
			aux2 = 1;
			clearTimeout(temporizador);
		}
	}
	//-----------------------------------------------------------------------------------------------------------------------------------
