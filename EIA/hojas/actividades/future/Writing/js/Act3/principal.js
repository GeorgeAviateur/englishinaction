var i=0;
var aux=0;
var aux1=0;
var aux00=0;
var aux11=0;
var ubic="";
var cuentabien=0;
var cuentamal=0;
var activar = new Array(7);
var activar1 = new Array(7);
var suplente = new Array(7);
var suplente1 = new Array(7);
var a1="";
var a2="";
var a3="";
var a4="";
var a5="";
var a6="";
var a7="";
var guardando="";
var recibe="";
var respuesta="";
var lock=false;
var compara="";
var audio;
var pausito;
var m=0;
var homero1=0;
var homero2=0;
var homero3=0;
var homero4=0;
var homero5=0;
var homero6=0;
var homero7=0;
var homero11=0;
var homero22=0;
var homero33=0;
var homero44=0;
var homero55=0;
var homero66=0;
var homero77=0;
var cosiño=0;
var cosiño1=0;
var contador=0;
var contador1=0;
var contador2=0;
var contador3=0;
var contador4=0;
var contador5=0;
var contador6=0;
var bart1=0;
var bart2=0;
var bart3=0;
var bart4=0;
var bart11=0;
var bart22=0;
var bart33=0;
var bart44=0;
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
function activaaudio(){


if((ubic=="sarah_is_going_to_dance_tango")&&((activar[0] == 1)||(suplente[0] == 1))){
if(activar[0] == 1){
audio=document.getElementById('a1');
}else
if(suplente[0] == 1){
audio=document.getElementById('cc1');	
}
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce").css('display','inline');
$("#pause").css('display','none');
m++;
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce").css('display','none');
$("#pause").css('display','inline'); 
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
$("#reproduce").css('opacity','0.4');
$('#reproduce').css('pointer-events','none');
$("#reproduce00").css('opacity','0.4');
$('#reproduce00').css('pointer-events','none');
}
}

//------------------------------------------

if((ubic=="louis_is_going_to_eat_a_sandwich")&&((activar[1] == 1)||(suplente[1] == 1))){
if(activar[1] == 1){
audio=document.getElementById('a2');		
}else
if(suplente[1] == 1){
audio=document.getElementById('cc2');
}
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce1").css('display','inline');
$("#pause").css('display','none');
m++;
contador1++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce1").css('display','none');
$("#pause").css('display','inline'); 
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

//------------------------------------------

if((ubic=="ana_is_going_to_listen_to_music")&&((activar[2] == 1)||(suplente[2] == 1))){
if(activar[2] == 1){
audio=document.getElementById('a3');	
}else
if(suplente[2] == 1){
audio=document.getElementById('cc3');
}
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce2").css('display','inline');
$("#pause").css('display','none');
m++;
contador2++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce2").css('display','none');
$("#pause").css('display','inline'); 
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

//------------------------------------------

if((ubic=="john_is_going_to_drink_tequila")&&((activar[3] == 1)||(suplente[3] == 1))){
if(activar[3] == 1){
audio=document.getElementById('a4');
}else
if(suplente[3] == 1){	
audio=document.getElementById('cc4');
}
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce3").css('display','inline');
$("#pause").css('display','none');
m++;
contador3++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce3").css('display','none');
$("#pause").css('display','inline');
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

//------------------------------------------

if((ubic=="karen_and_nancy_are_going_to_the_gym")&&((activar[4] == 1)||(suplente[4] == 1))){
if(activar[4] == 1){
audio=document.getElementById('a5');
}else
if(suplente[4] == 1){
audio=document.getElementById('cc5');	
}
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce4").css('display','inline');
$("#pause").css('display','none');
m++;
contador4++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce4").css('display','none');
$("#pause").css('display','inline'); 
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

//------------------------------------------

if((ubic=="penny_isnt_going_to_eat_fast_food")&&((activar[5] == 1)||(suplente[5] == 1)||(bart1== 1))){
if(activar[5] == 1){
audio=document.getElementById('a6');
}else
if(suplente[5] == 1){
audio=document.getElementById('cc6_1');	
}
if(bart1== 1){
audio=document.getElementById('cc6_2');	
}
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce5").css('display','inline');
$("#pause").css('display','none');
m++;
contador5++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce5").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
m++;
}
if (contador5==1){
$('#perendengues6').css('pointer-events','auto'); 
document.getElementById("primero5").checked = true;
$('#perendengues6').css('pointer-events','none'); 
}
if (contador5==2){
$('#perendengues6').css('pointer-events','auto'); 
document.getElementById("segundo5").checked = true;
$('#perendengues6').css('pointer-events','none'); 
}
if (contador5==3){
$('#perendengues6').css('pointer-events','auto'); 
document.getElementById("tercero5").checked = true;
$('#perendengues6').css('pointer-events','none'); 
$("#reproduce5").css('opacity','0.4');
$('#reproduce5').css('pointer-events','none');
$("#reproduce55").css('opacity','0.4');
$('#reproduce55').css('pointer-events','none');
}
}

//------------------------------------------

if((ubic=="alexa_isnt_going_to_exercise")&&((activar[6] == 1)||(suplente[6] == 1)||(bart2== 1))){
if(activar[6] == 1){
audio=document.getElementById('a7');	
}else
if(suplente[6] == 1){
audio=document.getElementById('cc7_1');
}
if(bart2== 1){
audio=document.getElementById('cc7_2');	
}
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce6").css('display','inline');
$("#pause").css('display','none');
m++;
contador6++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce6").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
m++;
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
$("#reproduce6").css('opacity','0.4');
$('#reproduce6').css('pointer-events','none');
$("#reproduce66").css('opacity','0.4');
$('#reproduce66').css('pointer-events','none');
}
}
}
//---------------------------------------------------------------------------------------------------------------------------
function activaaudio1(){

if((more==0)&&((activar1[0] == 1)||(suplente1[0] == 1))){
if(activar1[0] == 1){
audio=document.getElementById('a1');
}else
if(suplente1[0] == 1){
audio=document.getElementById('cc1');	
}
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
$("#reproduce").css('opacity','0.4');
$('#reproduce').css('pointer-events','none');
}
}
//------------------------------------------------------
if((more==1)&&((activar1[1] == 1)||(suplente1[1] == 1))){
if(activar1[1] == 1){
audio=document.getElementById('a2');	
}else
if(suplente1[1] == 1){
audio=document.getElementById('cc2');
}
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
$("#reproduce11").css('opacity','0.4');
$('#reproduce11').css('pointer-events','none');
$("#reproduce1").css('opacity','0.4');
$('#reproduce1').css('pointer-events','none');
}
}

