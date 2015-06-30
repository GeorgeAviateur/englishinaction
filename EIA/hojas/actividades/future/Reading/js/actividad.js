/*jslint browser: true*/
/*global $, jQuery, alert*/
var aux = 0,
	aux2 = 1,
	cont = 0,
	end = 0,
	cuentabien = 0,
	cuentamal = 0,
    temp,
    audio2;

function carga() {
	"use strict";
	$('#sig').css('opacity', '.1');
	$('#informa').css('opacity', '.1');
	temp = setTimeout(function () {
		$('#informa').css('opacity', '1');
	}, 30000);
	$('#plane').addClass("muestrame");
}

function fin() {
    "use strict";
	end = 1;
}

function pregunta() {
	"use strict";
	var str = "",
		str2 = "";
	clearTimeout(temp);
	document.getElementById('instruyeme').pause();
	document.getElementById('mal0').pause();
	document.getElementById('mal1').pause();
	document.getElementById('mal2').pause();
	if (cont === 0) {
		$('.sig').css('display', 'none');
		$('#blanco').css('display', 'none');
		$('#q1').css('display', 'inline-block');
		$('#void').css('display', 'inline-block');
		$('#grab1').css('display', 'none');
		$('#grab2').css('display', 'none');
		$('#audio1').css('display', 'none');
		document.getElementById('ask1').play();
	} else {
		if (end >= 0 && end < 3) {
			str = "#q" + cont;
			str2 = "#q" + (cont + 1);
			$(str).css('display', 'none');
			$(str2).css('display', 'inline-block');
			$(str2 + ' div').css('display', 'inline');
			document.getElementById('ask' + (cont + 1)).play();
		}
		if (end === 3) {
			str = "#q" + cont;
			str2 = "#q" + (cont + 1);
			$(str).css('display', 'none');
			$(str2).css('display', 'none');
			$('#void').css('display', 'none');
			$('article').css('display', 'none');
			resultado(cuentabien, 3);
			cuentabien = 0;
		}
	}
	cont += 1;
	end += 1;
}

function correcta(lleva) {
	"use strict";
	clearTimeout(temp);
	document.getElementById('bien').play();
	cuentabien += 1;
	$('.acertar h2').addClass('bn');
	if (lleva === 0) {
		$('#q1 .ans').css('cursor', 'default');
		$('#q1 h2').removeClass('ans');
		document.getElementById('esto').removeAttribute("onclick");
		document.getElementById('es').removeAttribute("onclick");
		document.getElementById('udec11').removeAttribute("onclick");
	}
	if (lleva === 1) {
		$('#q2 .ans').css('cursor', 'default');
		$('#q2 h2').removeClass('ans');
		document.getElementById('esto2').removeAttribute("onclick");
		document.getElementById('es2').removeAttribute("onclick");
		document.getElementById('udec2').removeAttribute("onclick");
	}
	if (lleva === 2) {
		$('#q3.ans').css('cursor', 'default');
		$('#q3 h2').removeClass('ans');
		document.getElementById('esto3').removeAttribute("onclick");
		document.getElementById('es3').removeAttribute("onclick");
		document.getElementById('udec3').removeAttribute("onclick");
	}
	setTimeout(function () {
		$('.acertar h2').removeClass('bn');
		pregunta();
	}, 3000);
}
var audio1, adio2, audio3;

function erronea(lleva) {
	"use strict";
	clearTimeout(temp);
	$('.negar h2').addClass('malongo');
	$('.acertar h2').addClass('bn');
	if (lleva === 0) {
		$('#q1 .ans').css('cursor', 'default');
		$('#q1 h2').removeClass('ans');
		document.getElementById('esto').removeAttribute("onclick");
		document.getElementById('es').removeAttribute("onclick");
		document.getElementById('udec11').removeAttribute("onclick");
		document.getElementById('thecorrect').play();
		temp = setTimeout(function () {
			audio1 = document.getElementById('mal0');
			audio1.play();
			audio1.onended = function () {
				pregunta();
			};
		}, 3000);
	}
	if (lleva === 1) {
		$('#q2 .ans').css('cursor', 'default');
		$('#q2 h2').removeClass('ans');
		document.getElementById('esto2').removeAttribute("onclick");
		document.getElementById('es2').removeAttribute("onclick");
		document.getElementById('udec2').removeAttribute("onclick");
		document.getElementById('thecorrect').play();
		temp = setTimeout(function () {
			audio2 = document.getElementById('mal1');
			audio2.play();
			audio2.onended = function () {
				pregunta();
			};
		}, 3000);
	}
	if (lleva === 2) {
		$('#q3 .ans').css('cursor', 'default');
		$('#q3 h2').removeClass('ans');
		document.getElementById('esto3').removeAttribute("onclick");
		document.getElementById('es3').removeAttribute("onclick");
		document.getElementById('udec3').removeAttribute("onclick");
		$('#primera').css('display', 'none');
		$('#tercera').css('display', 'inline');
		$('#segunda').css('display', 'none');
		document.getElementById('thecorrect').play();
		temp = setTimeout(function () {
			audio3 = document.getElementById('mal2');
			audio3.play();
			audio3.onended = function () {
				pregunta();
			};
		}, 3000);
	}
	cuentamal += 1;
	setTimeout(function () {
		$('.negar h2').removeClass('malongo');
		$('.acertar h2').removeClass('bn');
	}, 6500);
}
