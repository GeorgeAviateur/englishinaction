var tucha=0;
var otratucha=0;
function writing(){
/*m=0;
s=0;*/

respuestiña=document.getElementById("input2").value;
//respuestiña=respuestiña.toLowerCase();
respuestiña=respuestiña.replace(/\s/g,"_");

if (ejwriting[0]==1){ 	

respuestiña=document.getElementById("input1").value;
respuestiña=respuestiña.toLowerCase();
respuestiña=respuestiña.replace(/\s/g,"_");

if((respuestiña=="weight_lifting")&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');
$('#continuar1').css('display','inline'); 
preguntaAle2(true); 
$('#reproducir00').css('opacity','1');
activar[0] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4000);

contadorsiño++;
//preguntaAle2(true);
}else
if((respuestiña!="weight_lifting")&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); preguntaAle2(false);},8000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
$('#formulario').css('display','none');		
document.getElementById('parrafiño1').innerHTML='I like <b>weight lifting</b>.'; 
$('#reproducir00').css('opacity','1');
activar[0] = 1; 
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}
//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[1]==1){ 	
respuestiña=document.getElementById("input1").value;
respuestiña=respuestiña.toLowerCase();
respuestiña=respuestiña.replace(/\s/g,"_");
if(((respuestiña=="going")||(respuestiña=="to_go"))&&(contadorsiño==0)){

if(respuestiña=="going"){ 
activar[1] = 1;
}else
if(respuestiña=="to_go"){ 
suplente[1] = 1;
}

tucha++;
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4');
$('#continuar').css('pointer-events','none'); 
setTimeout(function(){
$('#continuar').css('display','none');
$('#continuar1').css('display','inline'); 
preguntaAle2(true); 
$('#reproducir00').css('opacity','1');
//activar[1] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4000);
contadorsiño++;
//preguntaAle2(true);
}else
if(((respuestiña!="going")||(respuestiña!="to_go"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); preguntaAle2(false);},8500);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
$('#formulario').css('display','none');
document.getElementById('parrafiño2').innerHTML="They love <b>to go </b>to the gym."; 
$('#reproducir00').css('opacity','1');
//activar[1] = 1; 
suplente[1] = 1; 
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[2]==1){ 
respuestiña=document.getElementById("input1").value;
respuestiña=respuestiña.toLowerCase();
respuestiña=respuestiña.replace(/\s/g,"_");
if(((respuestiña=="going")||(respuestiña=="to_go"))&&(contadorsiño==0)){

if(respuestiña=="going"){ 
activar[2] = 1;
}else
if(respuestiña=="to_go"){ 
suplente[2] = 1;
}

tucha++;
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4');
$('#continuar').css('pointer-events','none'); 
setTimeout(function(){
$('#continuar').css('display','none');
$('#continuar1').css('display','inline');
preguntaAle2(true); 
$('#reproducir00').css('opacity','1');
//activar[2] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4000);
contadorsiño++;
//preguntaAle2(true);
}else
if(((respuestiña!="going")||(respuestiña!="to_go"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline');preguntaAle2(false); },8500);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
$('#formulario').css('display','none');
document.getElementById('parrafiño2').innerHTML="I like <b>to go </b>to the movies."; 
$('#reproducir00').css('opacity','1');
//activar[2] = 1; 
suplente[2] = 1; 

document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[3]==1){ 	
respuestiña=document.getElementById("input1").value;
respuestiña=respuestiña.toLowerCase();
respuestiña=respuestiña.replace(/\s/g,"_");
if(((respuestiña=="listening")||(respuestiña=="to_listen"))&&(contadorsiño==0)){

if(respuestiña=="listening"){ 
activar[3] = 1;
}else
if(respuestiña=="to_listen"){ 
suplente[3] = 1;
}

tucha++;
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){
$('#continuar').css('display','none');
$('#continuar1').css('display','inline');
preguntaAle2(true); 
$('#reproducir00').css('opacity','1');
//activar[3] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4000);
contadorsiño++;
//preguntaAle2(true);
}else
if(((respuestiña!="listening")||(respuestiña!="to_listen"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); preguntaAle2(false);},8500);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
$('#formulario').css('display','none');
document.getElementById('parrafiño2').innerHTML="I like <b>to listen </b>to music."; 
$('#reproducir00').css('opacity','1');
//activar[3] = 1; 
suplente[3] = 1;
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[4]==1){ 
respuestiña=document.getElementById("input1").value;
respuestiña=respuestiña.toLowerCase();
respuestiña=respuestiña.replace(/\s/g,"_");	
if(((respuestiña=="eating")||(respuestiña=="to_eat"))&&(contadorsiño==0)){

if(respuestiña=="eating"){ 
activar[4] = 1;
}else
if(respuestiña=="to_eat"){ 
suplente[4] = 1;
}

tucha++;
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){
$('#continuar').css('display','none');
$('#continuar1').css('display','inline');
preguntaAle2(true); 
$('#reproducir00').css('opacity','1');
//activar[4] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4000);
contadorsiño++;
//preguntaAle2(true);
}else
if(((respuestiña!="eating")||(respuestiña!="to_eat"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4');
$('#continuar').css('pointer-events','none'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline');preguntaAle2(false); },8500);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
$('#formulario').css('display','none');
document.getElementById('parrafiño2').innerHTML="They like <b>to eat </b>fast food."; 
$('#reproducir00').css('opacity','1');
//activar[4] = 1; 
suplente[4] = 1;
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[5]==1){ 
respuestiña=document.getElementById("input1").value;
respuestiña=respuestiña.toLowerCase();
respuestiña=respuestiña.replace(/\s/g,"_");	
if(((respuestiña=="drinking")||(respuestiña=="to_drink"))&&(contadorsiño==0)){

if(respuestiña=="drinking"){ 
activar[5] = 1;
}else
if(respuestiña=="to_drink"){ 
suplente[5] = 1;
}

tucha++;
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){
$('#continuar').css('display','none');
$('#continuar1').css('display','inline'); 
preguntaAle2(true);
$('#reproducir00').css('opacity','1');
//activar[5] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4000);
contadorsiño++;
//preguntaAle2(true);
}else
if(((respuestiña!="drinking")||(respuestiña!="to_drink"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline');preguntaAle2(false); },8500);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
$('#formulario').css('display','none');
document.getElementById('parrafiño2').innerHTML="They like <b>to drink </b>cocktails."; 
$('#reproducir00').css('opacity','1');
//activar[5] = 1; 
suplente[5] = 1;
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[6]==1){ 
respuestiña=document.getElementById("input1").value;
respuestiña=respuestiña.toLowerCase();
respuestiña=respuestiña.replace(/\s/g,"_");	
if(((respuestiña=="dancing")||(respuestiña=="to_dance"))&&(contadorsiño==0)){

if(respuestiña=="dancing"){ 
activar[6] = 1;
}else
if(respuestiña=="to_dance"){ 
suplente[6] = 1;
}

tucha++;
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){
$('#continuar').css('display','none');
$('#continuar1').css('display','inline'); 
preguntaAle2(true);
$('#reproducir00').css('opacity','1');
//activar[6] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4000);
contadorsiño++;
//preguntaAle2(true);
}else
if(((respuestiña!="dancing")||(respuestiña!="to_dance"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); preguntaAle2(false);},8500);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
$('#formulario').css('display','none');
document.getElementById('parrafiño2').innerHTML="They love <b>to dance </b>salsa."; 
$('#reproducir00').css('opacity','1');
//activar[6] = 1; 
suplente[6] = 1;
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[7]==1){ 	

var aux =0;
var aux1 =0;	
cont++;
var first_p =$("#con span").index($("#first"));
if(first_p==1){
document.getElementById("first").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux++;
}
else{
document.getElementById("first").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux1++;
}
//---------------------
first_p =$("#con span").index($("#second"));
if(first_p==3){
document.getElementById("second").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux++;
}
else{
document.getElementById("second").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux1++;
}
//----------------
first_p =$("#con span").index($("#third"));
if(first_p==4){
document.getElementById("third").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux++;
}
else{
document.getElementById("third").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux1++;
}
//----------------
var first_p =$("#con span").index($("#zero"));
if(first_p==5){
document.getElementById("zero").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux++;
}
else{
document.getElementById("zero").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux1++;
}
//---------------------
first_p =$("#con span").index($("#fourth"));
if(first_p==2){
document.getElementById("fourth").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux++;
}
else{
document.getElementById("fourth").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux1++;
}
//----------------
first_p =$("#con span").index($("#fifth"));
if(first_p==0){
document.getElementById("fifth").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux++;
}
else{
document.getElementById("fifth").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux1++;
}
//----------------
if (aux==6) {
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
tucha++;
$("#myul").css('opacity','0.6');
$("#con").css('opacity','0.6');
$('.emo').css('pointer-events','none');
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){
$('#continuar').css('display','none');
$('#continuar1').css('display','inline');
preguntaAle2(true); 
$('#reproducir00').css('opacity','1');
activar[7] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4000);
contadorsiño++;
//preguntaAle2(true);
}else
if ((aux1<=6) &&(tt<2)){
document.getElementById('trompeta').play();
tucha++;	
$("#myul").css('opacity','0.6');
$("#con").css('opacity','0.6');
$('.emo').css('pointer-events','none');
contadorsiño++;
$('#continuar').css('opacity','0.4');
$('#continuar').css('pointer-events','none'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline');preguntaAle2(false); },8000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
$('#formulario').css('display','none');
$('#titulito1').css('visibility','visible');
$('#reproducir00').css('opacity','1');
activar[7] = 1; 
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}
//-------------------------------------------------------------------------------------------------------------------------------------


if (ejwriting[8]==1){ 	

var aux1=0;
var aux11=0;		
cont1++;

//---------------------
var first_p1 =$("#con1 span").index($("#zero1"));
if(first_p1==5){
document.getElementById("zero1").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux1++;
}
else{
document.getElementById("zero1").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux11++;
}
//---------------------
var first_p1 =$("#con1 span").index($("#first1"));	
if(first_p1==1){
document.getElementById("first1").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux1++;
}
else{
document.getElementById("first1").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux11++;
}
first_p1 =$("#con1 span").index($("#second1"));
if(first_p1==0){
document.getElementById("second1").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux1++;
}
else{
document.getElementById("second1").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux11++;
}
		//----------------
first_p1 =$("#con1 span").index($("#third1"));
if(first_p1==4){
document.getElementById("third1").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux1++;
}
else{
document.getElementById("third1").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux11++;
}
//----------------
first_p1 =$("#con1 span").index($("#fourth1"));
if(first_p1==3){
document.getElementById("fourth1").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux1++;
}
else{
document.getElementById("fourth1").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux11++;
}
//----------------
first_p1 =$("#con1 span").index($("#fifth1"));
if(first_p1==2){
document.getElementById("fifth1").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux1++;
}
else{
document.getElementById("fifth1").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux11++;
}

//----------------
if (aux1==6) {
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
tucha++;
$("#myul1").css('opacity','0.6');
$("#con1").css('opacity','0.6');
$('.emo1').css('pointer-events','none');
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){
$('#continuar').css('display','none');
$('#continuar1').css('display','inline');
preguntaAle2(true); 
$('#reproducir00').css('opacity','1');
activar[8] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4000);
contadorsiño++;
//preguntaAle2(true);
}else
if ((aux11<=6) &&(tt1<2)){
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
tucha++;
$("#myul1").css('opacity','0.6');
$("#con1").css('opacity','0.6');
$('.emo1').css('pointer-events','none');
contadorsiño++;
$('#continuar').css('opacity','0.4');
$('#continuar').css('pointer-events','none'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline');preguntaAle2(false); },8000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
$('#formulario').css('display','none');
$('#titulito2').css('visibility','visible');
$('#reproducir00').css('opacity','1');
activar[8] = 1; 
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[9]==1){ 	

var aux2 =0;
var aux22 =0;	
cont2++;
var first_p1 =$("#con2 span").index($("#first2"));	
if(first_p1==3){
document.getElementById("first2").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux2++;
}
else{
document.getElementById("first2").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux22++;
}
first_p1 =$("#con2 span").index($("#second2"));
if(first_p1==1){
document.getElementById("second2").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux2++;
}
else{
document.getElementById("second2").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux22++;
}
//----------------
first_p1 =$("#con2 span").index($("#third2"));
if(first_p1==5){
document.getElementById("third2").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux2++;
}
else{
document.getElementById("third2").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux22++;
}
//----------------
first_p1 =$("#con2 span").index($("#fourth2"));
if(first_p1==0){
document.getElementById("fourth2").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux2++;
}
else{
document.getElementById("fourth2").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux22++;
}
//----------------
first_p1 =$("#con2 span").index($("#fifth2"));
if(first_p1==6){
document.getElementById("fifth2").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux2++;
}
else{
document.getElementById("fifth2").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux22++;
}
//----------------
first_p1 =$("#con2 span").index($("#six2"));
if(first_p1==4){
document.getElementById("six2").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux2++;
}
else{
document.getElementById("six2").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux22++;
}
//----------------
first_p1 =$("#con2 span").index($("#seven2"));
if(first_p1==7){
document.getElementById("seven2").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux2++;
}
else{
document.getElementById("seven2").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux22++;
}
//----------------
first_p1 =$("#con2 span").index($("#eight2"));
if(first_p1==2){
document.getElementById("eight2").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux2++;
}
else{
document.getElementById("eight2").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";		
aux22++;
}
//----------------
if (aux2==8) {
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
tucha++;
$("#myul2").css('opacity','0.6');
$("#con2").css('opacity','0.6');
$('.emo2').css('pointer-events','none');
$('#continuar').css('opacity','0.4');
$('#continuar').css('pointer-events','none'); 
setTimeout(function(){
$('#continuar').css('display','none');
$('#continuar1').css('display','inline');
preguntaAle2(true); 
$('#reproducir00').css('opacity','1');
activar[9] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4000);
contadorsiño++;
//preguntaAle2(true);
}else
if ((aux22<=8) &&(tt2<2)){
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
tucha++;
$("#myul2").css('opacity','0.6');
$("#con2").css('opacity','0.6');
$('.emo2').css('pointer-events','none');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline');preguntaAle2(false); },7500);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
$('#formulario').css('display','none');
$('#titulito3').css('visibility','visible');
$('#reproducir00').css('opacity','1');
activar[9] = 1; 
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------
if (ejwriting[10]==1){ 	

var aux3 =0;
var aux33 =0;	
cont3++;
var first_p1 =$("#con3 span").index($("#first3"));
if(first_p1==1){
document.getElementById("first3").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux3++;
}
else{
document.getElementById("first3").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux33++;
}
first_p1 =$("#con3 span").index($("#second3"));
if(first_p1==4){
document.getElementById("second3").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux3++;
}
else{
document.getElementById("second3").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux33++;
}
//----------------
first_p1 =$("#con3 span").index($("#third3"));
if(first_p1==2){
document.getElementById("third3").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux3++;
}
else{
document.getElementById("third3").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux33++;
}
//----------------
first_p1 =$("#con3 span").index($("#fourth3"));
if(first_p1==5){
document.getElementById("fourth3").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux3++;
}
else{
document.getElementById("fourth3").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux33++;
}
//---------------------
var first_p1 =$("#con3 span").index($("#zero3"));
if(first_p1==6){
document.getElementById("zero3").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux3++;
}
else{
document.getElementById("zero3").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux33++;
}

//----------------
first_p1 =$("#con3 span").index($("#fifth3"));
if(first_p1==0){
document.getElementById("fifth3").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux3++;
}
else{
document.getElementById("fifth3").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux33++;
}
//----------------
first_p1 =$("#con3 span").index($("#six3"));
if(first_p1==3){
document.getElementById("six3").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux3++;
}
else{
document.getElementById("six3").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux33++;
}
//----------------
if (aux3==7) {
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
tucha++;
$("#myul3").css('opacity','0.6');
$("#con3").css('opacity','0.6');
$('.emo3').css('pointer-events','none');
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){
$('#continuar').css('display','none');
$('#continuar1').css('display','inline'); 
preguntaAle2(true);
$('#reproducir00').css('opacity','1');
activar[10] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4000);
contadorsiño++;
//preguntaAle2(true);
}else
if ((aux33<=7) &&(tt3<2)){
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
tucha++;
$("#myul3").css('opacity','0.6');
$("#con3").css('opacity','0.6');
$('.emo3').css('pointer-events','none');
contadorsiño++;
$('#continuar').css('opacity','0.4');
$('#continuar').css('pointer-events','none'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); preguntaAle2(false);},8500);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
$('#formulario').css('display','none');
$('#titulito4').css('visibility','visible');
$('#reproducir00').css('opacity','1');
activar[10] = 1; 
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------
if (ejwriting[11]==1){ 	

var aux4 =0;
var aux44 =0;	
cont4++;
var first_p1 =$("#con4 span").index($("#first4"));
if(first_p1==0){
document.getElementById("first4").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux4++;
}
else{
document.getElementById("first4").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux44++;
}
first_p1 =$("#con4 span").index($("#second4"));
if(first_p1==2){
document.getElementById("second4").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux4++;
}
else{
document.getElementById("second4").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux44++;
}
//----------------
first_p1 =$("#con4 span").index($("#third4"));
if(first_p1==3){
document.getElementById("third4").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux4++;
}
else{
document.getElementById("third4").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux44++;
}
//----------------
first_p1 =$("#con4 span").index($("#fourth4"));
if(first_p1==1){
document.getElementById("fourth4").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux4++;
}
else{
document.getElementById("fourth4").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux44++;
}
//---------------------
var first_p1 =$("#con4 span").index($("#zero4"));
if(first_p1==7){
document.getElementById("zero4").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux4++;
}
else{
document.getElementById("zero4").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux44++;
}
//---------------------
first_p1 =$("#con4 span").index($("#fifth4"));
if(first_p1==6){
document.getElementById("fifth4").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux4++;
}
else{
document.getElementById("fifth4").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux44++;
}
//----------------
first_p1 =$("#con4 span").index($("#six4"));
if(first_p1==4){
document.getElementById("six4").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux4++;
}
else{
document.getElementById("six4").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux44++;
}
//----------------
first_p1 =$("#con4 span").index($("#seven4"));
if(first_p1==5){
document.getElementById("seven4").style.background="url('../../../../imagenes/avisos/well.png')no-repeat right";
aux4++;
}
else{
document.getElementById("seven4").style.background="url('../../../../imagenes/avisos/wrong.png')no-repeat right";
aux44++;
}
//----------------
if (aux4==8) {
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
tucha++;
$("#myul4").css('opacity','0.6');
$("#con4").css('opacity','0.6');
$('.emo4').css('pointer-events','none');
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){
$('#continuar').css('display','none');
$('#continuar1').css('display','inline'); 
preguntaAle2(true);
$('#reproducir00').css('opacity','1');
activar[11] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4000);
contadorsiño++;
//preguntaAle2(true);
}else
if ((aux44<=8) &&(tt4<2)){
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
tucha++;
$("#myul4").css('opacity','0.6');
$("#con4").css('opacity','0.6');
$('.emo4').css('pointer-events','none');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline');preguntaAle2(false); },9000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
$('#formulario').css('display','none');
$('#titulito5').css('visibility','visible');
$('#reproducir00').css('opacity','1');
activar[11] = 1; 
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[12]==1){ 	
if(((respuestiña=="Sofia_likes_to_dance_tango")||(respuestiña=="SOFIA_LIKES_TO_DANCE_TANGO")||(respuestiña=="Sofia_likes_dancing_tango")||(respuestiña=="SOFIA_LIKES_DANCING_TANGO")||(respuestiña=="Sofía_likes_to_dance_tango")||(respuestiña=="SOFÍA_LIKES_TO_DANCE_TANGO")||(respuestiña=="Sofía_likes_dancing_tango")||(respuestiña=="SOFÍA_LIKES_DANCING_TANGO"))&&(contadorsiño==0)){

if((respuestiña=="Sofia_likes_to_dance_tango")||(respuestiña=="SOFIA_LIKES_TO_DANCE_TANGO")||(respuestiña=="Sofía_likes_to_dance_tango")||(respuestiña=="SOFÍA_LIKES_TO_DANCE_TANGO")){ 
activar[12] = 1;
}else
if((respuestiña=="Sofia_likes_dancing_tango")||(respuestiña=="SOFIA_LIKES_DANCING_TANGO")||(respuestiña=="Sofía_likes_dancing_tango")||(respuestiña=="SOFÍA_LIKES_DANCING_TANGO")){ 
suplente[12] = 1;
}

tucha++;
$('#input2').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4');
$('#continuar').css('pointer-events','none'); 
setTimeout(function(){
$('#continuar').css('display','none');
$('#continuar1').css('display','inline'); 
preguntaAle2(true);
$('#reproducir00').css('opacity','1');
//activar[12] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4000);
contadorsiño++;
//preguntaAle2(true);
}else
if(((respuestiña!="Sofia_likes_to_dance_tango")||(respuestiña!="SOFIA_LIKES_TO_DANCE_TANGO")||(respuestiña!="Sofia_likes_dancing_tango")||(respuestiña!="SOFIA_LIKES_DANCING_TANGO")||(respuestiña!="Sofía_likes_to_dance_tango")||(respuestiña!="SOFÍA_LIKES_TO_DANCE_TANGO")||(respuestiña!="Sofía_likes_dancing_tango")||(respuestiña!="SOFÍA_LIKES_DANCING_TANGO"))&&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #fc484c');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline');preguntaAle2(false); },8000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
$('#formulario').css('display','none');
document.getElementById('parrafiño2').innerHTML="Sofia <b>likes to</b> dance tango."; 
$('#reproducir00').css('opacity','1');
activar[12] = 1; 
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input2').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[13]==1){ 	
if(((respuestiña=="Peter_loves_eating_sandwiches")||(respuestiña=="PETER_LOVES_EATING_SANDWICHES")||(respuestiña=="Peter_loves_to_eat_sandwiches")||(respuestiña=="PETER_LOVES_TO_EAT_SANDWICHES"))&&(contadorsiño==0)){

if((respuestiña=="Peter_loves_eating_sandwiches")||(respuestiña=="PETER_LOVES_EATING_SANDWICHES")){ 
activar[13] = 1;
}else
if((respuestiña=="Peter_loves_to_eat_sandwiches")||(respuestiña=="PETER_LOVES_TO_EAT_SANDWICHES")){ 
suplente[13] = 1;
}

tucha++;
$('#input2').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){
$('#continuar').css('display','none');
$('#continuar1').css('display','inline'); 
preguntaAle2(true);
$('#reproducir00').css('opacity','1');
//activar[13] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4000);
contadorsiño++;
//preguntaAle2(true);
}else
if(((respuestiña!="Peter_loves_eating_sandwiches")||(respuestiña!="PETER_LOVES_EATING_SANDWICHES")||(respuestiña!="Peter_loves_to_eat_sandwiches")||(respuestiña!="PETER_LOVES_TO_EAT_SANDWICHES"))&&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #fc484c');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline');preguntaAle2(false);},8500);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
$('#formulario').css('display','none');
document.getElementById('parrafiño2').innerHTML="Peter <b>loves to eat</b> sandwiches."; 
$('#reproducir00').css('opacity','1');
//activar[13] = 1; 
suplente[13] = 1;
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input2').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[14]==1){ 	
if(((respuestiña=="Ana_likes_listening_to_pop_music")||(respuestiña=="ANA_LIKES_LISTENING_TO_POP_MUSIC")||(respuestiña=="Ana_likes_to_listen_to_pop_music")||(respuestiña=="ANA_LIKES_TO_LISTEN_TO_POP_MUSIC"))&&(contadorsiño==0)){

if((respuestiña=="Ana_likes_listening_to_pop_music")||(respuestiña=="ANA_LIKES_LISTENING_TO_POP_MUSIC")){ 
activar[14] = 1;
}else
if((respuestiña=="Ana_likes_to_listen_to_pop_music")||(respuestiña=="ANA_LIKES_TO_LISTEN_TO_POP_MUSIC")){ 
suplente[14] = 1;
}

tucha++;
$('#input2').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){
$('#continuar').css('display','none');
$('#continuar1').css('display','inline'); 
preguntaAle2(true);
$('#reproducir00').css('opacity','1');
//activar[14] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4000);
contadorsiño++;
//preguntaAle2(true);
}else
if(((respuestiña!="Ana_likes_listening_to_pop_music")||(respuestiña!="ANA_LIKES_LISTENING_TO_POP_MUSIC")||(respuestiña!="Ana_likes_to_listen_to_pop_music")||(respuestiña!="ANA_LIKES_TO_LISTEN_TO_POP_MUSIC"))&&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #fc484c');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); preguntaAle2(false);},9000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
$('#formulario').css('display','none');
document.getElementById('parrafiño2').innerHTML="Ana <b>likes to listen</b> to pop music."; 
$('#reproducir00').css('opacity','1');
//activar[14] = 1; 
suplente[14] = 1;
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input2').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[15]==1){ 	
if(((respuestiña=="Jhon_likes_drinking_tequila")||(respuestiña=="JHON_LIKES_DRINKING_TEQUILA")||(respuestiña=="Jhon_likes_to_drink_tequila")||(respuestiña=="JHON_LIKES_TO_DRINK_TEQUILA"))&&(contadorsiño==0)){

if((respuestiña=="Jhon_likes_drinking_tequila")||(respuestiña=="JHON_LIKES_DRINKING_TEQUILA")){ 
activar[15] = 1;
}else
if((respuestiña=="Jhon_likes_to_drink_tequila")||(respuestiña=="JHON_LIKES_TO_DRINK_TEQUILA")){ 
suplente[15] = 1;
}

tucha++;
$('#input2').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4');
$('#continuar').css('pointer-events','none'); 
setTimeout(function(){
$('#continuar').css('display','none');
$('#continuar1').css('display','inline');
preguntaAle2(true); 
$('#reproducir00').css('opacity','1');
//activar[15] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4000);
contadorsiño++;
//preguntaAle2(true);
}else
if(((respuestiña!="Jhon_likes_drinking_tequila")||(respuestiña!="JHON_LIKES_DRINKING_TEQUILA")||(respuestiña!="Jhon_likes_to_drink_tequila")||(respuestiña!="JHON_LIKES_TO_DRINK_TEQUILA"))&&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #fc484c');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4');
$('#continuar').css('pointer-events','none'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline');preguntaAle2(false); },8500);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
$('#formulario').css('display','none');
document.getElementById('parrafiño2').innerHTML="Jhon <b>likes to drink</b> tequila."; 
$('#reproducir00').css('opacity','1');
//activar[15] = 1; 
suplente[15] = 1;
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input2').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[16]==1){ 	
if(((respuestiña=="Karen_and_Kancy_enjoy_going_to_the_gym")||(respuestiña=="KAREN_AND_NANCY_ENJOY_GOING_TO_THE_GYM")||(respuestiña=="Karen_and_Kancy_enjoy_to_go_to_the_gym")||(respuestiña=="KAREN_AND_NANCY_ENJOY_TO_GO_TO_THE_GYM")||(respuestiña=="Karen_and_Nancy_like_going_to_the_gym")||(respuestiña=="KAREN_AND_NANCY_LIKE_GOING_TO_THE_GYM")||(respuestiña=="Karen_and_Nancy_like_to_go_to_the_gym")||(respuestiña=="KAREN_AND_NANCY_LIKE_TO_GO_TO_THE_GYM"))&&(contadorsiño==0)){

if((respuestiña=="Karen_and_Kancy_enjoy_going_to_the_gym")||(respuestiña=="KAREN_AND_NANCY_ENJOY_GOING_TO_THE_GYM")){ 
activar[16] = 1; 
}
if((respuestiña=="Karen_and_Kancy_enjoy_to_go_to_the_gym")||(respuestiña=="KAREN_AND_NANCY_ENJOY_TO_GO_TO_THE_GYM")){ 
bart1 = 1;
}
if((respuestiña=="Karen_and_Nancy_like_going_to_the_gym")||(respuestiña=="KAREN_AND_NANCY_LIKE_GOING_TO_THE_GYM")){ 
suplente[16] = 1;
}
if((respuestiña=="Karen_and_Nancy_like_to_go_to_the_gym")||(respuestiña=="KAREN_AND_NANCY_LIKE_TO_GO_TO_THE_GYM")){ 
bart2= 1;
}

tucha++;
$('#input2').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){
$('#continuar').css('display','none');
$('#continuar1').css('display','inline'); 
preguntaAle2(true);
$('#reproducir00').css('opacity','1');
//activar[16] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4000);
contadorsiño++;
//preguntaAle2(true);
}else
if(((respuestiña!="Karen_and_Kancy_enjoy_going_to_the_gym")||(respuestiña!="KAREN_AND_NANCY_ENJOY_GOING_TO_THE_GYM")||(respuestiña!="Karen_and_Kancy_enjoy_to_go_to_the_gym")||(respuestiña!="KAREN_AND_NANCY_ENJOY_TO_GO_TO_THE_GYM")||(respuestiña!="Karen_and_Nancy_like_going_to_the_gym")||(respuestiña!="KAREN_AND_NANCY_LIKE_GOING_TO_THE_GYM")||(respuestiña!="Karen_and_Nancy_like_to_go_to_the_gym")||(respuestiña!="KAREN_AND_NANCY_LIKE_TO_GO_TO_THE_GYM"))&&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #fc484c');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); preguntaAle2(false);},9500);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
$('#formulario').css('display','none');
document.getElementById('parrafiño2').innerHTML="Karen and Nancy <b>enjoy to go</b> to the gym."; 
$('#reproducir00').css('opacity','1');
//activar[16] = 1; 
bart2 = 1;
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input2').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[17]==1){ 	
if(((respuestiña=="Penny_hates_fast_food")||(respuestiña=="PENNY_HATES_FAST_FOOD"))&&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4');
$('#continuar').css('pointer-events','none'); 
setTimeout(function(){
$('#continuar').css('display','none');
$('#continuar1').css('display','inline'); 
preguntaAle2(true);
$('#reproducir00').css('opacity','1');
activar[17] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4000);
contadorsiño++;
//preguntaAle2(true);
}else
if(((respuestiña!="Penny_hates_fast_food")||(respuestiña!="PENNY_HATES_FAST_FOOD"))&&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #fc484c');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); preguntaAle2(false);},8500);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
$('#formulario').css('display','none');
document.getElementById('parrafiño2').innerHTML="Penny <b>hates</b> fast food."; 
$('#reproducir00').css('opacity','1');
activar[17] = 1; 
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input2').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[18]==1){ 	
if(((respuestiña=="Alexa_does_not_like_doing_exercise")||(respuestiña=="Alexa_doesn't_like_doing_exercise")||(respuestiña=="ALEXA_DOES_NOT_LIKE_DOING_EXERCISE")||(respuestiña=="ALEXA_DOESN'T_LIKE_DOING_EXERCISE")||                                              (respuestiña=="Alexa_does_not_like_to_do_exercise")||(respuestiña=="Alexa_doesn't_like_to_do_exercise")||(respuestiña=="ALEXA_DOES_NOT_LIKE_TO_DO_EXERCISE")||(respuestiña=="ALEXA_DOESN'T_LIKE_TO_DO_EXERCISE"))&&(contadorsiño==0)){

if((respuestiña=="Alexa_does_not_like_doing_exercise")||(respuestiña=="Alexa_doesn't_like_doing_exercise")||(respuestiña=="ALEXA_DOES_NOT_LIKE_DOING_EXERCISE")||(respuestiña=="ALEXA_DOESN'T_LIKE_DOING_EXERCISE")){ 
activar[18] = 1;
}else
if((respuestiña=="Alexa_does_not_like_to_do_exercise")||(respuestiña=="Alexa_doesn't_like_to_do_exercise")||(respuestiña=="ALEXA_DOES_NOT_LIKE_TO_DO_EXERCISE")||(respuestiña=="ALEXA_DOESN'T_LIKE_TO_DO_EXERCISE")){ 
suplente[18] = 1;
}

tucha++;
$('#input2').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4');
$('#continuar').css('pointer-events','none'); 
setTimeout(function(){
$('#continuar').css('display','none');
$('#continuar1').css('display','inline');
preguntaAle2(true); 
$('#reproducir00').css('opacity','1');
//activar[18] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4000);
contadorsiño++;
//preguntaAle2(true);
}else
if(((respuestiña!="Alexa_does_not_like_doing_exercise")||(respuestiña!="Alexa_doesn't_like_doing_exercise")||(respuestiña=="ALEXA_DOES_NOT_LIKE_DOING_EXERCISE")||(respuestiña=="ALEXA_DOESN'T_LIKE_DOING_EXERCISE")||          (respuestiña!="Alexa_does_not_like_to_do_exercise")||(respuestiña!="Alexa_doesn't_like_to_do_exercise")||(respuestiña!="ALEXA_DOES_NOT_LIKE_TO_DO_EXERCISE")||(respuestiña!="ALEXA_DOESN'T_LIKE_TO_DO_EXERCISE"))&&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #fc484c');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4');
$('#continuar').css('pointer-events','none'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline');preguntaAle2(false); },9500);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
$('#formulario').css('display','none');
document.getElementById('parrafiño2').innerHTML="Alexa <b>doesn't like</b> to do exercise."; 
$('#reproducir00').css('opacity','1');
//activar[18] = 1; 
suplente[18] = 1;
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input2').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[19]==1){ 	
if(((respuestiña=="What_kind_of_food_do_you_like")||(respuestiña=="WHAT_KIND_OF_FOOD_DO_YOU_LIKE")||(respuestiña=="What_food_do_you_like_to_eat")||(respuestiña=="WHAT_FOOD_DO_YOU_LIKE_TO_EAT"))&&(contadorsiño==0)){

if((respuestiña=="What_food_do_you_like_to_eat")||(respuestiña=="WHAT_FOOD_DO_YOU_LIKE_TO_EAT")){ 
suplente[19] = 1;
}else
if((respuestiña=="What_kind_of_food_do_you_like")||(respuestiña=="WHAT_KIND_OF_FOOD_DO_YOU_LIKE")){ 
activar[19] = 1;
}

tucha++;
$('#input2').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){
$('#continuar').css('display','none');
$('#continuar1').css('display','inline'); 
preguntaAle2(true);
$('#reproducir00').css('opacity','1');
//activar[19] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4000);
contadorsiño++;
//preguntaAle2(true);
}else
if(((respuestiña!="What_kind_of_food_do_you_like")||(respuestiña!="WHAT_KIND_OF_FOOD_DO_YOU_LIKE")||(respuestiña!="What_food_do_you_like_to_eat")||(respuestiña!="WHAT_FOOD_DO_YOU_LIKE_TO_EAT"))&&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #fc484c');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline');preguntaAle2(false); },8500);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño1').innerHTML="<b>What food do you like to eat?</b>"; 
$('#reproducir00').css('opacity','1');
//activar[19] = 1; 
suplente[19] = 1;
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input2').css('display','none');
},6000);
}
}
//-------------------------------------------------------------------------------------------------------------------------------------
if (ejwriting[20]==1){ 	
if(((respuestiña=="What_kind_of_drink_does_she_like")||(respuestiña=="WHAT_KIND_OF_DRINK_DOES_SHE_LIKE")||(respuestiña=="What_drink_does_she_like")||(respuestiña=="WHAT_DRINK_DOES_SHE_LIKE"))&&(contadorsiño==0)){
if((respuestiña=="What_drink_does_she_like")||(respuestiña=="WHAT_DRINK_DOES_SHE_LIKE")){ 
suplente[20] = 1;
}else
if((respuestiña=="What_kind_of_drink_does_she_like")||(respuestiña=="WHAT_KIND_OF_DRINK_DOES_SHE_LIKE")){ 
activar[20] = 1;
}

tucha++;
$('#input2').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){
$('#continuar').css('display','none');
$('#continuar1').css('display','inline');
preguntaAle2(true); 
$('#reproducir00').css('opacity','1');
//activar[20] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4000);
contadorsiño++;
//preguntaAle2(true);
}else
if(((respuestiña!="What_kind_of_drink_does_she_like")||(respuestiña!="WHAT_KIND_OF_DRINK_DOES_SHE_LIKE")||(respuestiña!="What_drink_does_she_like")||(respuestiña!="WHAT_DRINK_DOES_SHE_LIKE"))&&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #fc484c');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); preguntaAle2(false);},8500);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño1').innerHTML="<b>What drink does she like?</b>"; 
$('#reproducir00').css('opacity','1');
//activar[20] = 1; 
suplente[20] = 1;
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input2').css('display','none');
},6000);
}
}
//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[21]==1){ 	
if(((respuestiña=="When_does_he_usually_go_to_the_movies")||(respuestiña=="WHEN_DOES_HE_USUALLY_GO_TO_THE_MOVIES"))&&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4');
$('#continuar').css('pointer-events','none'); 
setTimeout(function(){
$('#continuar').css('display','none');
$('#continuar1').css('display','inline');
preguntaAle2(true); 
$('#reproducir00').css('opacity','1');
activar[21] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4000);
contadorsiño++;
//preguntaAle2(true);
}else
if(((respuestiña!="When_does_he_usually_go_to_the_movies")||(respuestiña!="WHEN_DOES_HE_USUALLY_GO_TO_THE_MOVIES"))&&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #fc484c');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4');
$('#continuar').css('pointer-events','none'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline');preguntaAle2(false); },9000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño1').innerHTML="<b>When does he usually go to the movies?</b>"; 
$('#reproducir00').css('opacity','1');
activar[21] = 1; 
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input2').css('display','none');
},6000);
}
}
//-------------------------------------------------------------------------------------------------------------------------------------
if (ejwriting[22]==1){ 	
if(((respuestiña=="Why_does_not_he_like_horror_movies")||(respuestiña=="Why_doesn't_he_like_horror_movies")||(respuestiña=="WHY_DOES_NOT_HE_LIKE_HORROR_MOVIES")||(respuestiña=="WHY_DOESN'T_HE_LIKE_HORROR_MOVIES"))&&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){
$('#continuar').css('display','none');
$('#continuar1').css('display','inline');
preguntaAle2(true); 
$('#reproducir00').css('opacity','1');
activar[22] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4000);
contadorsiño++;
//preguntaAle2(true);
}else
if(((respuestiña!="Why_does_not_he_like_horror_movies")||(respuestiña=="Why_doesn't_he_like_horror_movies")||(respuestiña!="WHY_DOES_NOT_HE_LIKE_HORROR_MOVIES")||(respuestiña!="WHY_DOESN'T_HE_LIKE_HORROR_MOVIES"))&&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #fc484c');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); preguntaAle2(false);},9500);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño1').innerHTML="<b>Why doesn't he like horror movies?</b>"; 
$('#reproducir00').css('opacity','1');
activar[22] = 1; 
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input2').css('display','none');
},6000);
}
}
//-------------------------------------------------------------------------------------------------------------------------------------
if (ejwriting[23]==1){ 	
if(((respuestiña=="What_kind_of_music_do_they_enjoy_dancing")||(respuestiña=="WHAT_KIND_OF_MUSIC_DO_THEY_ENJOY_DANCING"))&&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){
$('#continuar').css('display','none');
$('#continuar1').css('display','inline'); 
preguntaAle2(true);
$('#reproducir00').css('opacity','1');
activar[23] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4000);
contadorsiño++;
//preguntaAle2(true);
}else
if(((respuestiña!="What_kind_of_music_do_they_enjoy_dancing")||(respuestiña!="WHAT_KIND_OF_MUSIC_DO_THEY_ENJOY_DANCING"))&&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #fc484c');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); preguntaAle2(false);},9000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño1').innerHTML="<b>What kind of music do they enjoy dancing?</b>"; 
$('#reproducir00').css('opacity','1');
activar[23] = 1; 
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input2').css('display','none');
},6000);
}
}
//-------------------------------------------------------------------------------------------------------------------------------------














































//-------------------------------------------------------------------------------------------------------------------------------------
/*
if (ejwriting[8]==1){ 	
if(((respuestiña=="Steve_likes_to_go_to_the_gym_every_day.")||(respuestiña=="Steve_likes_to_go_to_the_gym_every_day")||(respuestiña=="STEVE_LIKES_TO_GO_TO_THE_GYM_EVERY_DAY.")||(respuestiña=="STEVE_LIKES_TO_GO_TO_THE_GYM_EVERY_DAY"))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
contadorsiño++;
}else
if(((respuestiña!="Steve_likes_to_go_to_the_gym_every_day.")||(respuestiña!="Steve_likes_to_go_to_the_gym_every_day")||(respuestiña!="STEVE_LIKES_TO_GO_TO_THE_GYM_EVERY_DAY.")||(respuestiña!="STEVE_LIKES_TO_GO_TO_THE_GYM_EVERY_DAY"))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>Steve likes to go to the gym every day.</b>"; 
document.getElementById('reproducir00').click(); 
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[9]==1){ 	
if(((respuestiña=="Carlos_and_Tania_hate_the_spinach_soup")||(respuestiña=="Carlos_and_Tania_hate_the_spinach_soup.")||(respuestiña=="CARLOS_AND_TANIA_HATE_THE_SPINACH_SOUP")||(respuestiña=="CARLOS_AND_TANIA_HATE_THE_SPINACH_SOUP."))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
contadorsiño++;
}else
if(((respuestiña!="Carlos_and_Tania_hate_the_spinach_soup")||(respuestiña!="Carlos_and_Tania_hate_the_spinach_soup.")||(respuestiña!="CARLOS_AND_TANIA_HATE_THE_SPINACH_SOUP")||(respuestiña!="CARLOS_AND_TANIA_HATE_THE_SPINACH_SOUP."))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>Carlos and Tania hate the spinach soup.</b>";  
document.getElementById('reproducir00').click(); 
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[10]==1){ 	
if(((respuestiña=="My_brother_likes_watching_science_fiction_movies.")||(respuestiña=="My_brother_likes_watching_science_fiction_movies")||(respuestiña=="MY_BROTHER_LIKES_WATCHING_SCIENCE_FICTION_MOVIES.")||(respuestiña=="MY_BROTHER_LIKES_WATCHING_SCIENCE_FICTION_MOVIES"))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
contadorsiño++;
}else
if(((respuestiña!="My_brother_likes_watching_science_fiction_movies.")||(respuestiña!="My_brother_likes_watching_science_fiction_movies")||(respuestiña!="MY_BROTHER_LIKES_WATCHING_SCIENCE_FICTION_MOVIES.")||(respuestiña!="MY_BROTHER_LIKES_WATCHING_SCIENCE_FICTION_MOVIES"))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>My brother likes watching science fiction movies.</b>";   
document.getElementById('reproducir00').click(); 
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[11]==1){ 	
if(((respuestiña=="Emily_and_Steve_like_to_eat_healthy_food.")||(respuestiña=="Emily_and_Steve_like_to_eat_healthy_food")||(respuestiña=="EMILY_AND_STEVE_LIKE_TO_EAT_HEALTHY_FOOD.")||(respuestiña=="EMILY_AND_STEVE_LIKE_TO_EAT_HEALTHY_FOOD"))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
contadorsiño++;
}else
if(((respuestiña!="Emily_and_Steve_like_to_eat_healthy_food.")||(respuestiña!="Emily_and_Steve_like_to_eat_healthy_food")||(respuestiña!="EMILY_AND_STEVE_LIKE_TO_EAT_HEALTHY_FOOD.")||(respuestiña!="EMILY_AND_STEVE_LIKE_TO_EAT_HEALTHY_FOOD"))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>Emily and Steve like to eat healthy food.</b>";  
document.getElementById('reproducir00').click(); 
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[12]==1){ 	
if(((respuestiña=="Where_was_she_last_night?")||(respuestiña=="WHERE_WAS_SHE_LAST_NIGHT?"))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
$('#reproducir00').css('opacity','1');
activar[12] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4500);
contadorsiño++;
}else
if(((respuestiña!="Where_was_she_last_night?")||(respuestiña!="WHERE_WAS_SHE_LAST_NIGHT?"))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño1').innerHTML='<strong id="res">Where was she last night?</b>'; 
$('#reproducir00').css('opacity','1');
activar[12] = 1; 
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[13]==1){ 	
if(((respuestiña=="No_she_didn't._She_drank_a_beer")||(respuestiña=="No_she_didnt._She_drank_a_beer")||(respuestiña=="NO_SHE_DIDN'T._SHE_DRANK_A_BEER")||(respuestiña=="NO_SHE_DIDNT._SHE_DRANK_A_BEER")||(respuestiña=="No_she_didn't._She_drank_a_beer.")||(respuestiña=="No_she_didnt._She_drank_a_beer.")||(respuestiña=="NO_SHE_DIDN'T._SHE_DRANK_A_BEER.")||(respuestiña=="NO_SHE_DIDNT._SHE_DRANK_A_BEER."))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
$('#reproducir00').css('opacity','1');
activar[13] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4500);
contadorsiño++;
}else
if(((respuestiña!="No_she_didn't._She_drank_a_beer")||(respuestiña!="No_she_didnt._She_drank_a_beer")||(respuestiña!="NO_SHE_DIDN'T._SHE_DRANK_A_BEER")||(respuestiña!="NO_SHE_DIDNT._SHE_DRANK_A_BEER")||(respuestiña!="No_she_didn't._She_drank_a_beer.")||(respuestiña!="No_she_didnt._She_drank_a_beer.")||(respuestiña!="NO_SHE_DIDN'T._SHE_DRANK_A_BEER.")||(respuestiña!="NO_SHE_DIDNT._SHE_DRANK_A_BEER."))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>No she didn't. She drank a beer.</b>"; 
$('#reproducir00').css('opacity','1');
activar[13] = 1; 
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[14]==1){ 	
if(((respuestiña=="She_watched_AVATAR_at_the_movies")||(respuestiña=="She_watched_AVATAR_at_the_movies.")||(respuestiña=="She_watched_avatar_at_the_movies")||(respuestiña=="She_watched_avatar_at_the_movies.")||(respuestiña=="SHE_WATCHED_AVATAR_AT_THE_MOVIES")||(respuestiña=="SHE_WATCHED_AVATAR_AT_THE_MOVIES."))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
$('#reproducir00').css('opacity','1');
activar[14] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4500);
contadorsiño++;
}else
if(((respuestiña!="She_watched_AVATAR_at_the_movies")||(respuestiña!="She_watched_AVATAR_at_the_movies.")||(respuestiña!="She_watched_avatar_at_the_movies")||(respuestiña!="She_watched_avatar_at_the_movies.")||(respuestiña!="SHE_WATCHED_AVATAR_AT_THE_MOVIES")||(respuestiña!="SHE_WATCHED_AVATAR_AT_THE_MOVIES."))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML='<strong id="res">She watched AVATAR at the movies.</b>'; 
$('#reproducir00').css('opacity','1');
activar[14] = 1; 
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[15]==1){ 	
if(((respuestiña=="Did_you_travel_to_Paris_on_vacation?")||(respuestiña=="Did_you_travel_to_paris_on_vacation?")||(respuestiña=="DID_YOU_TRAVEL_TO_PARIS_ON_VACATION?")||(respuestiña=="DID_YOU_TRAVEL_TO_PARIS_ON_VACATION?"))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
$('#reproducir00').css('opacity','1');
activar[15] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4500);
contadorsiño++;
}else
if(((respuestiña!="Did_you_travel_to_Paris_on_vacation?")||(respuestiña!="Did_you_travel_to_paris_on_vacation?")||(respuestiña!="DID_YOU_TRAVEL_TO_PARIS_ON_VACATION?")||(respuestiña!="DID_YOU_TRAVEL_TO_PARIS_ON_VACATION?"))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML='<strong id="res">Did you travel to Paris on vacation?</b>'; 
$('#reproducir00').css('opacity','1');
activar[15] = 1; 
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[16]==1){ 	
if(((respuestiña=="No,_he_didn't._He_ate_spaghetti")||(respuestiña=="No,_he_didnt._He_ate_spaghetti")||(respuestiña=="No,_he_didn't._He_ate_spaghetti.")||(respuestiña=="No,_he_didnt._He_ate_spaghetti.")||(respuestiña=="NO,_HE DIDN'T._HE_ATE_SPAGHETTI")||(respuestiña=="NO,_HE_DIDNT._HE_ATE_SPAGHETTI")||(respuestiña=="NO,_HE_DIDN'T._HE_ATE_SPAGHETTI.")||(respuestiña=="NO,_HE_DIDNT._HE_ATE_SPAGHETTI."))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
$('#reproducir00').css('opacity','1');
activar[16] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4500);
contadorsiño++;
}else
if(((respuestiña!="No,_he_didn't._He_ate_spaghetti")||(respuestiña!="No,_he_didnt._He_ate_spaghetti")||(respuestiña!="No,_he_didn't._He_ate_spaghetti.")||(respuestiña!="No,_he_didnt._He_ate_spaghetti.")||(respuestiña!="NO,_HE DIDN'T._HE_ATE_SPAGHETTI")||(respuestiña!="NO,_HE_DIDNT._HE_ATE_SPAGHETTI")||(respuestiña!="NO,_HE_DIDN'T._HE_ATE_SPAGHETTI.")||(respuestiña!="NO,_HE_DIDNT._HE_ATE_SPAGHETTI."))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>No, he didn't. He ate spaghetti.</b>"; 
$('#reproducir00').css('opacity','1');
activar[16] = 1; 
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[17]==1){ 	
alert(respuestiña);
if(((respuestiña=="She_didn't_go_to_dance_lessons_today")||(respuestiña=="She_didnt_go_to_dance_lessons_today")||(respuestiña=="She_didn't_go_to_dance_lessons_today.")||(respuestiña=="She_didnt_go_to_dance_lessons_today.")||(respuestiña=="SHE_DIDN'T_GO_TO DANCE_LESSONS_TODAY")||(respuestiña=="SHE_DIDNT_GO_TO DANCE_LESSONS_TODAY")||(respuestiña=="SHE_DIDN'T_GO_TO DANCE_LESSONS_TODAY.")||(respuestiña=="SHE_DIDNT_GO_TO DANCE_LESSONS_TODAY."))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
$('#reproducir00').css('opacity','1');
activar[17] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4500);
contadorsiño++;
}else
if(((respuestiña!="She_didn't_go_to_dance_lessons_today")||(respuestiña!="She_didnt_go_to_dance_lessons_today")||(respuestiña!="She_didn't_go_to_dance_lessons_today.")||(respuestiña!="She_didnt_go_to_dance_lessons_today.")||(respuestiña!="SHE_DIDN'T_GO_TO DANCE_LESSONS_TODAY")||(respuestiña!="SHE_DIDNT_GO_TO DANCE_LESSONS_TODAY")||(respuestiña!="SHE_DIDN'T_GO_TO DANCE_LESSONS_TODAY.")||(respuestiña!="SHE_DIDNT_GO_TO DANCE_LESSONS_TODAY."))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>She didn't go to dance lessons today.</b>"; 
$('#reproducir00').css('opacity','1');
activar[17] = 1; 
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[18]==1){ 	
if(((respuestiña=="What_did_you_do_yesterday?")||(respuestiña=="WHAT_DID_YOU_DO_YESTERDAY?"))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
$('#reproducir00').css('opacity','1');
activar[18] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4500);
contadorsiño++;
}else
if(((respuestiña!="What_did_you_do_yesterday?")||(respuestiña!="WHAT_DID_YOU_DO_YESTERDAY?"))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML='<strong id="res">What did you do yesterday?</b>'; 
$('#reproducir00').css('opacity','1');
activar[18] = 1; 
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[19]==1){ 	
if(((respuestiña=="She_traveled_to_Cartagena_during_her_last_vacation")||(respuestiña=="She_traveled_to_cartagena_during_her_last_vacation")||(respuestiña=="She_traveled_to_Cartagena_during_her_last_vacation.")||(respuestiña=="She_traveled_to_cartagena_during_her_last_vacation.")||(respuestiña=="SHE_TRAVELED_TO_CARTAGENA_DURING_HER_LAST_VACATION")||(respuestiña=="SHE_TRAVELED_TO_CARTAGENA_DURING_HER_LAST_VACATION."))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
$('#reproducir00').css('opacity','1');
activar[19] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4500);
contadorsiño++;
}else
if(((respuestiña!="She_traveled_to_Cartagena_during_her_last_vacation")||(respuestiña!="She_traveled_to_cartagena_during_her_last_vacation")||(respuestiña!="She_traveled_to_Cartagena_during_her_last_vacation.")||(respuestiña!="She_traveled_to_cartagena_during_her_last_vacation.")||(respuestiña!="SHE_TRAVELED_TO_CARTAGENA_DURING_HER_LAST_VACATION")||(respuestiña!="SHE_TRAVELED_TO_CARTAGENA_DURING_HER_LAST_VACATION."))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML='<strong id="res">She traveled to Cartagena during her last vacation.</b>'; 
$('#reproducir00').css('opacity','1');
activar[19] = 1; 
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[20]==1){ 	
if(((respuestiña=="Karen_and_Nancy_went_to_the_gym")||(respuestiña=="Karen_and_Nancy_went_to_the_gym.")||(respuestiña=="KAREN_AND_NANCY_WENT_TO_THE_GYM")||(respuestiña=="KAREN_AND_NANCY_WENT_TO_THE_GYM."))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
contadorsiño++;
}else
if(((respuestiña!="Karen_and_Nancy_went_to_the_gym")||(respuestiña!="Karen_and_Nancy_went_to_the_gym.")||(respuestiña!="KAREN_AND_NANCY_WENT_TO_THE_GYM")||(respuestiña!="KAREN_AND_NANCY_WENT_TO_THE_GYM."))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>Karen and Nancy went to the gym.</b>";  
document.getElementById('reproducir00').click(); 
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[21]==1){ 	
if(((respuestiña=="Where_did_you_and_your_family_go_on_last_vacation?")||(respuestiña=="WHERE_DID_YOU_AND_YOUR_FAMILY_GO_ON_LAST_VACATION?"))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
contadorsiño++;
}else
if(((respuestiña!="Where_did_you_and_your_family_go_on_last_vacation?")||(respuestiña!="WHERE_DID_YOU_AND_YOUR_FAMILY_GO_ON_LAST_VACATION?"))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>Where did you and your family go on last vacation?</b>";  
document.getElementById('reproducir00').click(); 
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[22]==1){ 	
if(((respuestiña=="Karen_and_her_friends_had_some_beers_at_a_bar_yesterday")||(respuestiña=="Karen_and_her_friends_had_some_beers_at_a_bar_yesterday.")||(respuestiña=="KAREN_AND_HER_FRIENDS_HAD_SOME_BEERS_AT_A_BAR_YESTERDAY")||(respuestiña=="KAREN_AND_HER_FRIENDS_HAD_SOME_BEERS_AT_A_BAR_YESTERDAY."))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
contadorsiño++;
}else
if(((respuestiña!="Karen_and_her_friends_had_some_beers_at_a_bar_yesterday")||(respuestiña!="Karen_and_her_friends_had_some_beers_at_a_bar_yesterday.")||(respuestiña!="KAREN_AND_HER_FRIENDS_HAD_SOME_BEERS_AT_A_BAR_YESTERDAY")||(respuestiña!="KAREN_AND_HER_FRIENDS_HAD_SOME_BEERS_AT_A_BAR_YESTERDAY."))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>Karen and her friends had some beers at a bar yesterday.</b>";  
document.getElementById('reproducir00').click(); 
},6000);
}
}
//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[23]==1){ 	
if(((respuestiña=="Alex_didn't_travel_during_his_last_vacation")||(respuestiña=="Alex_didnt_travel_during_his_last_vacation")||(respuestiña=="Alex_didn't_travel_during_his_last_vacation.")||(respuestiña=="Alex_didnt_travel_during_his_last_vacation.")||(respuestiña=="ALEX_DIDN'T_TRAVEL_DURING_HIS_LAST_VACATION")||(respuestiña=="ALEX_DIDNT_TRAVEL_DURING_HIS_LAST_VACATION")||(respuestiña=="ALEX_DIDN'T_TRAVEL_DURING_HIS_LAST_VACATION.")||(respuestiña=="ALEX_DIDNT_TRAVEL_DURING_HIS_LAST_VACATION."))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
contadorsiño++;
}else
if(((respuestiña!="Alex_didn't_travel_during_his_last_vacation")||(respuestiña!="Alex_didnt_travel_during_his_last_vacation")||(respuestiña!="Alex_didn't_travel_during_his_last_vacation.")||(respuestiña!="Alex_didnt_travel_during_his_last_vacation.")||(respuestiña!="ALEX_DIDN'T_TRAVEL_DURING_HIS_LAST_VACATION")||(respuestiña!="ALEX_DIDNT_TRAVEL_DURING_HIS_LAST_VACATION")||(respuestiña!="ALEX_DIDN'T_TRAVEL_DURING_HIS_LAST_VACATION.")||(respuestiña!="ALEX_DIDNT_TRAVEL_DURING_HIS_LAST_VACATION."))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>Alex didn't travel during his last vacation.</b>";  
document.getElementById('reproducir00').click(); 
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[24]==1){ 	
if(((respuestiña=="Are_you_going_to_study_this_semester?")||(respuestiña=="ARE_YOU_GOING_TO_STUDY_THIS_SEMESTER?"))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
$('#reproducir00').css('opacity','1');
activar[24] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4500);
contadorsiño++;
}else
if(((respuestiña!="Are_you_going_to_study_this_semester?")||(respuestiña!="ARE_YOU_GOING_TO_STUDY_THIS_SEMESTER?"))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño1').innerHTML='<strong id="res">Are you going to study this semester?</b>'; 
$('#reproducir00').css('opacity','1');
activar[24] = 1; 
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[25]==1){ 	
if(((respuestiña=="No,_I'm_not._I'm_going_to_travel_to_Chile")||(respuestiña=="No,_I'm_not._I'm_going_to_travel_to_Chile.")||(respuestiña=="No,_I_am_not._I_am_going_to_travel_to_Chile")||(respuestiña=="No,_I_am_not._I_am_going_to_travel_to_Chile.")||(respuestiña=="NO,_I'M_NOT._I'M_GOING_TO_TRAVEL_TO_CHILE")||(respuestiña=="NO,_I'M_NOT._I'M_GOING_TO_TRAVEL_TO_CHILE.")||(respuestiña=="NO,_I_AM_NOT._I_AM_GOING_TO_TRAVEL_TO_CHILE")||(respuestiña=="NO,_I_AM_NOT._I_AM_GOING_TO_TRAVEL_TO_CHILE."))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
$('#reproducir00').css('opacity','1');
activar[25] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4500);
contadorsiño++;
}else
if(((respuestiña!="No,_I'm_not._I'm_going_to_travel_to_Chile")||(respuestiña!="No,_I'm_not._I'm_going_to_travel_to_Chile.")||(respuestiña!="No,_I_am_not._I_am_going_to_travel_to_Chile")||(respuestiña!="No,_I_am_not._I_am_going_to_travel_to_Chile.")||(respuestiña!="NO,_I'M_NOT._I'M_GOING_TO_TRAVEL_TO_CHILE")||(respuestiña!="NO,_I'M_NOT._I'M_GOING_TO_TRAVEL_TO_CHILE.")||(respuestiña!="NO,_I_AM_NOT._I_AM_GOING_TO_TRAVEL_TO_CHILE")||(respuestiña!="NO,_I_AM_NOT._I_AM_GOING_TO_TRAVEL_TO_CHILE."))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>No, I'm not. I’m going to travel to Chile.</b>"; 
$('#reproducir00').css('opacity','1');
activar[25] = 1; 
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[26]==1){ 	
if(((respuestiña=="She_will_study_at_the_university")||(respuestiña=="She_will_study_at_the_university.")||(respuestiña=="SHE_WILL_STUDY_AT_THE_UNIVERSITY")||(respuestiña=="SHE_WILL_STUDY_AT_THE_UNIVERSITY."))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
$('#reproducir00').css('opacity','1');
activar[26] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4500);
contadorsiño++;
}else
if(((respuestiña!="She_will_study_at_the_university")||(respuestiña!="She_will_study_at_the_university.")||(respuestiña!="SHE_WILL_STUDY_AT_THE_UNIVERSITY")||(respuestiña!="SHE_WILL_STUDY_AT_THE_UNIVERSITY."))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño1').innerHTML='<strong id="res">She will study at the university.</b>'; 
$('#reproducir00').css('opacity','1');
activar[26] = 1; 
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[27]==1){ 	
if(((respuestiña=="Are_you_going_to_be_at_the_restaurant_at_1:00_o'clock?")||(respuestiña=="ARE_YOU_GOING_TO_BE_AT_THE_RESTAURANT_AT_1:00_O'CLOCK?"))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
$('#reproducir00').css('opacity','1');
activar[27] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4500);
contadorsiño++;
}else
if(((respuestiña!="Are_you_going_to_be_at_the_restaurant_at_1:00_o'clock?")||(respuestiña!="ARE_YOU_GOING_TO_BE_AT_THE_RESTAURANT_AT_1:00_O'CLOCK?"))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>Are you going to be at the restaurant at 1:00 O'clock?</b>"; 
$('#reproducir00').css('opacity','1');
activar[27] = 1; 
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[28]==1){ 	
if(((respuestiña=="Are_you_going_to_run_in_the_marathon_tomorrow?")||(respuestiña=="ARE_YOU_GOING_TO_RUN_IN_THE_MARATHON_TOMORROW?"))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
$('#reproducir00').css('opacity','1');
activar[28] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4500);
contadorsiño++;
}else
if(((respuestiña!="Are_you_going_to_run_in_the_marathon_tomorrow?")||(respuestiña!="ARE_YOU_GOING_TO_RUN_IN_THE_MARATHON_TOMORROW?"))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>Are you going to run in the marathon tomorrow?</b>"; 
$('#reproducir00').css('opacity','1');
activar[28] = 1; 
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[29]==1){ 	
if(((respuestiña=="She_is_going_to_watch_a_movie_with_her_boyfriend_tonight?")||(respuestiña=="SHE_IS_GOING_TO_WATCH_A_MOVIE_WITH_HER_BOYFRIEND_TONIGHT?"))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
$('#reproducir00').css('opacity','1');
activar[29] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4500);
contadorsiño++;
}else
if(((respuestiña!="She_is_going_to_watch_a_movie_with_her_boyfriend_tonight?")||(respuestiña!="SHE_IS_GOING_TO_WATCH_A_MOVIE_WITH_HER_BOYFRIEND_TONIGHT?"))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>She is going to watch a movie with her boyfriend  tonight?</b>"; 
$('#reproducir00').css('opacity','1');
activar[29] = 1; 
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[30]==1){ 	
if(((respuestiña=="What_are_you_going_to_do_weekend_next?")||(respuestiña=="WHAT_ARE_YOU_GOING_TO_DO_WEEKEND_NEXT?"))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
$('#reproducir00').css('opacity','1');
activar[30] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4500);
contadorsiño++;
}else
if(((respuestiña!="What_are_you_going_to_do_weekend_next?")||(respuestiña!="WHAT_ARE_YOU_GOING_TO_DO_WEEKEND_NEXT?"))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML='<strong id="res">What are you going to do  weekend next?</b>'; 
$('#reproducir00').css('opacity','1');
activar[30] = 1; 
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[31]==1){ 	
if(((respuestiña=="She_is_going_to_travel_to_Cartagena_during_her_next_vacation")||(respuestiña=="She_is_going_to_travel_to_cartagena_during_her_next_vacation")||(respuestiña=="She_is_going_to_travel_to_Cartagena_during_her_next_vacation.")||(respuestiña=="She_is_going_to_travel_to_cartagena_during_her_next_vacation.")||(respuestiña=="SHE_IS_GOING_TO_TRAVEL_TO_CARTAGENA_DURING_HER_NEXT_VACATION")||(respuestiña=="SHE_IS_GOING_TO_TRAVEL_TO_CARTAGENA_DURING_HER_NEXT_VACATION."))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
$('#reproducir00').css('opacity','1');
activar[31] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4500);
contadorsiño++;
}else
if(((respuestiña!="She_is_going_to_travel_to_Cartagena_during_her_next_vacation")||(respuestiña!="She_is_going_to_travel_to_cartagena_during_her_next_vacation")||(respuestiña!="She_is_going_to_travel_to_Cartagena_during_her_next_vacation.")||(respuestiña!="She_is_going_to_travel_to_cartagena_during_her_next_vacation.")||(respuestiña!="SHE_IS_GOING_TO_TRAVEL_TO_CARTAGENA_DURING_HER_NEXT_VACATION")||(respuestiña!="SHE_IS_GOING_TO_TRAVEL_TO_CARTAGENA_DURING_HER_NEXT_VACATION."))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML='<strong id="res">She is going to travel to Cartagena during her next vacation.</b>'; 
$('#reproducir00').css('opacity','1');
activar[31] = 1; 
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[32]==1){ 	
if(((respuestiña=="Richard_and_Jenny_are_going_on_holiday_to_Hawaii")||(respuestiña=="Richard_and_Jenny_are_going_on_holiday_to_Hawaii.")||(respuestiña=="Richard_and_Jenny_are_going_on_holiday_to_Hawaii")||(respuestiña=="Richard_and_Jenny_are_going_on_holiday_to_Hawaii.")||(respuestiña=="RICHARD_AND_JENNY_ARE_GOING_ON_HOLIDAY_TO_HAWAII")||(respuestiña=="RICHARD_AND_JENNY_ARE_GOING_ON_HOLIDAY_TO_HAWAII."))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
contadorsiño++;
}else
if(((respuestiña!="Richard_and_Jenny_are_going_on_holiday_to_Hawaii")||(respuestiña!="Richard_and_Jenny_are_going_on_holiday_to_Hawaii.")||(respuestiña!="Richard_and_Jenny_are_going_on_holiday_to_Hawaii")||(respuestiña!="Richard_and_Jenny_are_going_on_holiday_to_Hawaii.")||(respuestiña!="RICHARD_AND_JENNY_ARE_GOING_ON_HOLIDAY_TO_HAWAII")||(respuestiña!="RICHARD_AND_JENNY_ARE_GOING_ON_HOLIDAY_TO_HAWAII."))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>Richard and Jenny are going on holiday to Hawaii  </b>"; 
document.getElementById('reproducir00').click(); 
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[33]==1){ 	
if(((respuestiña=="Are_you_going_to_the_party_tonight?")||(respuestiña=="ARE_YOU_GOING_TO_THE_PARTY_TONIGHT?")||(respuestiña=="STEVE_LIKES_TO_GO_TO_THE_GYM_EVERY_DAY.")||(respuestiña=="STEVE_LIKES_TO_GO_TO_THE_GYM_EVERY_DAY"))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
contadorsiño++;
}else
if(((respuestiña!="Are_you_going_to_the_party_tonight?")||(respuestiña!="ARE_YOU_GOING_TO_THE_PARTY_TONIGHT?")||(respuestiña!="STEVE_LIKES_TO_GO_TO_THE_GYM_EVERY_DAY.")||(respuestiña!="STEVE_LIKES_TO_GO_TO_THE_GYM_EVERY_DAY"))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño1').innerHTML="<b>Are you going to the party tonight? </b>"; 
document.getElementById('reproducir00').click(); 
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[34]==1){ 	
if(((respuestiña=="ALEXA_ISNT_GOING_TO_DO_EXERCISES.")||(respuestiña=="Alexa_isn't_going_to_do_exercises")||(respuestiña=="Alexa_isnt_going_to_do_exercises")||(respuestiña=="Alexa_isn't_going_to_do_exercises.")||(respuestiña=="Alexa_isnt_going_to_do_exercises.")||(respuestiña=="ALEXA_ISN'T_GOING_TO_DO_EXERCISES")||(respuestiña=="ALEXA_ISNT_GOING_TO_DO_EXERCISES")||(respuestiña=="ALEXA_ISN'T_GOING_TO_DO_EXERCISES."))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
contadorsiño++;
}else
if(((respuestiña!="ALEXA_ISNT_GOING_TO_DO_EXERCISES.")||(respuestiña!="Alexa_isn't_going_to_do_exercises")||(respuestiña!="Alexa_isnt_going_to_do_exercises")||(respuestiña!="Alexa_isn't_going_to_do_exercises.")||(respuestiña!="Alexa_isnt_going_to_do_exercises.")||(respuestiña!="ALEXA_ISN'T_GOING_TO_DO_EXERCISES")||(respuestiña!="ALEXA_ISNT_GOING_TO_DO_EXERCISES")||(respuestiña!="ALEXA_ISN'T_GOING_TO_DO_EXERCISES."))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>Alexa isn't going to do exercises.</b>"; 
document.getElementById('reproducir00').click(); 
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[35]==1){ 	
if(((respuestiña=="Mario_is_going_to_take_salsa_lessons_next_week")||(respuestiña=="Mario_is_going_to_take_salsa_lessons_next_week.")||(respuestiña=="MARIO_IS_GOING_TO_TAKE_SALSA_LESSONS_NEXT_WEEK")||(respuestiña=="MARIO_IS_GOING_TO_TAKE_SALSA_LESSONS_NEXT_WEEK."))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
contadorsiño++;
}else
if(((respuestiña!="Mario_is_going_to_take_salsa_lessons_next_week")||(respuestiña!="Mario_is_going_to_take_salsa_lessons_next_week.")||(respuestiña!="MARIO_IS_GOING_TO_TAKE_SALSA_LESSONS_NEXT_WEEK")||(respuestiña!="MARIO_IS_GOING_TO_TAKE_SALSA_LESSONS_NEXT_WEEK."))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); mom.classList.remove('bigbang');
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>Mario is going to take salsa lessons next week.</b>"; 
document.getElementById('reproducir00').click(); 
},6000);
}
}*/

//-------------------------------------------------------------------------------------------------------------------------------------
}