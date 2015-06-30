


var ejreading = new Array(12);

var activar = new Array(32);
var suplente = new Array(32);
var bart1=0;
var bart2=0;

var respuestiña;
var contadorsiño=0;
var j;
var audio;
var audio1;
var audio2;
var audioMal;
var audioBien;
var pausito;
var pausito1;

var instru=0;
var contador=0;
var contador1=0;
var tiempo=0;
var activarlistening = new Array(12);
var aux=0,aux2=1,end=0,cuentabien=0,cuentamal=0;
var temporizador,temporizador2;
cadVariables = location.search.substring(1,location.search.length);



//------------------------------

//-------------------------------------------------------------------------------------------------------------------------------------
function habilidad(){
audioBien=document.getElementById("aplausos");
audioMal=document.getElementById("trompeta");
$('#continuar').css('display','inline');
var aleatorio = Math.round(Math.random()*20);

    
if(aleatorio>8) {window.location="../reading2/evaluacion.html?"+cadVariables; }




ejreading[aleatorio]=1;
}
//-------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------
function objetivos(){
$('#objetivos').css('visi','0.6'); 

}
//-----------------------------------------------------------------------------------------------------------------------------------
function instruccion(){


if (ejreading[0]==1||ejreading[1]==1||ejreading[2]==1||ejreading[3]==1||ejreading[4]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
//aucio instruccion 1
source.setAttribute("src", "../../../actividades/audios/instrucciones/reading/i_evprr_5.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
document.getElementById('instruccion').innerHTML='<h5>Read and listen to the text three times. You should take notes. Then, click on a, b, or c to answer each question. You only have one opportunity to answer.</h5>';
}
if (ejreading[5]==1){
	audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
//aucio instruccion 1
source.setAttribute("src", "../../../actividades/audios/instrucciones/reading/i_evprr_5.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
document.getElementById('instruccion').innerHTML='<h5>Read and listen to the text three times. You should take notes. Then, click on a, b, or c to answer each question. You only have one opportunity to answer.</h5>';
}

if (ejreading[6]==1||ejreading[7]==1||ejreading[8]==1||ejreading[9]==1){
	audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
//aucio instruccion 1
source.setAttribute("src", "../../../actividades/audios/instrucciones/reading/i_evprr_5.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
document.getElementById('instruccion').innerHTML='<h5>Read and listen to the text three times. You should take notes. Then, click on a, b, or c to answer each question. You only have one opportunity to answer.</h5>';
}

if (ejreading[10]==1||ejreading[11]==1||ejreading[12]==1||ejreading[13]==1){
	
		audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
//aucio instruccion 1
source.setAttribute("src", "../../../actividades/audios/instrucciones/reading/i_evprr_5.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
document.getElementById('instruccion').innerHTML='<h5>Read and listen to the text three times. You should take notes. Then, click on a, b, or c to answer each question. You only have one opportunity to answer.</h5>';
	
}


}

//-------------------------------------------------------------------------------------------------------------------------------------
function redireccionar(){
window.location="../../libro.html?"+cadVariables;
}
//-----------------------------------------------------------------------------------------------------------------------------------

function goAll12(){
$('#r1').css('opacity','1');
$('#blanco').css('opacity','1');
changehand(2);
$('#plane').addClass("muestrame");
$('aside').css('z-index','12');
var talk=document.getElementById('hablame');	
if(talk)
talk.play();
$('#startActi').css('display','none');
$('.sig').css('pointer-events','auto');
$('.prev').css('opacity','1');
$('.prev').css('pointer-events','auto');
//$('a').css('pointer-events','auto');
$('.fuckencio').css('display','block');
parrafos();    
    if (ejreading[4]==1||ejreading[5]==1||ejreading[6]==1||ejreading[7]==1||ejreading[8]==1){var i;
        for(i=1;i<3;i++){document.getElementById('cid'+i).disabled=false;}
    }

}

function readme12(time){
$('#r1').css('opacity','0.2');
$('#blanco').css('opacity','0.2');
$('.fuckencio').css('display','none');
$('.sig').css('pointer-events','none');
//$('#blanco').css('pointer-events','none');
$('.sig').css('opacity','0.2');
$('#continuar1').css('opacity','1');
$('.prev').css('opacity','0.2');
$('.prev').css('pointer-events','none');
//$('a').css('pointer-events','none');
$('#alumbraobj').addClass('bigEntrance');
//$('#continuar').css('display','none');
document.getElementById('georgeRules').innerHTML+="<div id='startActi' onclick='goAll12()'><h1>START</h1></div>";
$('#startActi').css('visibility','hidden');
changehand(1);
changehand(2);
insob12();
$('#objetivos').css('visibility','visible');
tiempito=time;
temp=setTimeout(function(){
ins12();
$('#alumbraobj').removeClass('bigEntrance');
$('#objetivos').css('visibility','hidden');
$('#instruccion').css('visibility','visible');
changehand(0);
changehand(3);
$('#alumbrains').addClass('bigEntrance');
/*var readIns=document.getElementById('instruyeme');
if(readIns)*/
audio1.play();	
},7000);
temp=setTimeout(function(){
$('#startActi').css('visibility','visible');
$('#instruccion').css('visibility','hidden');
$('#startActi').addClass('bigEntrance');
$('#startActi').css('opacity','1');
},time);
temp=setTimeout(function(){
$('#startActi').removeClass('bigEntrance');
$('#startActi').addClass('floating');
},time+2000);
}


function ins12(){
instruccion();
if(aux==0){
$('#objetivos').css('visibility','hidden');
$('#txt').css('display','inline-block');
if(tiempito<14000){tiempito=14000;}
aux2=1;
$('#instruccion').css('animation', 'pasadoaparece .5s linear');
$('#instruccion').css('visibility','visible');
clearTimeout(temporizador);
temporizador2=setTimeout(function(){ins12();},tiempito-7000);
aux=1;}
else
if(aux==1){
$('#instruccion').css('z-index','-1');
$('#instruccion').css('visibility','hidden');
aux=0;
$('#txt').css('display','none');
clearTimeout(temporizador2);
}
}


function insob12(){
objetivos();	
if(aux2==1){
$('#txt').css('display','inline-block');
$('#instruccion').css('visibility','hidden');
aux=0;
$('#objetivos').css('visibility','visible');
clearTimeout(temporizador2);
temporizador=setTimeout(function(){
$('#txt').css('display','none');
},7000);
aux2=0;
}
else
if(aux2==0){
$('#objetivos').css('visibility','hidden');
$('#txt').css('display','none');
aux2=1;
clearTimeout(temporizador);
}				
}


//-----------------------------------------------------------------------------------------------------------------------------------
