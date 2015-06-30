/*jslint browser: true*/
/*global $, jQuery, alert*/
var aux = 0;
var pasar = 0;
var fin = 0;
var cont1 = 0,
	cont2 = 0,
	cont3 = 0,
    i = 0,
    j = 0;
var audio1, audio2, audio3;
var cuentabien = 0,
	cuentabien1 = 0,
	cuentabien2 = 0,
	cuentabien3 = 0,
	cont = 0;
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*    ACCIONES PARA LA ACTIVIDAD NUMERO 2 DE READING*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
var audio1, audio2, audio3, temp;

function carga() {
	"use strict";
	$('#sig').css('opacity', '1');
	audio1 = document.getElementById("a1");
	audio2 = document.getElementById("a2");
	audio3 = document.getElementById("a3");
	pasar = 1;
	$('#informa').css('opacity', '.1');
	temp = setTimeout(function () {
		$('nav#sig').css('opacity', '1');
		$('#informa').css('opacity', '1');
	}, 30000);
	$('#plane').addClass("muestrame");
}

function muestraRetro(num) {
    "use strict";
	audio1.currentTime = 0;
	audio2.currentTime = 0;
	audio3.currentTime = 0;
	if (num === 1) {
		document.getElementById("eatmyshorts").innerHTML = "<h6><p>Days 1-2: Santiago<br><br>The flight arrives in the capital, Santiago in the morning.<br>After you check in at your hotel, we will visit the main square and then walk to the top of Santa Lucia Hill for a breathtaking view of Santiago.<br>The next day we will travel to Valparaíso and spend the day at one of its beautiful sandy beaches.</p></h6>";
		audio1.play();
	} else if (num === 2) {
		document.getElementById("eatmyshorts").innerHTML = "<h6><p>Days 3-5: Atacama Tatio<br><br>We will fly to Calama at noon.<br>In the afternoon, we will take you on a tour of the Archaeological Museum. The next morning, we will leave for Toconao.<br>There you will visit the Chaxa Lake and see the pink flamingos of Atacama.<br>We will also visit the Moon Valley with its amazing sand dunes and salt crystals.<br></p></h6>";
		audio2.play();
	} else if (num === 3) {
		document.getElementById("eatmyshorts").innerHTML = "<h6><p>Days 6-8: Puerto Varas/Santiago<br><br>We will fly to Puerto Varas early in the morning.<br>In the afternoon, there will be a tour of the National Park.<br>The next day, we will sail to Chiloe Island.<br>During the crossing, we will see dolphins and sea birds.<br>After our seafood lunch, we will go shopping for souvenirs.<br>The next day we will fly back to Santiago.<br>In the evening, you will head to the airport to fly home.<br></p></h6>";
		audio3.play();
	}
	$('#overlay').fadeIn('fast', function () {
		$('#box').animate({
			'left': '90px'
		}, 500);
	});
}

function rueda(valorGiro) {
    "use strict";
	if (valorGiro === 0 && cont1 < 3) {
		$('#boton2').css('display', 'none');
		$('#boton3').css('display', 'none');
		$('#boton1').css('display', 'inline-block');
	} else if (valorGiro === 0 && cont1 > 2) {
		$('#boton2').css('display', 'none');
		$('#boton3').css('display', 'none');
		$('#boton1').css('display', 'none');
		$('#botonRetro1').css('display', 'none');
		$('#botonRetro3').css('display', 'none');
		$('#botonRetro2').css('display', 'none');
		$('#botonRetro1').css('display', 'inline-block');
	}
	if (valorGiro === 1 && cont2 < 3) {
		$('#boton1').css('display', 'none');
		$('#boton3').css('display', 'none');
		$('#boton2').css('display', 'inline-block');
		$('#botonRetro1').css('display', 'none');
		$('#botonRetro3').css('display', 'none');
		$('#botonRetro2').css('display', 'none');
	} else if (valorGiro === 1 && cont2 > 2) {
		$('#boton2').css('display', 'none');
		$('#boton3').css('display', 'none');
		$('#boton1').css('display', 'none');
		$('#botonRetro1').css('display', 'none');
		$('#botonRetro3').css('display', 'none');
		$('#botonRetro2').css('display', 'none');
		$('#botonRetro2').css('display', 'inline-block');
	}
	if (valorGiro === 2 && cont3 < 3) {
		$('#boton2').css('display', 'none');
		$('#boton1').css('display', 'none');
		$('#boton3').css('display', 'inline-block');
		$('#botonRetro1').css('display', 'none');
		$('#botonRetro3').css('display', 'none');
		$('#botonRetro2').css('display', 'none');
	} else if (valorGiro === 2 && cont3 > 2) {
		$('#boton2').css('display', 'none');
		$('#boton3').css('display', 'none');
		$('#boton1').css('display', 'none');
		$('#botonRetro1').css('display', 'none');
		$('#botonRetro3').css('display', 'none');
		$('#botonRetro2').css('display', 'none');
		$('#botonRetro3').css('display', 'inline-block');
	}
}

