var m="",lleva=[0,0,0,0,0,0,0,0,0,0,0],show=0,cuentabien=0;
var aux=0,aux2=0,d1="",d11="",d2="",d22="",d3="", d33="",d4="",d44="",d5="",d55="",d6="",d66="",d7="",d77="",d8="",d88="",d9="",d99="",d10="",d1010="",d110="",d1111="";
var dato1="",dato2="",dato3="",dato4="",dato5="",dato6="",dato7="",dato8="",dato9="",dato10="",dato11="";
var cadena11="",cadena22="",cadena33="",cadena44="",cadena55="",cadena66="",cadena77="",cadena88="",cadena99="",cadena1010="",cadena1111="";
var array_cadena11="",array_cadena22="",array_cadena33="", array_cadena44="", array_cadena55="",array_cadena66="",array_cadena77="", array_cadena88="", array_cadena99="",array_cadena1010="",array_cadena1111="";
var aux11=0,aux22=1;
var otru=0; 
var m11=0;
var contador6=0;
var externo=1;
var audio;
var pausito;
var otroauxiliarjaja=0;
var left1=0,left2=0,left3=0,left4=0,left5=0,left6=0,left7=0,left8=0,left9=0,left10=0,left11=0;
var bart1=0;
var bart2=0;
var bart3=0;
var bart4=0;
var bart5=0;
var bart6=0;
var bart7=0;
var bart8=0;
var bart9=0;
var bart10=0;
var bart11=0;
//-----------------------------------------------------------
function validarn(e) { 
tecla = (document.all) ? e.keyCode : e.which; 
if (tecla==8) return true; 
if (tecla==9) return true; 
if (tecla==11) return true; 
patron = /[A-Za-zñÑ'áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛÑñäëïöüÄËÏÖÜ\s\t0-9]/; 
te = String.fromCharCode(tecla); 
return patron.test(te); 
}//-----------------------------------------------------------
function quitarmanito(){
$('#manitu').css('display','none');
}
//-----------------------------------------------------------

function userSubmit(e,id) {    
if (true) {
if(id=='entrada1'){
dato1=document.getElementById(id).value;
left1=dato1.length*7+152;
$('#manitu').css('left',''+left1+'px');
$('#manitu').css('top','15%');
dato1=dato1.replace(/\s/g,"_");   
cadena11=dato1;
if (dato1==""){
}else
if ((dato1=="Steve")||(dato1=="STEVE")){
$('#entrada1').css('color','#308c58'); 
document.getElementById('bien').play();
document.getElementById('entrada1').disabled = true;
m++;
bart1=1;
}else
if ((dato1!="Steve")||(dato1!="STEVE")){
if(lleva[0]==0)
$('#entrada1').css('color','#d9364d'); 
}
}
//-------------------------------------------
if(id=='entrada2'){
dato2=document.getElementById(id).value;
left2=dato2.length*7+104;
$('#manitu').css('left',''+left2+'px');
$('#manitu').css('top','26%');
dato2=dato2.replace(/\s/g,"_");  
cadena22=dato2; 
if (dato2==""){
}else
if ((dato2=="Saturday_morning")||(dato2=="SATURDAY_MORNING")){
$('#entrada2').css('color','#308c58'); 
document.getElementById('bien').play();
document.getElementById('entrada2').disabled = true;
m++; 
bart2=1;
}else
if ((dato2!="Saturday_morning")&&(dato2!="SATURDAY_MORNING")){
$('#entrada2').css('color','#d9364d'); 
} 
}
//-------------------------------------------
if(id=='entrada3'){
dato3=document.getElementById(id).value;
left3=dato3.length*7+108;
$('#manitu').css('left',''+left3+'px');
$('#manitu').css('top','36%');
dato3=dato3.replace(/\s/g,"_"); 
cadena33=dato3;
if (dato3==""){
}else
if ((dato3=="is_going")||(dato3=="IS_GOING")){
$('#entrada3').css('color','#308c58'); 
document.getElementById('bien').play();
document.getElementById('entrada3').disabled = true;
m++;
bart3=1;
}else
if ((dato3!="is_going")&&(dato3!="IS_GOING")){
$('#entrada3').css('color','#d9364d'); 
}	
}
//-------------------------------------------
if(id=='entrada4'){
dato4=document.getElementById(id).value;
left4=dato4.length*7+97;
$('#manitu').css('left',''+left4+'px');
$('#manitu').css('top','47%');
dato4=dato4.replace(/\s/g,"_");
cadena44=dato4;  
if (dato4==""){
}else
if ((dato4=="dog_to_the_vet")||(dato4=="DOG_TO_THE_VET")){
$('#entrada4').css('color','#308c58'); 
document.getElementById('bien').play();
document.getElementById('entrada4').disabled = true;
m++;
bart4=1;
}else
if ((dato4!="dog_to_the_vet")||(dato4!="DOG_TO_THE_VET")){
$('#entrada4').css('color','#d9364d'); 
}
}
//-------------------------------------------
if(id=='entrada5'){
dato5=document.getElementById(id).value;
left5=dato5.length*7+97;
$('#manitu').css('left',''+left5+'px');
$('#manitu').css('top','58%');
dato5=dato5.replace(/\s/g,"_");  
cadena55=dato5;  
if (dato5==""){
}else
if ((dato5=="is_going")||(dato5=="IS_GOING")){
$('#entrada5').css('color','#308c58'); 
document.getElementById('bien').play();
document.getElementById('entrada5').disabled = true;
m++;
bart5=1;
}else
if ((dato5!="is_going")||(dato5!="IS_GOING")){
$('#entrada5').css('color','#d9364d'); 
}  	
}
//-------------------------------------------
if(id=='entrada6'){
dato6=document.getElementById(id).value;
left6=dato6.length*7+97;
$('#manitu').css('left',''+left6+'px');
$('#manitu').css('top','70%');
dato6=dato6.replace(/\s/g,"_");     
cadena66=dato6; 
if (dato6==""){
}else
if ((dato6=="a_new_T.V")|| (dato6=="A_NEW_T.V")){
$('#entrada6').css('color','#308c58'); 
document.getElementById('bien').play();
document.getElementById('entrada6').disabled = true;
m++;
bart6=1;
}
if ((dato6!="a_new_T.V")&& (dato6!="A_NEW_T.V")){
$('#entrada6').css('color','#d9364d'); 
} 	
}
//-------------------------------------------
if(id=='entrada7'){
dato7=document.getElementById(id).value;
left7=dato7.length*7+97;
$('#manitu').css('left',''+left7+'px');
$('#manitu').css('top','70%');
dato7=dato7.replace(/\s/g,"_");     
cadena77=dato7; 
if (dato7==""){
}else
if ((dato7=="is_going_to_play_tennis")|| (dato7=="IS_GOING_TO_PLAY_TENNIS")){
$('#entrada7').css('color','#308c58'); 
document.getElementById('bien').play();
document.getElementById('entrada7').disabled = true;
m++;
bart7=1;
}
if ((dato7!="is_going_to_play_tennis")&& (dato7!="IS_GOING_TO_PLAY_TENNIS")){
$('#entrada7').css('color','#d9364d'); 
} 	
}
//-------------------------------------------
if(id=='entrada8'){
dato8=document.getElementById(id).value;
left8=dato8.length*7+97;
$('#manitu').css('left',''+left8+'px');
$('#manitu').css('top','70%');
dato8=dato8.replace(/\s/g,"_");     
cadena88=dato8; 
if (dato8==""){
}else
if ((dato8=="is_going_to_have")|| (dato8=="IS_GOING_TO_HAVE")){
$('#entrada8').css('color','#308c58'); 
document.getElementById('bien').play();
document.getElementById('entrada8').disabled = true;
m++;
bart8=1;
}
if ((dato8!="is_going_to_have")&& (dato8!="IS_GOING_TO_HAVE")){
$('#entrada8').css('color','#d9364d'); 
} 	
}
//-------------------------------------------
if(id=='entrada9'){
dato9=document.getElementById(id).value;
left9=dato9.length*7+97;
$('#manitu').css('left',''+left9+'px');
$('#manitu').css('top','70%');
dato9=dato9.replace(/\s/g,"_");     
cadena99=dato9; 
if (dato9==""){
}else
if ((dato9=="at_the_Smith's_house")|| (dato9=="AT_THE_SMITH'S_HOUSE")){
$('#entrada9').css('color','#308c58'); 
document.getElementById('bien').play();
document.getElementById('entrada9').disabled = true;
m++;
bart9=1;
}
if ((dato9!="at_the_Smith's_house")&& (dato9!="AT_THE_SMITH'S_HOUSE")){
$('#entrada9').css('color','#d9364d'); 
} 	
}
//-------------------------------------------
if(id=='entrada10'){
dato10=document.getElementById(id).value;
left10=dato10.length*7+97;
$('#manitu').css('left',''+left10+'px');
$('#manitu').css('top','70%');
dato10=dato10.replace(/\s/g,"_");     
cadena1010=dato10; 
if (dato10==""){
}else
if ((dato10=="is_going_to_have_some_beers_at")|| (dato10=="IS_GOING_TO_HAVE_SOME_BEERS_AT")){
$('#entrada10').css('color','#308c58'); 
document.getElementById('bien').play();
document.getElementById('entrada10').disabled = true;
m++;
bart10=1;
}
if ((dato10!="is_going_to_have_some_beers_at")&& (dato10!="IS_GOING_TO_HAVE_SOME_BEERS_AT")){
$('#entrada10').css('color','#d9364d'); 
} 	
}
//-------------------------------------------
if(id=='entrada11'){
dato11=document.getElementById(id).value;
left11=dato11.length*7+97;
$('#manitu').css('left',''+left11+'px');
$('#manitu').css('top','70%');
dato11=dato11.replace(/\s/g,"_");     
cadena1111=dato11; 
if (dato11==""){
}else
if ((dato11=="is_going_to_watch_a_movie")|| (dato11=="IS_GOING_TO_WATCH_A_MOVIE")){
$('#entrada11').css('color','#308c58'); 
document.getElementById('bien').play();
document.getElementById('entrada11').disabled = true;
m++;
bart11=1;
}
if ((dato11!="is_going_to_watch_a_movie")&& (dato11!="IS_GOING_TO_WATCH_A_MOVIE")){
$('#entrada11').css('color','#d9364d'); 
} 	
}

array_cadena11=cadena11.split("_");
array_cadena22=cadena22.split("_");
array_cadena33=cadena33.split("_");
array_cadena44=cadena44.split("_");
array_cadena55=cadena55.split("_");
array_cadena66=cadena66.split("_");
array_cadena77=cadena77.split("_");
array_cadena88=cadena88.split("_");
array_cadena99=cadena99.split("_");
array_cadena1010=cadena1010.split("_");
array_cadena1111=cadena1111.split("_");
}
}
//-----------------------------------------------------------
function capturar(){
show++;
if(show==2){
if ((dato1=="Steve")||(dato1=="STEVE")){
cuentabien++; 
}
if ((dato2=="Saturday_morning")||(dato2=="SATURDAY_MORNING")){
cuentabien++; 
}
if ((dato3=="is_going")||(dato3=="IS_GOING")){
cuentabien++;
}
if ((dato4=="dog_to_the_vet")||(dato4=="DOG_TO_THE_VET")){
cuentabien++;
}
if ((dato5=="is_going")||(dato5=="IS_GOING")){
cuentabien++;
}
if ((dato6=="a_new_T.V")|| (dato6=="A_NEW_T.V")){
cuentabien++;
}
if ((dato7=="is_going_to_play_tennis")|| (dato7=="IS_GOING_TO_PLAY_TENNIS")){
cuentabien++;
}
if ((dato8=="is_going_to_have")|| (dato8=="IS_GOING_TO_HAVE")){
cuentabien++;
}
if ((dato9=="at_the_Smith's_house")|| (dato9=="AT_THE_SMITH'S_HOUSE")){
cuentabien++;
}
if ((dato10=="is_going_to_have_some_beers_at")|| (dato10=="IS_GOING_TO_HAVE_SOME_BEERS_AT")){
cuentabien++;
}
if ((dato11=="is_going_to_watch_a_movie")|| (dato11=="IS_GOING_TO_WATCH_A_MOVIE")){
cuentabien++;
}
}
if(show<2){
if( ((dato1=="Steve")||(dato1=="STEVE"))&&((dato2=="Saturday_morning")||(dato2=="SATURDAY_MORNING"))&&((dato3=="is_going")||(dato3=="IS_GOING"))&&((dato4=="dog_to_the_vet")||(dato4=="DOG_TO_THE_VET"))&&((dato5=="is_going")||(dato5=="IS_GOING"))&&((dato6=="a_new_T.V")|| (dato6=="A_NEW_T.V"))&&((dato7=="is_going_to_play_tennis")|| (dato7=="IS_GOING_TO_PLAY_TENNIS"))&&((dato8=="is_going_to_have")|| (dato8=="IS_GOING_TO_HAVE"))&&((dato9=="at_the_Smith's_house")|| (dato9=="AT_THE_SMITH'S_HOUSE"))&&((dato10=="is_going_to_have_some_beers_at")|| (dato10=="IS_GOING_TO_HAVE_SOME_BEERS_AT"))&&((dato11=="is_going_to_watch_a_movie")|| (dato11=="IS_GOING_TO_WATCH_A_MOVIE")) ){
document.getElementById('bien1').play();
aux++;
document.getElementById('button1').click();
}else{
if(show<2){ 
otru++;
document.getElementById('sorry').play();}
aux++;
aux2++;
}
}
if (show==2) {
if ((cuentabien>=8)&&(cuentabien<=9)){
$('#button1').css('opacity','0.4');
$('#button1').css('pointer-events','none');
bigbang11.classList.remove('bigbang');
if(otru>0){
document.getElementById('bien2').play();
}
}
if (cuentabien<=7){
$('#button1').css('opacity','0.4');
$('#button1').css('pointer-events','none');
bigbang11.classList.remove('bigbang');
if(otru>0){
document.getElementById('t1').play();
}
}

setTimeout(function(){document.getElementById('t').play();},2500)
quitarmanito();
$('.text').css('pointer-events','none');
$('.text').css('opacity','0.9');
$('#prev1').css('opacity','0.4');
$('#prev1').css('pointer-events','none');
setTimeout(function(){},3000);
setTimeout(function(){ $('h2').css('visibility','visible'); document.getElementById('culevante').innerHTML="This is <strong class='bien'>Steve</strong>.<br>"; },1500);	
setTimeout(function(){ document.getElementById('culevante').innerHTML+="Next weekend, on <strong class='bien'>Saturday morning</strong> he <strong class='bien'>is going to </strong>to take the <strong class='bien'>dog to the vet </strong>. Then, he <strong class='bien'>is going </strong>to buy <strong class='bien'>a new T.V</strong>. <br><br>"; },4000);
setTimeout(function(){ document.getElementById('culevante').innerHTML+="In the afternoon, he <strong class='bien'>is going to play tennis </strong>with Sue. In the evening he <strong class='bien'>is going to have </strong>dinner <strong class='bien'>at the Smith's house </strong> and at night he <strong class='bien'>is going to have some beers at </strong>Homer's bar. <br><br>"; },13000);
setTimeout(function(){ document.getElementById('culevante').innerHTML+="On Sunday he <strong class='bien'>is going to watch a movie </strong>with some friends."; },23000);
setTimeout(function(){ $('#button1').css('display','none'); 
$('#continuar3').css('display','inline'); 
$('#eme').css('background','none');
$('#r1').css('background','none'); 
$('.blu').css('background','transparent'); 
$('#contenedor').css('background','#f4eddd'); 
$('#contenedor2').css('background','#f4eddd');
mostrar();
},28000);
}
}
//-----------------------------------------------------------
function mostrar(){
$('#contenedor').css('border','7px solid #2d7656');
$('#contenedor2').css('border','7px solid #2d7656');
$('#blanco2').css('background','none');
$('#contenedor2').css('display','inline-block');
$('#contenedor3').css('display','inline-block');
$('#contenedor').css('display','none');
dato1=dato1.replace(/_/g," "); 
dato2=dato2.replace(/_/g," "); 
dato3=dato3.replace(/_/g," "); 
dato4=dato4.replace(/_/g," "); 
dato5=dato5.replace(/_/g," "); 
if(bart1==1){
esctitura2_src.value='dato1';
$('#esctitura2_src').css('color','#308c58'); 
bart1++;
}
if(bart1==0){
esctitura2_src.value='dato1';
$('#esctitura2_src').css('color','#d9364d'); 
}
if (dato1=="") {  
esctitura2_src.value='NO Answer';
$('#esctitura2_src').css('color','#d9364d');  
}
//----------------------------------------------------------------------
if(bart2==1){
esctitura2_src1.value='dato2';
$('#esctitura2_src1').css('color','#308c58');
bart2++;
}
if(bart2==0){
esctitura2_src1.value='dato2';
$('#esctitura2_src1').css('color','#d9364d'); 
}
if (dato2=="") {
esctitura2_src1.value='NO Answer';
$('#esctitura2_src1').css('color','#d9364d');
}
//----------------------------------------------------------------------
if(bart3==1){
esctitura2_src2.value='dato3';
$('#esctitura2_src2').css('color','#308c58');
bart3++;
}
if(bart3==0){
esctitura2_src2.value='dato3';
$('#esctitura2_src2').css('color','#d9364d');
}
if (dato3=="") {
esctitura2_src2.value='NO Answer';
$('#esctitura2_src2').css('color','#d9364d');
}
//----------------------------------------------------------------------
if(bart4==1){
esctitura2_src3.value='dato4';
$('#esctitura2_src3').css('color','#308c58');
bart4++;
}
if(bart4==0){
esctitura2_src3.value='dato4';
$('#esctitura2_src3').css('color','#d9364d');
}
if (dato4=="") {
esctitura2_src3.value='NO Answer';
$('#esctitura2_src3').css('color','#d9364d');
}
//----------------------------------------------------------------------
if(bart5==1){
esctitura2_src4.value='dato5';
$('#esctitura2_src4').css('color','#308c58');
bart5++;
}
if(bart5==0){
esctitura2_src4.value='dato5';
$('#esctitura2_src4').css('color','#d9364d');
}
if (dato5=="") {
esctitura2_src4.value='NO Answer';
$('#esctitura2_src4').css('color','#d9364d');
}
//----------------------------------------------------------------------
if(bart6==1){
esctitura2_src5.value='dato6';
$('#esctitura2_src5').css('color','#308c58');
bart6++;
}
if(bart6==0){
esctitura2_src5.value='dato6';
$('#esctitura2_src5').css('color','#d9364d');
}
if (dato6=="") {
esctitura2_src5.value='NO Answer';
$('#esctitura2_src5').css('color','#d9364d');
}
//----------------------------------------------------------------------
if(bart7==1){
esctitura2_src6.value='dato7';
$('#esctitura2_src6').css('color','#308c58');
bart7++;
}
if(bart7==0){
esctitura2_src6.value='dato7';
$('#esctitura2_src6').css('color','#d9364d');
}
if (dato7=="") {
esctitura2_src6.value='NO Answer';
$('#esctitura2_src6').css('color','#d9364d');
}
//----------------------------------------------------------------------
if(bart8==1){
esctitura2_src7.value='dato8';
$('#esctitura2_src7').css('color','#308c58');
bart8++;
}
if(bart8==0){
esctitura2_src7.value='dato8';
$('#esctitura2_src7').css('color','#d9364d');
}
if (dato8=="") {
esctitura2_src7.value='NO Answer';
$('#esctitura2_src7').css('color','#d9364d');
}
//----------------------------------------------------------------------
if(bart9==1){
esctitura2_src8.value='dato9';
$('#esctitura2_src8').css('color','#308c58');
bart9++;
}
if(bart9==0){
esctitura2_src8.value='dato9';
$('#esctitura2_src8').css('color','#d9364d');
}
if (dato9=="") {
esctitura2_src8.value='NO Answer';
$('#esctitura2_src8').css('color','#d9364d');
}
//----------------------------------------------------------------------
if(bart10==1){
esctitura2_src9.value='dato10';
$('#esctitura2_src9').css('color','#308c58');
bart10++;
}
if(bart10==0){
esctitura2_src9.value='dato10';
$('#esctitura2_src9').css('color','#d9364d');
}
if (dato10=="") {
esctitura2_src9.value='NO Answer';
$('#esctitura2_src9').css('color','#d9364d');
}
//----------------------------------------------------------------------
if(bart11==1){
esctitura2_src10.value='dato11';
$('#esctitura2_src10').css('color','#308c58');
bart11++;
}
if(bart11==0){
esctitura2_src10.value='dato11';
$('#esctitura2_src10').css('color','#d9364d');
}
if (dato11=="") {
esctitura2_src10.value='NO Answer';
$('#esctitura2_src10').css('color','#d9364d');
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
resultado(cuentabien,11);
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
//-----------------------------------------------------------
function carga(){
$('.sig').css('opacity','1');
$('#eme').css('opacity','1');
$('#blanco1').css('opacity','1');
$('aside').css('z-index','12');
$('#button1').css('opacity','1');
$('#continuar1').css('opacity','1');	
$('#continuar1').css('display','inline'); 
$('#reproduce66').css('display','inline'); 
$('#perendengues1').css('display','inline'); 
document.getElementById('reproduce66').click();
temp=setTimeout(function(){
document.getElementById('bigbang22').className = "bigbang";
},24000);
}