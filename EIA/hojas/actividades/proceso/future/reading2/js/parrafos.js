

function parrafos() {
    "use strict";

    var ejreading=darale();
    if (ejreading[0]==1){
        document.getElementById("frase").innerHTML="Ana is going to drink a beer";
        Cad="Ana is going to drink a beer";
    }if (ejreading[1]==1){
        document.getElementById("frase").innerHTML="Luis is going exercise";
        Cad="Luis is going exercise";
    }if (ejreading[2]==1){
        document.getElementById("frase").innerHTML="Susy and pablo are going to dance";
        Cad="Susy and pablo are going to dance";
    }if (ejreading[3]==1){
        document.getElementById("frase").innerHTML="Dwan is going to watch a movie";
        Cad="Dwan is going to watch a movie";
    }if (ejreading[4]==1){
        document.getElementById("frase").innerHTML="Martha is going to do some yoga";
        Cad="Martha is going to do some yoga";
    }if (ejreading[5]==1){
        document.getElementById("frase").innerHTML="Charles and Andrew are going to eat hamburgers";
        Cad="Charles and Andrew are going to eat hamburgers";
    }if (ejreading[6]==1){
        document.getElementById("frase").innerHTML="I am going to travel";
        Cad="I am going to travel";
    }if (ejreading[7]==1){
        document.getElementById("frase").innerHTML="Clara and Nancy are going to visit the doctor";
        Cad="Clara and Nancy are going to visit the doctor";
    }if (ejreading[8]==1){
        document.getElementById("frase").innerHTML="Sara is going to listen to music";
        Cad="Sara is going to listen to music";
    }if (ejreading[9]==1){
        document.getElementById("frase").innerHTML="Marcos and I are going to play video games";
        Cad="Marcos and I are going to play video games";
    }
    
    
    
setTimeout(function(){
//$('#continuar1').css('pointer-events','auto');
$('#continuar').css('opacity','1');
jQuery("#countdown").countdown360({}).start();
},1000);
}

