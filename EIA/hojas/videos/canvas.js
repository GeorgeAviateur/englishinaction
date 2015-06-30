/*jslint browser: true*/
/*global $, jQuery, alert*/
var cadVariables;

function envia() {
	setTimeout(function () {
		window.location = "../../ciudad.html?" + cadVariables;
	}, 1000);
}

function enviapast() {
	setTimeout(function () {
		window.location = "../../ciudadpast.html?" + cadVariables;
	}, 1000);
}

function enviafuture() {
	setTimeout(function () {
		window.location = "../../ciudadfuture.html?" + cadVariables;
	}, 1000);
}
$(document).ready(function () {
	cadVariables = location.search.substring(1, location.search.length);
	if (cadVariables == '11' || cadVariables == '21' || cadVariables == '31' || cadVariables == '41') {
		$('#toDo').css('opacity', '1');
		$('#toDo').addClass('bigbang');
		$('#back').css('opacity', '.5');
		$('#back').removeClass('bigbang');
	}
	if (cadVariables == '5') {
		cadVariables = '5';
	}
	if (cadVariables == '21') {}
	if (cadVariables == '31') {}
	if (cadVariables == '41') {}
	if (cadVariables == '0') {
		cadVariables = '10';
	}
});

function go(time) {
	//confirmar=confirm("¿Do you want to do the activities without see another videos?"); 
	//if (confirmar){
	if (time == 0) location.href = "../../actividades/centro.html";
	if (time == 1) location.href = "../../actividades/centropast.html";
	if (time == 2) location.href = "../../actividades/centrofuture.html";
	//}		
}
