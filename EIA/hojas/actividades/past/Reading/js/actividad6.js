

function enviar(){
var contarbien=0;

$("#r1").css('display','none');
$("#sig").css('display','none');

var traesusan1=new String( document.formR1.escogeSusan.value );
if(traesusan1=="the cinema"||traesusan1=="cinema"||traesusan1=="The cinema"||traesusan1=="Cinema")
contarbien++;

var traesusan2=new String( document.formR2.escogeSusan2.value );
if(traesusan2=="Fastfood restaurant"||traesusan2=="fastfood restaurant"||traesusan2=="2.	Fast food restaurant")
contarbien++;

var traesusan3=new String( document.formR3.escogeSusan3.value );
if(traesusan3=="the gym"||traesusan3=="gym"||traesusan3=="Gym"||traesusan3=="The gym")
contarbien++;

resultado(contarbien,3);



}

function carga(){
	
$('#plane').addClass("muestrame");

     $('#informa').css('opacity','.1');
		temp=setTimeout(function(){$('#informa').css('opacity','1');},28000);
     	
	$('.sig').css('pointer-events','auto');
	

}