$(function() {
   	$('.with-sub-menu span').on('click', function() {
       $(this).siblings('ul').slideToggle();
   	});

   	$('button').click(function() {
  		$(this).toggleClass('expanded').siblings('div').slideToggle();
	});

  	$("#slider2").responsiveSlides({
        auto: true,
        pager: true,
        timeout: 4000,
        speed: 300,
    });

  
});
