var tucha=0;
var otratucha=0;
function listening(){
/*m=0;
s=0;*/

respuestiña=document.getElementById("input2").value;
//respuestiña=respuestiña.toLowerCase();
respuestiña=respuestiña.replace(/\s/g,"_");

if (ejliste[0]==1){ 	

	


setTimeout(function(){
//alert("alomia");
$('#previous').css('display','none');
$('#next').css('display','none');
$('.fuckencio').css('pointer-events','none');
$('.fuckencio').css('opacity','0.4');
$('#collage').css('opacity','0.4');
$('#collage').css('pointer-events','none');
document.getElementById('trompeta').play();
preguntaAle2(false);
},11);

}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejliste[1]==1){ 	
setTimeout(function(){
//alert("alomia");
$('#previous').css('display','none');
$('#next').css('display','none');
$('.fuckencio').css('pointer-events','none');
$('.fuckencio').css('opacity','0.4');
$('#collage').css('opacity','0.4');
$('#collage').css('pointer-events','none');
document.getElementById('trompeta').play();
preguntaAle2(false);
},11);
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejliste[2]==1){ 
setTimeout(function(){
//alert("alomia");
$('#previous').css('display','none');
$('#next').css('display','none');
$('.fuckencio').css('pointer-events','none');
$('.fuckencio').css('opacity','0.4');
$('#collage').css('opacity','0.4');
$('#collage').css('pointer-events','none');
document.getElementById('trompeta').play();
preguntaAle2(false);
},11);
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejliste[3]==1){ 	
setTimeout(function(){
//alert("alomia");
$('#previous').css('display','none');
$('#next').css('display','none');
$('.fuckencio').css('pointer-events','none');
$('.fuckencio').css('opacity','0.4');
$('#collage').css('opacity','0.4');
$('#collage').css('pointer-events','none');
document.getElementById('trompeta').play();
preguntaAle2(false);
},11);

}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejliste[4]==1){ 
setTimeout(function(){
///alert("alomia");
$('#previous').css('display','none');
$('#next').css('display','none');
$('.fuckencio').css('pointer-events','none');
$('.fuckencio').css('opacity','0.4');
$('#collage').css('opacity','0.4');
$('#collage').css('pointer-events','none');
document.getElementById('trompeta').play();
preguntaAle2(false);
},11);
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejliste[5]==1){ 
setTimeout(function(){
//alert("alomia");
$('#previous').css('display','none');
$('#next').css('display','none');
$('.fuckencio').css('pointer-events','none');
$('.fuckencio').css('opacity','0.4');
$('#collage').css('opacity','0.4');
$('#collage').css('pointer-events','none');
document.getElementById('trompeta').play();
preguntaAle2(false);
},11);
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejliste[6]==1){ 
setTimeout(function(){
//alert("alomia");
$('#previous').css('display','none');
$('#next').css('display','none');
$('.fuckencio').css('pointer-events','none');
$('.fuckencio').css('opacity','0.4');
$('#collage').css('opacity','0.4');
$('#collage').css('pointer-events','none');
document.getElementById('trompeta').play();
preguntaAle2(false);
},11);
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejliste[7]==1){ 	
if(((respuestiña=="weight_lifting")||(respuestiña=="Weight_lifting")||(respuestiña=="WEIGHT_LIFTING"))&&(contadorsiño==0)){



tucha++;
$('#input2').css('border','3px solid #308c58');
document.getElementById('aplausos').play();
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
if(((respuestiña!="weight_lifting")||(respuestiña=="Weight_lifting")||(respuestiña=="WEIGHT_LIFTING"))&&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #fc484c');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
document.getElementById('trompeta').play();	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline');preguntaAle2(false); },8000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
$('#formulario').css('display','none');
document.getElementById('parrafiño2').innerHTML="Weight lifting."; 
$('#reproducir00').css('opacity','1');
activar[7] = 1;
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input2').css('display','none');
},6000);
}
}
//-------------------------------------------------------------------------------------------------------------------------------------


