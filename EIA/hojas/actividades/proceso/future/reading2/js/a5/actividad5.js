var hlp=0,cont=0; 
var intento=0;
var fin=3;
var cuentabien=0,cuentamal=0;
var lleva=[11,11,11,11,11,11,11,11,11,11];
 
var rta = ["She likes listening to music","He likes hamburgers","They like cocktails","He doesn't like whiskey","They enjoy dancing","They love going to the movies","They enjoy doing exercise",
	"She loves going to the gym","He doesn't like exercising","She hates horror movies"];
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*    ACCIONES PARA LA ACTIVIDAD NUMERO 2 DE READING*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function prime(){

var aleatorio=0;
var ale=false;

while(ale==false){
aleatorio=Math.floor(Math.random() * (9 - 0 + 1)) + 0;	

ale=true;

	for(var i=0;i<10;i++){
		if(aleatorio==lleva[i]){
				ale=false;
		}	
	}
}
			document.getElementById('imagen1').value=rta[aleatorio];
					//document.getElementById('musica'+aleatorio).play();			
			lleva[cont]=aleatorio;
			cont++;
}

	
	
	
function check(id){

																
var espacio=document.getElementById('imagen1').value;

	if(id==espacio){
	document.getElementById('bien1').play();
	
	setTimeout(function(){},1000);
	cuentabien++;
	intento=0;
	if(cont<10)
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
				intento=0;
				cuentamal++;
				if(cuentamal+cuentabien!=10)
				prime();
				
				}

	}	

	if((cuentabien+cuentamal)==10){
		limpia();
		
	}
}

function limpia(){
		$('#r1').css('display','none');		
		$('#cuadro').css('display','none');
		$('.check').css('display','none');
		$('#naegacion').css('display','none');
		$('#title').css('display','none');
		
		
		
		resultado(cuentabien,10);
		
		
		
		}





function rueda(valorGiro){




	if(valorGiro==0&&cont1<3){
		$('#boton2').css('display','none');
		$('#boton3').css('display','none');
		$('#boton1').css('display','inline-block');
		}
		
	if(valorGiro==1&&cont2<3){
		$('#boton1').css('display','none');
		$('#boton3').css('display','none');
		$('#boton2').css('display','inline-block');
		$('#botonRetro1').css('display','none');
		$('#botonRetro3').css('display','none');
		$('#botonRetro2').css('display','none');
		}
		
		
	if(valorGiro==2&&cont3<3){
		$('#boton2').css('display','none');
		$('#boton1').css('display','none');
		$('#boton3').css('display','inline-block');
				$('#botonRetro1').css('display','none');
		$('#botonRetro3').css('display','none');
		$('#botonRetro2').css('display','none');
		}
		
	
}
function roll(aum){

	if(hlp==0&&aum==-1)
		hlp=9;
		else
	if(hlp==9&&aum==1)
		hlp=0;
	else
	hlp=hlp+aum;
	var j=0;			
		for(var i=0;i<10;i++){
			j=i+1;
				$('#cuadro'+j).css('display','none');
				if(hlp==i)
				$('#cuadro'+j).css('display','inline-block');
			}
}




function carga(){
	$('#gallery').css('opacity','.3');
	 $('.sig').css('pointer-events','auto');
    $('#informa').css('opacity','.1');
		temp=setTimeout(function(){$('#informa').css('opacity','1');},30000);
	 
	empezar();
	
		
		document.getElementById('label').innerHTML="Read carefully";
	   $('#plane').addClass("muestrame");

}



function empezar(){
	
	$('#gallery').css('opacity','1');
		
		document.getElementById('audioSlider').play();
		
		
			auto=setTimeout(function(){
				document.getElementById('imagen1').value=rta[0]; 
				document.getElementById('She loves listening to music').click(); 
				
				},0500);
			
			auto=setTimeout(function(){
				document.getElementById('imagen1').value=rta[9];
				document.getElementById('She hates horror movies').click();
				//document.getElementById('a2').play();
				},4000);
			
			auto=setTimeout(function(){
				document.getElementById('imagen1').value=rta[8];
				document.getElementById("He doesn't like exercising").click();
				
				//document.getElementById('ola2').click();
				//document.getElementById('a3').play();
				},8000);
			
			auto=setTimeout(function(){
				document.getElementById('imagen1').value=rta[7]; 
				document.getElementById('She loves going to the gym').click(); 
				//document.getElementById('a4').play();
				},12000);
			
			auto=setTimeout(function(){
				document.getElementById('imagen1').value=rta[6];
				document.getElementById('They enjoy doing exercise').click();
				//document.getElementById('a5').play();
				},17000);
			
			auto=setTimeout(function(){
				document.getElementById('imagen1').value=rta[5];
				document.getElementById('They love going to the movies').click();
				//document.getElementById('a6').play();
				},21250);
			
			auto=setTimeout(function(){
				document.getElementById('imagen1').value=rta[4];
				document.getElementById('They enjoy dancing').click();
				//document.getElementById('a7').play();xx=1;
				},26100);
				
			auto=setTimeout(function(){
				document.getElementById('imagen1').value=rta[3]; 
				document.getElementById("He doesn't like whiskey").click();
				//document.getElementById('a7').play();xx=1; 
				},30000);
				
			auto=setTimeout(function(){
				document.getElementById('imagen1').value=rta[2];
				document.getElementById('They like cocktails').click();
				//document.getElementById('a7').play();xx=1;
				},33000);
			
			auto=setTimeout(function(){
				document.getElementById('imagen1').value=rta[1];
				
				//document.getElementById('a7').play();
				document.getElementById('He likes hamburgers').click();},36220);

			auto=setTimeout(function(){ document.getElementById('imagen1').value=rta[0]; document.getElementById('She loves listening to music').click()
			//document.getElementById('a1').play();
			document.getElementById('label').innerHTML="Select an image for:";prime();
			},39370);
			
			

		


}




