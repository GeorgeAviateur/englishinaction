var i=0;
var aux=0;
var ubic="";
var cuentabien=0;
var cuentamal=0;
var activar1 = new Array(5);
var suplente1 = new Array(5);
var a1="";
var a2="";
var a3="";
var a4="";
var a5="";
var guardando="";
var recibe="";
var respuesta="";
var lock=false;
var compara="";
var audio;
var pausito;
var m=0;
var cosiño=0;
var contador=0;
var contador1=0;
var contador2=0;
var contador3=0;
var contador4=0;
var contador5=0;
var contador6=0;
var externo=1;
var otroauxiliarjaja=0;
var changos=0;
//---------------------------------------------------------------------------------------------------------------------------
function validarn(e) { 
tecla = (document.all) ? e.keyCode : e.which; 
if (tecla==8) return true; 
if (tecla==9) return true; 
if (tecla==11) return true; 
patron = /[A-Za-zñÑ'áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛÑñäëïöüÄËÏÖÜ\s\t]/; 
te = String.fromCharCode(tecla); 
return patron.test(te); 
}
//---------------------------------------------------------------------------------------------------------------------------
function activaaudio1(){
if((more==0)&&(activar1[0] == 1)){
audio=document.getElementById('a1');
pausito = document.getElementById("pause1");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce00").css('display','inline');
$("#pause1").css('display','none');
m++;
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce00").css('display','none');
$("#pause1").css('display','inline'); 
audio.currentTime = 0;
m++;
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
$("#reproduce00").css('opacity','0.4');
$('#reproduce00').css('pointer-events','none');
}
}

//------------------------------------------------------

if((more==1)&&(activar1[1] == 1)){
audio=document.getElementById('a2');
pausito = document.getElementById("pause1");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce11").css('display','inline');
$("#pause1").css('display','none');
m++;
contador1++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce11").css('display','none');
$("#pause1").css('display','inline'); 
audio.currentTime = 0;
m++;
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
$("#reproduce11").css('opacity','0.4');
$('#reproduce11').css('pointer-events','none');
}
}
//------------------------------------------------------
if((more==2)&&(activar1[2] == 1)){
audio=document.getElementById('a3');
pausito = document.getElementById("pause1");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce22").css('display','inline');
$("#pause1").css('display','none');
m++;
contador2++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce22").css('display','none');
$("#pause1").css('display','inline'); 
audio.currentTime = 0;
m++;
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
$("#reproduce22").css('opacity','0.4');
$('#reproduce22').css('pointer-events','none');
}
}
//------------------------------------------------------
if((more==3)&&(activar1[3] == 1)){
audio=document.getElementById('a4');
pausito = document.getElementById("pause1");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce33").css('display','inline');
$("#pause1").css('display','none');
m++;
contador3++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce33").css('display','none');
$("#pause1").css('display','inline'); 
audio.currentTime = 0;
m++;
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
$("#reproduce33").css('opacity','0.4');
$('#reproduce33').css('pointer-events','none');
}
}

//------------------------------------------------------

