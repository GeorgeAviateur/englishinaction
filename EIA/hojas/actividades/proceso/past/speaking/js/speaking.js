function speaking(liberenWilli){
start_img.src = '../../../../imagenes/botones/mic12.png';
start_img.classList.remove('bigbang1');
mur++;
if(contador>0){
audio.pause();
audio.currentTime = 0;
}

if (ejspeaking[0]==1){ 	
if((liberenWilli=="went to the gym")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('aplausos').play(); preguntaAle2(true);	mom11.classList.remove('bigbang');
$('.carito').css('color','#BDBDBD');$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },4000);
contadorsiño++;
}else
if((liberenWilli!="went to the gym")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('trompeta').play(); preguntaAle2(false);	mom11.classList.remove('bigbang'); $('.carito').css('color','#BDBDBD');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },7000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
$('#parrafiño1').css('margin-top','2%');	
$('#parrafiño1').css('margin-bottom','2%');
document.getElementById('parrafiño1').innerHTML='<b>Went to the gym.</b>'; 
$('.microfonito').css('display','none');
document.getElementById('reproducir0').click(); 
$('#information').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejspeaking[1]==1){ 	
if((liberenWilli=="went to the cinema")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('aplausos').play(); preguntaAle2(true);	mom11.classList.remove('bigbang');
$('.carito').css('color','#BDBDBD');$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },4000);
contadorsiño++;
}else
if((liberenWilli!="went to the cinema")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('trompeta').play(); preguntaAle2(false);	mom11.classList.remove('bigbang'); $('.carito').css('color','#BDBDBD');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },7000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
	$('#parrafiño1').css('margin-top','2%');	
