function speaking(){
start_img.src = '../../../imagenes/botones/microfono1.png';
start_img.classList.remove('bigbang1');
$('.carito').css('color','#087590');
//$('#information').css('display','none');
mur++;
if(contador>0){
audio.pause();
audio.currentTime = 0;
}

recept=recept.replace(/\s/g,"_");


if (ejspeaking[0]==1){ 	
if((recept=="sam_loves_listening_to_rock_music")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('aplausos').play(); preguntaAle2(true,'Speaking');	mom11.classList.remove('bigbang');
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },4000);
//setTimeout(function(){
//$('#reproducir0').css('opacity','1');
//activar1[0] = 1; 
////$('#reproducir0').css('pointer-events','auto');
//},4500);
contadorsiño++;
}else
if((recept!="sam_loves_listening_to_rock_music")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('trompeta').play(); preguntaAle2(false,'Speaking');	mom11.classList.remove('bigbang');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },9000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño1').innerHTML='The correct answer is:'; 
document.getElementById('parrafiño2').innerHTML='<b>Sam loves listening to rock music.</b>'; 
$('.microfonito').css('display','none');
//$('#reproducir0').css('opacity','1');
//activar1[0] = 1; 
//$('#reproducir0').css('pointer-events','auto');
document.getElementById('reproducir0').click(); 

$('#blanco').css('background','#f4eddd');
$('#blanco').css('box-shadow','0 0 7px rgba(0,0,0,0.5)');
$('#cuadroPreguntas').css('display','inline');
$('#campi').css('margin-top','6%');
$('#campi').css('margin-bottom','6%');
$('#information').css('display','none');
},6000);
}
}
//-------------------------------------------------------------------------------------------------------------------------------------

if (ejspeaking[1]==1){ 	
if(((recept=="do_you_like_eating_fast_food")||(recept=="do_you_like_eating_fast_food?"))&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('aplausos').play(); preguntaAle2(true,'Speaking');	mom11.classList.remove('bigbang');
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },4000);
//setTimeout(function(){
//$('#reproducir0').css('opacity','1');
//activar1[1] = 1; 
//$('#reproducir0').css('pointer-events','auto');
//},4500);
contadorsiño++;
}else
if(((recept!="do_you_like_eating_fast_food")||(recept!="do_you_like_eating_fast_food?"))&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('trompeta').play(); preguntaAle2(false,'Speaking');	mom11.classList.remove('bigbang');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },8000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño1').innerHTML='The correct answer is:'; 
document.getElementById('parrafiño2').innerHTML='<b>Do you like eating fast food?</b>'; 
$('.microfonito').css('display','none');
//$('#reproducir0').css('opacity','1');
//activar1[1] = 1; 
//$('#reproducir0').css('pointer-events','auto');
document.getElementById('reproducir0').click(); 

$('#blanco').css('background','#f4eddd');
$('#blanco').css('box-shadow','0 0 7px rgba(0,0,0,0.5)');
$('#cuadroPreguntas').css('display','inline');
$('#campi').css('margin-top','6%');
$('#campi').css('margin-bottom','6%');
$('#information').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejspeaking[2]==1){ 	
if((recept=="emily_hates_watching_horror_movies")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('aplausos').play(); preguntaAle2(true,'Speaking');	mom11.classList.remove('bigbang');
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },4000);
//setTimeout(function(){
//$('#reproducir0').css('opacity','1');
//activar1[2] = 1; 
//$('#reproducir0').css('pointer-events','auto');
//},4500);
contadorsiño++;
}else
if((recept!="emily_hates_watching_horror_movies")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('trompeta').play(); preguntaAle2(false,'Speaking');	mom11.classList.remove('bigbang');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },9000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño1').innerHTML='The correct answer is:'; 
document.getElementById('parrafiño2').innerHTML='<b>Emily hates watching horror movies.</b>'; 
$('.microfonito').css('display','none');
//$('#reproducir0').css('opacity','1');
//activar1[2] = 1; 
//$('#reproducir0').css('pointer-events','auto');
document.getElementById('reproducir0').click(); 

