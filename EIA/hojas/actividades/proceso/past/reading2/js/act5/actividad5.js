var aux=0,aux2=1,cont=0,end=0,cuentabien=0,cuentamal=0;

function carga(){
	$('#blanco').css('display','inline-block');
	$('.perendengues1').css('visibility','visible');
	$('#audio1').css('visibility','hidden');
	$('#sig').css('opacity','.3');
	
		$('.perendengues1').css('visibility','visible');
		$('#audio1').css('visibility','visible');
		$('#sig').css('opacity','1');
		

		document.getElementById("alumbraobj").style.webkitAnimation="alumbra 2s infinite";
		document.getElementById("alumbraobj").style.animation="alumbra 2s infinite";
	
		
		document.getElementById("sig").style.animation="alumbra 2s infinite";
		document.getElementById("sig").style.webkitAnimation="alumbra 2s infinite";


		
		
	}

function fin(){end=4;} 

function pregunta(){

var str="",str2="";






///document.getElementById('mal0').pause();
//document.getElementById('mal1').pause();
//document.getElementById('mal2').pause();
//document.getElementById('mal3').pause();
//document.getElementById('mal4').pause();

				if(cont==0){
				$('.sig').css('display','none');
					$('article').css('display','none');
					$('#q1').css('display','inline-block');
					$('#void').css('display','inline-block');
					$('#grab1').css('display','none');
					$('#grab2').css('display','none');
					$('#audio1').css('display','none');
					document.getElementById('au1').play();
						
		
					
					}	
						else{
						if(end==0)	
							{
								document.getElementById('au2').play();
							str="#q"+cont;
							str2="#q"+(cont+1);
							$(str).css('display','none');
							$(str2).css('display','inline-block');
							$(str2+' div').css('display','inline');
							$('#Correct').css('display','none');
							$('#Incorrect').css('display','none');
							end++;
							
							}else
							if(end==1)	
							{
								document.getElementById('au3').play();
							str="#q"+cont;
							str2="#q"+(cont+1);
							$(str).css('display','none');
							$(str2).css('display','inline-block');
							$(str2+' div').css('display','inline');
							end++;
							
							}else
							if(end==2)	
							{
								document.getElementById('au4').play();
							str="#q"+cont;
							str2="#q"+(cont+1);
							$(str).css('display','none');
							$(str2).css('display','inline-block');
							$(str2+' div').css('display','inline');
							end++;
							
							}else
							if(end==3)	
							{
								document.getElementById('au5').play();
							str="#q"+cont;
							str2="#q"+(cont+1);
							$(str).css('display','none');
							$(str2).css('display','inline-block');
							$(str2+' div').css('display','inline');
							end++;
							
							}else
						if(end==4)	
							{
							str="#q"+cont;
							str2="#q"+(cont+1);
							$(str).css('display','none');
							$(str2).css('display','none');
							
							$('#void').css('display','none');
							
						resultado(cuentabien,5);
							cuentabien=0;
							}
					}
			cont++;			
		
	
	
}


