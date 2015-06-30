function activaaudio(){
if(contador1>0){
audio.pause();
audio.currentTime = 0;
}
//******************************************
if((activar[0] == 1)||(activar[1] == 1)||(activar[2] == 1)||(activar[3] == 1)||(activar[4] == 1)||(activar[5] == 1)||(activar[6] == 1)||(activar[7] == 1)||(activar[8] == 1)||(activar[9] == 1)||(activar[10] == 1)||(activar[11] == 1)||(activar[12] == 1)||(activar[13] == 1)||(activar[14] == 1)||(activar[15] == 1)||(activar[16] == 1)||(activar[17] == 1)||(activar[18] == 1)||(activar[19] == 1)||(activar[20] == 1)||(activar[21] == 1)||(activar[22] == 1)||(activar[23] == 1)||(activar[24] == 1)){
pausito = document.getElementById("pause");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproducir0").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproducir0").css('display','none');
$("#pause").css('display','inline'); 
audio.currentTime = 0;
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==4){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
$("#reproducir0").css('opacity','0.4');
$('#reproducir0').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none'); 
}
}

//****************************************************************

if(suplente[0]==1){
pausito2 = document.getElementById("pause");
if (audio2.paused) {
audio2.play();
pausito2.textContent = "||";
$("#reproducir0").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio2.pause();
pausito2.textContent = ">";
$("#reproducir0").css('display','none');
$("#pause").css('display','inline'); 
audio2.currentTime = 0;
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==4){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
$("#reproducir0").css('opacity','0.4');
$('#reproducir0').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');
}
}

//******************************************
if((suplente[1]== 1)){

pausito3 = document.getElementById("pause");
if (audio3.paused) {
audio3.play();
pausito3.textContent = "||";
$("#reproducir0").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio3.pause();
pausito3.textContent = ">";
$("#reproducir0").css('display','none');
$("#pause").css('display','inline'); 
audio3.currentTime = 0;
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==4){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
$("#reproducir0").css('opacity','0.4');
$('#reproducir0').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none'); 
}
}

//******************************************

if((suplente[2]== 1)){
pausito4 = document.getElementById("pause");
if (audio4.paused) {
audio4.play();
pausito4.textContent = "||";
$("#reproducir0").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio4.pause();
pausito4.textContent = ">";
$("#reproducir0").css('display','none');
$("#pause").css('display','inline'); 
audio4.currentTime = 0;
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==4){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
$("#reproducir0").css('opacity','0.4');
$('#reproducir0').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none'); 
}
}

//******************************************

if((suplente[3]== 1)){
pausito5 = document.getElementById("pause");
if (audio5.paused) {
audio5.play();
pausito5.textContent = "||";
$("#reproducir0").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio5.pause();
pausito5.textContent = ">";
$("#reproducir0").css('display','none');
$("#pause").css('display','inline'); 
audio5.currentTime = 0;
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==4){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
$("#reproducir0").css('opacity','0.4');
$('#reproducir0').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  
}
}
//******************************************

if((suplente[4]== 1)){
pausito6 = document.getElementById("pause");
if (audio6.paused) {
audio6.play();
pausito6.textContent = "||";
$("#reproducir0").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio6.pause();
pausito6.textContent = ">";
$("#reproducir0").css('display','none');
$("#pause").css('display','inline'); 
audio6.currentTime = 0;
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==4){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
$("#reproducir0").css('opacity','0.4');
$('#reproducir0').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none'); 
}
}
//******************************************

if((suplente[5]== 1)){
pausito7 = document.getElementById("pause");
if (audio7.paused) {
audio7.play();
pausito7.textContent = "||";
$("#reproducir0").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio7.pause();
pausito7.textContent = ">";
$("#reproducir0").css('display','none');
$("#pause").css('display','inline'); 
audio7.currentTime = 0;
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==4){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
$("#reproducir0").css('opacity','0.4');
$('#reproducir0').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none'); 
}
}

//******************************************

if((suplente[6]== 1)){
pausito8 = document.getElementById("pause");
if (audio8.paused) {
audio8.play();
pausito8.textContent = "||";
$("#reproducir0").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio8.pause();
pausito8.textContent = ">";
$("#reproducir0").css('display','none');
$("#pause").css('display','inline'); 
audio8.currentTime = 0;
}

if (contador==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}

if (contador==4){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
$("#reproducir0").css('opacity','0.4');
$('#reproducir0').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none'); 
}
}

//******************************************
if((bart1== 1)){
pausito10 = document.getElementById("pause00");
if (audio10.paused) {
audio10.play();
pausito10.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause00").css('display','none');
contador++;
} else {
audio10.pause();
pausito10.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause00").css('display','inline'); 
audio10.currentTime = 0;
}

if (contador==2){
$('#perendengues1').css('pointer-events','auto'); 
document.getElementById("primero1").checked = true;
$('#perendengues1').css('pointer-events','none'); 
}

if (contador==3){
$('#perendengues1').css('pointer-events','auto'); 
document.getElementById("segundo1").checked = true;
$('#perendengues1').css('pointer-events','none'); 
}

if (contador==4){
$('#perendengues1').css('pointer-events','auto'); 
document.getElementById("tercero1").checked = true;
$('#perendengues1').css('pointer-events','none'); 
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause00").css('opacity','0.4');
$('#pause00').css('pointer-events','none'); 
}
}
//******************************************************************************
}