$('#parrafiño1').css('margin-bottom','2%');
document.getElementById('parrafiño1').innerHTML='<b>Went to the cinema.</b>'; 
$('.microfonito').css('display','none');
document.getElementById('reproducir0').click(); 
$('#information').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejspeaking[2]==1){ 	
if((liberenWilli=="danced")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('aplausos').play(); preguntaAle2(true);	mom11.classList.remove('bigbang');
$('.carito').css('color','#BDBDBD');$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },4000);
contadorsiño++;
}else
if((liberenWilli!="danced")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('trompeta').play(); preguntaAle2(false);	mom11.classList.remove('bigbang'); $('.carito').css('color','#BDBDBD');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },7000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
$('#parrafiño1').css('margin-top','2%');	
$('#parrafiño1').css('margin-bottom','2%');
document.getElementById('parrafiño1').innerHTML='<b>Danced.</b>'; 
$('.microfonito').css('display','none');
document.getElementById('reproducir0').click(); 
$('#information').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejspeaking[3]==1){ 	
if((liberenWilli=="ate popcorn"||liberenWilli=="8 popcorn")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('aplausos').play(); preguntaAle2(true);	mom11.classList.remove('bigbang');
$('.carito').css('color','#BDBDBD');$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },4000);
contadorsiño++;
}else
if((liberenWilli!="ate popcorn"||liberenWilli!="8 popcorn")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('trompeta').play(); preguntaAle2(false);	mom11.classList.remove('bigbang'); $('.carito').css('color','#BDBDBD');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },7500);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
$('#parrafiño1').css('margin-top','2%');	
$('#parrafiño1').css('margin-bottom','2%');
document.getElementById('parrafiño1').innerHTML='<b>Ate popcorn.</b>'; 
$('.microfonito').css('display','none');
document.getElementById('reproducir0').click(); 
$('#information').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejspeaking[4]==1){ 	
if((liberenWilli=="watched horror movies")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('aplausos').play(); preguntaAle2(true);	mom11.classList.remove('bigbang');
$('.carito').css('color','#BDBDBD');$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },4000);
contadorsiño++;
}else
if((liberenWilli!="watched horror movies")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('trompeta').play(); preguntaAle2(false);	mom11.classList.remove('bigbang'); $('.carito').css('color','#BDBDBD');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },7500);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
$('#parrafiño1').css('margin-top','2%');	
$('#parrafiño1').css('margin-bottom','2%');
document.getElementById('parrafiño1').innerHTML='<b>Watched horror movies.</b>'; 
$('.microfonito').css('display','none');
document.getElementById('reproducir0').click(); 
$('#information').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejspeaking[5]==1){ 	
if((liberenWilli=="talked to friends at a bar")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('aplausos').play(); preguntaAle2(true);	mom11.classList.remove('bigbang');
$('.carito').css('color','#BDBDBD');$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },4000);
contadorsiño++;
}else
if((liberenWilli!="talked to friends at a bar")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('trompeta').play(); preguntaAle2(false);	mom11.classList.remove('bigbang'); $('.carito').css('color','#BDBDBD');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },8500);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
$('#parrafiño1').css('margin-top','2%');	
$('#parrafiño1').css('margin-bottom','2%');
document.getElementById('parrafiño1').innerHTML='<b>Talked to friends at a bar.</b>'; 
$('.microfonito').css('display','none');
document.getElementById('reproducir0').click(); 
$('#information').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejspeaking[6]==1){ 	
if((liberenWilli=="ate hot dogs"||liberenWilli=="8 hot dogs")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('aplausos').play(); preguntaAle2(true);	mom11.classList.remove('bigbang');
$('.carito').css('color','#BDBDBD');$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },4000);
contadorsiño++;
}else
if((liberenWilli!="ate hot dogs"||liberenWilli!="8 hot dogs")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('trompeta').play(); preguntaAle2(false);	mom11.classList.remove('bigbang'); $('.carito').css('color','#BDBDBD');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },8000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
$('#parrafiño1').css('margin-top','2%');	
$('#parrafiño1').css('margin-bottom','2%');
document.getElementById('parrafiño1').innerHTML='<b>Ate hot dogs.</b>'; 
$('.microfonito').css('display','none');
document.getElementById('reproducir0').click(); 
$('#information').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejspeaking[7]==1){ 	
if((liberenWilli=="listened to music"||liberenWilli=="listen to music")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('aplausos').play(); preguntaAle2(true);	mom11.classList.remove('bigbang');
$('.carito').css('color','#BDBDBD');$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },4000);
contadorsiño++;
}else
if((liberenWilli!="listened to music"||liberenWilli!="listen to music")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('trompeta').play(); preguntaAle2(false);	mom11.classList.remove('bigbang'); $('.carito').css('color','#BDBDBD');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },7300);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
$('#parrafiño1').css('margin-top','2%');	
$('#parrafiño1').css('margin-bottom','2%');
document.getElementById('parrafiño1').innerHTML='<b>Listened to music.</b>'; 
$('.microfonito').css('display','none');
document.getElementById('reproducir0').click(); 
$('#information').css('display','none');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejspeaking[8]==1){ 
$('#reproducir0').css('opacity','0.4'); 
$('#reproducir0').css('pointer-events','none');		
if(((liberenWilli=="emily didn't watch a horror movie")||(liberenWilli=="emily did not watch a horror movie"))&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
activar[8] = 1; 
contador=1;
document.getElementById('aplausos').play(); preguntaAle2(true);	mom11.classList.remove('bigbang');
$('.carito').css('color','#BDBDBD');$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); $('#reproducir0').css('opacity','1'); 
$('#reproducir0').css('pointer-events','auto');},4000);
contadorsiño++;
}else
if(((liberenWilli!="emily didn't watch a horror movie")||(liberenWilli!="emily did not watch a horror movie"))&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
activar[8] = 1; 
document.getElementById('trompeta').play(); preguntaAle2(false);	mom11.classList.remove('bigbang'); $('.carito').css('color','#BDBDBD');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },8500);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
$('#parrafiño2').css('margin-top','2%');	
$('#parrafiño2').css('margin-bottom','2%');
document.getElementById('parrafiño2').innerHTML="<b>Emily didn't watch a horror movie.</b>"; 
$('.microfonito').css('display','none');
document.getElementById('reproducir0').click(); 
$('#information').css('display','none');
$('#reproducir0').css('opacity','1'); 
$('#reproducir0').css('pointer-events','auto');
},6000);
}
}	

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejspeaking[9]==1){ 	
$('#reproducir0').css('opacity','0.4'); 
$('#reproducir0').css('pointer-events','none');	
if((liberenWilli=="susan talked to her friends")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
activar[9] = 1; 
contador=1;
document.getElementById('aplausos').play(); preguntaAle2(true);	mom11.classList.remove('bigbang');
$('.carito').css('color','#BDBDBD');$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); $('#reproducir0').css('opacity','1'); 
$('#reproducir0').css('pointer-events','auto');},4000);
contadorsiño++;
}else
if((liberenWilli!="susan talked to her friends")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
activar[9] = 1; 
document.getElementById('trompeta').play(); preguntaAle2(false);	mom11.classList.remove('bigbang'); $('.carito').css('color','#BDBDBD');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },8000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
$('#parrafiño2').css('margin-top','2%');	
$('#parrafiño2').css('margin-bottom','2%');
document.getElementById('parrafiño2').innerHTML="<b>Susan talked to her friends.</b>"; 
$('.microfonito').css('display','none');
document.getElementById('reproducir0').click(); 
$('#information').css('display','none');
$('#reproducir0').css('opacity','1'); 
$('#reproducir0').css('pointer-events','auto');
},6000);
}
}	

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejspeaking[10]==1){ 
$('#reproducir0').css('opacity','0.4'); 
$('#reproducir0').css('pointer-events','none');		
if((liberenWilli=="eddie drank tequila")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
activar[10] = 1;
contador=1; 
document.getElementById('aplausos').play(); preguntaAle2(true);	mom11.classList.remove('bigbang');
$('.carito').css('color','#BDBDBD');$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline');$('#reproducir0').css('opacity','1'); 
$('#reproducir0').css('pointer-events','auto'); },4000);
contadorsiño++;
}else
if((liberenWilli!="eddie drank tequila")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
activar[10] = 1; 
document.getElementById('trompeta').play(); preguntaAle2(false);	mom11.classList.remove('bigbang'); $('.carito').css('color','#BDBDBD');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },7500);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
$('#parrafiño2').css('margin-top','2%');	
$('#parrafiño2').css('margin-bottom','2%');
document.getElementById('parrafiño2').innerHTML="<b>Eddy drank tequila.</b>"; 
$('.microfonito').css('display','none');
document.getElementById('reproducir0').click(); 
$('#information').css('display','none');
$('#reproducir0').css('opacity','1'); 
$('#reproducir0').css('pointer-events','auto');
},6000);
}
}	
//-------------------------------------------------------------------------------------------------------------------------------------

