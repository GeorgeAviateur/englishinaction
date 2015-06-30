

function parrafos(){
	
		audio = document.createElement("audio");
		audio.setAttribute("id", "a1"); 
		audio.setAttribute("controls", "controls");
		var source = document.createElement("source");
		
	
	if (ejreading[0]==1||ejreading[1]==1||ejreading[2]==1){
		document.getElementById('texto').innerHTML="<p><strong>Robots</strong> play an important role in our lives.  They entertain us and do a lot of jobs that we can't do or don’t like to do. <br>In the future, <b>they are going to</b> play an even more important part in our society.<br> A Will they teach our children though? It looks like it. In Japan, the first humanoid robot, Saya, taught a science and technology class in a school recently.<br> Saya looks like a human teacher and can express surprise, fear, anger and other human emotions. <br>In the future robots like Saya won't only teach our children.  <br>They <b>will</b> play with and protect our children and even guard schools. Children will also be able to send their own robot to school for them when they are sick. <br> Their robots <b>will</b> record lessons and then play them back to the child. Schools of the future <b>are not going</b> to be the same!</p><span id="APA">(Evans & Dooley, 2009, p. 84)</span>";
		$('#texto').css('margin','50px');
		document.getElementById('imageart').src="../../../images/reading/24.jpg";
	}
	
	if (ejreading[0]==1){
		source.setAttribute("src", "../../../audios/preguntas/reading/afr1_1.mp3"); 
		source.setAttribute("type", "audio/mpeg");
		audio.appendChild(source);
		document.getElementById('ask').innerHTML=""+
		"<div id='q1'>"+
		"<label for='uno'>What's the first humanoid robot's name?</label>"+
		"<div id='esto' class='negar' onClick='erronea(0)' style='cursor: pointer'>"+
		"<h2 class='ans'>A.	It is a teacher</h2></div>"+
		"<div id='es' class='negar' onClick='erronea(0)' style='cursor: pointer'>"+
		"<h2 class='ans'>B.	It is a robot teacher</h2></div>"+
		"<div id='udec1' class='acertar' onClick='correcta(0)' style='cursor: pointer'><h2 class='ans'>C.	It is named Saya</h2></div>"+
		"</div>";
	}

	if (ejreading[1]==1){
		source.setAttribute("src", "../../../audios/preguntas/reading/afr1_2.mp3"); 
		source.setAttribute("type", "audio/mpeg");
		audio.appendChild(source);
		document.getElementById('ask').innerHTML=""+
		"<div id='q1'>"+
		"<label for='uno'>Will robots only teach children?</label>"+
		"<div id='esto' class='negar' onClick='erronea(0)' style='cursor: pointer'>"+
		"<h2 class='ans'>A.	Yes, the will.</h2></div>"+
		"<div id='es' class='acertar' onClick='correcta(0)' style='cursor: pointer'>"+
		"<h2 class='ans'>B.	No, they won't.</h2></div>"+
		"<div id='udec1' class='negar' onClick='erronea(0)' style='cursor: pointer'><h2 class='ans'>C.	We don’t know.</h2></div>"+
		"</div>";}
	if (ejreading[2]==1){
		source.setAttribute("src", "../../../audios/preguntas/reading/afr1_3.mp3"); 
		source.setAttribute("type", "audio/mpeg");
		audio.appendChild(source);
		document.getElementById('ask').innerHTML=""+
		"<div id='q1'>"+
		"<label for='uno'>What will happen if students are not able to go to school?</label>"+
		"<div id='esto' class='acertar' onClick='correcta(0)' style='cursor: pointer'>"+
		"<h2 class='ans'>A.	Students will be able to send their robots to record the lessons</h2></div>"+
		"<div id='es' class='negar' onClick='erronea(0)' style='cursor: pointer'>"+
		"<h2 class='ans'>B.	Robots will be able to take tests for them</h2></div>"+
		"<div id='udec1' class='negar' onClick='erronea(0)' style='cursor: pointer'>"+
		"<h2 class='ans'>C.	Robots will teach them</h2></div>"+
		"</div>";}
	
	
	if (ejreading[3]==1){
		
		document.getElementById('texto').innerHTML=""+
		
		"<div id='fragmento'>"+
							"<h6><p>"+
								"<b>From:</b> Ethan<br>"+
								"<b>To:</b> Peter<br>"+
								"<b>Subject:</b> My dream vacation!<br><br>"+
									"Hi Peter<br>"+
"									Guess what? We are going to "+
								"<select disabled id='cid1'>"+
									"<option value='0'>--   --</option>"+
									"<option value='1'>Spend</option>"+
									"<option value='2'>Travel</option>"+
"									<option value='3'>Fly</option>        "+
								"</select> "+
"									three weeks in Mexico. It is going to be the best "+
								"<select disabled id='cid2'>"+
									"<option value='0'>--   --</option>"+
									"<option value='1'>Travel</option>"+
									"<option value='2'>Vacation</option>"+
"									<option value='3'>Journey  "+
								"</select> "+
"ever.<br> My dad is going to Buy the tickets tomorrow. We are going to do a lot of Interesting things. Mom and Dad are going to Climb El Pico de Orizaba or. At least, give it a Try. El Pico de Orizaba is a Volcano. Bill and I are going to visit Mayan Pyramids and go Hiking.<br> I'm sure it's going to be a great Trip. We all can't wait. <br> Bye for now<br>
"<b>Ethan</b>"+
						"</p></h6>"+
						"</div>"+
"<span id='APA'>(Evans & Dooley, 2009, p. 72)</span>";
		
		document.getElementById('imageart').src="../../../images/reading/5_imagen.png";
		
	}
	
	
	if (ejreading[4]==1){
		
		document.getElementById('texto').innerHTML=""+
		
		"<div id='fragmento'>"+
							"<h6><p>"+
								"<b>From:</b> Ethan<br>"+
								"<b>To:</b> Peter<br>"+
								"<b>Subject:</b> My dream vacation!<br><br>"+
									"Hi Peter<br>"+
"									Guess what? We are going to Spend three weeks in Mexico. It is going to be the best Vacation ever.<br> My dad is going to "+
								"<select disabled id='cid1'>"+
									"<option value='0'>--   --</option>"+
									"<option value='1'>Boring</option>"+
									"<option value='2'>Excited</option>"+
"									<option value='3'>Buy</option>      "+  
								"</select> "+
"the tickets tomorrow. We are going to do a lot of "+
								"<select disabled id='cid2'>"+
									"<option value='0'>--   --</option>"+
									"<option value='1'>Bring</option>"+
									"<option value='2'>Interesting</option>"+
"									<option value='3'>Buy</option>        "+
								"</select>  "+
 "things. Mom and Dad are going to Climb El Pico de Orizaba or. At least, give it a Try. El Pico de Orizaba is a Volcano. Bill and I are going to visit Mayan Pyramids and go Hiking.<br> I'm sure it's going to be a great Trip. We all can't wait. <br> Bye for now<br>
"<b>Ethan</b> </p></h6></div>"+
"<span id='APA'>(Evans & Dooley, 2009, p. 72)</span>";
		
		document.getElementById('imageart').src="../../../images/reading/5_imagen.png";
		
	}
	
	
	if (ejreading[5]==1){
		
		document.getElementById('texto').innerHTML=""+
		
		"<div id='fragmento'>"+
							"<h6><p>"+
								"<b>From:</b> Ethan<br>"+
								"<b>To:</b> Peter<br>"+
								"<b>Subject:</b> My dream vacation!<br><br>"+
									"Hi Peter<br> Guess what? We are going to Spend three weeks in Mexico. It is going to be the best Vacation ever.<br> My dad is going to Buy the tickets tomorrow. We are going to do a lot of Interesting things. Mom and Dad are going to "+
								"<select disabled id='cid1'>"+
									"<option value='0'>--   --</option>"+
									"<option value='1'>Climb</option>"+
"									<option value='2'>Visit</option>"+
"									<option value='3'>Fly</option>"+
								"</select>"+
"El Pico de Orizaba or. At least, give it a "+
								"<select disabled id='cid2'>"+
									"<option value='0'>--   --</option>"+
									"<option value='1'>Chance</option>"+
									"<option value='2'>Try</option>"+
									"<option value='3'>Fly</option>"+
										
							"</select> "+
							". El Pico de Orizaba is a Volcano. Bill and I are going to visit Mayan Pyramids and go Hiking.<br> I'm sure it's going to be a great Trip. We all can't wait. <br> Bye for now<br>
"<b>Ethan</b> </p></h6></div>"+
"<span id='APA'>(Evans & Dooley, 2009, p. 72)</span>";
		
		document.getElementById('imageart').src="../../../images/reading/5_imagen.png";
		
	}
	
	
	if (ejreading[6]==1){
		
		document.getElementById('texto').innerHTML=""+
		
		"<div id='fragmento'>"+
							"<h6><p>"+
								"<b>From:</b> Ethan<br>"+
								"<b>To:</b> Peter<br>"+
								"<b>Subject:</b> My dream vacation!<br><br>"+
									"Hi Peter<br> Guess what? We are going to Spend three weeks in Mexico. It is going to be the best Vacation ever.<br> My dad is going to Buy the tickets tomorrow. We are going to do a lot of Interesting things. Mom and Dad are going to  Climb El Pico de Orizaba or. At least, give it a Try. El Pico de Orizaba is a"+
							"<select disabled id='cid1'>"+
										"<option value='0'>--   --</option>"+
										"<option value='1'>Desert</option>"+
										"<option value='2'>River</option>					"+
"										<option value='3'>Volcano</option>        "+
							"</select>  "+
							". Bill and I are going to visit Mayan "+
									  
									"<select disabled id='cid2'>"+
										"<option value='0'>--   --</option>"+
										"<option value='1'>Culture</option>"+
										"<option value='2'>Pyramids</option>"+
										"<option value='3'>Town</option>      "+  
									"</select> "+
							 "and go Hiking.<br> I'm sure it's going to be a great Trip. We all can't wait. <br> Bye for now<br>
"<b>Ethan</b> </p></h6></div>"+
"<span id='APA'>(Evans & Dooley, 2009, p. 72)</span>";
		
		document.getElementById('imageart').src="../../../images/reading/5_imagen.png";
		
	}
	
	
	if (ejreading[7]==1){
		
		document.getElementById('texto').innerHTML=""+
		
		"<div id='fragmento'>"+
							"<h6><p>"+
								"<b>From:</b> Ethan<br>"+
								"<b>To:</b> Peter<br>"+
								"<b>Subject:</b> My dream vacation!<br><br>"+
									"Hi Peter<br> Guess what? We are going to Spend three weeks in Mexico. It is going to be the best Vacation ever.<br> My dad is going to Buy the tickets tomorrow. We are going to do a lot of Interesting things. Mom and Dad are going to  Climb El Pico de Orizaba or. At least, give it a Try. El Pico de Orizaba is a Volcano. Bill and I are going to visit Mayan Pyramids and go"+
							
								"<select disabled id='cid1'>"+
									"<option value='0'>--   --</option>"+
									"<option value='1'>Visit	</option>"+
									"<option value='2'>Travel</option>"+
									"<option value='3'>Hiking</option>  "+      
								"</select>"+
							".<br>"+
"I'm sure it's going to be a great "+
							"<select disabled id='cid2'>"+
										"<option value='0'>"+
										"--   --"+
											"</option>"+
											
											"<option value='1'>"+
											"Trip"+
											"</option>"+
											
											"<option value='2'>"+
											"Sightseeing"+
											"</option>"+
											"<option value='3'>"+
											"Swimming"+
											"</option>"+
							"</select> "+
". We all can't wait. <br> Bye for now<br>
"<b>Ethan</b>"+
						"</p></h6>"+
						"</div>"+
"<span id='APA'>(Evans & Dooley, 2009, p. 72)</span>";
		
		document.getElementById('imageart').src="../../../images/reading/5_imagen.png";
		
	}
	
	
	
	
	
	
	setTimeout(function(){
			$('#continuar').css('pointer-events','auto');
			$('#continuar').css('opacity','1');
			$("#countdown").countdown360({}).start();
		},1000);	
}

