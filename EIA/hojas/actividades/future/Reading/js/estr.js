		var cont=0;
		var cuentabien=0;
		var puedo=0;
var audio1;
		

 function carga(){
	
     $('.handles').css('opacity','1');		
    audio1=document.getElementById('hablame');
 $('#plane').addClass("muestrame");
 $('nav#sig').css('opacity', '1');
 $('.sig2').css('opacity', '1');
 $('.sig').css('opacity', '1');
 $('#informa').css('opacity', '.1');

     
     temp = setTimeout(function () {
		$('#informa').css('opacity', '1');
	}, 30000);
     
     
		temp=setTimeout(function(){
		  document.getElementById("sig").style.animation="alumbra 2s infinite";
		  document.getElementById("sig").style.webkitAnimation="alumbra 2s infinite";
		},46000);
	}
	
		
		
		function check(){
		cont++;
		cuentabien=0;
				
			var first_p =$(".container ul li").index($("#uno"));
					
			if(first_p==3){
			
			document.getElementById("uno").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
			cuentabien++;
			}
			else
			document.getElementById("uno").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
			
		//lo mismo para el resto
			first_p =$(".container ul li").index($("#dos"));
			if(first_p==0){
			document.getElementById("dos").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
			cuentabien++;
			}
			else
			document.getElementById("dos").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
		//----------------
			
		first_p =$(".container ul li").index($("#tres"));
		
		if(first_p==9){
			document.getElementById("tres").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
			cuentabien++;
			}
			else
			document.getElementById("tres").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
			
		//----------------
			
			first_p =$(".container ul li").index($("#cuatro"));
			if(first_p==2){
			document.getElementById("cuatro").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
			cuentabien++;
			}
			else
			document.getElementById("cuatro").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
			
//----------------
			
			first_p =$(".container ul li").index($("#cinco"));
			 if(first_p==4){
			document.getElementById("cinco").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
			cuentabien++;
			}
			else
			document.getElementById("cinco").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
			
//----------------
			
			first_p =$(".container ul li").index($("#seis"));
			if(first_p==1){
			document.getElementById("seis").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
			cuentabien++;
			}
			else
			document.getElementById("seis").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
			
//----------------
			
			first_p =$(".container ul li").index($("#siete"));
			if(first_p==6){
			document.getElementById("siete").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
			cuentabien++;
			}
			else
			document.getElementById("siete").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
			
//----------------
			
			first_p =$(".container ul li").index($("#ocho"));
			if(first_p==5){
			document.getElementById("ocho").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
			cuentabien++;
			}
			else
			document.getElementById("ocho").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
								
//----------------
			
			first_p =$(".container ul li").index($("#nueve"));
			if(first_p==8){
			document.getElementById("nueve").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
			cuentabien++;
			}
			else
			document.getElementById("nueve").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
			

//----------------
			
			first_p =$(".container ul li").index($("#diez"));
			if(first_p==7){
			document.getElementById("diez").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
			cuentabien++;
			}
			else
			document.getElementById("diez").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
			
		
	//----------------
 if(cuentabien>6){
             
             audio1.pause();
             audio1.currentTime = 0;
			 audio1.play();
            
			 $('#plane2').addClass("muestrame");
			 $('#plane').css('display','none');
			 $('.sig').css('display','none');

		      temp=setTimeout(function(){
		      $('#r1').css('display','none');
			
			
			audio1.pause();	
			document.getElementById('instruyeme').pause();		
			resultado(cuentabien,10);
		},33000);
                
                
            }
		
			
		if(cont<3&&cuentabien<6)
			document.getElementById('mal0').play();			
		
		if(cont==3){
			audio1.pause();
            audio1.currentTime = 0;
			audio1.play();
            
			$('#plane2').addClass("muestrame");
			$('#plane').css('display','none');
			$('.sig').css('display','none');

		temp=setTimeout(function(){
		$('#r1').css('display','none');
			
			
			audio1.pause();	
			document.getElementById('instruyeme').pause();		
			resultado(cuentabien,10);
		},33000);
			
		
		}
            
           

		
		}


