$(document).ready(function() {

    
    //$('#continuar').css('display', 'none');
    $('.slideshow').cycle({
        fx: 'zoom',
        next: '#next',
        prev: '#previous',
        timeout: '10000000000000'// choose your transition type, ex: fade, scrollUp, shuffle, etc...
    });
    var controlAudio=1;
    var controlOpor=0,controlOpor2=0 ,controlOpor3=0,controlOpor4=0,controlOpor5=0,controlOpor6=0,controlOpor7=0;
    var cont=0;
    var controlRespuesta;
    var controlImagen;
    var contadorBuenas=0;
    var contadorMalas=0;
     document.getElementById("reproducir00").addEventListener("click",reproducirAudio);
   
    
    document.getElementById("imagen1").addEventListener("click",validarRespuestaImagen1);
    document.getElementById("imagen2").addEventListener("click",validarRespuestaImagen2);
    document.getElementById("imagen3").addEventListener("click",validarRespuestaImagen3);
    document.getElementById("imagen4").addEventListener("click",validarRespuestaImagen4);
    document.getElementById("imagen5").addEventListener("click",validarRespuestaImagen5);
    document.getElementById("imagen6").addEventListener("click",validarRespuestaImagen6);
    document.getElementById("imagen7").addEventListener("click",validarRespuestaImagen7);    
  
    function verImagen(){

        var algo="";
         
        $("#collage").css("display", "none");
        $(".nav").css("display", "none");
        
        $('#paraMostrar').css('display','block');
        
    if(controlRespuesta==1){
        $('#Aimagen1').css('display','inline-block');
        auto=setTimeout(function(){
        document.getElementById('audio1').play(); },2100);
        }
    if(controlRespuesta==2){
        $('#Aimagen2').css('display','inline-block');
    auto=setTimeout(function(){
        document.getElementById('audio2').play(); },2100);
        }
    
    if(controlRespuesta==3){
        $('#Aimagen3').css('display','inline-block');
    auto=setTimeout(function(){
        document.getElementById('audio3').play(); },2100);
        }

        if(controlRespuesta==4){
        $('#Aimagen4').css('display','inline-block');
     auto=setTimeout(function(){
        document.getElementById('audio4').play(); },2100);
        }

    if(controlRespuesta==5){
        $('#Aimagen5').css('display','inline-block');
    auto=setTimeout(function(){
        document.getElementById('audio5').play(); },2100);
        }

        if(controlRespuesta==6){
        $('#Aimagen6').css('display','inline-block');
    auto=setTimeout(function(){
        document.getElementById('audio6').play(); },2100);
        }
    if(controlRespuesta==7){
        $('#Aimagen7').css('display','inline-block');
    auto=setTimeout(function(){
        document.getElementById('audio7').play(); },1900);
    $('#continuar').css('display','inline');
    $("#continuar").css('opacity','1');
        
        }
    
    
    auto=setTimeout(function(){//aqui pone de nuevo el collage
    $("#collage").css("display", "inline-block");
    $(".nav").css("display", "inline-block");
    if(controlRespuesta==1)
        $('#Aimagen1').css('display','none');
    if(controlRespuesta==2)
        $('#Aimagen2').css('display','none');
    if(controlRespuesta==3)
        $('#Aimagen3').css('display','none');
        if(controlRespuesta==4)
        $('#Aimagen4').css('display','none');
    if(controlRespuesta==5)
        $('#Aimagen5').css('display','none');
        if(controlRespuesta==6)
        $('#Aimagen6').css('display','none');
    if(controlRespuesta==7)
        $('#Aimagen7').css('display','none');
    
    
    },3300);
    
    
    //  cont=0;
      auto=setTimeout(    
       function(){ 
     
           $("#reproducir").css('opacity','1');
           $('#reproducir').css('pointer-events','auto');
           $('.perendengues').css('display','none');
        },3000   );
       cont=0; 
       

       auto=setTimeout(function(){
            $("#reproducir").click();},4900);

            $('#continuar1').css('display','inline');
            $('#imagen1').css('pointer-events','none');
            $('#imagen2').css('pointer-events','none');
            $('#imagen3').css('pointer-events','none');
            $('#imagen4').css('pointer-events','none');
            $('#imagen5').css('pointer-events','none');
            $('#imagen6').css('pointer-events','none');
            $('#imagen7').css('pointer-events','none');
            $('#previous').css('display','none');
            $('#next').css('display','none');
            $('#reproducir00').css('pointer-events','none');
            $("#reproducir00").css('opacity','0.4');
      
             


    }

    function validarRespuestaImagen1() {

      
        if (controlRespuesta==1) {
            document.getElementById("good").play();
            preguntaAle2(true);
            $('#continuar1').css('display','inline');
            $('#imagen1').css('pointer-events','none');
            $('#imagen2').css('pointer-events','none');
            $('#imagen3').css('pointer-events','none');
            $('#imagen4').css('pointer-events','none');
            $('#imagen5').css('pointer-events','none');
            $('#imagen6').css('pointer-events','none');
            $('#imagen7').css('pointer-events','none');
            $('#previous').css('display','none');
            $('#next').css('display','none');
            $('#reproducir00').css('pointer-events','none');
            $("#reproducir00").css('opacity','0.4');
            tucha++;
            controlAudio++;
            
            //alert("la respuesta es correcta");
        contadorBuenas++;
          // auto=setTimeout(    
       //function(){ 
        
           //$("#reproducir").css('opacity','1');
           //$('#reproducir').css('pointer-events','auto');
           //$('.perendengues').css('display','none');
        //},008   );
        }
        else{
            cont++;
            
			if(cont==1){
          
            document.getElementById("thecorrect").play();
              
            verImagen();

            tucha++;
            preguntaAle2(false);


            //alert("la respuesta es incorrecta");
        	}
			
			
		}
    
    $("#contadorBien").text(""+contadorBuenas);
    $("#contadorMal").text(""+contadorMalas);
    }
     function validarRespuestaImagen2() {
        
       
        if (controlRespuesta==2) {
            tucha++;
            document.getElementById("good").play();
            preguntaAle2(true);
            $('#continuar1').css('display','inline');
            $('#imagen1').css('pointer-events','none');
            $('#imagen2').css('pointer-events','none');
            $('#imagen3').css('pointer-events','none');
            $('#imagen4').css('pointer-events','none');
            $('#imagen5').css('pointer-events','none');
            $('#imagen6').css('pointer-events','none');
            $('#imagen7').css('pointer-events','none');
            $('#previous').css('display','none');
            $('#next').css('display','none');
            $('#reproducir00').css('pointer-events','none');
            $("#reproducir00").css('opacity','0.4');

            //controlAudio++;
            //alert("la resp//uesta es correcta");
        contadorBuenas++;
        auto=setTimeout( 
            function(){ 
        
           $("#reproducir").css('opacity','1');
           $('#reproducir').css('pointer-events','auto');
           $('.perendengues').css('display','none');
        },008   );

        }
        else{cont++;
            if(cont==1){
            //if(contador==3)
            document.getElementById("thecorrect").play();
           
            verImagen();
            tucha++;
            preguntaAle2(false);
            //alert("la respuesta es incorrecta");
    
        }
		
	
	}
     
    $("#contadorBien").text(""+contadorBuenas);
    $("#contadorMal").text(""+contadorMalas);
    }
    function validarRespuestaImagen3() {
      
        if (controlRespuesta==3) {
            document.getElementById("good").play();
            preguntaAle2(true);
            $('#continuar1').css('display','inline');
            $('#imagen1').css('pointer-events','none');
            $('#imagen2').css('pointer-events','none');
            $('#imagen3').css('pointer-events','none');
            $('#imagen4').css('pointer-events','none');
            $('#imagen5').css('pointer-events','none');
            $('#imagen6').css('pointer-events','none');
            $('#imagen7').css('pointer-events','none');
            $('#previous').css('display','none');
            $('#next').css('display','none');
            $('#reproducir00').css('pointer-events','none');
            $("#reproducir00").css('opacity','0.4');
            tucha++;
            //alert("la respuesta es correcta");
        contadorBuenas++;
        //controlAudio++;
           auto=setTimeout( 
            function(){ 
        
           $("#reproducir").css('opacity','1');
           $('#reproducir').css('pointer-events','auto');
           $('.perendengues').css('display','none');
        },008   );
        }
        else{
            cont++;
            if(cont==1){
            document.getElementById("thecorrect").play();
          
            verImagen();
            tucha++;
            preguntaAle2(false);
            //alert("la respuesta es incorrecta");
        
        
        }
		
				
		}
      
    $("#contadorBien").text(""+contadorBuenas);
    $("#contadorMal").text(""+contadorMalas);
        
    }
    function validarRespuestaImagen4() {
         
        if (controlRespuesta==4) {
            document.getElementById("good").play();
            preguntaAle2(true);
            $('#continuar1').css('display','inline');
            $('#imagen1').css('pointer-events','none');
            $('#imagen2').css('pointer-events','none');
            $('#imagen3').css('pointer-events','none');
            $('#imagen4').css('pointer-events','none');
            $('#imagen5').css('pointer-events','none');
            $('#imagen6').css('pointer-events','none');
            $('#imagen7').css('pointer-events','none');
            $('#previous').css('display','none');
            $('#next').css('display','none');
            $('#reproducir00').css('pointer-events','none');
            $("#reproducir00").css('opacity','0.4');
            tucha++;
            //alert("la respuesta es correcta");
        contadorBuenas++;
        //controlAudio++;
           auto=setTimeout( 
            function(){ 
        
           $("#reproducir").css('opacity','1');
           $('#reproducir').css('pointer-events','auto');
           $('.perendengues').css('display','none');
        },008   );
        }
        else{cont++;
            if(cont==1){
            document.getElementById("thecorrect").play();
                     
            verImagen();
            tucha++;
            preguntaAle2(false);
           
            //alert("la respuesta es incorrecta");
        
       
        }
	
		}

        
    $("#contadorBien").text(""+contadorBuenas);
    $("#contadorMal").text(""+contadorMalas);
        
    }
    function validarRespuestaImagen5() {
     
        if (controlRespuesta==5) {
            document.getElementById("good").play();
            preguntaAle2(true);
            $('#continuar1').css('display','inline');
            $('#imagen1').css('pointer-events','none');
            $('#imagen2').css('pointer-events','none');
            $('#imagen3').css('pointer-events','none');
            $('#imagen4').css('pointer-events','none');
            $('#imagen5').css('pointer-events','none');
            $('#imagen6').css('pointer-events','none');
            $('#imagen7').css('pointer-events','none');
            $('#previous').css('display','none');
            $('#next').css('display','none');
            $('#reproducir00').css('pointer-events','none');
            $("#reproducir00").css('opacity','0.4');
            tucha++;
            //alert("la respuesta es correcta");
        contadorBuenas++;
        //controlAudio++;
           auto=setTimeout( 
            function(){ 
        
           $("#reproducir").css('opacity','1');
           $('#reproducir').css('pointer-events','auto');
           $('.perendengues').css('display','none');
        },008   );
        }
        else{cont++;
            if(cont==1){
            document.getElementById("thecorrect").play();
           
            verImagen();
            tucha++;
            preguntaAle2(false);
           // alert("la respuesta es incorrecta");
        
        
        }

		}
       
    $("#contadorBien").text(""+contadorBuenas);
    $("#contadorMal").text(""+contadorMalas);
        
    }
    function validarRespuestaImagen6() {
  
        if (controlRespuesta==6) {
            document.getElementById("good").play();
            preguntaAle2(true);
            $('#continuar1').css('display','inline');
            $('#imagen1').css('pointer-events','none');
            $('#imagen2').css('pointer-events','none');
            $('#imagen3').css('pointer-events','none');
            $('#imagen4').css('pointer-events','none');
            $('#imagen5').css('pointer-events','none');
            $('#imagen6').css('pointer-events','none');
            $('#imagen7').css('pointer-events','none');
            $('#previous').css('display','none');
            $('#next').css('display','none');
            $('#reproducir00').css('pointer-events','none');
            $("#reproducir00").css('opacity','0.4');
            tucha++;
            //alert("la respuesta es correcta");
        contadorBuenas++;
        //controlAudio++;
           auto=setTimeout( 
            function(){ 
        
           $("#reproducir").css('opacity','1');
           $('#reproducir').css('pointer-events','auto');
           $('.perendengues').css('display','none');
        },008   );
        }
        else{
            cont++;if(cont==1){
            document.getElementById("thecorrect").play();
          
            verImagen();
            tucha++;
            preguntaAle2(false);
            //alert("la respuesta es incorrecta");
        
        
        }
		
    }
        
    $("#contadorBien").text(""+contadorBuenas);
    $("#contadorMal").text(""+contadorMalas);
    
    }
    function validarRespuestaImagen7() {
        
      if (controlRespuesta==7) {
            document.getElementById("good").play();
            preguntaAle2(true);
            $('#continuar1').css('display','inline');
            $('#imagen1').css('pointer-events','none');
            $('#imagen2').css('pointer-events','none');
            $('#imagen3').css('pointer-events','none');
            $('#imagen4').css('pointer-events','none');
            $('#imagen5').css('pointer-events','none');
            $('#imagen6').css('pointer-events','none');
            $('#imagen7').css('pointer-events','none');
            $('#previous').css('display','none');
            $('#next').css('display','none');
             $('#reproducir00').css('pointer-events','none');
            $("#reproducir00").css('opacity','0.4');

            tucha++;
            //alert("la respuesta es correcta");
        contadorBuenas++;
        //controlAudio++;
           auto=setTimeout( 
            function(){ 
        
           $("#reproducir").css('opacity','1');
           $('#reproducir').css('pointer-events','auto');
           $('.perendengues').css('display','none');
        },008   );
        }
        else{
            cont++;if(cont==1){
            document.getElementById("thecorrect").play();
          
            verImagen();
            tucha++;
            preguntaAle2(false);
            //alert("la respuesta es incorrecta");
        
        
        }
        
    }
    
    $("#contadorBien").text(""+contadorBuenas);
    $("#contadorMal").text(""+contadorMalas);
    
    }
    
    function reproducirAudio(){
        if(alo==1) {
                var audio=document.getElementById("audio1");
                audio.play();
                controlRespuesta=1;
                controlOpor++;
                //if(contadorDeAudio==3)
          if (controlOpor==1){
            $('#perendengues1').css('pointer-events','auto'); 
            document.getElementById("primero").checked = true;
            $('#perendengues1').css('pointer-events','none');

        }
        if (controlOpor==2){
            $('#perendengues1').css('pointer-events','auto'); 
            document.getElementById("segundo").checked = true;
            $('#perendengues1').css('pointer-events','none'); 
        }
        if (controlOpor==3){
            $('#perendengues1').css('pointer-events','auto'); 
            document.getElementById("tercero").checked = true;
            $('#perendengues1').css('pointer-events','none'); 
            $("#reproducir").css('opacity','0.4');
            $('#reproducir').css('pointer-events','none');
            /*$("#reproduce00").css('opacity','0.4');
            $('#reproduce00').css('pointer-events','none');*/
                }
        }

        if(alo==2) {
                var audio=document.getElementById("audio2");
                audio.play();
                controlRespuesta=2;
                controlOpor++;
                //if(contadorDeAudio==3)
          if (controlOpor==1){
            $('#perendengues1').css('pointer-events','auto'); 
            document.getElementById("primero").checked = true;
            $('#perendengues1').css('pointer-events','none');

        }
        if (controlOpor==2){
            $('#perendengues1').css('pointer-events','auto'); 
            document.getElementById("segundo").checked = true;
            $('#perendengues1').css('pointer-events','none'); 
        }
        if (controlOpor==3){
            $('#perendengues1').css('pointer-events','auto'); 
            document.getElementById("tercero").checked = true;
            $('#perendengues1').css('pointer-events','none'); 
            $("#reproducir").css('opacity','0.4');
            $('#reproducir').css('pointer-events','none');
            /*$("#reproduce00").css('opacity','0.4');
            $('#reproduce00').css('pointer-events','none');*/
                }
        }
         if(alo==3) {
                var audio=document.getElementById("audio3");
                audio.play();
                controlRespuesta=3;
                controlOpor++;
                //if(contadorDeAudio==3)
          if (controlOpor==1){
            $('#perendengues1').css('pointer-events','auto'); 
            document.getElementById("primero").checked = true;
            $('#perendengues1').css('pointer-events','none');

        }
        if (controlOpor==2){
            $('#perendengues1').css('pointer-events','auto'); 
            document.getElementById("segundo").checked = true;
            $('#perendengues1').css('pointer-events','none'); 
        }
        if (controlOpor==3){
            $('#perendengues1').css('pointer-events','auto'); 
            document.getElementById("tercero").checked = true;
            $('#perendengues1').css('pointer-events','none'); 
            $("#reproducir").css('opacity','0.4');
            $('#reproducir').css('pointer-events','none');
            /*$("#reproduce00").css('opacity','0.4');
            $('#reproduce00').css('pointer-events','none');*/
                }
        }
        if(alo==4) {
                var audio=document.getElementById("audio4");
                audio.play();
                controlRespuesta=4;
                controlOpor++;
                //if(contadorDeAudio==3)
          if (controlOpor==1){
            $('#perendengues1').css('pointer-events','auto'); 
            document.getElementById("primero").checked = true;
            $('#perendengues1').css('pointer-events','none');

        }
        if (controlOpor==2){
            $('#perendengues1').css('pointer-events','auto'); 
            document.getElementById("segundo").checked = true;
            $('#perendengues1').css('pointer-events','none'); 
        }
        if (controlOpor==3){
            $('#perendengues1').css('pointer-events','auto'); 
            document.getElementById("tercero").checked = true;
            $('#perendengues1').css('pointer-events','none'); 
            $("#reproducir").css('opacity','0.4');
            $('#reproducir').css('pointer-events','none');
            /*$("#reproduce00").css('opacity','0.4');
            $('#reproduce00').css('pointer-events','none');*/
                }
        }
        if(alo==5) {
                var audio=document.getElementById("audio5");
                audio.play();
                controlRespuesta=5;
                controlOpor++;
                //if(contadorDeAudio==3)
          if (controlOpor==1){
            $('#perendengues1').css('pointer-events','auto'); 
            document.getElementById("primero").checked = true;
            $('#perendengues1').css('pointer-events','none');

        }
        if (controlOpor==2){
            $('#perendengues1').css('pointer-events','auto'); 
            document.getElementById("segundo").checked = true;
            $('#perendengues1').css('pointer-events','none'); 
        }
        if (controlOpor==3){
            $('#perendengues1').css('pointer-events','auto'); 
            document.getElementById("tercero").checked = true;
            $('#perendengues1').css('pointer-events','none'); 
            $("#reproducir").css('opacity','0.4');
            $('#reproducir').css('pointer-events','none');
            /*$("#reproduce00").css('opacity','0.4');
            $('#reproduce00').css('pointer-events','none');*/
                }
        }
        if(alo==6) {
                var audio=document.getElementById("audio6");
                audio.play();
                controlRespuesta=6;
                controlOpor++;
                //if(contadorDeAudio==3)
          if (controlOpor==1){
            $('#perendengues1').css('pointer-events','auto'); 
            document.getElementById("primero").checked = true;
            $('#perendengues1').css('pointer-events','none');

        }
        if (controlOpor==2){
            $('#perendengues1').css('pointer-events','auto'); 
            document.getElementById("segundo").checked = true;
            $('#perendengues1').css('pointer-events','none'); 
        }
        if (controlOpor==3){
            $('#perendengues1').css('pointer-events','auto'); 
            document.getElementById("tercero").checked = true;
            $('#perendengues1').css('pointer-events','none'); 
            $("#reproducir").css('opacity','0.4');
            $('#reproducir').css('pointer-events','none');
            /*$("#reproduce00").css('opacity','0.4');
            $('#reproduce00').css('pointer-events','none');*/
                }
        }
        if(alo==7) {
                var audio=document.getElementById("audio7");
                audio.play();
                controlRespuesta=7;
                controlOpor++;
                //if(contadorDeAudio==3)
          if (controlOpor==1){
            $('#perendengues1').css('pointer-events','auto'); 
            document.getElementById("primero").checked = true;
            $('#perendengues1').css('pointer-events','none');

        }
        if (controlOpor==2){
            $('#perendengues1').css('pointer-events','auto'); 
            document.getElementById("segundo").checked = true;
            $('#perendengues1').css('pointer-events','none'); 
        }
        if (controlOpor==3){
            $('#perendengues1').css('pointer-events','auto'); 
            document.getElementById("tercero").checked = true;
            $('#perendengues1').css('pointer-events','none'); 
            $("#reproducir").css('opacity','0.4');
            $('#reproducir').css('pointer-events','none');
            /*$("#reproduce00").css('opacity','0.4');
            $('#reproduce00').css('pointer-events','none');*/
                }
        }
        
            
            }
        
    
    $("#continuar").click(function(){
        
        document.getElementById("audio1").pause();
        document.getElementById("audio2").pause();
        document.getElementById("audio3").pause();
        document.getElementById("audio4").pause();
        document.getElementById("audio5").pause();
        document.getElementById("audio6").pause();
        document.getElementById("audio7").pause();
        $("#audiesillos").css('display','none');
        //$("#r1").css('display','none');
        $('#reproducir').css('display','none');
        $(',perendengues').css('display','none');
        $('#rep').css('display','none');
        $("#continuar").css('display','none');resultado(contadorBuenas,7);});
});