if (ejspeaking[11]==1){ 
$('#reproducir0').css('opacity','0.4'); 
$('#reproducir0').css('pointer-events','none');		
if((liberenWilli=="anna didn't eat fast food"||liberenWilli=="anna did not eat fast food")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
activar[11] = 1; 
contador=1;
document.getElementById('aplausos').play(); preguntaAle2(true);	mom11.classList.remove('bigbang');
$('.carito').css('color','#BDBDBD');$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); $('#reproducir0').css('opacity','1'); 
$('#reproducir0').css('pointer-events','auto');},4000);
contadorsiño++;
}else
if((liberenWilli!="anna didn't eat fast food"||liberenWilli!="anna did not eat fast food")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
activar[11] = 1; 
document.getElementById('trompeta').play(); preguntaAle2(false);	mom11.classList.remove('bigbang'); $('.carito').css('color','#BDBDBD');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },8000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
$('#parrafiño2').css('margin-top','2%');	
$('#parrafiño2').css('margin-bottom','2%');
document.getElementById('parrafiño2').innerHTML="<b>Ana didn't eat fast food.</b>"; 
$('.microfonito').css('display','none');
document.getElementById('reproducir0').click(); 
$('#information').css('display','none');
$('#reproducir0').css('opacity','1'); 
$('#reproducir0').css('pointer-events','auto');
},6000);
}
}	
//-------------------------------------------------------------------------------------------------------------------------------------

