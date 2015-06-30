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
//homero11++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
mm++;
}
/*if((cuentabien+cuentamal>=5)&&((homero11==1)||(homero22==1)||(homero33==1)||(homero44==1)||(homero55==1))){
$(".elnav").css('display','none');
$("#escuchar").css('display','inline');
cosiño=1;
}*/
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
/*$("#reproduce00").css('opacity','0.4');
$('#reproduce00').css('pointer-events','none');*/
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
//homero22++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce1").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
mm++;
}
/*if((cuentabien+cuentamal>=5)&&((homero11==1)||(homero22==1)||(homero33==1)||(homero44==1)||(homero55==1))){
$(".elnav").css('display','none');
$("#escuchar").css('display','inline');
cosiño=1;
}*/
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
/*$("#reproduce11").css('opacity','0.4');
$('#reproduce11').css('pointer-events','none');*/
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
//homero33++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce2").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
mm++;
}
/*if((cuentabien+cuentamal>=5)&&((homero11==1)||(homero22==1)||(homero33==1)||(homero44==1)||(homero55==1))){
$(".elnav").css('display','none');
$("#escuchar").css('display','inline');
cosiño=1;
}*/
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
/*$("#reproduce22").css('opacity','0.4');
$('#reproduce22').css('pointer-events','none');*/
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
//homero44++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce3").css('display','none');
$("#pause").css('display','inline');
audio.currentTime = 0; 
mm++;
}
/*if((cuentabien+cuentamal>=5)&&((homero11==1)||(homero22==1)||(homero33==1)||(homero44==1)||(homero55==1))){
$(".elnav").css('display','none');
$("#escuchar").css('display','inline');
cosiño=1;
}*/
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
/*$("#reproduce33").css('opacity','0.4');
$('#reproduce33').css('pointer-events','none');*/
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
//homero55++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce4").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
mm++;
}
/*if((cuentabien+cuentamal>=5)&&((homero11==1)||(homero22==1)||(homero33==1)||(homero44==1)||(homero55==1))){
$(".elnav").css('display','none');
$("#escuchar").css('display','inline');
cosiño=1;
}*/
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
/*$("#reproduce44").css('opacity','0.4');
$('#reproduce44').css('pointer-events','none');*/
}
}

}
//-------------------------------------------------------------------
function capturar(){
if (cheverongo==1) {
x=$("#ki");
x.remove();
x=$("#kit");
x.remove();
}
var aux =0;
var aux1 =0;	
cont++;
var first_p =$("#con li").index($("#uno"));
if(first_p==1){
document.getElementById("first").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux++;
}
else{
document.getElementById("first").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux1++;
}
//---------------------
first_p =$("#con li").index($("#dos"));
if(first_p==3){
document.getElementById("second").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux++;
}
else{
document.getElementById("second").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux1++;
}
//----------------
first_p =$("#con li").index($("#tres"));
if(first_p==4){
document.getElementById("third").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux++;
}
else{
document.getElementById("third").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux1++;
}
//----------------
first_p =$("#con li").index($("#cuatro"));
if(first_p==2){
document.getElementById("fourth").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux++;
}
else{
document.getElementById("fourth").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux1++;
}
//----------------
first_p =$("#con li").index($("#cinco"));
if(first_p==0){
document.getElementById("fifth").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux++;
}
else{
document.getElementById("fifth").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux1++;
}
//----------------
if (aux==5) {
document.getElementById('bien').play();
/*form2.button1.disabled = "disabled";
$(form2.button1).css('opacity','0.6');*/

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
//alert("Muy bien");
setTimeout(function(){$('#reproduce').css('opacity','0.9');activar[0] = 1;$('#reproduce').css('pointer-events','auto');},1000);
}else
if ((aux1<=5) &&(tt<2)){
document.getElementById('sorry').play(); 
//alert("Try again. You have 3 attempts, get: "+(tt+1)+" attempts");
tt++;
}
if(cont==3){
//alert("You've exhausted your attempts");
//form2.button1.disabled = "disabled";
//$(form2.button1).css('opacity','0.6');
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

//setTimeout(function(){automatico();},8000)
//changos++;
setTimeout(function(){
$('.alumbraobj').css('opacity','0.4');	
$('#muestrame1').css('display','inline');
document.getElementById('muestrame1').className = "muestrame1";	
},2000);

setTimeout(function(){
$('#escuchar').css('opacity','1');
$('#escuchar').css('pointer-events','auto');
document.getElementById('escuchar').className = "bigbang";
},10000);
}

}
//****************************************************************************************************************************************************************
function capturar1(){
if (cheverongo1==1) {
x=$("#ki1");
x.remove();
x=$("#kit1");
x.remove();
}
var aux1=0;
var aux11=0;		
cont1++;
var first_p1 =$("#con1 li").index($("#u1"));	
if(first_p1==1){
document.getElementById("first1").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux1++;
}
else{
document.getElementById("first1").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux11++;
}
first_p1 =$("#con1 li").index($("#d1"));
if(first_p1==0){
document.getElementById("second1").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux1++;
}
else{
document.getElementById("second1").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux11++;
}
		//----------------
first_p1 =$("#con1 li").index($("#t1"));
if(first_p1==4){
document.getElementById("third1").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux1++;
}
else{
document.getElementById("third1").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux11++;
}
//----------------
first_p1 =$("#con1 li").index($("#c1"));
if(first_p1==3){
document.getElementById("fourth1").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux1++;
}
else{
document.getElementById("fourth1").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux11++;
}
//----------------
first_p1 =$("#con1 li").index($("#ci1"));
if(first_p1==2){
document.getElementById("fifth1").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux1++;
}
else{
document.getElementById("fifth1").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux11++;
}
if (aux1==5) {
document.getElementById('bien').play();
/*form2.button2.disabled = "disabled";
$(form2.button2).css('opacity','0.6');*/

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
//alert("Muy bien");
setTimeout(function(){$('#reproduce1').css('opacity','0.9');activar[1] = 1;$('#reproduce1').css('pointer-events','auto');},1000);
}else
if ((aux11<=5) &&(tt1<2)){
document.getElementById('sorry').play(); 
//alert("Try again. You have 3 attempts, get: "+(tt1+1)+" attempts");
tt1++;
}
if(cont1==3){
//alert("You've exhausted your attempts");
/*form2.button2.disabled = "disabled";
$(form2.button2).css('opacity','0.6');*/

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
//setTimeout(function(){automatico();},8000)
//changos++;
setTimeout(function(){
$('.alumbraobj').css('opacity','0.4');
$('#muestrame1').css('display','inline');
document.getElementById('muestrame1').className = "muestrame1";	
},2000);

setTimeout(function(){
$('#escuchar').css('opacity','1');
$('#escuchar').css('pointer-events','auto');
document.getElementById('escuchar').className = "bigbang";
},10000);
}

}
//****************************************************************************************************************************************************************
function capturar2(){
if (cheverongo2==1) {
x=$("#ki2");
x.remove();
x=$("#kit2");
x.remove();
}
var aux2 =0;
var aux22 =0;	
cont2++;
var first_p1 =$("#con2 li").index($("#u2"));	
if(first_p1==3){
document.getElementById("first2").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux2++;
}
else{
document.getElementById("first2").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux22++;
}
first_p1 =$("#con2 li").index($("#d2"));
if(first_p1==1){
document.getElementById("second2").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux2++;
}
else{
document.getElementById("second2").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux22++;
}
//----------------
first_p1 =$("#con2 li").index($("#t2"));
if(first_p1==5){
document.getElementById("third2").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux2++;
}
else{
document.getElementById("third2").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux22++;
}
//----------------
first_p1 =$("#con2 li").index($("#c2"));
if(first_p1==0){
document.getElementById("fourth2").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux2++;
}
else{
document.getElementById("fourth2").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux22++;
}
//----------------
first_p1 =$("#con2 li").index($("#ci2"));
if(first_p1==6){
document.getElementById("fifth2").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux2++;
}
else{
document.getElementById("fifth2").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux22++;
}
//----------------
first_p1 =$("#con2 li").index($("#s2"));
if(first_p1==4){
document.getElementById("six2").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux2++;
}
else{
document.getElementById("six2").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux22++;
}
//----------------
first_p1 =$("#con2 li").index($("#sie2"));
if(first_p1==7){
document.getElementById("seven2").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux2++;
}
else{
document.getElementById("seven2").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux22++;
}
//----------------
first_p1 =$("#con2 li").index($("#och2"));
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
/*form2.button3.disabled = "disabled";
$(form2.button3).css('opacity','0.6');*/
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
//alert("Muy bien");
setTimeout(function(){$('#reproduce2').css('opacity','0.9');activar[2] = 1;$('#reproduce2').css('pointer-events','auto');},1000);
}else
if ((aux22<=8) &&(tt2<2)){
document.getElementById('sorry').play(); 
//alert("Try again. You have 3 attempts, get: "+(tt2+1)+" attempts");
tt2++;
}
if(cont2==3){
//alert("You've exhausted your attempts");
/*form2.button3.disabled = "disabled";
$(form2.button3).css('opacity','0.6');*/

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
//setTimeout(function(){automatico();},8000)
//changos++;
setTimeout(function(){
$('.alumbraobj').css('opacity','0.4');
$('#muestrame1').css('display','inline');
document.getElementById('muestrame1').className = "muestrame1";	
},2000);

setTimeout(function(){
$('#escuchar').css('opacity','1');
$('#escuchar').css('pointer-events','auto');
document.getElementById('escuchar').className = "bigbang";
},10000);
}

}
//****************************************************************************************************************************************************************
function capturar3(){
if (cheverongo3==1) {
x=$("#ki3");
x.remove();
x=$("#kit3");
x.remove();
}
var aux3 =0;
var aux33 =0;	
cont3++;
var first_p1 =$("#con3 li").index($("#u3"));
if(first_p1==1){
document.getElementById("first3").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux3++;
}
else{
document.getElementById("first3").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux33++;
}
first_p1 =$("#con3 li").index($("#d3"));
if(first_p1==4){
document.getElementById("second3").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux3++;
}
else{
document.getElementById("second3").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux33++;
}
//----------------
first_p1 =$("#con3 li").index($("#t3"));
if(first_p1==2){
document.getElementById("third3").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux3++;
}
else{
document.getElementById("third3").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux33++;
}
//----------------
first_p1 =$("#con3 li").index($("#c3"));
if(first_p1==5){
document.getElementById("fourth3").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux3++;
}
else{
document.getElementById("fourth3").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux33++;
}
//----------------
first_p1 =$("#con3 li").index($("#ci3"));
if(first_p1==0){
document.getElementById("fifth3").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux3++;
}
else{
document.getElementById("fifth3").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux33++;
}
//----------------
first_p1 =$("#con3 li").index($("#s3"));
if(first_p1==3){
document.getElementById("six3").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux3++;
}
else{
document.getElementById("six3").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux33++;
}
if (aux3==6) {
document.getElementById('bien').play();
/*form2.button4.disabled = "disabled";
$(form2.button4).css('opacity','0.6');*/

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
//alert("Muy bien");
setTimeout(function(){$('#reproduce3').css('opacity','0.9');activar[3] = 1;$('#reproduce3').css('pointer-events','auto');},1000);
}else
if ((aux33<=6) &&(tt3<2)){
document.getElementById('sorry').play(); 
//alert("Try again. You have 3 attempts, get: "+(tt3+1)+" attempts");
tt3++;
}
if(cont3==3){
//alert("You've exhausted your attempts");
/*form2.button4.disabled = "disabled";
$(form2.button4).css('opacity','0.6');*/

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
//setTimeout(function(){automatico();},8000)
//changos++;
setTimeout(function(){
$('.alumbraobj').css('opacity','0.4');
$('#muestrame1').css('display','inline');
document.getElementById('muestrame1').className = "muestrame1";	
},2000);

setTimeout(function(){
$('#escuchar').css('opacity','1');
$('#escuchar').css('pointer-events','auto');
document.getElementById('escuchar').className = "bigbang";
},10000);
}

}
//****************************************************************************************************************************************************************
function capturar4(){
if (cheverongo4==1) {
x=$("#ki4");
x.remove();
x=$("#kit4");
x.remove();
}
var aux4 =0;
var aux44 =0;	
cont4++;
var first_p1 =$("#con4 li").index($("#u4"));
if(first_p1==0){
document.getElementById("first4").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux4++;
}
else{
document.getElementById("first4").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux44++;
}
first_p1 =$("#con4 li").index($("#d4"));
if(first_p1==2){
document.getElementById("second4").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux4++;
}
else{
document.getElementById("second4").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux44++;
}
//----------------
first_p1 =$("#con4 li").index($("#t4"));
if(first_p1==3){
document.getElementById("third4").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux4++;
}
else{
document.getElementById("third4").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux44++;
}
//----------------
first_p1 =$("#con4 li").index($("#c4"));
if(first_p1==1){
document.getElementById("fourth4").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux4++;
}
else{
document.getElementById("fourth4").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux44++;
}
//----------------
first_p1 =$("#con4 li").index($("#ci4"));
if(first_p1==6){
document.getElementById("fifth4").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux4++;
}
else{
document.getElementById("fifth4").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux44++;
}
//----------------
first_p1 =$("#con4 li").index($("#s4"));
if(first_p1==4){
document.getElementById("six4").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux4++;
}
else{
document.getElementById("six4").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux44++;
}
//----------------
first_p1 =$("#con4 li").index($("#sie4"));
if(first_p1==5){
document.getElementById("seven4").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
aux4++;
}
else{
document.getElementById("seven4").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
aux44++;
}		
if (aux4==7) {
document.getElementById('bien').play();
/*form2.button5.disabled = "disabled";
$(form2.button5).css('opacity','0.6');*/

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
//alert("Muy bien");
setTimeout(function(){$('#reproduce4').css('opacity','0.9');activar[4] = 1;$('#reproduce4').css('pointer-events','auto');},1000);
}else
if ((aux44<=7) &&(tt4<2)){
document.getElementById('sorry').play(); 
//alert("Try again. You have 3 attempts, get: "+(tt4+1)+" attempts");
tt4++;
}
if(cont4==3){
//alert("You've exhausted your attempts");
/*form2.button5.disabled = "disabled";
$(form2.button5).css('opacity','0.6');*/
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
//setTimeout(function(){automatico();},8000)
//changos++;
setTimeout(function(){
$('.alumbraobj').css('opacity','0.4');
$('#muestrame1').css('display','inline');
document.getElementById('muestrame1').className = "muestrame1";	
},2000);

setTimeout(function(){
$('#escuchar').css('opacity','1');
$('#escuchar').css('pointer-events','auto');
document.getElementById('escuchar').className = "bigbang";
},10000);
}

}



