var more=0;
var s=100000000000;
//var xx=1;
var xx=0;
var changos=0;
//--------------------------------------------------------------------------------------------------------------
function empezar(){
changos=1;
/*$('.centered-btns_nav').css('visibility','hidden');  
$('input').css('display','none'); 
$('.elnav').css('display','none'); 
$('.elnav1').css('display','none'); 
$('.velkan').css('display','none'); */
setTimeout(function(){
auto=setTimeout(function(){ document.getElementById('resultado1').innerHTML='I like <b>weight lifting</b>.'; document.getElementById('weight_lifting').click(); document.getElementById('a1').play();},0500);
auto=setTimeout(function(){ document.getElementById('resultado1').innerHTML='They love <b>going</b> to the gym.'; document.getElementById('going').click(); document.getElementById('ola2').click(); document.getElementById('a2').play(); },4000);
auto=setTimeout(function(){ document.getElementById('resultado1').innerHTML='I like <b>going</b> to the movies.'; document.getElementById('going11').click(); document.getElementById('ola2').click(); document.getElementById('a3').play();},8000);
auto=setTimeout(function(){ document.getElementById('resultado1').innerHTML='I like <b>listening</b> to music.'; document.getElementById('listening').click(); document.getElementById('ola2').click(); document.getElementById('a4').play();},12000);
auto=setTimeout(function(){ document.getElementById('resultado1').innerHTML='They like <b>eating</b> fast food.'; document.getElementById('eating').click(); document.getElementById('ola2').click(); document.getElementById('a5').play();},16000);
auto=setTimeout(function(){ document.getElementById('resultado1').innerHTML='They like <b>drinking</b> cocktails.'; document.getElementById('drinking').click(); document.getElementById('ola2').click(); document.getElementById('a6').play();},20000);
auto=setTimeout(function(){ document.getElementById('resultado1').innerHTML='They love <b>dancing</b> salsa.'; document.getElementById('dancing').click(); document.getElementById('ola2').click(); document.getElementById('a7').play();xx=1; },24000);
auto=setTimeout(function(){ 
changos=0;  
document.getElementById('weight_lifting').click();
document.getElementById('ola2').click();
$('.centered-btns_nav').css('visibility','visible');
$('.velkan').css('display','inline');
$('#reproducir').css('display','inline'); 
/*$('.sig').css('pointer-events','auto'); 
$('.sig').css('opacity','1');
$('.sig2').css('pointer-events','auto'); 
$('.sig2').css('opacity','1');*/ 
$('.campiñitos').css('display','inline'); 
//$('.boto').css('display','inline'); 
//$('.css-checkbox').css('display','inline'); 
$('#lisa').css('display','none');
$('.velk').css('display','inline-block');
//changos=0;
},28000);
},2000);

}
//--------------------------------------------------------------------------------------------------------------
function olakase (idi) {
if((idi==0)&&(changos==0)){
$('.sig2').css('display','none');
$('#e1').css('display','inline');
$('.perendengues').css('display','none');
$('#perendengues1').css('display','inline');
}
if((idi==1)&&(changos==0)){
$('.sig2').css('display','none');
$('#e2').css('display','inline');
$('.perendengues').css('display','none');
$('#perendengues2').css('display','inline');
}
if((idi==2)&&(changos==0)){
$('.sig2').css('display','none');
$('#e3').css('display','inline');
$('.perendengues').css('display','none');
$('#perendengues3').css('display','inline');
}
if((idi==3)&&(changos==0)){
$('.sig2').css('display','none');
$('#e4').css('display','inline');
$('.perendengues').css('display','none');
$('#perendengues4').css('display','inline');
}
if((idi==4)&&(changos==0)){
$('.sig2').css('display','none');
$('#e5').css('display','inline');
$('.perendengues').css('display','none');
$('#perendengues5').css('display','inline');
}
if((idi==5)&&(changos==0)){
$('.sig2').css('display','none');
$('#e6').css('display','inline');
$('.perendengues').css('display','none');
$('#perendengues6').css('display','inline');
}
if(((idi==6)||(idi==-1))&&(changos==0)){
$('.sig2').css('display','none');
$('#e7').css('display','inline');
$('.perendengues').css('display','none');
$('#perendengues7').css('display','inline');
}




if(xx==1){
if((idi==0)&&(cosiño1==0)){
aux1=0;
aux=0;  
$('.elnav1').css('display','none');
$('#reproduce00').css('display','inline');
/*$('.sig').css('display','none');
$('#e1').css('display','inline');
$('.perendengues').css('display','none');
$('#perendengues').css('display','inline');*/
document.getElementById('weight_lifting').click();
}

if((idi==1)&&(cosiño1==0)){
aux1=0;
aux=0;
$('.elnav1').css('display','none');
$('#reproduce11').css('display','inline');
/*$('.perendengues').css('display','none');
$('#perendengues1').css('display','inline');*/
document.getElementById('going').click();
}

if((idi==2)&&(cosiño1==0)){
aux1=0;
aux=0;
$('.elnav1').css('display','none');
$('#reproduce22').css('display','inline');
/*$('.perendengues').css('display','none');
$('#perendengues2').css('display','inline');*/
document.getElementById('going11').click();
}

if((idi==3)&&(cosiño1==0)){
aux1=0;
aux=0;
$('.elnav1').css('display','none');
$('#reproduce33').css('display','inline');
/*$('.perendengues').css('display','none');
$('#perendengues3').css('display','inline');*/
document.getElementById('listening').click();
}

if((idi==4)&&(cosiño1==0)){
aux1=0;
aux=0;
$('.elnav1').css('display','none');
$('#reproduce44').css('display','inline');
/*$('.perendengues').css('display','none');
$('#perendengues4').css('display','inline');*/
document.getElementById('eating').click();
}

if((idi==5)&&(cosiño1==0)){
aux1=0;
aux=0;
$('.elnav1').css('display','none');
$('#reproduce55').css('display','inline');
/*$('.perendengues').css('display','none');
$('#perendengues5').css('display','inline');*/
document.getElementById('drinking').click();
}

if(((idi==6)||(idi==-1))&&(cosiño1==0)){
aux1=0;
aux=0;
$('.elnav1').css('display','none');
$('#reproduce66').css('display','inline');
/*$('.perendengues').css('display','none');
$('#perendengues6').css('display','inline');*/
document.getElementById('dancing').click();
}
}
}
//--------------------------------------------------------------------------------------------------------------
function automatico1(){ 
auto=setTimeout(function(){ $('.fuckencio').css('display','none'); $('.peso').css('display','none'); $('#peso1').css('display','none'); muestrame1.classList.remove('muestrame1'); $('#escuchar').css('pointer-events','none'); escuchar.classList.remove('bigbang'); $('.perendengues').css('display','none'); changos=1; document.getElementById('L').play(); if(m!=0){audio.pause();audio.currentTime = 0;};  /*for (i=0;i<7;i++){activar1[i] = 0;};*/ /*$('.elnav').css('display','none'); $('.elnav1').css('display','none');*/ /*$('.velk').css('display','none');xx=0;;*/cosiño=1;$('.velk').css('display','none');   },0000);//$('#resultado').css('display','inline');
s=5000;
$("#slider").responsiveSlides({
      auto: true,
      pager: false,
      nav: false,
      speed: 500,
      maxwidth: 962,
      namespace: "centered-btns",
      });
$('.centered-btns_nav').css('visibility','hidden');
auto=setTimeout(function(){ $('h1').css('display','inline'); $('img').css('opacity','40'); document.getElementById('weight_lifting').click(); document.getElementById('mostrando11').innerHTML='1. I like <b>weight lifting.</b>';   document.getElementById('a1').play();},2500);
auto=setTimeout(function(){ document.getElementById('mostrando22').innerHTML='2. They love <b>going</b> to the gym.'; document.getElementById('going').click(); document.getElementById('a2').play(); },5500);
auto=setTimeout(function(){ document.getElementById('mostrando33').innerHTML='3. I like <b>going</b> to the movies.'; document.getElementById('going11').click(); document.getElementById('a3').play();},10000);
auto=setTimeout(function(){ document.getElementById('mostrando44').innerHTML='4. I like <b>listening</b> to music.'; document.getElementById('listening').click(); document.getElementById('a4').play();},15000);
auto=setTimeout(function(){ document.getElementById('mostrando55').innerHTML='5. They like <b>eating</b> fast dood.'; document.getElementById('eating').click(); document.getElementById('a5').play();},20000);
auto=setTimeout(function(){ document.getElementById('mostrando66').innerHTML='6. They like <b>drinking</b> cocktails.'; document.getElementById('drinking').click(); document.getElementById('a6').play();},25000);
auto=setTimeout(function(){ document.getElementById('mostrando77').innerHTML='7. They love <b>dancing</b> salsa.'; document.getElementById('dancing').click(); document.getElementById('a7').play();},30000);
auto=setTimeout(function(){  $('.sig').css('display','none');$('.sig2').css('display','none');$('#continuar').css('display','inline'); document.getElementById('continuar').click();   },34500);
}
//--------------------------------------------------------------------------------------------------------------
function finalizaw1(){
/*$('#q1').css('display','none');
$('.sig').css('display','none');
$('#listeniando').css('display','none');
$('#r1').css('display','none');
resultado(cuentabien,3);  */

$('.fuckencio').css('display','none');
$('.elnav').css('display','none');
$('.elnav1').css('display','none');
$('.elnav2').css('display','none');
$('#r1').css('display','none');
$('.sig').css('display','none');
resultado((cuentabien/2),7);
}

