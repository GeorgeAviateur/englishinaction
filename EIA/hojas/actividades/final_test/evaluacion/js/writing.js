
function writing(){
/*m=0;
s=0;*/

respuestiña=document.getElementById("input1").value;
respuestiña=respuestiña.replace(/\s/g,"_");

if (ejwriting[0]==1){
if(((respuestiña=="What_kind_of_movies_do_you_like?")||(respuestiña=="WHAT_KIND_OF_MOVIES_DO_YOU_LIKE?"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 

$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ 
$('#continuar').css('display','none');
$('#continuar1').css('display','inline'); 
//},4000);
//setTimeout(function(){
$('#reproducir0').css('opacity','0.9');
activar[0] = 1; 
$('#reproducir0').css('pointer-events','auto');
},4000);
contadorsiño++;
}else
if(((respuestiña!="What_kind_of_movies_do_you_like?")||(respuestiña!="WHAT_KIND_OF_MOVIES_DO_YOU_LIKE?"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },10000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño1').innerHTML='<b>What kind of movies do you like?</b>'; 
$('#reproducir0').css('opacity','0.9');activar[0] = 1; 
document.getElementById('reproducir0').click(); 
$('#reproducir0').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}
//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[1]==1){ 	
if(((respuestiña=="No,_I_don't_like_to_run_in_the_morning")||(respuestiña=="No,_I_don't_like_to_run_in_the_morning.")||(respuestiña=="No,_I_do_not_like_to_run_in_the_morning")||(respuestiña=="No,_I_do_not_like_to_run_in_the_morning.")||(respuestiña=="NO,_I_DON'T_LIKE_TO_RUN_IN_THE_MORNING") ||(respuestiña=="NO,_I_DON'T_LIKE_TO_RUN_IN_THE_MORNING.")||(respuestiña=="NO,_I_DO_NOT_LIKE_TO_RUN_IN_THE_MORNING") ||(respuestiña=="NO,_I_DO_NOT_LIKE_TO_RUN_IN_THE_MORNING.")|| (respuestiña=="No,_I_don't_like_running_in_the_morning")||(respuestiña=="No,_I_don't_like_running_in_the_morning.")||(respuestiña=="No,_I_do_not_like_running_in_the_morning")||(respuestiña=="No,_I_do_not_like_running_in_the_morning.")||(respuestiña=="NO,_I_DON'T_LIKE_RUNNING_IN_THE_MORNING") ||(respuestiña=="NO,_I_DON'T_LIKE_RUNNING_IN_THE_MORNING.")||(respuestiña=="NO,_I_DO_NOT_LIKE_RUNNING_IN_THE_MORNING") ||(respuestiña=="NO,_I_DO_NOT_LIKE_RUNNING_IN_THE_MORNING.")||(respuestiña=="Yes,_I_like_to_run_in_the_morning")||(respuestiña=="Yes,_I_like_to_run_in_the_morning.")||(respuestiña=="YES,_I_LIKE_TO_RUN_IN_THE_MORNING")||(respuestiña=="YES,_I_LIKE_TO_RUN_IN_THE_MORNING.")||(respuestiña=="Yes,_I_like_running_in_the_morning")||(respuestiña=="Yes,_I_like_running_in_the_morning.")||(respuestiña=="YES,_I_LIKE_RUNNING_IN_THE_MORNING")||(respuestiña=="YES,_I_LIKE_RUNNING_IN_THE_MORNING."))&&(contadorsiño==0)){

if((respuestiña=="No,_I_don't_like_to_run_in_the_morning")||(respuestiña=="No,_I_don't_like_to_run_in_the_morning.")||(respuestiña=="No,_I_do_not_like_to_run_in_the_morning")||(respuestiña=="No,_I_do_not_like_to_run_in_the_morning.")||(respuestiña=="NO,_I_DON'T_LIKE_TO_RUN_IN_THE_MORNING") ||(respuestiña=="NO,_I_DON'T_LIKE_TO_RUN_IN_THE_MORNING.")||(respuestiña=="NO,_I_DO_NOT_LIKE_TO_RUN_IN_THE_MORNING") ||(respuestiña=="NO,_I_DO_NOT_LIKE_TO_RUN_IN_THE_MORNING.")){
activar[1] = 1; 
}
if((respuestiña=="No,_I_don't_like_running_in_the_morning")||(respuestiña=="No,_I_don't_like_running_in_the_morning.")||(respuestiña=="No,_I_do_not_like_running_in_the_morning")||(respuestiña=="No,_I_do_not_like_running_in_the_morning.")||(respuestiña=="NO,_I_DON'T_LIKE_RUNNING_IN_THE_MORNING") ||(respuestiña=="NO,_I_DON'T_LIKE_RUNNING_IN_THE_MORNING.")||(respuestiña=="NO,_I_DO_NOT_LIKE_RUNNING_IN_THE_MORNING") ||(respuestiña=="NO,_I_DO_NOT_LIKE_RUNNING_IN_THE_MORNING.")){
suplente1 = 1;
}
if((respuestiña=="Yes,_I_like_to_run_in_the_morning")||(respuestiña=="Yes,_I_like_to_run_in_the_morning.")||(respuestiña=="YES,_I_LIKE_TO_RUN_IN_THE_MORNING")||(respuestiña=="YES,_I_LIKE_TO_RUN_IN_THE_MORNING.")){
suplente2 = 1; 
}
if((respuestiña=="Yes,_I_like_running_in_the_morning")||(respuestiña=="Yes,_I_like_running_in_the_morning.")||(respuestiña=="YES,_I_LIKE_RUNNING_IN_THE_MORNING")||(respuestiña=="YES,_I_LIKE_RUNNING_IN_THE_MORNING.")){
suplente3 = 1; 
}

tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ 
$('#continuar').css('display','none');
$('#continuar1').css('display','inline'); 
//},4000);
//setTimeout(function(){
$('#reproducir0').css('opacity','0.9');
//activar[1] = 1; 
$('#reproducir0').css('pointer-events','auto');
},4000);
contadorsiño++;
}else
if(((respuestiña!="No,_I_don't_like_to_run_in_the_morning")||(respuestiña!="No,_I_don't_like_to_run_in_the_morning.")||(respuestiña!="No,_I_do_not_like_to_run_in_the_morning")||(respuestiña!="No,_I_do_not_like_to_run_in_the_morning.")||(respuestiña!="NO,_I_DON'T_LIKE_TO_RUN_IN_THE_MORNING") ||(respuestiña!="NO,_I_DON'T_LIKE_TO_RUN_IN_THE_MORNING.")||(respuestiña!="NO,_I_DO_NOT_LIKE_TO_RUN_IN_THE_MORNING") ||(respuestiña!="NO,_I_DO_NOT_LIKE_TO_RUN_IN_THE_MORNING.")|| (respuestiña!="No,_I_don't_like_running_in_the_morning")||(respuestiña!="No,_I_don't_like_running_in_the_morning.")||(respuestiña!="No,_I_do_not_like_running_in_the_morning")||(respuestiña!="No,_I_do_not_like_running_in_the_morning.")||(respuestiña!="NO,_I_DON'T_LIKE_RUNNING_IN_THE_MORNING") ||(respuestiña!="NO,_I_DON'T_LIKE_RUNNING_IN_THE_MORNING.")||(respuestiña!="NO,_I_DO_NOT_LIKE_RUNNING_IN_THE_MORNING") ||(respuestiña!="NO,_I_DO_NOT_LIKE_RUNNING_IN_THE_MORNING.")||(respuestiña!="Yes,_I_like_to_run_in_the_morning")||(respuestiña!="Yes,_I_like_to_run_in_the_morning.")||(respuestiña!="YES,_I_LIKE_TO_RUN_IN_THE_MORNING")||(respuestiña!="YES,_I_LIKE_TO_RUN_IN_THE_MORNING.")||(respuestiña!="Yes,_I_like_running_in_the_morning")||(respuestiña!="Yes,_I_like_running_in_the_morning.")||(respuestiña!="YES,_I_LIKE_RUNNING_IN_THE_MORNING")||(respuestiña!="YES,_I_LIKE_RUNNING_IN_THE_MORNING."))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },10000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>No, I don't like to run in the morning.</b>"; 
$('#reproducir0').css('opacity','0.9');activar[1] = 1; 
document.getElementById('reproducir0').click(); 
$('#reproducir0').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[2]==1){ 	
if(( (respuestiña=="She_likes_to_listen_to_music_in_her_free_time")||(respuestiña=="SHE_LIKES_TO_LISTEN_TO_MUSIC_IN_HER_FREE_TIME")||(respuestiña=="She_likes_to_listen_to_music_in_her_free_time.")||(respuestiña=="SHE_LIKES_TO_LISTEN_TO_MUSIC_IN_HER_FREE_TIME.")   ||(respuestiña=="She_likes_listening_to_music_in_her_free_time")||(respuestiña=="SHE_LIKES_LISTENING_TO_MUSIC_IN_HER_FREE_TIME")||(respuestiña=="She_likes_listening_to_music_in_her_free_time.")||(respuestiña=="SHE_LIKES_LISTENING_TO_MUSIC_IN_HER_FREE_TIME."))&&(contadorsiño==0)){

if((respuestiña=="She_likes_to_listen_to_music_in_her_free_time")||(respuestiña=="SHE_LIKES_TO_LISTEN_TO_MUSIC_IN_HER_FREE_TIME")||(respuestiña=="She_likes_to_listen_to_music_in_her_free_time.")||(respuestiña=="SHE_LIKES_TO_LISTEN_TO_MUSIC_IN_HER_FREE_TIME.")){
activar[2] = 1; 
}
if((respuestiña=="She_likes_listening_to_music_in_her_free_time")||(respuestiña=="SHE_LIKES_LISTENING_TO_MUSIC_IN_HER_FREE_TIME")||(respuestiña=="She_likes_listening_to_music_in_her_free_time.")||(respuestiña=="SHE_LIKES_LISTENING_TO_MUSIC_IN_HER_FREE_TIME.")){
suplente1 = 1; 
//activar[2] = 0; 
}


tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ 
$('#continuar').css('display','none');
$('#continuar1').css('display','inline'); 
//},4000);
//setTimeout(function(){
$('#reproducir0').css('opacity','0.9');
//activar[2] = 1; 
$('#reproducir0').css('pointer-events','auto');
},4000);
contadorsiño++;
}else
if(( (respuestiña!="She_likes_to_listen_to_music_in_her_free_time")||(respuestiña!="SHE_LIKES_TO_LISTEN_TO_MUSIC_IN_HER_FREE_TIME")||(respuestiña!="She_likes_to_listen_to_music_in_her_free_time.")||(respuestiña!="SHE_LIKES_TO_LISTEN_TO_MUSIC_IN_HER_FREE_TIME.")   ||(respuestiña!="She_likes_listening_to_music_in_her_free_time")||(respuestiña!="SHE_LIKES_LISTENING_TO_MUSIC_IN_HER_FREE_TIME")||(respuestiña!="She_likes_listening_to_music_in_her_free_time.")||(respuestiña!="SHE_LIKES_LISTENING_TO_MUSIC_IN_HER_FREE_TIME."))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },9000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>She likes to listen to music in her free time.</b>"; 
$('#reproducir0').css('opacity','0.9');activar[2] = 1; 
document.getElementById('reproducir0').click(); 
$('#reproducir0').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[3]==1){ 	
if(((respuestiña=="Does_he_like_fast_food?")||(respuestiña=="DOES_HE_LIKE_FAST_FOOD?"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ 
$('#continuar').css('display','none');
$('#continuar1').css('display','inline'); 
//},4000);
//setTimeout(function(){
$('#reproducir0').css('opacity','0.9');
activar[3] = 1; 
$('#reproducir0').css('pointer-events','auto');
},4000);
contadorsiño++;
}else
if(((respuestiña!="Does_he_like_fast_food?")||(respuestiña!="DOES_HE_LIKE_FAST_FOOD?"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },8000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>Does he like fast food?</b>"; 
$('#reproducir0').css('opacity','0.9');activar[3] = 1; 
document.getElementById('reproducir0').click(); 
$('#reproducir0').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[4]==1){ 	
if(((respuestiña=="No,_she_doesn't_like_salsa._She_likes_dancing_bachata")||(respuestiña=="No,_she_does_not_like_salsa._She_likes_dancing_bachata")||(respuestiña=="NO,_SHE_DOESN'T_LIKE_SALSA._SHE_LIKES_DANCING_BACHATA")||(respuestiña=="NO,_SHE_DOES_NOT_LIKE_SALSA._SHE_LIKES_DANCING_BACHATA")    ||(respuestiña=="No,_she_doesn't_like_salsa._She_likes_dancing_bachata.")||(respuestiña=="No,_she_does_not_like_salsa._She_likes_dancing_bachata.")||(respuestiña=="NO,_SHE_DOESN'T_LIKE_SALSA._SHE_LIKES_DANCING_BACHATA.")||(respuestiña=="NO,_SHE_DOES_NOT_LIKE_SALSA._SHE_LIKES_DANCING_BACHATA.")||    (respuestiña=="No,_she_doesn't_like_salsa._She_likes_to_dance_bachata")||(respuestiña=="No,_she_does_not_like_salsa._She_likes_to_dance_bachata")||(respuestiña=="NO,_SHE_DOESN'T_LIKE_SALSA._SHE_LIKES_TO_DANCE_BACHATA")||(respuestiña=="NO,_SHE_DOES_NOT_LIKE_SALSA._SHE_LIKES_TO_DANCE_BACHATA")     ||(respuestiña=="No,_she_doesn't_like_salsa._She_likes_to_dance_bachata.")||(respuestiña=="No,_she_does_not_like_salsa._She_likes_to_dance_bachata.")||(respuestiña=="NO,_SHE_DOESN'T_LIKE_SALSA._SHE_LIKES_TO_DANCE_BACHATA.")||(respuestiña=="NO,_SHE_DOES_NOT_LIKE_SALSA._SHE_LIKES_TO_DANCE_BACHATA."))&&(contadorsiño==0)){


if((respuestiña=="No,_she_doesn't_like_salsa._She_likes_dancing_bachata")||(respuestiña=="No,_she_does_not_like_salsa._She_likes_dancing_bachata")||(respuestiña=="NO,_SHE_DOESN'T_LIKE_SALSA._SHE_LIKES_DANCING_BACHATA")||(respuestiña=="NO,_SHE_DOES_NOT_LIKE_SALSA._SHE_LIKES_DANCING_BACHATA")     ||(respuestiña=="No,_she_doesn't_like_salsa._She_likes_dancing_bachata.")||(respuestiña=="No,_she_does_not_like_salsa._She_likes_dancing_bachata.")||(respuestiña=="NO,_SHE_DOESN'T_LIKE_SALSA._SHE_LIKES_DANCING_BACHATA.")||(respuestiña=="NO,_SHE_DOES_NOT_LIKE_SALSA._SHE_LIKES_DANCING_BACHATA.")){
activar[4] = 1; 
}
if((respuestiña=="No,_she_doesn't_like_salsa._She_likes_to_dance_bachata")||(respuestiña=="No,_she_does_not_like_salsa._She_likes_to_dance_bachata")||(respuestiña=="NO,_SHE_DOESN'T_LIKE_SALSA._SHE_LIKES_TO_DANCE_BACHATA")||(respuestiña=="NO,_SHE_DOES_NOT_LIKE_SALSA._SHE_LIKES_TO_DANCE_BACHATA")     ||(respuestiña=="No,_she_doesn't_like_salsa._She_likes_to_dance_bachata.")||(respuestiña=="No,_she_does_not_like_salsa._She_likes_to_dance_bachata.")||(respuestiña=="NO,_SHE_DOESN'T_LIKE_SALSA._SHE_LIKES_TO_DANCE_BACHATA.")||(respuestiña=="NO,_SHE_DOES_NOT_LIKE_SALSA._SHE_LIKES_TO_DANCE_BACHATA.")){
suplente1 = 1; 
//activar[2] = 0; 
}


tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ 
$('#continuar').css('display','none');
$('#continuar1').css('display','inline'); 
//},4000);
//setTimeout(function(){
$('#reproducir0').css('opacity','0.9');
//activar[4] = 1; 
$('#reproducir0').css('pointer-events','auto');
},4000);
contadorsiño++;
}else
if(((respuestiña!="No,_she_doesn't_like_salsa._She_likes_dancing_bachata")||(respuestiña!="No,_she_does_not_like_salsa._She_likes_dancing_bachata")||(respuestiña!="NO,_SHE_DOESN'T_LIKE_SALSA._SHE_LIKES_DANCING_BACHATA")||(respuestiña!="NO,_SHE_DOES_NOT_LIKE_SALSA._SHE_LIKES_DANCING_BACHATA")    ||(respuestiña!="No,_she_doesn't_like_salsa._She_likes_dancing_bachata.")||(respuestiña!="No,_she_does_not_like_salsa._She_likes_dancing_bachata.")||(respuestiña!="NO,_SHE_DOESN'T_LIKE_SALSA._SHE_LIKES_DANCING_BACHATA.")||(respuestiña!="NO,_SHE_DOES_NOT_LIKE_SALSA._SHE_LIKES_DANCING_BACHATA.")||    (respuestiña!="No,_she_doesn't_like_salsa._She_likes_to_dance_bachata")||(respuestiña!="No,_she_does_not_like_salsa._She_likes_to_dance_bachata")||(respuestiña!="NO,_SHE_DOESN'T_LIKE_SALSA._SHE_LIKES_TO_DANCE_BACHATA")||(respuestiña!="NO,_SHE_DOES_NOT_LIKE_SALSA._SHE_LIKES_TO_DANCE_BACHATA")     ||(respuestiña!="No,_she_doesn't_like_salsa._She_likes_to_dance_bachata.")||(respuestiña!="No,_she_does_not_like_salsa._She_likes_to_dance_bachata.")||(respuestiña!="NO,_SHE_DOESN'T_LIKE_SALSA._SHE_LIKES_TO_DANCE_BACHATA.")||(respuestiña!="NO,_SHE_DOES_NOT_LIKE_SALSA._SHE_LIKES_TO_DANCE_BACHATA."))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },11000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>No she doesn't like salsa. She likes to dance bachata.</b>"; 
$('#reproducir0').css('opacity','0.9');
//activar[4] = 1; 
suplente1=1;
document.getElementById('reproducir0').click(); 
$('#reproducir0').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[5]==1){ 	
if(((respuestiña=="She_doesn't_like_to_dance_tango")||(respuestiña=="She_does_not_like_to_dance_tango")||(respuestiña=="She_doesn't_like_to_dance_tango.")||(respuestiña=='She_does_not_like_to_dance_tango.')||(respuestiña=="SHE_DOESN'T_LIKE_TO_DANCE_TANGO")||(respuestiña=="SHE_DOES_NOT_LIKE_TO_DANCE_TANGO")||(respuestiña=="SHE_DOESN'T_LIKE_TO_DANCE_TANGO.")||(respuestiña=="SHE_DOES_NOT_LIKE_TO_DANCE_TANGO."))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ 
$('#continuar').css('display','none');
$('#continuar1').css('display','inline'); 
//},4000);
//setTimeout(function(){
$('#reproducir0').css('opacity','0.9');
activar[5] = 1; 
$('#reproducir0').css('pointer-events','auto');
},4000);
contadorsiño++;
}else
if(((respuestiña!="She_doesn't_like_to_dance_tango")||(respuestiña!="She_does_not_like_to_dance_tango")||(respuestiña!="She_doesn't_like_to_dance_tango.")||(respuestiña!='She_does_not_like_to_dance_tango.')||(respuestiña!="SHE_DOESN'T_LIKE_TO_DANCE_TANGO")||(respuestiña!="SHE_DOES_NOT_LIKE_TO_DANCE_TANGO")||(respuestiña!="SHE_DOESN'T_LIKE_TO_DANCE_TANGO.")||(respuestiña!="SHE_DOES_NOT_LIKE_TO_DANCE_TANGO."))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },9500);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>She doesn't like to dance tango.</b>"; 
$('#reproducir0').css('opacity','0.9');activar[5] = 1; 
document.getElementById('reproducir0').click(); 
$('#reproducir0').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[6]==1){ 	
if(((respuestiña=="What_kind_of_movies_do_you_like?")||(respuestiña=="WHAT_KIND_OF_MOVIES_DO_YOU_LIKE?"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ 
$('#continuar').css('display','none');
$('#continuar1').css('display','inline'); 
//},4000);
//setTimeout(function(){
$('#reproducir0').css('opacity','0.9');
activar[6] = 1; 
$('#reproducir0').css('pointer-events','auto');
},4000);
contadorsiño++;
}else
if(((respuestiña!="What_kind_of_movies_do_you_like?")||(respuestiña!="WHAT_KIND_OF_MOVIES_DO_YOU_LIKE?"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },9000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>What kind of movies do you like?</b>"; 
$('#reproducir0').css('opacity','0.9');activar[6] = 1; 
document.getElementById('reproducir0').click(); 
$('#reproducir0').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[7]==1){ 	
if(((respuestiña=="She_likes_weight_lifting.")||(respuestiña=="She_likes_weight_lifting")||(respuestiña=="SHE_LIKES_WEIGHT_LIFTING.")||(respuestiña=="SHE_LIKES_WEIGHT_LIFTING"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ 
$('#continuar').css('display','none');
$('#continuar1').css('display','inline'); 
//},4000);
//setTimeout(function(){
$('#reproducir0').css('opacity','0.9');
activar[7] = 1; 
$('#reproducir0').css('pointer-events','auto');
},4000);
contadorsiño++;
}else
if(((respuestiña!="She_likes_weight_lifting.")||(respuestiña!="She_likes_weight_lifting")||(respuestiña!="SHE_LIKES_WEIGHT_LIFTING.")||(respuestiña!="SHE_LIKES_WEIGHT_LIFTING"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },9000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>She likes the weight lifting.</b>"; 
$('#reproducir0').css('opacity','0.9');activar[7] = 1; 
document.getElementById('reproducir0').click(); 
$('#reproducir0').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[8]==1){ 
if(contador>0){
audio.pause();
audio.currentTime = 0;
}	
if(((respuestiña=="Steve_likes_to_go_to_the_gym_every_day.")||(respuestiña=="Steve_likes_to_go_to_the_gym_every_day")||(respuestiña=="STEVE_LIKES_TO_GO_TO_THE_GYM_EVERY_DAY.")||(respuestiña=="STEVE_LIKES_TO_GO_TO_THE_GYM_EVERY_DAY"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
contadorsiño++;
}else
if(((respuestiña!="Steve_likes_to_go_to_the_gym_every_day.")||(respuestiña!="Steve_likes_to_go_to_the_gym_every_day")||(respuestiña!="STEVE_LIKES_TO_GO_TO_THE_GYM_EVERY_DAY.")||(respuestiña!="STEVE_LIKES_TO_GO_TO_THE_GYM_EVERY_DAY"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },9000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>Steve likes to go to the gym every day.</b>"; 
//audio.play();
document.getElementById('reproducir0').click(); 
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[9]==1){ 
if(contador>0){
audio.pause();
audio.currentTime = 0;
}	
if(((respuestiña=="Carlos_and_Tania_hate_the_spinach_soup")||(respuestiña=="Carlos_and_Tania_hate_the_spinach_soup.")||(respuestiña=="CARLOS_AND_TANIA_HATE_THE_SPINACH_SOUP")||(respuestiña=="CARLOS_AND_TANIA_HATE_THE_SPINACH_SOUP."))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
contadorsiño++;
}else
if(((respuestiña!="Carlos_and_Tania_hate_the_spinach_soup")||(respuestiña!="Carlos_and_Tania_hate_the_spinach_soup.")||(respuestiña!="CARLOS_AND_TANIA_HATE_THE_SPINACH_SOUP")||(respuestiña!="CARLOS_AND_TANIA_HATE_THE_SPINACH_SOUP."))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },9000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>Carlos and Tania hate the spinach soup.</b>";  
document.getElementById('reproducir0').click(); 
//audio.play();
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[10]==1){
if(contador>0){
audio.pause();
audio.currentTime = 0;
} 	
if(((respuestiña=="My_brother_likes_watching_science_fiction_movies.")||(respuestiña=="My_brother_likes_watching_science_fiction_movies")||(respuestiña=="MY_BROTHER_LIKES_WATCHING_SCIENCE_FICTION_MOVIES.")||(respuestiña=="MY_BROTHER_LIKES_WATCHING_SCIENCE_FICTION_MOVIES"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
contadorsiño++;
}else
if(((respuestiña!="My_brother_likes_watching_science_fiction_movies.")||(respuestiña!="My_brother_likes_watching_science_fiction_movies")||(respuestiña!="MY_BROTHER_LIKES_WATCHING_SCIENCE_FICTION_MOVIES.")||(respuestiña!="MY_BROTHER_LIKES_WATCHING_SCIENCE_FICTION_MOVIES"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },9000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>My brother likes watching science fiction movies.</b>";   
document.getElementById('reproducir0').click(); 
//audio.play();
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[11]==1){
if(contador>0){
audio.pause();
audio.currentTime = 0;
} 	
if(((respuestiña=="Emily_and_Steve_like_to_eat_healthy_food.")||(respuestiña=="Emily_and_Steve_like_to_eat_healthy_food")||(respuestiña=="EMILY_AND_STEVE_LIKE_TO_EAT_HEALTHY_FOOD.")||(respuestiña=="EMILY_AND_STEVE_LIKE_TO_EAT_HEALTHY_FOOD"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
contadorsiño++;
}else
if(((respuestiña!="Emily_and_Steve_like_to_eat_healthy_food.")||(respuestiña!="Emily_and_Steve_like_to_eat_healthy_food")||(respuestiña!="EMILY_AND_STEVE_LIKE_TO_EAT_HEALTHY_FOOD.")||(respuestiña!="EMILY_AND_STEVE_LIKE_TO_EAT_HEALTHY_FOOD"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline');},9000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>Emily and Steve like to eat healthy food.</b>";  
document.getElementById('reproducir0').click(); 
//audio.play();	
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[12]==1){ 	
if(((respuestiña=="Where_was_she_last_night?")||(respuestiña=="WHERE_WAS_SHE_LAST_NIGHT?"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
setTimeout(function(){
$('#reproducir0').css('opacity','0.9');
activar[12] = 1; 
$('#reproducir0').css('pointer-events','auto');
},4500);
contadorsiño++;
}else
if(((respuestiña!="Where_was_she_last_night?")||(respuestiña!="WHERE_WAS_SHE_LAST_NIGHT?"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },7500);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño1').innerHTML='<b>Where was she last night?</b>'; 
$('#reproducir0').css('opacity','0.9');
activar[12] = 1; 
document.getElementById('reproducir0').click(); 
$('#reproducir0').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[13]==1){ 	
if(((respuestiña=="No,_he_didn't._He_drank_a_beer")||(respuestiña=="No,_he_did_not._He_drank_a_beer")||(respuestiña=="NO,_HE_DIDN'T._HE_DRANK_A_BEER")||(respuestiña=="NO,_HE_DID_NOT._HE_DRANK_A_BEER")||(respuestiña=="No,_he_didn't._He_drank_a_beer.")||(respuestiña=="No,_he_did_not._He_drank_a_beer.")||(respuestiña=="NO,_HE_DIDN'T._HE_DRANK_A_BEER.")||(respuestiña=="NO,_HE_DID_NOT._HE_DRANK_A_BEER."))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ 
$('#continuar').css('display','none');
$('#continuar1').css('display','inline'); 
//},4000);
//setTimeout(function(){
$('#reproducir0').css('opacity','0.9');
activar[13] = 1; 
$('#reproducir0').css('pointer-events','auto');
},4000);
contadorsiño++;
}else
if(((respuestiña!="No,_he_didn't._He_drank_a_beer")||(respuestiña!="No,_he_did_not._He_drank_a_beer")||(respuestiña!="NO,_HE_DIDN'T._HE_DRANK_A_BEER")||(respuestiña!="NO,_HE_DID_NOT._HE_DRANK_A_BEER")||(respuestiña!="No,_he_didn't._He_drank_a_beer.")||(respuestiña!="No,_he_did_not._He_drank_a_beer.")||(respuestiña!="NO,_HE_DIDN'T._HE_DRANK_A_BEER.")||(respuestiña!="NO,_HE_DID_NOT._HE_DRANK_A_BEER."))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },9500);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>No, he didn't. He drank a beer.<br><br></b>"; 
$('#reproducir0').css('opacity','0.9');
activar[13] = 1; 
document.getElementById('reproducir0').click(); 
$('#reproducir0').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[14]==1){ 	
if(((respuestiña=="She_watched_AVATAR_at_the_movies")||(respuestiña=="She_watched_AVATAR_at_the_movies.")||(respuestiña=="SHE_WATCHED_AVATAR_AT_THE_MOVIES")||(respuestiña=="SHE_WATCHED_AVATAR_AT_THE_MOVIES."))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ 
$('#continuar').css('display','none');
$('#continuar1').css('display','inline'); 
//},4000);
//setTimeout(function(){
$('#reproducir0').css('opacity','0.9');
activar[14] = 1; 
$('#reproducir0').css('pointer-events','auto');
},4000);
contadorsiño++;
}else
if(((respuestiña!="She_watched_AVATAR_at_the_movies")||(respuestiña!="She_watched_AVATAR_at_the_movies.")||(respuestiña!="SHE_WATCHED_AVATAR_AT_THE_MOVIES")||(respuestiña!="SHE_WATCHED_AVATAR_AT_THE_MOVIES."))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },8000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML='<b>She watched AVATAR at the movies.</b>'; 
$('#reproducir0').css('opacity','0.9');
activar[14] = 1; 
document.getElementById('reproducir0').click(); 
$('#reproducir0').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[15]==1){ 	
if(((respuestiña=="Did_you_travel_to_Paris_on_vacation?")||(respuestiña=="Did_you_travel_to_paris_on_vacation?")||(respuestiña=="DID_YOU_TRAVEL_TO_PARIS_ON_VACATION?")||(respuestiña=="DID_YOU_TRAVEL_TO_PARIS_ON_VACATION?"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ 
$('#continuar').css('display','none');
$('#continuar1').css('display','inline'); 
//},4000);
//setTimeout(function(){
$('#reproducir0').css('opacity','0.9');
activar[15] = 1; 
$('#reproducir0').css('pointer-events','auto');
},4000);
contadorsiño++;
}else
if(((respuestiña!="Did_you_travel_to_Paris_on_vacation?")||(respuestiña!="Did_you_travel_to_paris_on_vacation?")||(respuestiña!="DID_YOU_TRAVEL_TO_PARIS_ON_VACATION?")||(respuestiña!="DID_YOU_TRAVEL_TO_PARIS_ON_VACATION?"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },9000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML='<b>Did you travel to Paris on vacation?</b>'; 
$('#reproducir0').css('opacity','0.9');
activar[15] = 1; 
document.getElementById('reproducir0').click(); 
$('#reproducir0').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[16]==1){ 	
if(((respuestiña=="No,_he_didn't_eat_hot_dog,_he_ate_spaghetti")||(respuestiña=="No,_he_didn't_eat_hot_dog,_he_ate_spaghetti.")||(respuestiña=="NO,_HE_DIDN'T_EAT_HOT_DOG,_HE_ATE_SPAGHETTI")||(respuestiña=="NO,_HE_DIDN'T_EAT_HOT_DOG,_HE_ATE_SPAGHETTI.")||(respuestiña=="No,_he_did_not_eat_hot_dog,_he_ate_spaghetti")||(respuestiña=="No,_he_did_not_eat_hot_dog,_he_ate_spaghetti.")||(respuestiña=="NO,_HE_DID_NOT_EAT_HOT_DOG,_HE_ATE_SPAGHETTI")||(respuestiña=="NO,_HE_DID_NOT_EAT_HOT_DOG,_HE_ATE_SPAGHETTI."))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ 
$('#continuar').css('display','none');
$('#continuar1').css('display','inline'); 
//},4000);
//setTimeout(function(){
$('#reproducir0').css('opacity','0.9');
activar[16] = 1; 
$('#reproducir0').css('pointer-events','auto');
},4000);
contadorsiño++;
}else
if(((respuestiña!="No,_he_didn't_eat_hot_dog,_he_ate_spaghetti")||(respuestiña!="No,_he_didn't_eat_hot_dog,_he_ate_spaghetti.")||(respuestiña!="NO,_HE_DIDN'T_EAT_HOT_DOG,_HE_ATE_SPAGHETTI")||(respuestiña!="NO,_HE_DIDN'T_EAT_HOT_DOG,_HE_ATE_SPAGHETTI.")||(respuestiña!="No,_he_did_not_eat_hot_dog,_he_ate_spaghetti")||(respuestiña!="No,_he_did_not_eat_hot_dog,_he_ate_spaghetti.")||(respuestiña!="NO,_HE_DID_NOT_EAT_HOT_DOG,_HE_ATE_SPAGHETTI")||(respuestiña!="NO,_HE_DID_NOT_EAT_HOT_DOG,_HE_ATE_SPAGHETTI."))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },9500);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>No, he didn't eat hot dog, he ate spaghetti.</b>"; 
$('#reproducir0').css('opacity','0.9');
activar[16] = 1; 
document.getElementById('reproducir0').click(); 
$('#reproducir0').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[17]==1){ 	

if(((respuestiña=="She_didn't_go_to_dance_lessons_today")||(respuestiña=="She_did_not_go_to_dance_lessons_today")||(respuestiña=="She_didn't_go_to_dance_lessons_today.")||(respuestiña=="She_did_not_go_to_dance_lessons_today.")||(respuestiña=="SHE_DIDN'T_GO_TO DANCE_LESSONS_TODAY")||(respuestiña=="SHE_DID_NOT_GO_TO DANCE_LESSONS_TODAY")||(respuestiña=="SHE_DIDN'T_GO_TO DANCE_LESSONS_TODAY.")||(respuestiña=="SHE_DID_NOT_GO_TO DANCE_LESSONS_TODAY."))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ 
$('#continuar').css('display','none');
$('#continuar1').css('display','inline'); 
//},4000);
//setTimeout(function(){
$('#reproducir0').css('opacity','0.9');
activar[17] = 1; 
$('#reproducir0').css('pointer-events','auto');
},4000);
contadorsiño++;
}else
if(((respuestiña!="She_didn't_go_to_dance_lessons_today")||(respuestiña!="She_did_not_go_to_dance_lessons_today")||(respuestiña!="She_didn't_go_to_dance_lessons_today.")||(respuestiña!="She_did_not_go_to_dance_lessons_today.")||(respuestiña!="SHE_DIDN'T_GO_TO DANCE_LESSONS_TODAY")||(respuestiña!="SHE_DID_NOT_GO_TO DANCE_LESSONS_TODAY")||(respuestiña!="SHE_DIDN'T_GO_TO DANCE_LESSONS_TODAY.")||(respuestiña!="SHE_DID_NOT_GO_TO DANCE_LESSONS_TODAY."))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },8000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>She didn't go to dance lessons today.</b>"; 
$('#reproducir0').css('opacity','0.9');
activar[17] = 1; 
document.getElementById('reproducir0').click(); 
$('#reproducir0').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[18]==1){ 	
if(((respuestiña=="What_did_you_do_yesterday?")||(respuestiña=="WHAT_DID_YOU_DO_YESTERDAY?"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ 
$('#continuar').css('display','none');
$('#continuar1').css('display','inline'); 
//},4000);
//setTimeout(function(){
$('#reproducir0').css('opacity','0.9');
activar[18] = 1; 
$('#reproducir0').css('pointer-events','auto');
},4000);
contadorsiño++;
}else
if(((respuestiña!="What_did_you_do_yesterday?")||(respuestiña!="WHAT_DID_YOU_DO_YESTERDAY?"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },8000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML='<b>What did you do yesterday?</b>'; 
$('#reproducir0').css('opacity','0.9');
activar[18] = 1; 
document.getElementById('reproducir0').click(); 
$('#reproducir0').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[19]==1){ 	
if(((respuestiña=="She_traveled_to_Cartagena_during_her_last_vacation")||(respuestiña=="She_traveled_to_Cartagena_during_her_last_vacation.")||(respuestiña=="SHE_TRAVELED_TO_CARTAGENA_DURING_HER_LAST_VACATION")||(respuestiña=="SHE_TRAVELED_TO_CARTAGENA_DURING_HER_LAST_VACATION."))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); //},4000);
//setTimeout(function(){
$('#reproducir0').css('opacity','0.9');
activar[19] = 1; 
$('#reproducir0').css('pointer-events','auto');
},4000);
contadorsiño++;
}else
if(((respuestiña!="She_traveled_to_Cartagena_during_her_last_vacation")||(respuestiña!="She_traveled_to_Cartagena_during_her_last_vacation.")||(respuestiña!="SHE_TRAVELED_TO_CARTAGENA_DURING_HER_LAST_VACATION")||(respuestiña!="SHE_TRAVELED_TO_CARTAGENA_DURING_HER_LAST_VACATION."))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },10000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML='<b>She traveled to Cartagena during her last vacation.</b>'; 
$('#reproducir0').css('opacity','0.9');
activar[19] = 1; 
document.getElementById('reproducir0').click(); 
$('#reproducir0').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[20]==1){ 	
if(contador>0){
audio.pause();
audio.currentTime = 0;
}
if(((respuestiña=="Karen_and_Nancy_went_to_the_gym")||(respuestiña=="Karen_and_Nancy_went_to_the_gym.")||(respuestiña=="KAREN_AND_NANCY_WENT_TO_THE_GYM")||(respuestiña=="KAREN_AND_NANCY_WENT_TO_THE_GYM."))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
contadorsiño++;
}else
if(((respuestiña!="Karen_and_Nancy_went_to_the_gym")||(respuestiña!="Karen_and_Nancy_went_to_the_gym.")||(respuestiña!="KAREN_AND_NANCY_WENT_TO_THE_GYM")||(respuestiña!="KAREN_AND_NANCY_WENT_TO_THE_GYM."))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },8000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>Karen and Nancy went to the gym.</b>";  
document.getElementById('reproducir0').click(); 
//audio.play();	
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[21]==1){ 
if(contador>0){
audio.pause();
audio.currentTime = 0;
}	
if(((respuestiña=="Where_did_you_and_your_family_go_on_last_vacation?")||(respuestiña=="WHERE_DID_YOU_AND_YOUR_FAMILY_GO_ON_LAST_VACATION?"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
contadorsiño++;
}else
if(((respuestiña!="Where_did_you_and_your_family_go_on_last_vacation?")||(respuestiña!="WHERE_DID_YOU_AND_YOUR_FAMILY_GO_ON_LAST_VACATION?"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },9000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>Where did you and your family go on last vacation?</b>";  
document.getElementById('reproducir0').click(); 
//audio.play();	
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[22]==1){ 
if(contador>0){
audio.pause();
audio.currentTime = 0;
}	
if(((respuestiña=="Karen_and_her_friends_had_some_beers_at_a_bar_yesterday")||(respuestiña=="Karen_and_her_friends_had_some_beers_at_a_bar_yesterday.")||(respuestiña=="KAREN_AND_HER_FRIENDS_HAD_SOME_BEERS_AT_A_BAR_YESTERDAY")||(respuestiña=="KAREN_AND_HER_FRIENDS_HAD_SOME_BEERS_AT_A_BAR_YESTERDAY."))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
contadorsiño++;
}else
if(((respuestiña!="Karen_and_her_friends_had_some_beers_at_a_bar_yesterday")||(respuestiña!="Karen_and_her_friends_had_some_beers_at_a_bar_yesterday.")||(respuestiña!="KAREN_AND_HER_FRIENDS_HAD_SOME_BEERS_AT_A_BAR_YESTERDAY")||(respuestiña!="KAREN_AND_HER_FRIENDS_HAD_SOME_BEERS_AT_A_BAR_YESTERDAY."))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },9500);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>Karen and her friends had some beers at a bar yesterday.</b>";  
document.getElementById('reproducir0').click(); 
//audio.play();	
},6000);
}
}
//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[23]==1){ 
if(contador>0){
audio.pause();
audio.currentTime = 0;
}	
if(((respuestiña=="Alex_didn't_travel_during_his_last_vacation")||(respuestiña=="Alex_did_not_travel_during_his_last_vacation")||(respuestiña=="Alex_didn't_travel_during_his_last_vacation.")||(respuestiña=="Alex_did_not_travel_during_his_last_vacation.")||(respuestiña=="ALEX_DIDN'T_TRAVEL_DURING_HIS_LAST_VACATION")||(respuestiña=="ALEX_DID_NOT_TRAVEL_DURING_HIS_LAST_VACATION")||(respuestiña=="ALEX_DIDN'T_TRAVEL_DURING_HIS_LAST_VACATION.")||(respuestiña=="ALEX_DID_NOT_TRAVEL_DURING_HIS_LAST_VACATION."))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
contadorsiño++;
}else
if(((respuestiña!="Alex_didn't_travel_during_his_last_vacation")||(respuestiña!="Alex_did_not_travel_during_his_last_vacation")||(respuestiña!="Alex_didn't_travel_during_his_last_vacation.")||(respuestiña!="Alex_did_not_travel_during_his_last_vacation.")||(respuestiña!="ALEX_DIDN'T_TRAVEL_DURING_HIS_LAST_VACATION")||(respuestiña!="ALEX_DID_NOT_TRAVEL_DURING_HIS_LAST_VACATION")||(respuestiña!="ALEX_DIDN'T_TRAVEL_DURING_HIS_LAST_VACATION.")||(respuestiña!="ALEX_DID_NOT_TRAVEL_DURING_HIS_LAST_VACATION."))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },9000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>Alex didn't travel during his last vacation.</b>";  
document.getElementById('reproducir0').click(); 
//audio.play();	
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[24]==1){ 	
if(((respuestiña=="Are_you_going_to_study_this_semester?")||(respuestiña=="ARE_YOU_GOING_TO_STUDY_THIS_SEMESTER?"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); //},4000);
//setTimeout(function(){
$('#reproducir0').css('opacity','0.9');
activar[24] = 1; 
$('#reproducir0').css('pointer-events','auto');
},4000);
contadorsiño++;
}else
if(((respuestiña!="Are_you_going_to_study_this_semester?")||(respuestiña!="ARE_YOU_GOING_TO_STUDY_THIS_SEMESTER?"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },8000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño1').innerHTML='<b>Are you going to study this semester?</b>'; 
$('#reproducir0').css('opacity','0.9');
activar[24] = 1; 
document.getElementById('reproducir0').click(); 
$('#reproducir0').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[25]==1){ 	
if(((respuestiña=="No,_I'm_not._I'm_going_to_travel_to_Chile")||(respuestiña=="No,_I'm_not._I'm_going_to_travel_to_Chile.")||(respuestiña=="No,_I_am_not._I_am_going_to_travel_to_Chile")||(respuestiña=="No,_I_am_not._I_am_going_to_travel_to_Chile.")||(respuestiña=="NO,_I'M_NOT._I'M_GOING_TO_TRAVEL_TO_CHILE")||(respuestiña=="NO,_I'M_NOT._I'M_GOING_TO_TRAVEL_TO_CHILE.")||(respuestiña=="NO,_I_AM_NOT._I_AM_GOING_TO_TRAVEL_TO_CHILE")||(respuestiña=="NO,_I_AM_NOT._I_AM_GOING_TO_TRAVEL_TO_CHILE."))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); //},4000);
//setTimeout(function(){
$('#reproducir0').css('opacity','0.9');
activar[25] = 1; 
$('#reproducir0').css('pointer-events','auto');
},4000);
contadorsiño++;
}else
if(((respuestiña!="No,_I'm_not._I'm_going_to_travel_to_Chile")||(respuestiña!="No,_I'm_not._I'm_going_to_travel_to_Chile.")||(respuestiña!="No,_I_am_not._I_am_going_to_travel_to_Chile")||(respuestiña!="No,_I_am_not._I_am_going_to_travel_to_Chile.")||(respuestiña!="NO,_I'M_NOT._I'M_GOING_TO_TRAVEL_TO_CHILE")||(respuestiña!="NO,_I'M_NOT._I'M_GOING_TO_TRAVEL_TO_CHILE.")||(respuestiña!="NO,_I_AM_NOT._I_AM_GOING_TO_TRAVEL_TO_CHILE")||(respuestiña!="NO,_I_AM_NOT._I_AM_GOING_TO_TRAVEL_TO_CHILE."))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },9500);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>No, I'm not. I’m going to travel to Chile.</b><br><br>"; 
$('#reproducir0').css('opacity','0.9');
activar[25] = 1; 
document.getElementById('reproducir0').click(); 
$('#reproducir0').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[26]==1){ 	
if(((respuestiña=="She_will_study_at_the_university")||(respuestiña=="She_will_study_at_the_university.")||(respuestiña=="SHE_WILL_STUDY_AT_THE_UNIVERSITY")||(respuestiña=="SHE_WILL_STUDY_AT_THE_UNIVERSITY.")||(respuestiña=="She's_going_to_study_at_the_university")||(respuestiña=="She's_going_to_study_at_the_university.")||(respuestiña=="She_is_going_to_study_at_the_university")||(respuestiña=="She_is_going_to_study_at_the_university.")||(respuestiña=="SHE'S_GOING_TO_STUDY_AT_THE_UNIVERSITY")||(respuestiña=="SHE'S_GOING_TO_STUDY_AT_THE_UNIVERSITY.")||(respuestiña=="SHE_IS_GOING_TO_STUDY_AT_THE_UNIVERSITY")||(respuestiña=="SHE_IS_GOING_TO_STUDY_AT_THE_UNIVERSITY."))&&(contadorsiño==0)){


if((respuestiña=="She_will_study_at_the_university")||(respuestiña=="She_will_study_at_the_university.")||(respuestiña=="SHE_WILL_STUDY_AT_THE_UNIVERSITY")||(respuestiña=="SHE_WILL_STUDY_AT_THE_UNIVERSITY.")){
activar[26] = 1; 
}
if((respuestiña=="She's_going_to_study_at_the_university")||(respuestiña=="She's_going_to_study_at_the_university.")||(respuestiña=="She_is_going_to_study_at_the_university")||(respuestiña=="She_is_going_to_study_at_the_university.")||(respuestiña=="SHE'S_GOING_TO_STUDY_AT_THE_UNIVERSITY")||(respuestiña=="SHE'S_GOING_TO_STUDY_AT_THE_UNIVERSITY.")||(respuestiña=="SHE_IS_GOING_TO_STUDY_AT_THE_UNIVERSITY")||(respuestiña=="SHE_IS_GOING_TO_STUDY_AT_THE_UNIVERSITY.")){
suplente1 = 1;
}

tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); //},4000);
//setTimeout(function(){
$('#reproducir0').css('opacity','0.9');
//activar[26] = 1; 
$('#reproducir0').css('pointer-events','auto');
},4000);
contadorsiño++;
}else
if(((respuestiña!="She_will_study_at_the_university")||(respuestiña!="She_will_study_at_the_university.")||(respuestiña!="SHE_WILL_STUDY_AT_THE_UNIVERSITY")||(respuestiña!="SHE_WILL_STUDY_AT_THE_UNIVERSITY.") ||(respuestiña!="She's_going_to_study_at_the_university")||(respuestiña!="She's_going_to_study_at_the_university.")||(respuestiña!="She_is_going_to_study_at_the_university")||(respuestiña!="She_is_going_to_study_at_the_university.")||(respuestiña!="SHE'S_GOING_TO_STUDY_AT_THE_UNIVERSITY")||(respuestiña!="SHE'S_GOING_TO_STUDY_AT_THE_UNIVERSITY.")||(respuestiña!="SHE_IS_GOING_TO_STUDY_AT_THE_UNIVERSITY")||(respuestiña!="SHE_IS_GOING_TO_STUDY_AT_THE_UNIVERSITY."))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },8000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño1').innerHTML='<b>She will study at the university.</b>'; 
$('#reproducir0').css('opacity','0.9');
activar[26] = 1; 
document.getElementById('reproducir0').click(); 
$('#reproducir0').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[27]==1){ 	
if(((respuestiña=="Are_you_going_to_be_at_the_restaurant_at_1:00_o'clock?")||(respuestiña=="ARE_YOU_GOING_TO_BE_AT_THE_RESTAURANT_AT_1:00_O'CLOCK?"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); //},4000);
//setTimeout(function(){
$('#reproducir0').css('opacity','0.9');
activar[27] = 1; 
$('#reproducir0').css('pointer-events','auto');
},4000);
contadorsiño++;
}else
if(((respuestiña!="Are_you_going_to_be_at_the_restaurant_at_1:00_o'clock?")||(respuestiña!="ARE_YOU_GOING_TO_BE_AT_THE_RESTAURANT_AT_1:00_O'CLOCK?"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },8000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>Are you going to be at the restaurant at 1:00 O'clock?</b>"; 
$('#reproducir0').css('opacity','0.9');
activar[27] = 1; 
document.getElementById('reproducir0').click(); 
$('#reproducir0').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[28]==1){ 	
if(((respuestiña=="Are_you_going_to_run_in_the_marathon_tomorrow?")||(respuestiña=="ARE_YOU_GOING_TO_RUN_IN_THE_MARATHON_TOMORROW?"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline');// },4000);
//setTimeout(function(){
$('#reproducir0').css('opacity','0.9');
activar[28] = 1; 
$('#reproducir0').css('pointer-events','auto');
},4000);
contadorsiño++;
}else
if(((respuestiña!="Are_you_going_to_run_in_the_marathon_tomorrow?")||(respuestiña!="ARE_YOU_GOING_TO_RUN_IN_THE_MARATHON_TOMORROW?"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },9000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>Are you going to run in the marathon tomorrow?</b>"; 
$('#reproducir0').css('opacity','0.9');
activar[28] = 1; 
document.getElementById('reproducir0').click(); 
$('#reproducir0').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[29]==1){ 	
if(((respuestiña=="She_is_going_to_watch_a_movie_with_her_boyfriend_tonight")||(respuestiña=="SHE_IS_GOING_TO_WATCH_A_MOVIE_WITH_HER_BOYFRIEND_TONIGHT"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); //},4000);
//setTimeout(function(){
$('#reproducir0').css('opacity','0.9');
activar[29] = 1; 
$('#reproducir0').css('pointer-events','auto');
},4000);
contadorsiño++;
}else
if(((respuestiña!="She_is_going_to_watch_a_movie_with_her_boyfriend_tonight")||(respuestiña!="SHE_IS_GOING_TO_WATCH_A_MOVIE_WITH_HER_BOYFRIEND_TONIGHT"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },9500);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>She is going to watch a movie with her boyfriend  tonight.</b>"; 
$('#reproducir0').css('opacity','0.9');
activar[29] = 1; 
document.getElementById('reproducir0').click(); 
$('#reproducir0').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[30]==1){ 	
if(((respuestiña=="What_are_you_going_to_do_next_weekend?")||(respuestiña=="WHAT_ARE_YOU_GOING_TO_DO_NEXT_WEEKEND?"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline');// },4000);
//setTimeout(function(){
$('#reproducir0').css('opacity','0.9');
activar[30] = 1; 
$('#reproducir0').css('pointer-events','auto');
},4000);
contadorsiño++;
}else
if(((respuestiña!="What_are_you_going_to_do_next_weekend?")||(respuestiña!="WHAT_ARE_YOU_GOING_TO_DO_NEXT_WEEKEND?"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },8500);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML='<b>What are you going to do next weekend?</b>'; 
$('#reproducir0').css('opacity','0.9');
activar[30] = 1; 
document.getElementById('reproducir0').click(); 
$('#reproducir0').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[31]==1){ 	
if(((respuestiña=="She_is_going_to_travel_to_Cartagena_during_her_next_vacation")||(respuestiña=="She_is_going_to_travel_to_Cartagena_during_her_next_vacation.")||(respuestiña=="SHE_IS_GOING_TO_TRAVEL_TO_CARTAGENA_DURING_HER_NEXT_VACATION")||(respuestiña=="SHE_IS_GOING_TO_TRAVEL_TO_CARTAGENA_DURING_HER_NEXT_VACATION.")||(respuestiña=="She_will_travel_to_Cartagena_during_her_next_vacation")||(respuestiña=="She_will_travel_to_Cartagena_during_her_next_vacation.")||(respuestiña=="SHE_WILL_TRAVEL_TO_CARTAGENA_DURING_HER_NEXT_VACATION")||(respuestiña=="SHE_WILL_TRAVEL_TO_CARTAGENA_DURING_HER_NEXT_VACATION."))&&(contadorsiño==0)){

if((respuestiña=="She_is_going_to_travel_to_Cartagena_during_her_next_vacation")||(respuestiña=="She_is_going_to_travel_to_Cartagena_during_her_next_vacation.")||(respuestiña=="SHE_IS_GOING_TO_TRAVEL_TO_CARTAGENA_DURING_HER_NEXT_VACATION")||(respuestiña=="SHE_IS_GOING_TO_TRAVEL_TO_CARTAGENA_DURING_HER_NEXT_VACATION.")){
activar[31] = 1;
}
if((respuestiña=="She_will_travel_to_Cartagena_during_her_next_vacation")||(respuestiña=="She_will_travel_to_Cartagena_during_her_next_vacation.")||(respuestiña=="SHE_WILL_TRAVEL_TO_CARTAGENA_DURING_HER_NEXT_VACATION")||(respuestiña=="SHE_WILL_TRAVEL_TO_CARTAGENA_DURING_HER_NEXT_VACATION.")){
suplente1 = 1;
}



tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline');// },4000);
//setTimeout(function(){
$('#reproducir0').css('opacity','0.9');
//activar[31] = 1; 
$('#reproducir0').css('pointer-events','auto');
},4000);
contadorsiño++;
}else
if(((respuestiña!="She_is_going_to_travel_to_Cartagena_during_her_next_vacation")||(respuestiña!="She_is_going_to_travel_to_cartagena_during_her_next_vacation")||(respuestiña!="She_is_going_to_travel_to_Cartagena_during_her_next_vacation.")||(respuestiña!="She_is_going_to_travel_to_cartagena_during_her_next_vacation.")||(respuestiña!="SHE_IS_GOING_TO_TRAVEL_TO_CARTAGENA_DURING_HER_NEXT_VACATION")||(respuestiña!="SHE_IS_GOING_TO_TRAVEL_TO_CARTAGENA_DURING_HER_NEXT_VACATION.")||(respuestiña!="She_will_travel_to_Cartagena_during_her_next_vacation")||(respuestiña!="She_will_travel_to_Cartagena_during_her_next_vacation.")||(respuestiña!="SHE_WILL_TRAVEL_TO_CARTAGENA_DURING_HER_NEXT_VACATION")||(respuestiña!="SHE_WILL_TRAVEL_TO_CARTAGENA_DURING_HER_NEXT_VACATION."))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },9500);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML='<b>She is going to travel to Cartagena during her next vacation.</b>'; 
$('#reproducir0').css('opacity','0.9');
activar[31] = 1; 
document.getElementById('reproducir0').click(); 
$('#reproducir0').css('pointer-events','auto');
$('#input1').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[32]==1){ 	
if(contador>0){
audio.pause();
audio.currentTime = 0;
}
if(((respuestiña=="Richard_and_Jenny_are_going_on_holiday_to_Hawaii")||(respuestiña=="Richard_and_Jenny_are_going_on_holiday_to_Hawaii.")||(respuestiña=="Richard_and_Jenny_are_going_on_holiday_to_Hawaii")||(respuestiña=="Richard_and_Jenny_are_going_on_holiday_to_Hawaii.")||(respuestiña=="RICHARD_AND_JENNY_ARE_GOING_ON_HOLIDAY_TO_HAWAII")||(respuestiña=="RICHARD_AND_JENNY_ARE_GOING_ON_HOLIDAY_TO_HAWAII."))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
contadorsiño++;
}else
if(((respuestiña!="Richard_and_Jenny_are_going_on_holiday_to_Hawaii")||(respuestiña!="Richard_and_Jenny_are_going_on_holiday_to_Hawaii.")||(respuestiña!="Richard_and_Jenny_are_going_on_holiday_to_Hawaii")||(respuestiña!="Richard_and_Jenny_are_going_on_holiday_to_Hawaii.")||(respuestiña!="RICHARD_AND_JENNY_ARE_GOING_ON_HOLIDAY_TO_HAWAII")||(respuestiña!="RICHARD_AND_JENNY_ARE_GOING_ON_HOLIDAY_TO_HAWAII."))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },10000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>Richard and Jenny are going on holiday to Hawaii  </b>"; 
document.getElementById('reproducir0').click(); 
//audio.play();
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[33]==1){ 	
if(contador>0){
audio.pause();
audio.currentTime = 0;
}
if(((respuestiña=="Are_you_going_to_the_party_tonight?")||(respuestiña=="ARE_YOU_GOING_TO_THE_PARTY_TONIGHT?")||(respuestiña=="STEVE_LIKES_TO_GO_TO_THE_GYM_EVERY_DAY.")||(respuestiña=="STEVE_LIKES_TO_GO_TO_THE_GYM_EVERY_DAY"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
contadorsiño++;
}else
if(((respuestiña!="Are_you_going_to_the_party_tonight?")||(respuestiña!="ARE_YOU_GOING_TO_THE_PARTY_TONIGHT?")||(respuestiña!="STEVE_LIKES_TO_GO_TO_THE_GYM_EVERY_DAY.")||(respuestiña!="STEVE_LIKES_TO_GO_TO_THE_GYM_EVERY_DAY"))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },8500);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño1').innerHTML="<b>Are you going to the party tonight? </b>"; 
document.getElementById('reproducir0').click(); 
//audio.play();
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[34]==1){ 	
if(contador>0){
audio.pause();
audio.currentTime = 0;
}
if(((respuestiña=="ALEXA_IS_NOT_GOING_TO_DO_EXERCISES.")||(respuestiña=="Alexa_isn't_going_to_do_exercises")||(respuestiña=="Alexa_is_not_going_to_do_exercises")||(respuestiña=="Alexa_isn't_going_to_do_exercises.")||(respuestiña=="Alexa_is_not_going_to_do_exercises.")||(respuestiña=="ALEXA_ISN'T_GOING_TO_DO_EXERCISES")||(respuestiña=="ALEXA_IS_NOT_GOING_TO_DO_EXERCISES")||(respuestiña=="ALEXA_ISN'T_GOING_TO_DO_EXERCISES."))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
contadorsiño++;
}else
if(((respuestiña!="ALEXA_IS_NOT_GOING_TO_DO_EXERCISES.")||(respuestiña!="Alexa_isn't_going_to_do_exercises")||(respuestiña!="Alexa_is_not_going_to_do_exercises")||(respuestiña!="Alexa_isn't_going_to_do_exercises.")||(respuestiña!="Alexa_is_not_going_to_do_exercises.")||(respuestiña!="ALEXA_ISN'T_GOING_TO_DO_EXERCISES")||(respuestiña!="ALEXA_IS_NOT_GOING_TO_DO_EXERCISES")||(respuestiña!="ALEXA_ISN'T_GOING_TO_DO_EXERCISES."))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },9500);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>Alexa isn't going to do exercises.</b>"; 
document.getElementById('reproducir0').click(); 
//audio.play();
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejwriting[35]==1){ 
if(contador>0){
audio.pause();
audio.currentTime = 0;
}	
if(((respuestiña=="Mario_is_going_to_take_salsa_lessons_next_week")||(respuestiña=="Mario_is_going_to_take_salsa_lessons_next_week.")||(respuestiña=="MARIO_IS_GOING_TO_TAKE_SALSA_LESSONS_NEXT_WEEK")||(respuestiña=="MARIO_IS_GOING_TO_TAKE_SALSA_LESSONS_NEXT_WEEK."))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #308c58');
document.getElementById('aplausos').play(); preguntaAle2(true,'Writing');	mom.classList.remove('bigbang');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },4000);
contadorsiño++;
}else
if(((respuestiña!="Mario_is_going_to_take_salsa_lessons_next_week")||(respuestiña!="Mario_is_going_to_take_salsa_lessons_next_week.")||(respuestiña!="MARIO_IS_GOING_TO_TAKE_SALSA_LESSONS_NEXT_WEEK")||(respuestiña!="MARIO_IS_GOING_TO_TAKE_SALSA_LESSONS_NEXT_WEEK."))&&(contadorsiño==0)){
tucha++;
$('#input1').css('border','2px solid #fc484c');
$('#input1').css('pointer-events','none'); 
$('#input1').css('opacity','0.6'); 
document.getElementById('trompeta').play(); preguntaAle2(false,'Writing');	mom.classList.remove('bigbang');	
contadorsiño++;
$('#continuar').css('opacity','0.4'); 
$('#continuar').css('pointer-events','none');
setTimeout(function(){ $('#continuar').css('display','none');$('#continuar1').css('display','inline'); },10000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
document.getElementById('parrafiño2').innerHTML="<b>Mario is going to take salsa lessons next week.</b>"; 
document.getElementById('reproducir0').click();
//audio.play(); 
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------
}