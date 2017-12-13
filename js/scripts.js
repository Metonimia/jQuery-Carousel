$(function(){
	 
	var carouselList = $("#carousel ul");

	setInterval(function() {

		carouselList.animate({'marginLeft':-400}, 500, function() {
		var firstItem = $(this).find("li:first");
		var lastItem = $(this).find("li:last");
		lastItem.after(firstItem);
		$(this).css({marginLeft:0});
		})

	}, 3000);

});



