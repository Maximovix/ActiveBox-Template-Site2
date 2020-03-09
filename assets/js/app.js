$(function() {

	let header = $("#header"),
	 	intro = $("#intro"),
	 	introH,
	 	scrollPosition = $(window).scrollTop();


	/* Fixed-Header */
	$(window).on("scroll load resize" ,function(){
		introH = intro.innerHeight();
		scrollPosition = $(this).scrollTop();
		/*console.log(scrollPosition);
		console.log(introH);*/
		checkScroll(scrollPosition,introH);
	});


	function checkScroll(scrollPosition,introH) {
		if (scrollPosition >= introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}

	/* Smooth-Scroll */
	$("[data-scroll]").on("click",function (event) {
		event.preventDefault();

		let blockID = $(this).data('scroll'),
			blockOffSet = $(blockID).offset().top;

		$("#nav").toggleClass("active");

		console.log(blockOffSet);

		$("html, body").animate({
			scrollTop: blockOffSet - 70
		}, 700);
	});

	/* Nav-Toggle */
	$("#navToggle").on("click", function(event){
		event.preventDefault();

		$("#nav").toggleClass("active");
	});

	/* Clients*/
	let slider = $("#clients_slider");

	slider.slick({
 		infinite: true,
  		slidesToShow: 1,
 		slidesToScroll: 1,
 		fade:true,
 		arrows: false,
 		dots: true
	});
});