//------------------------------------------------------
if((more==2)&&((activar1[2] == 1)||(suplente1[2] == 1))){
if(activar1[2] == 1){
audio=document.getElementById('a3');	
}else
if(suplente1[2] == 1){
audio=document.getElementById('cc3');
}
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
$("#reproduce22").css('opacity','0.4');
$('#reproduce22').css('pointer-events','none');
$("#reproduce2").css('opacity','0.4');
$('#reproduce2').css('pointer-events','none');
}
}
//------------------------------------------------------
if((more==3)&&((activar1[3] == 1)||(suplente1[3] == 1))){
if(activar1[3] == 1){
audio=document.getElementById('a4');
}else
if(suplente1[3] == 1){
audio=document.getElementById('cc4');
}
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
$("#reproduce33").css('opacity','0.4');
$('#reproduce33').css('pointer-events','none');
$("#reproduce3").css('opacity','0.4');
$('#reproduce3').css('pointer-events','none');
}
}
//------------------------------------------------------
if((more==4)&&((activar1[4] == 1)||(suplente1[4] == 1))){
if(activar1[4] == 1){
audio=document.getElementById('a5');
}else
if(suplente1[4] == 1){
audio=document.getElementById('cc5');	
}
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
$("#reproduce44").css('opacity','0.4');
$('#reproduce44').css('pointer-events','none');
$("#reproduce4").css('opacity','0.4');
$('#reproduce4').css('pointer-events','none');
}
}
//------------------------------------------------------
if((more==5)&&((activar1[5] == 1)||(suplente1[5] == 1)||(bart11== 1))){
if(activar1[5] == 1){
audio=document.getElementById('a6');
}else
if(suplente1[5] == 1){
audio=document.getElementById('cc6_1');	
}else
if(bart11== 1){
audio=document.getElementById('cc6_2');	
}
pausito = document.getElementById("pause1");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce55").css('display','inline');
$("#pause1").css('display','none');
m++;
contador5++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce55").css('display','none');
$("#pause1").css('display','inline'); 
audio.currentTime = 0;
m++;
}
if (contador5==1){
$('#perendengues6').css('pointer-events','auto'); 
document.getElementById("primero5").checked = true;
$('#perendengues6').css('pointer-events','none'); 
}
if (contador5==2){
$('#perendengues6').css('pointer-events','auto'); 
document.getElementById("segundo5").checked = true;
$('#perendengues6').css('pointer-events','none'); 
}
if (contador5==3){
$('#perendengues6').css('pointer-events','auto'); 
document.getElementById("tercero5").checked = true;
$('#perendengues6').css('pointer-events','none'); 
$("#reproduce55").css('opacity','0.4');
$('#reproduce55').css('pointer-events','none');
$("#reproduce5").css('opacity','0.4');
$('#reproduce5').css('pointer-events','none');
}
}
//------------------------------------------------------
if(((more==6)||(more==-1))&&((activar1[6] == 1)||(suplente1[6] == 1)||(bart22== 1))){
if(activar1[6] == 1){
audio=document.getElementById('a7');
}else
if(suplente1[6] == 1){
audio=document.getElementById('cc7_1');
}else
if(bart22== 1){
audio=document.getElementById('cc7_2');	
}
pausito = document.getElementById("pause1");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce66").css('display','inline');
$("#pause1").css('display','none');
m++;
contador6++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce66").css('display','none');
$("#pause1").css('display','inline'); 
audio.currentTime = 0;
m++;
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
$("#reproduce6").css('opacity','0.4');
$('#reproduce6').css('pointer-events','none');
}
}
}
//----------------------------------------------------------------------------------------------------------------------------
function c(id){ 
var el = document.getElementById("myRoundabout");
var as = el.getElementsByTagName("li");
var form1 = document.getElementById("form2");
for (i=0; i<as.length; i++) {
document.form3.resultado.value = id;
//-------------------------------------------------
if (id=="louis_is_going_to_eat_a_sandwich"){
$('.campos').css('display','none');
$('#campo2').css('display','inline');
$('.botoncitos').css('display','none');
$('#button2').css('display','inline');
$('.sig').css('display','none');
$('#button2').css('display','inline');
$('.perendengues').css('display','none');
$('#perendengues2').css('display','inline');
if(cosiño==0){
$('.elnav').css('display','none');
$('#reproduce1').css('display','inline');
}
$('.pq').css('display','none');
$('#mostrando22').css('display','inline');
$('.tituliños').css('display','none');
$('#resultado2').css('display','inline');
}
//-------------------------------------------------
if (id=="ana_is_going_to_listen_to_music"){
$('.campos').css('display','none');
$('#campo3').css('display','inline');
$('.botoncitos').css('display','none');
$('#button3').css('display','inline');
$('.sig').css('display','none');
$('#button3').css('display','inline');
$('.perendengues').css('display','none');
$('#perendengues3').css('display','inline');
if(cosiño==0){
$('.elnav').css('display','none');
$('#reproduce2').css('display','inline');
}
$('.pq').css('display','none');
$('#mostrando33').css('display','inline');
$('.tituliños').css('display','none');
$('#resultado3').css('display','inline');
}
//-------------------------------------------------
if (id=="john_is_going_to_drink_tequila"){
$('.campos').css('display','none');
$('#campo4').css('display','inline');
$('.botoncitos').css('display','none');
$('#button4').css('display','inline');
$('.sig').css('display','none');
$('#button4').css('display','inline');
$('.perendengues').css('display','none');
$('#perendengues4').css('display','inline');
if(cosiño==0){
$('.elnav').css('display','none');
$('#reproduce3').css('display','inline');
}
$('.pq').css('display','none');
$('#mostrando44').css('display','inline');
$('.tituliños').css('display','none');
$('#resultado4').css('display','inline');
}
//-------------------------------------------------
if (id=="karen_and_nancy_are_going_to_the_gym"){
$('.campos').css('display','none');
$('#campo5').css('display','inline');
$('.botoncitos').css('display','none');
$('#button5').css('display','inline');
$('.sig').css('display','none');
$('#button5').css('display','inline');
$('.perendengues').css('display','none');
$('#perendengues5').css('display','inline');
if(cosiño==0){
$('.elnav').css('display','none');
$('#reproduce4').css('display','inline');
}
$('.pq').css('display','none');
$('#mostrando55').css('display','inline');
$('.tituliños').css('display','none');
$('#resultado5').css('display','inline');
}
//-------------------------------------------------
if (id=="penny_isnt_going_to_eat_fast_food"){
$('.campos').css('display','none');
$('#campo6').css('display','inline');
$('.botoncitos').css('display','none');
$('#button6').css('display','inline');
$('.sig').css('display','none');
$('#button6').css('display','inline');
$('.perendengues').css('display','none');
$('#perendengues6').css('display','inline');
if(cosiño==0){
$('.elnav').css('display','none');
$('#reproduce5').css('display','inline');
}
$('.pq').css('display','none');
$('#mostrando66').css('display','inline');
$('.tituliños').css('display','none');
$('#resultado6').css('display','inline');
}
//-------------------------------------------------
if (id=="alexa_isnt_going_to_exercise"){
$('.campos').css('display','none');
$('#campo7').css('display','inline');
$('.botoncitos').css('display','none');
$('#button7').css('display','inline');
$('.sig').css('display','none');
$('#button7').css('display','inline');
$('.perendengues').css('display','none');
$('#perendengues7').css('display','inline');
if(cosiño==0){
$('.elnav').css('display','none');
$('#reproduce6').css('display','inline');
}
$('.pq').css('display','none');
$('#mostrando77').css('display','inline');
$('.tituliños').css('display','none');
$('#resultado7').css('display','inline');
}
//-------------------------------------------------
if (id=="sarah_is_going_to_dance_tango"){
$('.campos').css('display','none');
$('#campo1').css('display','inline');
$('.botoncitos').css('display','none');
$('#button1').css('display','inline');
$('.sig').css('display','none');
$('#button1').css('display','inline');
$('.perendengues').css('display','none');
$('#perendengues1').css('display','inline');
if(cosiño==0){
$('.elnav').css('display','none');
$('#reproduce').css('display','inline');
}
$('.pq').css('display','none');
$('#mostrando11').css('display','inline');
$('.pq').css('display','none');
$('#mostrando11').css('display','inline');
$('.tituliños').css('display','none');
$('#resultado1').css('display','inline');
}
}
ubic=id;
}
//---------------------------------------------------------------------------------------------------------------------------
function capturar(){ 
respuesta="";
respuesta=form3.resultado.value;
//-------------------------------------------------
if (ubic=="sarah_is_going_to_dance_tango"){
recibe=document.getElementById("campo1").value;
}
//-------------------------------------------------
if (ubic=="louis_is_going_to_eat_a_sandwich"){
recibe=document.getElementById("campo2").value;
}
//-------------------------------------------------
if (ubic=="ana_is_going_to_listen_to_music"){
recibe=document.getElementById("campo3").value;
}
//-------------------------------------------------
if (ubic=="john_is_going_to_drink_tequila"){
recibe=document.getElementById("campo4").value;
}
//-------------------------------------------------
if (ubic=="karen_and_nancy_are_going_to_the_gym"){
recibe=document.getElementById("campo5").value;
}
//-------------------------------------------------
if (ubic=="penny_isnt_going_to_eat_fast_food"){
recibe=document.getElementById("campo6").value;
}
//-------------------------------------------------
if (ubic=="alexa_isnt_going_to_exercise"){
recibe=document.getElementById("campo7").value;
recibe=recibe.replace(/\s/g,"_");
respuesta=respuesta.replace(/\s/g,"_");
if (recibe=="alexa_doesn't_like_doing_exercise"){
respuesta="alexa_doesn't_like_doing_exercise";
}
}
//-------------------------------------------------
recibe=recibe.replace(/\s/g,"_");
respuesta=respuesta.replace(/\s/g,"_");
//-------------------------------------------------
if(lock==false){
compara=respuesta;
lock=true;
}

if(compara!=respuesta){
lock=false;
compara="";
}
//-------------------------------------------------
if(((ubic=="sarah_is_going_to_dance_tango")&&((recibe=="Sarah_is_going_to_dance_tango")||(recibe=="SARAH_IS_GOING_TO_DANCE_TANGO")||(recibe=="Sarah_will_dance_tango")||(recibe=="SARAH_WILL_DANCE_TANGO")))||((ubic=="louis_is_going_to_eat_a_sandwich")&&((recibe=="Louis_is_going_to_eat_a_sandwich")||(recibe=="LOUIS_IS_GOING_TO_EAT_A_SANDWICH")||(recibe=="Louis_will_eat_a_sandwich")||(recibe=="LOUIS_WILL_EAT_A_SANDWICH"))) ||((ubic=="ana_is_going_to_listen_to_music")&&((recibe=="Ana_is_going_to_listen_to_music")||(recibe=="ANA_IS_GOING_TO_LISTEN_TO_MUSIC")||(recibe=="Ana_will_listen_to_music")||(recibe=="ANA_WILL_LISTEN_TO_MUSIC"))) ||((ubic=="john_is_going_to_drink_tequila")&&((recibe=="John_is_going_to_drink_tequila")||(recibe=="JOHN_IS_GOING_TO_DRINK_TEQUILA")||(recibe=="John_will_drink_tequila")||(recibe=="JOHN_WILL_DRINK_TEQUILA")))||((ubic=="karen_and_nancy_are_going_to_the_gym")&&((recibe=="Karen_and_Nancy_are_going_to_the_gym")||(recibe=="KAREN_AND_NANCY_ARE_GOING_TO_THE_GYM")||(recibe=="Karen_and_Nancy_will_go_to_the_gym")||(recibe=="KAREN_AND_NANCY_WILL_GO_TO_THE_GYM")))||((ubic=="alexa_isnt_going_to_exercise")&&((recibe=="Alexa_isn't_going_to_exercise")||(recibe=="ALEXA_ISN'T_GOING_TO_EXERCISE")||(recibe=="Alexa_is_not_going_to_exercise")||(recibe=="ALEXA_IS_NOT_GOING_TO_EXERCISE")||(recibe=="Alexa_will_not_exercise")||(recibe=="ALEXA_WILL_NOT_EXERCISE")||(recibe=="Alexa_won't_exercise")||(recibe=="ALEXA_WON'T_EXERCISE")))||((ubic=="penny_isnt_going_to_eat_fast_food")&&((recibe=="Penny_isn't_going_to_eat_fast_food")||(recibe=="Penny_is_not_going_to_eat_fast_food")||(recibe=="PENNY_ISN'T_GOING_TO_EAT_FAST_FOOD")||(recibe=="PENNY_IS_NOT_GOING_TO_EAT_FAST_FOOD")||(recibe=="Penny_will_not_eat_fast_food")||(recibe=="PENNY_WILL_NOT_EAT_FAST_FOOD")||(recibe=="Penny_won't_eat_fast_food")||(recibe=="PENNY_WON'T_EAT_FAST_FOOD")))   ){ 
document.getElementById(ubic).disabled = true;
if((recibe=="Sarah_is_going_to_dance_tango")||(recibe=="SARAH_IS_GOING_TO_DANCE_TANGO")||(recibe=="Sarah_will_dance_tango")||(recibe=="SARAH_WILL_DANCE_TANGO")){
if((recibe=="Sarah_is_going_to_dance_tango")||(recibe=="SARAH_IS_GOING_TO_DANCE_TANGO")){ 
activar[0] = 1;
}else
if((recibe=="Sarah_will_dance_tango")||(recibe=="SARAH_WILL_DANCE_TANGO")){ 
suplente[0] = 1;
}
$('#campo1').css('pointer-events','none'); 
$('#campo1').css('border','3px solid #308c58');
$('#campo1').css('opacity','0.6');
$('#button1').css('opacity','0.6');
$('#button1').css('pointer-events','none'); 
bigbang11.classList.remove('bigbang');
setTimeout(function(){
$('#reproduce').css('opacity','0.9');
$('#reproduce').css('pointer-events','auto'); 
},2000);
homero1=1; 
document.form4.sarah_is_going_to_dance_tango.value = document.form2.sarah_is_going_to_dance_tango.value;
document.getElementById('e1').click();
}
//--------------------------------------
if((recibe=="Louis_is_going_to_eat_a_sandwich")||(recibe=="LOUIS_IS_GOING_TO_EAT_A_SANDWICH")||(recibe=="Louis_will_eat_a_sandwich")||(recibe=="LOUIS_WILL_EAT_A_SANDWICH")){
if((recibe=="Louis_is_going_to_eat_a_sandwich")||(recibe=="LOUIS_IS_GOING_TO_EAT_A_SANDWICH")){ 
activar[1] = 1;
}else
if((recibe=="Louis_will_eat_a_sandwich")||(recibe=="LOUIS_WILL_EAT_A_SANDWICH")){ 
suplente[1] = 1;
}
$('#campo2').css('pointer-events','none'); 
$('#campo2').css('border','3px solid #308c58');
$('#campo2').css('opacity','0.6');
$('#button2').css('opacity','0.6');
$('#button2').css('pointer-events','none');
bigbang22.classList.remove('bigbang');
setTimeout(function(){
$('#reproduce1').css('opacity','0.9');
$('#reproduce1').css('pointer-events','auto'); 
},2000);
homero2=1;
document.form4.louis_is_going_to_eat_a_sandwich.value = document.form2.louis_is_going_to_eat_a_sandwich.value;
document.getElementById('e2').click();
}

//--------------------------------------
if((recibe=="Ana_is_going_to_listen_to_music")||(recibe=="ANA_IS_GOING_TO_LISTEN_TO_MUSIC")||(recibe=="Ana_will_listen_to_music")||(recibe=="ANA_WILL_LISTEN_TO_MUSIC")){
if((recibe=="Ana_is_going_to_listen_to_music")||(recibe=="ANA_IS_GOING_TO_LISTEN_TO_MUSIC")){ 
activar[2] = 1;
}else
if((recibe=="Ana_will_listen_to_music")||(recibe=="ANA_WILL_LISTEN_TO_MUSIC")){ 
suplente[2] = 1;
}
$('#campo3').css('pointer-events','none'); 
$('#campo3').css('border','3px solid #308c58');
$('#campo3').css('opacity','0.6');
$('#button3').css('opacity','0.6');
$('#button3').css('pointer-events','none');
bigbang33.classList.remove('bigbang');
setTimeout(function(){
$('#reproduce2').css('opacity','0.9');
$('#reproduce2').css('pointer-events','auto'); 
},2000);
homero3=1;
document.form4.ana_is_going_to_listen_to_music.value = document.form2.ana_is_going_to_listen_to_music.value;
document.getElementById('e3').click();
}

//--------------------------------------
if((recibe=="John_is_going_to_drink_tequila")||(recibe=="JOHN_IS_GOING_TO_DRINK_TEQUILA")||(recibe=="John_will_drink_tequila")||(recibe=="JOHN_WILL_DRINK_TEQUILA")){
if((recibe=="John_is_going_to_drink_tequila")||(recibe=="JOHN_IS_GOING_TO_DRINK_TEQUILA")){ 
activar[3] = 1;
}else
if((recibe=="John_will_drink_tequila")||(recibe=="JOHN_WILL_DRINK_TEQUILA")){ 
suplente[3] = 1;
}
$('#campo4').css('pointer-events','none'); 
$('#campo4').css('border','3px solid #308c58');
$('#campo4').css('opacity','0.6');
$('#button4').css('opacity','0.6');
$('#button4').css('pointer-events','none');
bigbang44.classList.remove('bigbang');
setTimeout(function(){$('#reproduce3').css('opacity','0.9');$('#reproduce3').css('pointer-events','auto'); 
},2000);
homero4=1; 
document.form4.john_is_going_to_drink_tequila.value = document.form2.john_is_going_to_drink_tequila.value;
document.getElementById('e4').click();
}

//--------------------------------------
if((recibe=="Karen_and_Nancy_are_going_to_the_gym")||(recibe=="KAREN_AND_NANCY_ARE_GOING_TO_THE_GYM")||(recibe=="Karen_and_Nancy_will_go_to_the_gym")||(recibe=="KAREN_AND_NANCY_WILL_GO_TO_THE_GYM")){
if((recibe=="Karen_and_Nancy_are_going_to_the_gym")||(recibe=="KAREN_AND_NANCY_ARE_GOING_TO_THE_GYM")){ 
activar[4] = 1;
}else
if((recibe=="Karen_and_Nancy_will_go_to_the_gym")||(recibe=="KAREN_AND_NANCY_WILL_GO_TO_THE_GYM")){ 
suplente[4] = 1;
}
$('#campo5').css('pointer-events','none'); 
$('#campo5').css('border','3px solid #308c58');
$('#campo5').css('opacity','0.6');
$('#button5').css('opacity','0.6');
$('#button5').css('pointer-events','none');
bigbang55.classList.remove('bigbang');
setTimeout(function(){$('#reproduce4').css('opacity','0.9');$('#reproduce4').css('pointer-events','auto'); },2000);
homero5=1;
document.form4.karen_and_nancy_are_going_to_the_gym.value = document.form2.karen_and_nancy_are_going_to_the_gym.value;
document.getElementById('e5').click();
}
//--------------------------------------
if ((recibe=="Penny_isn't_going_to_eat_fast_food")||(recibe=="PENNY_ISN'T_GOING_TO_EAT_FAST_FOOD")||(recibe=="Penny_is_not_going_to_eat_fast_food")||(recibe=="PENNY_IS_NOT_GOING_TO_EAT_FAST_FOOD")||(recibe=="Penny_will_not_eat_fast_food")||(recibe=="PENNY_WILL_NOT_EAT_FAST_FOOD")||(recibe=="Penny_won't_eat_fast_food")||(recibe=="PENNY_WON'T_EAT_FAST_FOOD")){
if ((recibe=="Penny_isn't_going_to_eat_fast_food")||(recibe=="PENNY_ISN'T_GOING_TO_EAT_FAST_FOOD")||(recibe=="Penny_is_not_going_to_eat_fast_food")||(recibe=="PENNY_IS_NOT_GOING_TO_EAT_FAST_FOOD")){
activar[5] = 1;
}else
if((recibe=="Penny_will_not_eat_fast_food")||(recibe=="PENNY_WILL_NOT_EAT_FAST_FOOD")||(recibe=="Penny_won't_eat_fast_food")||(recibe=="PENNY_WON'T_EAT_FAST_FOOD")){ 
if((recibe=="Penny_will_not_eat_fast_food")||(recibe=="PENNY_WILL_NOT_EAT_FAST_FOOD")){ 
suplente[5] = 1;
}
if((recibe=="Penny_won't_eat_fast_food")||(recibe=="PENNY_WON'T_EAT_FAST_FOOD")){ 
bart1= 1;
}
}
$('#campo6').css('pointer-events','none'); 
$('#campo6').css('border','3px solid #308c58');
$('#campo6').css('opacity','0.6');
$('#button6').css('opacity','0.6');
$('#button6').css('pointer-events','none');
bigbang66.classList.remove('bigbang');
setTimeout(function(){$('#reproduce5').css('opacity','0.9');$('#reproduce5').css('pointer-events','auto'); },2000);
homero6=1;
document.form4.penny_isnt_going_to_eat_fast_food.value = document.form2.penny_isnt_going_to_eat_fast_food.value;
document.getElementById('e6').click();
}

//--------------------------------------
if((recibe=="Alexa_isn't_going_to_exercise")||(recibe=="ALEXA_ISN'T_GOING_TO_EXERCISE")||(recibe=="Alexa_is_not_going_to_exercise")||(recibe=="ALEXA_IS_NOT_GOING_TO_EXERCISE")||(recibe=="Alexa_will_not_exercise")||(recibe=="ALEXA_WILL_NOT_EXERCISE")||(recibe=="Alexa_won't_exercise")||(recibe=="ALEXA_WON'T_EXERCISE")){
if((recibe=="Alexa_isn't_going_to_exercise")||(recibe=="ALEXA_ISN'T_GOING_TO_EXERCISE")||(recibe=="Alexa_is_not_going_to_exercise")||(recibe=="ALEXA_IS_NOT_GOING_TO_EXERCISE")){
activar[6] = 1;
}else
if((recibe=="Alexa_will_not_exercise")||(recibe=="ALEXA_WILL_NOT_EXERCISE")||(recibe=="Alexa_won't_exercise")||(recibe=="ALEXA_WON'T_EXERCISE")){ 
if((recibe=="Alexa_will_not_exercise")||(recibe=="ALEXA_WILL_NOT_EXERCISE")){ 
suplente[6] = 1;
}
if((recibe=="Alexa_won't_exercise")||(recibe=="ALEXA_WON'T_EXERCISE")){ 
bart2= 1;
}
}
$('#campo7').css('pointer-events','none'); 
$('#campo7').css('border','3px solid #308c58');
$('#campo7').css('opacity','0.6');
$('#button7').css('opacity','0.6');
$('#button7').css('pointer-events','none');
bigbang77.classList.remove('bigbang');
setTimeout(function(){$('#reproduce6').css('opacity','0.9');$('#reproduce6').css('pointer-events','auto'); },2000);
homero7=1;
document.form4.alexa_isnt_going_to_exercise.value = document.form2.alexa_isnt_going_to_exercise.value;
document.getElementById('e7').click();
}
//-------------------------------------------------
$('#'+ubic).css('opacity','0.6');
document.getElementById('bien').play();
}
else{
aux++;
aux1++;
if(aux<=2){
document.getElementById('sorry').play();

document.form4.sarah_is_going_to_dance_tango.value = document.form2.sarah_is_going_to_dance_tango.value;
document.form4.louis_is_going_to_eat_a_sandwich.value = document.form2.louis_is_going_to_eat_a_sandwich.value;
document.form4.ana_is_going_to_listen_to_music.value = document.form2.ana_is_going_to_listen_to_music.value;
document.form4.john_is_going_to_drink_tequila.value = document.form2.john_is_going_to_drink_tequila.value;
document.form4.karen_and_nancy_are_going_to_the_gym.value = document.form2.karen_and_nancy_are_going_to_the_gym.value;
document.form4.penny_isnt_going_to_eat_fast_food.value = document.form2.penny_isnt_going_to_eat_fast_food.value;
document.form4.alexa_isnt_going_to_exercise.value = document.form2.alexa_isnt_going_to_exercise.value;

if(ubic=="sarah_is_going_to_dance_tango"){
$('#campo1').css('border','3px solid #fc484c');
$(form4.sarah_is_going_to_dance_tango).css('border','3px solid #fc484c');
}

if(ubic=="louis_is_going_to_eat_a_sandwich"){
$('#campo2').css('border','3px solid #fc484c');
$(form4.louis_is_going_to_eat_a_sandwich).css('border','3px solid #fc484c');
}

if(ubic=="ana_is_going_to_listen_to_music"){
$('#campo3').css('border','3px solid #fc484c');
$(form4.ana_is_going_to_listen_to_music).css('border','3px solid #fc484c');
}

if (ubic=="john_is_going_to_drink_tequila"){
$('#campo4').css('border','3px solid #fc484c');
$(form4.john_is_going_to_drink_tequila).css('border','3px solid #fc484c');
}

if (ubic=="karen_and_nancy_are_going_to_the_gym"){
$('#campo5').css('border','3px solid #fc484c');
$(form4.karen_and_nancy_are_going_to_the_gym).css('border','3px solid #fc484c');
}

if (ubic=="penny_isnt_going_to_eat_fast_food"){
$('#campo6').css('border','3px solid #fc484c');
$(form4.penny_isnt_going_to_eat_fast_food).css('border','3px solid #fc484c');
}

if (ubic=="alexa_isnt_going_to_exercise"){
$('#campo7').css('border','3px solid #fc484c');
$(form4.alexa_isnt_going_to_exercise).css('border','3px solid #fc484c');
}

}

//-------------------------------------------------
if ((aux==3)&&(ubic=="sarah_is_going_to_dance_tango")){
document.getElementById('t1').play();
setTimeout(function(){ $('#caifanes1').css('display','inline'); $('#reproduce').css('opacity','0.9'); activar[0] = 1; document.getElementById('reproduce').click(); $('#reproduce').css('pointer-events','auto'); $('#velk1').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo1').css('pointer-events','none'); 
bigbang11.classList.remove('bigbang');
$('#campo1').css('opacity','0.6');
$('#button1').css('opacity','0.6');
$('#button1').css('pointer-events','none');
document.getElementById('button1').disabled = true; 
homero11=1;
document.form4.sarah_is_going_to_dance_tango.value = document.form2.sarah_is_going_to_dance_tango.value;
document.getElementById('e1').click();
}
//-------------------------------------------------

if ((aux==3)&&(ubic=="louis_is_going_to_eat_a_sandwich")){
document.getElementById('t1').play();
setTimeout(function(){ $('#caifanes2').css('display','inline');$('#reproduce1').css('opacity','0.9');activar[1] = 1; document.getElementById('reproduce1').click(); $('#reproduce1').css('pointer-events','auto'); $('#velk2').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo2').css('pointer-events','none'); 
bigbang22.classList.remove('bigbang');
$('#campo2').css('opacity','0.6');
$('#button2').css('opacity','0.6');
$('#button2').css('pointer-events','none');
homero22=1;
document.form4.louis_is_going_to_eat_a_sandwich.value = document.form2.louis_is_going_to_eat_a_sandwich.value;
document.getElementById('e2').click();
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="ana_is_going_to_listen_to_music")){
document.getElementById('t1').play();
setTimeout(function(){ $('#caifanes3').css('display','inline');  $('#reproduce2').css('opacity','0.9');activar[2] = 1; document.getElementById('reproduce2').click(); $('#reproduce2').css('pointer-events','auto'); $('#velk3').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo3').css('pointer-events','none'); 
bigbang33.classList.remove('bigbang');
$('#campo3').css('opacity','0.6');
$('#button3').css('opacity','0.6');
$('#button3').css('pointer-events','none'); 
homero33=1;
document.form4.ana_is_going_to_listen_to_music.value = document.form2.ana_is_going_to_listen_to_music.value;
document.getElementById('e3').click();
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="john_is_going_to_drink_tequila")){
document.getElementById('t1').play();
setTimeout(function(){ $('#caifanes4').css('display','inline'); $('#reproduce3').css('opacity','0.9');activar[3] = 1; document.getElementById('reproduce3').click(); $('#reproduce3').css('pointer-events','auto'); $('#velk4').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo4').css('pointer-events','none'); 
bigbang44.classList.remove('bigbang');
$('#campo4').css('opacity','0.6');
$('#button4').css('opacity','0.6');
$('#button4').css('pointer-events','none');
homero44=1;
document.form4.john_is_going_to_drink_tequila.value = document.form2.john_is_going_to_drink_tequila.value;
document.getElementById('e4').click();
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="karen_and_nancy_are_going_to_the_gym")){
document.getElementById('t1').play();
setTimeout(function(){ $('#caifanes5').css('display','inline'); $('#reproduce4').css('opacity','0.9');activar[4] = 1; document.getElementById('reproduce4').click(); $('#reproduce4').css('pointer-events','auto');$('#velk5').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo5').css('pointer-events','none'); 
bigbang55.classList.remove('bigbang');
$('#campo5').css('opacity','0.6');
$('#button5').css('opacity','0.6');
$('#button5').css('pointer-events','none');
homero55=1;
document.form4.karen_and_nancy_are_going_to_the_gym.value = document.form2.karen_and_nancy_are_going_to_the_gym.value;
document.getElementById('e5').click();
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="penny_isnt_going_to_eat_fast_food")){
document.getElementById('t1').play();
setTimeout(function(){$('#caifanes6').css('display','inline'); $('#reproduce5').css('opacity','0.9');activar[5] = 1; document.getElementById('reproduce5').click(); $('#reproduce5').css('pointer-events','auto'); $('#velk6').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo6').css('pointer-events','none'); 
bigbang66.classList.remove('bigbang');
$('#campo6').css('opacity','0.6');
$('#button6').css('opacity','0.6');
$('#button6').css('pointer-events','none');
homero66=1;
document.form4.penny_isnt_going_to_eat_fast_food.value = document.form2.penny_isnt_going_to_eat_fast_food.value;
document.getElementById('e6').click();
}

//-------------------------------------------------
if ((aux==3)&&(ubic=="alexa_isnt_going_to_exercise")){
document.getElementById('t1').play();
setTimeout(function(){ $('#caifanes7').css('display','inline'); $('#reproduce6').css('opacity','0.9');activar[6] = 1; document.getElementById('reproduce6').click();$('#reproduce6').css('pointer-events','auto');$('#velk7').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo7').css('pointer-events','none'); 
bigbang77.classList.remove('bigbang');
$('#campo7').css('opacity','0.6');
$('#button7').css('opacity','0.6');
$('#button7').css('pointer-events','none');
homero77=1;
document.form4.alexa_isnt_going_to_exercise.value = document.form2.alexa_isnt_going_to_exercise.value;
document.getElementById('e7').click();
}
}
recibe="";
}
//---------------------------------------------------------------------------------------------------------------------------
function capturar1(botoncito){
var form2 = document.getElementById("form4");
for (i=0;i<form2.elements.length;i++){
a1=form2.sarah_is_going_to_dance_tango.value;
a2=form2.louis_is_going_to_eat_a_sandwich.value;
a3=form2.ana_is_going_to_listen_to_music.value;
a4=form2.john_is_going_to_drink_tequila.value;
a5=form2.karen_and_nancy_are_going_to_the_gym.value;
a6=form2.penny_isnt_going_to_eat_fast_food.value;
a7=form2.alexa_isnt_going_to_exercise.value;
a1=a1.replace(/\s/g,"_");
a2=a2.replace(/\s/g,"_");
a3=a3.replace(/\s/g,"_");
a4=a4.replace(/\s/g,"_");
a5=a5.replace(/\s/g,"_");
a6=a6.replace(/\s/g,"_");
a7=a7.replace(/\s/g,"_");
}

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

if ((a1=="Sarah_is_going_to_dance_tango")||(a1=="SARAH_IS_GOING_TO_DANCE_TANGO")||(a1=="Sarah_will_dance_tango")||(a1=="SARAH_WILL_DANCE_TANGO")) {
if ((a1=="Sarah_is_going_to_dance_tango")||(a1=="SARAH_IS_GOING_TO_DANCE_TANGO")) {
activar1[0] = 1;
}else
if((a1=="Sarah_will_dance_tango")||(a1=="SARAH_WILL_DANCE_TANGO")){ 
suplente1[0] = 1;
}
$('#sarah_is_going_to_dance_tango1').css('opacity','0.6');
$(form2.sarah_is_going_to_dance_tango).css('pointer-events','none'); 
$(form2.sarah_is_going_to_dance_tango).css('border','3px solid #308c58');
$(form2.sarah_is_going_to_dance_tango).css('opacity','0.6');
$('#e1').css('pointer-events','none'); 
$('#e1').css('opacity','0.6');
bigbang1.classList.remove('bigbang');
setTimeout(function(){
$('#reproduce00').css('opacity','0.9');
$('#reproduce00').css('pointer-events','auto'); 
},2000);
document.form2.sarah_is_going_to_dance_tango.value = document.form4.sarah_is_going_to_dance_tango.value;
document.getElementById('button1').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
$(form2.sarah_is_going_to_dance_tango).css('border','3px solid #fc484c');
$('#campo1').css('border','3px solid #fc484c');
$('#numeracion0').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a1!="sarah_is_going_to_dance_tango")){
$(form2.sarah_is_going_to_dance_tango).css('pointer-events','none'); 
$('#sarah_is_going_to_dance_tango1').css('opacity','0.6');
form2.sarah_is_going_to_dance_tango.disabled = "disabled";
$(form2.sarah_is_going_to_dance_tango).css('opacity','0.6');
$('#e1').css('pointer-events','none'); 
$('#e1').css('opacity','0.6');
bigbang1.classList.remove('bigbang');
setTimeout(function(){$('#mostra1').css('display','inline');$('#reproduce00').css('opacity','0.9'); activar1[0] = 1; $('#reproduce00').css('pointer-events','auto'); $('#lisa1').css('display','none');/*$('#campiño1').css('display','none');*/},2500);
document.form2.sarah_is_going_to_dance_tango.value = document.form4.sarah_is_going_to_dance_tango.value;
aux--;
capturar();
}
}  
}

//-------------------------------------------------
if (botoncito=="e2"){
if ((a2=="Louis_is_going_to_eat_a_sandwich")||(a2=="LOUIS_IS_GOING_TO_EAT_A_SANDWICH")||(a2=="Louis_will_eat_a_sandwich")||(a2=="LOUIS_WILL_EAT_A_SANDWICH")){
if ((a2=="Louis_is_going_to_eat_a_sandwich")||(a2=="LOUIS_IS_GOING_TO_EAT_A_SANDWICH")){
activar1[1] = 1;
}else
if((a2=="Louis_will_eat_a_sandwich")||(a2=="LOUIS_WILL_EAT_A_SANDWICH")){ 
suplente1[1] = 1;
}
$('#louis_is_going_to_eat_a_sandwich1').css('opacity','0.6');
$(form2.louis_is_going_to_eat_a_sandwich).css('pointer-events','none'); 
$(form2.louis_is_going_to_eat_a_sandwich).css('border','3px solid #308c58');
$(form2.louis_is_going_to_eat_a_sandwich).css('opacity','0.6');
$('#e2').css('pointer-events','none'); 
$('#e2').css('opacity','0.6');
bigbang2.classList.remove('bigbang');
setTimeout(function(){$('#reproduce11').css('opacity','0.9'); $('#reproduce11').css('pointer-events','auto'); },2000);
document.form2.louis_is_going_to_eat_a_sandwich.value = document.form4.louis_is_going_to_eat_a_sandwich.value;
document.getElementById('button2').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
$(form2.louis_is_going_to_eat_a_sandwich).css('border','3px solid #fc484c');
$('#campo2').css('border','3px solid #fc484c');
$('#numeracion1').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a2!="louis_is_going_to_eat_a_sandwich")){
$(form2.louis_is_going_to_eat_a_sandwich).css('pointer-events','none'); 
$('#louis_is_going_to_eat_a_sandwich1').css('opacity','0.6');
$(form2.louis_is_going_to_eat_a_sandwich).css('opacity','0.6');
$('#e2').css('pointer-events','none'); 
$('#e2').css('opacity','0.6');
bigbang2.classList.remove('bigbang');
setTimeout(function(){$('#mostra2').css('display','inline'); $('#reproduce11').css('opacity','0.9');activar1[1] = 1;$('#reproduce11').css('pointer-events','auto');$('#lisa2').css('display','none');/*$('#campiño2').css('display','none');*/ },2500);
document.form2.louis_is_going_to_eat_a_sandwich.value = document.form4.louis_is_going_to_eat_a_sandwich.value;
aux--;
capturar();
}
}
}
//-------------------------------------------------
if (botoncito=="e3"){
if ((a3=="Ana_is_going_to_listen_to_music")||(a3=="ANA_IS_GOING_TO_LISTEN_TO_MUSIC")||(a3=="Ana_will_listen_to_music")||(a3=="ANA_WILL_LISTEN_TO_MUSIC")){
if ((a3=="Ana_is_going_to_listen_to_music")||(a3=="ANA_IS_GOING_TO_LISTEN_TO_MUSIC")){
activar1[2] = 1;
}else
if((a3=="Ana_will_listen_to_music")||(a3=="ANA_WILL_LISTEN_TO_MUSIC")){ 
suplente1[2] = 1;
}
$('#ana_is_going_to_listen_to_music1').css('opacity','0.6');
$(form2.ana_is_going_to_listen_to_music).css('pointer-events','none'); 
$(form2.ana_is_going_to_listen_to_music).css('border','3px solid #308c58');
$(form2.ana_is_going_to_listen_to_music).css('opacity','0.6');
$('#e3').css('pointer-events','none'); 
$('#e3').css('opacity','0.6');
bigbang3.classList.remove('bigbang');
setTimeout(function(){$('#reproduce22').css('opacity','0.9');$('#reproduce22').css('pointer-events','auto');},2000);
document.form2.ana_is_going_to_listen_to_music.value = document.form4.ana_is_going_to_listen_to_music.value;
document.getElementById('button3').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
$(form2.ana_is_going_to_listen_to_music).css('border','3px solid #fc484c');
$('#campo3').css('border','3px solid #fc484c');
$('#numeracion2').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a3!="ana_is_going_to_listen_to_music")){
$('#ana_is_going_to_listen_to_music1').css('opacity','0.6');
$(form2.ana_is_going_to_listen_to_music).css('pointer-events','none'); 
$(form2.ana_is_going_to_listen_to_music).css('opacity','0.6');
$('#e3').css('pointer-events','none'); 
$('#e3').css('opacity','0.6');
bigbang3.classList.remove('bigbang');
setTimeout(function(){$('#mostra3').css('display','inline'); $('#reproduce22').css('opacity','0.9');activar1[2] = 1;$('#reproduce22').css('pointer-events','auto');$('#lisa3').css('display','none');/*$('#campiño3').css('display','none');*/ },2500);
document.form2.ana_is_going_to_listen_to_music.value = document.form4.ana_is_going_to_listen_to_music.value;
aux--;
capturar();
}
}
}

//-------------------------------------------------
if (botoncito=="e4"){
if ((a4=="John_is_going_to_drink_tequila")||(a4=="JOHN_IS_GOING_TO_DRINK_TEQUILA")||(a4=="John_will_drink_tequila")||(a4=="JOHN_WILL_DRINK_TEQUILA")){
if ((a4=="John_is_going_to_drink_tequila")||(a4=="JOHN_IS_GOING_TO_DRINK_TEQUILA")){ 
activar1[3] = 1;
}else
if((a4=="John_will_drink_tequila")||(a4=="JOHN_WILL_DRINK_TEQUILA")){ 
suplente1[3] = 1;
}
$('#john_is_going_to_drink_tequila1').css('opacity','0.6');
$(form2.john_is_going_to_drink_tequila).css('pointer-events','none'); 
$(form2.john_is_going_to_drink_tequila).css('border','3px solid #308c58');
$(form2.john_is_going_to_drink_tequila).css('opacity','0.6');
$('#e4').css('pointer-events','none'); 
$('#e4').css('opacity','0.6');
bigbang4.classList.remove('bigbang');
setTimeout(function(){
$('#reproduce33').css('opacity','0.9');
$('#reproduce33').css('pointer-events','auto'); 
},2000);
document.form2.john_is_going_to_drink_tequila.value = document.form4.john_is_going_to_drink_tequila.value;
document.getElementById('button4').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
$(form2.john_is_going_to_drink_tequila).css('border','3px solid #fc484c');
$('#campo4').css('border','3px solid #fc484c');
$('#numeracion3').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a4!="john_is_going_to_drink_tequila")){
$('#john_is_going_to_drink_tequila1').css('opacity','0.6');
$(form2.john_is_going_to_drink_tequila).css('pointer-events','none'); 
$(form2.john_is_going_to_drink_tequila).css('opacity','0.6');
$('#e4').css('pointer-events','none'); 
$('#e4').css('opacity','0.6');
bigbang4.classList.remove('bigbang');
setTimeout(function(){$('#mostra4').css('display','inline');$('#reproduce33').css('opacity','0.9');activar1[3] = 1;$('#reproduce33').css('pointer-events','auto');$('#lisa4').css('display','none');/*$('#campiño4').css('display','none');*/},2500);
document.form2.john_is_going_to_drink_tequila.value = document.form4.john_is_going_to_drink_tequila.value;
aux--;
capturar();
}
}
}

//-------------------------------------------------
if (botoncito=="e5"){
if ((a5=="Karen_and_Nancy_are_going_to_the_gym")||(a5=="KAREN_AND_NANCY_ARE_GOING_TO_THE_GYM")||(a5=="Karen_and_Nancy_will_go_to_the_gym")||(a5=="KAREN_AND_NANCY_WILL_GO_TO_THE_GYM")){
if ((a5=="Karen_and_Nancy_are_going_to_the_gym")||(a5=="KAREN_AND_NANCY_ARE_GOING_TO_THE_GYM")){
activar1[4] = 1;
}else
if((a5=="Karen_and_Nancy_will_go_to_the_gym")||(a5=="KAREN_AND_NANCY_WILL_GO_TO_THE_GYM")){ 
suplente1[4] = 1;
}
$('#karen_and_nancy_are_going_to_the_gym1').css('opacity','0.6');
$(form2.karen_and_nancy_are_going_to_the_gym).css('pointer-events','none'); 
$(form2.karen_and_nancy_are_going_to_the_gym).css('border','3px solid #308c58');
$(form2.karen_and_nancy_are_going_to_the_gym).css('opacity','0.6');
$('#e5').css('pointer-events','none'); 
$('#e5').css('opacity','0.6');
bigbang5.classList.remove('bigbang');
setTimeout(function(){$('#reproduce44').css('opacity','0.9');$('#reproduce44').css('pointer-events','auto');},2000);
document.form2.karen_and_nancy_are_going_to_the_gym.value = document.form4.karen_and_nancy_are_going_to_the_gym.value;
document.getElementById('button5').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
$(form2.karen_and_nancy_are_going_to_the_gym).css('border','3px solid #fc484c');
$('#campo5').css('border','3px solid #fc484c');
$('#numeracion4').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a5!="karen_and_nancy_are_going_to_the_gym")){
$('#karen_and_nancy_are_going_to_the_gym1').css('opacity','0.6');
$(form2.karen_and_nancy_are_going_to_the_gym).css('pointer-events','none'); 
$(form2.karen_and_nancy_are_going_to_the_gym).css('opacity','0.6');
$('#e5').css('pointer-events','none'); 
$('#e5').css('opacity','0.6');
bigbang5.classList.remove('bigbang');
setTimeout(function(){$('#mostra5').css('display','inline'); $('#reproduce44').css('opacity','0.9');activar1[4] = 1;$('#reproduce44').css('pointer-events','auto');$('#lisa5').css('display','none');/*$('#campiño5').css('display','none');*/},2500);
document.form2.karen_and_nancy_are_going_to_the_gym.value = document.form4.karen_and_nancy_are_going_to_the_gym.value;
aux--;
capturar();
}
}
}

