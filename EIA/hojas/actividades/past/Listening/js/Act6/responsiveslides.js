var more=0;
var s=100000000000;
//--------------------------------------------------------------------------------------------------------------
function olakase (idi) {
if((idi==0)&&(cosiño==0)){
aux=0;  
$('.elnav1').css('display','none');
$('#siguien').css('display','none');
$('#ee2').css('display','none');
$('#ee3').css('display','none');
$('#ee4').css('display','none');
$('#ee5').css('display','none');
$('#reproduce00').css('display','inline');
$('#perendengues1').css('display','inline');
$('#perendengues2').css('display','none');
$('#perendengues3').css('display','none');
$('#perendengues4').css('display','none');
$('#perendengues5').css('display','none');

}

if((idi==1)&&(cosiño==0)){
aux=0;
$('.elnav1').css('display','none');
$('#siguien').css('display','none');
$('#ee1').css('display','none');
$('#ee2').css('display','inline');
$('#ee3').css('display','none');
$('#ee4').css('display','none');
$('#ee5').css('display','none');
$('#perendengues2').css('display','inline');
$('#reproduce11').css('display','inline');
$('#perendengues1').css('display','none');
$('#perendengues3').css('display','none');
$('#perendengues4').css('display','none');
$('#perendengues5').css('display','none');

}

if((idi==2)&&(cosiño==0)){
aux=0;
$('#ee1').css('display','none');
$('#siguien').css('display','none');
$('#ee2').css('display','none');
$('#ee3').css('display','none');
$('#ee4').css('display','none');
$('#ee5').css('display','none');
$('.elnav1').css('display','none');
$('#perendengues3').css('display','inline');
$('#reproduce22').css('display','inline');
$('#perendengues1').css('display','none');
$('#perendengues2').css('display','none');
$('#perendengues4').css('display','none');
$('#perendengues5').css('display','none');

}

if((idi==3)&&(cosiño==0)){
aux=0;
$('#ee1').css('display','none');
$('#siguien').css('display','none');
$('#ee2').css('display','none');
$('#ee3').css('display','none');
$('#ee4').css('display','none');
$('#ee5').css('display','none');
$('.elnav1').css('display','none');
$('#perendengues4').css('display','inline');
$('#reproduce33').css('display','inline');
$('#perendengues1').css('display','none');
$('#perendengues2').css('display','none');
$('#perendengues3').css('display','none');
$('#perendengues5').css('display','none');

}

if(((idi==4)||(idi==-1))&&(cosiño==0)){
aux=0;
$('#ee1').css('display','none');
$('#ee2').css('display','none');
$('#ee3').css('display','none');
$('#ee4').css('display','none');
$('#ee5').css('display','none');
$('.elnav1').css('display','none');
$('#siguien').css('display','inline'); 
$('#perendengues5').css('display','inline');
$('#reproduce44').css('display','inline');
$('#perendengues1').css('display','none');
$('#perendengues2').css('display','none');
$('#perendengues3').css('display','none');
$('#perendengues4').css('display','none');

}
}
//--------------------------------------------------------------------------------------------------------------
function automatico1(){
auto=setTimeout(function(){  if(m!=0){audio.pause();audio.currentTime = 0;} document.getElementById('L').play(); for (i=0;i<5;i++){activar1[i] = 0;}; $('.elnav1').css('display','none'); },0000);
s=5000;
$('#escuchar').css('pointer-events','none');
$("#slider").responsiveSlides({
      auto: true,
      pager: false,
      nav: false,
      speed: 500,
      maxwidth: 962,
      namespace: "centered-btns",
      });
$('.centered-btns_nav').css('visibility','hidden');
auto=setTimeout(function(){  /*$('br').css('display','inline'); $('.velk').css('display','none'); $('img').css('opacity','40');*/  $('h1').css('visibility','visible'); $('h1').css('text-align','center'); document.getElementById('a1').play(); },3000);
auto=setTimeout(function(){ document.getElementById('a2').play(); },6000);
auto=setTimeout(function(){ document.getElementById('a3').play();},11000);
auto=setTimeout(function(){ document.getElementById('a4').play();},16000);
auto=setTimeout(function(){ document.getElementById('a5').play();},21000);

$('#next').css('pointer-events','auto');

auto=setTimeout(function(){resul(5);},25000);

}
//--------------------------------------------------------------------------------------------------------------
function resul(){
document.getElementById('next').click();
$('#r1').css('display','none');
$('.sig').css('display','none');
resultado(cuentabien,5);
}
//--------------------------------------------------------------------------------------------------------------
(function ($, window, i) {
  $.fn.responsiveSlides = function (options) {

    // Default settings
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

      // Index for namespacing
      i++;

      var $this = $(this),

        // Local variables
        selectTab,
        startCycle,
        restartCycle,
        rotate,
        $tabs,

        // Helpers
        index = 0,
        $slide = $this.children(),
        length = $slide.size(),
        fadeTime = parseFloat(settings.speed),
        waitTime = parseFloat(settings.timeout),
        maxw = parseFloat(settings.maxwidth),

        // Namespacing
        namespace = settings.namespace,
        namespaceIdx = namespace + i,

        // Classes
        navClass = namespace + "_nav " + namespaceIdx + "_nav",
        activeClass = namespace + "_here",
        visibleClass = namespaceIdx + "_on",
        slideClassPrefix = namespaceIdx + "_s",

        // Pager
        $pager = $("<ul class='" + namespace + "_tabs " + namespaceIdx + "_tabs' />"),

        // Styles for visible and hidden slides
        visible = {"float": "left", "position": "relative"},
        hidden = {"float": "none", "position": "absolute"},

        // Fading animation
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

      // Random order
      if (settings.random) {
        $slide.sort(function () {
          return (Math.round(Math.random()) - 0.5);
        });
        $this
          .empty()
          .append($slide);
      }

      // Add ID's to each slide
      $slide.each(function (i) {
        this.id = slideClassPrefix + i;
      });

      // Add max-width and classes
      $this.addClass(namespace + " " + namespaceIdx);
      if (options && options.maxwidth) {
        $this.css("max-width", maxw);
      }

      // Hide all slides, then show first one
      $slide
        .hide()
        .eq(0)
        .addClass(visibleClass)
        .css(visible)
        .show();

      // Only run if there's more than one slide
      if ($slide.size() > 1) {

        // Make sure the timeout is at least 100ms longer than the fade
        if (waitTime < fadeTime + 100) {
          return;
        }

        // Pager
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

          // Inject pager
          if (options.controls) {
            $(settings.controls).append($pager);
          } else {
            $this.after($pager);
          }

          // Select pager item
          selectTab = function (idx) {
            $tabs
              .closest("li")
              .removeClass(activeClass)
              .eq(idx)
              .addClass(activeClass);
          };
        }

        // Auto cycle
        if (settings.auto) {

          startCycle = function () {
            rotate = setInterval(function () {

              // Clear the event queue
              $slide.stop(true, true);

              var idx = index + 1 < length ? index + 1 : 0;

              // Remove active state and set new if pager is set
              if (settings.pager) {
                selectTab(idx);
              }

              slideTo(idx);
            }, waitTime);
          };

          // Init cycle
          startCycle();
        }

        // Restarting cycle
        restartCycle = function () {
          if (settings.auto) {
            // Stop
            clearInterval(rotate);
            // Restart
            startCycle();
          }
        };

        // Pause on hover
        if (settings.pause) {
          $this.hover(function () {
            clearInterval(rotate);
          }, function () {
            restartCycle();
          });
        }

        // Pager click event handler
        if (settings.pager) {
          $tabs.bind("click", function (e) {
            e.preventDefault();

            if (!settings.pauseControls) {
              restartCycle();
            }

            // Get index of clicked tab
            var idx = $tabs.index(this);

            // Break if element is already active or currently animated
            if (index === idx || $("." + visibleClass + ":animated").length) {
              return;
            }

            // Remove active state from old tab and set new one
            selectTab(idx);

            // Do the animation
            slideTo(idx);
          })
            .eq(0)
            .closest("li")
            .addClass(activeClass);

          // Pause when hovering pager
          if (settings.pauseControls) {
            $tabs.hover(function () {
              clearInterval(rotate);
            }, function () {
              restartCycle();
            });
          }
        }

        // Navigation
        if (settings.nav) {
          var navMarkup =
            "<a href='#' class='" + navClass + " prev'>" + settings.prevText + "</a>" +
            "<a href='#' class='" + navClass + " next'>" + settings.nextText + "</a>";

          // Inject navigation
          if (options.controls) {
            $(settings.controls).append(navMarkup);
          } else {
            $this.after(navMarkup);
          }

          var $trigger = $("." + namespaceIdx + "_nav"),
            $prev = $("." + namespaceIdx + "_nav.prev");

          // Click event handler
          $trigger.bind("click", function (e) {
            e.preventDefault();

            // Prevent clicking if currently animated
            if ($("." + visibleClass + ":animated").length) {
              return;
            }

            //  Adds active class during slide animation
            //  $(this)
            //    .addClass(namespace + "_active")
            //    .delay(fadeTime)
            //    .queue(function (next) {
            //      $(this).removeClass(namespace + "_active");
            //      next();
            //  });

            // Determine where to slide
            var idx = $slide.index($("." + visibleClass)),
              prevIdx = idx - 1,
              nextIdx = idx + 1 < length ? index + 1 : 0;

            // Go to slide
            slideTo($(this)[0] === $prev[0] ? prevIdx : nextIdx);olakase(more);
            if (settings.pager) {
              selectTab($(this)[0] === $prev[0] ? prevIdx : nextIdx);
            }

            if (!settings.pauseControls) {
              restartCycle();
            }
          });

          // Pause when hovering navigation
          if (settings.pauseControls) {
            $trigger.hover(function () {
              clearInterval(rotate);
            }, function () {
              restartCycle();
            });
          }
        }

      }

      // Max-width fallback
      if (typeof document.body.style.maxWidth === "undefined" && options.maxwidth) {
        var widthSupport = function () {
          $this.css("width", "100%");
          if ($this.width() > maxw) {
            $this.css("width", maxw);
          }
        };

        // Init fallback
        widthSupport();
        $(window).bind("resize", function () {
          widthSupport();
        });
      }

    });

  };
})(jQuery, this, 0);
