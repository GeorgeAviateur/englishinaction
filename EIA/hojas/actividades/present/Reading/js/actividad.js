var aux=0,aux2=1,cont=0,end=0,cuentabien=0,cuentamal=0,temp;




   
    
    function carga(){
        $('#sig').css('opacity','.3');
        $('.sig').css('pointer-events','auto');
        $('#sig').css('opacity','1');
        $('#informa').css('opacity','.1');
		temp=setTimeout(function(){$('#informa').css('opacity','1');},30000);
        $('#plane').addClass("muestrame");
    }

function fin(){end=1;} 

function pregunta(){

	var str="",str2="";
	clearTimeout(temp);
	document.getElementById('hablame').pause();
	document.getElementById('instruyeme').pause();



	document.getElementById('mal0').pause();
	document.getElementById('mal1').pause();
	document.getElementById('mal2').pause();
	
				if(cont==0){
					$('.sig').css('display','none');
					$('#blanco').css('display','none');
					$('#q1').css('display','inline-block');
					$('#void').css('display','inline-block');
					$('#grab1').css('display','none');
					$('#grab2').css('display','none');
					$('#audio1').css('display','none');
					
					document.getElementById('ask1').play();
					}
						else{
						if(end>=0&&end<5)
							{
							str="#q"+cont;
							str2="#q"+(cont+1);
							$(str).css('display','none');
							$(str2).css('display','inline-block');
							$(str2+' div').css('display','inline');
							document.getElementById('ask'+(cont+1)).play();
							
							}
						if(end==5)	
							{
							str="#q"+cont;
							str2="#q"+(cont+1);
							$(str).css('display','none');
							$(str2).css('display','none');
							
							$('#void').css('display','none');
							
							$('article').css('display','none');
							resultado(cuentabien,5);
							cuentabien=0;
							}
					}
			cont++;
end++;			
		

}


function correcta(lleva){
	clearTimeout(temp);
	document.getElementById('bien').play();	
	cuentabien++;
	
	$('.acertar h3').addClass('bn');
	
	
	if(lleva==0){
		$('#q1 .ans').css('cursor','default');
		$('#q1 h3').removeClass('ans');
		document.getElementById('esto').removeAttribute("onclick");
		document.getElementById('es').removeAttribute("onclick");
		document.getElementById('udec1').removeAttribute("onclick");
		}
	if(lleva==1){
		$('#q2 .ans').css('cursor','default');
		$('#q2 h3').removeClass('ans');
		document.getElementById('esto2').removeAttribute("onclick");
		document.getElementById('es2').removeAttribute("onclick");
		document.getElementById('udec2').removeAttribute("onclick");
		}
	if(lleva==2){
		$('#q3.ans').css('cursor','default');
		$('#q3 h3').removeClass('ans');
		document.getElementById('esto3').removeAttribute("onclick");
		document.getElementById('es3').removeAttribute("onclick");
		document.getElementById('udec3').removeAttribute("onclick");}
	if(lleva==3){
		$('#q4.ans').css('cursor','default');
		$('#q4 h3').removeClass('ans');
		document.getElementById('esto4').removeAttribute("onclick");
		document.getElementById('es4').removeAttribute("onclick");
		document.getElementById('udec4').removeAttribute("onclick");}
	if(lleva==4){
		$('#q5.ans').css('cursor','default');
		$('#q5 h3').removeClass('ans');
		document.getElementById('esto5').removeAttribute("onclick");
		document.getElementById('es5').removeAttribute("onclick");
		document.getElementById('udec5').removeAttribute("onclick");}
	
	
	
	setTimeout(function(){
	$('.acertar h3').removeClass('bn');
		pregunta();},3000);
	}
	
	
function erronea(lleva){
clearTimeout(temp);
$('.negar h3').addClass('malongo');
$('.acertar h3').addClass('bn');
			if(lleva==0){
				$('#q1 .ans').css('cursor','default');
				$('#q1 h3').removeClass('ans');
				document.getElementById('thecorrect').play();
				document.getElementById('esto').removeAttribute("onclick");
				document.getElementById('es').removeAttribute("onclick");
				document.getElementById('udec1').removeAttribute("onclick");
				
				
				
				temp=setTimeout(function(){
					document.getElementById('mal0').play();
				},3000);
				
			
			}
			if(lleva==1)
			{
				$('#q2 .ans').css('cursor','default');
				$('#q2 h3').removeClass('ans');
				
				document.getElementById('esto2').removeAttribute("onclick");
				document.getElementById('es2').removeAttribute("onclick");
				document.getElementById('udec2').removeAttribute("onclick");
				
				document.getElementById('thecorrect').play();
				temp=setTimeout(function(){
					document.getElementById('mal1').play();
				},3000);
			
			}
			if(lleva==2){
				
				$('#q3 .ans').css('cursor','default');
				$('#q3 h3').removeClass('ans');
				
				document.getElementById('esto3').removeAttribute("onclick");
				document.getElementById('es3').removeAttribute("onclick");
				document.getElementById('udec3').removeAttribute("onclick");
				
				
			
			document.getElementById('thecorrect').play();
				temp=setTimeout(function(){
					document.getElementById('mal2').play();
				},3000);
			
			}
		if(lleva==3){
				$('#q4 .ans').css('cursor','default');
				$('#q4 h3').removeClass('ans');
				
				document.getElementById('esto4').removeAttribute("onclick");
				document.getElementById('es4').removeAttribute("onclick");
				document.getElementById('udec4').removeAttribute("onclick");
				
			
			document.getElementById('thecorrect').play();
				temp=setTimeout(function(){
					document.getElementById('mal3').play();
				},3000);
			
			}
		if(lleva==4){
				$('#q5 .ans').css('cursor','default');
				$('#q5 h3').removeClass('ans');
				
				document.getElementById('esto5').removeAttribute("onclick");
				document.getElementById('es5').removeAttribute("onclick");
				document.getElementById('udec5').removeAttribute("onclick");
				
				
			document.getElementById('thecorrect').play();
				temp=setTimeout(function(){
					document.getElementById('mal4').play();
				},3000);
			
			}
		
			
				cuentamal++;
				setTimeout(function(){$('.negar h3').removeClass('malongo');$('.acertar h3').removeClass('bn');pregunta();},6500);
				
	}
