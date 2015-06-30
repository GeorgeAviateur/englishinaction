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
var j;/*,m=1,s=0;*/
var audio;
var audio1;
var pausito;
var pausito1;
var instru=0;;
var contador=0;
var contador1=0;
var tiempo=0;
var activarlistening = new Array(12);
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

cadVariables='Writing';
/*if(cadVariables=='Speaking'){
$('#microfonito').css('display','inline');
$('#continuar11').css('display','inline');
var aleatorio = Math.round(Math.random()*11);
var aleatorio =1;
ejspeaking[aleatorio]=1;
//alert(aleatorio);
}*/

if(cadVariables=='Writing'){
//$('#input1').css('display','inline');
$('#continuar').css('display','inline');
var aleatorio = Math.round(Math.random()*35);
var aleatorio =23;
ejwriting[aleatorio]=1;
//alert(aleatorio);
}

/*if(cadVariables=='Reading'){
$('#cuadroPreguntas').css('width','90%');	
$('#cuadroPreguntas').css('margin','20px auto');
var aleatorio = Math.round(Math.random()*11);
$('#continuar22').css('display','inline');
var aleatorio =0;
ejreading[aleatorio]=1;
}

if(cadVariables=='Listening'){
$('#input1').css('display','inline');
$('#continuar33').css('display','inline');
var aleatorio = Math.round(Math.random()*11);
var aleatorio =0;
activarlistening[aleatorio]=1;
ejlistening[aleatorio]=1;
}*/



	//habilidades[2]=1;
		//if(habilidades[2]=1){
		//var aleatorio = Math.floor(Math.random() * (36 - 1 + 1)) + 36;
		//alert(aleatorio);
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
document.getElementById('obj').innerHTML='objetivos';
}
//-----------------------------------------------------------------------------------------------------------------------------------
function instruccion(){

if(contador>0){
audio.pause();
audio.currentTime = 0;
}

if (ejwriting[0]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Form the question to each answer.</h5>';
audio1=document.getElementById('i_evprw_9');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}

}/*else
if (ejwriting[1]==1){
tiempo=5000;
document.getElementById('ins').innerHTML='<h5>Answer the next question with all of the information.</h5>';
audio1=document.getElementById('i_evprw_10');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}

}else
if (ejwriting[2]==1){
tiempo=2000;
document.getElementById('ins').innerHTML='<h5>Translate the next sentence.</h5>';
audio1=document.getElementById('i_evprw_11');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}

}else
if (ejwriting[3]==1){
tiempo=2000;
document.getElementById('ins').innerHTML='<h5>Translate the next question</h5>';
audio1=document.getElementById('i_evprw_12');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}

}else
if (ejwriting[4]==1){
tiempo=3000;
document.getElementById('ins').innerHTML='<h5>Translate the next answer</h5>';
audio1=document.getElementById('i_evprw_13');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}

}else
if (ejwriting[5]==1){
tiempo=3000;
document.getElementById('ins').innerHTML='<h5>Unscramble the next sentence.</h5>';
audio1=document.getElementById('i_evprw_14');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}

}else
if (ejwriting[6]==1){
tiempo=3000;
document.getElementById('ins').innerHTML='<h5>Unscramble the next question.</h5>';
audio1=document.getElementById('i_evprw_15');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}

}else
if (ejwriting[7]==1){
tiempo=5000;
document.getElementById('ins').innerHTML='<h5>Find the mistake, click on it and correct it.</h5>';
audio1=document.getElementById('i_evprw_16');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}

}else
if(ejwriting[8]==1){
tiempo=2000;
document.getElementById('ins').innerHTML='<h5>Write what you heard.</h5>';
audio1=document.getElementById('i_evprw_17');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}

}else
if (ejwriting[9]==1){
tiempo=2000;
document.getElementById('instruccion').innerHTML='<h5>Write what you heard.</h5>';
audio1=document.getElementById('i_evprw_18');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}

}else
if (ejwriting[10]==1){
tiempo=2000;
document.getElementById('instruccion').innerHTML='<h5>Write what you heard.</h5>';
audio1=document.getElementById('i_evprw_19');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}else
if (ejwriting[11]==1){
tiempo=2000;
document.getElementById('instruccion').innerHTML='<h5>Write what you heard.</h5>';
audio1=document.getElementById('i_evprw_20');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}else
if (ejwriting[12]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Form the question to each answer.</h5>';
audio1=document.getElementById('i_evpw_9');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}else
if (ejwriting[13]==1){
tiempo=4500;
document.getElementById('instruccion').innerHTML='<h5>Answer the next question with all of the information.</h5>';
audio1=document.getElementById('i_evpw_10');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}else
if (ejwriting[14]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Translate the next sentence.</h5>';
audio1=document.getElementById('i_evpw_11');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}else
if (ejwriting[15]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Translate the next question.</h5>';
audio1=document.getElementById('i_evpw_12');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}else
if (ejwriting[16]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Translate the next answer.</h5>';
audio1=document.getElementById('i_evpw_13');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}else
if (ejwriting[17]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Unscramble the next sentence</h5>';
audio1=document.getElementById('i_evpw_14');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}else
if (ejwriting[18]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Unscramble the next question.</h5>';
audio1=document.getElementById('i_evpw_15');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}else
if (ejwriting[19]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Find the mistake, click on it and correct it.</h5>';
audio1=document.getElementById('i_evpw_16');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}else
if (ejwriting[20]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Write what you listen.</h5>';
audio1=document.getElementById('i_evpw_17');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}else
if (ejwriting[21]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Write what you listen.</h5>';
audio1=document.getElementById('i_evpw_18');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}else
if (ejwriting[22]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Write what you listen.</h5>';
audio1=document.getElementById('i_evpw_19');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}else
if (ejwriting[23]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Write what you listen.</h5>';
audio1=document.getElementById('i_evpw_20');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}else
if (ejwriting[24]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Form the question to each answer.</h5>';
audio1=document.getElementById('i_evfw_9');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}else
if (ejwriting[25]==1){
tiempo=5000;
document.getElementById('instruccion').innerHTML='<h5>Answer the next question with all of the information.</h5>';
audio1=document.getElementById('i_evfw_10');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}else
if (ejwriting[26]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Translate the next sentence.</h5>';
audio1=document.getElementById('i_evfw_11');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}
if (ejwriting[27]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Translate the next question.</h5>';
audio1=document.getElementById('i_evfw_12');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}else
if (ejwriting[28]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Translate the next answer.</h5>';
audio1=document.getElementById('i_evfw_13');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}else
if (ejwriting[29]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>unscramble the next sentence.</h5>';
audio1=document.getElementById('i_evfw_14');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}else
if (ejwriting[30]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>unscramble the next question.</h5>';
audio1=document.getElementById('i_evfw_15');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}else
if (ejwriting[31]==1){
tiempo=4000;
document.getElementById('instruccion').innerHTML='<h5>Find the mistake, click on it and correct it.</h5>';
audio1=document.getElementById('i_evfw_16');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}else
if (ejwriting[32]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Write what you heard.</h5>';
audio1=document.getElementById('i_evfw_17');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}else
if (ejwriting[33]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Write what you heard.</h5>';
audio1=document.getElementById('i_evfw_18');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}else
if (ejwriting[34]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Write what you heard.</h5>';
audio1=document.getElementById('i_evfw_19');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}else
if (ejwriting[35]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Write what you heard.</h5>';
audio1=document.getElementById('i_evfw_20');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}

//**********************************************************************************************************************
//**********************************************************************************************************************
//**********************************************************************************************************************
//**********************************************************************************************************************

if (ejspeaking[0]==1){
tiempo=2000;
document.getElementById('instruccion').innerHTML='<h5>Listen and repeat.</h5>';
audio1=document.getElementById('i_evprs_21');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}
if (ejspeaking[1]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and repeat.</h5>';
audio1=document.getElementById('i_evprs_22');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}
if (ejspeaking[2]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and repeat.</h5>';
audio1=document.getElementById('i_evprs_23');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}
if (ejspeaking[3]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and repeat.</h5>';
audio1=document.getElementById('i_evprs_24');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}
if (ejspeaking[4]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and repeat.</h5>';
audio1=document.getElementById('i_evps_21');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}
if (ejspeaking[5]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and repeat.</h5>';
audio1=document.getElementById('i_evps_22');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}
if (ejspeaking[6]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and repeat.</h5>';
audio1=document.getElementById('i_evps_23');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}
if (ejspeaking[7]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and repeat.</h5>';
audio1=document.getElementById('i_evps_24');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}


if (ejspeaking[8]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and repeat.</h5>';
audio1=document.getElementById('i_evfs_21');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}

if (ejspeaking[9]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and repeat.</h5>';
audio1=document.getElementById('i_evfs_22');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}
if (ejspeaking[10]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and repeat.</h5>';
audio1=document.getElementById('i_evfs_23');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}
if (ejspeaking[11]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and repeat.</h5>';
audio1=document.getElementById('i_evfs_24');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}

//**********************************************************************************************************************
//**********************************************************************************************************************
//**********************************************************************************************************************
//**********************************************************************************************************************

if (ejreading[0]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Read and answer the question</h5>';
audio1=document.getElementById('i_evprr_5');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}
if (ejreading[1]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Read and answer the question</h5>';
audio1=document.getElementById('i_evprr_6');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}
if (ejreading[2]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Read and answer the question</h5>';
audio1=document.getElementById('i_evprr_7');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}
if (ejreading[3]==1){
tiempo=4000;
document.getElementById('instruccion').innerHTML='<h5>Read the conversation and answer the question.</h5>';
audio1=document.getElementById('i_evprr_8');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}
if (ejreading[4]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Read and answer the question</h5>';
audio1=document.getElementById('i_evpr_5');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}
if (ejreading[5]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Read and answer the question</h5>';
audio1=document.getElementById('i_evpr_6');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}
if (ejreading[6]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Read and answer the question</h5>';
audio1=document.getElementById('i_evpr_7');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}
if (ejreading[7]==1){
tiempo=4000;
document.getElementById('instruccion').innerHTML='<h5>Read the conversation and answer the question.</h5>';
audio1=document.getElementById('i_evpr_8');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}





if (ejreading[8]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Read and answer the question</h5>';
audio1=document.getElementById('i_evfr_5');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}
if (ejreading[9]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Read and answer the question</h5>';
audio1=document.getElementById('i_evfr_6');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}
if (ejreading[10]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Read and answer the question</h5>';
audio1=document.getElementById('i_evfr_7');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}
if (ejreading[11]==1){
tiempo=4000;
document.getElementById('instruccion').innerHTML='<h5>Read the conversation and answer the question.</h5>';
audio1=document.getElementById('i_evfr_8');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}
//**********************************************************************************************************************
//**********************************************************************************************************************
//**********************************************************************************************************************
//**********************************************************************************************************************
if (ejlistening[0]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Write what you heard.</h5>';
audio1=document.getElementById('i_evprl_1');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}
if (ejlistening[1]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and answer the question</h5>';
audio1=document.getElementById('i_evprl_2');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}
if (ejlistening[2]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Write what you heard.</h5>';
audio1=document.getElementById('i_evprl_3');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}
if (ejlistening[3]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and answer the question</h5>';
audio1=document.getElementById('i_evprl_4');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}
if (ejlistening[4]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Write what you listen</h5>';
audio1=document.getElementById('i_evpl_1');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}
if (ejlistening[5]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and answer the question</h5>';
audio1=document.getElementById('i_evpl_2');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}
if (ejlistening[6]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Write what you heard.</h5>';
audio1=document.getElementById('i_evpl_3');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}
if (ejlistening[7]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and answer the question</h5>';
audio1=document.getElementById('i_evpl_4');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}
if (ejlistening[8]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Write what you heard.</h5>';
audio1=document.getElementById('i_evfl_1');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}
if (ejlistening[9]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and answer the question</h5>';
audio1=document.getElementById('i_evfl_2');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}
if (ejlistening[10]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Write what you heard.</h5>';
audio1=document.getElementById('i_evfl_3');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}
if (ejlistening[11]==1){
tiempo=3000;
document.getElementById('instruccion').innerHTML='<h5>Listen and answer the question</h5>';
audio1=document.getElementById('i_evfl_4');
pausito1 = document.getElementById("pause");
if (audio1.paused) {
audio1.play();
pausito1.textContent = "||";
contador1++;
} else {
audio1.pause();
pausito1.textContent = ">";
audio1.currentTime = 0;
}
}*/


}

