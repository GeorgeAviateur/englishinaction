var langs =[['English', ['en-US', 'United States']]];

for (var i = 0; i < langs.length; i++) {
	select_language.options[i] = new Option(langs[i][0], i);
	}

	select_language.selectedIndex = 0;
	select_dialect.selectedIndex = 0;
	showInfo('info_start');
	
	var final_transcript = '';
	var recognizing = false;
	var ignore_onend;
	var start_timestamp;
	var recept='';

	if (!('webkitSpeechRecognition' in window)) {
		upgrade();
		} 
		else {
			start_button.style.display = 'inline-block';
			var recognition = new webkitSpeechRecognition();
			recognition.continuous = true;
			recognition.interimResults = true;

			recognition.onstart = function() {
			recognizing = true;
			showInfo('info_speak_now');
			start_img.src = '../../../imagenes/botones/mic11.png'; 
			};

recognition.onerror = function(event) {
    if (event.error == 'no-speech') {
		start_img.src = '../../../imagenes/botones/micTrouble.png';
		showInfo('info_no_speech');
		ignore_onend = true;
		}
    if (event.error == 'audio-capture') {
		start_img.src = '../../../imagenes/botones/micTrouble.png';
		showInfo('info_no_microphone');
		ignore_onend = true;
		}
    if (event.error == 'not-allowed') {
		if (event.timeStamp - start_timestamp < 100) {
			showInfo('info_blocked');
			} 
			else {
				showInfo('info_denied');
				}
		ignore_onend = true;
    }
};

recognition.onend = function() {
    recognizing = false;
    if (ignore_onend) {
      return;
    }
    start_img.src = '../../../imagenes/botones/mic11.png';
    if (!final_transcript) {
      showInfo('info_start');
      return;
    }


	
    showInfo('');
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
      var range = document.createRange();
      range.selectNode(document.getElementById('final_span'));
      window.getSelection().addRange(range);
    }
	
	recept=recept.toLowerCase();
	if(recept=='go to the gym'){alert('well Done!');}
	else
	alert('sorry, try again');
	showInfo('info_start');

  };
 
  recognition.onresult = function(event) {
    var interim_transcript = '';

  for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }
    
	final_transcript = capitalize(final_transcript);
	recept=final_transcript;
	
    final_span.innerHTML = linebreak(final_transcript);
    interim_span.innerHTML = linebreak(interim_transcript);
    if (final_transcript || interim_transcript) {
      showButtons('inline-block');
    }
	
  };
}

function upgrade() {
  start_button.style.visibility = 'hidden';
  showInfo('info_upgrade');
}

var two_line = /\n\n/g;
var one_line = /\n/g;

function linebreak(s) {
  return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
}

var first_char = /\S/;

function capitalize(s) {
  return s.replace(first_char, function(m) { return m.toUpperCase(); });
}





function copyButton() {
  if (recognizing) {
    recognizing = false;
    recognition.stop();
  }
  copy_button.style.display = 'none';
  copy_info.style.display = 'inline-block';
  showInfo('');
}



function startButton(event) {
  if (recognizing) {
    recognition.stop();
    return;
  }
  final_transcript = '';
  recognition.lang = select_dialect.value;
  recognition.start();
  ignore_onend = false;
  final_span.innerHTML = 'here the text';
  interim_span.innerHTML = '';
  start_img.src = '../../../imagenes/botones/mic11.png';
  showInfo('info_allow');
  showButtons('none');
  start_timestamp = event.timeStamp;
  
  auto=setTimeout(function(){ recognition.stop(); },8000);
  }


function showInfo(s) {
  if (s) {
    for (var child = information.firstChild; child; child = child.nextSibling) {
      if (child.style) {
        child.style.display = child.id == s ? 'inline' : 'none';
      }
    }
    information.style.visibility = 'visible';
  } else {
    information.style.visibility = 'hidden';
  }
}

var current_style;



function showButtons(style) {
  if (style == current_style) {
    return;
  }
  current_style = style;

}