if (ejspeaking[12]==1){ 
$('#reproducir0').css('opacity','0.4'); 
$('#reproducir0').css('pointer-events','none');		
if((liberenWilli=="wendy sang pop music"||liberenWilli=="wendy song pop music"||liberenWilli=="wendy's sang pop music")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
activar[12] = 1; 
contador=1;
document.getElementById('aplausos').play(); preguntaAle2(true);	mom11.classList.remove('bigbang');
$('.carito').css('color','#BDBDBD');$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); $('#reproducir0').css('opacity','1'); 
$('#reproducir0').css('pointer-events','auto');},4000);
contadorsiño++;
}else
if((liberenWilli!="wendy sang pop music"||liberenWilli!="wendy song pop music"||liberenWilli!="wendy's sang pop music")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
activar[12] = 1; 
document.getElementById('trompeta').play(); preguntaAle2(false);	mom11.classList.remove('bigbang'); $('.carito').css('color','#BDBDBD');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },8000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
$('#parrafiño2').css('margin-top','2%');	
$('#parrafiño2').css('margin-bottom','2%');
document.getElementById('parrafiño2').innerHTML="<b>Wendy sang pop music.</b>"; 
$('.microfonito').css('display','none');
document.getElementById('reproducir0').click(); 
$('#information').css('display','none');
$('#reproducir0').css('opacity','1'); 
$('#reproducir0').css('pointer-events','auto');
},6000);
}
}	

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejspeaking[13]==1){
if(contador>0){
audio10.pause();
audio10.currentTime = 0;
}
$('#reproducir0').css('opacity','0.4'); 
$('#reproducir0').css('pointer-events','none');
contador=0;
$('#reproducir00').css('display','none'); 
$('#pause00').css('display','none');
$('#perendengues1').css('display','none'); 
$('#reproducir0').css('display','inline'); 
$('#perendengues').css('display','inline'); 
bart1 = 0;

if((liberenWilli=="i ate fast food"||liberenWilli=="i didn't eat fast food"||liberenWilli=="i did not eat fast food")&&(contadorsiño==0)){
if(liberenWilli=="i ate fast food"){
activar[13] = 1;
}
if(liberenWilli=="i didn't eat fast food"||liberenWilli=="i did not eat fast food"){
suplente[0]=1;
}
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
contador=1;
document.getElementById('aplausos').play(); preguntaAle2(true);	mom11.classList.remove('bigbang');
$('.carito').css('color','#BDBDBD');$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); $('#reproducir0').css('opacity','1'); 
$('#reproducir0').css('pointer-events','auto');},4000);
contadorsiño++;
}else
if((liberenWilli!="i ate fast food"||liberenWilli!="i didn't eat fast food"||liberenWilli!="i did not eat fast food")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
activar[13] = 1;
document.getElementById('trompeta').play(); preguntaAle2(false);	mom11.classList.remove('bigbang'); $('.carito').css('color','#BDBDBD');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },8000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
$('#parrafiño2').css('margin-top','2%');	
$('#parrafiño2').css('margin-bottom','2%');
document.getElementById('parrafiño2').innerHTML="<b>I ate fast food.</b>"; 
$('.microfonito').css('display','none');
document.getElementById('reproducir0').click(); 
$('#information').css('display','none');
$('#reproducir0').css('opacity','1'); 
$('#reproducir0').css('pointer-events','auto');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejspeaking[14]==1){
if(contador>0){
audio10.pause();
audio10.currentTime = 0;
} 
$('#reproducir0').css('opacity','0.4'); 
$('#reproducir0').css('pointer-events','none');
contador=0;
$('#reproducir00').css('display','none'); 
$('#pause00').css('display','none');
$('#perendengues1').css('display','none'); 
$('#reproducir0').css('display','inline'); 
$('#perendengues').css('display','inline'); 
bart1 = 0;	
if((liberenWilli=="i went to a bar"||liberenWilli=="i didn't go to a bar"||liberenWilli=="i did not go to a bar")&&(contadorsiño==0)){
if(liberenWilli=="i went to a bar"){
activar[14] = 1;
}
if(liberenWilli=="i didn't go to a bar"||liberenWilli=="i did not go to a bar"){
suplente[0]=1;
}
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
contador=1;
document.getElementById('aplausos').play(); preguntaAle2(true);	mom11.classList.remove('bigbang');
$('.carito').css('color','#BDBDBD');$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); $('#reproducir0').css('opacity','1'); 
$('#reproducir0').css('pointer-events','auto');},4000);
contadorsiño++;
}else
if((liberenWilli!="i went to a bar"||liberenWilli!="i didn't go to a bar"||liberenWilli!="i did not go to a bar")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
activar[14] = 1;
document.getElementById('trompeta').play(); preguntaAle2(false);	mom11.classList.remove('bigbang'); $('.carito').css('color','#BDBDBD');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },7500);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
$('#parrafiño2').css('margin-top','2%');	
$('#parrafiño2').css('margin-bottom','2%');
document.getElementById('parrafiño2').innerHTML="<b>I went to a bar.</b>"; 
$('.microfonito').css('display','none');
document.getElementById('reproducir0').click(); 
$('#information').css('display','none');
$('#reproducir0').css('opacity','1'); 
$('#reproducir0').css('pointer-events','auto');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejspeaking[15]==1){
if(contador>0){
audio10.pause();
audio10.currentTime = 0;
} 
$('#reproducir0').css('opacity','0.4'); 
$('#reproducir0').css('pointer-events','none');
contador=0;
$('#reproducir00').css('display','none'); 
$('#pause00').css('display','none');
$('#perendengues1').css('display','none'); 
$('#reproducir0').css('display','inline'); 
$('#perendengues').css('display','inline'); 
bart1 = 0;	
if((liberenWilli=="i went to the gym"||liberenWilli=="i didn't go to the gym"||liberenWilli=="i did not go to the gym")&&(contadorsiño==0)){
if(liberenWilli=="i went to the gym"){
activar[15] = 1;
}
if(liberenWilli=="i didn't go to the gym"||liberenWilli=="i did not go to the gym"){
suplente[0]=1;
}
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
contador=1;
document.getElementById('aplausos').play(); preguntaAle2(true);	mom11.classList.remove('bigbang');
$('.carito').css('color','#BDBDBD');$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); 
$('#reproducir0').css('opacity','1'); 
$('#reproducir0').css('pointer-events','auto');},4000);
contadorsiño++;
}else
if((liberenWilli!="i went to the gym"||liberenWilli!="i didn't go to the gym"||liberenWilli!="i did not go to the gym")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
activar[15] = 1;
document.getElementById('trompeta').play(); preguntaAle2(false);	mom11.classList.remove('bigbang'); $('.carito').css('color','#BDBDBD');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },7500);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
$('#parrafiño2').css('margin-top','2%');	
$('#parrafiño2').css('margin-bottom','2%');
document.getElementById('parrafiño2').innerHTML="<b>I went to the gym.</b>"; 
$('.microfonito').css('display','none');
document.getElementById('reproducir0').click(); 
$('#information').css('display','none');
$('#reproducir0').css('opacity','1'); 
$('#reproducir0').css('pointer-events','auto');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejspeaking[16]==1){
if(contador>0){
audio10.pause();
audio10.currentTime = 0;
}
$('#reproducir0').css('opacity','0.4'); 
$('#reproducir0').css('pointer-events','none');
contador=0;
$('#reproducir00').css('display','none'); 
$('#pause00').css('display','none');
$('#perendengues1').css('display','none'); 
$('#reproducir0').css('display','inline'); 
$('#perendengues').css('display','inline'); 
bart1 = 0; 	
if((liberenWilli=="i went to the cinema"||liberenWilli=="i didn't go to the cinema"||liberenWilli=="i did not go to the cinema")&&(contadorsiño==0)){
if(liberenWilli=="i went to the cinema"){
activar[16] = 1;
}
if(liberenWilli=="i didn't go to the cinema"||liberenWilli=="i did not go to the cinema"){
suplente[0]=1;
}
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
contador=1;
document.getElementById('aplausos').play(); preguntaAle2(true);	mom11.classList.remove('bigbang');
$('.carito').css('color','#BDBDBD');$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); 
$('#reproducir0').css('opacity','1'); 
$('#reproducir0').css('pointer-events','auto');},4000);
contadorsiño++;
}else
if((liberenWilli!="i went to the cinema"||liberenWilli!="i didn't go to the cinema"||liberenWilli!="i did not go to the cinema")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
activar[16] = 1;
document.getElementById('trompeta').play(); preguntaAle2(false);	mom11.classList.remove('bigbang'); $('.carito').css('color','#BDBDBD');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },7800);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
$('#parrafiño2').css('margin-top','2%');	
$('#parrafiño2').css('margin-bottom','2%');
document.getElementById('parrafiño2').innerHTML="<b>I went to the cinema.</b>"; 
$('.microfonito').css('display','none');
document.getElementById('reproducir0').click(); 
$('#information').css('display','none');
$('#reproducir0').css('opacity','1'); 
$('#reproducir0').css('pointer-events','auto');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejspeaking[17]==1){ 
if(contador>0){
audio10.pause();
audio10.currentTime = 0;
}
$('#reproducir0').css('opacity','0.4'); 
$('#reproducir0').css('pointer-events','none');
contador=0;
$('#reproducir00').css('display','none'); 
$('#pause00').css('display','none');
$('#perendengues1').css('display','none'); 
$('#reproducir0').css('display','inline'); 
$('#perendengues').css('display','inline'); 
bart1 = 0;	
if((liberenWilli=="i listened to music"||liberenWilli=="i didn't listen to music"||liberenWilli=="i did not listen to music")&&(contadorsiño==0)){
if(liberenWilli=="i listened to music"){
activar[17] = 1;
}
if(liberenWilli=="i didn't listen to music"||liberenWilli=="i did not listen to music"){
suplente[0]=1;
}
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
contador=1;
document.getElementById('aplausos').play(); preguntaAle2(true);	mom11.classList.remove('bigbang');
$('.carito').css('color','#BDBDBD');$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); 
$('#reproducir0').css('opacity','1'); 
$('#reproducir0').css('pointer-events','auto');},4000);
contadorsiño++;
}else
if((liberenWilli!="i listened to music"||liberenWilli!="i didn't listen to music"||liberenWilli!="i did not listen to music")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
activar[17] = 1;
document.getElementById('trompeta').play(); preguntaAle2(false);	mom11.classList.remove('bigbang'); $('.carito').css('color','#BDBDBD');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },8000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
$('#parrafiño2').css('margin-top','2%');	
$('#parrafiño2').css('margin-bottom','2%');
document.getElementById('parrafiño2').innerHTML="<b>I listened to music.</b>"; 
$('.microfonito').css('display','none');
document.getElementById('reproducir0').click(); 
$('#information').css('display','none');
$('#reproducir0').css('opacity','1'); 
$('#reproducir0').css('pointer-events','auto');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejspeaking[18]==1){
if(contador>0){
audio10.pause();
audio10.currentTime = 0;
} 
$('#reproducir0').css('opacity','0.4'); 
$('#reproducir0').css('pointer-events','none');
contador=0;
$('#reproducir00').css('display','none'); 
$('#pause00').css('display','none');
$('#perendengues1').css('display','none'); 
$('#reproducir0').css('display','inline'); 
$('#perendengues').css('display','inline'); 
bart1 = 0;	
if((liberenWilli=="i danced"||liberenWilli=="i didn't dance"||liberenWilli=="i did not dance")&&(contadorsiño==0)){
if(liberenWilli=="i danced"){
activar[18] = 1;
}
if(liberenWilli=="i didn't dance"||liberenWilli=="i did not dance"){
suplente[0]=1;
}
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
contador=1;
document.getElementById('aplausos').play(); preguntaAle2(true);	mom11.classList.remove('bigbang');
$('.carito').css('color','#BDBDBD');$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); $('#reproducir0').css('opacity','1'); 
$('#reproducir0').css('pointer-events','auto');},4000);
contadorsiño++;
}else
if((liberenWilli!="i danced"||liberenWilli!="i didn't dance"||liberenWilli!="i did not dance")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
activar[18] = 1;
document.getElementById('trompeta').play(); preguntaAle2(false);	mom11.classList.remove('bigbang'); $('.carito').css('color','#BDBDBD');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },7500);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
$('#parrafiño2').css('margin-top','2%');	
$('#parrafiño2').css('margin-bottom','2%');
document.getElementById('parrafiño2').innerHTML="<b>I danced.</b>"; 
$('.microfonito').css('display','none');
document.getElementById('reproducir0').click(); 
$('#information').css('display','none');
$('#reproducir0').css('opacity','1'); 
$('#reproducir0').css('pointer-events','auto');
},6000);
}
}
//-------------------------------------------------------------------------------------------------------------------------------------

