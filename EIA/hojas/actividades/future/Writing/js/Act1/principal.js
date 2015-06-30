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
var activar = new Array(10);
var activar1 = new Array(10);
var suplente = new Array(10);
var suplente1 = new Array(10);
var a1="";
var a2="";
var a3="";
var a4="";
var a5="";
var a6="";
var a7="";
var a8="";
var a9="";
var a10="";
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
var homero8=0;
var homero9=0;
var homero10=0;
var homero11=0;
var homero22=0;
var homero33=0;
var homero44=0;
var homero55=0;
var homero66=0;
var homero77=0;
var homero88=0;
var homero99=0;
var homero1010=0;
var cosiño=0;
var cosiño1=0;
var contador=0;
var contador1=0;
var contador2=0;
var contador3=0;
var contador4=0;
var contador5=0;
var contador6=0;
var contador7=0;
var contador8=0;
var contador9=0;
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
if((ubic=="is_going_to_travel")&&((activar[0] == 1)||(suplente[0] == 1))){
if(activar[0] == 1){
audio=document.getElementById('a1');	
}else
if(suplente[0] == 1){
audio=document.getElementById('aa1');
}
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
if((ubic=="is_going_to_relax")&&((activar[1] == 1)||(suplente[1] == 1))){
if(activar[1] == 1){
audio=document.getElementById('a2');	
}else
if(suplente[1] == 1){
audio=document.getElementById('aa2');
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
if((ubic=="is_going_to_buy")&&((activar[2] == 1)||(suplente[2] == 1))){
if(activar[2] == 1){
audio=document.getElementById('a3');	
}else
if(suplente[2] == 1){
audio=document.getElementById('aa3');
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
if((ubic=="am_going_to_work")&&((activar[3] == 1)||(suplente[3] == 1))){
if(activar[3] == 1){
audio=document.getElementById('a4');
}else
if(suplente[3] == 1){
audio=document.getElementById('aa4');
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
if((ubic=="is_going_to_join")&&((activar[4] == 1)||(suplente[4] == 1))){
if(activar[4] == 1){
audio=document.getElementById('a5');	
}else
if(suplente[4] == 1){
audio=document.getElementById('aa5');
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
if((ubic=="are_going_to_celebrate")&&((activar[5] == 1)||(suplente[5] == 1))){
if(activar[5] == 1){
audio=document.getElementById('a6');	
}else
if(suplente[5] == 1){
audio=document.getElementById('aa6');
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
if((ubic=="is_going_to_play")&&((activar[6] == 1)||(suplente[6] == 1))){
if(activar[6] == 1){
audio=document.getElementById('a7');
}else
if(suplente[6] == 1){
audio=document.getElementById('aa7');
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

//------------------------------------------
if((ubic=="am_going_to_have")&&((activar[7] == 1)||(suplente[7] == 1))){
if(activar[7] == 1){
audio=document.getElementById('a8');
}else
if(suplente[7] == 1){
audio=document.getElementById('aa8');
}
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce7").css('display','inline');
$("#pause").css('display','none');
m++;
contador7++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce7").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
m++;
}
if (contador7==1){
$('#perendengues8').css('pointer-events','auto'); 
document.getElementById("primero7").checked = true;
$('#perendengues8').css('pointer-events','none'); 
}
if (contador7==2){
$('#perendengues8').css('pointer-events','auto'); 
document.getElementById("segundo7").checked = true;
$('#perendengues8').css('pointer-events','none'); 
}
if (contador7==3){
$('#perendengues8').css('pointer-events','auto'); 
document.getElementById("tercero7").checked = true;
$('#perendengues8').css('pointer-events','none'); 
$("#reproduce7").css('opacity','0.4');
$('#reproduce7').css('pointer-events','none');
$("#reproduce77").css('opacity','0.4');
$('#reproduce77').css('pointer-events','none');
}
}
//------------------------------------------
if((ubic=="is_going_to_sunbathe")&&((activar[8] == 1)||(suplente[8] == 1))){
if(activar[8] == 1){
audio=document.getElementById('a9');
}else
if(suplente[8] == 1){
audio=document.getElementById('aa9');
}
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce8").css('display','inline');
$("#pause").css('display','none');
m++;
contador8++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce8").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
m++;
}
if (contador8==1){
$('#perendengues9').css('pointer-events','auto'); 
document.getElementById("primero8").checked = true;
$('#perendengues9').css('pointer-events','none'); 
}
if (contador8==2){
$('#perendengues9').css('pointer-events','auto'); 
document.getElementById("segundo8").checked = true;
$('#perendengues9').css('pointer-events','none'); 
}
if (contador8==3){
$('#perendengues9').css('pointer-events','auto'); 
document.getElementById("tercero8").checked = true;
$('#perendengues9').css('pointer-events','none'); 
$("#reproduce8").css('opacity','0.4');
$('#reproduce8').css('pointer-events','none');
$("#reproduce88").css('opacity','0.4');
$('#reproduce88').css('pointer-events','none');
}
}
//------------------------------------------
if((ubic=="is_going_to_take")&&((activar[9] == 1)||(suplente[9] == 1))){
if(activar[9] == 1){
audio=document.getElementById('a10');
}else
if(suplente[9] == 1){
audio=document.getElementById('aa10');
}
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce9").css('display','inline');
$("#pause").css('display','none');
m++;
contador9++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce9").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
m++;
}
if (contador9==1){
$('#perendengues10').css('pointer-events','auto'); 
document.getElementById("primero9").checked = true;
$('#perendengues10').css('pointer-events','none'); 
}
if (contador9==2){
$('#perendengues10').css('pointer-events','auto'); 
document.getElementById("segundo9").checked = true;
$('#perendengues10').css('pointer-events','none'); 
}
if (contador9==3){
$('#perendengues10').css('pointer-events','auto'); 
document.getElementById("tercero9").checked = true;
$('#perendengues10').css('pointer-events','none'); 
$("#reproduce9").css('opacity','0.4');
$('#reproduce9').css('pointer-events','none');
$("#reproduce99").css('opacity','0.4');
$('#reproduce99').css('pointer-events','none');
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
audio=document.getElementById('aa1');
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

//------------------------------------------
if((more==1)&&((activar1[1] == 1)||(suplente1[1] == 1))){
if(activar1[1] == 1){
audio=document.getElementById('a2');
}else
if(suplente1[1] == 1){
audio=document.getElementById('aa2');
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
audio=document.getElementById('a3');
}else
if(suplente1[2] == 1){	
audio=document.getElementById('aa3');
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
audio=document.getElementById('a4');	
}else
if(suplente1[3] == 1){
audio=document.getElementById('aa4');
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
//------------------------------------------
if((more==4)&&((activar1[4] == 1)||(suplente1[4] == 1))){
if(activar1[4] == 1){
audio=document.getElementById('a5');
}else
if(suplente1[4] == 1){
audio=document.getElementById('aa5');	
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
audio=document.getElementById('a6');
}else
if(suplente1[5] == 1){
audio=document.getElementById('aa6');	
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
if((more==6)&&((activar1[6] == 1)||(suplente1[6] == 1))){
if(activar1[6] == 1){
audio=document.getElementById('a7');
}else
if(suplente1[6] == 1){
audio=document.getElementById('aa7');	
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

//------------------------------------------
if((more==7)&&((activar1[7] == 1)||(suplente1[7] == 1))){
if(activar1[7] == 1){
audio=document.getElementById('a8');
}else
if(suplente1[7] == 1){
audio=document.getElementById('aa8');	
}
pausito = document.getElementById("pause1");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce77").css('display','inline');
$("#pause1").css('display','none');
m++;
contador7++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce77").css('display','none');
$("#pause1").css('display','inline'); 
audio.currentTime = 0;
m++;
}
if (contador7==1){
$('#perendengues8').css('pointer-events','auto'); 
document.getElementById("primero7").checked = true;
$('#perendengues8').css('pointer-events','none'); 
}
if (contador7==2){
$('#perendengues8').css('pointer-events','auto'); 
document.getElementById("segundo7").checked = true;
$('#perendengues8').css('pointer-events','none'); 
}
if (contador7==3){
$('#perendengues8').css('pointer-events','auto'); 
document.getElementById("tercero7").checked = true;
$('#perendengues8').css('pointer-events','none'); 
$("#reproduce77").css('opacity','0.4');
$('#reproduce77').css('pointer-events','none');
$("#reproduce7").css('opacity','0.4');
$('#reproduce7').css('pointer-events','none');
}
}
//------------------------------------------
if((more==8)&&((activar1[8] == 1)||(suplente1[8] == 1))){
if(activar1[8] == 1){
audio=document.getElementById('a9');
}else
if(suplente1[8] == 1){
audio=document.getElementById('aa9');	
}
pausito = document.getElementById("pause1");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce88").css('display','inline');
$("#pause1").css('display','none');
m++;
contador8++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce88").css('display','none');
$("#pause1").css('display','inline'); 
audio.currentTime = 0;
m++;
}
if (contador8==1){
$('#perendengues9').css('pointer-events','auto'); 
document.getElementById("primero8").checked = true;
$('#perendengues9').css('pointer-events','none'); 
}
if (contador8==2){
$('#perendengues9').css('pointer-events','auto'); 
document.getElementById("segundo8").checked = true;
$('#perendengues9').css('pointer-events','none'); 
}
if (contador8==3){
$('#perendengues9').css('pointer-events','auto'); 
document.getElementById("tercero8").checked = true;
$('#perendengues9').css('pointer-events','none'); 
$("#reproduce88").css('opacity','0.4');
$('#reproduce88').css('pointer-events','none');
$("#reproduce8").css('opacity','0.4');
$('#reproduce8').css('pointer-events','none');
}
}
//------------------------------------------
if(((more==9)||(more==-1))&&((activar1[9] == 1)||(suplente1[9] == 1))){
if(activar1[9] == 1){
audio=document.getElementById('a10');
}else
if(suplente1[9] == 1){
audio=document.getElementById('aa10');	
}
pausito = document.getElementById("pause1");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce99").css('display','inline');
$("#pause1").css('display','none');
m++;
contador9++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce99").css('display','none');
$("#pause1").css('display','inline'); 
audio.currentTime = 0;
m++;
}
if (contador9==1){
$('#perendengues10').css('pointer-events','auto'); 
document.getElementById("primero9").checked = true;
$('#perendengues10').css('pointer-events','none'); 
}
if (contador9==2){
$('#perendengues10').css('pointer-events','auto'); 
document.getElementById("segundo9").checked = true;
$('#perendengues10').css('pointer-events','none'); 
}
if (contador9==3){
$('#perendengues10').css('pointer-events','auto'); 
document.getElementById("tercero9").checked = true;
$('#perendengues10').css('pointer-events','none'); 
$("#reproduce99").css('opacity','0.4');
$('#reproduce99').css('pointer-events','none');
$("#reproduce9").css('opacity','0.4');
$('#reproduce9').css('pointer-events','none');
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
if (id=="is_going_to_relax"){
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
if (id=="is_going_to_buy"){
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
if (id=="am_going_to_work"){
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
if (id=="is_going_to_join"){
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
if (id=="are_going_to_celebrate"){
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
if (id=="is_going_to_play"){
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
if (id=="am_going_to_have"){
$('.campos').css('display','none');
$('#campo8').css('display','inline');
$('.labeles').css('display','none');
$('#label88').css('display','inline');
$('#label8').css('display','inline');
$('.sig').css('display','none');
$('#button8').css('display','inline');
if(changos==0){
$('.perendengues').css('display','none');
$('#perendengues8').css('display','inline');
if(cosiño==0){
$('.elnav').css('display','none');
$('#reproduce7').css('display','inline');
}
}
$('.pq').css('display','none');
$('#mostrando88').css('display','inline');
}
//-------------------------------------------------
if (id=="is_going_to_sunbathe"){
$('.campos').css('display','none');
$('#campo9').css('display','inline');
$('.labeles').css('display','none');
$('#label99').css('display','inline');
$('#label9').css('display','inline');
$('.sig').css('display','none');
$('#button9').css('display','inline');
if(changos==0){
$('.perendengues').css('display','none');
$('#perendengues9').css('display','inline');
if(cosiño==0){
$('.elnav').css('display','none');
$('#reproduce8').css('display','inline');
}
}
$('.pq').css('display','none');
$('#mostrando99').css('display','inline');
}
//-------------------------------------------------
if (id=="is_going_to_take"){
$('.campos').css('display','none');
$('#campo10').css('display','inline');
$('.labeles').css('display','none');
$('#label1010').css('display','inline');
$('#label10').css('display','inline');
$('.sig').css('display','none');
$('#button10').css('display','inline');
if(changos==0){
$('.perendengues').css('display','none');
$('#perendengues10').css('display','inline');
if(cosiño==0){
$('.elnav').css('display','none');
$('#reproduce9').css('display','inline');
}
}
$('.pq').css('display','none');
$('#mostrando1010').css('display','inline');
}
//-------------------------------------------------
if (id=="is_going_to_travel"){
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
if (ubic=="is_going_to_travel"){
recibe=document.getElementById("campo1").value;
}
//-------------------------------------------------
if (ubic=="is_going_to_relax"){
recibe=document.getElementById("campo2").value;
}
//-------------------------------------------------
if (ubic=="is_going_to_buy"){
recibe=document.getElementById("campo3").value;
}
//-------------------------------------------------
if (ubic=="am_going_to_work"){
recibe=document.getElementById("campo4").value;
}
//-------------------------------------------------
if (ubic=="is_going_to_join"){
recibe=document.getElementById("campo5").value;
}
//-------------------------------------------------
if (ubic=="are_going_to_celebrate"){
recibe=document.getElementById("campo6").value;
}
//-------------------------------------------------
if (ubic=="is_going_to_play"){
recibe=document.getElementById("campo7").value;
}
//-------------------------------------------------
if (ubic=="am_going_to_have"){
recibe=document.getElementById("campo8").value;
}
//-------------------------------------------------
if (ubic=="is_going_to_sunbathe"){
recibe=document.getElementById("campo9").value;
}
//-------------------------------------------------
if (ubic=="is_going_to_take"){
recibe=document.getElementById("campo10").value;
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
if(    ((ubic=="is_going_to_travel")&&((recibe=="is_going_to_travel")||(recibe=="will_travel")) )||((ubic=="is_going_to_relax")&&((recibe=="is_going_to_relax")||(recibe=="will_relax"))) ||((ubic=="is_going_to_buy")&&((recibe=="is_going_to_buy")||(recibe=="will_buy"))) ||((ubic=="am_going_to_work")&&((recibe=="am_going_to_work")||(recibe=="will_work")))||((ubic=="is_going_to_join")&&((recibe=="is_going_to_join")||(recibe=="will_join")))||((ubic=="are_going_to_celebrate")&&((recibe=="are_going_to_celebrate")||(recibe=="will_celebrate")))||((ubic=="is_going_to_play")&&((recibe=="is_going_to_play")||(recibe=="will_play")))||((ubic=="am_going_to_have")&&((recibe=="am_going_to_have")||(recibe=="will_have")))||((ubic=="is_going_to_sunbathe")&&((recibe=="is_going_to_sunbathe")||(recibe=="will_sunbathe")))||((ubic=="is_going_to_take")&&((recibe=="is_going_to_take")||(recibe=="will_take")))  ){ 	
document.getElementById(ubic).disabled = true;  

if((recibe=="is_going_to_travel")||(recibe=="will_travel")){
if(recibe=="is_going_to_travel"){ 
activar[0] = 1;
}else
if(recibe=="will_travel"){ 
suplente[0] = 1;
}

$('#campo1').css('pointer-events','none'); 
$('#campo1').css('border','3px solid #308c58');
$('#button1').css('opacity','0.6');
$('#button1').css('pointer-events','none'); 
bigbang11.classList.remove('bigbang');
setTimeout(function(){$('#reproduce').css('opacity','0.9');$('#reproduce').css('pointer-events','auto'); /*activar[0] = 1;*/},500);
homero1=1;
document.form4.is_going_to_travel.value = document.form2.is_going_to_travel.value;
document.getElementById('e1').click();
}

//--------------------------------------

if((recibe=="is_going_to_relax")||(recibe=="will_relax")){
if(recibe=="is_going_to_relax"){ 
activar[1] = 1;
}else
if(recibe=="will_relax"){ 
suplente[1] = 1;
}

$('#campo2').css('pointer-events','none'); 
$('#campo2').css('border','3px solid #308c58');
$('#button2').css('opacity','0.6');
$('#button2').css('pointer-events','none'); 
bigbang22.classList.remove('bigbang');
setTimeout(function(){$('#reproduce1').css('opacity','0.9');$('#reproduce1').css('pointer-events','auto'); /*activar[1] = 1;*/},500);
homero2=1; 
document.form4.is_going_to_relax.value = document.form2.is_going_to_relax.value;
document.getElementById('e2').click();
}

//--------------------------------------

if((recibe=="is_going_to_buy")||(recibe=="will_buy")){

if((recibe)=="is_going_to_buy"){ 
activar[2] = 1;
}else
if((recibe)=="will_buy"){ 
suplente[2] = 1;
}

$('#campo3').css('pointer-events','none'); 
$('#campo3').css('border','3px solid #308c58');
$('#button3').css('opacity','0.6');
$('#button3').css('pointer-events','none'); 
bigbang33.classList.remove('bigbang');
setTimeout(function(){$('#reproduce2').css('opacity','0.9');$('#reproduce2').css('pointer-events','auto'); },500);
homero3=1;
document.form4.is_going_to_buy.value = document.form2.is_going_to_buy.value;
document.getElementById('e3').click();
}

//--------------------------------------
if((recibe=="am_going_to_work")||(recibe=="will_work")){
if(recibe=="am_going_to_work"){ 
activar[3] = 1;
}else
if(recibe=="will_work"){ 
suplente[3] = 1;
}	
$('#campo4').css('pointer-events','none'); 
$('#campo4').css('border','3px solid #308c58');
$('#button4').css('opacity','0.6');
$('#button4').css('pointer-events','none'); 
bigbang44.classList.remove('bigbang');
setTimeout(function(){$('#reproduce3').css('opacity','0.9');$('#reproduce3').css('pointer-events','auto'); },500);
homero4=1;
document.form4.am_going_to_work.value = document.form2.am_going_to_work.value;
document.getElementById('e4').click();
}

//--------------------------------------
if((recibe=="is_going_to_join")||(recibe=="will_join")){
if(recibe=="is_going_to_join"){ 
activar[4] = 1;
}else
if(recibe=="will_join"){ 
suplente[4] = 1;
}	
$('#campo5').css('pointer-events','none'); 
$('#campo5').css('border','3px solid #308c58');
$('#button5').css('opacity','0.6');
$('#button5').css('pointer-events','none'); 
bigbang55.classList.remove('bigbang');
setTimeout(function(){$('#reproduce4').css('opacity','0.9');$('#reproduce4').css('pointer-events','auto'); },500);
homero5=1;
document.form4.is_going_to_join.value = document.form2.is_going_to_join.value;
document.getElementById('e5').click();
}

//--------------------------------------
if((recibe=="are_going_to_celebrate")||(recibe=="will_celebrate")){ 
if(recibe=="are_going_to_celebrate"){ 
activar[5] = 1;
}else
if(recibe=="will_celebrate"){ 
suplente[5] = 1;
}
$('#campo6').css('pointer-events','none'); 
$('#campo6').css('border','3px solid #308c58');
$('#button6').css('opacity','0.6');
$('#button6').css('pointer-events','none'); 
bigbang66.classList.remove('bigbang');
setTimeout(function(){$('#reproduce5').css('opacity','0.9');$('#reproduce5').css('pointer-events','auto'); },500);
homero6=1;
document.form4.are_going_to_celebrate.value = document.form2.are_going_to_celebrate.value;
document.getElementById('e6').click();
}

//--------------------------------------

if((recibe=="is_going_to_play")||(recibe=="will_play")){
if(recibe=="is_going_to_play"){ 
activar[6] = 1;
}else
if(recibe=="will_play"){ 
suplente[6] = 1;
}
$('#campo7').css('pointer-events','none'); 
$('#campo7').css('border','3px solid #308c58');
$('#button7').css('opacity','0.6');
$('#button7').css('pointer-events','none'); 
bigbang77.classList.remove('bigbang');
setTimeout(function(){$('#reproduce6').css('opacity','0.9');$('#reproduce6').css('pointer-events','auto');},500);
homero7=1;
document.form4.is_going_to_play.value = document.form2.is_going_to_play.value;
document.getElementById('e7').click();
}
//--------------------------------------
if((recibe=="am_going_to_have")||(recibe=="will_have")){
if(recibe=="am_going_to_have"){ 
activar[7] = 1;
}else
if(recibe=="will_have"){ 
suplente[7] = 1;
}
$('#campo8').css('pointer-events','none'); 
$('#campo8').css('border','3px solid #308c58');
$('#button8').css('opacity','0.6');
$('#button8').css('pointer-events','none'); 
bigbang88.classList.remove('bigbang');
setTimeout(function(){$('#reproduce7').css('opacity','0.9');$('#reproduce7').css('pointer-events','auto'); },500);
homero8=1;
document.form4.am_going_to_have.value = document.form2.am_going_to_have.value;
document.getElementById('e8').click();
}
//--------------------------------------

if((recibe=="is_going_to_sunbathe")||(recibe=="will_sunbathe")){
if(recibe=="is_going_to_sunbathe"){ 
activar[8] = 1;
}else
if(recibe=="will_sunbathe"){ 
suplente[8] = 1;
}
$('#campo9').css('pointer-events','none'); 
$('#campo9').css('border','3px solid #308c58');
$('#button9').css('opacity','0.6');
$('#button9').css('pointer-events','none'); 
bigbang99.classList.remove('bigbang');
setTimeout(function(){$('#reproduce8').css('opacity','0.9');$('#reproduce8').css('pointer-events','auto');},500);
homero9=1;
document.form4.is_going_to_sunbathe.value = document.form2.is_going_to_sunbathe.value;
document.getElementById('e9').click();
}
//--------------------------------------
if((recibe=="is_going_to_take")||(recibe=="will_take")){
if(recibe=="is_going_to_take"){ 
activar[9] = 1;
}else
if(recibe=="will_take"){ 
suplente[9] = 1;
}	
$('#campo10').css('pointer-events','none'); 
$('#campo10').css('border','3px solid #308c58');
$('#button10').css('opacity','0.6');
$('#button10').css('pointer-events','none'); 
bigbang1010.classList.remove('bigbang');
setTimeout(function(){$('#reproduce9').css('opacity','0.9');$('#reproduce9').css('pointer-events','auto');},500);
homero10=1;
document.form4.is_going_to_take.value = document.form2.is_going_to_take.value;
document.getElementById('e10').click();
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
document.form4.is_going_to_travel.value = document.form2.is_going_to_travel.value;
document.form4.is_going_to_relax.value = document.form2.is_going_to_relax.value;
document.form4.is_going_to_buy.value = document.form2.is_going_to_buy.value;
document.form4.am_going_to_work.value = document.form2.am_going_to_work.value;
document.form4.is_going_to_join.value = document.form2.is_going_to_join.value;
document.form4.are_going_to_celebrate.value = document.form2.are_going_to_celebrate.value;
document.form4.is_going_to_play.value = document.form2.is_going_to_play.value;
document.form4.am_going_to_have.value = document.form2.am_going_to_have.value;
document.form4.is_going_to_sunbathe.value = document.form2.is_going_to_sunbathe.value;
document.form4.is_going_to_take.value = document.form2.is_going_to_take.value;

if(ubic=="is_going_to_travel"){
$('#campo1').css('border','3px solid #fc484c');
$(form4.is_going_to_travel).css('border','3px solid #fc484c');
}
if(ubic=="is_going_to_relax"){
$('#campo2').css('border','3px solid #fc484c');
$(form4.is_going_to_relax).css('border','3px solid #fc484c');
}
if(ubic=="is_going_to_buy"){
$('#campo3').css('border','3px solid #fc484c');
$(form4.is_going_to_buy).css('border','3px solid #fc484c');
}
if (ubic=="am_going_to_work"){
$('#campo4').css('border','3px solid #fc484c');
$(form4.am_going_to_work).css('border','3px solid #fc484c');
}
if (ubic=="is_going_to_join"){
$('#campo5').css('border','3px solid #fc484c');
$(form4.is_going_to_join).css('border','3px solid #fc484c');
}
if (ubic=="are_going_to_celebrate"){
$('#campo6').css('border','3px solid #fc484c');
$(form4.are_going_to_celebrate).css('border','3px solid #fc484c');
}
if (ubic=="is_going_to_play"){
$('#campo7').css('border','3px solid #fc484c');
$(form4.is_going_to_play).css('border','3px solid #fc484c');
}
if (ubic=="am_going_to_have"){
$('#campo8').css('border','3px solid #fc484c');
$(form4.am_going_to_have).css('border','3px solid #fc484c');
}
if (ubic=="is_going_to_sunbathe"){
$('#campo9').css('border','3px solid #fc484c');
$(form4.is_going_to_sunbathe).css('border','3px solid #fc484c');
}
if (ubic=="is_going_to_take"){
$('#campo10').css('border','3px solid #fc484c');
$(form4.is_going_to_take).css('border','3px solid #fc484c');
}
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="is_going_to_travel")){
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
document.form4.is_going_to_travel.value = document.form2.is_going_to_travel.value;
document.getElementById('e1').click();
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="is_going_to_relax")){
bigbang22.classList.remove('bigbang');
document.getElementById('t1').play();
setTimeout(function(){$('#caifanes2').css('display','inline');$('#reproduce1').css('opacity','0.9');activar[1] = 1; document.getElementById('reproduce1').click(); $('#reproduce1').css('pointer-events','auto');$('#velk2').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo2').css('pointer-events','none'); 
$('#campo2').css('border','3px solid #fc484c');
$('#button2').css('opacity','0.6');
$('#button2').css('pointer-events','none');
document.getElementById('button2').disabled = true; 
homero22=1;
document.form4.is_going_to_relax.value = document.form2.is_going_to_relax.value;
document.getElementById('e2').click();
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="is_going_to_buy")){
bigbang33.classList.remove('bigbang');
document.getElementById('t1').play();
setTimeout(function(){$('#caifanes3').css('display','inline'); $('#reproduce2').css('opacity','0.9');activar[2] = 1; document.getElementById('reproduce2').click(); $('#reproduce2').css('pointer-events','auto');$('#velk3').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo3').css('pointer-events','none'); 
$('#campo3').css('border','3px solid #fc484c');
$('#button3').css('opacity','0.6');
$('#button3').css('pointer-events','none');
document.getElementById('button3').disabled = true; 
homero33=1; 
document.form4.is_going_to_buy.value = document.form2.is_going_to_buy.value;
document.getElementById('e3').click();
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="am_going_to_work")){
bigbang44.classList.remove('bigbang');
document.getElementById('t1').play();
setTimeout(function(){$('#caifanes4').css('display','inline'); $('#reproduce3').css('opacity','0.9');activar[3] = 1; document.getElementById('reproduce3').click(); $('#reproduce3').css('pointer-events','auto');$('#velk4').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo4').css('pointer-events','none'); 
$('#campo4').css('border','3px solid #fc484c');
$('#button4').css('opacity','0.6');
$('#button4').css('pointer-events','none');
document.getElementById('button4').disabled = true; 
homero44=1;
document.form4.am_going_to_work.value = document.form2.am_going_to_work.value;
document.getElementById('e4').click();
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="is_going_to_join")){
bigbang55.classList.remove('bigbang');
document.getElementById('t1').play();
setTimeout(function(){$('#caifanes5').css('display','inline'); $('#reproduce4').css('opacity','0.9');activar[4] = 1; document.getElementById('reproduce4').click(); $('#reproduce4').css('pointer-events','auto');$('#velk5').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo5').css('pointer-events','none'); 
$('#campo5').css('border','3px solid #fc484c');
$('#button5').css('opacity','0.6');
$('#button5').css('pointer-events','none');
document.getElementById('button5').disabled = true;
homero55=1;
document.form4.is_going_to_join.value = document.form2.is_going_to_join.value;
document.getElementById('e5').click();
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="are_going_to_celebrate")){
bigbang66.classList.remove('bigbang');
document.getElementById('t1').play();
setTimeout(function(){$('#caifanes6').css('display','inline'); $('#reproduce5').css('opacity','0.9');activar[5] = 1; document.getElementById('reproduce5').click(); $('#reproduce5').css('pointer-events','auto');$('#velk6').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo6').css('pointer-events','none'); 
$('#campo6').css('border','3px solid #fc484c');
$('#button6').css('opacity','0.6');
$('#button6').css('pointer-events','none');
document.getElementById('button6').disabled = true;
homero66=1;
document.form4.are_going_to_celebrate.value = document.form2.are_going_to_celebrate.value;
document.getElementById('e6').click();
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="is_going_to_play")){
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
document.form4.is_going_to_play.value = document.form2.is_going_to_play.value;
document.getElementById('e7').click();
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="am_going_to_have")){
bigbang88.classList.remove('bigbang');
document.getElementById('t1').play();
setTimeout(function(){$('#caifanes8').css('display','inline'); $('#reproduce7').css('opacity','0.9');activar[7] = 1; document.getElementById('reproduce7').click();$('#reproduce7').css('pointer-events','auto');$('#velk8').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo8').css('pointer-events','none'); 
$('#campo8').css('border','3px solid #fc484c');
$('#button8').css('opacity','0.6');
$('#button8').css('pointer-events','none');
document.getElementById('button8').disabled = true;
homero88=1;
document.form4.am_going_to_have.value = document.form2.am_going_to_have.value;
document.getElementById('e8').click();
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="is_going_to_sunbathe")){
bigbang99.classList.remove('bigbang');
document.getElementById('t1').play();
setTimeout(function(){$('#caifanes9').css('display','inline');$('#reproduce8').css('opacity','0.9');activar[8] = 1; document.getElementById('reproduce8').click();$('#reproduce8').css('pointer-events','auto');$('#velk9').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo9').css('pointer-events','none'); 
$('#campo9').css('border','3px solid #fc484c');
$('#button9').css('opacity','0.6');
$('#button9').css('pointer-events','none');
document.getElementById('button9').disabled = true;
homero99=1;
document.form4.is_going_to_sunbathe.value = document.form2.is_going_to_sunbathe.value;
document.getElementById('e9').click();
}
//-------------------------------------------------
if ((aux==3)&&(ubic=="is_going_to_take")){
bigbang1010.classList.remove('bigbang');
document.getElementById('t1').play();
setTimeout(function(){$('#caifanes10').css('display','inline');$('#reproduce9').css('opacity','0.9');activar[9] = 1; document.getElementById('reproduce9').click();$('#reproduce9').css('pointer-events','auto');$('#velk10').css('display','none');},2500);
$('#'+ubic).css('opacity','0.6');
$('#campo10').css('pointer-events','none'); 
$('#campo10').css('border','3px solid #fc484c');
$('#button10').css('opacity','0.6');
$('#button10').css('pointer-events','none');
document.getElementById('button10').disabled = true;
homero1010=1;
document.form4.is_going_to_take.value = document.form2.is_going_to_take.value;
document.getElementById('e10').click();
}
}
recibe="";
}

//---------------------------------------------------------------------------------------------------------------------------
function capturar1(botoncito){
var form2 = document.getElementById("form4");
for (i=0;i<form2.elements.length;i++){
a1=form2.is_going_to_travel.value;
a2=form2.is_going_to_relax.value;
a3=form2.is_going_to_buy.value;
a4=form2.am_going_to_work.value;
a5=form2.is_going_to_join.value;
a6=form2.are_going_to_celebrate.value;
a7=form2.is_going_to_play.value;
a8=form2.am_going_to_have.value;
a9=form2.is_going_to_sunbathe.value;
a10=form2.is_going_to_take.value;
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
a8=a8.toLowerCase();
a8=a8.replace(/\s/g,"_");
a9=a9.toLowerCase();
a9=a9.replace(/\s/g,"_");
a10=a10.toLowerCase();
a10=a10.replace(/\s/g,"_");
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
if ((a1 == "is_going_to_travel")||(a1 == "will_travel")) {
if(a1=="is_going_to_travel"){ 
activar1[0] = 1;
}else
if(a1=="will_travel"){ 
suplente1[0] = 1;
}
$('#is_going_to_travel1').css('opacity','0.6');
$(form2.is_going_to_travel).css('pointer-events','none'); 
$(form2.is_going_to_travel).css('border','3px solid #308c58');
$(form2.is_going_to_travel).css('opacity','0.6');
$('#e1').css('pointer-events','none'); 
$('#e1').css('opacity','0.6');
bigbang1.classList.remove('bigbang');
setTimeout(function(){$('#reproduce00').css('opacity','0.9');$('#reproduce00').css('pointer-events','auto');},600);
document.form2.is_going_to_travel.value = document.form4.is_going_to_travel.value;
document.getElementById('button1').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
$(form2.is_going_to_travel).css('border','3px solid #fc484c');
$('#campo1').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a1!="is_going_to_travel")){
$(form2.is_going_to_travel).css('pointer-events','none'); 
$('#is_going_to_travel1').css('opacity','0.6');
$(form2.is_going_to_travel).css('opacity','0.6');
$('#e1').css('pointer-events','none'); 
$('#e1').css('opacity','0.6');
bigbang1.classList.remove('bigbang');
setTimeout(function(){$('#mostra1').css('display','inline');$('#velkan1').css('display','none'); $('#reproduce00').css('opacity','0.9');activar1[0] = 1; $('#reproduce00').css('pointer-events','auto');},2500);
document.form2.is_going_to_travel.value = document.form4.is_going_to_travel.value;
aux--;
capturar();
}
}  
}

//-------------------------------------------------
if (botoncito=="e2"){
if ((a2=="is_going_to_relax")||(a2=="will_relax")) {

if(a2=="is_going_to_relax"){ 
activar1[1] = 1;
}else
if(a2=="will_relax"){ 
suplente1[1] = 1;
}

$('#is_going_to_relax1').css('opacity','0.6');
$(form2.is_going_to_relax).css('pointer-events','none'); 
$(form2.is_going_to_relax).css('border','3px solid #308c58');
$(form2.is_going_to_relax).css('opacity','0.6');
$('#e2').css('pointer-events','none'); 
$('#e2').css('opacity','0.6');
bigbang2.classList.remove('bigbang');
setTimeout(function(){$('#reproduce11').css('opacity','0.9');$('#reproduce11').css('pointer-events','auto');},600);
document.form2.is_going_to_relax.value = document.form4.is_going_to_relax.value;
document.getElementById('button2').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
$(form2.is_going_to_relax).css('border','3px solid #fc484c');
$('#campo2').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a2!="is_going_to_relax")){
$('#is_going_to_relax1').css('opacity','0.6');
$(form2.is_going_to_relax).css('pointer-events','none'); 
$(form2.is_going_to_relax).css('opacity','0.6');
$('#e2').css('pointer-events','none'); 
$('#e2').css('opacity','0.6');
bigbang2.classList.remove('bigbang');
setTimeout(function(){$('#mostra2').css('display','inline');$('#velkan2').css('display','none'); $('#reproduce11').css('opacity','0.9');activar1[1] = 1;$('#reproduce11').css('pointer-events','auto'); },2500);
document.form2.is_going_to_relax.value = document.form4.is_going_to_relax.value;
aux--;
capturar();
}
}
}
//-------------------------------------------------
if (botoncito=="e3"){
if ((a3=="is_going_to_buy")||(a3=="will_buy")) {
if(a3=="is_going_to_buy"){ 
activar1[2] = 1;
}else
if(a3=="will_buy"){ 
suplente1[2] = 1;
}

$('#is_going_to_buy1').css('opacity','0.6');
$(form2.is_going_to_buy).css('pointer-events','none'); 
$(form2.is_going_to_buy).css('border','3px solid #308c58');
$(form2.is_going_to_buy).css('opacity','0.6');
$('#e3').css('pointer-events','none'); 
$('#e3').css('opacity','0.6');
bigbang3.classList.remove('bigbang');
setTimeout(function(){$('#reproduce22').css('opacity','0.9');$('#reproduce22').css('pointer-events','auto');},600);
document.form2.is_going_to_buy.value = document.form4.is_going_to_buy.value;
document.getElementById('button3').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
$(form2.is_going_to_buy).css('border','3px solid #fc484c');
$('#campo3').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a3!="is_going_to_buy")){
$('#is_going_to_buy1').css('opacity','0.6');
$(form2.is_going_to_buy).css('pointer-events','none'); 
$(form2.is_going_to_buy).css('opacity','0.6');
$('#e3').css('pointer-events','none'); 
$('#e3').css('opacity','0.6');
bigbang3.classList.remove('bigbang');
setTimeout(function(){$('#mostra3').css('display','inline');$('#velkan3').css('display','none'); $('#reproduce22').css('opacity','0.9');activar1[2] = 1;$('#reproduce22').css('pointer-events','auto'); },2500);
document.form2.is_going_to_buy.value = document.form4.is_going_to_buy.value;
aux--;
capturar();
}
}
}
//-------------------------------------------------
if (botoncito=="e4"){
if ((a4=="am_going_to_work")||(a4=="will_work")) {
if(a4=="am_going_to_work"){ 
activar1[3] = 1;
}else
if(a4=="will_work"){ 
suplente1[3] = 1;
}

$('#am_going_to_work1').css('opacity','0.6');
$(form2.am_going_to_work).css('pointer-events','none'); 
$(form2.am_going_to_work).css('border','3px solid #308c58');
$(form2.am_going_to_work).css('opacity','0.6');
$('#e4').css('pointer-events','none'); 
$('#e4').css('opacity','0.6');
bigbang4.classList.remove('bigbang');
setTimeout(function(){$('#reproduce33').css('opacity','0.9');$('#reproduce33').css('pointer-events','auto'); /*activar1[3] = 1;*/},600);
document.form2.am_going_to_work.value = document.form4.am_going_to_work.value;
document.getElementById('button4').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
$(form2.am_going_to_work).css('border','3px solid #fc484c');
$('#campo4').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a4!="am_going_to_work")){
$('#am_going_to_work1').css('opacity','0.6');
$(form2.am_going_to_work).css('pointer-events','none'); 
$(form2.am_going_to_work).css('opacity','0.6');
$('#e4').css('pointer-events','none'); 
$('#e4').css('opacity','0.6');
bigbang4.classList.remove('bigbang');
setTimeout(function(){$('#mostra4').css('display','inline');$('#velkan4').css('display','none'); $('#reproduce33').css('opacity','0.9');activar1[3] = 1;$('#reproduce33').css('pointer-events','auto');},2500);
document.form2.am_going_to_work.value = document.form4.am_going_to_work.value;
aux--;
capturar();
}
}
}

//-------------------------------------------------
if (botoncito=="e5"){
if ((a5=="is_going_to_join")||(a5=="will_join")) {
if(a5=="is_going_to_join"){ 
activar1[4] = 1;
}else
if(a5=="will_join"){ 
suplente1[4] = 1;
}

$('#is_going_to_join1').css('opacity','0.6');
$(form2.is_going_to_join).css('pointer-events','none'); 
$(form2.is_going_to_join).css('border','3px solid #308c58');
$(form2.is_going_to_join).css('opacity','0.6');
$('#e5').css('pointer-events','none'); 
$('#e5').css('opacity','0.6');
bigbang5.classList.remove('bigbang');
setTimeout(function(){$('#reproduce44').css('opacity','0.9');$('#reproduce44').css('pointer-events','auto');},600);
document.form2.is_going_to_join.value = document.form4.is_going_to_join.value;
document.getElementById('button5').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
$(form2.is_going_to_join).css('border','3px solid #fc484c');
$('#campo5').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a5!="is_going_to_join")){
$('#is_going_to_join1').css('opacity','0.6');
$(form2.is_going_to_join).css('pointer-events','none'); 
$(form2.is_going_to_join).css('opacity','0.6');
$('#e5').css('pointer-events','none'); 
$('#e5').css('opacity','0.6');
bigbang5.classList.remove('bigbang');
setTimeout(function(){$('#mostra5').css('display','inline');$('#velkan5').css('display','none'); $('#reproduce44').css('opacity','0.9');activar1[4] = 1;$('#reproduce44').css('pointer-events','auto');},2500);
document.form2.is_going_to_join.value = document.form4.is_going_to_join.value;
aux--;
capturar();
}
}
}
//-------------------------------------------------
if (botoncito=="e6"){
if ((a6=="are_going_to_celebrate")||(a6=="will_celebrate")) {
if(a6=="are_going_to_celebrate"){ 
activar1[5] = 1;
}else
if(a6=="will_celebrate"){ 
suplente1[5] = 1;
}

$('#are_going_to_celebrate1').css('opacity','0.6');
$(form2.are_going_to_celebrate).css('pointer-events','none'); 
$(form2.are_going_to_celebrate).css('border','3px solid #308c58');
$(form2.are_going_to_celebrate).css('opacity','0.6');
$('#e6').css('pointer-events','none'); 
$('#e6').css('opacity','0.6');
bigbang6.classList.remove('bigbang');
setTimeout(function(){$('#reproduce55').css('opacity','0.9');$('#reproduce55').css('pointer-events','auto');},600);
document.form2.are_going_to_celebrate.value = document.form4.are_going_to_celebrate.value;
document.getElementById('button6').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
$(form2.are_going_to_celebrate).css('border','3px solid #fc484c');
$('#campo6').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a6!="are_going_to_celebrate")){
$('#are_going_to_celebrate1').css('opacity','0.6');
$(form2.are_going_to_celebrate).css('pointer-events','none'); 
$(form2.are_going_to_celebrate).css('opacity','0.6');
$('#e6').css('pointer-events','none'); 
$('#e6').css('opacity','0.6');
bigbang6.classList.remove('bigbang');
setTimeout(function(){$('#mostra6').css('display','inline');$('#velkan6').css('display','none'); $('#reproduce55').css('opacity','0.9');activar1[5] = 1;$('#reproduce55').css('pointer-events','auto');},2500);
document.form2.are_going_to_celebrate.value = document.form4.are_going_to_celebrate.value;
aux--;
capturar();
}
}
}

//-------------------------------------------------
if (botoncito=="e7"){
if ((a7=="is_going_to_play")||(a7=="will_play")) {
if(a7=="is_going_to_play"){ 
activar1[6] = 1;
}else
if(a7=="will_play"){ 
suplente1[6] = 1;
}

$('#is_going_to_play1').css('opacity','0.6');
$(form2.is_going_to_play).css('pointer-events','none'); 
$(form2.is_going_to_play).css('border','3px solid #308c58');
$(form2.is_going_to_play).css('opacity','0.6');
$('#e7').css('pointer-events','none'); 
$('#e7').css('opacity','0.6');
bigbang7.classList.remove('bigbang');
setTimeout(function(){$('#reproduce66').css('opacity','0.9');$('#reproduce66').css('pointer-events','auto');},600);
document.form2.is_going_to_play.value = document.form4.is_going_to_play.value;
document.getElementById('button7').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
$(form2.is_going_to_play).css('border','3px solid #fc484c');
$('#campo7').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a7!="is_going_to_play")){
$('#is_going_to_play1').css('opacity','0.6');
$(form2.is_going_to_play).css('pointer-events','none'); 
$(form2.is_going_to_play).css('opacity','0.6');
$('#e7').css('pointer-events','none'); 
$('#e7').css('opacity','0.6');
bigbang7.classList.remove('bigbang');
setTimeout(function(){$('#mostra7').css('display','inline');$('#velkan7').css('display','none'); $('#reproduce66').css('opacity','0.9');activar1[6] = 1;$('#reproduce66').css('pointer-events','auto');},2500);
document.form2.is_going_to_play.value = document.form4.is_going_to_play.value;
aux--;
capturar();
}
}
}
//-------------------------------------------------
if (botoncito=="e8"){
if ((a8=="am_going_to_have")||(a8=="will_have")) {
if(a8=="am_going_to_have"){ 
activar1[7] = 1;
}else
if(a8=="will_have"){ 
suplente1[7] = 1;
}

$('#am_going_to_have1').css('opacity','0.6');
$(form2.am_going_to_have).css('pointer-events','none'); 
$(form2.am_going_to_have).css('border','3px solid #308c58');
$(form2.am_going_to_have).css('opacity','0.6');
$('#e8').css('pointer-events','none'); 
$('#e8').css('opacity','0.6');
bigbang8.classList.remove('bigbang');
setTimeout(function(){$('#reproduce77').css('opacity','0.9');$('#reproduce77').css('pointer-events','auto'); },600);
document.form2.am_going_to_have.value = document.form4.am_going_to_have.value;
document.getElementById('button8').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
$(form2.am_going_to_have).css('border','3px solid #fc484c');
$('#campo8').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a8!="am_going_to_have")){
$('#am_going_to_have1').css('opacity','0.6');
$(form2.am_going_to_have).css('pointer-events','none'); 
$(form2.am_going_to_have).css('opacity','0.6');
$('#e8').css('pointer-events','none'); 
$('#e8').css('opacity','0.6');
bigbang8.classList.remove('bigbang');
setTimeout(function(){$('#mostra8').css('display','inline');$('#velkan8').css('display','none'); $('#reproduce77').css('opacity','0.9');activar1[7] = 1;$('#reproduce77').css('pointer-events','auto');},2500);
document.form2.am_going_to_have.value = document.form4.am_going_to_have.value;
aux--;
capturar();
}
}
}
//-------------------------------------------------
if (botoncito=="e9"){
if ((a9=="is_going_to_sunbathe")||(a9=="will_sunbathe")) {
if(a9=="is_going_to_sunbathe"){ 
activar1[8] = 1;
}else
if(a9=="will_sunbathe"){ 
suplente1[8] = 1;
}

$('#is_going_to_sunbathe1').css('opacity','0.6');
$(form2.is_going_to_sunbathe).css('pointer-events','none'); 
$(form2.is_going_to_sunbathe).css('border','3px solid #308c58');
$(form2.is_going_to_sunbathe).css('opacity','0.6');
$('#e9').css('pointer-events','none'); 
$('#e9').css('opacity','0.6');
bigbang9.classList.remove('bigbang');
setTimeout(function(){$('#reproduce88').css('opacity','0.9');$('#reproduce88').css('pointer-events','auto');},600);
document.form2.is_going_to_sunbathe.value = document.form4.is_going_to_sunbathe.value;
document.getElementById('button9').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
$(form2.is_going_to_sunbathe).css('border','3px solid #fc484c');
$('#campo9').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a9!="is_going_to_sunbathe")){
$('#is_going_to_sunbathe1').css('opacity','0.6');
$(form2.is_going_to_sunbathe).css('pointer-events','none'); 
$(form2.is_going_to_sunbathe).css('opacity','0.6');
$('#e9').css('pointer-events','none'); 
$('#e9').css('opacity','0.6');
bigbang9.classList.remove('bigbang');
setTimeout(function(){$('#mostra9').css('display','inline');$('#velkan9').css('display','none'); $('#reproduce88').css('opacity','0.9');activar1[8] = 1;$('#reproduce88').css('pointer-events','auto');},2500);
document.form2.is_going_to_sunbathe.value = document.form4.is_going_to_sunbathe.value;
aux--;
capturar();
}
}
}
//-------------------------------------------------
if (botoncito=="e10"){
if ((a10=="is_going_to_take")||(a10=="will_take")) {
if(a10=="is_going_to_take"){ 
activar1[9] = 1;
}else
if(a10=="will_take"){ 
suplente1[9] = 1;
}

$('#is_going_to_take1').css('opacity','0.6');
$(form2.is_going_to_take).css('pointer-events','none'); 
$(form2.is_going_to_take).css('border','3px solid #308c58');
$(form2.is_going_to_take).css('opacity','0.6');
$('#e10').css('pointer-events','none'); 
$('#e10').css('opacity','0.6');
bigbang10.classList.remove('bigbang');
setTimeout(function(){$('#reproduce99').css('opacity','0.9');$('#reproduce99').css('pointer-events','auto'); /*activar1[9] = 1;*/},600);
document.form2.is_going_to_take.value = document.form4.is_going_to_take.value;
document.getElementById('button10').click();
}
else{
aux1++;
aux++;
if(aux1<=2){
document.getElementById('sorry').play();
$(form2.is_going_to_take).css('border','3px solid #fc484c');
$('#campo10').css('border','3px solid #fc484c');
}
if ((aux1>2)&&(a10!="is_going_to_take")){
$('#is_going_to_take1').css('opacity','0.6');
$(form2.is_going_to_take).css('pointer-events','none'); 
$(form2.is_going_to_take).css('opacity','0.6');
$('#e10').css('pointer-events','none'); 
$('#e10').css('opacity','0.6');
bigbang10.classList.remove('bigbang');
setTimeout(function(){$('#mostra10').css('display','inline');$('#velkan10').css('display','none'); $('#reproduce99').css('opacity','0.9');activar1[9] = 1;$('#reproduce99').css('pointer-events','auto');},2500);
document.form2.is_going_to_take.value = document.form4.is_going_to_take.value;
aux--;
capturar();
}
}
}
//-----------------------------------------------------------------------------------------------------------------------

cuentabien=homero1+homero2+homero3+homero4+homero5+homero6+homero7+homero8+homero9+homero10;
cuentamal=homero11+homero22+homero33+homero44+homero55+homero66+homero77+homero88+homero99+homero1010;
if(cuentabien+cuentamal==10){
$('.alumbraobj').css('opacity','0.4');
$('.alumbraobj').css('pointer-events','none');
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
},8000);
}
}
//-----------------------------------------------------------------------------------------------------------------------
function carga(){
empezar();
$('#listeniando').css('visibility','visible');
$('.sig').css('opacity','1');
}