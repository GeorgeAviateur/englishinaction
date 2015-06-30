var i=0;
var aux=0;
var dato1="";
var dato2="";
var ubic="";

var cuentabien=0;
function sololetras(e){

if ((e.keyCode != 32) && (e.keyCode < 65) || (e.keyCode > 90) && (e.keyCode < 97) || (e.keyCode > 122))
e.returnValue = false;

}
//---------------------------------------------------------------------------------------------------------------------------

function automatico(){

	auto=setTimeout(function(){ $('img').css('opacity','40');    document.getElementById('L').play(); },4000);
	auto=setTimeout(function(){document.getElementById('resultado').innerHTML='Weight Lifting'; document.getElementById('weight_lifting').click(); $('img').css('opacity','40');    document.getElementById('a1').play(); },7000);
	auto=setTimeout(function(){document.getElementById('resultado').innerHTML='Go To The Gym'; document.getElementById('go_to_the_gym').click();      document.getElementById('a2').play(); },10000);
	auto=setTimeout(function(){document.getElementById('resultado').innerHTML='Go to the cinema'; document.getElementById('go_to_the_cinema').click();   document.getElementById('a3').play();},13000);
	auto=setTimeout(function(){document.getElementById('resultado').innerHTML='Listen To Music'; document.getElementById('listen_to_music').click();    document.getElementById('a4').play();},16000);
	auto=setTimeout(function(){document.getElementById('resultado').innerHTML='Eat Hamburgers'; document.getElementById('eat_hamburgers').click();     document.getElementById('a5').play();},19000);
	auto=setTimeout(function(){document.getElementById('resultado').innerHTML='Drink Cocktails'; document.getElementById('drink_cocktails').click();    document.getElementById('a6').play();},22000);
	auto=setTimeout(function(){document.getElementById('resultado').innerHTML='Dance'; document.getElementById('dance').click();              document.getElementById('a7').play();},25000);
	
}

function resul(){
cuentabien/=2;
$('#r1').css('display','none');
$('.sig').css('display','none');
resultado(cuentabien,7);
}

