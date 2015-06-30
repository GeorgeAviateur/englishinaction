var i=0;
var aux=0;
var ubic="";
var ficty=0;
var ficty1=0;
var cuentabien=0;
var cuentamal=0;
var activar1 = new Array(5);
var auxiliar = new Array(5);
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
var m11=0;
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
var aux11=0,aux22=1;
//---------------------------------------------------------------------------------------------------------------------------
function validarn(e) { 
tecla = (document.all) ? e.keyCode : e.which; 
if (tecla==8) return true; 
if (tecla==9) return true; 
if (tecla==11) return true; 
patron = /[A-Za-zñÑ'áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛÑñäëïöüÄËÏÖÜ\s\t0-9]/; 
te = String.fromCharCode(tecla); 
return patron.test(te); 
}
//---------------------------------------------------------------------------------------------------------------------------
function activaaudio1(id){
if((more==0)&&(activar1[0] == 1)&&(externo==0)){
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

if((more==1)&&(activar1[1] == 1)&&(externo==0)){
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


if((more==2)&&(activar1[2] == 1)&&(externo==0)){
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

if((more==3)&&(activar1[3] == 1)&&(externo==0)){
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

if(((more==4)||(more==-1))&&(activar1[4] == 1)&&(externo==0)){
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
//-------------------------------------------------------------
if(externo==1){
audio=document.getElementById('audiotexto');
pausito = document.getElementById("pause1");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce66").css('display','inline');
$("#pause1").css('display','none');
m11++;
contador6++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce66").css('display','none');
$("#pause1").css('display','inline'); 
audio.currentTime = 0;
m11++;
}
if (contador6==1){
$('#perendengues7').css('pointer-events','auto'); 
document.getElementById("primero6").checked = true;
$('#perendengues7').css('pointer-events','none'); 
}
if (contador6==2){
$('#perendengues7').css('pointer-events','auto'); 
document.getElementById("segundo6").checked = true;
$('#perendengues7').css('pointer-events','none'); 
}
if (contador6==3){
$('#perendengues7').css('pointer-events','auto'); 
document.getElementById("tercero6").checked = true;
$('#perendengues7').css('pointer-events','none'); 

$("#reproduce66").css('opacity','0.4');
$('#reproduce66').css('pointer-events','none');
}
}
}
//---------------------------------------------------------------------------------------------------------------------------
function capturar(botoncito){
var form1 = document.getElementById("form2");
a1=form1.richard_and_jenny_are_going_on_holiday_to_hawaii.value;
a2=form1.richard_and_jenny_are_going_to_stay_at_a_hotel_next_to_the_beach.value;
a3=form1.jenny_is_going_to_work_at_a_bar_in_summer.value;
a4=form1.jenny_is_going_to_join_a_gym_to_lose_weight.value;
a5=form1.jenny_is_going_to_celebrate_richards_birthday_on_16th_august.value;
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
//-------------------------------------------------
if (botoncito=="e1"){
if ((a1 == "Richard_and_Jenny_are_going_on_holiday_to_Hawaii")||(a1 == "RICHARD_AND_JENNY_ARE_GOING_ON_HOLIDAY_TO_HAWAII")) {
document.getElementById('bien').play();
$('#richard_and_jenny_are_going_on_holiday_to_hawaii').css('opacity','0.6');
$(form2.richard_and_jenny_are_going_on_holiday_to_hawaii).css('pointer-events','none'); 
$(form2.richard_and_jenny_are_going_on_holiday_to_hawaii).css('border','3px solid #308c58');
$('#campiño1').css('border','3px solid #308c58');
$('#e1').css('pointer-events','none'); 
$('#e1').css('opacity','0.6');
bigbang11.classList.remove('bigbang');
setTimeout(function(){$('#reproduce00').css('opacity','0.9');$('#reproduce00').css('pointer-events','auto'); activar1[0] = 1;},700);
cuentabien++;
}
else{
aux++;
if(aux<=2){
document.getElementById('sorry').play();
$(form2.richard_and_jenny_are_going_on_holiday_to_hawaii).css('border','3px solid #fc484c');
$('#campiño1').css('border','3px solid #fc484c');
}
if ((aux>2)){
document.getElementById('t1').play();
$('#richard_and_jenny_are_going_on_holiday_to_hawaii').css('opacity','0.6');
$(form2.richard_and_jenny_are_going_on_holiday_to_hawaii).css('pointer-events','none'); 
bigbang11.classList.remove('bigbang');
$('#e1').css('pointer-events','none'); 
$('#e1').css('opacity','0.6');
$(form1.richard_and_jenny_are_going_on_holiday_to_hawaii).css('opacity','0.6');
setTimeout(function(){ $('#velk1').css('display','none'); $('#mostra1').css('display','inline'); $('#reproduce00').css('opacity','0.9');activar1[0] = 1; document.getElementById('reproduce00').click(); $('#reproduce00').css('pointer-events','auto');},3000);
cuentamal++;
}
}  
}
//***********************************************************************
if (botoncito=="e2"){
if ((a2=="Richard_and_Jenny_are_going_to_stay_at_a_hotel_next_to_the_beach")||(a2=="RICHARD_AND_JENNY_ARE_GOING_TO_STAY_AT_A_HOTEL_NEXT_TO_THE_BEACH")) {
document.getElementById('bien').play();
$('#richard_and_jenny_are_going_to_stay_at_a_hotel_next_to_the_beach').css('opacity','0.6');
$(form2.richard_and_jenny_are_going_to_stay_at_a_hotel_next_to_the_beach).css('pointer-events','none'); 
$(form2.richard_and_jenny_are_going_to_stay_at_a_hotel_next_to_the_beach).css('border','3px solid #308c58');
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
$(form2.richard_and_jenny_are_going_to_stay_at_a_hotel_next_to_the_beach).css('border','3px solid #fc484c');
$('#campiño2').css('border','3px solid #fc484c');
}
if ((aux>2)){
document.getElementById('t1').play();
$('#richard_and_jenny_are_going_to_stay_at_a_hotel_next_to_the_beach').css('opacity','0.6');
$(form2.richard_and_jenny_are_going_to_stay_at_a_hotel_next_to_the_beach).css('pointer-events','none'); 
bigbang22.classList.remove('bigbang');
$('#e2').css('pointer-events','none'); 
$('#e2').css('opacity','0.6');
$(form1.richard_and_jenny_are_going_to_stay_at_a_hotel_next_to_the_beach).css('opacity','0.6');
setTimeout(function(){$('#velk2').css('display','none'); $('#mostra2').css('display','inline'); $('#reproduce11').css('opacity','0.9');activar1[1] = 1; document.getElementById('reproduce11').click(); $('#reproduce11').css('pointer-events','auto');},3000);
cuentamal++;
}
}  
}
//****************************************************************************
if (botoncito=="e3"){
if ((a3=='Jenny_is_going_to_work_at_a_bar_in_summer')||(a3=='JENNY_IS_GOING_TO_WORK_AT_A_BAR_IN_SUMMER')) {
document.getElementById('bien').play();
$('#jenny_is_going_to_work_at_a_bar_in_summer').css('opacity','0.6');
$(form2.jenny_is_going_to_work_at_a_bar_in_summer).css('pointer-events','none'); 
$(form2.jenny_is_going_to_work_at_a_bar_in_summer).css('border','3px solid #308c58');
$('#campiño3').css('border','3px solid #308c58');
$(form1.jenny_is_going_to_work_at_a_bar_in_summer).css('opacity','0.6');
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
$(form2.jenny_is_going_to_work_at_a_bar_in_summer).css('border','3px solid #fc484c');
$('#campiño3').css('border','3px solid #fc484c');
}
if ((aux>2)){
document.getElementById('t1').play();
$('#jenny_is_going_to_work_at_a_bar_in_summer').css('opacity','0.6');
$(form2.jenny_is_going_to_work_at_a_bar_in_summer).css('pointer-events','none'); 
bigbang33.classList.remove('bigbang');
$('#e3').css('pointer-events','none'); 
$('#e3').css('opacity','0.6');
$(form1.jenny_is_going_to_work_at_a_bar_in_summer).css('opacity','0.6');
setTimeout(function(){$('#velk3').css('display','none'); $('#mostra3').css('display','inline'); $('#reproduce22').css('opacity','0.9');activar1[2] = 1; document.getElementById('reproduce22').click(); $('#reproduce22').css('pointer-events','auto');},3000);
cuentamal++;
}
}  
}
//**********************************************************************
if (botoncito=="e4"){
if ((a4=="Jenny_is_going_to_join_a_gym_to_lose_weight")||(a4=="JENNY_IS_GOING_TO_JOIN_A_GYM_TO_LOSE_WEIGHT")) {
document.getElementById('bien').play();
$(form2.jenny_is_going_to_join_a_gym_to_lose_weight).css('pointer-events','none'); 
$(form2.jenny_is_going_to_join_a_gym_to_lose_weight).css('border','3px solid #308c58');
$('#campiño4').css('border','3px solid #308c58');
$('#e4').css('pointer-events','none'); 
$('#e4').css('opacity','0.6');
$('#jenny_is_going_to_join_a_gym_to_lose_weight').css('opacity','0.6');
bigbang44.classList.remove('bigbang');
setTimeout(function(){$('#reproduce33').css('opacity','0.9');$('#reproduce33').css('pointer-events','auto'); activar1[3] = 1;},700);
cuentabien++;
}
else{
aux++;
if(aux<=2){
document.getElementById('sorry').play();
$(form2.jenny_is_going_to_join_a_gym_to_lose_weight).css('border','3px solid #fc484c');
$('#campiño4').css('border','3px solid #fc484c');
}
if ((aux>2)){
document.getElementById('t1').play();
$('#jenny_is_going_to_join_a_gym_to_lose_weight').css('opacity','0.6');
$(form2.jenny_is_going_to_join_a_gym_to_lose_weight).css('pointer-events','none'); 
bigbang44.classList.remove('bigbang');
$('#e4').css('pointer-events','none'); 
$('#e4').css('opacity','0.6');
$(form1.jenny_is_going_to_join_a_gym_to_lose_weight).css('opacity','0.6');
setTimeout(function(){$('#velk4').css('display','none'); $('#mostra4').css('display','inline'); $('#reproduce33').css('opacity','0.9');activar1[3] = 1; document.getElementById('reproduce33').click(); $('#reproduce33').css('pointer-events','auto');},3000);
cuentamal++;
}
}  
}
//********************************************************************
if (botoncito=="e5"){
if ((a5=="Jenny_is_going_to_celebrate_Richard's_birthday_on_16th_August")||(a5=="JENNY_IS_GOING_TO_CELEBRATE_RICHARDS_BIRTHDAY_ON_16TH_AUGUST")) {
document.getElementById('bien').play();
$(form2.jenny_is_going_to_celebrate_richards_birthday_on_16th_august).css('pointer-events','none'); 
$(form2.jenny_is_going_to_celebrate_richards_birthday_on_16th_august).css('border','3px solid #308c58');
$('#campiño5').css('border','3px solid #308c58');
$('#e5').css('pointer-events','none'); 
$('#e5').css('opacity','0.6');
bigbang55.classList.remove('bigbang');
$('#jenny_is_going_to_celebrate_richards_birthday_on_16th_august').css('opacity','0.6');
setTimeout(function(){$('#reproduce44').css('opacity','0.9');$('#reproduce44').css('pointer-events','auto'); activar1[4] = 1;},700);
cuentabien++;
}
else{
aux++;
if(aux<=2){
document.getElementById('sorry').play();
$(form2.jenny_is_going_to_celebrate_richards_birthday_on_16th_august).css('border','3px solid #fc484c');
$('#campiño5').css('border','3px solid #fc484c');
}
if ((aux>2)){
document.getElementById('t1').play();
$('#jenny_is_going_to_celebrate_richards_birthday_on_16th_august').css('opacity','0.6');
$(form2.jenny_is_going_to_celebrate_richards_birthday_on_16th_august).css('pointer-events','none');
bigbang55.classList.remove('bigbang');
$('#e5').css('pointer-events','none'); 
$('#e5').css('opacity','0.6');
$(form1.jenny_is_going_to_celebrate_richards_birthday_on_16th_august).css('opacity','0.6');
setTimeout(function(){ $('#velk5').css('display','none'); $('#mostra5').css('display','inline'); $('#reproduce44').css('opacity','0.9');activar1[4] = 1; document.getElementById('reproduce44').click(); $('#reproduce44').css('pointer-events','auto');},3000);
cuentamal++;
}
}  
}
//********************************************************************
if(cuentamal+cuentabien==5){
$('.alumbraobj').css('opacity','0.4');
$('.alumbraobj').css('pointer-events','none');
setTimeout(function(){
$('#slider').css('margin-top','5%');
$('#slider').css('margin-bottom','3%');
$('.peso').css('margin-bottom','1%');
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
resultado(cuentabien,6);	
}

function inicio(){	
externo=0;
$('#emergent').css('display','none');
$('#prev').css('display','none');
$('#continuar1').css('display','none');
$('#reproduce66').css('display','none');
$('#pause1').css('display','none');
$('#perendengues7').css('display','none');
$('#fito').css('display','inline');
$('#prev1').css('display','inline');
$('#e1').css('display','inline');
$('#blanco2').css('display','block');
if(more==0){
$('#perendengues1').css('display','inline');
$('#reproduce00').css('display','inline');
}
if(more==1){
$('#perendengues2').css('display','inline');
$('#reproduce11').css('display','inline');
}
if(more==2){
$('#perendengues3').css('display','inline');
$('#reproduce22').css('display','inline');
}
if(more==3){
$('#perendengues4').css('display','inline');
$('#reproduce33').css('display','inline');
}
if(more==4){
$('#perendengues5').css('display','inline');
$('#reproduce44').css('display','inline');
}
if((more==5)||(more==-1)){
$('#perendengues6').css('display','inline');
$('#reproduce55').css('display','inline');
}
if(m11!=0){
audio.pause();
audio.currentTime = 0;
}
otroauxiliarjaja++;
document.getElementById('bigbang1').className = "bigbang";
}

function volverarita(){
if(otroauxiliarjaja==2){
$('#prev1').css('opacity','0.4');
$('#prev1').css('pointer-events','none');
}

if(otroauxiliarjaja<3){	
externo=1;
}else{
externo=-1;	
}
if(m!=0){
audio.pause();
audio.currentTime = 0;
}
$('#blanco2').css('display','none');
$('#prev1').css('display','none');
$('#continuar').css('display','none');
$('#emergent').css('display','inline-block');
$('#prev').css('display','inline-block');
$('#continuar1').css('display','inline-block');
$('.perendengues').css('display','none');
$('.sig2').css('display','none');
$('#fito').css('display','none');
$('#reproduce66').css('display','inline-block');
$('#perendengues7').css('display','inline-block');
}

function bichin(){
$('#perendengues7').css('display','none');
$('#reproduce66').css('display','none');
$('#continuar1').css('display','none');
}

function carga(){
$('#emergent').css('opacity','1');
$('#blanco1').css('opacity','1');
$('#plane').addClass("muestrame");
$('aside').css('z-index','12');	
$('#continuar1').css('display','inline'); 
$('#continuar1').css('opacity','1');
$('#reproduce66').css('display','inline'); 
$('#perendengues7').css('display','inline'); 
document.getElementById('reproduce66').click();
temp=setTimeout(function(){
document.getElementById('bigbang1').className = "bigbang";
},58500);
}