function activaaudio(){
if(contador1>0){
audio1.pause();
audio1.currentTime = 0;
}
//******************************************
if((activar[0] == 1)||(activar[1] == 1)||(activar[2] == 1)||(activar[3] == 1)||(activar[4] == 1)||(activar[5] == 1)||(activar[6] == 1)||(activar[7] == 1)||(activar[12] == 1)||(activar[13] == 1)||(activar[14] == 1)||(activar[15] == 1)||(activar[16] == 1)||(activar[17] == 1)||(activar[18] == 1)||(activar[19] == 1)||(activar[24] == 1)||(activar[25] == 1)||(activar[26] == 1)||(activar[27] == 1)||(activar[28] == 1)||(activar[29] == 1)||(activar[30] == 1)||(activar[31] == 1)|| (activar2[0] == 1)||(activar2[1] == 1)||(activar2[2] == 1)||(activar2[3] == 1)||(activar2[4] == 1)||(activar2[5] == 1)||(activar2[6] == 1)||(activar2[7] == 1)||(activar2[8] == 1)||(activar2[9] == 1)||(activar2[10] == 1)||(activar2[11] == 1)){
//audio=document.getElementById('r_evprw_9');
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
$("#reproducir0").css('opacity','0.4');
$('#reproducir0').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none'); // },3000);
}
}

//----------------------------------------------------------------

if(suplente1 == 1){
//audio=document.getElementById('r_evprw_10');
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
//activar[1] == 0;

//setTimeout(function(){
$("#reproducir0").css('opacity','0.4');
$('#reproducir0').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  //},3000);
}
}

if(suplente2 == 1){
//audio=document.getElementById('r_evprw_10');
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
//activar[1] == 0;

//setTimeout(function(){
$("#reproducir0").css('opacity','0.4');
$('#reproducir0').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  //},3000);
}
}

if(suplente3 == 1){
//audio=document.getElementById('r_evprw_10');
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
//activar[1] == 0;

//setTimeout(function(){
$("#reproducir0").css('opacity','0.4');
$('#reproducir0').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none');  //},3000);
}
}

//******************************************

if((activar[8] == 1)||(activar[9] == 1)||(activar[10] == 1)||(activar[11] == 1)||(activar[21] == 1)||(activar[33] == 1)){
if (tucha!=1) {
$("#mirelojito").css('display','none');
setTimeout(function(){
$("#mirelojito").css('display','inline');	
$("#countdown").countdown360({}).stop();
$("#countdown").countdown360({}).start();
},3000);
}
}

if(activar[20] == 1){
if (tucha!=1) {
$("#mirelojito").css('display','none');
setTimeout(function(){
$("#mirelojito").css('display','inline');	
$("#countdown").countdown360({}).stop();
$("#countdown").countdown360({}).start();
},2500);
}
}

if((activar[22] == 1)||(activar[23] == 1)){
if (tucha!=1) {
$("#mirelojito").css('display','none');
setTimeout(function(){
$("#mirelojito").css('display','inline');	
$("#countdown").countdown360({}).stop();
$("#countdown").countdown360({}).start();
},3500);
}
}

if((activar[32] == 1)||(activar[34] == 1)||(activar[35] == 1)){
if (tucha!=1) {
$("#mirelojito").css('display','none');
setTimeout(function(){
$("#mirelojito").css('display','inline');	
$("#countdown").countdown360({}).stop();
$("#countdown").countdown360({}).start();
},4000);
}
}

//------------------------------

if((activar1[0] == 1)||(activar1[2] == 1)||(activar1[7] == 1)){
if (tucha!=1) {
$("#mirelojito").css('display','none');
setTimeout(function(){
$("#mirelojito").css('display','inline');	
$("#countdown").countdown360({}).stop();
$("#countdown").countdown360({}).start();
},3500);
}
}

if(activar1[1] == 1){
if (tucha!=1) {
$("#mirelojito").css('display','none');
setTimeout(function(){
$("#mirelojito").css('display','inline');	
$("#countdown").countdown360({}).stop();
$("#countdown").countdown360({}).start();
},2500);
}
}

if(activar1[5] == 1){
if (tucha!=1) {
$("#mirelojito").css('display','none');
setTimeout(function(){
$("#mirelojito").css('display','inline');	
$("#countdown").countdown360({}).stop();
$("#countdown").countdown360({}).start();
},2000);
}
}