//-------------------------------------------------------------------------------------------------------------------------------------

function redireccionar(){
	
window.location="libro.html?"+cadVariables;
}







/*function readme11(){
insob11();
ins11();
//document.getElementById('instruyeme').play();
$('#r1').css('opacity','0.2');
temp=setTimeout(function(){$('#r1').css('opacity','1');},tiempo);
}

function ins11(){
if(aux==0){
$('#objetivos').css('display','none');
instruccion();
aux2=1;
$('#instruccion').css('animation', 'pasadoaparece .5s linear');
$('#instruccion').css('display','inline-block');
clearTimeout(temporizador);
temporizador2=setTimeout(function(){ins11();},tiempo);
aux=1;}
else
if(aux==1){
$('#instruccion').css('display','none');
aux=0;
clearTimeout(temporizador2);
}
}

function insob11(){
if(aux2==1){
$('#instruccion').css('display','none');
objetivos();
aux=0;
$('#objetivos').css('animation', 'pasadoaparece .5s linear');
$('#objetivos').css('display','inline-block');
clearTimeout(temporizador2);
temporizador=setTimeout(function(){insob11();},tiempo);
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
}*/


//-----------------------------------------------------------------------------------------------------------------------------------

function readme11(time){
$('#r1').css('opacity','0.2');
$('#blanco').css('opacity','0.2');
$('#alumbraobj').addClass('bigEntrance');
changehand(1);
changehand(2);
insob11();
tiempito=time;
temp=setTimeout(function(){
$('#alumbraobj').removeClass('bigEntrance');
ins11();
changehand(0);
changehand(3);
$('#alumbrains').addClass('bigEntrance');
//document.getElementById('instruyeme').play();
},7000);
temp=setTimeout(function(){/*document.getElementById('hablame').play();*/$('#instruccion').css('visibility','hidden');},time);
temp=setTimeout(function(){
$('#r1').css('opacity','1');
$('#blanco').css('opacity','1');
changehand(2);
$('#plane').addClass("muestrame");
$('aside').css('z-index','12');
},time);
}

