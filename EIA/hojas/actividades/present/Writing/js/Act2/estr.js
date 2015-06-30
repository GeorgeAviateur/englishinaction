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
//------------------------------------------------------------------
function activaaudio(bo){
if((activar[0] == 1)&&(more==0)){
audio=document.getElementById('a1');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce").css('display','inline');
$("#pause").css('display','none');
mm++;
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
mm++;
}
if (contador==1){
$('#perendengues1').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues1').css('pointer-events','none'); 
}
if (contador==2){
$('#perendengues1').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues1').css('pointer-events','none'); 
}
if (contador==3){
$('#perendengues1').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues1').css('pointer-events','none'); 
$("#reproduce").css('opacity','0.4');
$('#reproduce').css('pointer-events','none');
}
}

if((activar[1] == 1)&&(more==1)){
audio=document.getElementById('a2');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce1").css('display','inline');
$("#pause").css('display','none');
mm++;
contador1++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce1").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
mm++;
}
if (contador1==1){
$('#perendengues2').css('pointer-events','auto'); 
document.getElementById("primero1").checked = true;
$('#perendengues2').css('pointer-events','none'); 
}
if (contador1==2){
$('#perendengues2').css('pointer-events','auto'); 
document.getElementById("segundo1").checked = true;
$('#perendengues2').css('pointer-events','none'); 
}
if (contador1==3){
$('#perendengues2').css('pointer-events','auto'); 
document.getElementById("tercero1").checked = true;
$('#perendengues2').css('pointer-events','none'); 
$("#reproduce1").css('opacity','0.4');
$('#reproduce1').css('pointer-events','none');
}
}

if((activar[2] == 1)&&(more==2)){
audio=document.getElementById('a3');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce2").css('display','inline');
$("#pause").css('display','none');
mm++;
contador2++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce2").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
mm++;
}
if (contador2==1){
$('#perendengues3').css('pointer-events','auto'); 
document.getElementById("primero2").checked = true;
$('#perendengues3').css('pointer-events','none'); 
}
if (contador2==2){
$('#perendengues3').css('pointer-events','auto'); 
document.getElementById("segundo2").checked = true;
$('#perendengues3').css('pointer-events','none'); 
}
if (contador2==3){
$('#perendengues3').css('pointer-events','auto'); 
document.getElementById("tercero2").checked = true;
$('#perendengues3').css('pointer-events','none'); 
$("#reproduce2").css('opacity','0.4');
$('#reproduce2').css('pointer-events','none');
}
}

if((activar[3] == 1)&&(more==3)){
audio=document.getElementById('a4');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce3").css('display','inline');
$("#pause").css('display','none');
mm++;
contador3++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce3").css('display','none');
$("#pause").css('display','inline');
audio.currentTime = 0; 
mm++;
}
if (contador3==1){
$('#perendengues4').css('pointer-events','auto'); 
document.getElementById("primero3").checked = true;
$('#perendengues4').css('pointer-events','none'); 
}
if (contador3==2){
$('#perendengues4').css('pointer-events','auto'); 
document.getElementById("segundo3").checked = true;
$('#perendengues4').css('pointer-events','none'); 
}
if (contador3==3){
$('#perendengues4').css('pointer-events','auto'); 
document.getElementById("tercero3").checked = true;
$('#perendengues4').css('pointer-events','none'); 
$("#reproduce3").css('opacity','0.4');
$('#reproduce3').css('pointer-events','none');
}
}

