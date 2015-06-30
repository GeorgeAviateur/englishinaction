

function parrafos(){
	
		audio = document.createElement("audio");
		audio.setAttribute("id", "a1"); 
		audio.setAttribute("controls", "controls");
		var source = document.createElement("source");
		
	
	if (ejreading[0]==1||ejreading[1]==1||ejreading[2]==1||ejreading[3]==1||ejreading[4]==1){
		document.getElementById('texto').innerHTML="Hi my name is Tony and I'm 19 years old. I'm a Laws student of Los Andes University in Bogotá, Colombia. In my free time I like going to the gym to work out, I usually go at night.  I love listening to music; my favourite music is rock, I don't like pop.  I also enjoy going to the movies with my girlfriend; I don't like horror movies because I think they are very boring.  My girlfriend loves science fiction films, she thinks they are amazing.";
		$('#texto').css('margin','50px');
		document.getElementById('imageart').src="../../../images/reading/1_imagen.png";
	}
	
	if (ejreading[0]==1){
		source.setAttribute("src", "../../../audios/preguntas/reading/aprr1ask1.mp3"); 
		source.setAttribute("type", "audio/mpeg");
		audio.appendChild(source);
		document.getElementById('ask').innerHTML=""+
		"<div id='q1'>"+
		"<label for='uno'>What does Tony like to do at night?</label>"+
		"<div id='esto' class='negar' onClick='erronea(0)' style='cursor: pointer'>"+
		"<h2 class='ans'>A.	He likes going to the cinema</h2></div>"+
		"<div id='es' class='negar' onClick='erronea(0)' style='cursor: pointer'>"+
		"<h2 class='ans'>B.	He loves listening to music</h2></div>"+
		"<div id='udec1' class='acertar' onClick='correcta(0)' style='cursor: pointer'><h2 class='ans'>C.	He likes going to the gym</h2></div>"+
		"</div>";
	}

	if (ejreading[1]==1){
		source.setAttribute("src", "../../../audios/preguntas/reading/aprr1ask2.mp3"); 
		source.setAttribute("type", "audio/mpeg");
		audio.appendChild(source);
		document.getElementById('ask').innerHTML=""+
		"<div id='q1'>"+
		"<label for='uno'>What does he like to do at the gym?</label>"+
		"<div id='esto' class='negar' onClick='erronea(0)' style='cursor: pointer'>"+
		"<h2 class='ans'>A.	He likes to talk with his friends.</h2></div>"+
		"<div id='es' class='negar' onClick='erronea(0)' style='cursor: pointer'>"+
		"<h2 class='ans'>B.	He likes to meet new people.</h2></div>"+
		"<div id='udec1' class='acertar' onClick='correcta(0)' style='cursor: pointer'><h2 class='ans'>C. He likes to work out.</h2></div>"+
		"</div>";}
	if (ejreading[2]==1){
		source.setAttribute("src", "../../../audios/preguntas/reading/aprr1ask3.mp3"); 
		source.setAttribute("type", "audio/mpeg");
		audio.appendChild(source);
		document.getElementById('ask').innerHTML=""+
		"<div id='q1'>"+
		"<label for='uno'>What kind of music does he like?</label>"+
		"<div id='esto' class='acertar' onClick='correcta(0)' style='cursor: pointer'>"+
		"<h2 class='ans'>A.	He likes rock music</h2></div>"+
		"<div id='es' class='negar' onClick='erronea(0)' style='cursor: pointer'>"+
		"<h2 class='ans'>B.	He loves pop music</h2></div>"+
		"<div id='udec1' class='negar' onClick='erronea(0)' style='cursor: pointer'>"+
		"<h2 class='ans'>C. He doesn't like to listen to music</h2></div>"+
		"</div>";}
	if (ejreading[3]==1){
		source.setAttribute("src", "../../../audios/preguntas/reading/aprr1ask4.mp3"); 
		source.setAttribute("type", "audio/mpeg");
		audio.appendChild(source);
		document.getElementById('ask').innerHTML=""+
		"<div id='q1'>"+
		"<label for='uno'>What kind of movies does his girlfriend like?</label>"+
		"<div id='esto' class='negar' onClick='erronea(0)' style='cursor: pointer'>"+
		"<h2 class='ans'>A.	She likes horror movies.</h2></div>"+
		"<div id='es' class='acertar' onClick='correcta(0)' style='cursor: pointer'>"+
		"<h2 class='ans'>B.	She loves science fiction movies.</h2></div>"+
		"<div id='udec1' class='negar' onClick='erronea(0)' style='cursor: pointer'>"+
		"<h2 class='ans'>C.	She likes action movies.</h2></div>"+
		"</div>";}
	if (ejreading[4]==1){
		source.setAttribute("src", "../../../audios/preguntas/reading/aprr1ask5.mp3"); 
		source.setAttribute("type", "audio/mpeg");
		audio.appendChild(source);
		document.getElementById('ask').innerHTML=""+
		"<div id='q1'>"+
		"<label for='uno'>What does Tony's girlfriend think about science fiction movies?</label>"+
		"<div id='esto' class='negar' onClick='erronea(0)' style='cursor: pointer'>"+
		"<h2 class='ans'>A.	She thinks they are boring.</h2></div>"+
		"<div id='es' class='negar' onClick='erronea(0)' style='cursor: pointer'>"+
		"<h2 class='ans'>B.	She thinks they are interesting</h2></div>"+
		"<div id='udec1' class='acertar' onClick='correctacorrecta(0)' style='cursor: pointer'>"+
		"<h2 class='ans'>C.	She thinks they are amazing.</h2></div>"+
		"</div>";}
	
	if (ejreading[5]==1){
		source.setAttribute("src", "../../../audios/preguntas/reading/aprr1ask5.mp3"); 
		source.setAttribute("type", "audio/mpeg");
		audio.appendChild(source);
		document.getElementById('ask').innerHTML=""+
		"<div class='container'>"+
		"<div data-force='30' class='layer block'>"+
			"<ul id='foo' class='block__list block__list_words'>"+
				"<li id='uno'><span id='first' class='drag-handle'>☰</span><b>Jhon:</b> Oh there is a really good cartoon film on the movie listings. Would you like to come with me?</li>"+
				"<li id='dos'><span  id='second' class='drag-handle'>☰</span><b>Penny:</b> I love adventure and cartoon films. They are great!</li>"+
				"<li id='tres'><span id='third' class='drag-handle'>☰</span><b>Penny:</b> I'm doing well. Hey Jhon, do you like going to the movies?</li>"+
				"<li id='cuatro'><span id='fourth' class='drag-handle'>☰</span><b>Jhon:</b> I'm doing great! How about you?</li>"+
				"<li id='cinco'><span id='fifth' class='drag-handle'>"+
				"☰</span><b>Penny:</b> Sure!</li>"+
				"<li id='seis'><span id='sixth' class='drag-handle'>"+"☰</span><b>Penny:</b> What kind of movies do you like?</li>"+
				"<li id='siete'><span id='seventh' class='drag-handle'>"+"☰</span><b>Jhon:</b> Yes, I do.</li>"+
				"<li id='ocho'><span id='eight' class='drag-handle'>"+"☰</span><b>Jhon:</b> I like action and horror movies.</li>"
				"<li id='nueve'><span id='ninth' class='drag-handle'>"+"☰</span><b>Jhon:</b> What kind of movies do you like then?</li>"+
				"<li id='diez'><span id='tenth' class='drag-handle'>☰</span><b>Penny:</b> Hi Jhon! How are you doing?</li>"+
				"<li id='once'><span id='eleventh' class='drag-handle'>☰</span><b>Penny:</b> Really? I hate horror movies. I think they are silly. </li>"+
			"</ul>"+
		"</div>"+
		"</div>"
;}
	
	if (ejreading[6]==1){
		
		document.getElementById('texto').innerHTML=""+
		
		"<div id='fragmento'> <h6><p> One of my favourite activities is going to the gym. Why? Because at the gym I can take care of my <select id='cid1'> <option value='0'>--   --</option> <option value='1'>Treadmill</option> <option value='2'>Meet</option> <option value='3'>Health</option> </select>, <select id='cid2'> <option value='0'>--   --</option> <option value='1'>Working Out</option> <option value='2'>Meet</option> <option value='3'>Keep</option> </select> new people and look great. When I go to the gym I Like to use the Treadmill for 20 minutes. I don't like to do Aerobics, I prefer Weight lifting. I really like to Strength my muscles. Other people enjoy doing aerobics and other cardiovascular exercises to lose weight. Whatever purpose people may have, going to the gym is a great physical activity that will help them stay healthy and fit.</p> </h6></div>";
		
		document.getElementById('imageart').src="../../../images/reading/5_imagen.png";
		
	}
	
	if (ejreading[7]==1){
		
		document.getElementById('texto').innerHTML=""+
		
		"<div id='fragmento'>"+
							"<h6><p>"+
							"One of my favourite activities is going to the gym. Why? Because at the gym I can take care of my Health Meet new people and look great. When I go to the gym I "+
								
								"<select id='cid1'>"+
									"<option value='0'>--   --</option>"+
									"<option value='1'>Like</option>"+
									"<option value='2'>Meet</option>"+
									"<option value='3'>Weight</option>"+
								"</select>"+
								"to use the "+
								"<select id='cid2'>"+
									"<option value='0'>--   --</option>"+
									"<option value='1'>Healthy</option>"+
									"<option value='2'>Treadmill</option>"+
									"<option value='3'>Keep</option> "+       
								"</select> "+
								"for 20 minutes. I don't like to do Aerobics, I prefer Weight lifting. I really like to Strength my muscles. Other people enjoy doing aerobics and other cardiovascular exercises to lose weight. Whatever purpose people may have, going to the gym is a great physical activity that will help them stay healthy and fit."+
									
								"</p>"+
							"</h6>"+
						"</div>";
		
		document.getElementById('imageart').src="../../../images/reading/5_imagen.png";
		
	}
	
	
	if (ejreading[8]==1){
		
		document.getElementById('texto').innerHTML=""+
		
		"<div id='fragmento'>"+
							"<h6><p>"+
							"One of my favourite activities is going to the gym. Why? Because at the gym I can take care of my Health Meet new people and look great. When I go to the gym I Like to use the Treadmill for 20 minutes. I don't like to do "+
								"<select id='cid1'>"+
									"<option value='0'>--   --</option>"+
									"<option value='1'>Strenght</option>"+
									"<option value='2'>Aerobics</option>"+
									"<option value='3'>Healthy</option> "+       
										
							"</select>, I prefer <select id='cid2'>"+
										"<option value='0'>"+
										"--   --"+
											"</option>"+
											
											"<option value='1'>"+
											"Keep"+
											"</option>"+
											
											"<option value='2'>"+
											"Weight"+
											"</option>"+
											
											"<option value='3'>"+
											"Keep"+
											"</option>"+
										
							"</select> lifting. I really like to Strength my muscles. Other people enjoy doing aerobics and other cardiovascular exercises to lose weight. Whatever purpose people may have, going to the gym is a great physical activity that will help them stay healthy and fit.";
		
		document.getElementById('imageart').src="../../../images/reading/5_imagen.png";
		
	}
	
	
	
	if (ejreading[9]==1){
		
		document.getElementById('texto').innerHTML=""+
		
		"<div id='fragmento'>"+
							"<h6><p>"+
							"One of my favourite activities is going to the gym. Why? Because at the gym I can take care of my Health, Meet new people and look great. When I go to the gym I Like to use the Treadmill for 20 minutes. I don't like to do Aerobics, I prefer Weight lifting. I really like to "+
							"</select> lifting. I really like to <select id='cid1'>"+
										"<option value='0'>"+
										"--   --"+
											"</option>"+
											"<option value='1'>"+
											"Like"+
											"</option>"+
											"<option value='2'>"+
											"Strength"+
											"</option>"+
											"<option value='3'>"+
											"Weight"+
											"</option>        "+
							"</select> "+
							" my muscles. Other people enjoy doing aerobics and other cardiovascular exercises to lose weight. Whatever purpose people may have, going to the gym is a great physical activity that will help them stay <select id='cid2'>"+
									"	<option value='0'>"+
									"	--   --"+
									"	</option>"+
											
									"	<option value='1'>"+
									"		Aerobics"+
									"	</option>"+
											
									"	<option value='2'>"+
									"		Like"+
									"	</option>"+
											
									"	<option value='3'>"+
									"		Healthy"+
									"	</option> "+
								"	</select> and fit."+
									
								"</p>"+
							"</h6>"+
						"</div>";
		
		document.getElementById('imageart').src="../../../images/reading/5_imagen.png";
		
	}
	
	
	
	
	if (ejreading[10]==1){
	
	document.getElementById('myRoundabout').innerHTML=""+
		
								"<li><img id='She likes listening to music'src='../../../../images/reading/15_imagen.png' width='303' height='181' style='cursor:pointer' OnDblClick='check(this.id)'/></li>"+
										"<li><img id='He likes hamburgers' src='../../../../images/reading/6_imagen.png' width='303' height='181' style='cursor:pointer' OnDblClick='check(this.id)'/></li>"+
										"<li><img id='They like cocktails'src='../../../../images/reading/7_imagen.png' width='303' height='181' style='cursor:pointer' OnDblClick='check(this.id)'/></li>"+
										"<li><img id='He doesn't like whiskey' src='../../../../images/reading/8_imagen.png' width='303' height='181' style='cursor:pointer' OnDblClick='check(this.id)'/></li>"+
										"<li><img id='They enjoy dancing' src='../../../../images/reading/9_imagen.png' width='303' height='181' style='cursor:pointer' OnDblClick='check(this.id)'/></li>"+
										"<li><img id='They love going to the movies' src='../../../../images/reading/10_imagen.png' width='303' height='181' style='cursor:pointer' OnDblClick='check(this.id)'/></li>"+
										"<li><img id='They enjoy doing exercise' src='../../../../images/reading/11_imagen.png' width='303' height='181' style='cursor:pointer' OnDblClick='check(this.id)'/></li>"+
										"<li><img id='She loves going to the gym' src='../../../../images/reading/12_imagen.png' width='303' height='181' style='cursor:pointer' OnDblClick='check(this.id)'/></li>"+
										"<li><img id='He doesn't like exercising' src='../../../../images/reading/13_imagen.png' width='303' height='181' style='cursor:pointer' OnDblClick='check(this.id)'/></li>"+
										
										"<li><img id='She hates horror movies' src='../../../../images/reading/14_imagen.png' width='303' height='181' style='cursor:pointer' OnDblClick='check(this.id)'/></li>   "
								;
	
	}
	
	
	
	
	
	
	
	
	if (ejreading[11]==1){
		
		document.getElementById('texto').innerHTML="<div id='fragmento'>"+
							"<p>"+
								
									"<label>Lives in:</label> Cali <br>"+
									"<label>Works at:</label> S.A.S communications <br>"+
									"<label>Date of birth:</label> January 3rd, 1990<br>"+
									"<label>E-mail:</label> carlosm@gmail.com<br>"+
									"<label>Likes:</label> going to the gym, eating pizza, listening to rock music, dancing and having fun, action movies.<br>"+
									"<label>Dislikes:</label> listening to vallenato, eating chips, horror movies."+
								
							"</p>"+
							"</div>"+
							"<div class='contImage'><img id='imageart' src='../../../../images/reading/16_imagen.png' /></div>"
		;
	
	}
	
	if (ejreading[11]==1){
				document.getElementById('ask').innerHTML="<div id='fragmento'>"+
							"<p>"+
								
									"<label>Lives in:</label> Cali <br>"+
									"<label>Works at:</label> <input id='like1' type='text' maxlength='28'/>  <br>"+
									"<label>Date of birth:</label> January 3rd, 1990<br>"+
									"<label>E-mail:</label> carlosm@gmail.com<br>"+
									"<label>Likes:</label> going to the gym, eating pizza, listening to rock music, dancing and having fun, action movies.<br>"+
									"<label>Dislikes:</label> listening to vallenato, eating chips, horror movies."+
								
							"</p>"+
							"</div>"+
							"<div class='contImage'><img id='imageart' src='../../../../images/reading/16_imagen.png' /></div>"
		;
	}
	
	
	
	
	
	
	
	
	
	
	setTimeout(function(){
			$('#continuar').css('pointer-events','auto');
			$('#continuar').css('opacity','1');
			$("#countdown").countdown360({}).start();
		},1000);	
}

