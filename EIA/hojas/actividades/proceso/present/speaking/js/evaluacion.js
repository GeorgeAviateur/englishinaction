var suplente = new Array(10);
var ejspeaking = new Array(24);
var activar = new Array(24);
var contadorsiño=0;
var audio;
var audio1;
var audio2;
var audio3;
var audio4;
var audio5;
var audio6;
var audio7;
var audio8;
var audio10;
var source;
var pausito;
var pausito1;
var pausito2;
var pausito3;
var pausito4;
var pausito5;
var pausito6;
var pausito7;
var pausito8;
var pausito10;
var contador=0;
var contador1=0;
var bart1=0;
var tucha=0;
var otratucha=0;
var aux=0,aux2=1,end=0,cuentabien=0,cuentamal=0;
var temporizador,temporizador2;
cadVariables2 = location.search.substring(1,location.search.length);

//-------------------------------------------------------------------------------------------------------------------------------------
function habilidad(){
$('#continuar11').css('display','inline');
$('#cuadroPreguntas').css('margin-top','30px');
$('#cuadroPreguntas').css('margin-bottom','5px');
var aleatorio = Math.round(Math.random()*23);
//var aleatorio =19;
ejspeaking[aleatorio]=1;

if((aleatorio==9)||(aleatorio==10)||(aleatorio==11)||(aleatorio==12)||(aleatorio==13)||(aleatorio==14)||(aleatorio==15)||(aleatorio==16)||(aleatorio==17)||(aleatorio==18)){
$('#cuadroPreguntas').css('margin-top','15px');
$('#cuadroPreguntas').css('margin-bottom','5px');
}

if((aleatorio==19)||(aleatorio==20)||(aleatorio==21)||(aleatorio==22)||(aleatorio==23)){
$('#cuadroPreguntas').css('margin-top','70px');
$('#cuadroPreguntas').css('margin-bottom','70px');	
}
}
//-------------------------------------------------------------------------------------------------------------------------------------
function objetivos(){
$('#objetivos').css('visi','0.6'); 
}
//-----------------------------------------------------------------------------------------------------------------------------------
function instruccion(){
if (ejspeaking[0]==1||ejspeaking[1]==1||ejspeaking[2]==1||ejspeaking[3]==1||ejspeaking[4]==1||ejspeaking[5]==1||ejspeaking[6]==1||ejspeaking[7]==1||ejspeaking[8]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");		
source.setAttribute("src", "../../../../actividades/audios/instrucciones/speaking/ins1.mp3");
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
document.getElementById('instruccion').innerHTML='<h5>Listen to the vocabulary carefully and repeat. Click on the microphone icon to pronounce the activity that appears in each picture.</h5>';
}

if (ejspeaking[9]==1||ejspeaking[10]==1||ejspeaking[11]==1||ejspeaking[12]==1||ejspeaking[13]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");		
source.setAttribute("src", "../../../../actividades/audios/instrucciones/speaking/ins2.mp3");
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
document.getElementById('instruccion').innerHTML="<h5>Look at the picture and say what the people like or dislike. Use the words like, love, hate, doesn't like and the vocabulary given.</h5>";
}

if (ejspeaking[14]==1||ejspeaking[15]==1||ejspeaking[16]==1||ejspeaking[17]==1||ejspeaking[18]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");		
source.setAttribute("src", "../../../../actividades/audios/instrucciones/speaking/ins3.mp3");
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
document.getElementById('instruccion').innerHTML="<h5>What do you like? What don't you like? Use the vocabulary provided to say what you like / don't like / hate or love in order to design your own sentence.</h5>";
}

if (ejspeaking[19]==1||ejspeaking[20]==1||ejspeaking[21]==1||ejspeaking[22]==1||ejspeaking[23]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");		
source.setAttribute("src", "../../../../actividades/audios/instrucciones/speaking/ins4.mp3");
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
document.getElementById('instruccion').innerHTML="<h5>Listen to a person answering a question about likes and dislikes. Design the appropriate question for each situation, using the given vocabulary.</h5>";
}
}

//-----------------------------------------------------------------------------------------------------------------------------------
function red(){
if (ejspeaking[0]==1||ejspeaking[1]==1||ejspeaking[2]==1||ejspeaking[3]==1||ejspeaking[4]==1||ejspeaking[5]==1||ejspeaking[6]==1||ejspeaking[7]==1||ejspeaking[8]==1){
readme12(15000);
}
if (ejspeaking[9]==1||ejspeaking[10]==1||ejspeaking[11]==1||ejspeaking[12]==1||ejspeaking[13]==1){
readme12(17600);
}
if (ejspeaking[14]==1||ejspeaking[15]==1||ejspeaking[16]==1||ejspeaking[17]==1||ejspeaking[18]==1){
readme12(19000);
}
if (ejspeaking[19]==1||ejspeaking[20]==1||ejspeaking[21]==1||ejspeaking[22]==1||ejspeaking[23]==1){
readme12(16000);
}
}


//-------------------------------------------------------------------------------------------------------------------------------------
function redireccionar(){
window.location="../../libro.html?"+cadVariables;
}
//-----------------------------------------------------------------------------------------------------------------------------------

function goAll12(){
parrafos();
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
$('#continuar11').css('pointer-events','none');
$('.prev').css('opacity','1');
$('.prev').css('pointer-events','auto');
$('.fuckencio').css('display','block');
}

function readme12(time){
$('#r1').css('opacity','0.2');
$('#blanco').css('opacity','0.2');
$('.fuckencio').css('display','none');
$('.sig').css('pointer-events','none');
$('.sig').css('opacity','0.2');
$('#continuar1').css('opacity','1');
$('.prev').css('opacity','0.2');
$('.prev').css('pointer-events','none');
$('#alumbraobj').addClass('bigEntrance');
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