function termina(){
		$('#q1').css('display','none');
		$('.sig').css('display','none');
		$('#listeniando').css('display','none');
		$('#r1').css('display','none');
		
		resultado(cuentabien,5);
	
	
	
}






/*

function readmew2(time){
insw2();
document.getElementById('instruyeme').play();
$('#r1').css('opacity','0.2');
$('.centered-btns_nav').css('visibility','hidden');
temp=setTimeout(function(){$('.centered-btns_nav').css('visibility','visible'); $('#r1').css('opacity','1'); $('#button1').css('display','inline'); $('#reproduce').css('display','inline'); $('#perendengues1').css('display','inline');changehand(2);},time);



temp=setTimeout(function(){
document.getElementById("alumbraobj").style.webkitAnimation="alumbra 2s infinite";
document.getElementById("alumbraobj").style.animation="alumbra 2s infinite";

},16000);




}
	
	
function insw2(){
if(aux==0){
$('#objetivos').css('display','none');
aux2=1;
$('#instruccion').css('animation', 'pasadoaparece .5s linear');
$('#instruccion').css('display','inline-block');
clearTimeout(temporizador);
temporizador2=setTimeout(function(){insw2();},16000);
aux=1;}
else
if(aux==1){
$('#instruccion').css('display','none');
aux=0;
clearTimeout(temporizador2);
}
}*/





function bichin(time){
$('#r1').css('opacity','0.2');
$('.centered-btns_nav').css('visibility','hidden');
temp=setTimeout(function(){$('.centered-btns_nav').css('visibility','visible'); $('#r1').css('opacity','1'); $('#button1').css('display','inline'); $('#reproduce').css('display','inline'); $('#perendengues1').css('display','inline');changehand(2);},time);
}


