$('#blanco').css('background','#f4eddd');
$('#blanco').css('box-shadow','0 0 7px rgba(0,0,0,0.5)');
$('#cuadroPreguntas').css('display','inline');
$('#campi').css('margin-top','6%');
$('#campi').css('margin-bottom','6%');
$('#information').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------
if (ejspeaking[3]==1){ 	
if((recept=="wendy_loves_singing_pop_music")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('aplausos').play(); preguntaAle2(true,'Speaking');	mom11.classList.remove('bigbang');
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },4000);
//setTimeout(function(){
//$('#reproducir0').css('opacity','1');
//activar1[3] = 1; 
//$('#reproducir0').css('pointer-events','auto');
//},4500);
contadorsiño++;
}else
if((recept!="wendy_loves_singing_pop_music")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('trompeta').play(); preguntaAle2(false,'Speaking');	mom11.classList.remove('bigbang');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },9000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño1').innerHTML='The correct answer is:'; 
document.getElementById('parrafiño2').innerHTML='<b>Wendy loves singing pop music.</b>'; 
$('.microfonito').css('display','none');
//$('#reproducir0').css('opacity','1');
//activar1[3] = 1; 
//$('#reproducir0').css('pointer-events','auto');
document.getElementById('reproducir0').click();

$('#blanco').css('background','#f4eddd');
$('#blanco').css('box-shadow','0 0 7px rgba(0,0,0,0.5)');
$('#cuadroPreguntas').css('display','inline');
$('#campi').css('margin-top','6%');
$('#campi').css('margin-bottom','6%');
$('#information').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejspeaking[4]==1){ 	
if((recept=="wendy_sang_pop_music")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('aplausos').play(); preguntaAle2(true,'Speaking');	mom11.classList.remove('bigbang');
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },4000);
//setTimeout(function(){
//$('#reproducir0').css('opacity','1');
//activar1[4] = 1; 
//$('#reproducir0').css('pointer-events','auto');
//},4500);
contadorsiño++;
}else
if((recept!="wendy_sang_pop_music")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('trompeta').play(); preguntaAle2(false,'Speaking');	mom11.classList.remove('bigbang');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },9000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño1').innerHTML='The correct answer is:'; 
document.getElementById('parrafiño2').innerHTML='<b>Wendy sang pop music</b>'; 
$('.microfonito').css('display','none');
//$('#reproducir0').css('opacity','1');
//activar1[4] = 1; 
//$('#reproducir0').css('pointer-events','auto');
document.getElementById('reproducir0').click(); 

$('#blanco').css('background','#f4eddd');
$('#blanco').css('box-shadow','0 0 7px rgba(0,0,0,0.5)');
$('#cuadroPreguntas').css('display','inline');
$('#campi').css('margin-top','6%');
$('#campi').css('margin-bottom','6%');
$('#information').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejspeaking[5]==1){ 	
if(((recept=="i_didn't_go_to_the_gym")||(recept=="i_did_not_go_to_the_gym"))&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('aplausos').play(); preguntaAle2(true,'Speaking');	mom11.classList.remove('bigbang');
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },4000);
//setTimeout(function(){
//$('#reproducir0').css('opacity','1');
//activar1[5] = 1; 
//$('#reproducir0').css('pointer-events','auto');
//},4500);
contadorsiño++;
}else
if(((recept!="i_didn't_go_to_the_gym")||(recept!="i_did_not_go_to_the_gym"))&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('trompeta').play(); preguntaAle2(false,'Speaking');	mom11.classList.remove('bigbang');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },8000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño1').innerHTML='The correct answer is:'; 
document.getElementById('parrafiño2').innerHTML="<b>I didn't go to the gym?</b>"; 
$('.microfonito').css('display','none');
//$('#reproducir0').css('opacity','1');
//activar1[5] = 1; 

//$('#reproducir0').css('pointer-events','auto');
document.getElementById('reproducir0').click(); 
$('#blanco').css('background','#f4eddd');
$('#blanco').css('box-shadow','0 0 7px rgba(0,0,0,0.5)');
$('#cuadroPreguntas').css('display','inline');
$('#campi').css('margin-top','6%');
$('#campi').css('margin-bottom','6%');
$('#information').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------
if (ejspeaking[6]==1){ 	
if((recept=="susan_talked_to_her_friends")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('aplausos').play(); preguntaAle2(true,'Speaking');	mom11.classList.remove('bigbang');
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },4000);
//setTimeout(function(){
//$('#reproducir0').css('opacity','1');
//activar1[6] = 1; 
//$('#reproducir0').css('pointer-events','auto');
//},4500);
contadorsiño++;
}else
if((recept!="susan_talked_to_her_friends")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('trompeta').play(); preguntaAle2(false,'Speaking');	mom11.classList.remove('bigbang');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },8000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño1').innerHTML='The correct answer is:'; 
document.getElementById('parrafiño2').innerHTML='<b>Susan talked to her friends.</b>'; 
$('.microfonito').css('display','none');
//$('#reproducir0').css('opacity','1');
//activar1[6] = 1; 

