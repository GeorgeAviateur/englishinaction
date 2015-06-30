/*jslint browser: true*/
/*global $, jQuery, alert*/

var aux = 0,
	aux2 = 1,
	end = 0,
	cuentabien = 0,
	cuentamal = 0;
var temporizador, temporizador2;

function alertSize() {
    "use strict";
	aux = 0;
	aux2 = 1;
	end = 0;
	cuentabien = 0;
	cuentamal = 0;
}
var tiempito = 14000;

function readme() {
	"use strict";
	ins();
	document.getElementById('instruyeme').play();
	$('#r1').css('opacity', '0.2');
	temp = setTimeout(function () {
		document.getElementById('hablame').play();
	}, 16000);
	temp = setTimeout(function () {
		$('#r1').css('opacity', '1');
		changehand(2);
	}, 16000);
}

function goAll() {
	$('#r1').css('opacity', '1');
	$('#blanco').css('opacity', '1');
	changehand(2);
	$('#plane').addClass("muestrame");
	$('aside').css('z-index', '12');
	var talk = document.getElementById('hablame');
	if (talk) talk.play();
	$('#startActi').css('display', 'none');
	$('.sig').css('pointer-events', 'auto');
	$('.sig').css('opacity', '1');
	$('nav#sig').css('opacity', '1');
	$('nav#sig2').css('opacity', '1');
	$('.prev').css('opacity', '1');
	$('.prev').css('pointer-events', 'auto');
	$('a').css('pointer-events', 'auto');
	carga();
}

function readme(time) {
	$('#r1').css('opacity', '0.2');
	$('#blanco').css('opacity', '0.2');
	$('.sig').css('opacity', '0.2');
	$('.sig').css('pointer-events', 'none');
	$('.prev').css('opacity', '0.2');
	$('.prev').css('pointer-events', 'none');
	$('a').css('pointer-events', 'none');
	$('#alumbraobj').addClass('bigEntrance');
	document.getElementById('georgeRules').innerHTML += "<div id='startActi' onclick='goAll()'><h1>START</h1></div>";
	$('#startActi').css('visibility', 'hidden');
	changehand(1);
	changehand(2);
	$('#objetivos').css('visibility', 'visible');
	tiempito = time;
	temp = setTimeout(function () {
		$('#alumbraobj').removeClass('bigEntrance');
		$('#objetivos').css('visibility', 'hidden');
		$('#instruccion').css('visibility', 'visible');
		changehand(0);
		changehand(3);
		$('#alumbrains').addClass('bigEntrance');
		var readIns = document.getElementById('instruyeme');
		if (readIns) readIns.play()
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

function readyou() {
	$('#r1').css('opacity', '0.2');
	$('#blanco').css('opacity', '0.2');
	$('#alumbraobj').addClass('bigEntrance');
	tiempito = 15000;
	changehand(1);
	changehand(2);
	insob();
	temp = setTimeout(function () {
		$('#alumbraobj').removeClass('bigEntrance');
		ins();
		changehand(0);
		changehand(3);
		$('#alumbrains').addClass('bigEntrance');
	}, 7000);
	temp = setTimeout(function () {
		$('#instruccion').css('visibility', 'hidden');
	}, 16000);
	temp = setTimeout(function () {
		$('#r1').css('opacity', '1');
		$('#blanco').css('opacity', '1');
		changehand(2);
		$('#plane').addClass("muestrame");
	}, 16000);
}

function readme2() {
	var temp;
	ins();
	document.getElementById('instruyeme').play();
	temp = setTimeout(function () {
		$('.sig').css('display', 'inline-block');
		document.getElementById('conversation').play();
	}, 13000);
}

function readme3() {
	var temp;
	document.getElementById('instruyeme').play();
	temp = setTimeout(function () {
		document.getElementById('hablame').play();
	}, 45500);
	temp = setTimeout(function () {
		$('#r1').css('display', 'inline-block');
		$('#r1').css('width', '98%');
		$('#emergent').css('display', 'none');
		$('#listeniando').css('display', 'inline-block');
		$('.sig').css('display', 'inline-block');
	}, 45500);
	temp = setTimeout(function () {
		$('.sig').css('display', 'inline-block');
	}, 45000);
}

function readme4() {
	var temp;
	$('#instruccion').css('animation', 'pasadoaparece .5s linear');
	$('#instruccion').css('display', 'inline-block');
	document.getElementById('instruyeme').play();
	temp = setTimeout(function () {
		document.getElementById('hablame').play();
	}, 25000);
	temp = setTimeout(function () {
		ins();
		ins();
		$('#r1').css('opacity', '1');
	}, 25000);
	temp = setTimeout(function () {
		$('.sig').css('display', 'inline-block');
		document.getElementById('conversation').play();
	}, 25500);
}

function readme5() {
	ins();
	document.getElementById('instruyeme').play();
	$('#r1').css('opacity', '0.2');
	temp = setTimeout(function () {
		$('#r1').css('opacity', '1');
		changehand(2);
		ins();
	}, 10000);
}

function readme5(time) {
	ins();
	document.getElementById('instruyeme').play();
	$('#r1').css('opacity', '0.2');
	temp = setTimeout(function () {
		$('#r1').css('opacity', '1');
		changehand(2);
	}, time);
}

function ins() {
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
			ins();
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

function insob() {
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

function changehand(trae) {
	if (trae == 0) {
		$('#hand1').css('visibility', 'visible');
	}
	if (trae == 1) {
		$('#hand2').css('visibility', 'visible');
	}
	if (trae == 2) {
		$('#hand1').css('visibility', 'hidden');
	}
	if (trae == 3) {
		$('#hand2').css('visibility', 'hidden');
	}
}

function volver(vuelvee) {
	if (vuelvee == 5)
		if (confirm("¿Quieres Volver a Actividad5?")) {
			document.location.href = 'r5.html';
		}
	if (vuelvee == 4)
		if (confirm("¿Quieres Volver a Actividad4?")) {
			document.location.href = 'r4.html';
		}
	if (vuelvee == 3)
		if (confirm("¿Quieres Volver a Actividad3?")) {
			document.location.href = 'r3.html';
		}
	if (vuelvee == 2)
		if (confirm("¿Quieres Volver a Actividad2?")) {
			document.location.href = 'r2.html';
		}
	if (vuelvee == 1)
		if (confirm("¿Quieres Volver a Actividad 1?")) {
			document.location.href = 'r.html';
		}
	if (vuelvee == 0)
		if (confirm("¿Quieres Volver a Centro de Actividades?")) {
			document.location.href = '../../centro.html';
		}
}

function resultado(cuentabien, sobre) {
	escribir = document.getElementById("result");
	escribir.innerHTML = "Successful: " + cuentabien + "| Wrong:" + (sobre - cuentabien);
	$('#informa').css('display', 'none');
	$('#informa').css('visibility', 'hidden');
	if (sobre > 3) {
		if (cuentabien > (sobre / 2 + 1)) document.getElementById("retrowell").play();
		else
		if (cuentabien < (sobre / 2 + 1)) document.getElementById("retrobad").play();
		else
		if (cuentabien == (sobre / 2 + 1)) document.getElementById("retrowell").play();
	}
	if (sobre <= 3) {
		if (cuentabien > 2) document.getElementById("retrowell").play();
		else
		if (cuentabien < 2) document.getElementById("retrobad").play();
		else
		if (cuentabien == 2) document.getElementById("retrowell").play();
	}
	$('#review').css('display', 'inline-block');
	$('.final').css('display', 'inline');
}