if (ejliste[8]==1){ 	

if(((respuestiña=="eat_fast_food")||(respuestiña=="EAT_FAST_FOOD")||(respuestiña=="Eat_fast_food"))&&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #308c58');
document.getElementById('aplausos').play();
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
if(((respuestiña!="eat_fast_food")||(respuestiña!="EAT_FAST_FOOD")||(respuestiña!="Eat_fast_food"))&&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #fc484c');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
document.getElementById('trompeta').play();	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline');preguntaAle2(false);},8500);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
$('#formulario').css('display','none');
document.getElementById('parrafiño2').innerHTML="Eat Fast Food."; 
$('#reproducir00').css('opacity','1');
//activar[13] = 1; 
activar[8] = 1;

document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input2').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejliste[9]==1){ 	
if(((respuestiña=="drink_beer")||(respuestiña=="Drink_beer")||(respuestiña=="DRINK_BEER"))&&(contadorsiño==0)){



tucha++;
$('#input2').css('border','3px solid #308c58');
document.getElementById('aplausos').play();
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
if(((respuestiña!="drink_beer")||(respuestiña!="Drink_beer")||(respuestiña!="DRINK_BEER"))&&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #fc484c');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
document.getElementById('trompeta').play();	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); preguntaAle2(false);},9000);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
$('#formulario').css('display','none');
document.getElementById('parrafiño2').innerHTML="Drink beer."; 
$('#reproducir00').css('opacity','1');
//activar[14] = 1; 
activar[9] = 1;

document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input2').css('display','none');
},6000);
}

}

//-------------------------------------------------------------------------------------------------------------------------------------
if (ejliste[10]==1){ 	
if(((respuestiña=="talk_to_friends")||(respuestiña=="TALK_TO_FRIENDS")||(respuestiña=="Talk_to_friends"))&&(contadorsiño==0)){



tucha++;
$('#input2').css('border','3px solid #308c58');
document.getElementById('aplausos').play();
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
if(((respuestiña!="talk_to_friends")||(respuestiña!="TALK_TO_FRIENDS")||(respuestiña!="Talk_to_friends"))&&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #fc484c');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
document.getElementById('trompeta').play();	
contadorsiño++;
$('#continuar').css('opacity','0.4');
$('#continuar').css('pointer-events','none'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline');preguntaAle2(false); },8500);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
$('#formulario').css('display','none');
document.getElementById('parrafiño2').innerHTML="Talk to friends."; 
$('#reproducir00').css('opacity','1');
//activar[15] = 1; 
activar[10] = 1;

document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input2').css('display','none');
},6000);
}

}

//-------------------------------------------------------------------------------------------------------------------------------------
if (ejliste[11]==1){ 	
if(((respuestiña=="take_a_yoga_class")||(respuestiña=="TAKE_A_YOGA_CLASS")||(respuestiña=="Take_a_yoga_class"))&&(contadorsiño==0)){

tucha++;
$('#input2').css('border','3px solid #308c58');
document.getElementById('aplausos').play();
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
if(((respuestiña!="take_a_yoga_class")||(respuestiña!="TAKE_A_YOGA_CLASS")||(respuestiña!="Take_a_yoga_class"))&&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #fc484c');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
document.getElementById('trompeta').play();	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); preguntaAle2(false);},9500);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
$('#formulario').css('display','none');
document.getElementById('parrafiño2').innerHTML="Take a yoga class"; 
$('#reproducir00').css('opacity','1');
//activar[16] = 1; 
bart2 = 1;
activar[11] = 1;