//---------------------------------------------------------------------------------------------------------------------------
function c(id){ 

var el = document.getElementById("myRoundabout");
var as = el.getElementsByTagName("li");
var form1 = document.getElementById("form2");

for (var i=0; i<as.length; i++) {
document.form3.resultado.value = id;

if (id=="go_to_the_gym"){
form1.weight_lifting.style.display = "none";
form1.go_to_the_cinema.style.display = "none";
form1.go_to_the_gym.style.display = "inline";
form1.button1.style.display = "none";
form1.button2.style.display = "inline";
form1.button3.style.display = "none";
}

if (id=="go_to_the_cinema"){
form1.go_to_the_gym.style.display = "none";
form1.listen_to_music.style.display = "none";
form1.go_to_the_cinema.style.display = "inline";
form1.button2.style.display = "none";
form1.button3.style.display = "inline";
form1.button4.style.display = "none";

}

if (id=="listen_to_music"){
form1.go_to_the_cinema.style.display = "none";
form1.eat_hamburgers.style.display = "none";
form1.listen_to_music.style.display = "inline";
form1.button3.style.display = "none";
form1.button4.style.display = "inline";
form1.button5.style.display = "none";
}

if (id=="eat_hamburgers"){
form1.listen_to_music.style.display = "none";
form1.drink_cocktails.style.display = "none";
form1.eat_hamburgers.style.display = "inline";
form1.button4.style.display = "none";
form1.button5.style.display = "inline";
form1.button6.style.display = "none";
}

if (id=="drink_cocktails"){
form1.dance.style.display = "none";
form1.eat_hamburgers.style.display = "none";
form1.drink_cocktails.style.display = "inline";
form1.button5.style.display = "none";
form1.button6.style.display = "inline";
form1.button7.style.display = "none";
}

if (id=="dance"){
form1.drink_cocktails.style.display = "none";
form1.weight_lifting.style.display = "none";
form1.dance.style.display = "inline";
form1.button6.style.display = "none";
form1.button7.style.display = "inline";
form1.button1.style.display = "none";
}

if (id=="weight_lifting"){
form1.dance.style.display = "none";
form1.go_to_the_gym.style.display = "none";
form1.weight_lifting.style.display = "inline";
form1.button7.style.display = "none";
form1.button1.style.display = "inline";
form1.button2.style.display = "none";
}
}
ubic=id;
}
//---------------------------------------------------------------------------------------------------------------------------
var lock=false;
var compara="";
function capturar(){ 
var recibe="";
respuesta="";
respuesta=form3.resultado.value;

if (ubic=="weight_lifting"){
recibe=document.getElementById("campo1").value;
}

if (ubic=="go_to_the_gym"){
recibe=document.getElementById("campo2").value;
}

if (ubic=="go_to_the_cinema"){
recibe=document.getElementById("campo3").value;
}

if (ubic=="listen_to_music"){
recibe=document.getElementById("campo4").value;
}

if (ubic=="eat_hamburgers"){
recibe=document.getElementById("campo5").value;
}

if (ubic=="drink_cocktails"){
recibe=document.getElementById("campo6").value;
}

if (ubic=="dance"){
recibe=document.getElementById("campo7").value;
}

recibe=recibe.toLowerCase();
recibe=recibe.replace(/\s/g,"_");
respuesta=respuesta.replace(/\s/g,"_");

if(lock==false){
compara=respuesta;
lock=true;
}

if(compara!=respuesta){
aux=0;
lock=false;
compara="";
}

if(respuesta==recibe){
document.getElementById(ubic).disabled = true;  
alert("muy bien");

if(respuesta=="weight_lifting"){
document.getElementById('campo1').disabled = true; 
document.getElementById('button1').disabled = true; 
cuentabien++; 
}
if(respuesta=="go_to_the_gym"){
document.getElementById('campo2').disabled = true; 
document.getElementById('button2').disabled = true;
cuentabien++; 
}
if(respuesta=="go_to_the_cinema"){
document.getElementById('campo3').disabled = true; 
document.getElementById('button3').disabled = true;
cuentabien++; 
}
if(respuesta=="listen_to_music"){
document.getElementById('campo4').disabled = true; 
document.getElementById('button4').disabled = true;
cuentabien++; 
}
if(respuesta=="eat_hamburgers"){
document.getElementById('campo5').disabled = true; 
document.getElementById('button5').disabled = true;
cuentabien++; 
}
if(respuesta=="drink_cocktails"){
document.getElementById('campo6').disabled = true; 
document.getElementById('button6').disabled = true;
cuentabien++; 
}
if(respuesta=="dance"){
document.getElementById('campo7').disabled = true; 
document.getElementById('button7').disabled = true;
cuentabien++; 
}

$('#'+ubic).css('opacity','0.4');
document.getElementById('bien').play();
cuentabien++;
}
else{
aux++;
      if(aux<=2){
        document.getElementById('sorry').play();
        alert("horrendo");
        alert("llevas "+aux+" intentos. Tu limite es de 3 intentos");
        }

        if ((aux>2)&&(ubic=="weight_lifting")){
          alert("has agotado tus intentos");
          document.getElementById('campo1').disabled = true; 
          myaudio(1);
          $('#'+ubic).css('opacity','0.4');
          document.getElementById('button1').disabled = true; 
          cuentabien++; 
        }

        if ((aux>2)&&(ubic=="go_to_the_gym")){
          alert("has agotado tus intentos");
          document.getElementById('campo2').disabled = true; 
          myaudio(2);
          $('#'+ubic).css('opacity','0.4');
          document.getElementById('button2').disabled = true; 
          cuentabien++; 
        }

        if ((aux>2)&&(ubic=="go_to_the_cinema")){
          alert("has agotado tus intentos");
          document.getElementById('campo3').disabled = true; 
          myaudio(3);
          $('#'+ubic).css('opacity','0.4');
          document.getElementById('button3').disabled = true; 
          cuentabien++; 
        }

        if ((aux>2)&&(ubic=="listen_to_music")){
          alert("has agotado tus intentos");
          document.getElementById('campo4').disabled = true; 
          myaudio(4);
          $('#'+ubic).css('opacity','0.4');
          document.getElementById('button4').disabled = true; 
          cuentabien++; 
        }

        if ((aux>2)&&(ubic=="eat_hamburgers")){
          alert("has agotado tus intentos");
          document.getElementById('campo5').disabled = true; 
          myaudio(5);
          $('#'+ubic).css('opacity','0.4');
          document.getElementById('button5').disabled = true; 
          cuentabien++; 
        }

        if ((aux>2)&&(ubic=="drink_cocktails")){
          alert("has agotado tus intentos");
          document.getElementById('campo6').disabled = true; 
          myaudio(6);
          $('#'+ubic).css('opacity','0.4');
          document.getElementById('button6').disabled = true;
          cuentabien++;  
        }

      if ((aux>2)&&(ubic=="dance")){
        alert("has agotado tus intentos");
         document.getElementById('campo7').disabled = true; 
        myaudio(7);
        $('#'+ubic).css('opacity','0.4');
        document.getElementById('button7').disabled = true;
        cuentabien++; 
        }
    }
   // cuentabien=7;
recibe="";
if(cuentabien==7){
automatico();
resul(7);
}
}

