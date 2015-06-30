var m="",lleva=[0,0,0,0,0,0],show=0,cuentabien=0;
var aux=0,aux2=0,d1="",d11="",d2="",d22="",d3="", d33="";
var d4="",d44="",d5="",d55="",d6="",d66="",dato1="",dato2="",dato3="",dato4="",dato5="",dato6="", cadena11="";
var cadena22="",cadena33="",cadena44="",cadena55="",cadena66="",array_cadena11="",array_cadena22="";
var array_cadena33="", array_cadena44="", array_cadena55="",array_cadena66="";
var aux11=0,aux22=1;
var otru=0; 
var m11=0;
var contador6=0;
var externo=1;
var audio;
var pausito;
var otroauxiliarjaja=0;
var alterna="";
var alterna1="";
var alterna2="";
var alterna3="";
var left1=0,left2=0,left3=0,left4=0,left5=0,left6=0;
var bart1=0;
var bart2=0;
var bart3=0;
var bart4=0;
var bart5=0;
var bart6=0;
var ijole =[0,0];
var letra=0;
//-----------------------------------------------------------
function empe(){
$('#contenedor').css('border','3px solid #ffffff');
}

//-----------------------------------------------------------
function validarn(e) { 
tecla = (document.all) ? e.keyCode : e.which; 
if (tecla==8) return true; 
if (tecla==9) return true; 
if (tecla==11) return true; 
patron = /[A-Za-zñÑ'áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛÑñäëïöüÄËÏÖÜ\s\t0-9,]/; 
te = String.fromCharCode(tecla); 
if((te=='A')||(te=='B')||(te=='C')||(te=='D')||(te=='E')||(te=='F')||(te=='G')||(te=='H')||(te=='I')||(te=='J')||(te=='K')||(te=='L')||(te=='M')||(te=='N')||(te=='O')||(te=='P')||(te=='Q')||(te=='R')||(te=='S')||(te=='T')||(te=='U')||(te=='V')||(te=='W')||(te=='X')||(te=='Y')||(te=='Z')){
letra=8.5;	
}
if((te=='a')||(te=='c')||(te=='c')||(te=='d')||(te=='e')||(te=='f')||(te=='g')||(te=='h')||(te=='i')||(te=='j')||(te=='k')||(te=='l')||(te=='m')||(te=='n')||(te=='o')||(te=='p')||(te=='q')||(te=='r')||(te=='s')||(te=='t')||(te=='u')||(te=='v')||(te=='w')||(te=='x')||(te=='y')||(te=='z')){
letra=7;
}
if(te==''){
letra=2;
}
return patron.test(te);
}
//-----------------------------------------------------------
function quitarspan(){
$('#h1 span').css('display','none');
$('#h2 span').css('display','none');
$('#h3 span').css('display','none');
$('#h4 span').css('display','none');
$('#h5 span').css('display','none');
$('#h6 span').css('display','none');
$('#hh span').css('display','none');
}
//-----------------------------------------------------------
function enfocar(id){
quitarspan();
if(id=="h1"){
document.getElementById("entrada2").focus();
$('#h1 b').css('color','#ff8540');
$('#h2 b').css('color','black');
$('#h3 b').css('color','black');
$('#h4 b').css('color','black');
$('#h5 b').css('color','black');
$('#hh b').css('color','black');
$('#h1 span').css('display','inline');
}
if(id=="h2"){
document.getElementById("entrada3").focus();
$('#h1 b').css('color','black');
$('#h2 b').css('color','#ff8540');
$('#h3 b').css('color','black');
$('#h4 b').css('color','black');
$('#h5 b').css('color','black');
$('#hh b').css('color','black');
$('#h2 span').css('display','inline');
}
if(id=="h3"){
document.getElementById("entrada4").focus();
$('#h1 b').css('color','black');
$('#h2 b').css('color','black');
$('#h3 b').css('color','#ff8540');
$('#h4 b').css('color','black');
$('#h5 b').css('color','black');
$('#hh b').css('color','black');
$('#h3 span').css('display','inline');
}
if(id=="h4"){
document.getElementById("entrada5").focus();
$('#h1 b').css('color','black');
$('#h2 b').css('color','black');
$('#h3 b').css('color','black');
$('#h4 b').css('color','#ff8540');
$('#h5 b').css('color','black');
$('#hh b').css('color','black');	
$('#h4 span').css('display','inline');		
}
if(id=="h5"){
document.getElementById("entrada6").focus();
$('#h1 b').css('color','black');
$('#h2 b').css('color','black');
$('#h3 b').css('color','black');
$('#h4 b').css('color','black');
$('#h5 b').css('color','#ff8540');
$('#hh b').css('color','black');			
$('#h5 span').css('display','inline');
}
if(id=="hh"){
document.getElementById("entrada1").focus();
$('#h1 b').css('color','black');
$('#h2 b').css('color','black');
$('#h3 b').css('color','black');
$('#h4 b').css('color','black');
$('#h5 b').css('color','black');
$('#hh b').css('color','#ff8540');
$('#hh span').css('display','inline');
}
}
//-----------------------------------------------------------
function quitarmanito(){
$('#manitu').css('display','none');
}
//-----------------------------------------------------------
function userSubmit(e,id) {    
if (true) {
//s = " <img src='1.png' style='position:absolute; animation:movimiento 1s infinite; -moz-animation:movimiento 1s infinite; -webkit-animation:movimiento 1s infinite;'/>";
//quitarmanito();
d1="";
d11="";
d2="";
d22="";
d3="";
d33="";
d4="";
d44="";
d5="";
d55="";
d6="";	
d66="";
			
if(id=='entrada1'){
dato1=document.getElementById(id).value;
left1=dato1.length*letra+142;
$('#manitu').css('left',''+left1+'px');
$('#manitu').css('top','25%');
dato1=dato1.replace(/\s/g,"_");   
cadena11=dato1;
if (dato1==""){
}else
if ((dato1=="Lindsey_Harper")||(dato1=="LINDSEY_HARPER")){
$('#entrada1').css('color','#308c58'); 
document.getElementById('bien').play();
document.getElementById('entrada1').disabled = true;
m++;
bart1=1;
}else
if ((dato1!="Lindsey_Harper")||(dato1!="LINDSEY_HARPER")){
if(lleva[0]==0)
$('#entrada1').css('color','#d9364d'); 
}
}
//-----------------------------------------------------------------------------------------------------------------------
if(id=='entrada2'){
dato2=document.getElementById(id).value;
left2=dato2.length*letra+105;
$('#manitu').css('left',''+left2+'px');
$('#manitu').css('top','35%');
dato2=dato2.replace(/\s/g,"_");  
cadena22=dato2; 
if ( (dato2=="21_years_old")||(dato2=="21_YEARS_OLD")||(dato2=="a_secretary_at_OGM_inc")||(dato2=="A_SECRETARY_AT_OGM_INC")){
alterna=dato2;
if(dato2!=alterna1){
$('#entrada2').css('color','#308c58'); 
document.getElementById('bien').play();
document.getElementById('entrada2').disabled = true;
m++; 
bart2=1;
}
}else    
//if ((((dato2!="21_years_old")||(dato2!="21_YEARS_OLD"))&&((dato2!="a_secretary_at_OGM_inc")||(dato2!="A_SECRETARY_AT_OGM_INC")))||(dato2==alterna1)){
$('#entrada2').css('color','#d9364d'); 
//} 
}
//-----------------------------------------------------------------------------------------------------------------------
if(id=='entrada3'){
dato3=document.getElementById(id).value;
left3=dato3.length*letra+105;
$('#manitu').css('left',''+left3+'px');
$('#manitu').css('top','43%');
dato3=dato3.replace(/\s/g,"_"); 
cadena33=dato3;
if (dato3==""){
}else
if ( (dato3=="21_years_old")||(dato3=="21_YEARS_OLD")||(dato3=="a_secretary_at_OGM_inc")||(dato3=="A_SECRETARY_AT_OGM_INC")){
alterna1=dato3;
if(dato3!=alterna){
$('#entrada3').css('color','#308c58'); 
document.getElementById('bien').play();
document.getElementById('entrada3').disabled = true;
m++;
bart3=1;
}
}else 
//if ((((dato3!="a_secretary_at_OGM_inc")||(dato3!="A_SECRETARY_AT_OGM_INC"))&&((dato3!="21_years_old")||(dato3!="21_YEARS_OLD")))||(dato3==alterna)){
$('#entrada3').css('color','#d9364d'); 
//}	
}
//-----------------------------------------------------------------------------------------------------------------------
if(id=='entrada4'){
dato4=document.getElementById(id).value;
left4=dato4.length*letra+87;
$('#manitu').css('left',''+left4+'px');
$('#manitu').css('top','52%');
dato4=dato4.toLowerCase();
dato4=dato4.replace(/\s/g,"_");
cadena44=dato4;  
if (dato4==""){
}else
if (dato4=="favorite_color_is_blue"){
$('#entrada4').css('color','#308c58'); 
document.getElementById('bien').play();
document.getElementById('entrada4').disabled = true;
m++;
bart4=1;
}else
if (dato4!="favorite_color_is_blue"){
$('#entrada4').css('color','#d9364d'); 
}
}
//-----------------------------------------------------------------------------------------------------------------------
if(id=='entrada5'){
dato5=document.getElementById(id).value;
left5=dato5.length*letra+87;
$('#manitu').css('left',''+left5+'px');
$('#manitu').css('top','61%');
dato5=dato5.toLowerCase();
dato5=dato5.replace(/\s/g,"_");  
cadena55=dato5;  
if (dato5==""){
}else
if ( ((dato5=="likes_to_go_to_the_gym,_to_read_and_to_listen_to_music")&&(ijole[0]==0)) ||((dato5=="likes_going_to_the_gym,_reading_and_listening_to_music")&&(ijole[0]==0)) ||((dato5=="doesn't_like_eating_fast_food_or_dancing")&&(ijole[1]==0))||((dato5=="does_not_like_eating_fast_food_or_dancing")&&(ijole[1]==0))||((dato5=="doesn't_like_to_eat_fast_food_or_to_dance")&&(ijole[1]==0))||((dato5=="does_not_like_to_eat_fast_food_or_to_dance")&&(ijole[1]==0))){
if((dato5=="likes_to_go_to_the_gym,_to_read_and_to_listen_to_music")||(dato5=="likes_going_to_the_gym,_reading_and_listening_to_music")){
ijole[0]=1;
}else
if((dato5=="doesn't_like_eating_fast_food_or_dancing")||(dato5=="does_not_like_eating_fast_food_or_dancing")||(dato5=="doesn't_like_to_eat_fast_food_or_to_dance")||(dato5=="does_not_like_to_eat_fast_food_or_to_dance")){
ijole[1]=1;
}
alterna2=dato5;
if(dato5!=alterna3){
$('#entrada5').css('color','#308c58'); 
document.getElementById('bien').play();
document.getElementById('entrada5').disabled = true;
m++;
bart5=1;
}
}else
//if (( (dato5!="likes_to_go_to_the_gym,_to_read_and_to_listen_to_music")&&(dato5!="likes_going_to_the_gym,_reading_and_listening_to_music")&&(dato5!="doesn't_like_eating_fast_food_or_dancing")&&(dato5!="does_not_like_eating_fast_food_or_dancing")&&(dato5!="doesn't_like_to_eat_fast_food_or_to_dance")&&(dato5!="does_not_like_to_eat_fast_food_or_to_dance"))||(dato5==alterna3)){
$('#entrada5').css('color','#d9364d'); 
//}  	
}
//-----------------------------------------------------------------------------------------------------------------------
if(id=='entrada6'){
dato6=document.getElementById(id).value;
left6=dato6.length*letra+87;
$('#manitu').css('left',''+left6+'px');
$('#manitu').css('top','70%');
dato6=dato6.toLowerCase();
dato6=dato6.replace(/\s/g,"_");     
cadena66=dato6; 
if (dato6==""){
}else
if ( ((dato6=="doesn't_like_to_eat_fast_food_or_to_dance")&&(ijole[1]==0))||((dato6=="does_not_like_to_eat_fast_food_or_to_dance")&&(ijole[1]==0))|| ((dato6=="doesn't_like_eating_fast_food_or_dancing")&&(ijole[1]==0))||((dato6=="does_not_like_eating_fast_food_or_dancing")&&(ijole[1]==0))||((dato6=="likes_going_to_the_gym,_reading_and_listening_to_music")&&(ijole[0]==0))||((dato6=="likes_to_go_to_the_gym,_to_read_and_to_listen_to_music")&&(ijole[0]==0)) ){
if((dato6=="likes_to_go_to_the_gym,_to_read_and_to_listen_to_music")||(dato6=="likes_going_to_the_gym,_reading_and_listening_to_music")){
ijole[0]=1;
}else
if((dato6=="doesn't_like_eating_fast_food_or_dancing")||(dato6=="does_not_like_eating_fast_food_or_dancing")||(dato6=="doesn't_like_to_eat_fast_food_or_to_dance")||(dato6=="does_not_like_to_eat_fast_food_or_to_dance")){
ijole[1]=1;
}
alterna3=dato6;
if(dato6!=alterna2){
$('#entrada6').css('color','#308c58'); 
document.getElementById('bien').play();
document.getElementById('entrada6').disabled = true;
m++;
bart6=1;
}
}else	
//if (( (dato6!="doesn't_like_to_eat_fast_food_or_to_dance")&&(dato6!="does_not_like_to_eat_fast_food_or_to_dance")&& (dato6!="doesn't_like_eating_fast_food_or_dancing")&&(dato6!="does_not_like_eating_fast_food_or_dancing")&&(dato6!="likes_going_to_the_gym,_reading_and_listening_to_music")&&(dato6!="likes_to_go_to_the_gym,_to_read_and_to_listen_to_music"))||(dato6==alterna2)){
$('#entrada6').css('color','#d9364d'); 
//} 	
}
array_cadena11=cadena11.split("_");
array_cadena22=cadena22.split("_");
array_cadena33=cadena33.split("_");
array_cadena44=cadena44.split("_");
array_cadena55=cadena55.split("_");
array_cadena66=cadena66.split("_");
}
}
//-----------------------------------------------------------
function capturar(){
show++;
if(show==2){
if ((dato1=="Lindsey_Harper")||(dato1=="LINDSEY_HARPER")){ 
cuentabien++;
}
if ((dato2=="21_years_old")||(dato2=="21_YEARS_OLD")||(dato2=="a_secretary_at_OGM_inc")||(dato2=="A_SECRETARY_AT_OGM_INC")){
cuentabien++;
}
if ((dato3=="a_secretary_at_OGM_inc")||(dato3=="A_SECRETARY_AT_OGM_INC")||(dato3=="21_years_old")||(dato3=="21_YEARS_OLD")){
cuentabien++;
}
if (dato4=="favorite_color_is_blue"){
cuentabien++;
}
if ( (dato5=="likes_to_go_to_the_gym,_to_read_and_to_listen_to_music")||(dato5=="likes_going_to_the_gym,_reading_and_listening_to_music")||(dato5=="doesn't_like_eating_fast_food_or_dancing")||(dato5=="does_not_like_eating_fast_food_or_dancing")||(dato5=="doesn't_like_to_eat_fast_food_or_to_dance")||(dato5=="does_not_like_to_eat_fast_food_or_to_dance")){
cuentabien++;
}
if ( (dato6=="doesn't_like_to_eat_fast_food_or_to_dance")||(dato6=="does_not_like_to_eat_fast_food_or_to_dance")||(dato6=="doesn't_like_eating_fast_food_or_dancing")||(dato6=="does_not_like_eating_fast_food_or_dancing")||(dato6=="likes_going_to_the_gym,_reading_and_listening_to_music")||(dato6=="likes_to_go_to_the_gym,_to_read_and_to_listen_to_music")){
cuentabien++;
}
}
if(show<2){
if(((dato1=="Lindsey_Harper")||(dato1=="LINDSEY_HARPER"))&&((dato2=="21_years_old")||(dato2=="21_YEARS_OLD")||(dato2=="a_secretary_at_OGM_inc")||(dato2=="A_SECRETARY_AT_OGM_INC"))&&((dato3=="a_secretary_at_OGM_inc")||(dato3=="A_SECRETARY_AT_OGM_INC")||(dato3=="21_years_old")||(dato3=="21_YEARS_OLD"))&&(dato4=="favorite_color_is_blue")&&( (dato5=="likes_to_go_to_the_gym,_to_read_and_to_listen_to_music")||(dato5=="likes_going_to_the_gym,_reading_and_listening_to_music")||(dato5=="doesn't_like_eating_fast_food_or_dancing")||(dato5=="does_not_like_eating_fast_food_or_dancing")||(dato5=="doesn't_like_to_eat_fast_food_or_to_dance")||(dato5=="does_not_like_to_eat_fast_food_or_to_dance"))&&( (dato6=="doesn't_like_to_eat_fast_food_or_to_dance")||(dato6=="does_not_like_to_eat_fast_food_or_to_dance")||(dato6=="doesn't_like_eating_fast_food_or_dancing")||(dato6=="does_not_like_eating_fast_food_or_dancing")||(dato6=="likes_going_to_the_gym,_reading_and_listening_to_music")||(dato6=="likes_to_go_to_the_gym,_to_read_and_to_listen_to_music"))){
document.getElementById('bien').play();
aux++;
document.getElementById('button1').click();
}
if(((dato1!="Lindsey_Harper")||(dato1!="LINDSEY_HARPER"))||((dato2!="21_years_old")||(dato2!="21_YEARS_OLD")||(dato2!="a_secretary_at_OGM_inc")||(dato2!="A_SECRETARY_AT_OGM_INC"))||((dato3!="a_secretary_at_OGM_inc")||(dato3!="A_SECRETARY_AT_OGM_INC")||(dato3!="21_years_old")||(dato3!="21_YEARS_OLD"))||(dato4!="favorite_color_is_blue")||( (dato5!="likes_to_go_to_the_gym,_to_read_and_to_listen_to_music")||(dato5!="likes_going_to_the_gym,_reading_and_listening_to_music")||(dato5!="doesn't_like_eating_fast_food_or_dancing")||(dato5!="does_not_like_eating_fast_food_or_dancing")||(dato5!="doesn't_like_to_eat_fast_food_or_to_dance")||(dato5!="does_not_like_to_eat_fast_food_or_to_dance"))||( (dato6!="doesn't_like_to_eat_fast_food_or_to_dance")||(dato6!="does_not_like_to_eat_fast_food_or_to_dance")||(dato6!="doesn't_like_eating_fast_food_or_dancing")||(dato6!="does_not_like_eating_fast_food_or_dancing")||(dato6!="likes_going_to_the_gym,_reading_and_listening_to_music")||(dato6!="likes_to_go_to_the_gym,_to_read_and_to_listen_to_music"))){
if(show<2){
otru++;
document.getElementById('sorry').play();}
aux++;
aux2++;
}
}
if (show==2) {
$('#button1').css('opacity','0.4');
$('#button1').css('pointer-events','none');
bigbang11.classList.remove('bigbang');
if(otru>0){
document.getElementById('t1').play();
}
setTimeout(function(){document.getElementById('t').play();},2500)
quitarmanito();
document.getElementById('escritura_src').innerHTML='';//h
document.getElementById('escritura_src1').innerHTML='';
document.getElementById('escritura_src2').innerHTML='';
document.getElementById('escritura_src3').innerHTML='';
document.getElementById('escritura_src4').innerHTML='';
document.getElementById('escritura_src5').innerHTML='';
setTimeout(function(){ document.getElementById('entrada1').disabled = true; 
document.getElementById('entrada2').disabled = true;
document.getElementById('entrada3').disabled = true; 
document.getElementById('entrada4').disabled = true; 
document.getElementById('entrada5').disabled = true; 
document.getElementById('entrada6').disabled = true; 
$('.text').css('opacity','0.4');  },0000);
$('#prev1').css('opacity','0.4');
$('#prev1').css('pointer-events','none');
setTimeout(function(){},3000);
setTimeout(function(){ document.getElementById('escritura_src').innerHTML="Her name is <strong class='bien'>Lindsey Harper</strong>"; },1500);	
setTimeout(function(){ document.getElementById('escritura_src1').innerHTML="She is <strong class='bien'>21 years old</strong>"; },4000);
setTimeout(function(){ document.getElementById('escritura_src2').innerHTML="She is <strong class='bien'>a secretary at OGM inc</strong>"; },6500);
setTimeout(function(){ document.getElementById('escritura_src3').innerHTML="Her <strong class='bien'>favorite color is blue</strong>"; },10500);
setTimeout(function(){ document.getElementById('escritura_src4').innerHTML="She <strong class='bien'>likes going to the gym, reading and listening to music</strong>"; },13000);
setTimeout(function(){ document.getElementById('escritura_src5').innerHTML="She <strong class='bien'>doesn't like eating fast food or dancing</strong>"; },18000);
setTimeout(function(){ $('#button1').css('display','none'); 
$('#continuar3').css('display','inline'); 
$('#eme').css('background','none');
$('#r1').css('background','none'); 
$('.blu').css('background','transparent'); 
$('#contenedor').css('background','#f4eddd'); 
$('#contenedor2').css('background','#f4eddd');
mostrar();
},22000);
$('h2').css('visibility','visible');
}
}
//-----------------------------------------------------------  
function mostrar(){
$('#blanco2').css('background','none');
$('#contenedor2').css('display','inline-block');
$('#contenedor2').css('width','40%');
$('#contenedor').css('width','40%');
dato1=dato1.replace(/_/g," "); 
dato2=dato2.replace(/_/g," "); 
dato3=dato3.replace(/_/g," "); 
dato4=dato4.replace(/_/g," "); 
dato5=dato5.replace(/_/g," "); 
dato6=dato6.replace(/_/g," "); 

if(bart1==1){
document.getElementById('esctitura2_src').innerHTML+="<strong class='bien'>"+dato1+"</strong>";
bart1++;
}
if(bart1==0){
document.getElementById('esctitura2_src').innerHTML+="<b>"+dato1+"</b>";
}
//}else
if (dato1=="") {
document.getElementById('esctitura2_src').innerHTML+='<b>NO Answer</b>';
}
//----------------------------------------------------------------------
//if(dato2!=""){
if(bart2==1){
document.getElementById('esctitura2_src1').innerHTML+="<strong class='bien'>"+dato2+"</strong>";
bart2++;
}
//}else
if(bart2==0){
document.getElementById('esctitura2_src1').innerHTML+="<b>"+dato2+"</b>";
}
if (dato2=="") {
document.getElementById('esctitura2_src1').innerHTML+='<b>NO Answer</b>';
}
//----------------------------------------------------------------------
//if(dato3!=""){
if(bart3==1){
document.getElementById('esctitura2_src2').innerHTML+="<strong class='bien'>"+dato3+"</strong>";
bart3++;
}
//}else
if(bart3==0){
document.getElementById('esctitura2_src2').innerHTML+="<b>"+dato3+"</b>";
}
if (dato3=="") {
document.getElementById('esctitura2_src2').innerHTML+='<b>NO Answer</b>';
}
//----------------------------------------------------------------------
//if(dato4!=""){
if(bart4==1){
document.getElementById('esctitura2_src3').innerHTML+="<strong class='bien'>"+dato4+"</strong>";
bart4++;
}
//}else
if(bart4==0){
document.getElementById('esctitura2_src3').innerHTML+="<b>"+dato4+"</b>";
}
if (dato4=="") {
document.getElementById('esctitura2_src3').innerHTML+='<b>NO Answer</b>';
}
//----------------------------------------------------------------------
//if(dato5!=""){
if(bart5==1){
document.getElementById('esctitura2_src4').innerHTML+="<strong class='bien'>"+dato5+"</strong>";
bart5++;
}
//}else
if(bart5==0){
document.getElementById('esctitura2_src4').innerHTML+="<b>"+dato5+"</b>";
}
if (dato5=="") {
document.getElementById('esctitura2_src4').innerHTML+='<b>NO Answer</b>';
}
//----------------------------------------------------------------------
//if(dato6!=""){
if(bart6==1){
document.getElementById('esctitura2_src5').innerHTML+="<strong class='bien'>"+dato6+"</strong>";
bart6++;
}
//}else
if(bart6==0){
document.getElementById('esctitura2_src5').innerHTML+="<b>"+dato6+"</b>";
}
if (dato6=="") {
document.getElementById('esctitura2_src5').innerHTML+='<b>NO Answer</b>';
}
}
//-----------------------------------------------------------------------------------------------------------------

function finalizaw6(){
document.getElementById('t').pause();
show=3;
capturar();
$('#continuar3').css('display','none');
$('#prev').css('display','none');
$('#prev1').css('display','none');
$('#prev2').css('display','inline');  
$('#r1').css('display','none');
$('.sig').css('display','none');
$('#continuar4').css('display','inline');
resultado(cuentabien,6);
}

//---------------------------------------------------------------------------------------------------------------

function activaaudio1(id){

if(externo==1){
audio=document.getElementById('t');
pausito = document.getElementById("pause1");
if (audio.paused) {
audio.play();
pausito.textContent = "||";
$("#reproduce66").css('display','inline');
$("#pause1").css('display','none');
m11++;
contador6++;
} else {
audio.pause();
pausito.textContent = ">";
$("#reproduce66").css('display','none');
$("#pause1").css('display','inline'); 
audio.currentTime = 0;
m11++;
}
if (contador6==1){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("primero").checked = true;
$('#perendengues').css('pointer-events','none'); 
}
if (contador6==2){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("segundo").checked = true;
$('#perendengues').css('pointer-events','none'); 
}
if (contador6==3){
$('#perendengues').css('pointer-events','auto'); 
document.getElementById("tercero").checked = true;
$('#perendengues').css('pointer-events','none'); 
$("#reproduce66").css('opacity','0.4');
$('#reproduce66').css('pointer-events','none');
}
}
}

//------------------------------------------------------------------------------------------------------------------------

function inicio(){
externo=0;
$('#eme').css('display','none');
$('#prev').css('display','none');
$('#continuar1').css('display','none');
$('#reproduce66').css('display','none');
$('#perendengues1').css('display','none');
$('#pause1').css('display','none');
$('#button1').css('display','inline');
$('#prev1').css('display','inline');
$('#blanco2').css('display','block');

if(m11!=0){
audio.pause();
audio.currentTime = 0;
}

otroauxiliarjaja++;
document.getElementById('bigbang22').className = "bigbang";
}

//-----------------------------------------------------------

function volverlin(){
if(otroauxiliarjaja==2){
$('#prev1').css('opacity','0.4');
$('#prev1').css('pointer-events','none');
}
if(otroauxiliarjaja<3){
externo=1;
}else{
externo=-1;	
}
$('#blanco2').css('display','none');
$('#prev1').css('display','none');
$('#continuar3').css('display','none');
$('#button1').css('display','none');
$('#eme').css('display','block');
$('#prev').css('display','inline-block');
$('#continuar1').css('display','inline-block');
$('.perendengues').css('display','none');
$('.sig2').css('display','none');
$('#fito').css('display','none');
$('#reproduce66').css('display','inline-block');
$('#perendengues1').css('display','inline-block');
}

//----------------------------------------

function bichin(){
}

//-----------------------------------------------------------

function carga(){
$('.sig').css('opacity','1');
$('#eme').css('opacity','1');
$('#blanco1').css('opacity','1');
$('#plane').addClass("muestrame");
$('aside').css('z-index','12');
$('#button1').css('opacity','1');
$('#continuar1').css('opacity','1');	
$('#continuar1').css('display','inline'); 
$('#reproduce66').css('display','inline'); 
$('#perendengues1').css('display','inline'); 
document.getElementById('reproduce66').click();
temp=setTimeout(function(){
document.getElementById('bigbang22').className = "bigbang";
},19000);
}

//---------------------------------------