//-------------------------------------------------
if (botoncito=="e6"){
if ((a6=="Penny_isn't_going_to_eat_fast_food")||(a6=="Penny_is_not_going_to_eat_fast_food")||(a6=="PENNY_ISN'T_GOING_TO_EAT_FAST_FOOD")||(a6=="PENNY_IS_NOT_GOING_TO_EAT_FAST_FOOD")||(a6=="Penny_will_not_eat_fast_food")||(a6=="Penny_won't_eat_fast_food")||(a6=="PENNY_WILL_NOT_EAT_FAST_FOOD")||(a6=="PENNY_WON'T_EAT_FAST_FOOD")){
if ((a6=="Penny_isn't_going_to_eat_fast_food")||(a6=="Penny_is_not_going_to_eat_fast_food")||(a6=="PENNY_ISN'T_GOING_TO_EAT_FAST_FOOD")||(a6=="PENNY_IS_NOT_GOING_TO_EAT_FAST_FOOD")){
activar1[5] = 1;
}else
if((a6=="Penny_will_not_eat_fast_food")||(a6=="Penny_won't_eat_fast_food")||(a6=="PENNY_WILL_NOT_EAT_FAST_FOOD")||(a6=="PENNY_WON'T_EAT_FAST_FOOD")){ 
if((a6=="Penny_will_not_eat_fast_food")||(a6=="PENNY_WILL_NOT_EAT_FAST_FOOD")){ 
suplente1[5] = 1;
}
if((a6=="Penny_won't_eat_fast_food")||(a6=="PENNY_WON'T_EAT_FAST_FOOD")){ 
bart11= 1;
}
}
$('#penny_isnt_going_to_eat_fast_food1').css('opacity','0.6');
$(form2.penny_isnt_going_to_eat_fast_food).css('pointer-events','none'); 
$(form2.penny_isnt_going_to_eat_fast_food).css('border','3px solid #308c58');
$(form2.penny_isnt_going_to_eat_fast_food).css('opacity','0.6');
$('#e6').css('pointer-events','none'); 
$('#e6').css('opacity','0.6');
bigbang6.classList.remove('bigbang');
setTimeout(function(){$('#reproduce55').css('opacity','0.9');$('#reproduce55').css('pointer-events','auto');},2000);
document.form2.penny_isnt_going_to_eat_fast_food.value = document.form4.penny_isnt_going_to_eat_fast_food.value;
document.getElementById('button6').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
$(form2.penny_isnt_going_to_eat_fast_food).css('border','3px solid #fc484c');
$('#campo6').css('border','3px solid #fc484c');
$('#numeracion5').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a6!="penny_isnt_going_to_eat_fast_food")){
$('#penny_isnt_going_to_eat_fast_food1').css('opacity','0.6');
$(form2.penny_isnt_going_to_eat_fast_food).css('pointer-events','none'); 
$(form2.penny_isnt_going_to_eat_fast_food).css('opacity','0.6');
$('#e6').css('pointer-events','none'); 
$('#e6').css('opacity','0.6');
bigbang6.classList.remove('bigbang');
setTimeout(function(){$('#mostra6').css('display','inline');$('#reproduce55').css('opacity','0.9');activar1[5] = 1;$('#reproduce55').css('pointer-events','auto');$('#lisa6').css('display','none');/*$('#campiño6').css('display','none');*/},2500);
document.form2.penny_isnt_going_to_eat_fast_food.value = document.form4.penny_isnt_going_to_eat_fast_food.value;
aux--;
capturar();
}
}
}

