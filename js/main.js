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

  	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks the button, open the modal 
	btn.onclick = function() {
	    modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}
});
