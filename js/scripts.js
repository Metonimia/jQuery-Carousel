$(function(){
	 
	var carouselList = setInterval(function changeSlide() {

		$("#carousel ul").animate({'marginLeft':-400}, 500, function moveFirstSlide() {
				var firstItem = $(this).find("li:first");
				var lastItem = $(this).find("li:last");
				lastItem.after(firstItem);
				$(this).css({marginLeft:0});
		})

	}, 3000);

});



