/*jslint browser: true*/
/*global $, jQuery, alert*/
var x = 0,
	xtit = 0,
	xback = 0,
	xcredit = 200;
var movex = 0,
	movey = 0,
	cont = 0;
var div_ancho, div_alto;
var VELOCIDAD = 40,
	LLEVAMOV = 0;
var a_canvas;
var blockVideo = 0,
	blockBlock = [0, 0, 0, 0];
var posicionP = 0;
var lock = 0;
var tamx = 140,
	tamy = 50;
var cadVariables,
    posicionC;


function closebuscador() {
	       $("#buscador").hide("slow");
	       $(".modal-window").css('left', '45%');
	       $(".modal-window").css('top', '45%');
	       $(".modal-window").css('right', '45%');
	       $(".modal-window").css('bottom', '45%');
}

function envia(rotelo) {
	"use strict";
	if (rotelo === 1) {
		if (cadVariables === '11' || cadVariables === '21' || cadVariables === '31' || cadVariables === '41') {
			rotelo = '11';
		}
		setTimeout(function () {
			window.location = "videos/cinema/cinemapr.html?" + rotelo;
		}, 1000);
	} else if (rotelo === 2) {
		if (cadVariables === '11' || cadVariables === '21' || cadVariables === '31' || cadVariables === '41') {
			rotelo = '21';
		}
		setTimeout(function () {
			window.location = "videos/bar/barpr.html?" + rotelo;
		}, 1000);
	} else if (rotelo == 3) {
		if (cadVariables == '11' || cadVariables == '21' || cadVariables == '31' || cadVariables == '41') {
			rotelo = '31';
		}
		setTimeout(function () {
			window.location = "videos/gym/gympr.html?" + rotelo;
		}, 1000);
	} else if (rotelo == 4) {
		if (cadVariables == '11' || cadVariables == '21' || cadVariables == '31' || cadVariables == '41') {
			rotelo = '41';
		}
		setTimeout(function () {
			window.location = "videos/food/foodpr.html?" + rotelo;
		}, 1000);
	} else if (rotelo == 5) {
		if (cadVariables == '11' || cadVariables == '21' || cadVariables == '31' || cadVariables == '41') {
			window.location = "videos/know/knowpr.html?" + cadVariables;
		}
		if (cadVariables != '11' || cadVariables != '21' || cadVariables != '31' || cadVariables != '41') {
			window.location = "videos/know/knowpr.html?5";
		}
	}
}
$(document).ready(function () {
	"use strict";
	cadVariables = location.search.substring(1, location.search.length);
	var imagen,
		padre;
	if (cadVariables != 0) {
		imagen = document.getElementById('act');
		if (!imagen) {
			alert("El elemento selecionado no existe");
		} else {
			padre = imagen.parentNode;
			padre.removeChild(imagen);
		}
		imagen = document.getElementById('overlay');
		if (!imagen) {
			alert("El elemento selecionado no existe");
		} else {
			padre = imagen.parentNode;
			padre.removeChild(imagen);
		}
		imagen = document.getElementById('box');
		if (!imagen) {
			alert("El elemento selecionado no existe");
		} else {
			padre = imagen.parentNode;
			padre.removeChild(imagen);
		}
	}
	if (cadVariables == '5') {
		$('#noopaco').css('opacity', '1');
		$('#noopaco').addClass('bigbang');
		$('#inst').removeClass('bigbang');
	}
	if (cadVariables == '1') {
		$('#noopaco2').css('opacity', '1');
		$('#noopaco2').addClass('bigbang');
		$('#inst').removeClass('bigbang');
	}
	if (cadVariables == '2') {
		$('#noopaco3').css('opacity', '1');
		$('#noopaco2').css('opacity', '1');
		$('#noopaco3').addClass('bigbang');
		$('#inst').removeClass('bigbang');
	}
	if (cadVariables == '3') {
		$('#noopaco4').css('opacity', '1');
		$('#noopaco3').css('opacity', '1');
		$('#noopaco2').css('opacity', '1');
		$('#noopaco4').addClass('bigbang');
		$('#inst').removeClass('bigbang');
		cadVariables = '11';
	}
	if (cadVariables == '4') {
		$('#noopaco').css('opacity', '1');
		$('#inst').removeClass('bigbang');
		cadVariables = '11';
	}
});

