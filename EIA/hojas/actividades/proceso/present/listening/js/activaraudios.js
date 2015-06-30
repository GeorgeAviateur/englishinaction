function activaaudio(){
if(contador1>0){
audio.pause();
audio.currentTime = 0;
}


if(activar[21] == 1){
if (tucha!=1) {
$("#mirelojito").css('display','none');
setTimeout(function(){
$("#mirelojito").css('display','inline');	
$("#countdown").countdown360({}).stop();
$("#countdown").countdown360({}).start();
},43000);
}
}

if(activar[22] == 1){
if (tucha!=1) {
$("#mirelojito").css('display','none');
setTimeout(function(){
$("#mirelojito").css('display','inline');	
$("#countdown").countdown360({}).stop();
$("#countdown").countdown360({}).start();
},43000);
}
}

if(activar[23] == 1){
if (tucha!=1) {
$("#mirelojito").css('display','none');
setTimeout(function(){
$("#mirelojito").css('display','inline');	
$("#countdown").countdown360({}).stop();
$("#countdown").countdown360({}).start();
},43000);
}
}


if(activar[24] == 1){
if (tucha!=1) {
$("#mirelojito").css('display','none');
setTimeout(function(){
$("#mirelojito").css('display','inline');	
$("#countdown").countdown360({}).stop();
$("#countdown").countdown360({}).start();
},43000);
}
}


if(activar[25] == 1){
if (tucha!=1) {
$("#mirelojito").css('display','none');
setTimeout(function(){
$("#mirelojito").css('display','inline');	
$("#countdown").countdown360({}).stop();
$("#countdown").countdown360({}).start();
},43000);
}
}
//******************************************
if((activar[0] == 1)||(activar[1] == 1)||(activar[2] == 1)||(activar[3] == 1)||(activar[4] == 1)||(activar[5] == 1)||(activar[6] == 1)||(activar[7] == 1)||(activar[8] == 1)||(activar[9] == 1)||(activar[10] == 1)||(activar[11] == 1)||(activar[12] == 1)||(activar[13] == 1)||(activar[14] == 1)||(activar[15] == 1)||(activar[16] == 1)||(activar[17] == 1)||(activar[18] == 1)||(activar[19] == 1)||(activar[20] == 1)||(activar[21] == 1)||(activar[22] == 1)||(activar[23] == 1)||(activar[24] == 1)||(activar[25] == 1)){
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
//activar[0] == 0;

//setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  //},3000);
}
}

//******************************************

if((suplente[1] == 1)||(suplente[2] == 1)||(suplente[3] == 1)||(suplente[4] == 1)||(suplente[5] == 1)||(suplente[6] == 1)||(suplente[7] == 1)||(suplente[8] == 1)||(suplente[9] == 1)||(suplente[10] == 1)||(suplente[11] == 1)||(suplente[12] == 1)||(suplente[13] == 1)||(suplente[14] == 1)||(suplente[15] == 1)||(suplente[16] == 1)||(suplente[17] == 1)||(suplente[18] == 1)||(suplente[19] == 1)||(suplente[20] == 1)||(suplente[21] == 1)||(suplente[22] == 1)||(suplente[23] == 1)){
//audio=document.getElementById('a1');
pausito2 = document.getElementById("pause");
if (audio2.paused) {
audio2.play();
pausito2.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio2.pause();
pausito2.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio2.currentTime = 0;
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
//activar[0] == 0;
//suplente[0] == 0;
//setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  //},3000);
}
}

//******************************************


if((bart1== 1)){
//audio=document.getElementById('a1');
pausito3 = document.getElementById("pause");
if (audio3.paused) {
audio3.play();
pausito3.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio3.pause();
pausito3.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio3.currentTime = 0;
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
//activar[0] == 0;
//suplente[0] == 0;
//setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  //},3000);
}
}

//******************************************

if((bart2== 1)){
//audio=document.getElementById('a1');
pausito4 = document.getElementById("pause");
if (audio4.paused) {
audio4.play();
pausito4.textContent = "||";
$("#reproducir00").css('display','inline');
$("#pause").css('display','none');
contador++;
} else {
audio4.pause();
pausito4.textContent = ">";
$("#reproducir00").css('display','none');
$("#pause").css('display','inline'); 
audio4.currentTime = 0;
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
//activar[0] == 0;
//suplente[0] == 0;
//setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  //},3000);
}
}

//******************************************

/*
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

//setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none'); // },3000);
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

//setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none'); // },3000);
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

//setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  //},3000);
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

//setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  //},3000);
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

//setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none'); // },3000);
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

//setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  //},3000);
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

//setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none'); // },3000);
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

//setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  //},3000);
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

//setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  //},3000);
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

//setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none'); // },3000);
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

//setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  //},3000);
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

//setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none'); // },3000);
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

//setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none'); // },3000);
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

//setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  //},3000);
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

//setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none'); // },3000);
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

//setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  //},3000);
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

//setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none'); // },3000);
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

//setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  //},3000);
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

//setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  //},3000);
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

//setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  //},3000);
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

//setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none'); // },3000);
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

//setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none'); // },3000);
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

//setTimeout(function(){
$("#reproducir00").css('opacity','0.4');
$('#reproducir00').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none'); // },3000);
}
}*/

//****************************************** 


}
