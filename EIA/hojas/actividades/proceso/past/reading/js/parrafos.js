


/*jslint browser: true*/
/*global $, jQuery, alert*/

function parrafos(){
"use strict";	
		audio = document.createElement("audio");
		audio.setAttribute("id", "a1"); 
		audio.setAttribute("controls", "controls");
		var source = document.createElement("source");
		
	
	if (ejreading[0]==1||ejreading[1]==1||ejreading[2]==1){
		document.getElementById('texto').innerHTML="<h5>Isabel's last  weekend</h5>"+
					"<h6>"+
						"<p>"+
						"Hi Angie"+
						"<br>"+
						"Hope you are well.  Guess what I did last weekend. I went to the movies with my friends on Saturday. We watched a great movie: 'Hercules'. We ate some popcorn and drank soda while watching the movie."+
					"	<br>"+
					"	<br>"+
					"	After going to the cinema, we went to a bar and had some beers. We talked and laughed a lot! I really enjoyed it!"+
					"	<br>"+
					"	<br>"+
					"	I'm sorry you couldn't be there."+
					"	<br>"+
					"	<br>"+
					"	Write back,"+
					"	<br>"+
						"Isabel"+
					"	</p>"+
					"</h6>";
		$('#texto').css('margin','50px');
		document.getElementById('imageart').src="../../../images/reading/19_imagen.png";
	}
	
	if (ejreading[0]==1){
		source.setAttribute("src", "../../../audios/preguntas/reading/apr1.mp3"); 
		source.setAttribute("type", "audio/mpeg");
		audio.appendChild(source);
		document.getElementById('ask').innerHTML=""+
		"<div id='q1'>"+
		"<label for='uno'>1. What did Susan do on Saturday?</label>"+
		"<div id='esto' class='negar' onClick='erronea(0)' style='cursor: pointer'>"+
		"<h2 class='ans'>A. She went to a party with some friends.</h2></div>"+
		"<div id='es' class='acertar' onClick='correcta(0)' style='cursor: pointer'>"+
		"<h2 class='ans'>B. She went to the cinema and to a bar with her friends.</h2></div>"+
		"<div id='udec1' class='negar' onClick='erronea(0)' style='cursor: pointer'><h2 class='ans'>C. She enjoyed her weekend a lot.</h2></div>"+
		"</div>";
	}

	if (ejreading[2]==1){
		source.setAttribute("src", "../../../audios/preguntas/reading/apr1_2.mp3"); 
		source.setAttribute("type", "audio/mpeg");
		audio.appendChild(source);
		document.getElementById('ask').innerHTML=""+
		"<div id='q1'>"+
		"<label for='uno'>What movie did Susan and her friends watch?</label>"+
		"<div id='esto' class='negar' onClick='erronea(0)' style='cursor: pointer'>"+
		"<h2 class='ans'>A.	They watched 'the beauty and the beast'.</h2></div>"+
		"<div id='es' class='negar' onClick='erronea(0)' style='cursor: pointer'>"+
		"<h2 class='ans'>B.	They watched 'the rite'.</h2></div>"+
		"<div id='udec1' class='acertar' onClick='correcta(0)' style='cursor: pointer'><h2 class='ans'>C.	They watched 'Hercules'.</h2></div>"+
		"</div>";}
	if (ejreading[3]==1){
		source.setAttribute("src", "../../../audios/preguntas/reading/apr1_3.mp3"); 
		source.setAttribute("type", "audio/mpeg");
		audio.appendChild(source);
		document.getElementById('ask').innerHTML=""+
		"<div id='q1'>"+
		"<label for='uno'>What did Susan and her friends do at the bar?</label>"+
		"<div id='esto' class='negar' onClick='erronea(0)' style='cursor: pointer'>"+
		"<h2 class='ans'>A.	They danced and talked.</h2></div>"+
		"<div id='es' class='acertar' onClick='correcta(0)' style='cursor: pointer'>"+
		"<h2 class='ans'>B.	They drank some beers, talked and laughed.</h2></div>"+
		"<div id='udec1' class='negar' onClick='erronea(0)' style='cursor: pointer'>"+
		"<h2 class='ans'>C.	They drank some beers.</h2></div>"+
		"</div>";}
	
	
	
	if (ejreading[4]==1){
		
		document.getElementById('texto').innerHTML=""+
		
		"<div id='fragmento'>"+
							"<h6><p>"+
							"Hello my name is Alex. I"+
							
								"<select disabled id='cid1'>"+
"									<option value='0'>--   --</option>"+
									"<option value='1'>Born</option>"+
									"<option value='2'>Was born</option>"+
									"<option value='3'>Lived</option>   "+     
								"</select>,"+
								"in Cartagena, on March 13th, 1990. I	"+							
								
								"<select disabled id='cid2'>"+
"									<option value='0'>--   --</option>"+
									"<option value='1'>Started</option>"+
									"<option value='2'>Start</option>"+
									"<option value='3'>Studied</option> "+       
								"</select>"+
								
"								the school when I <b>was</b> 5 years old. I went to 'La Salle'; I <b>Finished</b>high school in 2007, at the age of 17. Then, I <b>Join</b> the Military Service. When I was a child, I <b>Liked</b> to play with cars and I loved watching cartoons.  I also liked eating ice cream with chocolate chips on the top. I really <b>Enjoyed</b> my childhood. What I <b>Didn't</b> like was doing homework, it was very boring. As a teenager I enjoyed playing video games with my friends; My favourite game was Halo. I also <b>Loved</b> going to the movies and <b>Watched</b> Science fiction films. I didn't like dancing.I started the University when I was 19 years old and finished it a year ago. I studied Languages. Now I'm working as a teacher at the school I atended in Cali."+

								"</p>"+
							"</h6>"+
						"</div>";
		
		document.getElementById('imageart').src="../../../images/reading/23_imagen.png";
		
	}
	
	if (ejreading[5]==1){
		
		document.getElementById('texto').innerHTML=""+
		
		"<div id='fragmento'>"+
							"<h6><p>"+
							"Hello my name is Alex.  I <b>Was born</b> in Cartagena, on March 13th, 1990. I <b>Started</b> the school when I "+		
								
"								<select disabled id='cid1'>"+
									"<option value='0'>--   --</option>"+
									"<option value='1'>am</option>"+
									"<option value='2'>were</option>"+
									"<option value='3'>was</option>   "+       
								"</select>"+
								"5 years old.  I went to 'La Salle'; I"+
"								<select disabled id='cid2'>"+
"									<option value='0'>--   --</option>"+
									"<option value='1'>Finished</option>"+
									"<option value='2'>Finish</option>"+
									"<option value='3'>Went</option>     "+
								"</select> "+
								
								"high school in 2007, at the age of 17. Then, I <b>Join</b> the Military Service. When I was a child, I <b>Liked</b> to play with cars and I loved watching cartoons.  I also liked eating ice cream with chocolate chips on the top. I really <b>Enjoyed</b> my childhood. What I <b>Didn't</b> like was doing homework, it was very boring. As a teenager I enjoyed playing video games with my friends; My favourite game was Halo. I also <b>Loved</b> going to the movies and <b>Watched</b> Science fiction films. I didn't like dancing. I started the University when I was 19 years old and finished it a year ago. I studied Languages. Now I'm working as a teacher at the school I atended in Cali.</p>"+
							"</h6>"+
						"</div>";
		
		document.getElementById('imageart').src="../../../images/reading/23_imagen.png";
		
	}
	
	
	if (ejreading[6]==1){
		
		document.getElementById('texto').innerHTML=""+
		
		"<div id='fragmento'>"+
							"<h6><p>"+
							"Hello my name is Alex.  I <b>Was born</b> in Cartagena, on March 13th, 1990. I <b>Started</b> the school when I <b>was</b> 5 years old. I went to 'La Salle'; I <b>Finished</b> high school in 2007, at the age of 17. Then, I "+
								
								"<select disabled id='cid1'>"+
"									<option value='0'>--   --</option>"+
									"<option value='1'>Go</option>"+
									"<option value='2'>Join</option>"+
									"<option value='3'>Had</option> "+             
										
"							</select>"+
							
							" the Military Service. When I was a child, I "+
								


							"<select disabled id='cid2'>"+
"										<option value='0'>"+
										"--   --"+
										"</option>"+
										"<option value='1'>Hated</option>"+
										"<option value='2'>Like</option>"+
										"<option value='3'>Liked</option> "+       
										
							"</select>"+
							" to play with cars and I loved watching cartoons.  I also liked eating ice cream with chocolate chips on the top. I really <b>Enjoyed</b> my childhood. What I <b>Didn't</b> like was doing homework, it was very boring. As a teenager I enjoyed playing video games with my friends; My favourite game was Halo. I also <b>Loved</b> going to the movies and <b>Watched</b> Science fiction films. I didn't like dancing. I started the University when I was 19 years old and finished it a year ago. I studied Languages. Now I'm working as a teacher at the school I atended in Cali.</p>"+
							"</h6>"+
						"</div>";
		
		document.getElementById('imageart').src="../../../images/reading/23_imagen.png";
		
	}
	
	
	
	if (ejreading[7]==1){
		
		
		document.getElementById('texto').innerHTML=""+
		
		"<div id='fragmento'>"+
							"<h6><p>"+
							"Hello my name is Alex.  I <b>Was born</b> in Cartagena, on March 13th, 1990. I <b>Started</b> the school when I <b>was</b> 5 years old. I went to 'La Salle'; I <b>Finished</b> high school in 2007, at the age of 17. Then, I Join the Military Service. When I was a child, I Liked to play with cars and I loved watching cartoons.  I also liked eating ice cream with chocolate chips on the top. I really"+

							"<select disabled id='cid1'>"+
							"			<option value='0'>"+
"										--   --"+
"											</option>"+
"										<option value='1'>Enjoyed</option>"+
"										<option value='2'>Was</option>"+
										"<option value='3'>Hate</option>"+
										
							"</select> "+
							
							"my childhood. What I "+
						
							"		<select disabled id='cid2'>"+
							"			<option value='0'>"+
							"			--   --"+
							"			</option>"+
											
							"			<option value='1'>"+
							"				No	"+
							"			</option>"+
											
							"			<option value='2'>"+
							"				Don't"+
							"			</option>"+
											
							"			<option value='3'>"+
							"				Didn't"+
							"			</option>        "+
										
							"		</select>"+
							"like was doing homework, it was very boring. As a teenager I enjoyed playing video games with my friends; My favourite game was Halo. I also <b>Loved</b> going to the movies and <b>Watched</b> Science fiction films. I didn't like dancing. I started the University when I was 19 years old and finished it a year ago. I studied Languages. Now I'm working as a teacher at the school I atended in Cali.</p>"+
							"</h6>"+
						"</div>";
		document.getElementById('imageart').src="../../../images/reading/23_imagen.png";
		
	}
	
	if (ejreading[8]==1){
		
		
		document.getElementById('texto').innerHTML=""+
		
		"<div id='fragmento'>"+
							"<h6><p>"+
							"Hello my name is Alex.  I <b>Was born</b> in Cartagena, on March 13th, 1990. I <b>Started</b> the school when I <b>was</b> 5 years old. I went to 'La Salle'; I <b>Finished</b> high school in 2007, at the age of 17. Then, I Join the Military Service. When I was a child, I Liked to play with cars and I loved watching cartoons.  I also liked eating ice cream with chocolate chips on the top. I really Enjoyed my childhood. What I Didn't like was doing homework, it was very boring. As a teenager I enjoyed playing video games with my friends; My favourite game was Halo. I also"+
            "<select disabled id='cid1'>"+
										"<option value='0'>"+
										"--   --"+
										"</option>"+
											
										"<option value='1'>"+
										"	Hated"+
										"</option>"+
											
										"<option value='2'>"+
										"	Loved"+
										"</option>"+
											
										"<option value='3'>"+
										"	Love"+
										"</option> "+
									"</select>"+
            
            " going to the movies and "+
            "<select disabled id='cid2'>"+
										"<option value='0'>"+
										"--   --"+
										"</option>"+
											
										"<option value='1'>"+
										"	Watched"+
										"</option>"+
											
										"<option value='2'>"+
										"	See"+
										"</option>"+
											
										"<option value='3'>"+
										"	Ate"+
										"</option> "+
									"</select>"+
            
            
            
            
            
            
            
            "Science fiction films. I didn't like dancing. I started the University when I was 19 years old and finished it a year ago. I studied Languages. Now I'm working as a teacher at the school I atended in Cali.</p>"+
							"</h6>"+
						"</div>";
		document.getElementById('imageart').src="../../../images/reading/23_imagen.png";
		
	}
	
	
	
	
	
	
	
	
	/*
	
	
	if (ejreading[9]==1){
		
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
	
	if (ejreading[10]==1){
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
	*/
	
	
	
	
	
	
	
	
	
	setTimeout(function(){
			$('#continuar').css('pointer-events','auto');
			$('#continuar').css('opacity','1');
			$("#countdown").countdown360({}).start();
		},1000);	
}