//--------------------------------------------------------------------------------------------------------------
(function ($, window, i) {
  $.fn.responsiveSlides = function (options) {
    
    var settings = $.extend({
      "auto": true,             // Boolean: Animate automatically, true or false
      "speed": 1000,            // Integer: Speed of the transition, in milliseconds
      "timeout": s,          // Integer: Time between slide transitions, in milliseconds
      "pager": false,           // Boolean: Show pager, true or false
      "nav": false,             // Boolean: Show navigation, true or false
      "random": false,          // Boolean: Randomize the order of the slides, true or false
      "pause": false,           // Boolean: Pause on hover, true or false
      "pauseControls": false,   // Boolean: Pause when hovering controls, true or false
      "prevText": "Previous",   // String: Text for the "previous" button
      "nextText": "Next",       // String: Text for the "next" button
      "maxwidth": "",           // Integer: Max-width of the slideshow, in pixels
      "controls": "",           // Selector: Where controls should be appended to, default is after the <ul>
      "namespace": "rslides",   // String: change the default namespace used
      before: function () {},   // Function: Before callback
      after: function () {}     // Function: After callback
    }, options);

    return this.each(function () {

      
      i++;

      var $this = $(this),

        
        selectTab,
        startCycle,
        restartCycle,
        rotate,
        $tabs,

        
        index = 0,
        $slide = $this.children(),
        length = $slide.size(),
        fadeTime = parseFloat(settings.speed),
        waitTime = parseFloat(settings.timeout),
        maxw = parseFloat(settings.maxwidth),

        
        namespace = settings.namespace,
        namespaceIdx = namespace + i,

        
        navClass = namespace + "_nav " + namespaceIdx + "_nav",
        activeClass = namespace + "_here",
        visibleClass = namespaceIdx + "_on",
        slideClassPrefix = namespaceIdx + "_s",

        
        $pager = $("<ul class='" + namespace + "_tabs " + namespaceIdx + "_tabs' />"),

        
        visible = {"float": "left", "position": "relative"},
        hidden = {"float": "none", "position": "absolute"},

        
        slideTo = function (idx) {
          more=idx;
          settings.before();
          $slide
            .stop()
            .fadeOut(fadeTime, function () {
              $(this)
                .removeClass(visibleClass)
                .css(hidden);
            })
            .eq(idx)
            .fadeIn(fadeTime, function () {
              $(this)
                .addClass(visibleClass)
                .css(visible);
              settings.after();
              index = idx;
            });
        };

      
      if (settings.random) {
        $slide.sort(function () {
          return (Math.round(Math.random()) - 0.5);
        });
        $this
          .empty()
          .append($slide);
      }

      
      $slide.each(function (i) {
        this.id = slideClassPrefix + i;
      });

      
      $this.addClass(namespace + " " + namespaceIdx);
      if (options && options.maxwidth) {
        $this.css("max-width", maxw);
      }

      
      $slide
        .hide()
        .eq(0)
        .addClass(visibleClass)
        .css(visible)
        .show();

      
      if ($slide.size() > 1) {

        
        if (waitTime < fadeTime + 100) {
          return;
        }

        
        if (settings.pager) {
          var tabMarkup = [];
          $slide.each(function (i) {
            var n = i + 1;
            tabMarkup +=
              "<li>" +
              "<a href='#' class='" + slideClassPrefix + n + "'>" + n + "</a>" +
              "</li>";

          });
          $pager.append(tabMarkup);

          $tabs = $pager.find("a");

          
          if (options.controls) {
            $(settings.controls).append($pager);
          } else {
            $this.after($pager);
          }

          
          selectTab = function (idx) {

            $tabs
              .closest("li")
              .removeClass(activeClass)
              .eq(idx)
              .addClass(activeClass);
          };
        }

        
        if (settings.auto) {

          startCycle = function () {
            rotate = setInterval(function () {

              
              $slide.stop(true, true);

              var idx = index + 1 < length ? index + 1 : 0;

              
              if (settings.pager) {
                selectTab(idx);
              }

              slideTo(idx);
            }, waitTime);
          };

          
          startCycle();
        }

        
        restartCycle = function () {
          if (settings.auto) {
            
            clearInterval(rotate);
            
            startCycle();
          }
        };

        
        if (settings.pause) {
          $this.hover(function () {
            clearInterval(rotate);
          }, function () {
            restartCycle();
          });
        }

        
        if (settings.pager) {
          $tabs.bind("click", function (e) {
            e.preventDefault();

            if (!settings.pauseControls) {
              restartCycle();
            }

            
            var idx = $tabs.index(this);

            
            if (index === idx || $("." + visibleClass + ":animated").length) {
              return;
            }

            
            selectTab(idx);

            
            slideTo(idx);
          })
            .eq(0)
            .closest("li")
            .addClass(activeClass);

          
          if (settings.pauseControls) {
            $tabs.hover(function () {
              clearInterval(rotate);
            }, function () {
              restartCycle();
            });
          }
        }

        
        if (settings.nav) {
          var navMarkup =
            "<a href='#' id='ola1' class='" + navClass + " prev'>" + settings.prevText + "</a>" +
            "<a href='#' id='ola2' class='" + navClass + " next'>" + settings.nextText + "</a>";

          
          if (options.controls) {
            $(settings.controls).append(navMarkup);
          } else {
            $this.after(navMarkup);
          }

          var $trigger = $("." + namespaceIdx + "_nav"),
            $prev = $("." + namespaceIdx + "_nav.prev");

          
          $trigger.bind("click", function (e) {
            e.preventDefault();
             

            
            if ($("." + visibleClass + ":animated").length) {
              return;
            }

         

            
            var idx = $slide.index($("." + visibleClass)),
              prevIdx = idx - 1,
              nextIdx = idx + 1 < length ? index + 1 : 0;

            
            slideTo($(this)[0] === $prev[0] ? prevIdx : nextIdx);  olakase(more);
            if (settings.pager) {
              selectTab($(this)[0] === $prev[0] ? prevIdx : nextIdx);
            }

            if (!settings.pauseControls) {
              restartCycle();
            }
          });

          
          if (settings.pauseControls) {
            $trigger.hover(function () {
              clearInterval(rotate);
            }, function () {
              restartCycle();
            });
          }
        }

      }

      
      if (typeof document.body.style.maxWidth === "undefined" && options.maxwidth) {
        var widthSupport = function () {
          $this.css("width", "100%");
          if ($this.width() > maxw) {
            $this.css("width", maxw);
          }
        };

        
        widthSupport();
        $(window).bind("resize", function () {
          widthSupport();
        });
      }

    });

  };
})
(jQuery, this, 0);

























