/*jslint browser: true*/
/*global $, jQuery, alert*/
var hlp = 0,
	cont = 0,
	i = 0,
	j = 0;
var intento = 0;
var fin = 3;
var cuentabien = 0,
	cuentamal = 0,
    temp,
    auto;
var lleva = [11, 11, 11, 11, 11, 11, 11, 11, 11, 11];
var rta = ["Ana is going to drink a beer", "Luis is going exercise", "Susy and pablo are going to dance", "Dwan is going to watch a movie", "Martha is going to do some yoga", "Charles and Andrew are going to eat hamburgers", "I am going to travel", "Clara and Nancy are going to visit the doctor", "Sara is going to listen to music", "Marcos and I are going to play video games"];
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*    ACCIONES PARA LA ACTIVIDAD NUMERO 2 DE READING*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function limpia() {
    "use strict";
	$('#r1').css('display', 'none');
	$('#cuadro').css('display', 'none');
	$('.check').css('display', 'none');
	$('#naegacion').css('display', 'none');
	$('#title').css('display', 'none');
	resultado(cuentabien, 10);
}
function prime() {
	"use strict";
	var aleatorio = 0,
		ale = false;
	while (ale === false) {
		aleatorio = Math.floor(Math.random() * (9));
		ale = true;
		for (i = 0; i < 10; i += 1) {
			if (aleatorio === lleva[i]) {
				ale = false;
			}
		}
	}
	document.getElementById('imagen1').value = rta[aleatorio];
	//document.getElementById('musica'+aleatorio).play();			
	lleva[cont] = aleatorio;
	cont += 1;
}

function check(id) {
	"use strict";
	var espacio = document.getElementById('imagen1').value;
	if (id === espacio) {
		document.getElementById('bien1').play();
		setTimeout(function () {}, 1000);
		cuentabien += 1;
		intento = 0;
		if (cont < 10) {prime(); }
    } else {
		if (intento === 0) {
			document.getElementById('mal1').play();
			intento += 1;
		} else if (intento === 1) {
			//		setTimeout(function(){},1000);
			intento = 0;
			cuentamal += 1;
			if (cuentamal + cuentabien === 10) {prime(); }
		}
	}
	if ((cuentabien + cuentamal) === 10) {
		limpia();
	}
}

function carga() {
    "use strict";
	$('#informa').css('opacity', '.1');
	$('#sig').css('opacity', '.1');
	temp = setTimeout(function () {
		$('#informa').css('opacity', '1');
	}, 30000);
	$('#plane').addClass("muestrame");
	empezar();
	document.getElementById('label').innerHTML = "Read carefully";
}

function empezar() {
    "use strict";
	$('#gallery').css('opacity', '1');
    document.getElementById('imagen1').value = rta[0];
	document.getElementById('Ana is going to drink a beer').click();
	document.getElementById('a1').play();
	
	auto = setTimeout(function () {
		document.getElementById('imagen1').value = rta[1];
		document.getElementById('Luis is going exercise').click();
		document.getElementById('a2').play();
	}, 4000);
	auto = setTimeout(function () {
		document.getElementById('imagen1').value = rta[2];
		document.getElementById("Susy and pablo are going to dance").click();
		document.getElementById('a3').play();
	}, 8000);
	auto = setTimeout(function () {
		document.getElementById('imagen1').value = rta[3];
		document.getElementById('Dwan is going to watch a movie').click();
		document.getElementById('a4').play();
	}, 12000);
	auto = setTimeout(function () {
		document.getElementById('imagen1').value = rta[4];
		document.getElementById('Martha is going to do some yoga').click();
		document.getElementById('a5').play();
	}, 17000);
	auto = setTimeout(function () {
		document.getElementById('imagen1').value = rta[5];
		document.getElementById('Charles and Andrew are going to eat hamburgers').click();
		document.getElementById('a6').play();
	}, 21250);
	auto = setTimeout(function () {
		document.getElementById('imagen1').value = rta[6];
		document.getElementById('I am going to travel').click();
		document.getElementById('a7').play();
	}, 26100);
	auto = setTimeout(function () {
		document.getElementById('imagen1').value = rta[7];
		document.getElementById("Clara and Nancy are going to visit the doctor").click();
		document.getElementById('a8').play();
	}, 30000);
	auto = setTimeout(function () {
		document.getElementById('imagen1').value = rta[8];
		document.getElementById('Sara is going to listen to music').click();
		document.getElementById('a9').play();
	}, 33000);
	auto = setTimeout(function () {
		document.getElementById('imagen1').value = rta[9];
		document.getElementById('a10').play();
		document.getElementById('Marcos and I are going to play video games').click();
	}, 36220);
	auto = setTimeout(function () {
		document.getElementById('imagen1').value = rta[0];
		document.getElementById('Ana is going to drink a beer').click();
		document.getElementById('label').innerHTML = "Select an image for:";
		prime();
	}, 39370);
}
