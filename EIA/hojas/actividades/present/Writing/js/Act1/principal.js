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
//---------------------------------------------------------------------------------------------------------------------------
/*function sololetras(e){
if ((e.keyCode != 32) && (e.keyCode < 65) || (e.keyCode > 90) && (e.keyCode < 97) || (e.keyCode > 122))
e.returnValue = false;
}*/
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
if((ubic=="to_go")&&((activar[1] == 1)||(suplente[1] == 1))){
if(activar[1] == 1){
audio=document.getElementById('ab1');	
}else
if(suplente[1] == 1){
audio=document.getElementById('a2');
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

if((ubic=="to_go11")&&((activar[2] == 1)||(suplente[2] == 1))){
if(activar[2] == 1){
audio=document.getElementById('ac1');	
}else
if(suplente[2] == 1){
audio=document.getElementById('a3');
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

if((ubic=="to_listen")&&((activar[3] == 1)||(suplente[3] == 1))){
if(activar[3] == 1){
audio=document.getElementById('ad1');
}else
if(suplente[3] == 1){
audio=document.getElementById('a4');
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
if((ubic=="to_eat")&&((activar[4] == 1)||(suplente[4] == 1))){
if(activar[4] == 1){
audio=document.getElementById('ae1');	
}else
if(suplente[4] == 1){
audio=document.getElementById('a5');
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
if((ubic=="to_drink")&&((activar[5] == 1)||(suplente[5] == 1))){
if(activar[5] == 1){
audio=document.getElementById('af1');	
}else
if(suplente[5] == 1){
audio=document.getElementById('a6');
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
if((ubic=="to_dance")&&((activar[6] == 1)||(suplente[6] == 1))){
if(activar[6] == 1){
audio=document.getElementById('ag1');
}else
if(suplente[6] == 1){
audio=document.getElementById('a7');
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

//------------------------------------------
if((more==1)&&((activar1[1] == 1)||(suplente1[1] == 1))){
if(activar1[1] == 1){
audio=document.getElementById('ab1');
}else
if(suplente1[1] == 1){
audio=document.getElementById('a2');
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

//------------------------------------------
if((more==2)&&((activar1[2] == 1)||(suplente1[2] == 1))){
if(activar1[2] == 1){
audio=document.getElementById('ac1');
}else
if(suplente1[2] == 1){	
audio=document.getElementById('a3');
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

//------------------------------------------
if((more==3)&&((activar1[3] == 1)||(suplente1[3] == 1))){
if(activar1[3] == 1){
audio=document.getElementById('ad1');	
}else
if(suplente1[3] == 1){
audio=document.getElementById('a4');
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
//setTimeout(function(){
$("#reproduce33").css('opacity','0.4');
$('#reproduce33').css('pointer-events','none');
$("#reproduce3").css('opacity','0.4');
$('#reproduce3').css('pointer-events','none');
}
}

//------------------------------------------
if((more==4)&&((activar1[4] == 1)||(suplente1[4] == 1))){
if(activar1[4] == 1){
audio=document.getElementById('ae1');
}else
if(suplente1[4] == 1){
audio=document.getElementById('a5');	
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

//------------------------------------------
if((more==5)&&((activar1[5] == 1)||(suplente1[5] == 1))){
if(activar1[5] == 1){
audio=document.getElementById('af1');
}else
if(suplente1[5] == 1){
audio=document.getElementById('a6');	
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

//------------------------------------------
if(((more==6)||(more==-1))&&((activar1[6] == 1)||(suplente1[6] == 1))){
if(activar1[6] == 1){
audio=document.getElementById('ag1');
}else
if(suplente1[6] == 1){
audio=document.getElementById('a7');	
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
if (xx==1) {
if (id=="to_go"){
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
$('.pq').css('display','none');
$('#mostrando22').css('display','inline');
}
//-------------------------------------------------
if (id=="to_go11"){
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
$('.pq').css('display','none');
$('#mostrando33').css('display','inline');
}
//-------------------------------------------------
if (id=="to_listen"){
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
$('.pq').css('display','none');
$('#mostrando44').css('display','inline');
}
//-------------------------------------------------
if (id=="to_eat"){
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
$('.pq').css('display','none');
$('#mostrando55').css('display','inline');
}
//-------------------------------------------------
if (id=="to_drink"){
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
$('.pq').css('display','none');
$('#mostrando66').css('display','inline');
}
//-------------------------------------------------
if (id=="to_dance"){
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
$('.pq').css('display','none');
$('#mostrando77').css('display','inline');
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
$('.pq').css('display','none');
$('#mostrando11').css('display','inline');
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
if (ubic=="to_go"){
recibe=document.getElementById("campo2").value;
}
//-------------------------------------------------
if (ubic=="to_go11"){
recibe=document.getElementById("campo3").value;
}
//-------------------------------------------------
if (ubic=="to_listen"){
recibe=document.getElementById("campo4").value;
}
//-------------------------------------------------
if (ubic=="to_eat"){
recibe=document.getElementById("campo5").value;
}
//-------------------------------------------------
if (ubic=="to_drink"){
recibe=document.getElementById("campo6").value;
}
//-------------------------------------------------
if (ubic=="to_dance"){
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
if(    ((ubic=="weight_lifting")&&(recibe=="weight_lifting"))||((ubic=="to_go")&&((recibe=="to_go")||(recibe=="going"))) ||((ubic=="to_go11")&&((recibe+"11"=="to_go11")||(recibe+"11"=="going11"))) ||((ubic=="to_listen")&&((recibe=="to_listen")||(recibe=="listening")))||((ubic=="to_eat")&&((recibe=="to_eat")||(recibe=="eating")))||((ubic=="to_drink")&&((recibe=="to_drink")||(recibe=="drinking")))||((ubic=="to_dance")&&((recibe=="to_dance")||(recibe=="dancing")))   ){ 	
document.getElementById(ubic).disabled = true;  
if(recibe=="weight_lifting"){
$('#campo1').css('pointer-events','none'); 
$('#campo1').css('border','3px solid #308c58');
$('#button1').css('opacity','0.6');
$('#button1').css('pointer-events','none'); 
bigbang11.classList.remove('bigbang');
setTimeout(function(){$('#reproduce').css('opacity','0.9');$('#reproduce').css('pointer-events','auto'); activar[0] = 1;},500);
homero1=1;
document.form4.weight_lifting.value = document.form2.weight_lifting.value;
document.getElementById('e1').click();
}

//--------------------------------------

if((respuesta=="to_go")||(respuesta=="going")){
if(recibe=="to_go"){ 
activar[1] = 1;
}else
if(recibe=="going"){ 
suplente[1] = 1;
}
$('#campo2').css('pointer-events','none'); 
$('#campo2').css('border','3px solid #308c58');
$('#button2').css('opacity','0.6');
$('#button2').css('pointer-events','none'); 
bigbang22.classList.remove('bigbang');
setTimeout(function(){$('#reproduce1').css('opacity','0.9');$('#reproduce1').css('pointer-events','auto'); /*activar[1] = 1;*/},500);
homero2=1; 
document.form4.to_go.value = document.form2.to_go.value;
document.getElementById('e2').click();
}

//--------------------------------------

if(((respuesta)=="to_go11")||((respuesta)=="going11")){
if((recibe+'11')=="to_go11"){ 
activar[2] = 1;
}else
if((recibe+"11")=="going11"){ 
suplente[2] = 1;
}
$('#campo3').css('pointer-events','none'); 
$('#campo3').css('border','3px solid #308c58');
$('#button3').css('opacity','0.6');
$('#button3').css('pointer-events','none'); 
bigbang33.classList.remove('bigbang');
setTimeout(function(){$('#reproduce2').css('opacity','0.9');$('#reproduce2').css('pointer-events','auto'); /*activar[2] = 1;*/},500);
homero3=1;
document.form4.to_go11.value = document.form2.to_go11.value;
document.getElementById('e3').click();
}

//--------------------------------------

if((recibe=="to_listen")||(recibe=="listening")){
if(recibe=="to_listen"){ 
activar[3] = 1;
}else
if(recibe=="listening"){ 
suplente[3] = 1;
}
$('#campo4').css('pointer-events','none'); 
$('#campo4').css('border','3px solid #308c58');
$('#button4').css('opacity','0.6');
$('#button4').css('pointer-events','none'); 
bigbang44.classList.remove('bigbang');
setTimeout(function(){$('#reproduce3').css('opacity','0.9');$('#reproduce3').css('pointer-events','auto'); /*activar[3] = 1;*/},500);
homero4=1;
document.form4.to_listen.value = document.form2.to_listen.value;
document.getElementById('e4').click();
}

//--------------------------------------

if((recibe=="to_eat")||(recibe=="eating")){
if(recibe=="to_eat"){ 
activar[4] = 1;
}else
if(recibe=="eating"){ 
suplente[4] = 1;
}
$('#campo5').css('pointer-events','none'); 
$('#campo5').css('border','3px solid #308c58');
$('#button5').css('opacity','0.6');
$('#button5').css('pointer-events','none'); 
bigbang55.classList.remove('bigbang');
setTimeout(function(){$('#reproduce4').css('opacity','0.9');$('#reproduce4').css('pointer-events','auto'); /*activar[4] = 1;*/},500);
homero5=1;
document.form4.to_eat.value = document.form2.to_eat.value;
document.getElementById('e5').click();
}

//--------------------------------------

if((recibe=="to_drink")||(recibe=="drinking")){
if(recibe=="to_drink"){ 
activar[5] = 1;
}else
if(recibe=="drinking"){ 
suplente[5] = 1;
}
$('#campo6').css('pointer-events','none'); 
$('#campo6').css('border','3px solid #308c58');
$('#button6').css('opacity','0.6');
$('#button6').css('pointer-events','none'); 
bigbang66.classList.remove('bigbang');
setTimeout(function(){$('#reproduce5').css('opacity','0.9');$('#reproduce5').css('pointer-events','auto'); /*activar[5] = 1;*/},500);
homero6=1;
document.form4.to_drink.value = document.form2.to_drink.value;
document.getElementById('e6').click();
}

//--------------------------------------

if((recibe=="to_dance")||(recibe=="dancing")){
if(recibe=="to_dance"){ 
activar[6] = 1;
}else
if(recibe=="dancing"){ 
suplente[6] = 1;
}
$('#campo7').css('pointer-events','none'); 
$('#campo7').css('border','3px solid #308c58');
$('#button7').css('opacity','0.6');
$('#button7').css('pointer-events','none'); 
bigbang77.classList.remove('bigbang');
setTimeout(function(){$('#reproduce6').css('opacity','0.9');$('#reproduce6').css('pointer-events','auto'); /*activar[6] = 1;*/},500);
homero7=1;
document.form4.to_dance.value = document.form2.to_dance.value;
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
document.form4.weight_lifting.value = document.form2.weight_lifting.value;
document.form4.to_go.value = document.form2.to_go.value;
document.form4.to_go11.value = document.form2.to_go11.value;
document.form4.to_listen.value = document.form2.to_listen.value;
document.form4.to_eat.value = document.form2.to_eat.value;
document.form4.to_drink.value = document.form2.to_drink.value;
document.form4.to_dance.value = document.form2.to_dance.value;

if(ubic=="weight_lifting"){
$('#campo1').css('border','3px solid #fc484c');
$(form4.weight_lifting).css('border','3px solid #fc484c');
}

if(ubic=="to_go"){
$('#campo2').css('border','3px solid #fc484c');
$(form4.to_go).css('border','3px solid #fc484c');
}

if(ubic=="to_go11"){
$('#campo3').css('border','3px solid #fc484c');
$(form4.to_go11).css('border','3px solid #fc484c');
}

if (ubic=="to_listen"){
$('#campo4').css('border','3px solid #fc484c');
$(form4.to_listen).css('border','3px solid #fc484c');
}

if (ubic=="to_eat"){
$('#campo5').css('border','3px solid #fc484c');
$(form4.to_eat).css('border','3px solid #fc484c');
}

if (ubic=="to_drink"){
$('#campo6').css('border','3px solid #fc484c');
$(form4.to_drink).css('border','3px solid #fc484c');
}

if (ubic=="to_dance"){
$('#campo7').css('border','3px solid #fc484c');
$(form4.to_dance).css('border','3px solid #fc484c');
}
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="weight_lifting")){
bigbang11.classList.remove('bigbang');
document.getElementById('t1').play();
setTimeout(function(){$('#caifanes1').css('display','inline'); $('#reproduce').css('opacity','0.9');activar[0] = 1; document.getElementById('reproduce').click(); $('#reproduce').css('pointer-events','auto'); $('#velk1').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo1').css('pointer-events','none'); 
$('#campo1').css('border','3px solid #fc484c');
$('#button1').css('opacity','0.6');
$('#button1').css('pointer-events','none');
document.getElementById('button1').disabled = true; 
homero11=1;
document.form4.weight_lifting.value = document.form2.weight_lifting.value;
document.getElementById('e1').click();
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="to_go")){
bigbang22.classList.remove('bigbang');
document.getElementById('t1').play();
setTimeout(function(){$('#caifanes2').css('display','inline'); $('#reproduce1').css('opacity','0.9');activar[1] = 1; document.getElementById('reproduce1').click(); $('#reproduce1').css('pointer-events','auto');$('#velk2').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo2').css('pointer-events','none'); 
$('#campo2').css('border','3px solid #fc484c');
$('#button2').css('opacity','0.6');
$('#button2').css('pointer-events','none');
document.getElementById('button2').disabled = true; 
homero22=1;
document.form4.to_go.value = document.form2.to_go.value;
document.getElementById('e2').click();
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="to_go11")){
bigbang33.classList.remove('bigbang');
document.getElementById('t1').play();
setTimeout(function(){$('#caifanes3').css('display','inline');$('#reproduce2').css('opacity','0.9');activar[2] = 1; document.getElementById('reproduce2').click(); $('#reproduce2').css('pointer-events','auto');$('#velk3').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo3').css('pointer-events','none'); 
$('#campo3').css('border','3px solid #fc484c');
$('#button3').css('opacity','0.6');
$('#button3').css('pointer-events','none');
document.getElementById('button3').disabled = true; 
homero33=1; 
document.form4.to_go11.value = document.form2.to_go11.value;
document.getElementById('e3').click();
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="to_listen")){
bigbang44.classList.remove('bigbang');
document.getElementById('t1').play();
setTimeout(function(){$('#caifanes4').css('display','inline');$('#reproduce3').css('opacity','0.9');activar[3] = 1; document.getElementById('reproduce3').click(); $('#reproduce3').css('pointer-events','auto');$('#velk4').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo4').css('pointer-events','none'); 
$('#campo4').css('border','3px solid #fc484c');
$('#button4').css('opacity','0.6');
$('#button4').css('pointer-events','none');
document.getElementById('button4').disabled = true; 
homero44=1;
document.form4.to_listen.value = document.form2.to_listen.value;
document.getElementById('e4').click();
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="to_eat")){
bigbang55.classList.remove('bigbang');
document.getElementById('t1').play();
setTimeout(function(){$('#caifanes5').css('display','inline');$('#reproduce4').css('opacity','0.9');activar[4] = 1; document.getElementById('reproduce4').click(); $('#reproduce4').css('pointer-events','auto');$('#velk5').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo5').css('pointer-events','none'); 
$('#campo5').css('border','3px solid #fc484c');
$('#button5').css('opacity','0.6');
$('#button5').css('pointer-events','none');
document.getElementById('button5').disabled = true;
homero55=1;
document.form4.to_eat.value = document.form2.to_eat.value;
document.getElementById('e5').click();
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="to_drink")){
bigbang66.classList.remove('bigbang');
document.getElementById('t1').play();
setTimeout(function(){$('#caifanes6').css('display','inline');$('#reproduce5').css('opacity','0.9');activar[5] = 1; document.getElementById('reproduce5').click(); $('#reproduce5').css('pointer-events','auto');$('#velk6').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo6').css('pointer-events','none'); 
$('#campo6').css('border','3px solid #fc484c');
$('#button6').css('opacity','0.6');
$('#button6').css('pointer-events','none');
document.getElementById('button6').disabled = true;
homero66=1;
document.form4.to_drink.value = document.form2.to_drink.value;
document.getElementById('e6').click();
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="to_dance")){
bigbang77.classList.remove('bigbang');
document.getElementById('t1').play();
setTimeout(function(){$('#caifanes7').css('display','inline');$('#reproduce6').css('opacity','0.9');activar[6] = 1; document.getElementById('reproduce6').click();$('#reproduce6').css('pointer-events','auto');$('#velk7').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo7').css('pointer-events','none'); 
$('#campo7').css('border','3px solid #fc484c');
$('#button7').css('opacity','0.6');
$('#button7').css('pointer-events','none');
document.getElementById('button7').disabled = true;
homero77=1;
document.form4.to_dance.value = document.form2.to_dance.value;
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
a2=form2.to_go.value;
a3=form2.to_go11.value+'11';
a4=form2.to_listen.value;
a5=form2.to_eat.value;
a6=form2.to_drink.value;
a7=form2.to_dance.value;
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
$(form2.weight_lifting).css('opacity','0.6');
$('#e1').css('pointer-events','none'); 
$('#e1').css('opacity','0.6');
bigbang1.classList.remove('bigbang');
setTimeout(function(){$('#reproduce00').css('opacity','0.9');$('#reproduce00').css('pointer-events','auto'); activar1[0] = 1;},600);
document.form2.weight_lifting.value = document.form4.weight_lifting.value;
document.getElementById('button1').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
$(form2.weight_lifting).css('border','3px solid #fc484c');
$('#campo1').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a1!="weight_lifting")){
$(form2.weight_lifting).css('pointer-events','none'); 
$('#weight_lifting1').css('opacity','0.6');
$(form2.weight_lifting).css('opacity','0.6');
$('#e1').css('pointer-events','none'); 
$('#e1').css('opacity','0.6');
bigbang1.classList.remove('bigbang');
setTimeout(function(){$('#mostra1').css('display','inline');$('#velkan1').css('display','none'); $('#reproduce00').css('opacity','0.9');activar1[0] = 1; $('#reproduce00').css('pointer-events','auto');},2500);
document.form2.weight_lifting.value = document.form4.weight_lifting.value;
aux--;
capturar();
}
}  
}
//-------------------------------------------------

if (botoncito=="e2"){
if ((a2=="to_go")||(a2=="going")) {
if(a2=="to_go"){ 
activar1[1] = 1;
}else
if(a2=="going"){ 
suplente1[1] = 1;
}
$('#to_go1').css('opacity','0.6');
$(form2.to_go).css('pointer-events','none'); 
$(form2.to_go).css('border','3px solid #308c58');
$(form2.to_go).css('opacity','0.6');
$('#e2').css('pointer-events','none'); 
$('#e2').css('opacity','0.6');
bigbang2.classList.remove('bigbang');
setTimeout(function(){$('#reproduce11').css('opacity','0.9');$('#reproduce11').css('pointer-events','auto'); },600);
document.form2.to_go.value = document.form4.to_go.value;
document.getElementById('button2').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
$(form2.to_go).css('border','3px solid #fc484c');
$('#campo2').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a2!="to_go")){
$('#to_go1').css('opacity','0.6');
$(form2.to_go).css('pointer-events','none'); 
$(form2.to_go).css('opacity','0.6');
$('#e2').css('pointer-events','none'); 
$('#e2').css('opacity','0.6');
bigbang2.classList.remove('bigbang');
setTimeout(function(){$('#mostra2').css('display','inline');$('#velkan2').css('display','none'); $('#reproduce11').css('opacity','0.9');activar1[1] = 1;$('#reproduce11').css('pointer-events','auto'); },2500);
document.form2.to_go.value = document.form4.to_go.value;
aux--;
capturar();
}
}
}
//-------------------------------------------------
if (botoncito=="e3"){
if ((a3=="to_go11")||(a3=="going11")) {
if(a3=="to_go11"){ 
activar1[2] = 1;
}else
if(a3=="going11"){ 
suplente1[2] = 1;
}
$('#to_go111').css('opacity','0.6');
$(form2.to_go11).css('pointer-events','none'); 
$(form2.to_go11).css('border','3px solid #308c58');
$(form2.to_go11).css('opacity','0.6');
$('#e3').css('pointer-events','none'); 
$('#e3').css('opacity','0.6');
bigbang3.classList.remove('bigbang');
setTimeout(function(){$('#reproduce22').css('opacity','0.9');$('#reproduce22').css('pointer-events','auto'); },600);
document.form2.to_go11.value = document.form4.to_go11.value;
document.getElementById('button3').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
$(form2.to_go11).css('border','3px solid #fc484c');
$('#campo3').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a3!="to_go11")){
$('#to_go111').css('opacity','0.6');
$(form2.to_go11).css('pointer-events','none'); 
$(form2.to_go11).css('opacity','0.6');
$('#e3').css('pointer-events','none'); 
$('#e3').css('opacity','0.6');
bigbang3.classList.remove('bigbang');
setTimeout(function(){$('#mostra3').css('display','inline');$('#velkan3').css('display','none'); $('#reproduce22').css('opacity','0.9');activar1[2] = 1;$('#reproduce22').css('pointer-events','auto'); },2500);
document.form2.to_go11.value = document.form4.to_go11.value;
aux--;
capturar();
}
}
}
//-------------------------------------------------
if (botoncito=="e4"){
if ((a4=="to_listen")||(a4=="listening")) {
if(a4=="to_listen"){ 
activar1[3] = 1;
}else
if(a4=="listening"){ 
suplente1[3] = 1;
}
$('#to_listen1').css('opacity','0.6');
$(form2.to_listen).css('pointer-events','none'); 
$(form2.to_listen).css('border','3px solid #308c58');
$(form2.to_listen).css('opacity','0.6');
$('#e4').css('pointer-events','none'); 
$('#e4').css('opacity','0.6');
bigbang4.classList.remove('bigbang');
setTimeout(function(){$('#reproduce33').css('opacity','0.9');$('#reproduce33').css('pointer-events','auto');},600);
document.form2.to_listen.value = document.form4.to_listen.value;
document.getElementById('button4').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
$(form2.to_listen).css('border','3px solid #fc484c');
$('#campo4').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a4!="to_listen")){
$('#to_listen1').css('opacity','0.6');
$(form2.to_listen).css('pointer-events','none'); 
$(form2.to_listen).css('opacity','0.6');
$('#e4').css('pointer-events','none'); 
$('#e4').css('opacity','0.6');
bigbang4.classList.remove('bigbang');
setTimeout(function(){$('#mostra4').css('display','inline');$('#velkan4').css('display','none'); $('#reproduce33').css('opacity','0.9');activar1[3] = 1;$('#reproduce33').css('pointer-events','auto');},2500);
document.form2.to_listen.value = document.form4.to_listen.value;
aux--;
capturar();
}
}
}

//-------------------------------------------------
if (botoncito=="e5"){
if ((a5=="to_eat")||(a5=="eating")) {
if(a5=="to_eat"){ 
activar1[4] = 1;
}else
if(a5=="eating"){ 
suplente1[4] = 1;
}
$('#to_eat1').css('opacity','0.6');
$(form2.to_eat).css('pointer-events','none'); 
$(form2.to_eat).css('border','3px solid #308c58');
$(form2.to_eat).css('opacity','0.6');
$('#e5').css('pointer-events','none'); 
$('#e5').css('opacity','0.6');
bigbang5.classList.remove('bigbang');
setTimeout(function(){$('#reproduce44').css('opacity','0.9');$('#reproduce44').css('pointer-events','auto');},600);
document.form2.to_eat.value = document.form4.to_eat.value;
document.getElementById('button5').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
$(form2.to_eat).css('border','3px solid #fc484c');
$('#campo5').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a5!="to_eat")){
$('#to_eat1').css('opacity','0.6');
$(form2.to_eat).css('pointer-events','none'); 
$(form2.to_eat).css('opacity','0.6');
$('#e5').css('pointer-events','none'); 
$('#e5').css('opacity','0.6');
bigbang5.classList.remove('bigbang');
setTimeout(function(){$('#mostra5').css('display','inline');$('#velkan5').css('display','none'); $('#reproduce44').css('opacity','0.9');activar1[4] = 1;$('#reproduce44').css('pointer-events','auto');},2500);
document.form2.to_eat.value = document.form4.to_eat.value;
aux--;
capturar();
}
}
}

//-------------------------------------------------
if (botoncito=="e6"){
if ((a6=="to_drink")||(a6=="drinking")) {
if(a6=="to_drink"){ 
activar1[5] = 1;
}else
if(a6=="drinking"){ 
suplente1[5] = 1;
}
$('#to_drink1').css('opacity','0.6');
$(form2.to_drink).css('pointer-events','none'); 
$(form2.to_drink).css('border','3px solid #308c58');
$(form2.to_drink).css('opacity','0.6');
$('#e6').css('pointer-events','none'); 
$('#e6').css('opacity','0.6');
bigbang6.classList.remove('bigbang');
setTimeout(function(){$('#reproduce55').css('opacity','0.9');$('#reproduce55').css('pointer-events','auto');},600);
document.form2.to_drink.value = document.form4.to_drink.value;
document.getElementById('button6').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
$(form2.to_drink).css('border','3px solid #fc484c');
$('#campo6').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a6!="to_drink")){
$('#to_drink1').css('opacity','0.6');
$(form2.to_drink).css('pointer-events','none'); 
$(form2.to_drink).css('opacity','0.6');
$('#e6').css('pointer-events','none'); 
$('#e6').css('opacity','0.6');
bigbang6.classList.remove('bigbang');
setTimeout(function(){$('#mostra6').css('display','inline');$('#velkan6').css('display','none'); $('#reproduce55').css('opacity','0.9');activar1[5] = 1;$('#reproduce55').css('pointer-events','auto');},2500);
document.form2.to_drink.value = document.form4.to_drink.value;
aux--;
capturar();
}
}
}

//-------------------------------------------------
if (botoncito=="e7"){
if ((a7=="to_dance")||(a7=="dancing")) {
if(a7=="to_dance"){ 
activar1[6] = 1;
}else
if(a7=="dancing"){ 
suplente1[6] = 1;
}
$('#to_dance1').css('opacity','0.6');
$(form2.to_dance).css('pointer-events','none'); 
$(form2.to_dance).css('border','3px solid #308c58');
$(form2.to_dance).css('opacity','0.6');
$('#e7').css('pointer-events','none'); 
$('#e7').css('opacity','0.6');
bigbang7.classList.remove('bigbang');
setTimeout(function(){$('#reproduce66').css('opacity','0.9');$('#reproduce66').css('pointer-events','auto'); },600);
document.form2.to_dance.value = document.form4.to_dance.value;
document.getElementById('button7').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
$(form2.to_dance).css('border','3px solid #fc484c');
$('#campo7').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a7!="to_dance")){
$('#to_dance1').css('opacity','0.6');
$(form2.to_dance).css('pointer-events','none'); 
$(form2.to_dance).css('opacity','0.6');
$('#e7').css('pointer-events','none'); 
$('#e7').css('opacity','0.6');
bigbang7.classList.remove('bigbang');
setTimeout(function(){$('#mostra7').css('display','inline');$('#velkan7').css('display','none'); $('#reproduce66').css('opacity','0.9');activar1[6] = 1;$('#reproduce66').css('pointer-events','auto');},2500);
document.form2.to_dance.value = document.form4.to_dance.value;
aux--;
capturar();
}
}
}

//-----------------------------------------------------------------------------------------------------------------------

cuentabien=homero1+homero2+homero3+homero4+homero5+homero6+homero7;
cuentamal=homero11+homero22+homero33+homero44+homero55+homero66+homero77;
if(cuentabien+cuentamal==7){

setTimeout(function(){
$('.alumbraobj').css('opacity','0.4');
$('.alumbraobj').css('pointer-events','none');
$('#escuchar').css('display','inline-block');
$('#escuchar2').css('display','inline-block');	
$('#muestrame1').css('display','inline');
document.getElementById('muestrame1').className = "muestrame1";	
},1000);
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

//-----------------------------------------------------------------------------------------------------------------------
function carga(){
empezar();
$('#listeniando').css('visibility','visible');
$('.sig').css('opacity','1');
}