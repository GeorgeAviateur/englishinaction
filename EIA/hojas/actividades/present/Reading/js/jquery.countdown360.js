;(function ($, window, document, undefined) {
  var pluginName = "countdown360",
    defaults = {
      radius: 15.5,                    // radius of arc
      strokeStyle: "#477050",          // the color of the stroke
      strokeWidth: 10,          // the stroke width, dynamically calulated if omitted in options
      fillStyle: "#8ac575",            // the fill color
      fontColor: "#477050",            // the font color
      fontFamily: "sans-serif",        // the font family
      fontSize: undefined,             // the font size, dynamically calulated if omitted in options
      fontWeight: 700,                 // the font weight
      autostart: true,                 // start the countdown automatically
      seconds: 90,                     // the number of seconds to count down
      label: ["second", "seconds"],    // the label to use or false if none
      startOverAfterAdding: true,      // Start the timer over after time is added with addSeconds
      onComplete: function () {},
    },
      tucha,
      otratucha;

  function Plugin(element, options) { 
    this.element = element;
    this.settings = $.extend({}, defaults, options);
    if (!this.settings.fontSize) { this.settings.fontSize = this.settings.radius/1.9; }
    if (!this.settings.strokeWidth) { this.settings.strokeWidth = this.settings.radius/4; }
    this._defaults = defaults;
    this._name = pluginName;
    this._init();
  }

  Plugin.prototype = { 

    extendTimer: function (value) {
      var seconds = parseInt(value),
          secondsElapsed = Math.round((new Date().getTime() - this.startedAt.getTime())/1000);   
      if ((this._secondsLeft(secondsElapsed) + seconds) <= this.settings.seconds) {
        this.startedAt.setSeconds(this.startedAt.getSeconds() + parseInt(value));
      } 
    },

    addSeconds: function (value) { 
      var secondsElapsed = Math.round((new Date().getTime() - this.startedAt.getTime())/1000);
      if (this.settings.startOverAfterAdding) {
          this.settings.seconds = this._secondsLeft(secondsElapsed) + parseInt(value);
          this.start();
        } else {
          this.settings.seconds += parseInt(value);
        }
    },

    start: function () {
      this.startedAt = new Date();
      this._drawCountdownShape(Math.PI*3.5, true);
      this._drawCountdownLabel(0);
      this.interval = setInterval(jQuery.proxy(this._draw, this), 1000);
    },

    stop: function (cb) {
      clearInterval(this.interval);
      if (cb) { cb(); }
    },

    _init: function () {
      this.settings.width = (this.settings.radius * 2) + (this.settings.strokeWidth * 2);
      this.settings.height = this.settings.width;
      this.settings.arcX = this.settings.radius + this.settings.strokeWidth;
      this.settings.arcY = this.settings.arcX;
      this._initPen(this._getCanvas());
      if (this.settings.autostart) { this.start(); }
    },

    _getCanvas: function () {
      var $canvas = $("<canvas id=\"countdown360_" + $(this.element).attr("id") + "\" width=\"" +
                      this.settings.width + "\" height=\"" +
                      this.settings.height + "\">" +
                      "<span id=\"countdown-text\" role=\"status\" aria-live=\"assertive\"></span></canvas>");
      $(this.element).prepend($canvas[0]);
      return $canvas[0];
    },

    _initPen: function (canvas) {
      this.pen              = canvas.getContext("2d");
      this.pen.lineWidth    = this.settings.strokeWidth;
      this.pen.strokeStyle  = this.settings.strokeStyle; 
      this.pen.fillStyle    = this.settings.fillStyle; 
      this.pen.textAlign    = "center";
      this.pen.textBaseline = "middle";
      this.ariaText = $(canvas).children("#countdown-text");
      this._clearRect();//alert(this.pen.fillStyle); 
    },

    _clearRect: function () {
      this.pen.clearRect(0, 0, this.settings.width, this.settings.height);
    },

    _secondsLeft: function(secondsElapsed) {
      return this.settings.seconds - secondsElapsed;
    },

    _drawCountdownLabel: function (secondsElapsed) { 
      this.ariaText.text(secondsLeft); /*alert(secondsElapsed);*/ if(tucha==1){/*secondsElapsed=90;*/ this.stop();} 
      this.pen.font         = this.settings.fontWeight + " " + this.settings.fontSize + "px " + this.settings.fontFamily;
      var secondsLeft = this._secondsLeft(secondsElapsed),
          label = secondsLeft === 1 ? this.settings.label[0] : this.settings.label[1],
          drawLabel = this.settings.label && this.settings.label.length === 2,
          x = this.settings.width/2;
      if (drawLabel) {
        y = this.settings.height/2 - (this.settings.fontSize/6.2);
      } else {
        y = this.settings.height/2;
      }
      this.pen.fillStyle = 'transparent'; 
      this.pen.fillText(secondsLeft + 1, x, y);
      this.pen.fillStyle  = this.settings.fontColor;
      this.pen.fillText(secondsLeft, x, y); 
      if (drawLabel) {
        this.pen.font = "normal small-caps " + (this.settings.fontSize/1.8) + "px " + this.settings.fontFamily;
        this.pen.fillText(label, this.settings.width/2, this.settings.height/2 + (this.settings.fontSize/2.2));
      }   if(secondsLeft==0) {revisar(); } // yujuuuuuuuuuuuuuu
    },

    _drawCountdownShape: function (endAngle, drawStroke) {
      this.pen.fillStyle = this.settings.fillStyle;  if(otratucha==1){this.pen.fillStyle='#ff8540';} if(tucha==1){ /*this.pen.strokeStyle='transparent';*/ /*this.pen.fillStyle='blue'; this.pen.fontColor='yellow';*/ }
      this.pen.beginPath();
      this.pen.arc(this.settings.arcX, this.settings.arcY, 45, Math.PI*1.5, endAngle, false);
      this.pen.fill();
      if (drawStroke) { this.pen.stroke(); } 
    },

    _draw: function () { 
      var secondsElapsed = Math.round((new Date().getTime() - this.startedAt.getTime())/1000),
          endAngle = (Math.PI*3.5) - (((Math.PI*2)/this.settings.seconds) * secondsElapsed);
      this._clearRect();
      this._drawCountdownShape(Math.PI*3.5, false);
      if (secondsElapsed < this.settings.seconds) {
        this._drawCountdownShape(endAngle, true);
        this._drawCountdownLabel(secondsElapsed); if (secondsElapsed==80){this.pen.strokeStyle='#d9364d';  otratucha=1;}
      } else {
        this._drawCountdownLabel(this.settings.seconds);
        this.stop();
        this.settings.onComplete();
      }
    }

  };

  $.fn[pluginName] = function (options) {
    var plugin;
    this.each(function() {
      plugin = $.data(this, "plugin_" + pluginName);
      if (!plugin) {
        plugin = new Plugin(this, options);
        $.data(this, "plugin_" + pluginName, plugin);
      }
    });
    return plugin;
  };

})(jQuery, window, document);
