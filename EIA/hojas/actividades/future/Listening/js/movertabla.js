function roll(aum){

if(aum==-1)	{	
if(aux==0){aux=1;}

}

if(aum==1){
if(aux==1){aux=0;}

}
			
	if(aux==0){
		
		$('#cuadro2').css('display','none');
		$('#cuadro').css('display','inline-block');
		$('#ir2').css('visibility','hidden');
		$('#ir').css('visibility','visible');
		
		
		}
	else	
		if(aux==1)
			{$('#cuadro').css('display','none');
			$('#cuadro2').css('display','inline-block');
			$('#ir2').css('visibility','visible');
			$('#ir').css('visibility','hidden');
		}
}




