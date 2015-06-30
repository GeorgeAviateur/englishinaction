

function parrafos() {
    "use strict";

    var ejreading=darale();
    if (ejreading[0]==1){
        document.getElementById("frase").innerHTML="Andrea went to the movies. She watched a 3D movie. She ate popcorn and drank coke.";
        Cad="Andrea went to the movies. She watched a 3D movie. She ate popcorn and drank coke";
    }if (ejreading[1]==1){
        document.getElementById("frase").innerHTML="Sergio went to a bar with some friends. He danced and drank some beers.";
        Cad="Sergio went to a bar with some friends. He danced and drank some beers.";
    }if (ejreading[2]==1){
        document.getElementById("frase").innerHTML="Susy and Pablo went to the gym. They did some cardio exercises. They took a Yoga class.";
        Cad="Susy and Pablo went to the gym. They did some cardio exercises. They took a Yoga class.";
    }if (ejreading[3]==1){
        document.getElementById("frase").innerHTML="Cristina went to a restaurant yesterday. She ate a salad. She drank water.";
        Cad="Cristina went to a restaurant yesterday. She ate a salad. She drank water";
    }if (ejreading[4]==1){
        document.getElementById("frase").innerHTML="Steven went to Ann's house last night. They watched a horror movie. They ate hot dogs.";
        Cad="Steven went to Ann's house last night. They watched a horror movie. They ate hot dogs";
    }
    
    
    
setTimeout(function(){
//$('#continuar1').css('pointer-events','auto');
$('#continuar').css('opacity','1');
jQuery("#countdown").countdown360({}).start();
},1000);
}

