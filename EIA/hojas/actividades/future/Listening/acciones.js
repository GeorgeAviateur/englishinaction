var aux=0,aux2=1,end=0,cuentabien=0,cuentamal=0;
	var temporizador,temporizador2;


function alertSize() {
aux=0;aux2=1;end=0;cuentabien=0;cuentamal=0;
}
function readme(){
	insob();
	ins();
	document.getElementById('instruyeme').play();
	$('#r1').css('opacity','0.2');
	temp=setTimeout(function(){document.getElementById('hablame').play();},16000);
	temp=setTimeout(function(){$('#r1').css('opacity','1');},16000);

}


function readme2(){

	document.getElementById('instruyeme').play();
	
	
	temp=setTimeout(function(){document.getElementById('hablame').play();},16000);
	temp=setTimeout(function(){$('#r1').css('display','inline-block');$('#emergent').css('display','none');},16000);
	temp=setTimeout(function(){$('.sig').css('display','inline-block');document.getElementById('conversation').play();},16500);
	
	
	}
function ins(){
	if(aux==0){
		$('#objetivos').css('display','none');
		aux2=1;
		$('#instruccion').css('animation', 'pasadoaparece .5s linear');
		$('#instruccion').css('display','inline-block');
		clearTimeout(temporizador);
					temporizador2=setTimeout(function(){ins();},16000);
		aux=1;}
		
		else
			if(aux==1){
			$('#instruccion').css('display','none');
		aux=0;
		clearTimeout(temporizador2);
		}
}

function insob(){
		if(aux2==1){
			$('#instruccion').css('display','none');
			
			aux=0;
			$('#objetivos').css('animation', 'pasadoaparece .5s linear');
			$('#objetivos').css('display','inline-block');
			clearTimeout(temporizador2);
				temporizador=setTimeout(function(){insob();},4000);
			aux2=0;
			}
	
				else
					if(aux2==0){
					$('#objetivos').css('display','none');
					aux2=1;
					clearTimeout(temporizador);
				
				}
				
				
				
				

				}


function changehand(trae){

if(trae==0){$('#hand1').css('visibility','visible');}
if(trae==1){$('#hand2').css('visibility','visible');}
if(trae==2){$('#hand1').css('visibility','hidden');}
if(trae==3){$('#hand2').css('visibility','hidden');}
}





function volver(vuelvee){

if(vuelvee==5)
if(confirm("¿Quieres Volver a Actividad5?")) {
        document.location.href= 'r5.html';
    }
if(vuelvee==4)
if(confirm("¿Quieres Volver a Actividad4?")) {
        document.location.href= 'r4.html';
    }

if(vuelvee==3)
if(confirm("¿Quieres Volver a Actividad3?")) {
        document.location.href= 'r3.html';
    }

if(vuelvee==2)
if(confirm("¿Quieres Volver a Actividad2?")) {
        document.location.href= 'r2.html';
    }

if(vuelvee==1)
    if(confirm("¿Quieres Volver a Actividad 1?")) {
        document.location.href= 'r.html';
    }
if(vuelvee==0)
if(confirm("¿Quieres Volver a Centro de Actividades?")) {
        document.location.href= '../../centro.html';
    }

	

}





function resultado(cuentabien,sobre){

 escribir = document.getElementById("result");
 escribir.innerHTML = "Successful: "+cuentabien+"| Wrong:"+(sobre-cuentabien);

$('#informa').css('display','inline-block');
$('#informa').css('visibility','hidden');
$('#hand1').css('visibility','hidden');

$('#q4').css('display','inline-block');
$('.final').css('display','inline');
}