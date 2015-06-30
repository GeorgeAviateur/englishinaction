function carga() {
	$('#animacion').toggle("slow");
	$('#arrow').css('visibility', 'visible');
	$('#informa').css('opacity', '1');
	ins();
}

function muestraTips(NUMBER, Time) {
	$('#arrow').css('visibility', 'hidden');
	if (Time == 0) /*si es tiempo presente*/ {
		if (NUMBER == 0) {
			document.getElementById('contenido').innerHTML = "<h4>If you like something</h4><h5> you can express it in the following way</h5><h6><br>I like going to the movies. <br> I like to go to the movies. <br> I love eating Ice cream.<br></h6><br><h5>It's not posible to say:</h5><h6><br>I like go to the movies.</h6>";
		}
		if (NUMBER == 1) {
			document.getElementById('contenido').innerHTML = "<h4>If you want to express something you don't like,</h4><h5> you can do it in the following way</h5><br><h6>I don't like going to the movies.<br>I don't like to go to the movies.<br>I hate watching horror movies.</h6>";
		}
		if (NUMBER == 2) {
			document.getElementById('contenido').innerHTML = "<h4>If you want to refer to He, she, it</h4><h5>you should do it in this way</h5><h6><br>He likes playing soccer - He likes to play soccer - He doesn't like playing soccer - He doesn't like to play soccer.<br><br>She likes going to the gym - She likes to go to the gym. - She doesn't like going to the gym - She doesn't like to go to the gym.<br><br>My dog likes to play with balls - My dog likes playing with balls - It doesn't like to play with balls - It doesn't like playing with balls.</h6>";
		}
		if (NUMBER == 3) {
			document.getElementById('contenido').innerHTML = "<h4>If you want to ask what someone likes or dislikes</h4><h5> you can do it in this way</h5><h6><br>Do you like to go to the movies?<br> Do you like going to the movies?<br>Does she like to go to the movies? <br> Does she like going to the movies?<h6>";
		}
	}
	if (Time == 1) /*si es tiempo pasado*/ {
		if (NUMBER == 0) {
			document.getElementById('contenido').innerHTML = "<h4>If you want to express past actions</h4><h5> You can do it in this way:</h5><h6><br> I liked going to the movies.<br> I liked to go to the movies.<br></h6><br><h5>You can do it in the same way when referring to one or more people.</h5>";
		}
		if (NUMBER == 1) {
			document.getElementById('contenido').innerHTML = "<h4>If you want to use the negative form</h4><h5> You can do it in this way:</h5><br><h6>I didn't like going to the movies.<br>I didn't like to go to the movies.</h6>";
		}
		if (NUMBER == 2) {
			document.getElementById('contenido').innerHTML = "<h4>If you want to ask about past actions</h4><h5>you can do it in this way:</h5><h6><br>Did you like to go to the movies?<br><br>Did you like going to the movies?<br></h6><h5>You can do it in the same way when referring to one or more people.</h5>";
		}
	}
	if (Time == 2) /*si es tiempo futuro*/ {
		if (NUMBER == 0) {
			document.getElementById('contenido').innerHTML = "<h4>If you want to express actions in future tense</h4><h5> You should bear in mind:</h5><br><h4>For planned actions: </h4><h6>I am going to go the movies tonight.<br>He is going to play soccer tomorrow at 2:00 o clock.<br>They are going to go to the gym tomorrow in the morning.</h6><br><h4>For non-planned actions:</h4><h6> I will travel to Chile.<br>They will construct a robot.<br></h6>";
		}
		if (NUMBER == 1) {
			document.getElementById('contenido').innerHTML = "<h4>If you want to use the negative form</h4><h5> You can do it in this way: </h5><br><h6>I am not going to go the movies tonight. <br>He is not  going to play soccer tomorrow at 2:00 o clock.<br>They are not going to go to the gym tomorrow in the morning.<br>I won’t travel to Chile.<br>He won't learn how to play soccer.<br>They won't construct a robot.</h6>";
		}
		if (NUMBER == 2) {
			document.getElementById('contenido').innerHTML = "<h4>If you want to ask about events  of the futre</h4><h5>You can do it in this way:</h5><br><h6>Are you going to go the movies tonight? <br>Is he going to play soccer tomorrow at 2:00 o clock?<br>Are they going to go to the gym tomorrow in the morning?<br>Will you travel to Chile?<br>Will he learn how to play soccer?<br>Will they construct a robot?</h6>";
		}
	}
}
