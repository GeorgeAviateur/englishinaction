function activaaudio(){
if(contador1>0){
audio.pause();
audio.currentTime = 0;
}
//******************************************
if((activar[0] == 1)||(activar[1] == 1)||(activar[2] == 1)||(activar[3] == 1)||(activar[4] == 1)||(activar[5] == 1)||(activar[6] == 1)||(activar[7] == 1)||(activar[8] == 1)||(activar[9] == 1)||(activar[10] == 1)||(activar[11] == 1)||(activar[12] == 1)||(activar[13] == 1)||(activar[14] == 1)||(activar[15] == 1)||(activar[16] == 1)||(activar[17] == 1)||(activar[18] == 1)||(activar[19] == 1)||(activar[20] == 1)||(activar[21] == 1)||(activar[22] == 1)||(activar[23] == 1)||(activar[24] == 1)||(activar[25] == 1)||(activar[26] == 1)){
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



}
