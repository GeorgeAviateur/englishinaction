
function reset(){

		$('#item3 h6').css('visibility','hidden');
		$('#item2 h6').css('visibility','hidden');
		$('#item1 h6').css('visibility','hidden');
		
    
        $('#item3 h6').css('z-index','0');
		$('#item2 h6').css('z-index','0');
		$('#item1 h6').css('z-index','0');
}




function abre(){
					
						$('#overlay').fadeIn('fast',function(){
							$('#box').animate({'left':'12%'},500);
						});
				}
                
				
				function boxclose(){
                    $('#box').animate({'left':'-80%'},500,function(){
                        $('#overlay').fadeOut('fast');
                    });
				}