function activa(id, ac) {
    "use strict";
	if (id === 1) {
		$('#card1').css('display', 'inline-block');
		$('#card1').css('display', 'table');
		$('#card2').css('display', 'none');
		$('#card3').css('display', 'none');
		$('.contImage img').css('top', '5%');
		if (ac !== 2) {
			$('#title').css('display', 'inline-block');
			$('#title3').css('display', 'none');
			$('#title2').css('display', 'none');
		}
		if (ac !== 0) {
			$('#audio1').css('display', 'inline-block');
			$('#audio2').css('display', 'none');
			$('#audio3').css('display', 'none');
		}
	}
	if (id === 2) {
		$('#card1').css('display', 'none');
		$('#card2').css('display', 'inline-block');
		$('#card2').css('display', 'table');
		$('#card3').css('display', 'none');
		$('.contImage img').css('top', '5%');
		if (ac !== 2) {
			$('#title3').css('display', 'none');
			$('#title2').css('display', 'inline-block');
			$('#title').css('display', 'none');
		}
		if (ac !== 0) {
			$('#audio2').css('display', 'inline-block');
			$('#audio1').css('display', 'none');
			$('#audio3').css('display', 'none');
		}
	}
	if (id === 3) {
		$('#card1').css('display', 'none');
		$('#card2').css('display', 'none');
		$('#card3').css('display', 'inline-block');
		$('#card3').css('display', 'table');
		$('.contImage img').css('top', '5%');
		if (ac !== 2) {
			$('#title3').css('display', 'inline-block');
			$('#title2').css('display', 'none');
			$('#title').css('display', 'none');
		}
		if (ac !== 0) {
			$('#audio3').css('display', 'inline-block');
			$('#audio2').css('display', 'none');
			$('#audio1').css('display', 'none');
		}
	}
}

function cuadro() {
    "use strict";
	if (pasar === 1) {
		$('#void').css('display', 'none');
		$('#r1 aside').css('display', 'none');
		$('.sig2').css('display', 'inline');
		$('.sig').css('display', 'none');
		$('#cuadro').css('display', 'inline');
		$('#cuadro2').css('display', 'none');
		$('#cuadro3').css('display', 'none');
		$('.check').css('display', 'inline');
		$('.prev2').css('display', 'inline');
		$('.prev').css('display', 'none');
		$('#blanco').css('display', 'inline-block');
		$('#title').css('display', 'none');
		$('#title2').css('display', 'none');
		$('#title3').css('display', 'none');
		$('#title4').css('display', 'inline');
	}
}

function sincuadro() {
    "use strict";
	$('#void').css('display', 'inline-block');
	$('#r1 aside').css('display', 'inline-block');
	$('.sig2').css('display', 'none');
	$('.sig').css('display', 'inline-block');
	$('#cuadro').css('display', 'none');
	$('#cuadro2').css('display', 'inline-block');
	$('#cuadro3').css('display', 'inline-block');
	$('.check').css('display', 'none');
	$('.prev2').css('display', 'none');
	$('.prev').css('display', 'inline-block');
	$('#blanco').css('display', 'none');
	$('#title').css('display', 'inline-block');
	$('#title2').css('display', 'none');
	$('#title3').css('display', 'none');
	$('#title4').css('display', 'none');
}