//-------------------------------------------------
if (botoncito=="e7"){
if ((a7=="Alexa_isn't_going_to_exercise")||(a7=="Alexa_is_not_going_to_exercise")||(a7=="ALEXA_ISN'T_GOING_TO_EXERCISE")||(a7=="ALEXA_IS_NOT_GOING_TO_EXERCISE")||(a7=="Alexa_will_not_exercise")||(a7=="Alexa_won't_exercise")||(a7=="ALEXA_WILL_NOT_EXERCISE")||(a7=="ALEXA_WON'T_EXERCISE")){
if ((a7=="Alexa_isn't_going_to_exercise")||(a7=="Alexa_is_not_going_to_exercise")||(a7=="ALEXA_ISN'T_GOING_TO_EXERCISE")||(a7=="ALEXA_IS_NOT_GOING_TO_EXERCISE")){ 
activar1[6] = 1;
}else
if((a7=="Alexa_will_not_exercise")||(a7=="Alexa_won't_exercise")||(a7=="ALEXA_WILL_NOT_EXERCISE")||(a7=="ALEXA_WON'T_EXERCISE")){ 
if((a7=="Alexa_will_not_exercise")||(a7=="ALEXA_WILL_NOT_EXERCISE")){ 
suplente1[6] = 1;
}
if((a7=="Alexa_won't_exercise")||(a7=="ALEXA_WON'T_EXERCISE")){ 
bart22= 1;
}
}	
$('#alexa_isnt_going_to_exercise1').css('opacity','0.6');
$(form2.alexa_isnt_going_to_exercise).css('pointer-events','none'); 
$(form2.alexa_isnt_going_to_exercise).css('border','3px solid #308c58');
$(form2.alexa_isnt_going_to_exercise).css('opacity','0.6');
$('#e7').css('pointer-events','none'); 
$('#e7').css('opacity','0.6');
bigbang7.classList.remove('bigbang');
setTimeout(function(){$('#reproduce66').css('opacity','0.9');$('#reproduce66').css('pointer-events','auto');},2000);
document.form2.alexa_isnt_going_to_exercise.value = document.form4.alexa_isnt_going_to_exercise.value;
document.getElementById('button7').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
$(form2.alexa_isnt_going_to_exercise).css('border','3px solid #fc484c');
$('#campo7').css('border','3px solid #fc484c');
$('#numeracion6').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a7!="alexa_isnt_going_to_exercise")){
$('#alexa_isnt_going_to_exercise1').css('opacity','0.6');
$(form2.alexa_isnt_going_to_exercise).css('pointer-events','none'); 
$(form2.alexa_isnt_going_to_exercise).css('opacity','0.6');
$('#e7').css('pointer-events','none'); 
$('#e7').css('opacity','0.6');
bigbang7.classList.remove('bigbang');
setTimeout(function(){$('#mostra7').css('display','inline');$('#reproduce66').css('opacity','0.9');activar1[6] = 1;$('#reproduce66').css('pointer-events','auto');$('#lisa7').css('display','none');/*$('#campiño7').css('display','none');*/},2500);
document.form2.alexa_isnt_going_to_exercise.value = document.form4.alexa_isnt_going_to_exercise.value;
aux--;
capturar();
}
}
}