if (ejspeaking[19]==1){ 
if(contador>0){
audio10.pause();
audio10.currentTime = 0;
}
$('#reproducir0').css('opacity','0.4'); 
$('#reproducir0').css('pointer-events','none');
contador=0;
$('#reproducir00').css('display','none'); 
$('#pause00').css('display','none');
$('#perendengues1').css('display','none'); 
$('#reproducir0').css('display','inline'); 
$('#perendengues').css('display','inline'); 
bart1 = 0;	
if((liberenWilli=="i did homework"||liberenWilli=="i didn't do homework"||liberenWilli=="i did not do homework")&&(contadorsiño==0)){
if(liberenWilli=="i did homework"){
activar[19] = 1;
}
if(liberenWilli=="i didn't do homework"||liberenWilli=="i did not do homework"){
suplente[0]=1;
}
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
contador=1;
document.getElementById('aplausos').play(); preguntaAle2(true);	mom11.classList.remove('bigbang');
$('.carito').css('color','#BDBDBD');$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); $('#reproducir0').css('opacity','1'); 
$('#reproducir0').css('pointer-events','auto');},4000);
contadorsiño++;
}else
if((liberenWilli!="i did homework"||liberenWilli!="i didn't do homework"||liberenWilli!="i did not do homework")&&(contadorsiño==0)){
tucha++;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
activar[19] = 1;
document.getElementById('trompeta').play(); preguntaAle2(false);	mom11.classList.remove('bigbang'); $('.carito').css('color','#BDBDBD');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },7600);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
$('#parrafiño2').css('margin-top','2%');	
$('#parrafiño2').css('margin-bottom','2%');
document.getElementById('parrafiño2').innerHTML="<b>I did homework.</b>"; 
$('.microfonito').css('display','none');
document.getElementById('reproducir0').click(); 
$('#information').css('display','none');
$('#reproducir0').css('opacity','1'); 
$('#reproducir0').css('pointer-events','auto');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejspeaking[20]==1){ 
$('#reproducir00').css('opacity','0.4'); 
$('#reproducir00').css('pointer-events','none');
contador=0;
$('#reproducir0').css('display','none'); 
$('#pause').css('display','none');
$('#perendengues').css('display','none'); 
$('#reproducir00').css('display','inline'); 
$('#perendengues1').css('display','inline'); 
activar[20] = 0; 	
if((liberenWilli=="what did you do last weekend?"||liberenWilli=="what did you do last weekend")&&(contadorsiño==0)){
tucha++;
bart1=1;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
contador=1;
document.getElementById('aplausos').play(); preguntaAle2(true);	mom11.classList.remove('bigbang');
$('.carito').css('color','#BDBDBD');$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); $('#reproducir00').css('opacity','1'); 
$('#reproducir00').css('pointer-events','auto');},4000);
contadorsiño++;
}else
if((liberenWilli!="what did you do last weekend?"||liberenWilli!="what did you do last weekend")&&(contadorsiño==0)){
tucha++;
bart1=1;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('trompeta').play(); preguntaAle2(false);	mom11.classList.remove('bigbang'); $('.carito').css('color','#BDBDBD');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },8500);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
$('#cuadroPreguntas').css('margin-top','8%');
$('#cuadroPreguntas').css('margin-bottom','8%');	
$('#parrafiño1').css('margin-top','2%');	
$('#parrafiño1').css('margin-bottom','2%');
document.getElementById('parrafiño2').innerHTML="<b>What did you do last weekend?.</b>"; 
$('.microfonito').css('display','none');
document.getElementById('reproducir00').click(); 
$('#information').css('display','none');
$('#reproducir00').css('opacity','1'); 
$('#reproducir00').css('pointer-events','auto');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejspeaking[21]==1){ 
$('#reproducir00').css('opacity','0.4'); 
$('#reproducir00').css('pointer-events','none');
contador=0;
$('#reproducir0').css('display','none'); 
$('#pause').css('display','none');
$('#perendengues').css('display','none'); 
$('#reproducir00').css('display','inline'); 
$('#perendengues1').css('display','inline'); 
activar[21] = 0; 	
if((liberenWilli=="where were you and your mom last saturday?"||liberenWilli=="where were you and your mom last saturday")&&(contadorsiño==0)){
tucha++;
bart1=1;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
contador=1;
document.getElementById('aplausos').play(); preguntaAle2(true);	mom11.classList.remove('bigbang');
$('.carito').css('color','#BDBDBD');$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); 
$('#reproducir00').css('opacity','1'); 
$('#reproducir00').css('pointer-events','auto');},4000);
contadorsiño++;
}else
if((liberenWilli!="where were you and your mom last saturday?"||liberenWilli!="where were you and your mom last saturday")&&(contadorsiño==0)){
tucha++;
bart1=1;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('trompeta').play(); preguntaAle2(false);	mom11.classList.remove('bigbang'); $('.carito').css('color','#BDBDBD');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },9500);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
$('#cuadroPreguntas').css('margin-top','8%');
$('#cuadroPreguntas').css('margin-bottom','8%');	
$('#parrafiño1').css('margin-top','2%');	
$('#parrafiño1').css('margin-bottom','2%');
document.getElementById('parrafiño2').innerHTML="<b>Where were you and your mom last Saturday?</b>"; 
$('.microfonito').css('display','none');
document.getElementById('reproducir00').click(); 
$('#information').css('display','none');
$('#reproducir00').css('opacity','1'); 
$('#reproducir00').css('pointer-events','auto');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejspeaking[22]==1){ 
$('#reproducir00').css('opacity','0.4'); 
$('#reproducir00').css('pointer-events','none');
contador=0;
$('#reproducir0').css('display','none'); 
$('#pause').css('display','none');
$('#perendengues').css('display','none'); 
$('#reproducir00').css('display','inline'); 
$('#perendengues1').css('display','inline'); 
activar[22] = 0;  	
if((liberenWilli=="did you go to the party last friday?"||liberenWilli=="did you go to the party last friday")&&(contadorsiño==0)){
tucha++;
bart1=1;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
contador=1;
document.getElementById('aplausos').play(); preguntaAle2(true);	mom11.classList.remove('bigbang');
$('.carito').css('color','#BDBDBD');$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); $('#reproducir00').css('opacity','1'); 
$('#reproducir00').css('pointer-events','auto');},4000);
contadorsiño++;
}else
if((liberenWilli!="did you go to the party last friday?"||liberenWilli!="did you go to the party last friday")&&(contadorsiño==0)){
tucha++;
bart1=1;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('trompeta').play(); preguntaAle2(false);	mom11.classList.remove('bigbang'); $('.carito').css('color','#BDBDBD');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },8800);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
$('#cuadroPreguntas').css('margin-top','8%');
$('#cuadroPreguntas').css('margin-bottom','8%');	
$('#parrafiño1').css('margin-top','2%');	
$('#parrafiño1').css('margin-bottom','2%');
document.getElementById('parrafiño2').innerHTML="<b>Did you go to the party last Friday?</b>"; 
$('.microfonito').css('display','none');
document.getElementById('reproducir00').click(); 
$('#information').css('display','none');
$('#reproducir00').css('opacity','1'); 
$('#reproducir00').css('pointer-events','auto');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejspeaking[23]==1){ 	
$('#reproducir00').css('opacity','0.4'); 
$('#reproducir00').css('pointer-events','none');
contador=0;
$('#reproducir0').css('display','none'); 
$('#pause').css('display','none');
$('#perendengues').css('display','none'); 
$('#reproducir00').css('display','inline'); 
$('#perendengues1').css('display','inline'); 
activar[23] = 0; 
if((liberenWilli=="did cesar eat a hamburger last night?"||liberenWilli=="did cesar eat a hamburger last night"||liberenWilli=="did caesar eat a hamburger last night?"||liberenWilli=="did caesar eat a hamburger last night")&&(contadorsiño==0)){
tucha++;
bart1=1;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
contador=1;
document.getElementById('aplausos').play(); preguntaAle2(true);	mom11.classList.remove('bigbang');
$('.carito').css('color','#BDBDBD');$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); 
$('#reproducir00').css('opacity','1'); 
$('#reproducir00').css('pointer-events','auto');},4000);
contadorsiño++;
}else
if((liberenWilli!="did cesar eat a hamburger last night?"||liberenWilli!="did cesar eat a hamburger last night"||liberenWilli!="did caesar eat a hamburger last night?"||liberenWilli!="did caesar eat a hamburger last night")&&(contadorsiño==0)){
tucha++;
bart1=1;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('trompeta').play(); preguntaAle2(false);	mom11.classList.remove('bigbang'); $('.carito').css('color','#BDBDBD');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },8800);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
$('#cuadroPreguntas').css('margin-top','8%');
$('#cuadroPreguntas').css('margin-bottom','8%');	
$('#parrafiño1').css('margin-top','2%');	
$('#parrafiño1').css('margin-bottom','2%');
document.getElementById('parrafiño2').innerHTML="<b>Did Cesar eat a hamburger last night?</b>"; 
$('.microfonito').css('display','none');
document.getElementById('reproducir00').click(); 
$('#information').css('display','none');
$('#reproducir00').css('opacity','1'); 
$('#reproducir00').css('pointer-events','auto');
},6000);
}
}

