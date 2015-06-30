var hlp=0,cont=0; 
var intento=0;
var fin=3;
var cuentabien=0,cuentamal=0;
var lleva=[11,11,11,11,11];
 
var rta = ["Andrea went to the movies. She watched a 3D movie. She ate popcorn and drank coke","Sergio went to a bar with some friends. He danced and drank some beers.","Susy and Pablo went to the gym. They did some cardio exercises. They took a Yoga class.","Cristina went to a restaurant yesterday. She ate a salad. She drank water","Steven went to Ann's house last night. They watched a horror movie. They ate hot dogs"];
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*    ACCIONES PARA LA ACTIVIDAD NUMERO 2 DE READING*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function prime(){

var aleatorio=0;
var ale=false;

while(ale==false){
aleatorio=Math.floor(Math.random() * (4 - 0 + 1)) + 0;	

ale=true;

	for(var i=0;i<5;i++){
		if(aleatorio==lleva[i]){
				ale=false;
		}	
	}
}
			document.getElementById('imagen1').value=rta[aleatorio];
					document.getElementById('a'+(aleatorio+1)).play();
			lleva[cont]=aleatorio;
			cont++;
}

	
	
	
function check(id){

document.getElementById('a5').pause();
document.getElementById('a4').pause();
document.getElementById('a3').pause();
document.getElementById('a2').pause();
document.getElementById('a1').pause();

var espacio=document.getElementById('imagen1').value;

	if(id==espacio){
	document.getElementById('bien1').play();
	
	setTimeout(function(){},1000);
	cuentabien++;
	intento=0;
	if(cont<5)
	prime();
	}
	else{
		if(intento==0){
		
		document.getElementById('mal1').play();
		setTimeout(function(){},1000);
		intento++;}
			else 
				if(intento==1){
				
				setTimeout(function(){},1000);
				intento=0;prime();
				if(cuentamal+cuentabien!=5)
				cuentamal++;
				}

	}	

	if((cuentabien+cuentamal)==5){
		limpia();
		
	}
}

function limpia(){
		$('#r1').css('display','none');		
		$('#cuadro').css('display','none');
		$('.check').css('display','none');
		$('#naegacion').css('display','none');
		$('#title').css('display','none');
		
		
		
		resultado(cuentabien,5);
		
		
		
		}



function carga(){
	
	empezar();
	$('#plane').addClass("muestrame");

     $('#informa').css('opacity','.1');
		temp=setTimeout(function(){$('#informa').css('opacity','1');},30000);
     


}



function empezar(){
	
	$('#gallery').css('opacity','1');
		
		
		
		
			auto=setTimeout(function(){
				document.getElementById('imagen1').value=rta[0]; 
				document.getElementById('Andrea went to the movies. She watched a 3D movie. She ate popcorn and drank coke').click(); 
				document.getElementById('a1').play();
				},0500);
			
			auto=setTimeout(function(){
				document.getElementById('imagen1').value=rta[1];
				document.getElementById('Sergio went to a bar with some friends. He danced and drank some beers.').click();
				document.getElementById('a2').play();
				},9000);
			
			auto=setTimeout(function(){
				document.getElementById('imagen1').value=rta[2];
				document.getElementById("Susy and Pablo went to the gym. They did some cardio exercises. They took a Yoga class.").click();
				
				//document.getElementById('ola2').click();
				document.getElementById('a3').play();
				},17000);
			
			auto=setTimeout(function(){
				document.getElementById('imagen1').value=rta[3]; 
				document.getElementById('Cristina went to a restaurant yesterday. She ate a salad. She drank water').click(); 
				document.getElementById('a4').play();
				},27000);
			
			auto=setTimeout(function(){
				document.getElementById('imagen1').value=rta[4];
				document.getElementById("Steven went to Ann's house last night. They watched a horror movie. They ate hot dogs").click();
				document.getElementById('a5').play();
				},36000);
			
			

			auto=setTimeout(function(){ document.getElementById('imagen1').value=rta[0]; 
			document.getElementById('Andrea went to the movies. She watched a 3D movie. She ate popcorn and drank coke').click()
			
			document.getElementById('label').innerHTML="Select an image for:";prime();
			},44000);
			
			

		


}




