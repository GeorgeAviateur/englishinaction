/*jslint browser: true*/
/*global $, jQuery, alert*/
var contarbien = 0;
var f, rtaUser, rtaUser2, rtaUser3, rtaUser4, rtaUser5, rtaComp, rtaComp2, rtaComp3, rtaComp4, rtaComp5;
var audio,
    temp;

function inicia() {
    "use strict";
	document.getElementById("first").disabled = true;
	document.getElementById("second").disabled = true;
	document.getElementById("third").disabled = true;
	document.getElementById("fourth").disabled = true;
	document.getElementById("fifth").disabled = true;
}

function check() {
    "use strict";
	f = document.formulario3;
	rtaUser = f.first.value;
	rtaUser2 = f.second.value;
	rtaUser3 = f.third.value;
	rtaUser4 = f.fourth.value;
	rtaUser5 = f.fifth.value;
	rtaComp = f.firstRta.value;
	rtaComp2 = f.secondRta.value;
	rtaComp3 = f.thirdRta.value;
	rtaComp4 = f.fourthRta.value;
	rtaComp5 = f.fifthRta.value;
	if (rtaUser === "3") {
		contarbien += 1;
		$('#first').css('border', '2px solid #44af81');
	} else {
		$('#first').css('border', '2px solid #fc484c');
	}
	if (rtaUser2 === "5") {
		contarbien += 1;
		$('#second').css('border', '2px solid #44af81');
	} else {
		$('#second').css('border', '2px solid #fc484c');
	}
	if (rtaUser3 === "2") {
		contarbien += 1;
		$('#third').css('border', '2px solid #44af81');
	} else {
		$('#third').css('border', '2px solid #fc484c');
	}
	if (rtaUser4 === "1") {
		contarbien += 1;
		$('#fourth').css('border', '2px solid #44af81');
	} else {
		$('#fourth').css('border', '2px solid #fc484c');
	}
	if (rtaUser5 === "4") {
		contarbien += 1;
		$('#fifth').css('border', '2px solid #44af81');
	} else {
		$('#fifth').css('border', '2px solid #fc484c');
	}
	$("#sig2").css('display', 'inline-block');
	$("#sig").css('display', 'none');
	if (contarbien < 3) {audio = document.getElementById('thecorrect'); }
	if (contarbien > 2) {audio = document.getElementById('bien'); }
	audio.play();
	audio.onended = function () {
		$(".noSeVe").css('display', 'inline-block');
	};
	var one = document.getElementById("first").value,
        two = document.getElementById("second").value,
        three = document.getElementById("third").value,
        four = document.getElementById("fourth").value,
        five = document.getElementById("fifth").value;
	document.getElementById("first").value = four;
	document.getElementById("second").value = three;
	document.getElementById("third").value = one;
	document.getElementById("fourth").value = five;
	document.getElementById("fifth").value = two;
	document.getElementById("rta1").innerHTML = "Hi! How are you? Guess what- I’m going to go to New York this weekend on a shopping trip with my Mom! It's a special treat for my birthday, and I can't wait!";
	document.getElementById("rta2").innerHTML = "We are going to stay at the New Yorker. It’s in midtown Manhattan, so it will be easy for us to get to all the main shopping areas.";
	document.getElementById("rta3").innerHTML = "On Saturday morning, we are going to go to 6th Avenue in downtown Manhattan.  I'm going to take a look in Old Navy – they usually have some great bargains! In the afternoon, we’ll probably go uptown to Saks Fifth Avenue.  It’s a bit expensive, but it will be nice to see the latest fashions from the world’s top designers.";
	document.getElementById("rta4").innerHTML = "On Saturday night, Mom is going to take me to Planet Hollywood in Times Square.  It’s a really popular place, with great food and music.  It’ll be a chance to wear my new clothes.";
	document.getElementById("rta5").innerHTML = "We are going to leave on the 10 o’clock bus to Cedarville the next morning. I hope the weather will be ok. Well, that’s all for now.  Write soon.";
}

function enviar() {
    "use strict";
	$("#r1").css('display', 'none');
	$("#sig2").css('display', 'none');
	resultado(contarbien, 5);
}

function carga() {
    "use strict";
	document.getElementById("first").disabled = false;
	document.getElementById("second").disabled = false;
	document.getElementById("third").disabled = false;
	document.getElementById("fourth").disabled = false;
	document.getElementById("fifth").disabled = false;
	$('#informa').css('opacity', '.1');
	$('#sig').css('opacity', '.1');
	temp = setTimeout(function () {
		$('#informa').css('opacity', '1');
	}, 30000);
	$('#plane').addClass("muestrame");
}
