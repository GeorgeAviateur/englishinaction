var aux=0,aux2=1,cont=0,end=0,cuentabien=0,cuentamal=0;

function fin(){end=1;} 

function pregunta(){

var str="",str2="";

document.getElementById('mal0').pause();
document.getElementById('mal1').pause();
document.getElementById('mal2').pause();
document.getElementById('ask1').pause();
document.getElementById('ask2').pause();
document.getElementById('ask3').pause();
document.getElementById('radio').pause();
					
				if(cont==0){
				$('.sig').css('display','none');
					$('article').css('display','none');
					$('#q1').css('display','inline-block');
					$('#grab1').css('display','none');
					$('#grab2').css('display','none');
					document.getElementById('ask1').play();
					}
					
						else{
						if(end==0)	
							{
							str="#q"+cont;
							str2="#q"+(cont+1);
							$(str).css('display','none');
							$(str2).css('display','inline-block');
							$(str2+' div').css('display','inline');
							$('#Correct').css('display','none');
							$('#Incorrect').css('display','none');
							if(cont==1)
							document.getElementById('ask2').play();
							if(cont==2)
							document.getElementById('ask3').play();
							}
						if(end==1)	
							{
							str="#q"+cont;
							str2="#q"+(cont+1);
							$(str).css('display','none');
							$(str2).css('display','none');
							$('#Correct').css('display','none');
							$('#Incorrect').css('display','none');
							
						resultado(cuentabien,3);
							cuentabien=0;
							
							}
					}
			cont++;			
		
}


function correcta(){
	document.getElementById('bien').play();
	quitar();
	$('#Correct').css('display','inline');
	$('#Correct').css('animation', 'excelent .5s linear');
	cuentabien++;
	setTimeout(function(){pregunta();},2000);
	
document.getElementById('ask1').pause();
document.getElementById('ask2').pause();
document.getElementById('ask3').pause();
	}
function erronea(lleva){

	quitar();
	$('#Incorrect').css('display','inline-block');
			if(lleva==0){
			$('#primera').css('display','inline-block');
			document.getElementById('mal0').play();	
			}
			
			if(lleva==1)
			{$('#primera').css('display','none');
			$('#segunda').css('display','inline-block');
			document.getElementById('mal1').play();
			}
			
			if(lleva==2){
			$('#primera').css('display','none');
			$('#tercera').css('display','inline-block');
			$('#segunda').css('display','none');
			document.getElementById('mal2').play();
			}
		$('#Incorrect').css('animation', 'excelent 5s linear');
			
				cuentamal++;
				setTimeout(function(){pregunta();},5000);
document.getElementById('ask1').pause();
document.getElementById('ask2').pause();
document.getElementById('ask3').pause();
				
	}
function quitar(){
		$('#q1 div').css('display','none');
		$('#q2 div').css('display','none');
		$('#q3 div').css('display','none');
	}