function ins11(){
instruccion();
if(aux==0){
$('#objetivos').css('visibility','hidden');
$('#r1').css('opacity','0.2');
$('#blanco').css('opacity','0.2');
$('#txt').css('display','inline-block');
aux2=1;
$('#instruccion').css('animation', 'pasadoaparece .5s linear');
$('#instruccion').css('visibility','visible');
clearTimeout(temporizador);
temporizador2=setTimeout(function(){/*ins11();*/},tiempito-7000);
aux=1;}
else
if(aux==1){
$('#instruccion').css('z-index','-1');
$('#instruccion').css('visibility','hidden');
aux=0;
$('#r1').css('opacity','1');
$('#blanco').css('opacity','1');
$('#txt').css('display','none');
clearTimeout(temporizador2);
}
}

function insob11(){
objetivos();
if(aux2==1){
$('#txt').css('display','inline-block');
$('#r1').css('opacity','0.2');
$('#blanco').css('opacity','0.2');
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
$('#r1').css('opacity','1');
$('#blanco').css('opacity','1');
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

//-----------------------------------------------------------------------------------------------------------------------------------
/*
function inic11(){
//ins11();
$('#blanco').css('opacity','0.2');
setTimeout(function(){beable11();},tiempo);
}
function beable11(){
$('#reloj figure').css('color','#025949');
$('#reloj figure').css('left','30%');
$('#reloj figure').css('top','50%');
$('#stopWatch').css('opacity','0.9');
$('#blanco').css('opacity','1');
reloj11();
}

function reloj11(){
if(m<10)
document.getElementById('cuenta').innerHTML="0"+m;
else
document.getElementById('cuenta').innerHTML=m;
if(s<10)
document.getElementById('cuenta').innerHTML+=":0"+s;
else
document.getElementById('cuenta').innerHTML+=":"+s;
if(m==0&&s==0){
//document.getElementById('continuar').onclick(); 
//document.getElementById('continuar11').onclick(); 
//document.getElementById('continuar22').onclick(); 
//document.getElementById('continuar33').onclick(); 
revisar();
}

if(s==0){
m--; 
s=60;
}

if(m==1){
$('#reloj').css('animation','parpadea 1s linear');
$('#reloj figure').css('color','#ff8540');
}

if(m==0){
$('#reloj figure').css('color','#fc484c');
$('#reloj figure').css('font-size','1.0em');
	
if(s>10)
$('#reloj figure').css('left','-155%');
else
$('#reloj figure').css('left','-155%');
$('#reloj figure').css('top','35%');
if(s>20)
$('#reloj').css('animation','parpadea 1s linear infinite');
else
$('#reloj').css('animation','parpadea .5s linear infinite');
document.getElementById('cuenta').innerHTML=s;
}
s--;
setTimeout(function(){reloj11();},1000);
}*/

//-----------------------------------------------------------------------------------------------------------------------------------






