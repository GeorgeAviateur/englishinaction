var tucha=0;
var otratucha=0;


var correct;
var temp;
function check(id){
    
	if (ejreading[0]==1||ejreading[1]==1||ejreading[2]==1||ejreading[3]==1||ejreading[4]==1||ejreading[5]==1||ejreading[6]==1||ejreading[7]==1||ejreading[8]==1||ejreading[9]==1){
        
        if(id===Cad){document.getElementById('aplausos').play();
            temp=setTimeout(function(){preguntaAle2(true);},3000);
            $('#myRoundabout li').css('background','green');
            $('#myRoundabout li').css('pointer-events','none');
            }
        else {document.getElementById('trompeta').play();
             temp=setTimeout(function(){preguntaAle2(false);},3000);
              $('#myRoundabout li').css('background','red');
              $('#myRoundabout li').css('pointer-events','none');
              
             }
	}
	
}