//----------------------------

cuentabien=homero1+homero2+homero3+homero4+homero5+homero6+homero7;
cuentamal=homero11+homero22+homero33+homero44+homero55+homero66+homero77;
if(cuentabien+cuentamal==7){
$('.alumbraobj').css('opacity','0.4');
$('.alumbraobj').css('pointer-events','none');
setTimeout(function(){
$('#escuchar').css('display','inline-block');
$('#escuchar2').css('display','inline-block');
$('#muestrame1').css('display','inline');
document.getElementById('muestrame1').className = "muestrame1";	
},1500);

setTimeout(function(){
$('#escuchar').css('opacity','1');
$('#escuchar').css('pointer-events','auto');
$('#escuchar2').css('opacity','1');
$('#escuchar2').css('pointer-events','auto');
document.getElementById('escuchar2').className = "bigbang";
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
resultado(cuentabien,7);
}

function bichin(){ 
$('.sig').css('display','none');
$('.perendengues').css('display','none');
$('.elnav').css('display','none');
}

function carga(){
$('.sig').css('opacity','1');
$('.centered-btns_nav').css('visibility','visible'); 
$('#r1').css('opacity','1');
$('.escritura').css('display','block'); 
$('#e1').css('display','inline'); 
$('#button1').css('display','inline'); 
$('#reproduce').css('display','inline'); 
$('#reproduce00').css('display','inline'); 
$('#perendengues1').css('display','inline'); 
$('.campos').css('pointer-events','auto'); 
$('li').css('pointer-events','auto'); 
}