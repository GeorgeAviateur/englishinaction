$(document).ready(function() {



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
    document.getElementById("reproducir").addEventListener("click",reproducirAudio);
    document.getElementById("reproducir2").addEventListener("click",reproducirAudio);
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
        
    if(controlRespuesta==1)
        $('#Aimagen1').css('display','inline-block');
    if(controlRespuesta==2)
        $('#Aimagen2').css('display','inline-block');
    if(controlRespuesta==3)
        $('#Aimagen3').css('display','inline-block');
        if(controlRespuesta==4)
        $('#Aimagen4').css('display','inline-block');
    if(controlRespuesta==5)
        $('#Aimagen5').css('display','inline-block');
        if(controlRespuesta==6)
        $('#Aimagen6').css('display','inline-block');
    if(controlRespuesta==7)
        $('#Aimagen7').css('display','inline-block');
    
    
    
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
       controlAudio++;
    }

    function validarRespuestaImagen1() {

        
        if (controlRespuesta==1) {
            document.getElementById("good").play();
            controlAudio++;
            //alert("la respuesta es correcta");
        contadorBuenas++;
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
            
    
            //alert("la respuesta es incorrecta");
        	}
			
			
		}
    
    $("#contadorBien").text(""+contadorBuenas);
    $("#contadorMal").text(""+contadorMalas);
    }
     function validarRespuestaImagen2() {
        
       
        if (controlRespuesta==2) {
            document.getElementById("good").play();
            controlAudio++;
            //alert("la respuesta es correcta");
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
            //alert("la respuesta es incorrecta");
    
        }
		
	
	}
     
    $("#contadorBien").text(""+contadorBuenas);
    $("#contadorMal").text(""+contadorMalas);
    }
    function validarRespuestaImagen3() {
      
        if (controlRespuesta==3) {
            document.getElementById("good").play();
            //alert("la respuesta es correcta");
        contadorBuenas++;
        controlAudio++;
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
            //alert("la respuesta es incorrecta");
        
        
        }
		
				
		}
      
    $("#contadorBien").text(""+contadorBuenas);
    $("#contadorMal").text(""+contadorMalas);
        
    }
    function validarRespuestaImagen4() {
         
        if (controlRespuesta==4) {
            document.getElementById("good").play();
            //alert("la respuesta es correcta");
        contadorBuenas++;
        controlAudio++;
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
           
            //alert("la respuesta es incorrecta");
        
       
        }
	
		}

        
    $("#contadorBien").text(""+contadorBuenas);
    $("#contadorMal").text(""+contadorMalas);
        
    }
    function validarRespuestaImagen5() {
     
        if (controlRespuesta==5) {
            document.getElementById("good").play();
            //alert("la respuesta es correcta");
        contadorBuenas++;
        controlAudio++;
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
           // alert("la respuesta es incorrecta");
        
        
        }

		}
       
    $("#contadorBien").text(""+contadorBuenas);
    $("#contadorMal").text(""+contadorMalas);
        
    }
    function validarRespuestaImagen6() {
  
        if (controlRespuesta==6) {
            document.getElementById("good").play();
            //alert("la respuesta es correcta");
        contadorBuenas++;
        controlAudio++;
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
            //alert("la respuesta es incorrecta");
        
        
        }
		
    }
        
    $("#contadorBien").text(""+contadorBuenas);
    $("#contadorMal").text(""+contadorMalas);
    
    }
    function validarRespuestaImagen7() {
        
        if (controlRespuesta==7) {
            document.getElementById("good").play();
            //alert("la respuesta es correcta");
        contadorBuenas++;
        controlAudio++;
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
           
        
        }     

		}
    if (controlAudio==7) {
        controlRespuesta=null;
    }
    
    $("#contadorBien").text(""+contadorBuenas);
    $("#contadorMal").text(""+contadorMalas);
    
    }
    
    function reproducirAudio(){
        switch(controlAudio){        
            case 1: {
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


      

       //auto=setTimeout(    
       // function(){  
           
            // },18700   );

       
    
                }
            break;
            case 2: {
           
          
            
             $("#perendengues1").css('display','none');
            $("#perendengues2").css('display','inline');
                var audio=document.getElementById("audio2");
                audio.play();
                controlRespuesta=2;
                 controlOpor2++;
                //if(contadorDeAudio==3)
          if (controlOpor2==1){
            $('#perendengues2').css('pointer-events','auto'); 
            document.getElementById("primero1").checked = true;
            $('#perendengues2').css('pointer-events','none');

        }
        if (controlOpor2==2){
            $('#perendengues2').css('pointer-events','auto'); 
            document.getElementById("segundo1").checked = true;
            $('#perendengues2').css('pointer-events','none'); 
        }
        if (controlOpor2==3){
            $('#perendengues2').css('pointer-events','auto'); 
            document.getElementById("tercero1").checked = true;
            $('#perendengues2').css('pointer-events','none'); 
            $("#reproducir").css('opacity','0.4');
            $('#reproducir').css('pointer-events','none');
            /*$("#reproduce00").css('opacity','0.4');
            $('#reproduce00').css('pointer-events','none');*/
        }




                
            break;
            }      
            case 3: {
                 $("#perendengues2").css('display','none');
            $("#perendengues3").css('display','inline');
                var audio=document.getElementById("audio3");
                audio.play();
                controlRespuesta=3;
                controlOpor3++;
                //if(contadorDeAudio==3)
          if (controlOpor3==1){
            $('#perendengues3').css('pointer-events','auto'); 
            document.getElementById("primero2").checked = true;
            $('#perendengues3').css('pointer-events','none');

        }
        if (controlOpor3==2){
            $('#perendengues3').css('pointer-events','auto'); 
            document.getElementById("segundo2").checked = true;
            $('#perendengues3').css('pointer-events','none'); 
        }
        if (controlOpor3==3){
            $('#perendengues3').css('pointer-events','auto'); 
            document.getElementById("tercero2").checked = true;
            $('#perendengues3').css('pointer-events','none'); 
            $("#reproducir").css('opacity','0.4');
            $('#reproducir').css('pointer-events','none');
            /*$("#reproduce00").css('opacity','0.4');
            $('#reproduce00').css('pointer-events','none');*/
        }


              
                }
            break;
            case 4: {
            $("#perendengues3").css('display','none');
            $("#perendengues4").css('display','inline');
                var audio=document.getElementById("audio4");
                audio.play();
                controlRespuesta=4;
                             controlOpor4++;
                //if(contadorDeAudio==3)
          if (controlOpor4==1){
            $('#perendengues4').css('pointer-events','auto'); 
            document.getElementById("primero3").checked = true;
            $('#perendengues4').css('pointer-events','none');

        }
        if (controlOpor4==2){
            $('#perendengues4').css('pointer-events','auto'); 
            document.getElementById("segundo3").checked = true;
            $('#perendengues4').css('pointer-events','none'); 
        }
        if (controlOpor4==3){
            $('#perendengues4').css('pointer-events','auto'); 
            document.getElementById("tercero3").checked = true;
            $('#perendengues4').css('pointer-events','none'); 
            $("#reproducir").css('opacity','0.4');
            $('#reproducir').css('pointer-events','none');
            /*$("#reproduce00").css('opacity','0.4');
            $('#reproduce00').css('pointer-events','none');*/
        }
            break;
            }      
            case 5: {
            $("#perendengues4").css('display','none');
            $("#perendengues5").css('display','inline');
                var audio=document.getElementById("audio5");
                audio.play();
                controlRespuesta=5;
                                           controlOpor5++;
                //if(contadorDeAudio==3)
          if (controlOpor5==1){
            $('#perendengues5').css('pointer-events','auto'); 
            document.getElementById("primero4").checked = true;
            $('#perendengues5').css('pointer-events','none');

        }
        if (controlOpor5==2){
            $('#perendengues5').css('pointer-events','auto'); 
            document.getElementById("segundo4").checked = true;
            $('#perendengues5').css('pointer-events','none'); 
        }
        if (controlOpor5==3){
            $('#perendengues5').css('pointer-events','auto'); 
            document.getElementById("tercero4").checked = true;
            $('#perendengues5').css('pointer-events','none'); 
            $("#reproducir").css('opacity','0.4');
            $('#reproducir').css('pointer-events','none');
            /*$("#reproduce00").css('opacity','0.4');
            $('#reproduce00').css('pointer-events','none');*/
        }
                
                }
            break;
            case 6: {
            $("#perendengues5").css('display','none');
            $("#perendengues6").css('display','inline');
                var audio=document.getElementById("audio6");
                audio.play();
                controlRespuesta=6;
                    controlRespuesta=6;
                                           controlOpor6++;
                //if(contadorDeAudio==3)
          if (controlOpor6==1){
            $('#perendengues6').css('pointer-events','auto'); 
            document.getElementById("primero5").checked = true;
            $('#perendengues6').css('pointer-events','none');

        }
        if (controlOpor6==2){
            $('#perendengues6').css('pointer-events','auto'); 
            document.getElementById("segundo5").checked = true;
            $('#perendengues6').css('pointer-events','none'); 
        }
        if (controlOpor6==3){
            $('#perendengues6').css('pointer-events','auto'); 
            document.getElementById("tercero5").checked = true;
            $('#perendengues6').css('pointer-events','none'); 
            $("#reproducir").css('opacity','0.4');
            $('#reproducir').css('pointer-events','none');
            /*$("#reproduce00").css('opacity','0.4');
            $('#reproduce00').css('pointer-events','none');*/
        }
                
            break;
            }
            case 7: {
                $("#perendengues6").css('display','none');
            $("#perendengues7").css('display','inline');
                var audio=document.getElementById("audio7");
                audio.play();
                controlRespuesta=7;                 
                controlOpor7++;
                //if(contadorDeAudio==3)
          if (controlOpor7==1){
            $('#perendengues7').css('pointer-events','auto'); 
            document.getElementById("primero6").checked = true;
            $('#perendengues6').css('pointer-events','none');

        }
        if (controlOpor7==2){
            $('#perendengues7').css('pointer-events','auto'); 
            document.getElementById("segundo6").checked = true;
            $('#perendengues7').css('pointer-events','none'); 
        }
        if (controlOpor7==3){
            $('#perendengues7').css('pointer-events','auto'); 
            document.getElementById("tercero6").checked = true;
            $('#perendengues7').css('pointer-events','none'); 
            $("#reproducir").css('opacity','0.4');
            $('#reproducir').css('pointer-events','none');
            /*$("#reproduce00").css('opacity','0.4');
            $('#reproduce00').css('pointer-events','none');*/
        }
                
            break;
            }
        }
    }
    $("#continuar").click(function(){$("#r1").css('display','none');$('#reproducir').css('display','none');$("#continuar").css('display','none');resultado(contadorBuenas,7);});
});



