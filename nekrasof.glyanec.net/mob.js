(function ($) {
	$(document).ready(function() {

		// adaptive menu
        $('.header .region-header .block_system_main_menu .block_content > .menu,.header .region-header .block_content > .block_menu_header > .menu').slicknav({
            label: ''
        });


        mobileView();
	    function mobileView() {
	        var wiw = window.innerWidth;
	        if(wiw < 992) {
 				$('.block_drupal_package_block_about_main .field_inner_wrap_field_about_img').insertAfter('.block_drupal_package_block_about_main .field_inner_wrap_field_about_main_link');
	        }
	        if(wiw < 768) { 
		       $("<div class='mobileSlogan'></div>").insertAfter(".front .header");
		       $('.header .logo_wrapper .block_drupal_package_block_slogan p br').remove();
		        
	        } 
	    };


	   

	});
})(jQuery);
