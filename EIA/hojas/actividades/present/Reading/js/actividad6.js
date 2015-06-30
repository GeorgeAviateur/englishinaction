function revform(num){

if(num==0)
   check2(document.formR1,0);
if(num==1)
   check2(document.formR2,1);
if(num==2)
   check2(document.formR3,2);
  
   

}



function check2(f,id){
cont=0;
/*
if(id==0){
// INSTANCIAS

	var traecarlos1=new String( f.like1.value ); 
	var traecarlos2=new String( f.like2.value ); 
	var traecarlos3=new String( f.like3.value ); 
	var traecarlos4=new String( f.like4.value ); 
	
	
	var disgcarlos1=new String( f.dlike1.value ); 
	var disgcarlos2=new String( f.dlike2.value ); 
	var disgcarlos3=new String( f.dlike3.value ); 

	
	
	disgcarlos1=disgcarlos1.toLowerCase();
	disgcarlos2=disgcarlos2.toLowerCase();
	disgcarlos3=disgcarlos3.toLowerCase();
	
	traecarlos1=traecarlos1.toLowerCase();
	traecarlos2=traecarlos2.toLowerCase();
	traecarlos3=traecarlos3.toLowerCase();
	traecarlos4=traecarlos4.toLowerCase();
	
	
	var traecarlos=[traecarlos1,traecarlos2,traecarlos3,traecarlos4];
	var disgcarlos=[disgcarlos1,disgcarlos2,disgcarlos3];
	
//respuestas	
	var rtacarlos = ["going to the gym","eating pizza","listening to rock music","dancing and having fun","action movies"];
	var rtadcarlos = ["listening to vallenato","eating chips","horror movies"];
	
	
//validación	
			for(var i=0 ; i<4;i++){	
					if(traecarlos[i]=="")
						$('#cuadro #like'+(i+1)).css('border','1px solid gray');	
					if(traecarlos[i]!="")
						$('#cuadro #like'+(i+1)).css('border','1px solid red');

					for(var j=0; j<4; j++){
							if(traecarlos[i]==rtacarlos[j]){
								$('#cuadro #like'+(i+1)).css('border','3px solid #00ff18');
								rtacarlos[j]="-No mas-";
								cont++;
								}
							}
						}
	
			for(var i=0 ; i<3;i++){	
					if(disgcarlos[i]=="")
						$('#cuadro #dlike'+(i+1)).css('border','1px solid gray');	
					if(disgcarlos[i]!="")
						$('#cuadro #dlike'+(i+1)).css('border','1px solid red');

					for(var j=0; j<3; j++){
						if(disgcarlos[i]==rtadcarlos[j]){
							$('#cuadro #dlike'+(i+1)).css('border','3px solid #00ff18');
							rtadcarlos[j]="-No mas-";
							cont++;
							}
						}
					}
				
		}//end if 0
		
	if(id==1){
	
	
		var disgana1=new String( f.dlike1.value ); 
		var disgana2=new String( f.dlike2.value ); 
		var disgana3=new String( f.dlike3.value ); 
		var traeana1=new String( f.like1.value ); 
		var traeana2=new String( f.like2.value ); 
		var traeana3=new String( f.like3.value ); 
		var traeana4=new String( f.like4.value ); 
		var traeana5=new String( f.like5.value );
		
		disgana1=disgana1.toLowerCase();
		disgana2=disgana2.toLowerCase();
		disgana3=disgana3.toLowerCase();
		traeana1=traeana1.toLowerCase();
		traeana2=traeana2.toLowerCase();
		traeana3=traeana3.toLowerCase();
		traeana4=traeana4.toLowerCase();
		traeana5=traeana5.toLowerCase();
		
		var traeana=[traeana1,traeana2,traeana3,traeana4,traeana5];
		var disgana=[disgana1,disgana2,disgana3];
	
		var rtaana = ["staying at home","listening to romantic music","reading","eating fruits and vegetables","romantic movies"];
		var rtadana = ["horror movies","going to the gym","dancing"];

	
	
	
				for(var i=0 ; i<5;i++){	
					if(traeana[i]=="")
						$('#cuadro2 #like'+(i+1)).css('border','1px solid gray');	
					if(traeana[i]!="")
						$('#cuadro2 #like'+(i+1)).css('border','1px solid red');

						for(var j=0; j<5; j++){
							if(traeana[i]==rtaana[j]){
								$('#cuadro2 #like'+(i+1)).css('border','3px solid #00ff18');
								rtaana[j]="-No mas-";
								cont++;
								}
							}
						}
		
				for(var i=0 ; i<3;i++){	
					if(disgana[i]=="")
							$('#cuadro2 #dlike'+(i+1)).css('border','1px solid gray');	
					if(disgana[i]!="")
							$('#cuadro2 #dlike'+(i+1)).css('border','1px solid red');

						for(var j=0; j<3; j++){
							if(disgana[i]==rtadana[j]){
								$('#cuadro2 #dlike'+(i+1)).css('border','3px solid #00ff18');
								rtadana[j]="-No mas-";
								cont++;
							}
						}
					}
				
}//end if 1


if(id==2){
		var disgsusan1=new String( f.dlike1.value ); 
		var disgsusan2=new String( f.dlike2.value ); 
		var disgsusan3=new String( f.dlike3.value ); 
		var traesusan1=new String( f.like1.value ); 
		var traesusan2=new String( f.like2.value ); 
		var traesusan3=new String( f.like3.value ); 
		var traesusan4=new String( f.like4.value ); 
		var traesusan5=new String( f.like5.value );
		
		disgsusan1=disgsusan1.toLowerCase();
		disgsusan2=disgsusan2.toLowerCase();
		disgsusan3=disgsusan3.toLowerCase();
		traesusan1=traesusan1.toLowerCase();
		traesusan2=traesusan2.toLowerCase();
		traesusan3=traesusan3.toLowerCase();
		traesusan4=traesusan4.toLowerCase();
		traesusan5=traesusan5.toLowerCase();
		
		var traesusan=[traesusan1,traesusan2,traesusan3,traesusan4,traesusan5];
		var disgsusan=[disgsusan1,disgsusan2,disgsusan3];
	
		var rtasusan = ["science fiction and action movies","doing aerobics","going to clubs and pubs","drinking milkshake"];
		var rtadsusan = ["horror movies","listening to tropical music"];

	
	
	
				for(var i=0 ; i<5;i++){	
					if(traesusan[i]=="")
						$('#cuadro3 #like'+(i+1)).css('border','1px solid gray');	
					if(traesusan[i]!="")
						$('#cuadro3 #like'+(i+1)).css('border','1px solid red');

						for(var j=0; j<5; j++){
							if(traesusan[i]==rtasusan[j]){
								$('#cuadro3 #like'+(i+1)).css('border','3px solid #00ff18');
								rtasusan[j]="-No mas-";
								cont++;
								}
							}
						}
		
				for(var i=0 ; i<3;i++){	
					if(disgsusan[i]=="")
							$('#cuadro3 #dlike'+(i+1)).css('border','1px solid gray');	
					if(disgsusan[i]!="")
							$('#cuadro3 #dlike'+(i+1)).css('border','1px solid red');

						for(var j=0; j<3; j++){
							if(disgsusan[i]==rtadsusan[j]){
								$('#cuadro3 #dlike'+(i+1)).css('border','3px solid #00ff18');
								rtadsusan[j]="-No mas-";
								cont++;
							}
						}
					}



}//end if 2

*/
return cont;

}

function putCoso(){
	
	$("#susan").css('display','inline-block');
	
	$(".sig").css('display','none');
	$(".buttonContainer").css('display','none');
	$("#ir").css('display','none');
	$("#ir2").css('display','none');
	$("#showtab").css('display','none');
	$("#sig2").css('display','inline-block');
	
}
function enviar(){
var contarbien=0;

contarbien=check2(document.formR1,0);
contarbien+=check2(document.formR2,1);
contarbien+=check2(document.formR3,2);
$("#r1").css('display','none');
$("#sig2").css('display','none');

var traesusan=new String( susan.escogeSusan.value );

if(traesusan=="susan"||traesusan=="Susan")
contarbien=1;

resultado(contarbien,1);


}

function carga(){$('#plane').addClass("muestrame");}