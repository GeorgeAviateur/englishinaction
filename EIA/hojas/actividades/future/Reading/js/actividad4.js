/*jslint browser: true*/
/*global $, jQuery, alert*/
var j, m = 3,
	s = 0,
	correcta = 0,
	incorrecta = 0;
var i = 0;


function revisar() {
    "use strict";
	var respuestas = ["Spend", "Vacation", "Buy", "Interesting", "Climb", "Try", "Volcano", "Pyramids", "Hiking", "Trip"],
        posicion,
        cad;
	j = 0;
	$('#blanco').css('opacity', '1');
	$('#r1').css('opacity', '1');
	$('#fragmento').css('width', '90%');
	for (i = 0; i < 10; i += 1) {
		j = i + 1;
		$("#cid" + j).css('background-color', '#fc484c');
        posicion = document.getElementById("cid" + j).options.selectedIndex; //posicion
		cad = document.getElementById("cid" + j).options[posicion].text;
		$("#cid" + j).css('color', 'white');
		if (cad === respuestas[i]) {
			//alert(document.getElementById("cid"+j).options[posicion].text); //valor
			$("#cid" + j).css('background-color', '#44af81');
			correcta += 1;
		}
		document.getElementById("cid" + j).disabled = true;
	}
	incorrecta = 10 - correcta;
	$("#reloj").css('display', 'none');
	$(".sol").css('display', 'inline-block');
	$("#imageart").css('display', 'none');
	$("#r1").css('height', '60%');
	$(".sig2").css('display', 'inline-block');
	$("#corr2").css('display', 'block');
	$("#fragmento").css('display', 'block');
	$(".sig").css('display', 'none');
	$("#blanco").css('padding', '0%');
	$("#blanco #fragmento").css('height', 'auto');
	$("#blanco").css('height', 'auto');
	$(".sol").css('height', 'auto');
	$("#blanco").css('margin-bottom', '18px');
	$("select").css('height', '18px');
	$("select").css('font-size', '0.9em');
	$("#informa").css('display', 'none');
	$("#mirelojito").css('display', 'none');
	document.getElementById("bien").pause();
	document.getElementById("instruyeme").pause();
    $("#countdown").countdown360({}).stop();
    
}



function carga() {
    "use strict";
	$('#sig').css('opacity', '.1');
	$('.sig').css('pointer-events', 'auto');
	for (i = 0; i < 9; i += 1) {
		j = i + 1;
		document.getElementById("cid" + j).disabled = false;
	}
    $("#countdown").countdown360({}).start();
	
}


function siguiente() {
    "use strict";
	$('#r1').css('display', 'none');
	$('.sig2').css('display', 'none');
	document.getElementById("instruyeme").pause();
	resultado(correcta, 10);
}
