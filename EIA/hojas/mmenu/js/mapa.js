
	
	
	$(function() {
	
	$(".open").click(function() {
		var ul = $(this).next(),
				clone = ul.clone().css({"height":"auto"}).appendTo("body"),
				height = ul.css("height") === "0px" ? ul[0].scrollHeight + "px" : "0px";
		
		clone.remove();
		ul.animate({"height":height});
		return false;
	});

});
	
	