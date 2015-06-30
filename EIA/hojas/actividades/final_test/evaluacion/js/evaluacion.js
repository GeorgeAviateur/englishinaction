var ejwriting = new Array(32);
var ejspeaking = new Array(12);
var ejreading = new Array(12);
var ejlistening = new Array(12);
var activar = new Array(32);
var activar1 = new Array(12);
var activar2 = new Array(12);
var activar3 = new Array(12);
var respuestiña;
var contadorsiño=0;
var j,m=1,s=0;
var audio;
var audio1;
var audio3;
var audio4;
var pausito;
var pausito1;
var pausito3;
var pausito4;
var nito1=0;
var nito2=0;
var instru=0;;
var contador=0;
var contador1=0;
var suplente1 = 0;
var suplente2 = 0;
var suplente3 = 0;
//var tiempo=0;
//var juju=0;
var tucha=0;
var otratucha=0;
var activarlistening = new Array(12);
var aux=0,aux2=1,end=0,cuentabien=0,cuentamal=0;
var temporizador,temporizador2;
cadVariables2 = location.search.substring(1,location.search.length);
//-------------------------------------------------------------------------------------------------------------------------------------
function habilidad(){

//cadVariables2='Writing';
//$('#read').css('display','none');
//*********************************************
if(cadVariables2=='Speaking'){
//setTimeout(function(){document.getElementById('mom11').className = "bigbang";},1000);
$('#mic').css('display','block');
$('#information').css('display','block');

$('#blanco').css('background','none');
$('#blanco').css('box-shadow','none');
$('#cuadroPreguntas').css('display','none');

$('#start_img').css('display','inline');
$('#continuar11').css('display','inline');
$('#cuadroPreguntas').css('margin-top','5%');
$('#cuadroPreguntas').css('margin-bottom','5%');
var aleatorio = Math.round(Math.random()*11);
//var aleatorio =0;
ejspeaking[aleatorio]=1;
}

//*********************************************

if(cadVariables2=='Writing'){
//setTimeout(function(){document.getElementById('mom').className = "bigbang";},1000);
$('#input1').css('display','inline');
$('#continuar').css('display','inline');
var aleatorio = Math.round(Math.random()*35);
//var aleatorio =13;
if((aleatorio==13)||(aleatorio==25)){
$('#cuadroPreguntas').css('margin-top','2%');
$('#input1').css('height','30px');
$('#cuadroPreguntas').css('margin-bottom','5px');	
}
else{
if((aleatorio!=13)||(aleatorio!=25)){
$('#cuadroPreguntas').css('margin-top','6%');
$('#cuadroPreguntas').css('margin-bottom','6%');
}
}
ejwriting[aleatorio]=1;
}

//*********************************************

if(cadVariables2=='Reading'){
//setTimeout(function(){document.getElementById('leer').className = "bigbang";},1000);
$('#reproducir0').css('display','none');
$('#perendengues').css('display','none');
$('#cuadroPreguntas').css('width','90%');	
var aleatorio = Math.round(Math.random()*11);
//$('#continuar22').css('display','inline');
$('#read').css('display','inline');
//var aleatorio =11;
if((aleatorio==3)||(aleatorio==4)||(aleatorio==5)||(aleatorio==6)||(aleatorio==7)||(aleatorio==8)||(aleatorio==11)){
}else
if((aleatorio!=3)||(aleatorio!=4)||(aleatorio!=5)||(aleatorio!=6)||(aleatorio!=7)||(aleatorio!=8)||(aleatorio!=11)){
$('#cuadroPreguntas').css('margin','20px auto');
$('#cuadroPreguntas').css('margin-top','6%');
$('#cuadroPreguntas').css('margin-bottom','6%');
}
ejreading[aleatorio]=1;
}

//*********************************************

if(cadVariables2=='Listening'){
//setTimeout(function(){document.getElementById('mom33').className = "bigbang";},1000);
$('#cuadroPreguntas').css('margin-top','6%');
$('#cuadroPreguntas').css('margin-bottom','6%');
$('#input1').css('display','inline');
$('#continuar33').css('display','inline');
var aleatorio = Math.round(Math.random()*11);
//var aleatorio =1;
activarlistening[aleatorio]=1;
ejlistening[aleatorio]=1;
}

//*********************************************

	//habilidades[2]=1;
		//if(habilidades[2]=1){
		//var aleatorio = Math.floor(Math.random() * (36 - 1 + 1)) + 36;
		//
	//}
/*var capa = document.getElementById("header");
var div1 = document.createElement("div");
div1.innerHTML = '';
capa.appendChild(div1);
var imagen = document.createElement("img"); 
imagen.setAttribute("src", "imagenes/avisos/sam.png"); 
var div = document.getElementById("capa"); 
div1.appendChild(imagen); */
}
//-------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------
function objetivos(){
$('#objetivos').css('visi','0.6'); 
document.getElementById('obj').innerHTML='To assess the learning level reached by the user of the resource, through a series of exercises that the user must complete.';
}
//-----------------------------------------------------------------------------------------------------------------------------------
function instruccion(){

/*if(contador>0){
audio.pause();
audio.currentTime = 0;
}*/

if ((ejwriting[0]==1)||(ejwriting[12]==1)||(ejwriting[24]==1)){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_9.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Form the question to each answer.</h5>';
}

if ((ejwriting[1]==1)||(ejwriting[13]==1)||(ejwriting[25]==1)){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_10.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=5000;
document.getElementById('ins').innerHTML='<h5>Answer the next question with all of the information.</h5>';
}


if ((ejwriting[2]==1)||(ejwriting[14]==1)||(ejwriting[26]==1)){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_11.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=2000;
document.getElementById('ins').innerHTML='<h5>Translate the next sentence.</h5>';
}


if ((ejwriting[3]==1)||(ejwriting[15]==1)||(ejwriting[27]==1)){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_12.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=2000;
document.getElementById('ins').innerHTML='<h5>Translate the next question.</h5>';
}


if ((ejwriting[4]==1)||(ejwriting[16]==1)||(ejwriting[28]==1)){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_13.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('ins').innerHTML='<h5>Translate the next answer.</h5>';
}


if ((ejwriting[5]==1)||(ejwriting[17]==1)||(ejwriting[29]==1)){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_14.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('ins').innerHTML='<h5>Unscramble the next sentence.</h5>';
}


if ((ejwriting[6]==1)||(ejwriting[18]==1)||(ejwriting[30]==1)){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_15.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('ins').innerHTML='<h5>Unscramble the next question.</h5>';
}


if ((ejwriting[7]==1)||(ejwriting[19]==1)||(ejwriting[31]==1)){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_16.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=5000;
document.getElementById('ins').innerHTML='<h5>Find the mistake, click on it and correct it.</h5>';
}


if((ejwriting[8]==1)||(ejwriting[9]==1)||(ejwriting[10]==1)||(ejwriting[11]==1)||(ejwriting[20]==1)||(ejwriting[21]==1)||(ejwriting[22]==1)||(ejwriting[23]==1)||(ejwriting[32]==1)||(ejwriting[33]==1)||(ejwriting[34]==1)||(ejwriting[35]==1)){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_17.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=2000;
document.getElementById('ins').innerHTML='<h5>Write what you heard.</h5>';
}


/*if (ejwriting[9]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_17.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=2000;
document.getElementById('instruccion').innerHTML='<h5>Write what you heard.</h5>';
}*/


/*if (ejwriting[10]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_17.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=2000;
document.getElementById('instruccion').innerHTML='<h5>Write what you heard.</h5>';
}*/


/*if (ejwriting[11]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_17.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=2000;
document.getElementById('instruccion').innerHTML='<h5>Write what you heard.</h5>';
}*/

/*if (ejwriting[12]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_9.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Form the question to each answer.</h5>';
}*/

/*if (ejwriting[13]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_10.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=4500;
document.getElementById('instruccion').innerHTML='<h5>Answer the next question with all of the information.</h5>';
}*/

/*if (ejwriting[14]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_11.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Translate the next sentence.</h5>';
}*/


/*if (ejwriting[15]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_12.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Translate the next question.</h5>';
}*/


/*if (ejwriting[16]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_13.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Translate the next answer.</h5>';
}*/


/*if (ejwriting[17]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_14.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Unscramble the next sentence.</h5>';
}*/


/*if (ejwriting[18]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_15.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Unscramble the next question.</h5>';
}*/


/*if (ejwriting[19]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_16.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Find the mistake, click on it and correct it.</h5>';
}*/


/*if (ejwriting[20]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_17.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Write what you heard.</h5>';
}*/


/*if (ejwriting[21]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_17.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Write what you heard.</h5>';
}*/


/*if (ejwriting[22]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_17.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Write what you heard.</h5>';
}*/


/*if (ejwriting[23]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_17.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Write what you heard.</h5>';
}*/


/*if (ejwriting[24]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_9.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Form the question to each answer.</h5>';
}*/


/*if (ejwriting[25]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_10.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=5000;
document.getElementById('instruccion').innerHTML='<h5>Answer the next question with all of the information.</h5>';
}*/


/*if (ejwriting[26]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_11.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Translate the next sentence.</h5>';
}*/


/*if (ejwriting[27]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_12.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Translate the next question.</h5>';
}*/


/*if (ejwriting[28]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_13.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Translate the next answer.</h5>';
}*/


/*if (ejwriting[29]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_14.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Unscramble the next sentence.</h5>';
}*/


/*if (ejwriting[30]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_15.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Unscramble the next question.</h5>';
}*/


/*if (ejwriting[31]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_16.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=4000;
document.getElementById('instruccion').innerHTML='<h5>Find the mistake, click on it and correct it.</h5>';
}*/


/*if (ejwriting[32]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_17.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Write what you heard.</h5>';
}*/


/*if (ejwriting[33]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_17.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Write what you heard.</h5>';
}*/


/*if (ejwriting[34]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_17.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Write what you heard.</h5>';
}


if (ejwriting[35]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprw_17.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Write what you heard.</h5>';
}*/

//**********************************************************************************************************************
//**********************************************************************************************************************
//**********************************************************************************************************************
//**********************************************************************************************************************

if ((ejspeaking[0]==1)||(ejspeaking[1]==1)||(ejspeaking[2]==1)||(ejspeaking[3]==1)||(ejspeaking[4]==1)||(ejspeaking[5]==1)||(ejspeaking[6]==1)||(ejspeaking[7]==1)||(ejspeaking[8]==1)||(ejspeaking[9]==1)||(ejspeaking[10]==1)||(ejspeaking[11]==1)){

audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evps_21.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=2000;
document.getElementById('instruccion').innerHTML='<h5>Listen and repeat.</h5>';
}

/*if (ejspeaking[1]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evps_21.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and repeat.</h5>';
}

if (ejspeaking[2]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evps_21.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and repeat.</h5>';
}

if (ejspeaking[3]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evps_21.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and repeat.</h5>';
}

if (ejspeaking[4]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evps_21.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and repeat.</h5>';
}

if (ejspeaking[5]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evps_21.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and repeat.</h5>';
}


if (ejspeaking[6]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evps_21.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and repeat.</h5>';
}


if (ejspeaking[7]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evps_21.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and repeat.</h5>';
}


if (ejspeaking[8]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evps_21.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and repeat.</h5>';
}


if (ejspeaking[9]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evps_21.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and repeat.</h5>';
}


if (ejspeaking[10]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evps_21.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and repeat.</h5>';
}

if (ejspeaking[11]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evps_21.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and repeat.</h5>';
}*/

//**********************************************************************************************************************
//**********************************************************************************************************************
//**********************************************************************************************************************
//**********************************************************************************************************************

if ((ejreading[0]==1)||(ejreading[1]==1)||(ejreading[2]==1)||(ejreading[4]==1)||(ejreading[5]==1)||(ejreading[6]==1)||(ejreading[8]==1)||(ejreading[9]==1)||(ejreading[10]==1)){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprr_5.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Read and answer the question.</h5>';
}

/*if (ejreading[1]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprr_5.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Read and answer the question.</h5>';
}*/

/*if (ejreading[2]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprr_5.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Read and answer the question.</h5>';
}*/

if ((ejreading[3]==1)||(ejreading[7]==1)||(ejreading[11]==1)){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprr_8.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=4000;
document.getElementById('instruccion').innerHTML='<h5>Read the conversation and answer the question.</h5>';
}

/*if (ejreading[4]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprr_5.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Read and answer the question.</h5>';
}*/

/*if (ejreading[5]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprr_5.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Read and answer the question.</h5>';
}*/

/*if (ejreading[6]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprr_5.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Read and answer the question.</h5>';
}*/

/*if (ejreading[7]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprr_8.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=4000;
document.getElementById('instruccion').innerHTML='<h5>Read the conversation and answer the question.</h5>';
}*/

/*if (ejreading[8]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprr_5.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Read and answer the question.</h5>';
}*/

/*if (ejreading[9]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprr_5.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Read and answer the question.</h5>';
}*/

/*if (ejreading[10]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprr_5.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Read and answer the question.</h5>';
}*/

/*if (ejreading[11]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprr_8.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=4000;
document.getElementById('instruccion').innerHTML='<h5>Read the conversation and answer the question.</h5>';
}*/

//**********************************************************************************************************************
//**********************************************************************************************************************
//**********************************************************************************************************************
//**********************************************************************************************************************
if ((ejlistening[0]==1)||(ejlistening[2]==1)||(ejlistening[4]==1)||(ejlistening[6]==1)||(ejlistening[8]==1)||(ejlistening[10]==1)){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprl_1.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
document.getElementById('instruccion').innerHTML='<h5>Write what you heard.</h5>';
}

if ((ejlistening[1]==1)||(ejlistening[3]==1)||(ejlistening[5]==1)||(ejlistening[7]==1)||(ejlistening[9]==1)||(ejlistening[11]==1)){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprl_2.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and answer the question.</h5>';
}

/*if (ejlistening[2]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprl_1.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Write what you heard.</h5>';
}*/

/*if (ejlistening[3]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprl_2.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and answer the question.</h5>';
}*/

/*if (ejlistening[4]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprl_1.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Write what you heard.</h5>';
}*/

/*if (ejlistening[5]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprl_2.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and answer the question.</h5>';
}*/

/*if (ejlistening[6]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprl_1.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Write what you heard.</h5>';
}*/

/*if (ejlistening[7]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprl_2.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and answer the question.</h5>';
}*/

/*if (ejlistening[8]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprl_1.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Write what you heard.</h5>';
}*/

/*if (ejlistening[9]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprl_2.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and answer the question.</h5>';
}*/

/*if (ejlistening[10]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprl_1.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Write what you heard.</h5>';
}*/

/*if (ejlistening[11]==1){
audio1 = document.createElement("audio");
audio1.setAttribute("id", "instruyeme"); 
audio1.setAttribute("controls", "controls");
var source = document.createElement("source");
source.setAttribute("src", "audios/i_evprl_2.mp3"); 
source.setAttribute("type", "audio/mpeg");
audio1.appendChild(source);
//tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and answer the question.</h5>';
}*/
}