if((activar1[3] == 1)||(activar1[4] == 1)||(activar1[6] == 1)||(activar1[9] == 1)){
if (tucha!=1) {
$("#mirelojito").css('display','none');
setTimeout(function(){
$("#mirelojito").css('display','inline');	
$("#countdown").countdown360({}).stop();
$("#countdown").countdown360({}).start();
},3000);
}
}

if((activar1[8] == 1)||(activar1[10] == 1)){
if (tucha!=1) {
$("#mirelojito").css('display','none');
setTimeout(function(){
$("#mirelojito").css('display','inline');	
$("#countdown").countdown360({}).stop();
$("#countdown").countdown360({}).start();
},4500);
}
}

if(activar1[11] == 1){
if (tucha!=1) {
$("#mirelojito").css('display','none');
setTimeout(function(){
$("#mirelojito").css('display','inline');	
$("#countdown").countdown360({}).stop();
$("#countdown").countdown360({}).start();
},4000);
}
}


if((activar[8] == 1)||(activar[9] == 1)||(activar[10] == 1)||(activar[11] == 1)||(activar[20] == 1)||(activar[21] == 1)||(activar[22] == 1)||(activar[23] == 1)||(activar[32] == 1)||(activar[33] == 1)||(activar[34] == 1)||(activar[35] == 1)||(activar1[0] == 1)||(activar1[1] == 1)||(activar1[2] == 1)||(activar1[3] == 1)||(activar1[4] == 1)||(activar1[5] == 1)||(activar1[6] == 1)||(activar1[7] == 1)||(activar1[8] == 1)||(activar1[9] == 1)||(activar1[10] == 1)||(activar1[11] == 1)||   (activar3[0] == 1)||(activar3[2] == 1)||(activar3[4] == 1)||(activar3[6] == 1)||(activar3[8] == 1)||(activar3[10] == 1)){
//audio=document.getElementById('r_evprw_9');
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
//activar[0] == 0;

//setTimeout(function(){
$("#reproducir0").css('opacity','0.4');
$('#reproducir0').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none'); // },3000);
}
}


//********************************************************************************************************************
//******************************************************************************************************************************
//******************************************************************************************************************************
//******************************************************************************************************************************
//******************************************************************************************************************************

if(activarlistening[1] == 1){
if (tucha!=1) {
$("#mirelojito").css('display','none');
setTimeout(function(){
$("#mirelojito").css('display','inline');	
$("#countdown").countdown360({}).stop();
$("#countdown").countdown360({}).start();
},33000);
}
}

if(activarlistening[3] == 1){
if (tucha!=1) {
$("#mirelojito").css('display','none');
setTimeout(function(){
$("#mirelojito").css('display','inline');	
$("#countdown").countdown360({}).stop();
$("#countdown").countdown360({}).start();
},26000);
}
}

if(activarlistening[5] == 1){
if (tucha!=1) {
$("#mirelojito").css('display','none');
setTimeout(function(){
$("#mirelojito").css('display','inline');	
$("#countdown").countdown360({}).stop();
$("#countdown").countdown360({}).start();
},40000);
}
}

if(activarlistening[7] == 1){
if (tucha!=1) {
$("#mirelojito").css('display','none');
setTimeout(function(){
$("#mirelojito").css('display','inline');	
$("#countdown").countdown360({}).stop();
$("#countdown").countdown360({}).start();
},54500);
}
}

if(activarlistening[9] == 1){
if (tucha!=1) {
$("#mirelojito").css('display','none');
setTimeout(function(){
$("#mirelojito").css('display','inline');	
$("#countdown").countdown360({}).stop();
$("#countdown").countdown360({}).start();
},16500);
}
}

if(activarlistening[11] == 1){
if (tucha!=1) {
$("#mirelojito").css('display','none');
setTimeout(function(){
$("#mirelojito").css('display','inline');	
$("#countdown").countdown360({}).stop();
$("#countdown").countdown360({}).start();
},12000);
}
}

if(activar3[0] == 1){
if (tucha!=1) {
$("#mirelojito").css('display','none');
setTimeout(function(){
$("#mirelojito").css('display','inline');	
$("#countdown").countdown360({}).stop();
$("#countdown").countdown360({}).start();
},4000);
}
}

if(activar3[1] == 1){
activarlistening[1] =0;
}