document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input2').css('display','none');
},6000);
}

}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejliste[12]==1){ 	
if(((respuestiña=="watch_drama_films")||(respuestiña=="WATCH_DRAMA_FILMS")||(respuestiña=="Watch_drama_films"))&&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #308c58');
document.getElementById('aplausos').play();
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
if(((respuestiña!="watch_drama_films")||(respuestiña!="WATCH_DRAMA_FILMS")||(respuestiña!="Watch_drama_films"))&&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #fc484c');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
document.getElementById('trompeta').play();	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); preguntaAle2(false);},8500);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
$('#formulario').css('display','none');
document.getElementById('parrafiño2').innerHTML="Watch drama films."; 
$('#reproducir00').css('opacity','1');
activar[12] = 1;
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input2').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejliste[13]==1){ 	
if(((respuestiña=="watch_adventure_films")||(respuestiña=="WATCH_ADVENTURE_FILMS")||(respuestiña=="Watch_adventure_films"))&&(contadorsiño==0)){



tucha++;
$('#input2').css('border','3px solid #308c58');
document.getElementById('aplausos').play();
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
if(((respuestiña!="watch_adventure_films")||(respuestiña!="WATCH_ADVENTURE_FILMS")||(respuestiña=="Watch_adventure_films"))&&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #fc484c');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
document.getElementById('trompeta').play();	
contadorsiño++;
$('#continuar').css('opacity','0.4');
$('#continuar').css('pointer-events','none'); 
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline');preguntaAle2(false); },9500);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
$('#formulario').css('display','none');
document.getElementById('parrafiño2').innerHTML="Watch adventure films."; 
$('#reproducir00').css('opacity','1');
//activar[18] = 1;
activar[13] = 1; 
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input2').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejliste[14]==1){ 	
if(((respuestiña=="take_a_step_class")||(respuestiña=="Take_a_step_class")||(respuestiña=="TAKE_A_STEP_CLASS"))&&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #308c58');
document.getElementById('aplausos').play();
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){
$('#continuar').css('display','none');
$('#continuar1').css('display','inline'); 
preguntaAle2(true);
$('#reproducir00').css('opacity','1');
activar[19] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4000);
contadorsiño++;
//preguntaAle2(true);
}else
if(((respuestiña!="take_a_step_class")||(respuestiña!="Take_a_step_class")||(respuestiña!="TAKE_A_STEP_CLASS"))&&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #fc484c');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
document.getElementById('trompeta').play();	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline');preguntaAle2(false); },8500);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño1').innerHTML="<b>Take a step class.</b>"; 
$('#reproducir00').css('opacity','1');
activar[14] = 1;
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input2').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejliste[15]==1){ 	
if(((respuestiña=="dance")||(respuestiña=="Dance")||(respuestiña=="DANCE"))&&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #308c58');
document.getElementById('aplausos').play();
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){
$('#continuar').css('display','none');
$('#continuar1').css('display','inline');
preguntaAle2(true); 
$('#reproducir00').css('opacity','1');
activar[20] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4000);
contadorsiño++;
//preguntaAle2(true);
}else
if(((respuestiña!="dance")||(respuestiña!="Dance")||(respuestiña!="DANCE"))&&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #fc484c');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
document.getElementById('trompeta').play();	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); preguntaAle2(false);},8500);
setTimeout(function(){
document.getElementById('the').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño1').innerHTML="<b>Dance.</b>"; 
$('#reproducir00').css('opacity','1');
activar[15] = 1;
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input2').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejliste[16]==1){ 	

indice=document.getElementById("cuadro1").selectedIndex;
if(((respuestiña=="What_is_your_favorite_food")||(respuestiña=="what_is_your_favorite_food")||(respuestiña=="WATCH_IS_YOUR_FAVORITE_FOOD")) && indice==3 &&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #308c58');
document.getElementById('aplausos').play();
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
if(((respuestiña!="What_is_your_favorite_food")||(respuestiña!="what_is_your_favorite_food")||(respuestiña!="WATCH_IS_YOUR_FAVORITE_FOOD"))&& indice!=3 &&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #fc484c');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
document.getElementById('trompeta').play();	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); preguntaAle2(false);},8500);
setTimeout(function(){
document.getElementById('the').play(); 
document.getElementById('a6p1').play();
},4500);
setTimeout(function(){
//$('#formulario').css('display','none');
$('#parrafiño1').css('display','none');
$('#cuadroRespuestas1').css('display','none');

document.getElementById('parrafiño2').innerHTML="What is your favorite food <br>- I love pizza."; 
$('#reproducir00').css('opacity','1');
activar[16] = 1;
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input2').css('display','none');
},6000);
}





}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejliste[17]==1){ 	
	indice=document.getElementById("cuadro1").selectedIndex;
if(((respuestiña=="Do_you_like_going_to_the_gym")||(respuestiña=="do_you_like_going_to_the_gym")||(respuestiña=="DO_YOU_LIKE_GOING_TO_THE_GYM")) && indice==2 &&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #308c58');
document.getElementById('aplausos').play();
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
if(((respuestiña!="Do_you_like_going_to_the_gym")||(respuestiña!="do_you_like_going_to_the_gym")||(respuestiña!="DO_YOU_LIKE_GOING_TO_THE_GYM"))&& indice!=2 &&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #fc484c');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
document.getElementById('trompeta').play();	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); preguntaAle2(false);},8500);
setTimeout(function(){
document.getElementById('the').play(); 
document.getElementById('a6p2').play();
},4500);
setTimeout(function(){
//$('#formulario').css('display','none');
$('#parrafiño1').css('display','none');
$('#cuadroRespuestas1').css('display','none');

document.getElementById('parrafiño2').innerHTML="Do you like going to the gym?<br>- No, I don't"; 
$('#reproducir00').css('opacity','1');
activar[17] = 1;
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input2').css('display','none');
},6000);
}


}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejliste[18]==1){ 	
indice=document.getElementById("cuadro1").selectedIndex;
if(((respuestiña=="Why_do_you_like_science_fiction_films")||(respuestiña=="why_do_you_like_science_fiction_films")||(respuestiña=="WHY_DO_YOU_LIKE_SCIENCE_FICTION_FILMS")) && indice==4 &&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #308c58');
document.getElementById('aplausos').play();
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4');
$('#continuar').css('pointer-events','none'); 
setTimeout(function(){
$('#continuar').css('display','none');
$('#continuar1').css('display','inline'); 
preguntaAle2(true);
$('#reproducir00').css('opacity','1');
activar[18] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4000);
contadorsiño++;
//preguntaAle2(true);
}else
if(((respuestiña!="Why_do_you_like_science_fiction_films")||(respuestiña!="why_do_you_like_science_fiction_films")||(respuestiña!="WHY_DO_YOU_LIKE_SCIENCE_FICTION_FILMS"))&& indice!=4 &&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #fc484c');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
document.getElementById('trompeta').play();	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); preguntaAle2(false);},8500);
setTimeout(function(){
document.getElementById('the').play(); 
document.getElementById('a6p3').play();
},4500);
setTimeout(function(){
//$('#formulario').css('display','none');
$('#parrafiño1').css('display','none');
$('#cuadroRespuestas1').css('display','none');

document.getElementById('parrafiño2').innerHTML="Do you like going to the gym?<br>- No, I don't"; 
$('#reproducir00').css('opacity','1');
activar[18] = 1;
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input2').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejliste[19]==1){ 	

indice=document.getElementById("cuadro1").selectedIndex;
if(((respuestiña=="Does_your_mother_like_cooking_pasta")||(respuestiña=="Does_your_mother_like_cooking_pasta")||(respuestiña=="DOES_YOUR_MOTHER_LIKE_COOKING_PASTA")) && indice==0 &&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #308c58');
document.getElementById('aplausos').play();
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4');
$('#continuar').css('pointer-events','none'); 
setTimeout(function(){
$('#continuar').css('display','none');
$('#continuar1').css('display','inline'); 
preguntaAle2(true);
$('#reproducir00').css('opacity','1');
activar[19] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4000);
contadorsiño++;
//preguntaAle2(true);
}else
if(((respuestiña!="Does_your_mother_like_cooking_pasta")||(respuestiña!="Does_your_mother_like_cooking_pasta")||(respuestiña!="DOES_YOUR_MOTHER_LIKE_COOKING_PASTA"))&& indice!=0 &&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #fc484c');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
document.getElementById('trompeta').play();	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); preguntaAle2(false);},8500);
setTimeout(function(){
document.getElementById('the').play(); 
document.getElementById('a6p4').play();
},4500);
setTimeout(function(){
//$('#formulario').css('display','none');
$('#parrafiño1').css('display','none');
$('#cuadroRespuestas1').css('display','none');

document.getElementById('parrafiño2').innerHTML="Does your mother like cooking pasta?<br>- Yes, she does"; 
$('#reproducir00').css('opacity','1');
activar[19] = 1;
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input2').css('display','none');
},6000);
}
}
//-------------------------------------------------------------------------------------------------------------------------------------
if (ejliste[20]==1){ 	
indice=document.getElementById("cuadro1").selectedIndex;
if(((respuestiña=="What_do_you_usually_do_in_your_free_time")||(respuestiña=="what_do_you_usually_do_in_your_free_time")||(respuestiña=="WHAT_DO_YOU_USUALLY_DO_IN_YOUR_FREE_TIME")) && indice==1 &&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #308c58');
document.getElementById('aplausos').play();
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4');
$('#continuar').css('pointer-events','none'); 
setTimeout(function(){
$('#continuar').css('display','none');
$('#continuar1').css('display','inline'); 
preguntaAle2(true);
$('#reproducir00').css('opacity','1');
activar[20] = 1; 
$('#reproducir00').css('pointer-events','auto');
},4000);
contadorsiño++;
//preguntaAle2(true);
}else
if(((respuestiña!="What_do_you_usually_do_in_your_free_time")||(respuestiña!="what_do_you_usually_do_in_your_free_time")||(respuestiña!="WHAT_DO_YOU_USUALLY_DO_IN_YOUR_FREE_TIME"))&& indice!=1 &&(contadorsiño==0)){
tucha++;
$('#input2').css('border','3px solid #fc484c');
$('#input2').css('pointer-events','none'); 
$('#input2').css('opacity','0.6'); 
document.getElementById('trompeta').play();	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){$('#continuar').css('display','none');$('#continuar1').css('display','inline'); preguntaAle2(false);},8500);
setTimeout(function(){
document.getElementById('the').play(); 
document.getElementById('a6p5').play();
},4500);
setTimeout(function(){
//$('#formulario').css('display','none');
$('#parrafiño1').css('display','none');
$('#cuadroRespuestas1').css('display','none');

document.getElementById('parrafiño2').innerHTML="What do you usually do in your free time?<br>- I like going to the gym"; 
$('#reproducir00').css('opacity','1');
activar[20] = 1;
document.getElementById('reproducir00').click(); 
$('#reproducir00').css('pointer-events','auto');
$('#input2').css('display','none');
},6000);
}
}
//-------------------------------------------------------------------------------------------------------------------------------------

