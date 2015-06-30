jQuery.browser={};(function(){jQuery.browser.msie=false;
jQuery.browser.version=0;if(navigator.userAgent.match(/MSIE ([0-9]+)\./)){
jQuery.browser.msie=true;jQuery.browser.version=RegExp.$1;}})();
venues = {
		"116208"  : "Reading",
		"66271"   : "Writing",
		"5518"    : "Listening",
		"392360"  : "Speaking"

	};

	$(function() {

		var venueContainer = $('#venues ul');
		$.each(venues, function(key, item) {
			venueContainer.append(
		        $(document.createElement("li"))
		        .append(
	                $(document.createElement("input")).attr({
                         id:    'venue-' + key
                        ,name:  item
                        ,value: item
                        ,type:  'checkbox'
                        ,checked:true
	                })
	                .change( function() {
	                	var cbox = $(this)[0];
	                	var segments = wheel.segments;
	                	var i = segments.indexOf(cbox.value);

	                	if (cbox.checked && i == -1) {
	                		segments.push(cbox.value);

	                	} else if ( !cbox.checked && i != -1 ) {
	                		segments.splice(i, 1);
	                	}

	                	segments.sort();
	                	
	                } )

		        ).append(
	                $(document.createElement('label')).attr({
	                    'for':  'venue-' + key
	                })
	                .text( item )



		        )
		    )
		});
  
		$('#venues ul>li').tsort("input", {attr: "value"});

	});