//$('#reproducir0').css('pointer-events','auto');
document.getElementById('reproducir0').click(); 
$('#blanco').css('background','#f4eddd');
$('#blanco').css('box-shadow','0 0 7px rgba(0,0,0,0.5)');
$('#cuadroPreguntas').css('display','inline');
$('#campi').css('margin-top','6%');
$('#campi').css('margin-bottom','6%');
$('#information').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejspeaking[7]==1){ 	
if(((recept=="anna_didn't_eat_fast_food")||(recept=="anna_did_not_eat_fast_food")||(recept=="ana_didn't_eat_fast_food")||(recept=="ana_did_not_eat_fast_food"))&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('aplausos').play(); preguntaAle2(true,'Speaking');	mom11.classList.remove('bigbang');
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },4000);
//setTimeout(function(){
//$('#reproducir0').css('opacity','1');
//activar1[7] = 1; 
//$('#reproducir0').css('pointer-events','auto');
//},4500);
contadorsiño++;
}else
if(((recept!="anna_didn't_eat_fast_food")||(recept!="anna_did_not_eat_fast_food")||(recept!="ana_didn't_eat_fast_food")||(recept!="ana_did_not_eat_fast_food"))&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('trompeta').play(); preguntaAle2(false,'Speaking');	mom11.classList.remove('bigbang');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },9000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño1').innerHTML='The correct answer is:'; 
document.getElementById('parrafiño2').innerHTML="<b>Ana didn't eat fast food.</b>"; 
$('.microfonito').css('display','none');
//$('#reproducir0').css('opacity','1');
//activar1[7] = 1; 

//$('#reproducir0').css('pointer-events','auto');
document.getElementById('reproducir0').click(); 
$('#blanco').css('background','#f4eddd');
$('#blanco').css('box-shadow','0 0 7px rgba(0,0,0,0.5)');
$('#cuadroPreguntas').css('display','inline');
$('#campi').css('margin-top','6%');
$('#campi').css('margin-bottom','6%');
$('#information').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------
if (ejspeaking[8]==1){ 	
if(((recept=="jenny_is_going_to_study_french_in_summer")||(recept=="jenny's_going_to_study_French_in_summer"))&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('aplausos').play(); preguntaAle2(true,'Speaking');	mom11.classList.remove('bigbang');
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },4000);
//setTimeout(function(){
//$('#reproducir0').css('opacity','1');
//activar1[8] = 1; 
//$('#reproducir0').css('pointer-events','auto');
//},4500);
contadorsiño++;
}else
if(((recept!="jenny_is_going_to_study_french_in_summer")||(recept!="jenny's_going_to_study_French_in_summer"))&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('trompeta').play(); preguntaAle2(false,'Speaking');	mom11.classList.remove('bigbang');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },10500);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño1').innerHTML='The correct answer is:'; 
document.getElementById('parrafiño2').innerHTML='<b>Jenny is going to study French in summer.</b>'; 
$('.microfonito').css('display','none');
//$('#reproducir0').css('opacity','1');
//activar1[8] = 1; 
 
