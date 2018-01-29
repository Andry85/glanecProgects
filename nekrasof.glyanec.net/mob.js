(function ($) {
	$(document).ready(function() {

		// adaptive menu
        $('.header .region-header .block_system_main_menu .block_content > .menu,.header .region-header .block_content > .block_menu_header > .menu').slicknav({
            label: '',
            easingOpen: "swing"
        });


        mobileView();
	    function mobileView() {
	        var wiw = window.innerWidth;
	        if(wiw < 992) {
 				$('.block_drupal_package_block_about_main .field_inner_wrap_field_about_img').insertAfter('.block_drupal_package_block_about_main .field_inner_wrap_field_about_main_link');
	        }
	        if( (wiw < 992) && (wiw > 767) ) {
 				$('.block_views_diplomas_block_2 .block_drupal_package_block_diplomas_main .field_inner_wrap_dpb_title_field').insertBefore('.block_views_diplomas_block_2 .block_drupal_package_block_diplomas_main .field_inner_wrap_field_contacts_img');
	        }
	        
	        if(wiw < 768) { 
		       $("<div class='mobileSlogan'></div>").insertAfter(".front .header");
		       $('.header .logo_wrapper .block_drupal_package_block_slogan p br').remove();


		       $('.block_views_clients_block_2 .view-content').slick({
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					fade: true,
					adaptiveHeight:true
				});

				$('<div class="slider_buttons"><div class="slider_left"></div><div class="slider_right"></div></div>').appendTo('.block_views_clients_block_2');

		        $('.block_views_clients_block_2 .slider_buttons .slider_right').livequery('click', function() {
					$('.block_views_clients_block_2 .slick-arrow.slick-next').click();
				});
				$('.block_views_clients_block_2 .slider_buttons .slider_left').livequery('click', function() {
					$('.block_views_clients_block_2 .slick-arrow.slick-prev').click();
				});

				$(".sidebar-first .middle_after_bottom .middle_inner .block .block_title").each(function(){
			        $(this).wrapInner("<div class='accordBlock'></div>");
			    });

			    $('.block_drupal_package_block_gifts_main .field-name-dpb-title-field .field-item').wrapInner("<div class='accordBlockPresents'></div>");
			    $(".block_views_clients_block_1 .block_title,.block_block_2 .block_title,.block_system_main .block_title").wrapInner("<div class='accordBlock'></div>");

			    $('.block_drupal_package_block_gifts_main .field_inner_wrap_dpb_title_field').nextAll('div').wrapAll("<div class='presentsWrap'></div>");
			    $('.accordBlock').click(function(){
			    	$(this).toggleClass("active");
		    		$(this).parent('.block_title').next('.block_content').slideToggle('slow');
			    });

			    $('.block_views_events_block_3 .accordBlock').click(function(){
			    	$('.block_views_events_block_3 .slick-arrow.slick-next').click();
			    });


			    $('.accordBlockPresents').click(function(){
		    		$(this).parents('.block_content').find('.presentsWrap').slideToggle('slow');
		    		$(this).toggleClass("active");
			    });

			    $('.block_views_diplomas_block_2 .view-diplomas.view-display-id-block_2 .view-content .views-row .views-field-field-node-text .slider_buttons').prependTo('.block_views_diplomas_block_2 .view-diplomas.view-display-id-block_2 .view-content');

			    $('.footer .block_drupal_package_block_contacts_footer .field-name-field-address p br').remove();

			    $("<div class='footer-bottom'></div>").appendTo(".footer");

			    $('.footer .block_drupal_package_block_contacts_footer .field_inner_wrap_field_links_soc .field-item:eq(0)').appendTo(".footer-bottom");
			    $('.footer .block_drupal_package_block_contacts_footer .field_inner_wrap_field_links_soc .field-item:eq(0)').appendTo(".footer-bottom");
			    $("<a class='footer-order' href='/services'>Заказать мероприятие</a>").appendTo(".footer-bottom");


			   	$(".slicknav_btn").click(function(){
				    if ($(this).hasClass('slicknav_open')) {
			    		$('.header .block_search_form').hide();
				   	} else {
				   		$('.header .block_search_form').show();
				   	}
				});

				$('.block_drupal_package_block_bg_about').parents('.content_top_region').addClass('content_top_region_about');

				var pageName = $('.slicknav_nav ul li ul li a.active').text();
				$("<span class='pageNameTitle'>"+ pageName +"</span>").prependTo(".not-front .header");
				$('.block_drupal_package_block_leadership .field_inner_wrap_field_about_img').insertAfter('.block_drupal_package_block_leadership .field_inner_wrap_field_block_body');


				$('.block_views_clients_block_1 .view-content').slick({
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					fade: true,
					adaptiveHeight:true
				});

				$('<div class="slider_buttons"><div class="slider_left"></div><div class="slider_right"></div></div>').appendTo('.block_views_clients_block_1 .block_content');

		        $('.block_views_clients_block_1 .slider_buttons .slider_right').livequery('click', function() {
					$('.block_views_clients_block_1 .slick-arrow.slick-next').click();
				});
				$('.block_views_clients_block_1 .slider_buttons .slider_left').livequery('click', function() {
					$('.block_views_clients_block_1 .slick-arrow.slick-prev').click();
				});

				$('.block_views_clients_block_1 .accordBlock').click(function(){
			    	$('.block_views_clients_block_1 .slick-arrow.slick-next').click();
			    });

				



				

			    
		        
	        } 
	    };


	   

	});
})(jQuery);