//-------------------------------------------------------------------------------------------------------------------------------------

if (ejspeaking[24]==1){ 
$('#reproducir00').css('opacity','0.4'); 
$('#reproducir00').css('pointer-events','none');
contador=0;
$('#reproducir0').css('display','none'); 
$('#pause').css('display','none');
$('#perendengues').css('display','none'); 
$('#reproducir00').css('display','inline'); 
$('#perendengues1').css('display','inline'); 
activar[24] = 0; 	
if((liberenWilli=="what kind of movie did you watch yesterday?"||liberenWilli=="what kind of movie did you watch yesterday")&&(contadorsiño==0)){
tucha++;
bart1=1;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
contador=1;
document.getElementById('aplausos').play(); preguntaAle2(true);	mom11.classList.remove('bigbang');
$('.carito').css('color','#BDBDBD');$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); 
$('#reproducir00').css('opacity','1'); 
$('#reproducir00').css('pointer-events','auto');},4000);
contadorsiño++;
}else
if((liberenWilli!="what kind of movie did you watch yesterday?"||liberenWilli!="what kind of movie did you watch yesterday")&&(contadorsiño==0)){
tucha++;
bart1=1;
$('#mic').css('pointer-events','none');
$('#start_img').css('pointer-events','none');
$('#start_img').css('opacity','0.4');
document.getElementById('trompeta').play(); preguntaAle2(false);	mom11.classList.remove('bigbang'); $('.carito').css('color','#BDBDBD');	
contadorsiño++;
$('#continuar11').css('opacity','0.4'); 
$('#continuar11').css('pointer-events','none');
setTimeout(function(){ $('#continuar11').css('display','none');$('#continuar1').css('display','inline'); },9000);
setTimeout(function(){
document.getElementById('t1').play(); 
},4500);
setTimeout(function(){
$('#cuadroPreguntas').css('margin-top','8%');
$('#cuadroPreguntas').css('margin-bottom','8%');	
$('#parrafiño1').css('margin-top','2%');	
$('#parrafiño1').css('margin-bottom','2%');
document.getElementById('parrafiño2').innerHTML="<b>What kind of movie did you watch yesterday?</b>"; 
$('.microfonito').css('display','none');
document.getElementById('reproducir00').click(); 
$('#information').css('display','none');
$('#reproducir00').css('opacity','1'); 
$('#reproducir00').css('pointer-events','auto');
},6000);
}
}	
	
}
	
	