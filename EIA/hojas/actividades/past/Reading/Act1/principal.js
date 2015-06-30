var i=0;
var aux=0;
var aux1=0;
var aux00=0;
var aux11=0;
var ubic="";
var cuentabien=0;
var cuentamal=0;
var ficty=0;
var ficty1=0;
//var cuentabien1=0;
//var cuentamal1=0;
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
var y=0;
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
function sololetras(e){
if ((e.keyCode != 32) && (e.keyCode < 65) || (e.keyCode > 90) && (e.keyCode < 97) || (e.keyCode > 122))
e.returnValue = false;
}
//---------------------------------------------------------------------------------------------------------------------------
function activaaudio(){

//alert("cuentabien: "+cuentabien+" cuentamal: "+cuentamal+' homero1: '+homero1+' homero2: '+homero2+' homero3: '+homero3+' homero4: '+homero4+' homero5: '+homero5+' homero6: '+homero6+' homero7: '+homero7)
if((ubic=="weight_lifting")&&(activar[0] == 1)){
audio=document.getElementById('a1');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce").css('display','inline');
$("#pause").css('display','none');
m++;
contador++;
//homero1++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
m++;
}
/*if((cuentabien+cuentamal>=7)&&((homero1>=1)&&(homero2>=1)&&(homero3>=1)&&(homero4>=1)&&(homero5>=1)&&(homero6>=1)&&(homero7>=1))){
$(".elnav1").css('display','none');
$(".elnav").css('display','none');
$("#escuchar").css('display','inline');
cosiño=1;
cosiño1=1;
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
//setTimeout(function(){
$("#reproduce").css('opacity','0.4');
$('#reproduce').css('pointer-events','none');
$("#reproduce00").css('opacity','0.4');
$('#reproduce00').css('pointer-events','none');
/*$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');*/  //},0000);
}
}


if((ubic=="going")&&(activar[1] == 1)){
audio=document.getElementById('a2');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce1").css('display','inline');
$("#pause").css('display','none');
m++;
contador1++;
//homero2++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce1").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
m++;
}
/*if((cuentabien+cuentamal>=7)&&((homero1>=1)&&(homero2>=1)&&(homero3>=1)&&(homero4>=1)&&(homero5>=1)&&(homero6>=1)&&(homero7>=1))){
$(".elnav1").css('display','none');
$(".elnav").css('display','none');
$("#escuchar").css('display','inline');
cosiño=1;
cosiño1=1;
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
//setTimeout(function(){
$("#reproduce1").css('opacity','0.4');
$('#reproduce1').css('pointer-events','none');
$("#reproduce11").css('opacity','0.4');
$('#reproduce11').css('pointer-events','none');
/*$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');*/ // },3000);
}
}


if((ubic=="going11")&&(activar[2] == 1)){
audio=document.getElementById('a3');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce2").css('display','inline');
$("#pause").css('display','none');
m++;
contador2++;
//homero3++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce2").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
m++;
}
/*if((cuentabien+cuentamal>=7)&&((homero1>=1)&&(homero2>=1)&&(homero3>=1)&&(homero4>=1)&&(homero5>=1)&&(homero6>=1)&&(homero7>=1))){
$(".elnav1").css('display','none');
$(".elnav").css('display','none');
$("#escuchar").css('display','inline');
cosiño=1;
cosiño1=1;
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
//setTimeout(function(){
$("#reproduce2").css('opacity','0.4');
$('#reproduce2').css('pointer-events','none');
$("#reproduce22").css('opacity','0.4');
$('#reproduce22').css('pointer-events','none');
/*$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');*/ // },3000);
}
}


if((ubic=="listening")&&(activar[3] == 1)){
audio=document.getElementById('a4');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce3").css('display','inline');
$("#pause").css('display','none');
m++;
contador3++;
//homero4++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce3").css('display','none');
$("#pause").css('display','inline');
audio.currentTime = 0; 
m++;
}
/*if((cuentabien+cuentamal>=7)&&((homero1>=1)&&(homero2>=1)&&(homero3>=1)&&(homero4>=1)&&(homero5>=1)&&(homero6>=1)&&(homero7>=1))){
$(".elnav1").css('display','none');
$(".elnav").css('display','none');
$("#escuchar").css('display','inline');
cosiño=1;
cosiño1=1;
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
//setTimeout(function(){
$("#reproduce3").css('opacity','0.4');
$('#reproduce3').css('pointer-events','none');
$("#reproduce33").css('opacity','0.4');
$('#reproduce33').css('pointer-events','none');
/*$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none'); */ //},3000);
}
}


if((ubic=="eating")&&(activar[4] == 1)){
audio=document.getElementById('a5');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce4").css('display','inline');
$("#pause").css('display','none');
m++;
contador4++;
//homero5++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce4").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
m++;
}
/*if((cuentabien+cuentamal>=7)&&((homero1>=1)&&(homero2>=1)&&(homero3>=1)&&(homero4>=1)&&(homero5>=1)&&(homero6>=1)&&(homero7>=1))){
$(".elnav1").css('display','none');
$(".elnav").css('display','none');
$("#escuchar").css('display','inline');
cosiño=1;
cosiño1=1;
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
//setTimeout(function(){
$("#reproduce4").css('opacity','0.4');
$('#reproduce4').css('pointer-events','none');
$("#reproduce44").css('opacity','0.4');
$('#reproduce44').css('pointer-events','none');
/*$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');*///  },3000);
}
}


if((ubic=="drinking")&&(activar[5] == 1)){
audio=document.getElementById('a6');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce5").css('display','inline');
$("#pause").css('display','none');
m++;
contador5++;
//homero6++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce5").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
m++;
}
/*if((cuentabien+cuentamal>=7)&&((homero1>=1)&&(homero2>=1)&&(homero3>=1)&&(homero4>=1)&&(homero5>=1)&&(homero6>=1)&&(homero7>=1))){
$(".elnav1").css('display','none');
$(".elnav").css('display','none');
$("#escuchar").css('display','inline');
cosiño=1;
cosiño1=1;
}*/
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
//setTimeout(function(){
$("#reproduce5").css('opacity','0.4');
$('#reproduce5').css('pointer-events','none');
$("#reproduce55").css('opacity','0.4');
$('#reproduce55').css('pointer-events','none');
/*$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');*/ // },3000);
}
}