function left(){
    "use strict";
	var myWidth = window.innerWidth,
        myHeight = window.innerHeight,
        ciclaWidth = $('#ciclista').innerWidth(),
        ciclaHeight = $('#ciclista').innerHeight();
    for(var i=0;i<5;i++){
    if ( x <= myWidth - (ciclaWidth + 10)) {
		x = x + 15;
		$('#ciclista').css('left', x);
		$('#tres').css('display', 'none');
		$('#cuatro').css('display', 'none');
		if (posicionP == 1) {
			$('#uno').css('display', 'inline-block');
			$('#dos').css('display', 'none');
			posicionP = 0;
		} else {
			$('#dos').css('display', 'inline-block');
			$('#uno').css('display', 'none');
			posicionP = 1;
		}
	} else if (x >= myWidth - (ciclaWidth + 10) && xback < 500) {
		xback += 2;
		xtit -= 10;
		xcredit -= 1;
		$("#canvasContainer").css('background-position', xback + '% 100%');
		$("#Creditoi").css('left', xcredit + "%");
		$("#buttons").css('left', xtit + 'px');
	}
    
    if (lock == 1) {
		posicionC = 0;
		//si la tecla presionada es direccional derecho
		if (x < div_ancho - 205) {
			x = x + 15; //mueve la cicla 15 pixeles a la derecha
			lienzo();
		} else {
			if (xback < 100) {
				xback += 1;
				xtit -= 15;
				$("#myCanvas").css('background-position', xback + '% 100%');
				lienzo();
			}
		}
	}
    }
    
    
}

function right(){
    var myWidth = window.innerWidth,
        myHeight = window.innerHeight,
        ciclaWidth = $('#ciclista').innerWidth(),
        ciclaHeight = $('#ciclista').innerHeight();
    for(var i=0;i<5;i++){
    
    if ( x > 3) {
		x = x - 15;
		$('#ciclista').css('left', x);
		$('#dos').css('display', 'none');
		$('#uno').css('display', 'none');
		if (posicionP == 1) {
			$('#cuatro').css('display', 'inline-block');
			$('#tres').css('display', 'none');
			posicionP = 0;
		} else {
			$('#tres').css('display', 'inline-block');
			$('#cuatro').css('display', 'none');
			posicionP = 1;
		}
	} else if ( x <= 3 && xback > 0) {
		xback -= 2;
		xtit += 10;
		xcredit += 1;
		$("#canvasContainer").css('background-position', xback + '% 100%');
		$("#Creditoi").css('left', xcredit + "%");
		$("#buttons").css('left', xtit + 'px');
	}
    
    if ( lock == 1) { //si la tecla presionada es direccional izquierdo
		posicionC = 1;
		if (x > 0) {
			x = x - 15; //mueve la nave 5 pixeles a la izquierda
			lienzo();
		} else {
			if (xback > 0) {
				xback -= 1;
				xtit += 15;
				$("#myCanvas").css('background-position', xback + '% 100%');
				lienzo();
			}
		}
	}
    }
}

function whichButton(event) {
	"use strict";
    
	var myWidth = window.innerWidth,
        myHeight = window.innerHeight,
        ciclaWidth = $('#ciclista').innerWidth(),
        ciclaHeight = $('#ciclista').innerHeight();
	if (event.keyCode == '39' && x <= myWidth - (ciclaWidth + 10)) {
		x = x + 15;
		$('#ciclista').css('left', x);
		$('#tres').css('display', 'none');
		$('#cuatro').css('display', 'none');
		if (posicionP == 1) {
			$('#uno').css('display', 'inline-block');
			$('#dos').css('display', 'none');
			posicionP = 0;
		} else {
			$('#dos').css('display', 'inline-block');
			$('#uno').css('display', 'none');
			posicionP = 1;
		}
	} else if (event.keyCode == '39' && x >= myWidth - (ciclaWidth + 10) && xback < 500) {
		xback += 2;
		xtit -= 10;
		xcredit -= 1;
		$("#canvasContainer").css('background-position', xback + '% 100%');
		$("#Creditoi").css('left', xcredit + "%");
		$("#buttons").css('left', xtit + 'px');
	}
	if (event.keyCode == '37' && x > 3) {
		x = x - 15;
		$('#ciclista').css('left', x);
		$('#dos').css('display', 'none');
		$('#uno').css('display', 'none');
		if (posicionP == 1) {
			$('#cuatro').css('display', 'inline-block');
			$('#tres').css('display', 'none');
			posicionP = 0;
		} else {
			$('#tres').css('display', 'inline-block');
			$('#cuatro').css('display', 'none');
			posicionP = 1;
		}
	} else if (event.keyCode == '37' && x <= 3 && xback > 0) {
		xback -= 2;
		xtit += 10;
		xcredit += 1;
		$("#canvasContainer").css('background-position', xback + '% 100%');
		$("#Creditoi").css('left', xcredit + "%");
		$("#buttons").css('left', xtit + 'px');
	}
	if (event.keyCode == '39' && lock == 1) {
		posicionC = 0;
		//si la tecla presionada es direccional derecho
		if (x < div_ancho - 205) {
			x = x + 15; //mueve la cicla 15 pixeles a la derecha
			lienzo();
		} else {
			if (xback < 100) {
				xback += 1;
				xtit -= 15;
				$("#myCanvas").css('background-position', xback + '% 100%');
				lienzo();
			}
		}
	}
	
}
