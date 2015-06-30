		var cont=0;
		var cuentabien=0;
		var puedo=0;
		
		

 function carga(){
		$('.handles').css('opacity','1');
		alert();
		$('#sig').css('opacity','.2');
		
		temp=setTimeout(function(){
		$('#sig').css('opacity','1');
		},23000);
		
		
		temp=setTimeout(function(){
		
		document.getElementById("sig").style.animation="alumbra 2s infinite";
		document.getElementById("sig").style.webkitAnimation="alumbra 2s infinite";
		

		
		},46000);
	}
	
		
		
		function check(){
		cont++;
		cuentabien=0;
					//comento por si necesitan ajustar su ejercicio
					// buscamos en que ubicacion de la lista esta nuestro primer elemento (uno)
					//la lista va como los arreglos de 0 a n-1; :3
			var first_p =$(".container ul li").index($("#uno"));
					//si esta en la posicion deseada (9) en este caso, en el div llamado first pone un fondo alineado a la derecha q no se repite
			if(first_p==2){
			//imagen de fondo con chulitp
			document.getElementById("uno").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
			cuentabien++;
			}
			else//imagen de fondo con X
			document.getElementById("uno").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
			
		//lo mismo para el resto
			first_p =$(".container ul li").index($("#dos"));
			if(first_p==4){
			document.getElementById("dos").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
			cuentabien++;
			}
			else
			document.getElementById("dos").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
		//----------------
			
		first_p =$(".container ul li").index($("#tres"));
		
		if(first_p==1){
			document.getElementById("tres").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
			cuentabien++;
			}
			else
			document.getElementById("tres").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
			
		//----------------
			
			first_p =$(".container ul li").index($("#cuatro"));
			if(first_p==0){
			document.getElementById("cuatro").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
			cuentabien++;
			}
			else
			document.getElementById("cuatro").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
			
//----------------
			
			first_p =$(".container ul li").index($("#cinco"));
			 if(first_p==3){
			document.getElementById("cinco").style.background="url('../../../imagenes/avisos/well.png')no-repeat right";
			cuentabien++;
			}
			else
			document.getElementById("cinco").style.background="url('../../../imagenes/avisos/wrong.png')no-repeat right";
			

			
		if(cont<3&&cuentabien<6)
			document.getElementById('mal0').play();			
		
		if(cont==3){
			
			
			$('#plane2').addClass("muestrame");
			document.getElementById('hablame').play();
			$('.sig').css('display','none');
			
			
		
		temp=setTimeout(function(){
		$('#r1').css('display','none');
			
			
			document.getElementById('hablame').pause();		
			document.getElementById('instruyeme').pause();		
			resultado(cuentabien,10);
		},33000);
			
		
		}
		

		
		}


