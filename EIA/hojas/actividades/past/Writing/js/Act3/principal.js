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
if((ubic=="sofia_danced_salsa")&&(activar[0] == 1)){
audio=document.getElementById('a1');
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
if((ubic=="peter_ate_a_sandwich")&&(activar[1] == 1)){
audio=document.getElementById('a2');
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
if((ubic=="ana_listened_to_music")&&(activar[2] == 1)){
audio=document.getElementById('a3');
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
if((ubic=="john_drank_tequila")&&(activar[3] == 1)){
audio=document.getElementById('a4');
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
if((ubic=="karen_and_nancy_went_to_the_gym")&&(activar[4] == 1)){
audio=document.getElementById('a5');
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
if((ubic=="penny_didnt_eat_fast_food")&&(activar[5] == 1)){
audio=document.getElementById('a6');
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
if((ubic=="alexa_didnt_exercise")&&(activar[6] == 1)){
audio=document.getElementById('a7');
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
$("#reproduce").css('opacity','0.4');
$('#reproduce').css('pointer-events','none');
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
$("#reproduce11").css('opacity','0.4');
$('#reproduce11').css('pointer-events','none');
$("#reproduce1").css('opacity','0.4');
$('#reproduce1').css('pointer-events','none');
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
$("#reproduce22").css('opacity','0.4');
$('#reproduce22').css('pointer-events','none');
$("#reproduce2").css('opacity','0.4');
$('#reproduce2').css('pointer-events','none');
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
$("#reproduce33").css('opacity','0.4');
$('#reproduce33').css('pointer-events','none');
$("#reproduce3").css('opacity','0.4');
$('#reproduce3').css('pointer-events','none');
}
}
//------------------------------------------------------
if((more==4)&&(activar1[4] == 1)){
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
$("#reproduce44").css('opacity','0.4');
$('#reproduce44').css('pointer-events','none');
$("#reproduce4").css('opacity','0.4');
$('#reproduce4').css('pointer-events','none');
}
}
//------------------------------------------------------
if((more==5)&&(activar1[5] == 1)){
audio=document.getElementById('a6');
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
if(((more==6)||(more==-1))&&(activar1[6] == 1)){
audio=document.getElementById('a7');
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
if (id=="peter_ate_a_sandwich"){
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
if (id=="ana_listened_to_music"){
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
if (id=="john_drank_tequila"){
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
if (id=="karen_and_nancy_went_to_the_gym"){
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
if (id=="penny_didnt_eat_fast_food"){
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
if (id=="alexa_didnt_exercise"){
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
if (id=="sofia_danced_salsa"){
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
if (ubic=="sofia_danced_salsa"){
recibe=document.getElementById("campo1").value;
}
//-------------------------------------------------
if (ubic=="peter_ate_a_sandwich"){
recibe=document.getElementById("campo2").value;
}
//-------------------------------------------------
if (ubic=="ana_listened_to_music"){
recibe=document.getElementById("campo3").value;
}
//-------------------------------------------------
if (ubic=="john_drank_tequila"){
recibe=document.getElementById("campo4").value;
}
//-------------------------------------------------
if (ubic=="karen_and_nancy_went_to_the_gym"){
recibe=document.getElementById("campo5").value;
}
//-------------------------------------------------
if (ubic=="penny_didnt_eat_fast_food"){
recibe=document.getElementById("campo6").value;
}
//-------------------------------------------------
if (ubic=="alexa_didnt_exercise"){
recibe=document.getElementById("campo7").value;
//recibe=recibe.toLowerCase();
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
if(((ubic=="sofia_danced_salsa")&&((recibe=="Sofia_danced_salsa")||(recibe=="Sofía_danced_salsa")||(recibe=="SOFIA_DANCED_SALSA")||(recibe=="SOFÍA_DANCED_SALSA")))||((ubic=="peter_ate_a_sandwich")&&((recibe=="Peter_ate_a_sandwich")||(recibe=="PETER_ATE_A_SANDWICH"))) ||((ubic=="ana_listened_to_music")&&((recibe=="Ana_listened_to_music")||(recibe=="ANA_LISTENED_TO_MUSIC"))) ||((ubic=="john_drank_tequila")&&((recibe=="John_drank_tequila")||(recibe=="JOHN_DRANK_TEQUILA")))||((ubic=="karen_and_nancy_went_to_the_gym")&&((recibe=="Karen_and_Nancy_went_to_the_gym")||(recibe=="KAREN_AND_NANCY_WENT_TO_THE_GYM")))||((ubic=="alexa_didnt_exercise")&&((recibe=="Alexa_didn't_exercise")||(recibe=="ALEXA_DIDN'T_EXERCISE")||(recibe=="Alexa_did_not_exercise")||(recibe=="ALEXA_DID_NOT_EXERCISE")))||((ubic=="penny_didnt_eat_fast_food")&&((recibe=="Penny_didn't_eat_fast_food")||(recibe=="Penny_did_not_eat_fast_food")||(recibe=="PENNY_DIDN'T_EAT_FAST_FOOD")||(recibe=="PENNY_DID_NOT_EAT_FAST_FOOD")))   ){ 
document.getElementById(ubic).disabled = true;
if((recibe=="Sofia_danced_salsa")||(recibe=="Sofía_danced_salsa")||(recibe=="SOFIA_DANCED_SALSA")||(recibe=="SOFÍA_DANCED_SALSA")){
$('#campo1').css('pointer-events','none'); 
$('#campo1').css('border','3px solid #308c58');
$('#campo1').css('opacity','0.6');
$('#button1').css('opacity','0.6');
$('#button1').css('pointer-events','none'); 
bigbang11.classList.remove('bigbang');
setTimeout(function(){
$('#reproduce').css('opacity','0.9');
$('#reproduce').css('pointer-events','auto'); 
activar[0] = 1;
},2000);
homero1=1; 
document.form4.sofia_danced_salsa.value = document.form2.sofia_danced_salsa.value;
document.getElementById('e1').click();
}

//--------------------------------------
if((recibe=="Peter_ate_a_sandwich")||(recibe=="PETER_ATE_A_SANDWICH")){
$('#campo2').css('pointer-events','none'); 
$('#campo2').css('border','3px solid #308c58');
$('#campo2').css('opacity','0.6');
$('#button2').css('opacity','0.6');
$('#button2').css('pointer-events','none');
bigbang22.classList.remove('bigbang');
setTimeout(function(){
$('#reproduce1').css('opacity','0.9');
$('#reproduce1').css('pointer-events','auto'); 
activar[1] = 1;
},2000);
homero2=1;
document.form4.peter_ate_a_sandwich.value = document.form2.peter_ate_a_sandwich.value;
document.getElementById('e2').click();
}

//--------------------------------------
if((recibe=="Ana_listened_to_music")||(recibe=="ANA_LISTENED_TO_MUSIC")){
$('#campo3').css('pointer-events','none'); 
$('#campo3').css('border','3px solid #308c58');
$('#campo3').css('opacity','0.6');
$('#button3').css('opacity','0.6');
$('#button3').css('pointer-events','none');
bigbang33.classList.remove('bigbang');
setTimeout(function(){
$('#reproduce2').css('opacity','0.9');
$('#reproduce2').css('pointer-events','auto'); 
activar[2] = 1;
},2000);
homero3=1;
document.form4.ana_listened_to_music.value = document.form2.ana_listened_to_music.value;
document.getElementById('e3').click();
}

//--------------------------------------
if((recibe=="John_drank_tequila")||(recibe=="JOHN_DRANK_TEQUILA")){
$('#campo4').css('pointer-events','none'); 
$('#campo4').css('border','3px solid #308c58');
$('#campo4').css('opacity','0.6');
$('#button4').css('opacity','0.6');
$('#button4').css('pointer-events','none');
bigbang44.classList.remove('bigbang');
setTimeout(function(){$('#reproduce3').css('opacity','0.9');$('#reproduce3').css('pointer-events','auto'); 
activar[3] = 1;
},2000);
homero4=1; 
document.form4.john_drank_tequila.value = document.form2.john_drank_tequila.value;
document.getElementById('e4').click();
}

//--------------------------------------

if((recibe=="Karen_and_Nancy_went_to_the_gym")||(recibe=="KAREN_AND_NANCY_WENT_TO_THE_GYM")){
$('#campo5').css('pointer-events','none'); 
$('#campo5').css('border','3px solid #308c58');
$('#campo5').css('opacity','0.6');
$('#button5').css('opacity','0.6');
$('#button5').css('pointer-events','none');
bigbang55.classList.remove('bigbang');
setTimeout(function(){$('#reproduce4').css('opacity','0.9');$('#reproduce4').css('pointer-events','auto'); activar[4] = 1;},2000);
homero5=1;
document.form4.karen_and_nancy_went_to_the_gym.value = document.form2.karen_and_nancy_went_to_the_gym.value;
document.getElementById('e5').click();
}

//--------------------------------------
if ((recibe=="Penny_didn't_eat_fast_food")||(recibe=="Penny_did_not_eat_fast_food")||(recibe=="PENNY_DIDN'T_EAT_FAST_FOOD")||(recibe=="PENNY_DID_NOT_EAT_FAST_FOOD")){
$('#campo6').css('pointer-events','none'); 
$('#campo6').css('border','3px solid #308c58');
$('#campo6').css('opacity','0.6');
$('#button6').css('opacity','0.6');
$('#button6').css('pointer-events','none');
bigbang66.classList.remove('bigbang');
setTimeout(function(){$('#reproduce5').css('opacity','0.9');$('#reproduce5').css('pointer-events','auto'); activar[5] = 1;},2000);
homero6=1;
document.form4.penny_didnt_eat_fast_food.value = document.form2.penny_didnt_eat_fast_food.value;
document.getElementById('e6').click();
}

//--------------------------------------
if((recibe=="Alexa_didn't_exercise")||(recibe=="ALEXA_DIDN'T_EXERCISE")||(recibe=="Alexa_did_not_exercise")||(recibe=="ALEXA_DID_NOT_EXERCISE")){
$('#campo7').css('pointer-events','none'); 
$('#campo7').css('border','3px solid #308c58');
$('#campo7').css('opacity','0.6');
$('#button7').css('opacity','0.6');
$('#button7').css('pointer-events','none');
bigbang77.classList.remove('bigbang');
setTimeout(function(){$('#reproduce6').css('opacity','0.9');$('#reproduce6').css('pointer-events','auto'); activar[6] = 1;},2000);
homero7=1;
document.form4.alexa_didnt_exercise.value = document.form2.alexa_didnt_exercise.value;
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
document.form4.sofia_danced_salsa.value = document.form2.sofia_danced_salsa.value;
document.form4.peter_ate_a_sandwich.value = document.form2.peter_ate_a_sandwich.value;
document.form4.ana_listened_to_music.value = document.form2.ana_listened_to_music.value;
document.form4.john_drank_tequila.value = document.form2.john_drank_tequila.value;
document.form4.karen_and_nancy_went_to_the_gym.value = document.form2.karen_and_nancy_went_to_the_gym.value;
document.form4.penny_didnt_eat_fast_food.value = document.form2.penny_didnt_eat_fast_food.value;
document.form4.alexa_didnt_exercise.value = document.form2.alexa_didnt_exercise.value;

if(ubic=="sofia_danced_salsa"){
$('#campo1').css('border','3px solid #fc484c');
$(form4.sofia_danced_salsa).css('border','3px solid #fc484c');
}
if(ubic=="peter_ate_a_sandwich"){
$('#campo2').css('border','3px solid #fc484c');
$(form4.peter_ate_a_sandwich).css('border','3px solid #fc484c');
}
if(ubic=="ana_listened_to_music"){
$('#campo3').css('border','3px solid #fc484c');
$(form4.ana_listened_to_music).css('border','3px solid #fc484c');
}
if (ubic=="john_drank_tequila"){
$('#campo4').css('border','3px solid #fc484c');
$(form4.john_drank_tequila).css('border','3px solid #fc484c');
}
if (ubic=="karen_and_nancy_went_to_the_gym"){
$('#campo5').css('border','3px solid #fc484c');
$(form4.karen_and_nancy_went_to_the_gym).css('border','3px solid #fc484c');
}
if (ubic=="penny_didnt_eat_fast_food"){
$('#campo6').css('border','3px solid #fc484c');
$(form4.penny_didnt_eat_fast_food).css('border','3px solid #fc484c');
}
if (ubic=="alexa_didnt_exercise"){
$('#campo7').css('border','3px solid #fc484c');
$(form4.alexa_didnt_exercise).css('border','3px solid #fc484c');
}
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="sofia_danced_salsa")){
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
document.form4.sofia_danced_salsa.value = document.form2.sofia_danced_salsa.value;
document.getElementById('e1').click();
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="peter_ate_a_sandwich")){
document.getElementById('t1').play();
setTimeout(function(){ $('#caifanes2').css('display','inline'); $('#reproduce1').css('opacity','0.9');activar[1] = 1; document.getElementById('reproduce1').click(); $('#reproduce1').css('pointer-events','auto'); $('#velk2').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo2').css('pointer-events','none'); 
bigbang22.classList.remove('bigbang');
$('#campo2').css('opacity','0.6');
$('#button2').css('opacity','0.6');
$('#button2').css('pointer-events','none');
homero22=1;
document.form4.peter_ate_a_sandwich.value = document.form2.peter_ate_a_sandwich.value;
document.getElementById('e2').click();
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="ana_listened_to_music")){
document.getElementById('t1').play();
setTimeout(function(){ $('#caifanes3').css('display','inline'); $('#reproduce2').css('opacity','0.9');activar[2] = 1; document.getElementById('reproduce2').click(); $('#reproduce2').css('pointer-events','auto'); $('#velk3').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo3').css('pointer-events','none'); 
bigbang33.classList.remove('bigbang');
$('#campo3').css('opacity','0.6');
$('#button3').css('opacity','0.6');
$('#button3').css('pointer-events','none'); 
homero33=1;
document.form4.ana_listened_to_music.value = document.form2.ana_listened_to_music.value;
document.getElementById('e3').click();
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="john_drank_tequila")){
document.getElementById('t1').play();
setTimeout(function(){ $('#caifanes4').css('display','inline'); $('#reproduce3').css('opacity','0.9');activar[3] = 1; document.getElementById('reproduce3').click(); $('#reproduce3').css('pointer-events','auto'); $('#velk4').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo4').css('pointer-events','none'); 
bigbang44.classList.remove('bigbang');
$('#campo4').css('opacity','0.6');
$('#button4').css('opacity','0.6');
$('#button4').css('pointer-events','none');
homero44=1;
document.form4.john_drank_tequila.value = document.form2.john_drank_tequila.value;
document.getElementById('e4').click();
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="karen_and_nancy_went_to_the_gym")){
document.getElementById('t1').play();
setTimeout(function(){ $('#caifanes5').css('display','inline'); $('#reproduce4').css('opacity','0.9');activar[4] = 1; document.getElementById('reproduce4').click(); $('#reproduce4').css('pointer-events','auto');$('#velk5').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo5').css('pointer-events','none'); 
bigbang55.classList.remove('bigbang');
$('#campo5').css('opacity','0.6');
$('#button5').css('opacity','0.6');
$('#button5').css('pointer-events','none');
homero55=1;
document.form4.karen_and_nancy_went_to_the_gym.value = document.form2.karen_and_nancy_went_to_the_gym.value;
document.getElementById('e5').click();
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="penny_didnt_eat_fast_food")){
document.getElementById('t1').play();
setTimeout(function(){$('#caifanes6').css('display','inline'); $('#reproduce5').css('opacity','0.9');activar[5] = 1; document.getElementById('reproduce5').click(); $('#reproduce5').css('pointer-events','auto'); $('#velk6').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo6').css('pointer-events','none'); 
bigbang66.classList.remove('bigbang');
$('#campo6').css('opacity','0.6');
$('#button6').css('opacity','0.6');
$('#button6').css('pointer-events','none');
homero66=1;
document.form4.penny_didnt_eat_fast_food.value = document.form2.penny_didnt_eat_fast_food.value;
document.getElementById('e6').click();
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="alexa_didnt_exercise")){
document.getElementById('t1').play();
setTimeout(function(){ $('#caifanes7').css('display','inline'); $('#reproduce6').css('opacity','0.9');activar[6] = 1; document.getElementById('reproduce6').click();$('#reproduce6').css('pointer-events','auto');$('#velk7').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo7').css('pointer-events','none'); 
bigbang77.classList.remove('bigbang');
$('#campo7').css('opacity','0.6');
$('#button7').css('opacity','0.6');
$('#button7').css('pointer-events','none');
homero77=1;
document.form4.alexa_didnt_exercise.value = document.form2.alexa_didnt_exercise.value;
document.getElementById('e7').click();
}
}
recibe="";
}
//---------------------------------------------------------------------------------------------------------------------------
function capturar1(botoncito){
var form2 = document.getElementById("form4");
for (i=0;i<form2.elements.length;i++){
a1=form2.sofia_danced_salsa.value;
a2=form2.peter_ate_a_sandwich.value;
a3=form2.ana_listened_to_music.value;
a4=form2.john_drank_tequila.value;
a5=form2.karen_and_nancy_went_to_the_gym.value;
a6=form2.penny_didnt_eat_fast_food.value;
a7=form2.alexa_didnt_exercise.value;
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
if ((a1=="Sofia_danced_salsa")||(a1=="Sofía_danced_salsa")||(a1=="SOFIA_DANCED_SALSA")||(a1=="SOFÍA_DANCED_SALSA")) {
$('#sofia_danced_salsa1').css('opacity','0.6');
$(form2.sofia_danced_salsa).css('pointer-events','none'); 
$(form2.sofia_danced_salsa).css('border','3px solid #308c58');
$(form2.sofia_danced_salsa).css('opacity','0.6');
$('#e1').css('pointer-events','none'); 
$('#e1').css('opacity','0.6');
bigbang1.classList.remove('bigbang');
setTimeout(function(){
$('#reproduce00').css('opacity','0.9');
$('#reproduce00').css('pointer-events','auto'); 
activar1[0] = 1;
},2000);
document.form2.sofia_danced_salsa.value = document.form4.sofia_danced_salsa.value;
document.getElementById('button1').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
$(form2.sofia_danced_salsa).css('border','3px solid #fc484c');
$('#campo1').css('border','3px solid #fc484c');
$('#numeracion0').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a1!="sofia_danced_salsa")){
$(form2.sofia_danced_salsa).css('pointer-events','none'); 
$('#sofia_danced_salsa1').css('opacity','0.6');
form2.sofia_danced_salsa.disabled = "disabled";
$(form2.sofia_danced_salsa).css('opacity','0.6');
$('#e1').css('pointer-events','none'); 
$('#e1').css('opacity','0.6');
bigbang1.classList.remove('bigbang');
setTimeout(function(){$('#mostra1').css('display','inline'); $('#reproduce00').css('opacity','0.9'); activar1[0] = 1; $('#reproduce00').css('pointer-events','auto'); $('#lisa1').css('display','none');/*$('#campiño1').css('display','none');*/},2500);
document.form2.sofia_danced_salsa.value = document.form4.sofia_danced_salsa.value;
aux--;
capturar();
}
}  
}
//-------------------------------------------------
if (botoncito=="e2"){
if ((a2=="Peter_ate_a_sandwich")||(a2=="PETER_ATE_A_SANDWICH")){
$('#peter_ate_a_sandwich1').css('opacity','0.6');
$(form2.peter_ate_a_sandwich).css('pointer-events','none'); 
$(form2.peter_ate_a_sandwich).css('border','3px solid #308c58');
$(form2.peter_ate_a_sandwich).css('opacity','0.6');
$('#e2').css('pointer-events','none'); 
$('#e2').css('opacity','0.6');
bigbang2.classList.remove('bigbang');
setTimeout(function(){$('#reproduce11').css('opacity','0.9'); $('#reproduce11').css('pointer-events','auto'); activar1[1] = 1;},2000);
document.form2.peter_ate_a_sandwich.value = document.form4.peter_ate_a_sandwich.value;
document.getElementById('button2').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
$(form2.peter_ate_a_sandwich).css('border','3px solid #fc484c');
$('#campo2').css('border','3px solid #fc484c');
$('#numeracion1').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a2!="peter_ate_a_sandwich")){
$(form2.peter_ate_a_sandwich).css('pointer-events','none'); 
$('#peter_ate_a_sandwich1').css('opacity','0.6');
$(form2.peter_ate_a_sandwich).css('opacity','0.6');
$('#e2').css('pointer-events','none'); 
$('#e2').css('opacity','0.6');
bigbang2.classList.remove('bigbang');
setTimeout(function(){$('#mostra2').css('display','inline');$('#reproduce11').css('opacity','0.9');activar1[1] = 1;$('#reproduce11').css('pointer-events','auto');$('#lisa2').css('display','none');/*$('#campiño2').css('display','none');*/ },2500);
document.form2.peter_ate_a_sandwich.value = document.form4.peter_ate_a_sandwich.value;
aux--;
capturar();
}
}
}

//-------------------------------------------------
if (botoncito=="e3"){
if ((a3=="Ana_listened_to_music")||(a3=="ANA_LISTENED_TO_MUSIC")){
$('#ana_listened_to_music1').css('opacity','0.6');
$(form2.ana_listened_to_music).css('pointer-events','none'); 
$(form2.ana_listened_to_music).css('border','3px solid #308c58');
$(form2.ana_listened_to_music).css('opacity','0.6');
$('#e3').css('pointer-events','none'); 
$('#e3').css('opacity','0.6');
bigbang3.classList.remove('bigbang');
setTimeout(function(){$('#reproduce22').css('opacity','0.9');$('#reproduce22').css('pointer-events','auto'); activar1[2] = 1; },2000);
document.form2.ana_listened_to_music.value = document.form4.ana_listened_to_music.value;
document.getElementById('button3').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
$(form2.ana_listened_to_music).css('border','3px solid #fc484c');
$('#campo3').css('border','3px solid #fc484c');
$('#numeracion2').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a3!="ana_listened_to_music")){
$('#ana_listened_to_music1').css('opacity','0.6');
$(form2.ana_listened_to_music).css('pointer-events','none'); 
$(form2.ana_listened_to_music).css('opacity','0.6');
$('#e3').css('pointer-events','none'); 
$('#e3').css('opacity','0.6');
bigbang3.classList.remove('bigbang');
setTimeout(function(){$('#mostra3').css('display','inline'); $('#reproduce22').css('opacity','0.9');activar1[2] = 1;$('#reproduce22').css('pointer-events','auto');$('#lisa3').css('display','none');/*$('#campiño3').css('display','none');*/ },2500);
document.form2.ana_listened_to_music.value = document.form4.ana_listened_to_music.value;
aux--;
capturar();
}
}
}

//-------------------------------------------------
if (botoncito=="e4"){
if ((a4=="John_drank_tequila")||(a4=="JOHN_DRANK_TEQUILA")){
$('#john_drank_tequila1').css('opacity','0.6');
$(form2.john_drank_tequila).css('pointer-events','none'); 
$(form2.john_drank_tequila).css('border','3px solid #308c58');
$(form2.john_drank_tequila).css('opacity','0.6');
$('#e4').css('pointer-events','none'); 
$('#e4').css('opacity','0.6');
bigbang4.classList.remove('bigbang');
setTimeout(function(){
$('#reproduce33').css('opacity','0.9');
$('#reproduce33').css('pointer-events','auto'); 
activar1[3] = 1;
},2000);
document.form2.john_drank_tequila.value = document.form4.john_drank_tequila.value;
document.getElementById('button4').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
$(form2.john_drank_tequila).css('border','3px solid #fc484c');
$('#campo4').css('border','3px solid #fc484c');
$('#numeracion3').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a4!="John_drank_tequila")){
$('#john_drank_tequila1').css('opacity','0.6');
$(form2.john_drank_tequila).css('pointer-events','none'); 
$(form2.john_drank_tequila).css('opacity','0.6');
$('#e4').css('pointer-events','none'); 
$('#e4').css('opacity','0.6');
bigbang4.classList.remove('bigbang');
setTimeout(function(){$('#mostra4').css('display','inline'); $('#reproduce33').css('opacity','0.9');activar1[3] = 1;$('#reproduce33').css('pointer-events','auto');$('#lisa4').css('display','none');/*$('#campiño4').css('display','none');*/},2500);
document.form2.john_drank_tequila.value = document.form4.john_drank_tequila.value;
aux--;
capturar();
}
}
}

//-------------------------------------------------
if (botoncito=="e5"){
if ((a5=="Karen_and_Nancy_went_to_the_gym")||(a5=="KAREN_AND_NANCY_WENT_TO_THE_GYM")){
$('#karen_and_nancy_went_to_the_gym1').css('opacity','0.6');
$(form2.karen_and_nancy_went_to_the_gym).css('pointer-events','none'); 
$(form2.karen_and_nancy_went_to_the_gym).css('border','3px solid #308c58');
$(form2.karen_and_nancy_went_to_the_gym).css('opacity','0.6');
$('#e5').css('pointer-events','none'); 
$('#e5').css('opacity','0.6');
bigbang5.classList.remove('bigbang');
setTimeout(function(){$('#reproduce44').css('opacity','0.9');$('#reproduce44').css('pointer-events','auto'); activar1[4] = 1;},2000);
document.form2.karen_and_nancy_went_to_the_gym.value = document.form4.karen_and_nancy_went_to_the_gym.value;
document.getElementById('button5').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
$(form2.karen_and_nancy_went_to_the_gym).css('border','3px solid #fc484c');
$('#campo5').css('border','3px solid #fc484c');
$('#numeracion4').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a5!="karen_and_nancy_went_to_the_gym")){
$('#karen_and_nancy_went_to_the_gym1').css('opacity','0.6');
$(form2.karen_and_nancy_went_to_the_gym).css('pointer-events','none'); 
$(form2.karen_and_nancy_went_to_the_gym).css('opacity','0.6');
$('#e5').css('pointer-events','none'); 
$('#e5').css('opacity','0.6');
bigbang5.classList.remove('bigbang');
setTimeout(function(){$('#mostra5').css('display','inline'); $('#reproduce44').css('opacity','0.9');activar1[4] = 1;$('#reproduce44').css('pointer-events','auto');$('#lisa5').css('display','none');/*$('#campiño5').css('display','none');*/},2500);
document.form2.karen_and_nancy_went_to_the_gym.value = document.form4.karen_and_nancy_went_to_the_gym.value;
aux--;
capturar();
}
}
}
//-------------------------------------------------
if (botoncito=="e6"){
if ((a6=="Penny_didn't_eat_fast_food")||(a6=="Penny_did_not_eat_fast_food")||(a6=="PENNY_DIDN'T_EAT_FAST_FOOD")||(a6=="PENNY_DID_NOT_EAT_FAST_FOOD")){
$('#penny_didnt_eat_fast_food1').css('opacity','0.6');
$(form2.penny_didnt_eat_fast_food).css('pointer-events','none'); 
$(form2.penny_didnt_eat_fast_food).css('border','3px solid #308c58');
$(form2.penny_didnt_eat_fast_food).css('opacity','0.6');
$('#e6').css('pointer-events','none'); 
$('#e6').css('opacity','0.6');
bigbang6.classList.remove('bigbang');
setTimeout(function(){$('#reproduce55').css('opacity','0.9');$('#reproduce55').css('pointer-events','auto'); activar1[5] = 1;},2000);
document.form2.penny_didnt_eat_fast_food.value = document.form4.penny_didnt_eat_fast_food.value;
document.getElementById('button6').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
$(form2.penny_didnt_eat_fast_food).css('border','3px solid #fc484c');
$('#campo6').css('border','3px solid #fc484c');
$('#numeracion5').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a6!="penny_didnt_eat_fast_food")){
$('#penny_didnt_eat_fast_food1').css('opacity','0.6');
$(form2.penny_didnt_eat_fast_food).css('pointer-events','none'); 
$(form2.penny_didnt_eat_fast_food).css('opacity','0.6');
$('#e6').css('pointer-events','none'); 
$('#e6').css('opacity','0.6');
bigbang6.classList.remove('bigbang');
setTimeout(function(){$('#mostra6').css('display','inline'); $('#reproduce55').css('opacity','0.9');activar1[5] = 1;$('#reproduce55').css('pointer-events','auto');$('#lisa6').css('display','none');/*$('#campiño6').css('display','none');*/},2500);
document.form2.penny_didnt_eat_fast_food.value = document.form4.penny_didnt_eat_fast_food.value;
aux--;
capturar();
}
}
}
//-------------------------------------------------
if (botoncito=="e7"){
if ((a7=="Alexa_didn't_exercise")||(a7=="ALEXA_DIDN'T_EXERCISE")||(a7=="Alexa_did_not_exercise")||(a7=="ALEXA_DID_NOT_EXERCISE")){
$('#alexa_didnt_exercise1').css('opacity','0.6');
$(form2.alexa_didnt_exercise).css('pointer-events','none'); 
$(form2.alexa_didnt_exercise).css('border','3px solid #308c58');
$(form2.alexa_didnt_exercise).css('opacity','0.6');
$('#e7').css('pointer-events','none'); 
$('#e7').css('opacity','0.6');
bigbang7.classList.remove('bigbang');
setTimeout(function(){$('#reproduce66').css('opacity','0.9');$('#reproduce66').css('pointer-events','auto'); activar1[6] = 1;},2000);
document.form2.alexa_didnt_exercise.value = document.form4.alexa_didnt_exercise.value;
document.getElementById('button7').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
$(form2.alexa_didnt_exercise).css('border','3px solid #fc484c');
$('#campo7').css('border','3px solid #fc484c');
$('#numeracion6').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a7!="alexa_didnt_exercise")){
$('#alexa_didnt_exercise1').css('opacity','0.6');
$(form2.alexa_didnt_exercise).css('pointer-events','none'); 
$(form2.alexa_didnt_exercise).css('opacity','0.6');
$('#e7').css('pointer-events','none'); 
$('#e7').css('opacity','0.6');
bigbang7.classList.remove('bigbang');
setTimeout(function(){$('#mostra7').css('display','inline'); $('#reproduce66').css('opacity','0.9');activar1[6] = 1;$('#reproduce66').css('pointer-events','auto');$('#lisa7').css('display','none');/*$('#campiño7').css('display','none');*/},2500);
document.form2.alexa_didnt_exercise.value = document.form4.alexa_didnt_exercise.value;
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