if((activar[4] == 1)&&((more==4)||(more==-1))){
audio=document.getElementById('a5');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce4").css('display','inline');
$("#pause").css('display','none');
mm++;
contador4++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce4").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
mm++;
}
if (contador4==1){
$('#perendengues5').css('pointer-events','auto'); 
document.getElementById("primero4").checked = true;
$('#perendengues5').css('pointer-events','none'); 
}
if (contador4==2){
$('#perendengues5').css('pointer-events','auto'); 
document.getElementById("segundo4").checked = true;
$('#perendengues5').css('pointer-events','none'); 
}
if (contador4==3){
$('#perendengues5').css('pointer-events','auto'); 
document.getElementById("tercero4").checked = true;
$('#perendengues5').css('pointer-events','none'); 
$("#reproduce4").css('opacity','0.4');
$('#reproduce4').css('pointer-events','none');
}
}

}
//-------------------------------------------------------------------
function capturar(){
var aux =0;
var aux1 =0;	
cont++;
var first_p =$("#con span").index($("#first"));
if(first_p==1){
document.getElementById("first").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux++;
}
else{
document.getElementById("first").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux1++;
}
//---------------------
first_p =$("#con span").index($("#second"));
if(first_p==3){
document.getElementById("second").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux++;
}
else{
document.getElementById("second").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux1++;
}
//----------------
first_p =$("#con span").index($("#third"));
if(first_p==4){
document.getElementById("third").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux++;
}
else{
document.getElementById("third").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux1++;
}
//----------------
var first_p =$("#con span").index($("#zero"));
if(first_p==5){
document.getElementById("zero").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux++;
}
else{
document.getElementById("zero").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux1++;
}
//---------------------
first_p =$("#con span").index($("#fourth"));
if(first_p==2){
document.getElementById("fourth").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux++;
}
else{
document.getElementById("fourth").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux1++;
}
//----------------
first_p =$("#con span").index($("#fifth"));
if(first_p==0){
document.getElementById("fifth").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux++;
}
else{
document.getElementById("fifth").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux1++;
}
//----------------
if (aux==6) {
document.getElementById('bien').play();
$("#button1").css('opacity','0.6');
$('#button1').css('pointer-events','none');
bigbang11.classList.remove('bigbang');

$("#myul").css('opacity','0.6');
$("#con").css('opacity','0.6');
$('.emo').css('pointer-events','none');
cont=0;
tt=3;
m++;
homero11=1;
cuentabien++;
setTimeout(function(){$('#reproduce').css('opacity','0.9');activar[0] = 1;$('#reproduce').css('pointer-events','auto');},1000);
}else
if ((aux1<=6) &&(tt<2)){
document.getElementById('sorry').play(); 
tt++;
}
if(cont==3){
$("#button1").css('opacity','0.6');
$('#button1').css('pointer-events','none');
bigbang11.classList.remove('bigbang');
$("#myul").css('opacity','0.6');
$("#con").css('opacity','0.6');
$('.emo').css('pointer-events','none');
document.getElementById('the').play();
setTimeout(function(){$('#titulito1').css('visibility','visible');$('#reproduce').css('opacity','0.9');activar[0] = 1; document.getElementById('reproduce').click();$('#reproduce').css('pointer-events','auto');},3000);
cuentamal++; 
tt=0;
homero11=1;
m++;
}
if(m==5){
setTimeout(function(){
$('.alumbraobj').css('opacity','0.4');$('.alumbraobj').css('pointer-events','none');
$('#muestrame1').css('display','inline');
document.getElementById('muestrame1').className = "muestrame1";	
$('#featured1').css('margin-top','0px');
$('#featured1').css('margin-bottom','0px');
$('.peso').css('margin-bottom','10px');
$('.peso').css('display','inline-block');
$('#escuchar').css('display','inline-block');
},1500);
setTimeout(function(){
$('#escuchar').css('opacity','1');
$('#escuchar').css('pointer-events','auto');
document.getElementById('escuchar').className = "bigbang";
},8000);
}
}
//****************************************************************************************************************************************************************
function capturar1(){
var aux1=0;
var aux11=0;		
cont1++;
//---------------------
var first_p1 =$("#con1 span").index($("#zero1"));
if(first_p1==5){
document.getElementById("zero1").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux1++;
}
else{
document.getElementById("zero1").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux11++;
}
//---------------------
var first_p1 =$("#con1 span").index($("#first1"));	
if(first_p1==1){
document.getElementById("first1").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux1++;
}
else{
document.getElementById("first1").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux11++;
}
first_p1 =$("#con1 span").index($("#second1"));
if(first_p1==0){
document.getElementById("second1").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux1++;
}
else{
document.getElementById("second1").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux11++;
}
		//----------------
first_p1 =$("#con1 span").index($("#third1"));
if(first_p1==4){
document.getElementById("third1").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux1++;
}
else{
document.getElementById("third1").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux11++;
}
//----------------
first_p1 =$("#con1 span").index($("#fourth1"));
if(first_p1==3){
document.getElementById("fourth1").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux1++;
}
else{
document.getElementById("fourth1").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux11++;
}
//----------------
first_p1 =$("#con1 span").index($("#fifth1"));
if(first_p1==2){
document.getElementById("fifth1").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux1++;
}
else{
document.getElementById("fifth1").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux11++;
}
if (aux1==6) {
document.getElementById('bien').play();
$("#button2").css('opacity','0.6');
$('#button2').css('pointer-events','none');

bigbang22.classList.remove('bigbang');

$("#myul1").css('opacity','0.6');
$("#con1").css('opacity','0.6');
$('.emo1').css('pointer-events','none');
cont1=0;
tt1=3;
homero22=1;
m++;
cuentabien++;
setTimeout(function(){$('#reproduce1').css('opacity','0.9');activar[1] = 1;$('#reproduce1').css('pointer-events','auto');},1000);
}else
if ((aux11<=6) &&(tt1<2)){
document.getElementById('sorry').play(); 
tt1++;
}
if(cont1==3){
$("#button2").css('opacity','0.6');
$('#button2').css('pointer-events','none');
bigbang22.classList.remove('bigbang');
$("#myul1").css('opacity','0.6');
$("#con1").css('opacity','0.6');
$('.emo1').css('pointer-events','none');
document.getElementById('the').play();
setTimeout(function(){$('#titulito2').css('visibility','visible'); $('#reproduce1').css('opacity','0.9');activar[1] = 1;document.getElementById('reproduce1').click();$('#reproduce1').css('pointer-events','auto');},3000);
cuentamal++; 
tt1=0;
homero22=1;
m++;
}
if(m==5){
setTimeout(function(){
$('.alumbraobj').css('opacity','0.4');$('.alumbraobj').css('pointer-events','none');
$('#muestrame1').css('display','inline');
document.getElementById('muestrame1').className = "muestrame1";	
$('#featured1').css('margin-top','0px');
$('#featured1').css('margin-bottom','0px');
$('.peso').css('margin-bottom','10px');
$('.peso').css('display','inline-block');
$('#escuchar').css('display','inline-block');
},1500);
setTimeout(function(){
$('#escuchar').css('opacity','1');
$('#escuchar').css('pointer-events','auto');
document.getElementById('escuchar').className = "bigbang";
},8000);
}
}
//****************************************************************************************************************************************************************
function capturar2(){
var aux2 =0;
var aux22 =0;	
cont2++;
var first_p1 =$("#con2 span").index($("#first2"));	
if(first_p1==3){
document.getElementById("first2").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux2++;
}
else{
document.getElementById("first2").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux22++;
}
first_p1 =$("#con2 span").index($("#second2"));
if(first_p1==1){
document.getElementById("second2").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux2++;
}
else{
document.getElementById("second2").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux22++;
}
//----------------
first_p1 =$("#con2 span").index($("#third2"));
if(first_p1==5){
document.getElementById("third2").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux2++;
}
else{
document.getElementById("third2").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux22++;
}
//----------------
first_p1 =$("#con2 span").index($("#fourth2"));
if(first_p1==0){
document.getElementById("fourth2").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux2++;
}
else{
document.getElementById("fourth2").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux22++;
}
//----------------
first_p1 =$("#con2 span").index($("#fifth2"));
if(first_p1==6){
document.getElementById("fifth2").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux2++;
}
else{
document.getElementById("fifth2").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux22++;
}
//----------------
first_p1 =$("#con2 span").index($("#six2"));
if(first_p1==4){
document.getElementById("six2").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux2++;
}
else{
document.getElementById("six2").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux22++;
}
//----------------
first_p1 =$("#con2 span").index($("#seven2"));
if(first_p1==7){
document.getElementById("seven2").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux2++;
}
else{
document.getElementById("seven2").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux22++;
}
//----------------
first_p1 =$("#con2 span").index($("#eight2"));
if(first_p1==2){
document.getElementById("eight2").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux2++;
}
else{
document.getElementById("eight2").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";		
aux22++;
}
if (aux2==8) {
document.getElementById('bien').play();
$("#button3").css('opacity','0.6');
$('#button3').css('pointer-events','none');
bigbang33.classList.remove('bigbang');
$("#myul2").css('opacity','0.6');
$("#con2").css('opacity','0.6');
$('.emo2').css('pointer-events','none');
cont2=0;
tt2=3;
homero33=1;
m++;
cuentabien++;
setTimeout(function(){$('#reproduce2').css('opacity','0.9');activar[2] = 1;$('#reproduce2').css('pointer-events','auto');},1000);
}else
if ((aux22<=8) &&(tt2<2)){
document.getElementById('sorry').play(); 
tt2++;
}
if(cont2==3){
$("#button3").css('opacity','0.6');
$('#button3').css('pointer-events','none');
bigbang33.classList.remove('bigbang');
$("#myul2").css('opacity','0.6');
$("#con2").css('opacity','0.6');
$('.emo2').css('pointer-events','none');
document.getElementById('the').play();
setTimeout(function(){$('#titulito3').css('visibility','visible'); $('#reproduce2').css('opacity','0.9');activar[2] = 1;document.getElementById('reproduce2').click();$('#reproduce2').css('pointer-events','auto');},3000);
cuentamal++; 
tt2=0;
homero33=1;
m++;
}
if(m==5){
setTimeout(function(){
$('.alumbraobj').css('opacity','0.4');$('.alumbraobj').css('pointer-events','none');
$('#muestrame1').css('display','inline');
document.getElementById('muestrame1').className = "muestrame1";	
$('#featured1').css('margin-top','0px');
$('#featured1').css('margin-bottom','0px');
$('.peso').css('margin-bottom','10px');
$('.peso').css('display','inline-block');
$('#escuchar').css('display','inline-block');
},1500);
setTimeout(function(){
$('#escuchar').css('opacity','1');
$('#escuchar').css('pointer-events','auto');
document.getElementById('escuchar').className = "bigbang";
},8000);
}
}
//****************************************************************************************************************************************************************
function capturar3(){
var aux3 =0;
var aux33 =0;	
cont3++;
var first_p1 =$("#con3 span").index($("#first3"));
if(first_p1==1){
document.getElementById("first3").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux3++;
}
else{
document.getElementById("first3").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux33++;
}
first_p1 =$("#con3 span").index($("#second3"));
if(first_p1==4){
document.getElementById("second3").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux3++;
}
else{
document.getElementById("second3").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux33++;
}
//----------------
first_p1 =$("#con3 span").index($("#third3"));
if(first_p1==2){
document.getElementById("third3").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux3++;
}
else{
document.getElementById("third3").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux33++;
}
//----------------
first_p1 =$("#con3 span").index($("#fourth3"));
if(first_p1==5){
document.getElementById("fourth3").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux3++;
}
else{
document.getElementById("fourth3").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux33++;
}
//---------------------
var first_p1 =$("#con3 span").index($("#zero3"));
if(first_p1==6){
document.getElementById("zero3").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux3++;
}
else{
document.getElementById("zero3").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux33++;
}

//----------------
first_p1 =$("#con3 span").index($("#fifth3"));
if(first_p1==0){
document.getElementById("fifth3").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux3++;
}
else{
document.getElementById("fifth3").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux33++;
}
//----------------
first_p1 =$("#con3 span").index($("#six3"));
if(first_p1==3){
document.getElementById("six3").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux3++;
}
else{
document.getElementById("six3").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux33++;
}
if (aux3==7) {
document.getElementById('bien').play();
$("#button4").css('opacity','0.6');
$('#button4').css('pointer-events','none');
bigbang44.classList.remove('bigbang');
$("#myul3").css('opacity','0.6');
$("#con3").css('opacity','0.6');
$('.emo3').css('pointer-events','none');
cont3=0;
tt3=3;
homero44=1;
m++;
cuentabien++;
setTimeout(function(){$('#reproduce3').css('opacity','0.9');activar[3] = 1;$('#reproduce3').css('pointer-events','auto');},1000);
}else
if ((aux33<=7) &&(tt3<2)){
document.getElementById('sorry').play(); 
tt3++;
}
if(cont3==3){
$("#button4").css('opacity','0.6');
$('#button4').css('pointer-events','none');
bigbang44.classList.remove('bigbang');
$("#myul3").css('opacity','0.6');
$("#con3").css('opacity','0.6');
$('.emo3').css('pointer-events','none');
document.getElementById('the').play();
setTimeout(function(){$('#titulito4').css('visibility','visible'); $('#reproduce3').css('opacity','0.9');activar[3] = 1; document.getElementById('reproduce3').click();$('#reproduce3').css('pointer-events','auto'); },3000);
cuentamal++; 
tt3=0;
homero44=1;
m++;
}
if(m==5){
setTimeout(function(){
$('.alumbraobj').css('opacity','0.4');$('.alumbraobj').css('pointer-events','none');
$('#muestrame1').css('display','inline');
document.getElementById('muestrame1').className = "muestrame1";	
$('#featured1').css('margin-top','0px');
$('#featured1').css('margin-bottom','0px');
$('.peso').css('margin-bottom','10px');
$('.peso').css('display','inline-block');
$('#escuchar').css('display','inline-block');
},1500);
setTimeout(function(){
$('#escuchar').css('opacity','1');
$('#escuchar').css('pointer-events','auto');
document.getElementById('escuchar').className = "bigbang";
},8000);
}
}
//****************************************************************************************************************************************************************
function capturar4(){
var aux4 =0;
var aux44 =0;	
cont4++;
var first_p1 =$("#con4 span").index($("#first4"));
if(first_p1==0){
document.getElementById("first4").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux4++;
}
else{
document.getElementById("first4").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux44++;
}
first_p1 =$("#con4 span").index($("#second4"));
if(first_p1==2){
document.getElementById("second4").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux4++;
}
else{
document.getElementById("second4").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux44++;
}
//----------------
first_p1 =$("#con4 span").index($("#third4"));
if(first_p1==3){
document.getElementById("third4").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux4++;
}
else{
document.getElementById("third4").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux44++;
}
//----------------
first_p1 =$("#con4 span").index($("#fourth4"));
if(first_p1==1){
document.getElementById("fourth4").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux4++;
}
else{
document.getElementById("fourth4").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux44++;
}
//---------------------
var first_p1 =$("#con4 span").index($("#zero4"));
if(first_p1==7){
document.getElementById("zero4").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux4++;
}
else{
document.getElementById("zero4").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux44++;
}
//---------------------
first_p1 =$("#con4 span").index($("#fifth4"));
if(first_p1==6){
document.getElementById("fifth4").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux4++;
}
else{
document.getElementById("fifth4").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux44++;
}
//----------------
first_p1 =$("#con4 span").index($("#six4"));
if(first_p1==4){
document.getElementById("six4").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux4++;
}
else{
document.getElementById("six4").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux44++;
}
//----------------
first_p1 =$("#con4 span").index($("#seven4"));
if(first_p1==5){
document.getElementById("seven4").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux4++;
}
else{
document.getElementById("seven4").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux44++;
}		
if (aux4==8) {
document.getElementById('bien').play();
$("#button5").css('opacity','0.6');
$('#button5').css('pointer-events','none');
bigbang55.classList.remove('bigbang');
$("#myul4").css('opacity','0.6');
$("#con4").css('opacity','0.6');
$('.emo4').css('pointer-events','none');
cont4=0;
tt4=3;
homero55=1;
m++;
cuentabien++;
setTimeout(function(){$('#reproduce4').css('opacity','0.9');activar[4] = 1;$('#reproduce4').css('pointer-events','auto');},1000);
}else
if ((aux44<=8) &&(tt4<2)){
document.getElementById('sorry').play(); 
tt4++;
}
if(cont4==3){
$("#button5").css('opacity','0.6');
$('#button5').css('pointer-events','none');
bigbang55.classList.remove('bigbang');
$("#myul4").css('opacity','0.6');
$("#con4").css('opacity','0.6');
$('.emo4').css('pointer-events','none');
document.getElementById('the').play();
setTimeout(function(){$('#titulito5').css('visibility','visible'); $('#reproduce4').css('opacity','0.9');activar[4] = 1; document.getElementById('reproduce4').click();$('#reproduce4').css('pointer-events','auto');},3000);
cuentamal++; 
tt4=0;
homero55=1;
m++;
}
if(m==5){
setTimeout(function(){
$('.alumbraobj').css('opacity','0.4');$('.alumbraobj').css('pointer-events','none');
$('#muestrame1').css('display','inline');
document.getElementById('muestrame1').className = "muestrame1";	
$('#featured1').css('margin-top','0px');
$('#featured1').css('margin-bottom','0px');
$('.peso').css('margin-bottom','10px');
$('.peso').css('display','inline-block');
$('#escuchar').css('display','inline-block');
},1500);

setTimeout(function(){
$('#escuchar').css('opacity','1');
$('#escuchar').css('pointer-events','auto');
document.getElementById('escuchar').className = "bigbang";
},8000);
}
}

function termina(){
$('#q1').css('display','none');
$('.sig').css('display','none');
$('#listeniando').css('display','none');
$('#r1').css('display','none');
resultado(cuentabien,5);	
}

function carga(){
$('.centered-btns_nav').css('visibility','visible'); 
$('#r1').css('opacity','1'); 
$('#button1').css('display','inline'); 
$('#reproduce').css('display','inline'); 
$('#perendengues1').css('display','inline');
}