function correcta(lleva){
	clearTimeout(temp);
	document.getElementById('aplausos').play();	
	cuentabien++;
	
	$('.acertar h2').addClass('bn');

	
	if(lleva==0){
		audio.pause();
		tucha++;
		preguntaAle2(true);
		$('#q1 .ans').css('cursor','default');
		$('#q1 h2').removeClass('ans');
		document.getElementById('esto').removeAttribute("onclick");
		document.getElementById('es').removeAttribute("onclick");
		document.getElementById('udec1').removeAttribute("onclick");
		}
	if(lleva==1){
		audio.pause();
		tucha++;
		preguntaAle2(true);
		$('#q2 .ans').css('cursor','default');
		$('#q2 h2').removeClass('ans');
		document.getElementById('esto2').removeAttribute("onclick");
		document.getElementById('es2').removeAttribute("onclick");
		document.getElementById('udec2').removeAttribute("onclick");
		}
	if(lleva==2){
		audio.pause();
		tucha++;
		preguntaAle2(true);
		$('#q3.ans').css('cursor','default');
		$('#q3 h2').removeClass('ans');
		document.getElementById('esto3').removeAttribute("onclick");
		document.getElementById('es3').removeAttribute("onclick");
		document.getElementById('udec3').removeAttribute("onclick");}

	if(lleva==3){
		audio.pause();
		tucha++;
		preguntaAle2(true);
		$('#q4.ans').css('cursor','default');
		$('#q4 h2').removeClass('ans');
		document.getElementById('esto4').removeAttribute("onclick");
		document.getElementById('es4').removeAttribute("onclick");
		document.getElementById('udec4').removeAttribute("onclick");}
	if(lleva==4){
		audio.pause();
		tucha++;
		preguntaAle2(true);
		$('#q5.ans').css('cursor','default');
		$('#q5 h2').removeClass('ans');
		document.getElementById('esto5').removeAttribute("onclick");
		document.getElementById('es5').removeAttribute("onclick");
		document.getElementById('udec5').removeAttribute("onclick");}
	
	//setTimeout(function(){
	//$('.acertar h2').removeClass('bn');
		//pregunta();},3000);
	}
	
	
function erronea(lleva){
	document.getElementById('thecorrect').play();	
clearTimeout(temp);
$('.negar h2').addClass('malongo');
$('.acertar h2').addClass('bn');
			if(lleva==0){
				audio.pause();
				tucha++;
				preguntaAle2(false);
				$('#q1 .ans').css('cursor','default');
				$('#q1 h2').removeClass('ans');
				
				document.getElementById('esto').removeAttribute("onclick");
				document.getElementById('es').removeAttribute("onclick");
				document.getElementById('udec1').removeAttribute("onclick");
				
				temp=setTimeout(function(){
					document.getElementById('correct').play();
				},2500);
				
			
				
			
			}
			if(lleva==1){
				audio.pause();
				tucha++;
				preguntaAle2(false);
				$('#q2 .ans').css('cursor','default');
				$('#q2 h2').removeClass('ans');
				
				document.getElementById('esto2').removeAttribute("onclick");
				document.getElementById('es2').removeAttribute("onclick");
				document.getElementById('udec2').removeAttribute("onclick");
				
			temp=setTimeout(function(){
					document.getElementById('correct').play();
				},2500);
			
			
			}
			if(lleva==2)
			{
				audio.pause();
				preguntaAle2(false);
				$('#q3 .ans').css('cursor','default');
				$('#q3 h2').removeClass('ans');
				
				document.getElementById('esto3').removeAttribute("onclick");
				document.getElementById('es3').removeAttribute("onclick");
				document.getElementById('udec3').removeAttribute("onclick");
				
				temp=setTimeout(function(){
					document.getElementById('correct').play();
				},2500);
				
			
			
			}
				if(lleva==3)
			{
				audio.pause();
				tucha++;
				preguntaAle2(false);
				$('#q4 .ans').css('cursor','default');
				$('#q4 h2').removeClass('ans');
				
				document.getElementById('esto4').removeAttribute("onclick");
				document.getElementById('es4').removeAttribute("onclick");
				document.getElementById('udec4').removeAttribute("onclick");
				
				temp=setTimeout(function(){
					document.getElementById('correct').play();
				},2500);
				
				
			
			}
			if(lleva==4){
				audio.pause();
				preguntaAle2(false);
				temp=setTimeout(function(){
					document.getElementById('correct').play();
				},2500);
				
				tucha++;
				$('#p5 .ans').css('cursor','default');
				$('#q5 h2').removeClass('ans');
				
				document.getElementById('esto5').removeAttribute("onclick");
				document.getElementById('es5').removeAttribute("onclick");
				document.getElementById('udec5').removeAttribute("onclick");
				
				
			$('#primera').css('display','none');
			$('#tercera').css('display','inline');
			$('#segunda').css('display','none');
			
			
				
				
			
			}
		
			
				cuentamal++;
				//setTimeout(function(){$('.negar h2').removeClass('malongo');$('.acertar h2').removeClass('bn');pregunta();},9700);
				
	}