if (ejliste[21]==1){ 

setTimeout(function(){


$('.fuckencio').css('pointer-events','none');
$('.fuckencio').css('opacity','0.3');
$('.ans').css('opacity','0.3');
$('#q1').css('pointer-events','none');
$('#q1').css('opacity','0.3');

//preguntaAle2(false);
},11);	
}
//-------------------------------------------------------------------------------------------------------------------------------------
if (ejliste[22]==1){ 	
setTimeout(function(){


$('.fuckencio').css('pointer-events','none');
$('.fuckencio').css('opacity','0.3');
$('.ans').css('opacity','0.3');
$('#q2').css('pointer-events','none');
$('#q2').css('opacity','0.3');

//preguntaAle2(false);
},11);	
}
//-------------------------------------------------------------------------------------------------------------------------------------
if (ejliste[23]==1){ 
setTimeout(function(){


$('.fuckencio').css('pointer-events','none');
$('.fuckencio').css('opacity','0.3');
$('.ans').css('opacity','0.3');
$('#q3').css('pointer-events','none');
$('#q3').css('opacity','0.3');

//preguntaAle2(false);
},11);		

}
//-------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------
if (ejliste[24]==1){ 
	//document.getElementById('trompeta').play();
setTimeout(function(){


$('.fuckencio').css('pointer-events','none');
$('.fuckencio').css('opacity','0.3');
$('.ans').css('opacity','0.3');
$('#q4').css('pointer-events','none');
$('#q4').css('opacity','0.3');

//preguntaAle2(false);
},11);	

}

