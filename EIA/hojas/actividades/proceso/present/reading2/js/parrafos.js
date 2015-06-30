

function parrafos() {
    "use strict";

    var ejreading=darale();
    if (ejreading[0]==1){
        document.getElementById("frase").innerHTML="She likes listening to music";
        Cad="She_likes_listening_to_music";
    }if (ejreading[1]==1){
        document.getElementById("frase").innerHTML="He likes hamburgers";
        Cad="He_likes_hamburgers";
    }if (ejreading[2]==1){
        document.getElementById("frase").innerHTML="They like cocktails";
        Cad="They_like_cocktails";
    }if (ejreading[3]==1){
        document.getElementById("frase").innerHTML="He doesn't like whiskey";
        Cad="He_doesn't_like_whiskey";
    }if (ejreading[4]==1){
        document.getElementById("frase").innerHTML="They enjoy dancing";
        Cad="They_enjoy_dancing";
    }if (ejreading[5]==1){
        document.getElementById("frase").innerHTML="They lov egoing to the movies";
        Cad="They_love_going_to_the_movies";
    }if (ejreading[6]==1){
        document.getElementById("frase").innerHTML="They enjoy doing exercise";
        Cad="They_enjoy_doing_exercise";
    }if (ejreading[7]==1){
        document.getElementById("frase").innerHTML="She loves going to the gym";
        Cad="She_loves_going_to_the_gym";
    }if (ejreading[8]==1){
        document.getElementById("frase").innerHTML="He doesn't like exercising";
        Cad="He_doesn't_like_exercising";
    }if (ejreading[9]==1){
        document.getElementById("frase").innerHTML="She hates horror movies";
        Cad="She_hates_horror_movies";
    }
    
    
    
setTimeout(function(){
//$('#continuar1').css('pointer-events','auto');
$('#continuar').css('opacity','1');
jQuery("#countdown").countdown360({}).start();
},1000);
}