function diceAudio(){auto=setTimeout(function(){
    
   
    document.getElementById('resultado1').innerHTML='Go to the cinema';
    document.getElementById('audio7').play();},16600);

auto=setTimeout(    
        function(){  
            document.getElementById('resultado1').innerHTML='Listen to music';    
document.getElementById('audio5').play();  $("#next").click();

},18700   );

auto=setTimeout(    function(){$("#next").click();document.getElementById('resultado1').innerHTML='Dance'; 
document.getElementById('audio1').play();    },21400 );

auto=setTimeout(    function(){$("#next").click();document.getElementById('resultado1').innerHTML='Do aerobics'; 
document.getElementById('audio6').play();  },23900   );

auto=setTimeout(function(){$("#next").click();document.getElementById('resultado1').innerHTML='Drink cocktails'; 
document.getElementById('audio2').play(); },25800);

auto=setTimeout(function(){$("#next").click();document.getElementById('resultado1').innerHTML='Drink beer'
    document.getElementById('audio3').play();;},27500);

auto=setTimeout(function(){$("#next").click();document.getElementById('resultado1').innerHTML='Do yoga'
    document.getElementById('audio4').play();},29200);
auto=setTimeout(function(){

    $('#labelito').css('display','none');
     $('#next').css('visibility','visible');
    $('#previous').css('visibility','visible');
     $('#perendengues1').css('display', 'block');
    $('#reproducir').css('visibility','visible');

    $('#reproducir').css('display','block');
 },31300);}
	
	
	
	
function carga(){

    
    $('#next').css('visibility','hidden');
    $('#previous').css('visibility','hidden');
    $('#reproducir').css('visibility','hidden');
   

    diceAudio();
  



}