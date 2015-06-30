var ejwriting = new Array(24);
/*var ejspeaking = new Array(12);
var ejreading = new Array(12);
var ejlistening = new Array(12);*/
var activar = new Array(24);
var suplente = new Array(24);
var bart1=0;
var bart2=0;
/*var activar1 = new Array(12);
var activar2 = new Array(12);
var activar3 = new Array(12);*/
var respuestiña;
var contadorsiño=0;
var j;/*,m=1,s=0;*/
var audio;
var audio1;
var pausito;
var pausito1;
var audio3;
var pausito3;
var audio4;
var pausito4;

var instru=0;;
var contador=0;
var contador1=0;
var tiempo=0;
//var activarlistening = new Array(12);
var aux=0,aux2=1,end=0,cuentabien=0,cuentamal=0;
var temporizador,temporizador2;
cadVariables = location.search.substring(1,location.search.length);

//------------------------------

var cont=0;
var cont1=0;
var cont2=0;
var cont3=0;
var cont4=0;	
var m=0;
var tt=0;
var tt1=0;
var tt2=0;
var tt3=0;
var tt4=0;
var x;
var cuentabien=0;
var cuentamal=0;
var activar = [0,0,0,0,0];
var audio;
var audio1;
var pausito;
var mm=0;
var homero11=0;
var homero22=0;
var homero33=0;
var homero44=0;
var homero55=0;
var homero66=0;
var homero77=0;
var contador=0;
var contador1=0;
var contador2=0;
var contador3=0;
var contador4=0;
var cosiño=0;
var changos=0;

//------------------------------

//-------------------------------------------------------------------------------------------------------------------------------------
function habilidad(){

$('#continuar').css('display','inline');
var aleatorio = Math.round(Math.random()*24);


if((aleatorio ==7)||(aleatorio ==8)||(aleatorio ==9)||(aleatorio ==10)||(aleatorio ==11)){

$('#cuadroPreguntas').css('display','none');
$('#olas').css('margin-top','4%');
$('#olas').css('margin-bottom','6%');
}

if((aleatorio ==19)||(aleatorio ==20)||(aleatorio ==21)||(aleatorio ==22)||(aleatorio ==23)){
$('#input2').css('height','35px');
$('#cuadroPreguntas').css('margin-top','70px');
$('#cuadroPreguntas').css('margin-bottom','70px');
}
ejwriting[aleatorio]=1;

}
//-------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------
function objetivos(){
$('#objetivos').css('visi','0.6'); 
document.getElementById('obj').innerHTML='To evaluate the writing skills acquired during the use of this module.';
}
//-----------------------------------------------------------------------------------------------------------------------------------
function instruccion(){


if ((ejwriting[0]==1)||(ejwriting[1]==1)||(ejwriting[2]==1)||(ejwriting[3]==1)||(ejwriting[4]==1)||(ejwriting[5]==1)||(ejwriting[6]==1)){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "../../../audios/instrucciones/writing/ins1.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
document.getElementById('instruccion').innerHTML='<h5>Complet the sentences below.</h5>';
}

if ((ejwriting[7]==1)||(ejwriting[8]==1)||(ejwriting[9]==1)||(ejwriting[10]==1)||(ejwriting[11]==1)){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "../../../audios/instrucciones/writing/ins2.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
document.getElementById('ins').innerHTML='<h5>Drag the word, put them in the correct order.</h5>';
}

if ((ejwriting[12]==1)||(ejwriting[13]==1)||(ejwriting[14]==1)||(ejwriting[15]==1)||(ejwriting[16]==1)||(ejwriting[17]==1)||(ejwriting[18]==1)){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "../../../audios/instrucciones/writing/ins3.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
document.getElementById('instruccion').innerHTML='<h5>Write the sentence with the given words.</h5>';
}

if ((ejwriting[19]==1)||(ejwriting[20]==1)||(ejwriting[21]==1)||(ejwriting[22]==1)||(ejwriting[23]==1)){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "../../../audios/instrucciones/writing/ins4.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
document.getElementById('instruccion').innerHTML='<h5>Make a question for the given answer.</h5>';
}
}

//-------------------------------------------------------------------------------------------------------------------------------------
function redireccionar(){
window.location="../libro.html?"+cadVariables;
}
//-----------------------------------------------------------------------------------------------------------------------------------

function goAll12(){
$('#r1').css('opacity','1');


setTimeout(function(){document.getElementById('mom').className = "bigbang";},1000);
$('#blanco').css('opacity','1');
changehand(2);
$('#plane').addClass("muestrame");
$('aside').css('z-index','12');
var talk=document.getElementById('hablame');	
if(talk)
talk.play();
$('#startActi').css('display','none');
$('.sig').css('pointer-events','auto');
$('#continuar').css('pointer-events','none');
$('.prev').css('opacity','1');
$('.prev').css('pointer-events','auto');
//$('a').css('pointer-events','auto');
$('.fuckencio').css('display','block');
parrafos();
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