if(activar3[2] == 1){
if (tucha!=1) {
$("#mirelojito").css('display','none');
setTimeout(function(){
$("#mirelojito").css('display','inline');	
$("#countdown").countdown360({}).stop();
$("#countdown").countdown360({}).start();
},6000);
}
}

if(activar3[3] == 1){
activarlistening[3] =0;
}

if(activar3[4] == 1){
if (tucha!=1) {
$("#mirelojito").css('display','none');
setTimeout(function(){
$("#mirelojito").css('display','inline');	
$("#countdown").countdown360({}).stop();
$("#countdown").countdown360({}).start();
},5000);
}
}

if(activar3[5] == 1){
activarlistening[5] =0;
}

if(activar3[6] == 1){
if (tucha!=1) {
$("#mirelojito").css('display','none');
setTimeout(function(){
$("#mirelojito").css('display','inline');	
$("#countdown").countdown360({}).stop();
$("#countdown").countdown360({}).start();
},7500);
}
}

if(activar3[8] == 1){
if (tucha!=1) {
$("#mirelojito").css('display','none');
setTimeout(function(){
$("#mirelojito").css('display','inline');	
$("#countdown").countdown360({}).stop();
$("#countdown").countdown360({}).start();
},5500);
}
}

if(activar3[9] == 1){
activarlistening[1] =0;
}


if(activar3[10] == 1){
if (tucha!=1) {
$("#mirelojito").css('display','none');
setTimeout(function(){
$("#mirelojito").css('display','inline');	
$("#countdown").countdown360({}).stop();
$("#countdown").countdown360({}).start();
},8000);
}
}

//-------------------------------------------

if((activarlistening[1] == 1)||(activarlistening[3] == 1)||(activarlistening[5] == 1)||(activarlistening[7] == 1)||(activarlistening[9] == 1)||(activarlistening[11] == 1)){
//audio2=document.getElementById('evprl_22');
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
//activar3[1] == 0;

//setTimeout(function(){
$("#reproducir0").css('opacity','0.4');
$('#reproducir0').css('pointer-events','none');
$("#pause").css('opacity','0.4');
$('#pause').css('pointer-events','none'); // },3000);
}
}




//******************************************

if((activar3[1] == 1)||(activar3[3] == 1)||(activar3[5] == 1)||(activar3[7] == 1)||(activar3[9] == 1)||(activar3[11] == 1)){
//activarlistening[1] =0;
//audio=document.getElementById('r_evprl_2');
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

//setTimeout(function(){
$("#reproducir1").css('opacity','0.4');
$('#reproducir1').css('pointer-events','none');
$("#pause1").css('opacity','0.4');
$('#pause1').css('pointer-events','none'); // },3000);
}
}

//******************************************
//******************************************


if(nito1== 1){
activarlistening[1] =0;
//audio=document.getElementById('r_evprl_2');
pausito3 = document.getElementById("pause1");
if (audio3.paused) {
audio3.play();
pausito3.textContent = "||";
$("#reproducir1").css('display','inline');
$("#pause1").css('display','none');
contador++;
} else {
audio3.pause();
pausito3.textContent = ">";
$("#reproducir1").css('display','none');
$("#pause1").css('display','inline'); 
audio3.currentTime = 0;
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
//activar3[1] == 0;

//setTimeout(function(){
$("#reproducir1").css('opacity','0.4');
$('#reproducir1').css('pointer-events','none');
$("#pause1").css('opacity','0.4');
$('#pause1').css('pointer-events','none'); // },3000);
}
}



if(nito2== 1){
activarlistening[1] =0;
//audio=document.getElementById('r_evprl_2');
pausito4 = document.getElementById("pause1");
if (audio4.paused) {
audio4.play();
pausito4.textContent = "||";
$("#reproducir1").css('display','inline');
$("#pause1").css('display','none');
contador++;
} else {
audio4.pause();
pausito4.textContent = ">";
$("#reproducir1").css('display','none');
$("#pause1").css('display','inline'); 
audio4.currentTime = 0;
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
//activar3[1] == 0;

//setTimeout(function(){
$("#reproducir1").css('opacity','0.4');
$('#reproducir1').css('pointer-events','none');
$("#pause1").css('opacity','0.4');
$('#pause1').css('pointer-events','none'); // },3000);
}
}


}