if(((more==4)||(more==-1))&&(activar1[4] == 1)){
audio=document.getElementById('a5');
pausito = document.getElementById("pause1");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce44").css('display','inline');
$("#pause1").css('display','none');
m++;
contador4++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce44").css('display','none');
$("#pause1").css('display','inline'); 
audio.currentTime = 0;
m++;
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
$("#reproduce44").css('opacity','0.4');
$('#reproduce44').css('pointer-events','none');
}
}
}
//---------------------------------------------------------------------------------------------------------------------------
function capturar(botoncito){
var form1 = document.getElementById("form2");
a1=form1.what_are_you_going_to_do_tomorrow.value;
a2=form1.where_are_you_going_to_travel_next_vacation.value;
a3=form1.are_you_going_to_the_party_tonight.value;
a4=form1.what_is_jenny_going_to_do_to_lose_weight.value;
a5=form1.is_marco_going_to_the_movies_tonight.value;
a1=a1.replace(/\s/g,"_");
a2=a2.replace(/\s/g,"_");
a3=a3.replace(/\s/g,"_");
a4=a4.replace(/\s/g,"_");
a5=a5.replace(/\s/g,"_");

if(compara!=botoncito){
lock=false;
compara="";
}

if(lock==false){
compara=botoncito;
lock=true;
}
if (botoncito=="e1"){

if((a1=="What_are_you_going_to_do_tomorrow")||(a1=="WHAT_ARE_YOU_GOING_TO_DO_TOMORROW")){ 
activar1[0] = 1;
document.getElementById('bien').play();
bigbang11.classList.remove('bigbang');
$('#what_are_you_going_to_do_tomorrow').css('opacity','0.6');
$(form1.what_are_you_going_to_do_tomorrow).css('pointer-events','none'); 
$(form1.what_are_you_going_to_do_tomorrow).css('border','3px solid #308c58');
$('#campiño1').css('border','3px solid #308c58');
$('#e1').css('pointer-events','none');
$('#e1').css('opacity','0.6');
setTimeout(function(){$('#reproduce00').css('opacity','0.9');$('#reproduce00').css('pointer-events','auto'); activar1[0] = 1;},700);
cuentabien++;
}
else{
aux++;
if(aux<=2){
document.getElementById('sorry').play();
$(form1.what_are_you_going_to_do_tomorrow).css('border','3px solid #fc484c');
$('#campiño1').css('border','3px solid #fc484c');
}
if ((aux>2)){
$(form1.what_are_you_going_to_do_tomorrow).css('pointer-events','none'); 
document.getElementById('t1').play();
$('#what_are_you_going_to_do_tomorrow').css('opacity','0.6');
$('#e1').css('pointer-events','none');
$('#e1').css('opacity','0.6');
$(form1.what_are_you_going_to_do_tomorrow).css('opacity','0.6');
bigbang11.classList.remove('bigbang');
setTimeout(function(){$('#velk1').css('display','none'); $('#mostra1').css('display','inline'); $('#reproduce00').css('opacity','0.9');activar1[0] = 1; document.getElementById('reproduce00').click(); $('#reproduce00').css('pointer-events','auto');},2500);
cuentamal++;
}
}  
}
//***********************************************************************
if (botoncito=="e2"){
if((a2=="Where_are_you_going_to_travel_next_vacation")||(a2=="WHERE_ARE_YOU_GOING_TO_TRAVEL_NEXT_VACATION")){
activar1[1] = 1;
document.getElementById('bien').play();
$('#where_are_you_going_to_travel_next_vacation').css('opacity','0.6');
$(form1.where_are_you_going_to_travel_next_vacation).css('pointer-events','none'); 
$(form1.where_are_you_going_to_travel_next_vacation).css('border','3px solid #308c58');
$('#campiño2').css('border','3px solid #308c58');
$('#e2').css('pointer-events','none');
$('#e2').css('opacity','0.6');
bigbang22.classList.remove('bigbang');
setTimeout(function(){$('#reproduce11').css('opacity','0.9');$('#reproduce11').css('pointer-events','auto'); activar1[1] = 1;},700);
cuentabien++;
}
else{
aux++;
if(aux<=2){
document.getElementById('sorry').play();
$(form1.where_are_you_going_to_travel_next_vacation).css('border','3px solid #fc484c');
$('#campiño2').css('border','3px solid #fc484c');
}
if ((aux>2)){
$(form1.where_are_you_going_to_travel_next_vacation).css('pointer-events','none'); 
document.getElementById('t1').play();
$('#where_are_you_going_to_travel_next_vacation').css('opacity','0.6');
$('#e2').css('pointer-events','none');
$('#e2').css('opacity','0.6');
$(form1.where_are_you_going_to_travel_next_vacation).css('opacity','0.6');
bigbang22.classList.remove('bigbang');
setTimeout(function(){$('#velk2').css('display','none'); $('#mostra2').css('display','inline');$('#reproduce11').css('opacity','0.9');activar1[1] = 1; document.getElementById('reproduce11').click(); $('#reproduce11').css('pointer-events','auto');},2500);
cuentamal++;
}
}  
}

//****************************************************************************
if (botoncito=="e3"){
if ((a3=="Are_you_going_to_the_party_tonight")||(a3=="ARE_YOU_GOING_TO_THE_PARTY_TONIGHT")) {
activar1[2] = 1;
document.getElementById('bien').play();
$('#are_you_going_to_the_party_tonight').css('opacity','0.6');
$(form1.are_you_going_to_the_party_tonight).css('pointer-events','none'); 
$(form1.are_you_going_to_the_party_tonight).css('border','3px solid #308c58');
$('#campiño3').css('border','3px solid #308c58');
$(form1.are_you_going_to_the_party_tonight).css('opacity','0.6');
$('#e3').css('pointer-events','none');
$('#e3').css('opacity','0.6');
bigbang33.classList.remove('bigbang');
setTimeout(function(){$('#reproduce22').css('opacity','0.9');$('#reproduce22').css('pointer-events','auto'); activar1[2] = 1;},700);
cuentabien++;
}
else{
aux++;
if(aux<=2){
document.getElementById('sorry').play();
$(form1.are_you_going_to_the_party_tonight).css('border','3px solid #fc484c');
$('#campiño3').css('border','3px solid #fc484c');
}
if ((aux>2)){
$(form1.are_you_going_to_the_party_tonight).css('pointer-events','none'); 
document.getElementById('t1').play();
$('#are_you_going_to_the_party_tonight').css('opacity','0.6');
$('#e3').css('pointer-events','none');
$('#e3').css('opacity','0.6');
$(form1.are_you_going_to_the_party_tonight).css('opacity','0.6');
bigbang33.classList.remove('bigbang');
setTimeout(function(){$('#velk3').css('display','none'); $('#mostra3').css('display','inline');$('#reproduce22').css('opacity','0.9');activar1[2] = 1; document.getElementById('reproduce22').click(); $('#reproduce22').css('pointer-events','auto');},2500);
cuentamal++;
}
}  
}
//**********************************************************************
if (botoncito=="e4"){
if ((a4=="What_is_Jenny_going_to_do_to_lose_weight")||(a4=="WHAT_IS_JENNY_GOING_TO_DO_TO_LOSE_WEIGHT")) {
activar1[3] = 1;
document.getElementById('bien').play();
$('#e4').css('pointer-events','none');
$('#e4').css('opacity','0.6');
$(form1.what_is_jenny_going_to_do_to_lose_weight).css('pointer-events','none'); 
$(form1.what_is_jenny_going_to_do_to_lose_weight).css('border','3px solid #308c58');
$('#campiño4').css('border','3px solid #308c58');
$('#what_is_jenny_going_to_do_to_lose_weight').css('opacity','0.6');
bigbang44.classList.remove('bigbang');
setTimeout(function(){$('#reproduce33').css('opacity','0.9');$('#reproduce33').css('pointer-events','auto'); activar1[3] = 1;},700);
cuentabien++;
}
else{
aux++;
if(aux<=2){
document.getElementById('sorry').play();
$(form1.what_is_jenny_going_to_do_to_lose_weight).css('border','3px solid #fc484c');
$('#campiño4').css('border','3px solid #fc484c');
}
if ((aux>2)&&((a4!="What_is_Jenny_going_to_do_to_lose_weight")||(a4!="WHAT_IS_JENNY_GOING_TO_DO_TO_LOSE_WEIGHT"))){
$(form1.what_is_jenny_going_to_do_to_lose_weight).css('pointer-events','none'); 
document.getElementById('t1').play();
$('#what_is_jenny_going_to_do_to_lose_weight').css('opacity','0.6');
$('#e4').css('pointer-events','none');
$('#e4').css('opacity','0.6');
$(form1.what_is_jenny_going_to_do_to_lose_weight).css('opacity','0.6');
bigbang44.classList.remove('bigbang');
setTimeout(function(){$('#velk4').css('display','none'); $('#mostra4').css('display','inline');$('#reproduce33').css('opacity','0.9');activar1[3] = 1; document.getElementById('reproduce33').click(); $('#reproduce33').css('pointer-events','auto');},2500);
cuentamal++;
}
}  
}
//********************************************************************
if (botoncito=="e5"){
if ((a5=="Is_Marco_going_to_the_movies_tonight")||(a5=="IS_MARCO_GOING_TO_THE_MOVIES_TONIGHT")) {
activar1[4] = 1;
document.getElementById('bien').play();
$('#e5').css('pointer-events','none');
$('#e5').css('opacity','0.6');
$(form1.is_marco_going_to_the_movies_tonight).css('pointer-events','none'); 
$(form1.is_marco_going_to_the_movies_tonight).css('border','3px solid #308c58');
$('#campiño5').css('border','3px solid #308c58');
$('#is_marco_going_to_the_movies_tonight').css('opacity','0.6');
bigbang55.classList.remove('bigbang');
setTimeout(function(){$('#reproduce44').css('opacity','0.9');$('#reproduce44').css('pointer-events','auto'); activar1[4] = 1;},700);
cuentabien++;
}
else{
aux++;
if(aux<=2){
document.getElementById('sorry').play();
$(form1.is_marco_going_to_the_movies_tonight).css('border','3px solid #fc484c');
$('#campiño5').css('border','3px solid #fc484c');
}
if ((aux>2)&&((a5!="Is_Marco_going_to_the_movies_tonight")||(a5!="IS_MARCO_GOING_TO_THE_MOVIES_TONIGHT"))){
$(form1.is_marco_going_to_the_movies_tonight).css('pointer-events','none'); 
document.getElementById('t1').play();
$('#is_marco_going_to_the_movies_tonight').css('opacity','0.6');
$('#e5').css('pointer-events','none');
$('#e5').css('opacity','0.6');
bigbang55.classList.remove('bigbang');
$(form1.is_marco_going_to_the_movies_tonight).css('opacity','0.6');
setTimeout(function(){$('#velk5').css('display','none'); $('#mostra5').css('display','inline');$('#reproduce44').css('opacity','0.9');activar1[4] = 1; document.getElementById('reproduce44').click(); $('#reproduce44').css('pointer-events','auto');},2500);
cuentamal++;
}
}  
}

if(cuentamal+cuentabien==5){
$('.alumbraobj').css('opacity','0.4');
$('.alumbraobj').css('pointer-events','none');
setTimeout(function(){
$('#slider').css('margin-top','5%');
$('#slider').css('margin-bottom','3%');
$('.peso').css('margin-bottom','2%');
$('.peso').css('display','inline-block');
$('#escuchar').css('display','inline-block');
$('#muestrame1').css('display','inline');
document.getElementById('muestrame1').className = "muestrame1";	
},1500);
setTimeout(function(){
$('#escuchar').css('opacity','1');
$('#escuchar').css('pointer-events','auto');
document.getElementById('escuchar').className = "bigbang";
},8000);
}
}

function finaliza(){
$('#q1').css('display','none');
$('.sig').css('display','none');
$('#listeniando').css('display','none');
$('#r1').css('display','none');
$('.listeniando').css('display','none');
$('#escuchar').css('display','none');
resultado(cuentabien,5);
}

function bichin(){
$('#r1').css('opacity','0.2');
$('#perendengues1').css('display','none');
$('#reproduce00').css('display','none');
$('#e1').css('display','none');
$('#what_are_you_going_to_do_tomorrow').css('pointer-events','none');
$('.centered-btns_nav').css('visibility','hidden');
}

function carga(){
$('.centered-btns_nav').css('visibility','visible'); 
$('#what_are_you_going_to_do_tomorrow').css('pointer-events','auto'); 
$('#e1').css('display','inline'); 
$('#perendengues1').css('display','inline'); 
$('#reproduce00').css('display','inline'); 
$('#r1').css('opacity','1');
}