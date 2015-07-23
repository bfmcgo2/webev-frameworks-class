$(document).ready(function(){
	$(window).on("scroll", function(e) {
		console.log("user scrolled");

		console.log( $(window).scrollTop() );

		if($(window).scrollTop()> 360){
			$(".navigation").addClass("fixed")
		}else{
			$(".navigation").removeClass("fixed")
		}



		

	})
	$(".work-button").click(function(){
				$.scrollTo($(".work"), 500,{});
	});
	$(".news-button").click(function(){
				$.scrollTo($(".news"), 500,{});
	});
	$(".blog-button").click(function(){
				$.scrollTo($(".blog"), 500,{});
	});
	$(".about-button").click(function(){
				$.scrollTo($(".about"), 500,{});
	});
	$(".network-button").click(function(){
				$.scrollTo($(".network"), 500,{});
	});
	$(".contact-button").click(function(){
				$.scrollTo($(".contact"), 500,{});
	});


});