//$('#reproducir0').css('pointer-events','auto');
document.getElementById('reproducir0').click();
$('#blanco').css('background','#f4eddd');
$('#blanco').css('box-shadow','0 0 7px rgba(0,0,0,0.5)');
$('#cuadroPreguntas').css('display','inline');
$('#campi').css('margin-top','6%');
$('#campi').css('margin-bottom','6%');
$('#information').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------
if (ejspeaking[9]==1){ 	
if(((recept=="what_are_you_going_to_do_tomorrow_morning")||(recept=="what_are_you_going_to_do_tomorrow_morning?"))&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('aplausos').play(); preguntaAle2(true,'Speaking');	mom11.classList.remove('bigbang');
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },4000);
//setTimeout(function(){
//$('#reproducir0').css('opacity','1');
//activar1[9] = 1; 
//$('#reproducir0').css('pointer-events','auto');
//},4500);
contadorsiño++;
}else
if(((recept!="what_are_you_going_to_do_tomorrow_morning")||(recept!="what_are_you_going_to_do_tomorrow_morning?"))&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('trompeta').play(); preguntaAle2(false,'Speaking');	mom11.classList.remove('bigbang');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },9000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño1').innerHTML='The correct answer is:'; 
document.getElementById('parrafiño2').innerHTML='<b>What are you going to do tomorrow morning?</b>'; 
$('.microfonito').css('display','none');
//$('#reproducir0').css('opacity','1');
//activar1[9] = 1; 

//$('#reproducir0').css('pointer-events','auto');
document.getElementById('reproducir0').click(); 
$('#blanco').css('background','#f4eddd');
$('#blanco').css('box-shadow','0 0 7px rgba(0,0,0,0.5)');
$('#cuadroPreguntas').css('display','inline');
$('#campi').css('margin-top','6%');
$('#campi').css('margin-bottom','6%');
$('#information').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------
if (ejspeaking[10]==1){ 	
if(((recept=="we_are_going_to_celebrate_valentine's_day_with_some_friends")||(recept=="we're_going_to_celebrate_valentine's_day_with_some_friends"))&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('aplausos').play(); preguntaAle2(true,'Speaking');	mom11.classList.remove('bigbang');
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },4000);
//setTimeout(function(){
//$('#reproducir0').css('opacity','1');
//activar1[10] = 1; 
//$('#reproducir0').css('pointer-events','auto');
//},4500);
contadorsiño++;
}else
if(((recept!="we_are_going_to_celebrate_valentine's_day_with_some_friends")||(recept=="we're_going_to_celebrate_valentine's_day_with_some_friends"))&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('trompeta').play(); preguntaAle2(false,'Speaking');	mom11.classList.remove('bigbang');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },10000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño1').innerHTML='The correct answer is:'; 
document.getElementById('parrafiño2').innerHTML="<b>We are going to celebrate Valentine's Day with some friends.</b>"; 
$('.microfonito').css('display','none');
//$('#reproducir0').css('opacity','1');
//activar1[10] = 1; 

//$('#reproducir0').css('pointer-events','auto');
document.getElementById('reproducir0').click(); 
$('#blanco').css('background','#f4eddd');
$('#blanco').css('box-shadow','0 0 7px rgba(0,0,0,0.5)');
$('#cuadroPreguntas').css('display','inline');
$('#campi').css('margin-top','6%');
$('#campi').css('margin-bottom','6%');
$('#information').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------
if (ejspeaking[11]==1){ 	
if(((recept=="sam_is_going_to_buy_a_new_car_next_year")||(recept=="sam's_going_to_buy_a_new_car_next_year"))&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('aplausos').play(); preguntaAle2(true,'Speaking');	mom11.classList.remove('bigbang');
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },4000);
//setTimeout(function(){
//$('#reproducir0').css('opacity','1');
//activar1[11] = 1; 
//$('#reproducir0').css('pointer-events','auto');
//},4500);
contadorsiño++;
}else
if(((recept!="sam_is_going_to_buy_a_new_car_next_year")||(recept!="sam's_going_to_buy_a_new_car_next_year"))&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('trompeta').play(); preguntaAle2(false,'Speaking');	mom11.classList.remove('bigbang');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },9000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño1').innerHTML='The correct answer is:'; 
document.getElementById('parrafiño2').innerHTML='<b>Sam is going to buy a new car next year.</b>'; 
$('.microfonito').css('display','none');
//$('#reproducir0').css('opacity','1');
//activar1[11] = 1; 
//$('#reproducir0').css('pointer-events','auto');
document.getElementById('reproducir0').click();

$('#blanco').css('background','#f4eddd');
$('#blanco').css('box-shadow','0 0 7px rgba(0,0,0,0.5)');
$('#cuadroPreguntas').css('display','inline');
$('#campi').css('margin-top','6%');
$('#campi').css('margin-bottom','6%');
$('#information').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------
}