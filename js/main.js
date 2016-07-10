$(function() {
	//hide menu
	$('.hidden button').on('click', function() {
 		$('.hidden').slideUp();
 	});
 	$('.products-menu').on('click', function() {
 		$('.hidden').slideDown();
 	});

 	//mobile menu
	$('.toggle-menu').jPushMenu();

	// arrowDown
    $("#menu").on("click","a", function (event) {	
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	//first slider
  	$("#slider2").responsiveSlides({
        auto: false,
        pager: true,
        timeout: 4000,
        speed: 300,
    });

  	//second slider
     $(".content").mCustomScrollbar({
		theme:"minimal"
	});

     //products sub menu

   	$('.with-sub-menu').on('click', function() {
       	$(this)
       		.toggleClass('active-li')
       		.find('>ul').slideToggle();
       		
       		$(this).find('.ui-arrow').toggleClass("active-ui-arrow");
   	});
	
   	//triggers
	var h = $(window).height();
	$(window).scroll(function(){
		if ( ($(this).scrollTop()+h) >= $("#ex4").offset().top) {
			$("#ex4 .trigger-item").css({visibility:"visible"});
			$("#ex4 .trigger-item").addClass('animated zoomIn');
		} 
		
		if ( $(this).scrollTop() == 0 ) {
			$("#ex4 .trigger-item").each(function(){
				if ( $(this).hasClass('last') ) {
					$(this).removeClass().addClass('trigger-item last');
				} else {
					$(this).removeClass().addClass('trigger-item');
				}
				$(this).css({visibility:"hidden"});
			});
		}
	});
});