function sinnada() {
    "use strict";
	if (cont1 + cont2 + cont3 === 9) {
		$('#blanco').css('display', 'none');
		$('#cuadro').css('display', 'none');
		$('.check').css('display', 'none');
		$('.prev2').css('display', 'none');
		$('#title2').css('display', 'none');
		$('#title3').css('display', 'none');
		$('#title4').css('display', 'inline-block');
		$('article').css('display', 'none');
		$('.sig').css('display', 'none');
		$('.sig2').css('display', 'none');
		$('#r1 aside').css('display', 'inline-block');
		resultado(cuentabien, 15);
		cuentabien = 0;
	}
}
var almCad = ['', '', '', '', ''];
var temp = 0;
var almNumber = [0, 0, 0, 0, 0];

function check(f, formul) {
    "use strict";
	cont = 0;
    var traeana1 = f.like1.value,
        traeana2 = f.like2.value,
        traeana3 = f.like3.value,
        traeana = [traeana1, traeana2, traeana3],
        rtaana = ["they will arrive to santiago", "they will check at the hotel", "they will visit the main square and walk to the top of santa lucia hill"],
        traesarah1 = f.like1.value,
        traesarah2 = f.like2.value,
        traesarah3 = f.like3.value,
        traesarah4 = f.like4.value,
        traesarah,
        rtasarah = ["they will fly to calama", "they will leave for toconao", "they will visit  the chaxa lake and see the pink flamingos of atacama", "they will visit the moon valley"],
        dissarah = f.dlike1.value,
        traesam1 = f.dlike2.value,
        traesam2 = f.dlike3.value,
        rtasam = ["they will take a tour to the national park", "they will go shopping for souvenirs"],
        traesam,
        dissam = f.like1.value;
	
    $('.prev2').css('display', 'inline-block');
	$('.prev2').css('float', 'left');
	if (formul === 0 && cont1 < 3) {
		cont1 += 1;
		
		traeana1 = traeana1.toLowerCase();
		traeana2 = traeana2.toLowerCase();
		traeana3 = traeana3.toLowerCase();
		temp = 0;
		for (i = 0; i < 3; i += 1) {
			if (traeana[i] === "") {
                $('#cuadro #like' + (i + 1)).css('border', '1px solid gray');
            }
			if (traeana[i] !== "") {
                $('#cuadro #like' + (i + 1)).css('border', '3px solid #d9364d');
            }
			for (j = 0; j < 3; j += 1) {
				if (traeana[i] === rtaana[j]) {
					$('#cuadro #like' + (i + 1)).css('border', '3px solid #44af81');
					cont += 1;
					almCad[j] = rtaana[j];
					rtaana[j] = "-No mas-";
				}
			}
		}
		cuentabien1 = cont;
		if (cuentabien1 < 3 && cont1 < 3) {
			document.getElementById('tryA').play();
			cont1 += 1;
		}
		//cuando se acaben las oportunidades llenar las respuestas correctas
		if (cuentabien1 < 3 && cont1 === 3) {
			$('#cuadro input').attr('disabled', 'disabled');
			muestraRetro(1);
			$("#botonRetro1").css("display", "inline-block");
			$("#boton1").css("display", "none");
		}
		if (cuentabien1 === 3) {
			$('#cuadro input').attr('disabled', 'disabled');
			muestraRetro(1);
			$("#botonRetro1").css("display", "inline-block");
			$("#boton1").css("display", "none");
			document.getElementById('bien').play();
		}
	} else if (formul === 1 && cont2 < 3) {
		cont2 += 1;
		//~~~~~~~~~~~~~~~~~~~~~~~~~~~~REVISA SARAH
		
		traesarah1 = traesarah1.toLowerCase();
		traesarah2 = traesarah2.toLowerCase();
		traesarah3 = traesarah3.toLowerCase();
		traesarah4 = traesarah4.toLowerCase();
		traesarah = [traesarah1, traesarah2, traesarah3, traesarah4];
		for (i = 0; i < 4; i += 1) {
			if (traesarah[i] === "") {$('#cuadro2 #like' + (i + 1)).css('border', '1px solid gray');
                                     }
			if (traesarah[i] !== "") {$('#cuadro2 #like' + (i + 1)).css('border', '3px solid #d9364d');
                                     }
			for (j = 0; j < 4; j += 1) {
				if (traesarah[i] === rtasarah[j]) {
					$('#cuadro2 #like' + (i + 1)).css('border', '3px solid #44af81');
					rtasarah[j] = "-No mas-";
					cont += 1;
				}
			}
		}
		dissarah = f.dlike1.value;
		dissarah = dissarah.toLowerCase();
		$('#dlike1').css('border', '3px solid #fc484c');
		if (dissarah === "they will go on a tour of the archaeological museum") {
			$('#dlike1').css('border', '3px solid #44af81');
			cont += 1;
		}
		cuentabien2 = cont;
		if (cuentabien2 < 5 && cont2 < 3) {
			document.getElementById('tryA').play();
		}
		if (cuentabien2 < 5 && cont2 === 3) {
			$('#cuadro2 input').attr('disabled', 'disabled');
			$("#botonRetro2").css("display", "inline-block");
			$("#boton2").css("display", "none");
			muestraRetro(2);
			document.getElementById('thecorrect').play();
		}
		if (cuentabien2 === 5) {
			$('#cuadro2 input').attr('disabled', 'disabled');
			muestraRetro(2);
			$("#botonRetro2").css("display", "inline-block");
			$("#boton2").css("display", "none");
			document.getElementById('bien').play();
		}
	} else if (formul === 2 && cont3 < 3) {
		//~~~~~~~~~~~~~~~~~~~~~~~~~~~~REVISA SAM
		cont3 += 1;
		
		
		traesam1 = traesam1.toLowerCase();
		traesam2 = traesam2.toLowerCase();
        traesam = [traesam1, traesam2];
		for (i = 0; i < 2; i += 1) {
			if (traesam[i] === "") {$('#cuadro3 #dlike' + (i + 2)).css('border', '1px solid gray');
                                   }
			if (traesam[i] !== "") {$('#cuadro3 #dlike' + (i + 2)).css('border', '3px solid #d9364d');
                                  }
			for (j = 0; j < 2; j += 1) {
				if (traesam[i] === rtasam[j]) {
					$('#cuadro3 #dlike' + (i + 2)).css('border', '3px solid #44af81');
					rtasam[j] = "-No mas-";
					cont += 1;
				}
			}
		}
		dissam = f.like1.value;
		dissam = dissam.toLowerCase();
		$('#cuadro3 #like1').css('border', '3px solid #fc484c');
		if (dissam === "they will fly to puerto varas") {
			$('#cuadro3 #like1').css('border', '3px solid #44af81');
			cont += 1;
		}
		cuentabien3 = cont;
		if (cuentabien2 < 5 && cont3 < 3) {
			document.getElementById('tryA').play();
		}
		if (cuentabien2 < 5 && cont3 === 3) {
			$('#cuadro3 input').attr('disabled', 'disabled');
			$("#botonRetro3").css("display", "inline-block");
			$("#boton3").css("display", "none");
			document.getElementById('thecorrect').play();
			muestraRetro(3);
		}
		if (cuentabien3 === 3) {
			$('#cuadro3 input').attr('disabled', 'disabled');
			$("#botonRetro3").css("display", "inline-block");
			$("#boton3").css("display", "none");
			muestraRetro(3);
			document.getElementById('bien').play();
		}
	}
	if (cont1 === 3) {
		$('#boton1').css('display', 'none');
	}
	if (cont2 === 3) {
		$('#boton2').css('display', 'none');
	}
	if (cont3 === 3) {
		$('#boton3').css('display', 'none');
	}
	if (cont1 + cont2 + cont3 === 9) {
		document.getElementById("check").style.animation = "alumbra 2s infinite";
		document.getElementById("check").style.webkitAnimation = "alumbra 2s infinite";
	}
	if (cuentabien1 + cuentabien2 + cuentabien3 > 6 || cont1 + cont2 + cont3 === 9) {
		document.getElementById("check").style.animation = "alumbra 2s infinite";
		document.getElementById("check").style.webkitAnimation = "alumbra 2s infinite";
		fin = 4;
		$('#check').css('display', 'inline');
		$('#sig').css('display', 'none');
	}
	cont = 0;
	cuentabien = cuentabien1 + cuentabien2 + cuentabien3;
}

function enviar_formulario(tipo) {
	"use strict";
	if (tipo === 0) {
		check(document.formulario1, 0);
	}
	if (tipo === 1) {
		check(document.formulario2, 1);
	}
	if (tipo === 2) {
		check(document.formulario3, 2);
	}
}