function diceAudio(){auto=setTimeout(function(){
    
   
    document.getElementById('resultado1').innerHTML='Go to the cinema';
    document.getElementById('audio7').play();},1100);

auto=setTimeout(    
        function(){  
            document.getElementById('resultado1').innerHTML='Listen to music';    
document.getElementById('audio5').play();  $("#next").click();

},3800   );

auto=setTimeout(    function(){$("#next").click();document.getElementById('resultado1').innerHTML='Dance'; 
document.getElementById('audio1').play();    },5800 );

auto=setTimeout(    function(){$("#next").click();document.getElementById('resultado1').innerHTML='Do aerobics'; 
document.getElementById('audio6').play();  },8100   );

auto=setTimeout(function(){$("#next").click();document.getElementById('resultado1').innerHTML='Drink cocktails'; 
document.getElementById('audio2').play(); },10800);

auto=setTimeout(function(){$("#next").click();document.getElementById('resultado1').innerHTML='Drink beer'
    document.getElementById('audio3').play();;},12100);

auto=setTimeout(function(){$("#next").click();

    document.getElementById('resultado1').innerHTML='Do yoga'
    document.getElementById('audio4').play();;},15000);
auto=setTimeout(function(){

    $('#labelito').css('display','none');
     $('#next').css('visibility','visible');
    $('#previous').css('visibility','visible');
     $('#perendengues1').css('display', 'block');
    $('#reproducir').css('visibility','visible');

    $('#reproducir').css('display','block');
 },18000);}
	
	
	
	
function carga(){

    
    $('#next').css('visibility','hidden');
    $('#previous').css('visibility','hidden');
    $('#reproducir').css('visibility','hidden');
   
  


    diceAudio();
   




}