//---------------------------------------------------------------------------------------------------------------------------
function myaudio(number){
if(number==1)
  document.getElementById('t1').play();
if(number==2)
  document.getElementById('t2').play();
if(number==3)  
  document.getElementById('t3').play();
if(number==4)  
  document.getElementById('t4').play();
if(number==5)  
  document.getElementById('t5').play();
if(number==6)  
  document.getElementById('t6').play();
if(number==7)  
  document.getElementById('t7').play();
}

//---------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------

var dato1="";
var a1="";
var a2="";
var a3="";
var a4="";
var a5="";
var a6="";
var a7="";

function capturar1(botoncito){
var form2 = document.getElementById("form4");

for (i=0;i<form2.elements.length;i++){
dato1 = form2.elements[i].value;
dato1=dato1.toLowerCase();
dato1=dato1.replace(/\s/g,"_");
a1=form2.weight_lifting.value;
a2=form2.go_to_the_gym.value;
a3=form2.go_to_the_cinema.value;
a4=form2.listen_to_music.value;
a5=form2.eat_hamburgers.value;
a6=form2.drink_cocktails.value;
a7=form2.dance.value;
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
  aux=0;
  lock=false;
  compara="";
}

if(lock==false){
  compara=botoncito;
  lock=true;
}

if (botoncito=="e1"){
  if ((a1 == "weight_lifting")) {
    document.getElementById('bien').play();
    alert("muy bien");
    $('#weight_lifting1').css('opacity','0.4');
    form2.weight_lifting.disabled = "disabled";
    $(form2.weight_lifting).css('opacity','0.4');
    form2.e1.disabled = "disabled";
    $(form2.e1).css('opacity','0.4');
    cuentabien++;
    }
else{
  aux++;
    if(aux<=2){
      document.getElementById('sorry').play();
      alert("llevas "+aux+" intentos. Tu limite es de 3 intentos");
    }
    if ((aux>2)&&(a1!="weight_lifting")){
      document.getElementById('t1').play();
      alert("has agotado tus intentos");
      document.getElementById('campo1').disabled = true;
      $('#weight_lifting1').css('opacity','0.4');
      form2.weight_lifting.disabled = "disabled";
      $(form2.weight_lifting).css('opacity','0.4');
      form2.e1.disabled = "disabled";
      $(form2.e1).css('opacity','0.4');
      cuentabien++;
    }
}  
}



if (botoncito=="e2"){
  if ((a2=="go_to_the_gym")) {
    cuentabien++;
    document.getElementById('bien').play();
    alert("muy bien");
    $('#go_to_the_gym1').css('opacity','0.4');
    form2.go_to_the_gym.disabled = "disabled";
    $(form2.go_to_the_gym).css('opacity','0.4');
    form2.e2.disabled = "disabled";
    $(form2.e2).css('opacity','0.4');
    }
    else{
      aux++;
      if(aux<=2){
        document.getElementById('sorry').play();
        alert("llevas "+aux+" intentos. Tu limite es de 3 intentos");
        }
      if ((aux>2)&&(a2!="go_to_the_gym")){
        cuentabien++;
          document.getElementById('t2').play();
        alert("has agotado tus intentos");
          $('#go_to_the_gym1').css('opacity','0.4');
          form2.go_to_the_gym.disabled = "disabled";
          $(form2.go_to_the_gym).css('opacity','0.4');
          form2.e2.disabled = "disabled";
          $(form2.e2).css('opacity','0.4');
        }
    }
}



if (botoncito=="e3"){
if ((a3=="go_to_the_cinema")) {
  cuentabien++;
 document.getElementById('bien').play();
alert("muy bien");
$('#go_to_the_cinema1').css('opacity','0.4');
form2.go_to_the_cinema.disabled = "disabled";
$(form2.go_to_the_cinema).css('opacity','0.4');
form2.e3.disabled = "disabled";
$(form2.e3).css('opacity','0.4');
}
 else{
      aux++;
      if(aux<=2){
        document.getElementById('sorry').play();
        alert("llevas "+aux+" intentos. Tu limite es de 3 intentos");
      }
        if ((aux>2)&&(a3!="go_to_the_cinema")){
          cuentabien++;
        document.getElementById('t3').play();
          alert("has agotado tus intentos");
        $('#go_to_the_cinema1').css('opacity','0.4');
form2.go_to_the_cinema.disabled = "disabled";
$(form2.go_to_the_cinema).css('opacity','0.4');
form2.e3.disabled = "disabled";
$(form2.e3).css('opacity','0.4');
        }
}
}


if (botoncito=="e4"){
if ((a4=="listen_to_music")) {
  cuentabien++;
  document.getElementById('bien').play();
alert("muy bien");
$('#listen_to_music1').css('opacity','0.4');
form2.listen_to_music.disabled = "disabled";
$(form2.listen_to_music).css('opacity','0.4');
form2.e4.disabled = "disabled";
$(form2.e4).css('opacity','0.4');
}
else{
      aux++;
      if(aux<=2){
        document.getElementById('sorry').play();
        alert("llevas "+aux+" intentos. Tu limite es de 3 intentos");
      }

if ((aux>2)&&(a4!="listen_to_music")){
  cuentabien++;
       document.getElementById('t4').play();
  alert("has agotado tus intentos");
          
          $('#listen_to_music1').css('opacity','0.4');
form2.listen_to_music.disabled = "disabled";
$(form2.listen_to_music).css('opacity','0.4');
form2.e4.disabled = "disabled";
$(form2.e4).css('opacity','0.4');
        }
}
}


if (botoncito=="e5"){
if ((a5=="eat_hamburgers")) {
  cuentabien++;
  document.getElementById('bien').play();
alert("muy bien");
$('#eat_hamburgers1').css('opacity','0.4');
form2.eat_hamburgers.disabled = "disabled";
$(form2.eat_hamburgers).css('opacity','0.4');
form2.e5.disabled = "disabled";
$(form2.e5).css('opacity','0.4');
}
else{
      aux++;
      if(aux<=2){
        document.getElementById('sorry').play();
        alert("llevas "+aux+" intentos. Tu limite es de 3 intentos");
        }
if ((aux>2)&&(a5!="eat_hamburgers")){
  cuentabien++;
        document.getElementById('t5').play();
  alert("has agotado tus intentos");
          
          $('#eat_hamburgers1').css('opacity','0.4');
form2.eat_hamburgers.disabled = "disabled";
$(form2.eat_hamburgers).css('opacity','0.4');
form2.e5.disabled = "disabled";
$(form2.e5).css('opacity','0.4');
        }
}
}


if (botoncito=="e6"){
if ((a6=="drink_cocktails")) {
  cuentabien++;
  document.getElementById('bien').play();
alert("muy bien");
$('#drink_cocktails1').css('opacity','0.4');
form2.drink_cocktails.disabled = "disabled";
$(form2.drink_cocktails).css('opacity','0.4');
form2.e6.disabled = "disabled";
$(form2.e6).css('opacity','0.4');
}
else{
      aux++;
      if(aux<=2){
        document.getElementById('sorry').play();
        alert("llevas "+aux+" intentos. Tu limite es de 3 intentos");
        }
 if ((aux>2)&&(a6!="drink_cocktails")){
    cuentabien++;
    document.getElementById('t6').play();
  alert("has agotado tus intentos");
    $('#drink_cocktails1').css('opacity','0.4');
form2.drink_cocktails.disabled = "disabled";
$(form2.drink_cocktails).css('opacity','0.4');
form2.e6.disabled = "disabled";
$(form2.e6).css('opacity','0.4');

        }
}
}


if (botoncito=="e7"){
if ((a7=="dance")) {
    cuentabien++;
  document.getElementById('bien').play();
alert("muy bien");
$('#dance1').css('opacity','0.4');
form2.dance.disabled = "disabled";
$(form2.dance).css('opacity','0.4');
form2.e7.disabled = "disabled";
$(form2.e7).css('opacity','0.4');

}
else{
      aux++;
      if(aux<=2){
        document.getElementById('sorry').play();
        alert("llevas "+aux+" intentos. Tu limite es de 3 intentos");
        }

 if ((aux>2)&&(a7!="dance")){
    cuentabien++;
    document.getElementById('t7').play();
  alert("has agotado tus intentos");
$('#dance1').css('opacity','0.4');
form2.dance.disabled = "disabled";
$(form2.dance).css('opacity','0.4');
form2.e7.disabled = "disabled";
$(form2.e7).css('opacity','0.4');
        }
        }
}

form2.weight_lifting.value="";
form2.go_to_the_gym.value="";
form2.go_to_the_cinema.value="";
form2.listen_to_music.value="";
form2.eat_hamburgers.value="";
form2.drink_cocktails.value="";
form2.dance.value="";




if(cuentabien==7){

  setTimeout(function(){automatico1();},3000)
}



}