if((ubic=="dancing")&&(activar[6] == 1)){
audio=document.getElementById('a7');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce6").css('display','inline');
$("#pause").css('display','none');
m++;
contador6++;
//homero7++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce6").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
m++;
}
/*if((cuentabien+cuentamal>=7)&&((homero1>=1)&&(homero2>=1)&&(homero3>=1)&&(homero4>=1)&&(homero5>=1)&&(homero6>=1)&&(homero7>=1))){
$(".elnav1").css('display','none');
$(".elnav").css('display','none');
$("#escuchar").css('display','inline');
cosiño=1;
cosiño1=1;
}*/

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
//setTimeout(function(){
$("#reproduce6").css('opacity','0.4');
$('#reproduce6').css('pointer-events','none');
$("#reproduce66").css('opacity','0.4');
$('#reproduce66').css('pointer-events','none');
/*$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none'); */// },3000);
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
//homero11++;
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce00").css('display','none');
$("#pause1").css('display','inline'); 
audio.currentTime = 0;
m++;
}
/*if((cuentabien+cuentamal>=7)&&((homero11>=1)||(homero22>=1)||(homero33>=1)||(homero44>=1)||(homero55>=1)||(homero66>=1)||(homero77>=1))){
$(".elnav1").css('display','none');
$(".elnav").css('display','none');
$("#escuchar").css('display','inline');
cosiño=1;
cosiño1=1;
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
//setTimeout(function(){
$("#reproduce00").css('opacity','0.4');
$('#reproduce00').css('pointer-events','none');
$("#reproduce").css('opacity','0.4');
$('#reproduce').css('pointer-events','none');
/*$("#pause1").css('opacity','0.4');
$('#pause1').css('pointer-events','none');*/ // },3000);
}
}


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
//homero22++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce11").css('display','none');
$("#pause1").css('display','inline'); 
audio.currentTime = 0;
m++;
}
/*if((cuentabien+cuentamal>=7)&&((homero11>=1)||(homero22>=1)||(homero33>=1)||(homero44>=1)||(homero55>=1)||(homero66>=1)||(homero77>=1))){
$(".elnav1").css('display','none');
$(".elnav").css('display','none');
$("#escuchar").css('display','inline');
cosiño=1;
cosiño1=1;
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
//setTimeout(function(){
$("#reproduce11").css('opacity','0.4');
$('#reproduce11').css('pointer-events','none');
$("#reproduce1").css('opacity','0.4');
$('#reproduce1').css('pointer-events','none');
/*$("#pause1").css('opacity','0.4');
$('#pause1').css('pointer-events','none'); */ //},3000);
}
}


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
//homero33++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce22").css('display','none');
$("#pause1").css('display','inline'); 
audio.currentTime = 0;
m++;
}
/*if((cuentabien+cuentamal>=7)&&((homero11>=1)||(homero22>=1)||(homero33>=1)||(homero44>=1)||(homero55>=1)||(homero66>=1)||(homero77>=1))){
$(".elnav1").css('display','none');
$(".elnav").css('display','none');
$("#escuchar").css('display','inline');
cosiño=1;
cosiño1=1;
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
//setTimeout(function(){
$("#reproduce22").css('opacity','0.4');
$('#reproduce22').css('pointer-events','none');
$("#reproduce2").css('opacity','0.4');
$('#reproduce2').css('pointer-events','none');
/*$("#pause1").css('opacity','0.4');
$('#pause1').css('pointer-events','none');*///  },3000);
}
}


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
//homero44++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce33").css('display','none');
$("#pause1").css('display','inline'); 
audio.currentTime = 0;
m++;
}
/*if((cuentabien+cuentamal>=7)&&((homero11>=1)||(homero22>=1)||(homero33>=1)||(homero44>=1)||(homero55>=1)||(homero66>=1)||(homero77>=1))){
$(".elnav1").css('display','none');
$(".elnav").css('display','none');
$("#escuchar").css('display','inline');
cosiño=1;
cosiño1=1;
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
//setTimeout(function(){
$("#reproduce33").css('opacity','0.4');
$('#reproduce33').css('pointer-events','none');
$("#reproduce3").css('opacity','0.4');
$('#reproduce3').css('pointer-events','none');
/*$("#pause1").css('opacity','0.4');
$('#pause1').css('pointer-events','none');*/ // },3000);
}
}


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
//homero55++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce44").css('display','none');
$("#pause1").css('display','inline'); 
audio.currentTime = 0;
m++;
}
/*if((cuentabien+cuentamal>=7)&&((homero11>=1)||(homero22>=1)||(homero33>=1)||(homero44>=1)||(homero55>=1)||(homero66>=1)||(homero77>=1))){
$(".elnav1").css('display','none');
$(".elnav").css('display','none');
$("#escuchar").css('display','inline');
cosiño=1;
cosiño1=1;
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
//setTimeout(function(){
$("#reproduce44").css('opacity','0.4');
$('#reproduce44').css('pointer-events','none');
$("#reproduce4").css('opacity','0.4');
$('#reproduce4').css('pointer-events','none');
/*$("#pause1").css('opacity','0.4');
$('#pause1').css('pointer-events','none');*/ // },3000);
}
}


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
//homero66++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce55").css('display','none');
$("#pause1").css('display','inline'); 
audio.currentTime = 0;
m++;
}
/*if((cuentabien+cuentamal>=7)&&((homero11>=1)||(homero22>=1)||(homero33>=1)||(homero44>=1)||(homero55>=1)||(homero66>=1)||(homero77>=1))){
$(".elnav1").css('display','none');
$(".elnav").css('display','none');
$("#escuchar").css('display','inline');
cosiño=1;
cosiño1=1;
}*/
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
//setTimeout(function(){
$("#reproduce55").css('opacity','0.4');
$('#reproduce55').css('pointer-events','none');
$("#reproduce5").css('opacity','0.4');
$('#reproduce5').css('pointer-events','none');
/*$("#pause1").css('opacity','0.4');
$('#pause1').css('pointer-events','none');*/ // },3000);
}
}


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
//homero77++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce66").css('display','none');
$("#pause1").css('display','inline'); 
audio.currentTime = 0;
m++;
}
/*if((cuentabien+cuentamal>=7)&&((homero11>=1)||(homero22>=1)||(homero33>=1)||(homero44>=1)||(homero55>=1)||(homero66>=1)||(homero77>=1))){
$(".elnav1").css('display','none');
$(".elnav").css('display','none');
$("#escuchar").css('display','inline');
cosiño=1;
cosiño1=1;
}*/
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
//setTimeout(function(){
$("#reproduce66").css('opacity','0.4');
$('#reproduce66').css('pointer-events','none');
$("#reproduce6").css('opacity','0.4');
$('#reproduce6').css('pointer-events','none');
/*$("#pause1").css('opacity','0.4');
$('#pause1').css('pointer-events','none');*/ // },3000);
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
if (xx==1) {
if (id=="going"){
$('.campos').css('display','none');
$('#campo2').css('display','inline');

$('.labeles').css('display','none');
$('#label22').css('display','inline');
$('#label2').css('display','inline');

$('.sig').css('display','none');
$('#button2').css('display','inline');
if(changos==0){
$('.perendengues').css('display','none');
$('#perendengues2').css('display','inline');


if(cosiño==0){
$('.elnav').css('display','none');
$('#reproduce1').css('display','inline');
}
}
/*$('.bi').css('display','none');
$('#numeracion1').css('display','inline');*/

$('.pq').css('display','none');
$('#mostrando22').css('display','inline');
y=0;
}
//-------------------------------------------------
if (id=="going11"){
$('.campos').css('display','none');
$('#campo3').css('display','inline');

$('.labeles').css('display','none');
$('#label33').css('display','inline');
$('#label3').css('display','inline');

$('.sig').css('display','none');
$('#button3').css('display','inline');
if(changos==0){
$('.perendengues').css('display','none');
$('#perendengues3').css('display','inline');


if(cosiño==0){
$('.elnav').css('display','none');
$('#reproduce2').css('display','inline');
}
}
/*$('.bi').css('display','none');
$('#numeracion2').css('display','inline');*/

$('.pq').css('display','none');
$('#mostrando33').css('display','inline');
y=0;
}
//-------------------------------------------------
if (id=="listening"){
$('.campos').css('display','none');
$('#campo4').css('display','inline');

$('.labeles').css('display','none');
$('#label44').css('display','inline');
$('#label4').css('display','inline');

$('.sig').css('display','none');
$('#button4').css('display','inline');
if(changos==0){
$('.perendengues').css('display','none');
$('#perendengues4').css('display','inline');


if(cosiño==0){
$('.elnav').css('display','none');
$('#reproduce3').css('display','inline');
}
}
/*$('.bi').css('display','none');
$('#numeracion3').css('display','inline');*/

$('.pq').css('display','none');
$('#mostrando44').css('display','inline');
y=0;
}
//-------------------------------------------------
if (id=="eating"){
$('.campos').css('display','none');
$('#campo5').css('display','inline');

$('.labeles').css('display','none');
$('#label55').css('display','inline');
$('#label5').css('display','inline');

$('.sig').css('display','none');
$('#button5').css('display','inline');

if(changos==0){
$('.perendengues').css('display','none');
$('#perendengues5').css('display','inline');


if(cosiño==0){
$('.elnav').css('display','none');
$('#reproduce4').css('display','inline');
}
}
/*$('.bi').css('display','none');
$('#numeracion4').css('display','inline');*/

$('.pq').css('display','none');
$('#mostrando55').css('display','inline');
y=0;
}
//-------------------------------------------------
if (id=="drinking"){
$('.campos').css('display','none');
$('#campo6').css('display','inline');

$('.labeles').css('display','none');
$('#label66').css('display','inline');
$('#label6').css('display','inline');

$('.sig').css('display','none');
$('#button6').css('display','inline');
if(changos==0){
$('.perendengues').css('display','none');
$('#perendengues6').css('display','inline');


if(cosiño==0){
$('.elnav').css('display','none');
$('#reproduce5').css('display','inline');
}
}
/*$('.bi').css('display','none');
$('#numeracion5').css('display','inline');*/

$('.pq').css('display','none');
$('#mostrando66').css('display','inline');
y=0;
}
//-------------------------------------------------
if (id=="dancing"){
$('.campos').css('display','none');
$('#campo7').css('display','inline');

$('.labeles').css('display','none');
$('#label77').css('display','inline');
$('#label7').css('display','inline');

$('.sig').css('display','none');
$('#button7').css('display','inline');
if(changos==0){
$('.perendengues').css('display','none');
$('#perendengues7').css('display','inline');


if(cosiño==0){
$('.elnav').css('display','none');
$('#reproduce6').css('display','inline');
}
}
/*$('.bi').css('display','none');
$('#numeracion6').css('display','inline');*/

$('.pq').css('display','none');
$('#mostrando77').css('display','inline');
y=0;
}
//-------------------------------------------------
if (id=="weight_lifting"){

$('.campos').css('display','none');
$('#campo1').css('display','inline');

$('.labeles').css('display','none');
$('#label11').css('display','inline');
$('#label1').css('display','inline');

$('.sig').css('display','none');
$('#button1').css('display','inline');
if(changos==0){
$('.perendengues').css('display','none');
$('#perendengues1').css('display','inline');

if(cosiño==0){
$('.elnav').css('display','none');
$('#reproduce').css('display','inline');
}
}
/*$('.bi').css('display','none');
$('#numeracion0').css('display','inline');*/

$('.pq').css('display','none');
$('#mostrando11').css('display','inline');
y=0;
}
}
}
ubic=id;
}
//---------------------------------------------------------------------------------------------------------------------------
function capturar(){ 
respuesta=form3.resultado.value;
//-------------------------------------------------
if (ubic=="weight_lifting"){
recibe=document.getElementById("campo1").value;
}
//-------------------------------------------------
if (ubic=="going"){
recibe=document.getElementById("campo2").value;
}
//-------------------------------------------------
if (ubic=="going11"){
recibe=document.getElementById("campo3").value;
}
//-------------------------------------------------
if (ubic=="listening"){
recibe=document.getElementById("campo4").value;
}
//-------------------------------------------------
if (ubic=="eating"){
recibe=document.getElementById("campo5").value;
}
//-------------------------------------------------
if (ubic=="drinking"){
recibe=document.getElementById("campo6").value;
}
//-------------------------------------------------
if (ubic=="dancing"){
recibe=document.getElementById("campo7").value;
}
//-------------------------------------------------
recibe=recibe.toLowerCase();
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
if((respuesta==recibe)||(respuesta==recibe+'11')){
document.getElementById(ubic).disabled = true;  

//if(y==0)
//alert("muy bien");

if(respuesta=="weight_lifting"){
$('#campo1').css('pointer-events','none'); 
$('#campo1').css('border','3px solid #308c58');
//$('#numeracion0').css('border','3px solid #308c58');
$('#button1').css('opacity','0.6');
$('#button1').css('pointer-events','none'); 
bigbang11.classList.remove('bigbang');
setTimeout(function(){$('#reproduce').css('opacity','0.9');$('#reproduce').css('pointer-events','auto'); activar[0] = 1;},500);
/*cuentabien++; 
ficty++;*/
y++;
homero1=1;
document.form4.weight_lifting.value = document.form2.weight_lifting.value;
document.getElementById('e1').click();
}

if(respuesta=="going"){
$('#campo2').css('pointer-events','none'); 
$('#campo2').css('border','3px solid #308c58');
//$('#numeracion1').css('border','3px solid #308c58');
$('#button2').css('opacity','0.6');
$('#button2').css('pointer-events','none'); 
bigbang22.classList.remove('bigbang');
setTimeout(function(){$('#reproduce1').css('opacity','0.9');$('#reproduce1').css('pointer-events','auto'); activar[1] = 1;},500);
/*cuentabien++; 
ficty++;*/
y++;
homero2=1; 
document.form4.going.value = document.form2.going.value;
document.getElementById('e2').click();
}

if(respuesta=="going11"){
$('#campo3').css('pointer-events','none'); 
$('#campo3').css('border','3px solid #308c58');
//$('#numeracion2').css('border','3px solid #308c58');
$('#button3').css('opacity','0.6');
$('#button3').css('pointer-events','none'); 
bigbang33.classList.remove('bigbang');
setTimeout(function(){$('#reproduce2').css('opacity','0.9');$('#reproduce2').css('pointer-events','auto'); activar[2] = 1;},500);
/*cuentabien++; 
ficty++;*/
y++;
homero3=1;
document.form4.going11.value = document.form2.going11.value;
document.getElementById('e3').click();
}

if(respuesta=="listening"){
$('#campo4').css('pointer-events','none'); 
$('#campo4').css('border','3px solid #308c58');
//$('#numeracion3').css('border','3px solid #308c58');
$('#button4').css('opacity','0.6');
$('#button4').css('pointer-events','none'); 
bigbang44.classList.remove('bigbang');
setTimeout(function(){$('#reproduce3').css('opacity','0.9');$('#reproduce3').css('pointer-events','auto'); activar[3] = 1;},500);
/*cuentabien++; 
ficty++;*/
y++;
homero4=1;
document.form4.listening.value = document.form2.listening.value;
document.getElementById('e4').click();
}

if(respuesta=="eating"){
$('#campo5').css('pointer-events','none'); 
$('#campo5').css('border','3px solid #308c58');
//$('#numeracion4').css('border','3px solid #308c58');
$('#button5').css('opacity','0.6');
$('#button5').css('pointer-events','none'); 
bigbang55.classList.remove('bigbang');
setTimeout(function(){$('#reproduce4').css('opacity','0.9');$('#reproduce4').css('pointer-events','auto'); activar[4] = 1;},500);
/*cuentabien++; 
ficty++;*/
y++;
homero5=1;
document.form4.eating.value = document.form2.eating.value;
document.getElementById('e5').click();
}

if(respuesta=="drinking"){ 
$('#campo6').css('pointer-events','none'); 
$('#campo6').css('border','3px solid #308c58');
//$('#numeracion5').css('border','3px solid #308c58');
$('#button6').css('opacity','0.6');
$('#button6').css('pointer-events','none'); 
bigbang66.classList.remove('bigbang');
setTimeout(function(){$('#reproduce5').css('opacity','0.9');$('#reproduce5').css('pointer-events','auto'); activar[5] = 1;},500);
/*cuentabien++; 
ficty++; */
y++;
homero6=1;
document.form4.drinking.value = document.form2.drinking.value;
document.getElementById('e6').click();
}

if(respuesta=="dancing"){
$('#campo7').css('pointer-events','none'); 
$('#campo7').css('border','3px solid #308c58');
//$('#numeracion6').css('border','3px solid #308c58');
$('#button7').css('opacity','0.6');
$('#button7').css('pointer-events','none'); 
bigbang77.classList.remove('bigbang');
setTimeout(function(){$('#reproduce6').css('opacity','0.9');$('#reproduce6').css('pointer-events','auto'); activar[6] = 1;},500);
/*cuentabien++; 
ficty++;*/
y++;
homero7=1;
document.form4.dancing.value = document.form2.dancing.value;
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
//alert("Try again. You have 3 attempts, get: "+aux+" attempts");
document.form4.weight_lifting.value = document.form2.weight_lifting.value;
document.form4.going.value = document.form2.going.value;
document.form4.going11.value = document.form2.going11.value;
document.form4.listening.value = document.form2.listening.value;
document.form4.eating.value = document.form2.eating.value;
document.form4.drinking.value = document.form2.drinking.value;
document.form4.dancing.value = document.form2.dancing.value;

if(ubic=="weight_lifting"){
$('#campo1').css('border','3px solid #fc484c');
//$('#numeracion0').css('border','3px solid #fc484c');	

$(form4.weight_lifting).css('border','3px solid #fc484c');
//$('#campiño1').css('border','3px solid #fc484c');
}

if(ubic=="going"){
$('#campo2').css('border','3px solid #fc484c');
//$('#numeracion1').css('border','3px solid #fc484c');

$(form4.going).css('border','3px solid #fc484c');
//$('#campiño2').css('border','3px solid #fc484c');		
}

if(ubic=="going11"){
$('#campo3').css('border','3px solid #fc484c');
//$('#numeracion2').css('border','3px solid #fc484c');

$(form4.going11).css('border','3px solid #fc484c');
//$('#campiño3').css('border','3px solid #fc484c');	
}

if (ubic=="listening"){
$('#campo4').css('border','3px solid #fc484c');
//$('#numeracion3').css('border','3px solid #fc484c');

$(form4.listening).css('border','3px solid #fc484c');
//$('#campiño4').css('border','3px solid #fc484c');		
}

if (ubic=="eating"){
$('#campo5').css('border','3px solid #fc484c');
//$('#numeracion4').css('border','3px solid #fc484c');

$(form4.eating).css('border','3px solid #fc484c');
//$('#campiño5').css('border','3px solid #fc484c');		
}

if (ubic=="drinking"){
$('#campo6').css('border','3px solid #fc484c');
//$('#numeracion5').css('border','3px solid #fc484c');

$(form4.drinking).css('border','3px solid #fc484c');
//$('#campiño6').css('border','3px solid #fc484c');
}

if (ubic=="dancing"){
$('#campo7').css('border','3px solid #fc484c');
//$('#numeracion6').css('border','3px solid #fc484c');	

$(form4.weight_lifting).css('border','3px solid #fc484c');
//$('#campiño7').css('border','3px solid #fc484c');	
}
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="weight_lifting")){
	bigbang11.classList.remove('bigbang');
//alert("You've exhausted your attempts");
document.getElementById('t1').play();
setTimeout(function(){$('#caifanes1').css('display','inline');/*document.getElementById('mostrando11').innerHTML='1. I like <b>weight lifting</b>.';*/ $('#reproduce').css('opacity','0.9');activar[0] = 1; document.getElementById('reproduce').click(); $('#reproduce').css('pointer-events','auto'); $('#velk1').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo1').css('pointer-events','none'); 
$('#campo1').css('border','3px solid #fc484c');
//$('#numeracion0').css('border','3px solid #fc484c');
$('#button1').css('opacity','0.6');
$('#button1').css('pointer-events','none');
document.getElementById('button1').disabled = true; 
/*ficty1++; 
cuentamal++; */
homero11=1;
document.form4.weight_lifting.value = document.form2.weight_lifting.value;
document.getElementById('e1').click();
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="going")){
	bigbang22.classList.remove('bigbang');
//alert("You've exhausted your attempts");
document.getElementById('t1').play();
setTimeout(function(){$('#caifanes2').css('display','inline'); /*document.getElementById('mostrando22').innerHTML='2. They love <b>going </b>to the gym.';*/ $('#reproduce1').css('opacity','0.9');activar[1] = 1; document.getElementById('reproduce1').click(); $('#reproduce1').css('pointer-events','auto');$('#velk2').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo2').css('pointer-events','none'); 
$('#campo2').css('border','3px solid #fc484c');
//$('#numeracion1').css('border','3px solid #fc484c');
$('#button2').css('opacity','0.6');
$('#button2').css('pointer-events','none');
document.getElementById('button2').disabled = true; 
/*ficty1++; 
cuentamal++; */
homero22=1;
document.form4.going.value = document.form2.going.value;
document.getElementById('e2').click();
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="going11")){
	bigbang33.classList.remove('bigbang');
//alert("You've exhausted your attempts");
document.getElementById('t1').play();
setTimeout(function(){$('#caifanes3').css('display','inline');/*document.getElementById('mostrando33').innerHTML='3. I like <b>going </b>to the movies.';*/ $('#reproduce2').css('opacity','0.9');activar[2] = 1; document.getElementById('reproduce2').click(); $('#reproduce2').css('pointer-events','auto');$('#velk3').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo3').css('pointer-events','none'); 
$('#campo3').css('border','3px solid #fc484c');
//$('#numeracion2').css('border','3px solid #fc484c');
$('#button3').css('opacity','0.6');
$('#button3').css('pointer-events','none');
document.getElementById('button3').disabled = true; 
/*ficty1++;
cuentamal++;*/
homero33=1; 
document.form4.going11.value = document.form2.going11.value;
document.getElementById('e3').click();
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="listening")){
	bigbang44.classList.remove('bigbang');
//alert("You've exhausted your attempts");
document.getElementById('t1').play();
setTimeout(function(){$('#caifanes4').css('display','inline');/*document.getElementById('mostrando44').innerHTML='4. I like <b>listening </b>to music.';*/ $('#reproduce3').css('opacity','0.9');activar[3] = 1; document.getElementById('reproduce3').click(); $('#reproduce3').css('pointer-events','auto');$('#velk4').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo4').css('pointer-events','none'); 
$('#campo4').css('border','3px solid #fc484c');
//$('#numeracion3').css('border','3px solid #fc484c');
$('#button4').css('opacity','0.6');
$('#button4').css('pointer-events','none');
document.getElementById('button4').disabled = true; 
/*ficty1++; 
cuentamal++;*/
homero44=1;
document.form4.listening.value = document.form2.listening.value;
document.getElementById('e4').click();
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="eating")){
	bigbang55.classList.remove('bigbang');
//alert("You've exhausted your attempts");
document.getElementById('t1').play();
setTimeout(function(){$('#caifanes5').css('display','inline');/*document.getElementById('mostrando55').innerHTML='5. They like <b>eating </b>fast food.';*/ $('#reproduce4').css('opacity','0.9');activar[4] = 1; document.getElementById('reproduce4').click(); $('#reproduce4').css('pointer-events','auto');$('#velk5').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo5').css('pointer-events','none'); 
$('#campo5').css('border','3px solid #fc484c');
//$('#numeracion4').css('border','3px solid #fc484c');
$('#button5').css('opacity','0.6');
$('#button5').css('pointer-events','none');
document.getElementById('button5').disabled = true;
/*ficty1++;
cuentamal++; */
homero55=1;
document.form4.eating.value = document.form2.eating.value;
document.getElementById('e5').click();
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="drinking")){
bigbang66.classList.remove('bigbang');
//alert("You've exhausted your attempts"); 
document.getElementById('t1').play();
setTimeout(function(){$('#caifanes6').css('display','inline');/*document.getElementById('mostrando66').innerHTML='6. They like <b>drinking </b>cocktails.';*/ $('#reproduce5').css('opacity','0.9');activar[5] = 1; document.getElementById('reproduce5').click(); $('#reproduce5').css('pointer-events','auto');$('#velk6').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo6').css('pointer-events','none'); 
$('#campo6').css('border','3px solid #fc484c');
//$('#numeracion5').css('border','3px solid #fc484c');
$('#button6').css('opacity','0.6');
$('#button6').css('pointer-events','none');
document.getElementById('button6').disabled = true;
/*ficty1++; 
cuentamal++; */
homero66=1;
document.form4.drinking.value = document.form2.drinking.value;
document.getElementById('e6').click();
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="dancing")){
bigbang77.classList.remove('bigbang');
//alert("You've exhausted your attempts"); 
document.getElementById('t1').play();
setTimeout(function(){$('#caifanes7').css('display','inline');/*document.getElementById('mostrando77').innerHTML='7. They love <b>dancing </b>salsa.';*/ $('#reproduce6').css('opacity','0.9');activar[6] = 1; document.getElementById('reproduce6').click();$('#reproduce6').css('pointer-events','auto');$('#velk7').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo7').css('pointer-events','none'); 
$('#campo7').css('border','3px solid #fc484c');
//$('#numeracion6').css('border','3px solid #fc484c');
$('#button7').css('opacity','0.6');
$('#button7').css('pointer-events','none');
document.getElementById('button7').disabled = true;
/*ficty1++; 
cuentamal++; */
homero77=1;
document.form4.dancing.value = document.form2.dancing.value;
document.getElementById('e7').click();
}
}
recibe="";
}

//---------------------------------------------------------------------------------------------------------------------------
function capturar1(botoncito){
var form2 = document.getElementById("form4");
for (i=0;i<form2.elements.length;i++){
a1=form2.weight_lifting.value;
a2=form2.going.value;
a3=form2.going11.value+'11';
a4=form2.listening.value;
a5=form2.eating.value;
a6=form2.drinking.value;
a7=form2.dancing.value;
a1=a1.toLowerCase();
a1=a1.replace(/\s/g,"_");
a2=a2.toLowerCase();
a2=a2.replace(/\s/g,"_");
a3=a3.toLowerCase();
a3=a3.replace(/\s/g,"_");
a4=a4.toLowerCase();
a4=a4.replace(/\s/g,"_");
a5=a5.toLowerCase();
a5=a5.replace(/\s/g,"_");
a6=a6.toLowerCase();
a6=a6.replace(/\s/g,"_");
a7=a7.toLowerCase();
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

if ((a1 == "weight_lifting")) {
$('#weight_lifting1').css('opacity','0.6');
$(form2.weight_lifting).css('pointer-events','none'); 
$(form2.weight_lifting).css('border','3px solid #308c58');
//$('#campiño1').css('border','3px solid #308c58');
$(form2.weight_lifting).css('opacity','0.6');
$('#e1').css('pointer-events','none'); 
$('#e1').css('opacity','0.6');
bigbang1.classList.remove('bigbang');
setTimeout(function(){$('#reproduce00').css('opacity','0.9');$('#reproduce00').css('pointer-events','auto'); activar1[0] = 1;},600);
//cuentabien1++;
//ficty1++;
//homero11=1;
document.form2.weight_lifting.value = document.form4.weight_lifting.value;
document.getElementById('button1').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
//alert("Try again. You have 3 attempts, get: "+aux1+" attempts");
$(form2.weight_lifting).css('border','3px solid #fc484c');
//$('#campiño1').css('border','3px solid #fc484c');
$('#campo1').css('border','3px solid #fc484c');
//$('#numeracion0').css('border','3px solid #fc484c');	
}
if ((aux1>2)&&(a1!="weight_lifting")){
$(form2.weight_lifting).css('pointer-events','none'); 
/*$(form2.weight_lifting).css('border','3px solid #fc484c');
$('#campiño1').css('border','3px solid #fc484c');*/
$('#weight_lifting1').css('opacity','0.6');
$(form2.weight_lifting).css('opacity','0.6');
$('#e1').css('pointer-events','none'); 
$('#e1').css('opacity','0.6');
bigbang1.classList.remove('bigbang');
setTimeout(function(){$('#mostra1').css('display','inline');$('#velkan1').css('display','none'); $('#reproduce00').css('opacity','0.9');activar1[0] = 1; $('#reproduce00').css('pointer-events','auto');},2500);
//ficty1++;
//cuentamal1++;
//homero11=1;
document.form2.weight_lifting.value = document.form4.weight_lifting.value;
aux--;
capturar();
}
}  
}

//-------------------------------------------------
if (botoncito=="e2"){

if ((a2=="going")) {
$('#going1').css('opacity','0.6');
$(form2.going).css('pointer-events','none'); 
$(form2.going).css('border','3px solid #308c58');
//$('#campiño2').css('border','3px solid #308c58');
$(form2.going).css('opacity','0.6');
$('#e2').css('pointer-events','none'); 
$('#e2').css('opacity','0.6');
bigbang2.classList.remove('bigbang');
setTimeout(function(){$('#reproduce11').css('opacity','0.9');$('#reproduce11').css('pointer-events','auto'); activar1[1] = 1;},600);
//cuentabien1++;
//ficty1++;
//homero22=1;
document.form2.going.value = document.form4.going.value;
document.getElementById('button2').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
//alert("Try again. You have 3 attempts, get: "+aux1+" attempts");
$(form2.going).css('border','3px solid #fc484c');
//$('#campiño2').css('border','3px solid #fc484c');
$('#campo2').css('border','3px solid #fc484c');
//$('#numeracion1').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a2!="going")){
$('#going1').css('opacity','0.6');
$(form2.going).css('pointer-events','none'); 
/*$(form2.going).css('border','3px solid #fc484c');
$('#campiño2').css('border','3px solid #fc484c');*/
$(form2.going).css('opacity','0.6');
$('#e2').css('pointer-events','none'); 
$('#e2').css('opacity','0.6');
bigbang2.classList.remove('bigbang');
setTimeout(function(){$('#mostra2').css('display','inline');$('#velkan2').css('display','none'); $('#reproduce11').css('opacity','0.9');activar1[1] = 1;$('#reproduce11').css('pointer-events','auto'); },2500);
//ficty1++;
//cuentamal1++;
//homero22=1;
document.form2.going.value = document.form4.going.value;
aux--;
capturar();
}
}
}
//-------------------------------------------------
if (botoncito=="e3"){
if ((a3=="going11")) {
$('#going111').css('opacity','0.6');
$(form2.going11).css('pointer-events','none'); 
$(form2.going11).css('border','3px solid #308c58');
//$('#campiño3').css('border','3px solid #308c58');
$(form2.going11).css('opacity','0.6');
$('#e3').css('pointer-events','none'); 
$('#e3').css('opacity','0.6');
bigbang3.classList.remove('bigbang');
setTimeout(function(){$('#reproduce22').css('opacity','0.9');$('#reproduce22').css('pointer-events','auto'); activar1[2] = 1;},600);
//cuentabien1++;
//ficty1++;
//homero33=1;
document.form2.going11.value = document.form4.going11.value;
document.getElementById('button3').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
//alert("Try again. You have 3 attempts, get: "+aux1+" attempts");
$(form2.going11).css('border','3px solid #fc484c');
//$('#campiño3').css('border','3px solid #fc484c');
$('#campo3').css('border','3px solid #fc484c');
//$('#numeracion2').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a3!="going11")){
$('#going111').css('opacity','0.6');
$(form2.going11).css('pointer-events','none'); 
/*$(form2.going11).css('border','3px solid #fc484c');
$('#campiño3').css('border','3px solid #fc484c');*/
$(form2.going11).css('opacity','0.6');
$('#e3').css('pointer-events','none'); 
$('#e3').css('opacity','0.6');
bigbang3.classList.remove('bigbang');
setTimeout(function(){$('#mostra3').css('display','inline');$('#velkan3').css('display','none'); $('#reproduce22').css('opacity','0.9');activar1[2] = 1;$('#reproduce22').css('pointer-events','auto'); },2500);
//ficty1++;
//cuentamal1++;
//homero33=1;
document.form2.going11.value = document.form4.going11.value;
aux--;
capturar();
}
}
}
//-------------------------------------------------
if (botoncito=="e4"){
if ((a4=="listening")) {
$('#listening1').css('opacity','0.6');
$(form2.listening).css('pointer-events','none'); 
$(form2.listening).css('border','3px solid #308c58');
//$('#campiño4').css('border','3px solid #308c58');
$(form2.listening).css('opacity','0.6');
$('#e4').css('pointer-events','none'); 
$('#e4').css('opacity','0.6');
bigbang4.classList.remove('bigbang');
setTimeout(function(){$('#reproduce33').css('opacity','0.9');$('#reproduce33').css('pointer-events','auto'); activar1[3] = 1;},600);
//cuentabien1++;
//ficty1++;
//homero44=1;
document.form2.listening.value = document.form4.listening.value;
document.getElementById('button4').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
//alert("Try again. You have 3 attempts, get: "+aux1+" attempts");
$(form2.listening).css('border','3px solid #fc484c');
//$('#campiño4').css('border','3px solid #fc484c');
$('#campo4').css('border','3px solid #fc484c');
//$('#numeracion3').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a4!="listening")){
$('#listening1').css('opacity','0.6');
$(form2.listening).css('pointer-events','none'); 
/*$(form2.listening).css('border','3px solid #fc484c');
$('#campiño4').css('border','3px solid #fc484c');*/
$(form2.listening).css('opacity','0.6');
$('#e4').css('pointer-events','none'); 
$('#e4').css('opacity','0.6');
bigbang4.classList.remove('bigbang');
setTimeout(function(){$('#mostra4').css('display','inline');$('#velkan4').css('display','none'); $('#reproduce33').css('opacity','0.9');activar1[3] = 1;$('#reproduce33').css('pointer-events','auto');},2500);
//ficty1++;
//cuentamal1++;
//homero44=1;
document.form2.listening.value = document.form4.listening.value;
aux--;
capturar();
}
}
}

//-------------------------------------------------
if (botoncito=="e5"){
if ((a5=="eating")) {
$('#eating1').css('opacity','0.6');
$(form2.eating).css('pointer-events','none'); 
$(form2.eating).css('border','3px solid #308c58');
//$('#campiño5').css('border','3px solid #308c58');
$(form2.eating).css('opacity','0.6');
$('#e5').css('pointer-events','none'); 
$('#e5').css('opacity','0.6');
bigbang5.classList.remove('bigbang');
setTimeout(function(){$('#reproduce44').css('opacity','0.9');$('#reproduce44').css('pointer-events','auto'); activar1[4] = 1;},600);
//cuentabien1++;
//ficty1++;
//homero55=1;
document.form2.eating.value = document.form4.eating.value;
document.getElementById('button5').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
//alert("Try again. You have 3 attempts, get: "+aux1+" attempts");
$(form2.eating).css('border','3px solid #fc484c');
//$('#campiño5').css('border','3px solid #fc484c');
$('#campo5').css('border','3px solid #fc484c');
//$('#numeracion4').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a5!="eating")){
$('#eating1').css('opacity','0.6');
$(form2.eating).css('pointer-events','none'); 
/*$(form2.eating).css('border','3px solid #fc484c');
$('#campiño5').css('border','3px solid #fc484c');*/
$(form2.eating).css('opacity','0.6');
$('#e5').css('pointer-events','none'); 
$('#e5').css('opacity','0.6');
bigbang5.classList.remove('bigbang');
setTimeout(function(){$('#mostra5').css('display','inline');$('#velkan5').css('display','none'); $('#reproduce44').css('opacity','0.9');activar1[4] = 1;$('#reproduce44').css('pointer-events','auto');},2500);
//ficty1++;
//cuentamal1++;
//homero55=1;
document.form2.eating.value = document.form4.eating.value;
aux--;
capturar();
}
}
}

//-------------------------------------------------
if (botoncito=="e6"){
if ((a6=="drinking")) {
$('#drinking1').css('opacity','0.6');
$(form2.drinking).css('pointer-events','none'); 
$(form2.drinking).css('border','3px solid #308c58');
//$('#campiño6').css('border','3px solid #308c58');
$(form2.drinking).css('opacity','0.6');
$('#e6').css('pointer-events','none'); 
$('#e6').css('opacity','0.6');
bigbang6.classList.remove('bigbang');
setTimeout(function(){$('#reproduce55').css('opacity','0.9');$('#reproduce55').css('pointer-events','auto'); activar1[5] = 1;},600);
//cuentabien1++;
//ficty1++;
//homero66=1;
document.form2.drinking.value = document.form4.drinking.value;
document.getElementById('button6').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
//alert("Try again. You have 3 attempts, get: "+aux1+" attempts");
$(form2.drinking).css('border','3px solid #fc484c');
//$('#campiño6').css('border','3px solid #fc484c');
$('#campo6').css('border','3px solid #fc484c');
//$('#numeracion5').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a6!="drinking")){
$('#drinking1').css('opacity','0.6');
$(form2.drinking).css('pointer-events','none'); 
/*$(form2.drinking).css('border','3px solid #fc484c');
$('#campiño6').css('border','3px solid #fc484c');*/
$(form2.drinking).css('opacity','0.6');
$('#e6').css('pointer-events','none'); 
$('#e6').css('opacity','0.6');
bigbang6.classList.remove('bigbang');
setTimeout(function(){$('#mostra6').css('display','inline');$('#velkan6').css('display','none'); $('#reproduce55').css('opacity','0.9');activar1[5] = 1;$('#reproduce55').css('pointer-events','auto');},2500);
//ficty1++;
//cuentamal1++;
//homero66=1;
document.form2.drinking.value = document.form4.drinking.value;
aux--;
capturar();
}
}
}

//-------------------------------------------------
if (botoncito=="e7"){
if ((a7=="dancing")) {
$('#dancing1').css('opacity','0.6');
$(form2.dancing).css('pointer-events','none'); 
$(form2.dancing).css('border','3px solid #308c58');
//$('#campiño7').css('border','3px solid #308c58');
$(form2.dancing).css('opacity','0.6');
$('#e7').css('pointer-events','none'); 
$('#e7').css('opacity','0.6');
bigbang7.classList.remove('bigbang');
setTimeout(function(){$('#reproduce66').css('opacity','0.9');$('#reproduce66').css('pointer-events','auto'); activar1[6] = 1;},600);
//cuentabien1++;
//ficty1++;
//homero77=1;
document.form2.dancing.value = document.form4.dancing.value;
document.getElementById('button7').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
//alert("Try again. You have 3 attempts, get: "+aux1+" attempts");
$(form2.dancing).css('border','3px solid #fc484c');
//$('#campiño7').css('border','3px solid #fc484c');
$('#campo7').css('border','3px solid #fc484c');
//$('#numeracion6').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a7!="dancing")){
$('#dancing1').css('opacity','0.6');
$(form2.dancing).css('pointer-events','none'); 
/*$(form2.dancing).css('border','3px solid #fc484c');
$('#campiño7').css('border','3px solid #fc484c');*/
$(form2.dancing).css('opacity','0.6');
$('#e7').css('pointer-events','none'); 
$('#e7').css('opacity','0.6');
bigbang7.classList.remove('bigbang');
setTimeout(function(){$('#mostra7').css('display','inline');$('#velkan7').css('display','none'); $('#reproduce66').css('opacity','0.9');activar1[6] = 1;$('#reproduce66').css('pointer-events','auto');},2500);
//ficty1++;
//cuentamal1++;
//homero77=1;
document.form2.dancing.value = document.form4.dancing.value;
aux--;
capturar();
}
}
}

//-----------------------------------------------------------------------------------------------------------------------

cuentabien=homero1+homero2+homero3+homero4+homero5+homero6+homero7;
cuentamal=homero11+homero22+homero33+homero44+homero55+homero66+homero77;
//alert(cuentabien+"  "+cuentamal);
if(cuentabien+cuentamal==7){
//setTimeout(function(){for (var i=0; i<7; i++) {activar[i]=0;activar1[i]=0;};automatico1();},5000);
$('.alumbraobj').css('opacity','0.4');
//$('#peso').css('display','inline-block');
$('#escuchar').css('display','inline-block');
$('#escuchar2').css('display','inline-block');
setTimeout(function(){
$('#muestrame1').css('display','inline');
document.getElementById('muestrame1').className = "muestrame1";	
},2000);
setTimeout(function(){
$('#escuchar').css('opacity','1');
$('#escuchar').css('pointer-events','auto');
$('#escuchar2').css('opacity','1');
$('#escuchar2').css('pointer-events','auto');
document.getElementById('escuchar2').className = "bigbang";
document.getElementById('escuchar').className = "bigbang";
},12000);
}
}

//-----------------------------------------------------------------------------------------------------------------------
function carga(){
empezar();
$('#listeniando').css('visibility','visible');
$('.sig').css('opacity','1');
}