//-------------------------------------------------------------------------------------------------------------------------------------
if (ejliste[25]==1){ 	


setTimeout(function(){


$('.fuckencio').css('pointer-events','none');
$('.fuckencio').css('opacity','0.3');
$('.ans').css('opacity','0.3');
$('#q5').css('pointer-events','none');
$('#q5').css('opacity','0.3');

//preguntaAle2(false);
},11);	

}











































//-------------------------------------------------------------------------------------------------------------------------------------
/*
if (ejwriting[8]==1){ 	
if(((respuestiña=="Steve_likes_to_go_to_the_gym_every_day.")||(respuestiña=="Steve_likes_to_go_to_the_gym_every_day")||(respuestiña=="STEVE_LIKES_TO_GO_TO_THE_GYM_EVERY_DAY.")||(respuestiña=="STEVE_LIKES_TO_GO_TO_THE_GYM_EVERY_DAY"))&&(contadorsiño==0)){
$('#input1').css('border','3px solid #308c58');
document.getElementById('aplausos').play();
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
document.getElementById('trompeta').play();	
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
document.getElementById('aplausos').play();
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
document.getElementById('trompeta').play();	
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
document.getElementById('aplausos').play();
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
document.getElementById('trompeta').play();	
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
document.getElementById('aplausos').play();
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
document.getElementById('trompeta').play();	
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
document.getElementById('aplausos').play();
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
document.getElementById('trompeta').play();	
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
document.getElementById('aplausos').play();
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
document.getElementById('trompeta').play();	
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
document.getElementById('aplausos').play();
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
document.getElementById('trompeta').play();	
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
document.getElementById('aplausos').play();
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
document.getElementById('trompeta').play();	
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
document.getElementById('aplausos').play();
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
document.getElementById('trompeta').play();	
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
document.getElementById('aplausos').play();
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
document.getElementById('trompeta').play();	
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
document.getElementById('aplausos').play();
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
document.getElementById('trompeta').play();	
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
document.getElementById('aplausos').play();
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
document.getElementById('trompeta').play();	
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
document.getElementById('aplausos').play();
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
document.getElementById('trompeta').play();	
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
document.getElementById('aplausos').play();
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
document.getElementById('trompeta').play();	
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
document.getElementById('aplausos').play();
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
document.getElementById('trompeta').play();	
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
document.getElementById('aplausos').play();
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
document.getElementById('trompeta').play();	
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
document.getElementById('aplausos').play();
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
document.getElementById('trompeta').play();	
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
document.getElementById('aplausos').play();
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
document.getElementById('trompeta').play();	
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
document.getElementById('aplausos').play();
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
document.getElementById('trompeta').play();	
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
document.getElementById('aplausos').play();
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
document.getElementById('trompeta').play();	
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
document.getElementById('aplausos').play();
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
document.getElementById('trompeta').play();	
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
document.getElementById('aplausos').play();
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
document.getElementById('trompeta').play();	
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
document.getElementById('aplausos').play();
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
document.getElementById('trompeta').play();	
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
document.getElementById('aplausos').play();
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
document.getElementById('trompeta').play();	
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
document.getElementById('aplausos').play();
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
document.getElementById('trompeta').play();	
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
document.getElementById('aplausos').play();
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
document.getElementById('trompeta').play();	
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
document.getElementById('aplausos').play();
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
document.getElementById('trompeta').play();	
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
document.getElementById('aplausos').play();
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
document.getElementById('trompeta').play();	
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