function activaaudio(){
if(contador1>0){
audio1.pause();
audio1.currentTime = 0;
}
//******************************************
if(activar[0] == 1){
//audio=document.getElementById('a1');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[0] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar[1] == 1){
//audio=document.getElementById('a2');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[1] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar[2] == 1){
//audio=document.getElementById('a3');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[2] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar[3] == 1){
//audio=document.getElementById('a4');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[3] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar[4] == 1){
//audio=document.getElementById('a5');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[4] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar[5] == 1){
//audio=document.getElementById('a6');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[5] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}
//******************************************

if(activar[6] == 1){
//audio=document.getElementById('a7');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[6] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar[7] == 1){
//audio=document.getElementById('b1');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[7] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar[8] == 1){
//audio=document.getElementById('b2');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[8] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar[9] == 1){
//audio=document.getElementById('b3');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[9] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}


//******************************************

if(activar[10] == 1){
//audio=document.getElementById('b4');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[10] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar[11] == 1){
//audio=document.getElementById('b5');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[11] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar[12] == 1){
//audio=document.getElementById('cc1');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[12] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//****************************************** 

if(activar[13] == 1){
//audio=document.getElementById('cc2');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[13] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//****************************************** 

if(activar[14] == 1){
//audio=document.getElementById('cc3');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[14] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//****************************************** 

if(activar[15] == 1){
//audio=document.getElementById('cc4');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[15] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//****************************************** 

if(activar[16] == 1){
//audio=document.getElementById('cc5');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[16] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//****************************************** 

if(activar[17] == 1){
//audio=document.getElementById('cc6');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[17] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//****************************************** 

if(activar[18] == 1){
//audio=document.getElementById('cc7');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[18] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//****************************************** 

if(activar[19] == 1){
//audio=document.getElementById('e1');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[19] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//****************************************** 

if(activar[20] == 1){
//audio=document.getElementById('e2');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[20] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//****************************************** 

if(activar[21] == 1){
//audio=document.getElementById('e3');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[21] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//****************************************** 

if(activar[22] == 1){
//audio=document.getElementById('e4');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[22] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//****************************************** 

if(activar[23] == 1){
//audio=document.getElementById('e5');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[23] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//****************************************** 
/*
if(activar[24] == 1){
audio=document.getElementById('r_evfw_9');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[24] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//****************************************** 

if(activar[25] == 1){
audio=document.getElementById('r_evfw_10');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[25] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar[26] == 1){
audio=document.getElementById('r_evfw_11');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[26] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar[27] == 1){
audio=document.getElementById('r_evfw_12');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[27] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//****************************************** 

if(activar[28] == 1){
audio=document.getElementById('r_evfw_13');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[28] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//****************************************** 

if(activar[29] == 1){
audio=document.getElementById('r_evfw_14');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[29] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar[30] == 1){
audio=document.getElementById('r_evfw_15');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[30] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar[31] == 1){
audio=document.getElementById('r_evfw_16');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[31] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//****************************************** 

if(activar[32] == 1){
audio=document.getElementById('r_evfw_17');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[32] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//****************************************** 

if(activar[33] == 1){
audio=document.getElementById('r_evfw_18');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[33] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar[34] == 1){
audio=document.getElementById('r_evfw_19');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[34] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar[35] == 1){
audio=document.getElementById('r_evfw_20');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar[35] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//****************************************** 
//******************************************
//******************************************
//******************************************
if(activar1[0] == 1){
audio=document.getElementById('r_evprs_21');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar1[0] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar1[1] == 1){
audio=document.getElementById('r_evprs_22');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar1[1] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar1[2] == 1){
audio=document.getElementById('r_evprs_23');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar1[2] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar1[3] == 1){
audio=document.getElementById('r_evprs_24');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar1[3] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar1[4] == 1){
audio=document.getElementById('r_evps_21');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar1[4] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar1[5] == 1){
audio=document.getElementById('r_evps_22');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar1[5] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar1[6] == 1){
audio=document.getElementById('r_evps_23');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar1[6] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar1[7] == 1){
audio=document.getElementById('r_evps_24');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar1[7] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar1[8] == 1){
audio=document.getElementById('r_evfs_21');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar1[8] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar1[9] == 1){
audio=document.getElementById('r_evfs_22');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar1[9] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar1[10] == 1){
audio=document.getElementById('r_evfs_23');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar1[10] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar1[11] == 1){
audio=document.getElementById('r_evfs_24');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar1[11] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************
//******************************************
//******************************************
//******************************************

if(activar2[0] == 1){
audio=document.getElementById('r_evprr_5');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar2[0] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}
//******************************************

if(activar2[1] == 1){
audio=document.getElementById('r_evprr_6');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar2[1] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar2[2] == 1){
audio=document.getElementById('r_evprr_7');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar2[2] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar2[3] == 1){
audio=document.getElementById('r_evprr_8');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar2[3] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar2[4] == 1){
audio=document.getElementById('r_evpr_5');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar2[4] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar2[5] == 1){
audio=document.getElementById('r_evpr_6');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar2[5] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar2[6] == 1){
audio=document.getElementById('r_evpr_7');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar2[6] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar2[7] == 1){
audio=document.getElementById('r_evpr_8');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar2[7] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar2[8] == 1){
audio=document.getElementById('r_evfr_5');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar2[8] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar2[9] == 1){
audio=document.getElementById('r_evfr_6');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar2[9] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar2[10] == 1){
audio=document.getElementById('r_evfr_7');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar2[10] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar2[11] == 1){
audio=document.getElementById('r_evfr_8');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar2[11] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************
//******************************************
//******************************************
//******************************************

if(activar3[0] == 1){
audio=document.getElementById('r_evprl_1');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar3[0] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}
//******************************************

if(activar3[1] == 1){
activarlistening[1] =0;
audio=document.getElementById('r_evprl_2');
pausito = document.getElementById("pause1");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir1").css('display','inline');
$("#pause1").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir1").css('display','none');
$("#pause1").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues1').css('pointer-events','auto'); 
document.getElementById("primero1").checked = true;
$('#perendengues1').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues1').css('pointer-events','auto'); 
document.getElementById("segundo1").checked = true;
$('#perendengues1').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues1').css('pointer-events','auto'); 
document.getElementById("tercero1").checked = true;
$('#perendengues1').css('pointer-events','none'); 
activar3[1] == 0;

setTimeout(function(){
$("#reproducir1").css('opacity','0.4');
$('#reproducir1').css('pointer-events','none');
$("#pause1").css('opacity','0.4');
$('#pause1').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activarlistening[1] == 1){
m=2,s=0;
audio=document.getElementById('evprl_22');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
//activar3[1] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar3[2] == 1){
audio=document.getElementById('r_evprl_3');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar3[2] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar3[3] == 1){
activarlistening[3] =0;
audio=document.getElementById('r_evprl_4');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir1").css('display','inline');
$("#pause1").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir1").css('display','none');
$("#pause1").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues1').css('pointer-events','auto'); 
document.getElementById("primero1").checked = true;
$('#perendengues1').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues1').css('pointer-events','auto'); 
document.getElementById("segundo1").checked = true;
$('#perendengues1').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues1').css('pointer-events','auto'); 
document.getElementById("tercero1").checked = true;
$('#perendengues1').css('pointer-events','none'); 
activar3[3] == 0;

setTimeout(function(){
$("#reproducir1").css('opacity','0.4');
$('#reproducir1').css('pointer-events','none');
$("#pause1").css('opacity','0.4');
$('#pause1').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activarlistening[3] == 1){
m=2,s=0;
audio=document.getElementById('evprl_44');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
//activar3[1] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar3[4] == 1){
audio=document.getElementById('evpl_1');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar3[4] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar3[5] == 1){
activarlistening[1] =0;
audio=document.getElementById('r_evpl_2');
pausito = document.getElementById("pause1");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir1").css('display','inline');
$("#pause1").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir1").css('display','none');
$("#pause1").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues1').css('pointer-events','auto'); 
document.getElementById("primero1").checked = true;
$('#perendengues1').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues1').css('pointer-events','auto'); 
document.getElementById("segundo1").checked = true;
$('#perendengues1').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues1').css('pointer-events','auto'); 
document.getElementById("tercero1").checked = true;
$('#perendengues1').css('pointer-events','none'); 
activar3[5] == 0;

setTimeout(function(){
$("#reproducir1").css('opacity','0.4');
$('#reproducir1').css('pointer-events','none');
$("#pause1").css('opacity','0.4');
$('#pause1').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activarlistening[5] == 1){
m=2,s=0;
audio=document.getElementById('evpl_22');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
//activar3[1] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar3[6] == 1){
audio=document.getElementById('evpl_3');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar3[6] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar3[7] == 1){
audio=document.getElementById('r_evpl_4');
pausito = document.getElementById("pause1");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir1").css('display','inline');
$("#pause1").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir1").css('display','none');
$("#pause1").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues1').css('pointer-events','auto'); 
document.getElementById("primero1").checked = true;
$('#perendengues1').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues1').css('pointer-events','auto'); 
document.getElementById("segundo1").checked = true;
$('#perendengues1').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues1').css('pointer-events','auto'); 
document.getElementById("tercero1").checked = true;
$('#perendengues1').css('pointer-events','none'); 
activar3[7] == 0;

setTimeout(function(){
$("#reproducir1").css('opacity','0.4');
$('#reproducir1').css('pointer-events','none');
$("#pause1").css('opacity','0.4');
$('#pause1').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activarlistening[7] == 1){
m=2,s=0;
audio=document.getElementById('evpl_22');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
//activar3[1] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************
















































//******************************************

if(activar3[8] == 1){
audio=document.getElementById('evfl_1');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar3[8] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar3[9] == 1){
activarlistening[1] =0;
audio=document.getElementById('r_evfl_2');
pausito = document.getElementById("pause1");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir1").css('display','inline');
$("#pause1").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir1").css('display','none');
$("#pause1").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues1').css('pointer-events','auto'); 
document.getElementById("primero1").checked = true;
$('#perendengues1').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues1').css('pointer-events','auto'); 
document.getElementById("segundo1").checked = true;
$('#perendengues1').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues1').css('pointer-events','auto'); 
document.getElementById("tercero1").checked = true;
$('#perendengues1').css('pointer-events','none'); 
activar3[9] == 0;

setTimeout(function(){
$("#reproducir1").css('opacity','0.4');
$('#reproducir1').css('pointer-events','none');
$("#pause1").css('opacity','0.4');
$('#pause1').css('pointer-events','none');  },3000);
}
}
//******************************************

if(activarlistening[9] == 1){
m=2,s=0;
audio=document.getElementById('evfl_22');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
//activar3[1] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar3[10] == 1){
audio=document.getElementById('evfl_3');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar3[10] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************

if(activar3[11] == 1){
audio=document.getElementById('r_evfl_4');
pausito = document.getElementById("pause1");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir1").css('display','inline');
$("#pause1").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir1").css('display','none');
$("#pause1").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues1').css('pointer-events','auto'); 
document.getElementById("primero1").checked = true;
$('#perendengues1').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues1').css('pointer-events','auto'); 
document.getElementById("segundo1").checked = true;
$('#perendengues1').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues1').css('pointer-events','auto'); 
document.getElementById("tercero1").checked = true;
$('#perendengues1').css('pointer-events','none'); 
activar3[11] == 0;

setTimeout(function(){
$("#reproducir1").css('opacity','0.4');
$('#reproducir1').css('pointer-events','none');
$("#pause1").css('opacity','0.4');
$('#pause1').css('pointer-events','none');  },3000);
}
}
//******************************************

if(activarlistening[11] == 1){
m=2,s=0;
audio=document.getElementById('evfl_44');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
//activar3[1] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}

//******************************************































if(activar1[0] == 1){
audio=document.getElementById('r_evprs_1');
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
activar1[0] == 0;

setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  },3000);
}
}*/

//******************************************

}