//-------------------------------------------------------------------------------------------------------------------------------------

function redireccionar(){
window.location="../ruleta/ruleta.html?"+cadVariables;
}

//-----------------------------------------------------------------------------------------------------------------------------------

function goAll11(){
parrafos();
$('#r1').css('opacity','1');

if(cadVariables2=='Writing'){
setTimeout(function(){document.getElementById('mom').className = "bigbang";},1000);
}
if(cadVariables2=='Reading'){
setTimeout(function(){document.getElementById('leer').className = "bigbang";},1000);
}
if(cadVariables2=='Listening'){
setTimeout(function(){document.getElementById('mom33').className = "bigbang";},1000);
}
$('#blanco').css('opacity','1');
$('#blanco').css('pointer-events','auto');
changehand(2);
$('#plane').addClass("muestrame");
$('aside').css('z-index','12');
var talk=document.getElementById('hablame');	
if(talk)
talk.play();
$('#startActi').css('display','none');
$('.sig').css('pointer-events','auto');
$('#read').css('pointer-events','none');
$('.prev').css('opacity','1');
$('.prev').css('pointer-events','auto');
//$('a').css('pointer-events','auto');
$('.fuckencio').css('display','block');

}

function readme11(time){
$('#r1').css('opacity','0.2');
$('#blanco').css('opacity','0.2');
$('.fuckencio').css('display','none');
$('.sig').css('pointer-events','none');
$('#blanco').css('pointer-events','none');
$('.sig').css('opacity','0.2');
$('#continuar1').css('opacity','1');
$('.prev').css('opacity','0.2');
$('.prev').css('pointer-events','none');
//$('a').css('pointer-events','none');
$('#alumbraobj').addClass('bigEntrance');
//$('#continuar').css('display','none');
document.getElementById('georgeRules').innerHTML+="<div id='startActi' onclick='goAll11()'><h1>START</h1></div>";
$('#startActi').css('visibility','hidden');
changehand(1);
changehand(2);
insob11();
$('#objetivos').css('visibility','visible');
tiempito=time;
temp=setTimeout(function(){
ins11();
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


function ins11(){
instruccion();
if(aux==0){
$('#objetivos').css('visibility','hidden');
$('#txt').css('display','inline-block');
if(tiempito<14000){tiempito=14000;}
aux2=1;
$('#instruccion').css('animation', 'pasadoaparece .5s linear');
$('#instruccion').css('visibility','visible');
clearTimeout(temporizador);
temporizador2=setTimeout(function(){ins11();},tiempito-7000);
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


function insob11(){
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

//------------------------------------------------------------------------------------------------------------------
function reading2(){
$('#continuar1').css('opacity','1');
$('#jorge').css('display','none');
leer.classList.remove('bigbang');
document.getElementById('mom22').className = "bigbang";
$('#continuar22').css('display','inline');
$('#read').css('display','none');
$('#continuar22').css('opacity','1');
$('#reproducir0').css('display','inline-block');
$('#perendengues').css('display','inline-block');
$("#countdown").countdown360({}).start();
$('#input1').css('display','inline');
if (ejreading[0]==1){
document.getElementById('parrafiño1').innerHTML='Does he like pop music?';	
}
if (ejreading[1]==1){
document.getElementById('parrafiño1').innerHTML='What do they like to do on their free time?';	
}
if (ejreading[2]==1){
document.getElementById('parrafiño1').innerHTML='What does she like to do on weekends?';	
}
if (ejreading[3]==1){
document.getElementById('parrafiño1').innerHTML='What kind of movies does Jhon like?';	
$('#cuadroPreguntas').css('margin-top','6%');
$('#cuadroPreguntas').css('margin-bottom','6%');
}
if (ejreading[4]==1){
document.getElementById('parrafiño1').innerHTML='What did Isabel eat while watching the movie?';
$('#cuadroPreguntas').css('margin-top','6%');
$('#cuadroPreguntas').css('margin-bottom','6%');	
}
if (ejreading[5]==1){
document.getElementById('parrafiño1').innerHTML='What places did they visit in Paris?';	
$('#cuadroPreguntas').css('margin-top','6%');
$('#cuadroPreguntas').css('margin-bottom','6%');
}
if (ejreading[6]==1){
document.getElementById('parrafiño1').innerHTML='Where did Emma spend her last vacation?';
$('#cuadroPreguntas').css('margin-top','6%');
$('#cuadroPreguntas').css('margin-bottom','6%');	
}
if (ejreading[7]==1){
document.getElementById('parrafiño1').innerHTML='Where was Leo yesterday night?';	
$('#cuadroPreguntas').css('margin-top','6%');
$('#cuadroPreguntas').css('margin-bottom','6%');
}
if (ejreading[8]==1){
document.getElementById('parrafiño1').innerHTML='What will  robots do in the future?';
$('#cuadroPreguntas').css('margin-top','6%');
$('#cuadroPreguntas').css('margin-bottom','6%');	
}
if (ejreading[9]==1){
document.getElementById('parrafiño1').innerHTML='What will they do after checking in at the hotel?';	
}
if (ejreading[10]==1){
document.getElementById('parrafiño1').innerHTML='Where will they go in the afternoon?';	
}
if (ejreading[11]==1){
document.getElementById('parrafiño1').innerHTML='What are they going to do on Saturday night?';	
$('#cuadroPreguntas').css('margin-top','6%');
$('#cuadroPreguntas').css('margin-bottom','6%');
}
}



//-----------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------
//function redireccionar(){
//window.location="libro.html?"+cadVariables;
//}
//-----------------------------------------------------------------------------------------------------------------------------------
