function roll(aum){

if(aum==-1)	{	
if(aux==0){aux=2;}
else
if(aux==2||aux==1){aux--;}
}

if(aum==1){
if(aux==0||aux==1){aux++;}
else
if(aux==2){aux=0;}
}
			
	if(aux==0)
		{$('#cuadro3').css('display','none');
		$('#cuadro2').css('display','none');
		$('#cuadro').css('display','inline-block');
		}
	else	
		if(aux==1)
			{$('#cuadro').css('display','none');
			$('#cuadro2').css('display','inline-block');
			$('#cuadro3').css('display','none');
		}
	else
		if(aux==2)
			{$('#cuadro3').css('display','inline-block');
			$('#cuadro2').css('display','none');
			$('#cuadro').css('display','none');
			}
}





