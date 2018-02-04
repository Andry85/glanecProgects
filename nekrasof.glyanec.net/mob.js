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
 				$('.view-diplomas.view-display-id-page_1 .view-content .views-row.not_bg').hide();
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

				$(".sidebar-first .middle_after_bottom .middle_inner .block .block_title,.block_views_offers_block_1 .block_title,.block_views_related_services_block_2 .block_title").each(function(){
			        $(this).wrapInner("<div class='accordBlock'></div>");
			    });

			    $('.block_drupal_package_block_gifts_main .field-name-dpb-title-field .field-item').wrapInner("<div class='accordBlockPresents'></div>");
			    $(".block_views_clients_block_1 .block_title,.block_block_2 .block_title,.block_similar_artists .block_title").wrapInner("<div class='accordBlock'></div>");

			    $('.block_drupal_package_block_gifts_main .field_inner_wrap_dpb_title_field').nextAll('div').wrapAll("<div class='presentsWrap'></div>");
			    $('.accordBlock').click(function(){
			    	$(this).toggleClass("active");
		    		$(this).parent('.block_title').next('.block_content').slideToggle('slow');
			    });

			    $('.block_similar_artists .accordBlock').click(function(){
			    	$(this).parent('.block_title').next('.view-artists').find('.view-content').slideToggle('slow');
			    });

			    $('.block_views_events_block_3 .accordBlock').click(function(){
			    	$('.block_views_events_block_3 .slick-arrow.slick-next').click();
			    });

			    $('.block_views_offers_block_1 .accordBlock').click(function(){
			    	$('.block_views_offers_block_1 .slick-arrow.slick-next').click();
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
			   

			    var orderList = $('body').parent('html').attr('lang');
				switch (orderList) {
				  case 'ru':
				    	$("<a class='footer-order' href='services'>Заказать мероприятие</a>").appendTo(".footer-bottom");
				    break;
				  case 'uk':
						$("<a class='footer-order' href='services'>Замовити захід</a>").appendTo(".footer-bottom");
				    break;
				  case 'en':
				  		$("<a class='footer-order' href='services'>Order an event</a>").appendTo(".footer-bottom");
				    break;
				}


			   


			   	$(".slicknav_btn").click(function(){
				    if ($(this).hasClass('slicknav_open')) {
			    		$('.header .block_search_form').hide();
				   	} else {
				   		$('.header .block_search_form').show();
				   	}
				});

				$('.block_drupal_package_block_bg_about').parents('.content_top_region').addClass('content_top_region_about');

				var pageName = $('.slicknav_nav ul li ul li a.active,.slicknav_nav li ul li.parent_link > a.active').text();
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


			    $('.block_views_press_category_block_1 .view-content').slick({
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					fade: true,
					adaptiveHeight:true
				});

				$('<div class="slider_buttons"><div class="slider_left"></div><div class="slider_right"></div></div>').appendTo('.block_views_press_category_block_1 .block_content');

		        $('.block_views_press_category_block_1 .slider_buttons .slider_right').livequery('click', function() {
					$('.block_views_press_category_block_1 .slick-arrow.slick-next').click();
				});
				$('.block_views_press_category_block_1 .slider_buttons .slider_left').livequery('click', function() {
					$('.block_views_press_category_block_1 .slick-arrow.slick-prev').click();
				});

				$('.node-type-artists .content_top_region .page_title').prependTo('.node.node_artists .left_wrap');
				$('<a class="node_artists_back" href="../services"></a>').prependTo('.node.node_artists .left_wrap');

				var attrArtists = $('.node-type-artists').parent('html').attr('lang');
				switch (attrArtists) {
				  case 'ru':
				    	$("<span class='pageNameTitle'>Заказ артистов, организация концертов</span>").prependTo(".node-type-artists .header").next('.pageNameTitle').remove();
				    break;
				  case 'uk':
						$("<span class='pageNameTitle'>Замовлення артистів, організація концертів</span>").prependTo(".node-type-artists .header").next('.pageNameTitle').remove();
				    break;
				  case 'en':
				  		$("<span class='pageNameTitle'>Order of artists, organization of concerts</span>").prependTo(".node-type-artists .header").next('.pageNameTitle').remove();
				    break;
				}
				
				$('<div class="blockSeparator"></div>').insertAfter('.node.node_artists .right_wrap .info_artists .arrow');
				$('#block-views-artists-block-2 .photoswipe-gallery .views-row').each(function(){
			        $(this).removeAttr("style");
			    });

			    $('<div class="sliderArtist"></div>').prependTo('.block_views_artists_block_2 .view-content,.block_drupal_package_block_photo_services .view-content,.block_drupal_package_block_photo_related_services .view-content');
			    $('#block-views-artists-block-2 .photoswipe-gallery .views-row a img,.block_drupal_package_block_photo_services .photoswipe-gallery .views-row a img,.block_drupal_package_block_photo_related_services .photoswipe-gallery .views-row a img').each(function(){
			        $(this).parents('.block_views_artists_block_2 .view-content,.block_drupal_package_block_photo_services .view-content,.block_drupal_package_block_photo_related_services .view-content').find('.sliderArtist').append($(this));
			    });

			     $('.sliderArtist').slick({
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					fade: true,
					adaptiveHeight:true
				});

				$('<div class="slider_buttons"><div class="slider_left"></div><div class="slider_right"></div></div>').appendTo('.sliderArtist');

		        $('.sliderArtist .slider_buttons .slider_right').livequery('click', function() {
					$('.sliderArtist .slick-arrow.slick-next').click();
				});
				$('.sliderArtist .slider_buttons .slider_left').livequery('click', function() {
					$('.sliderArtist .slick-arrow.slick-prev').click();
				});


				
							
				$('.block_drupal_package_block_contacts .left_wrap_block .field_dpb_inner_wrap.field_inner_wrap_field_contacts_phone').insertAfter('.block_drupal_package_block_contacts .left_wrap_block .field_dpb_inner_wrap.field_inner_wrap_field_social_links2');
				$('.block_drupal_package_block_contacts .left_wrap_block .field_dpb_inner_wrap.field_inner_wrap_field_viber').insertBefore('.block_drupal_package_block_contacts .left_wrap_block .field_dpb_inner_wrap.field_inner_wrap_field_skype');
				$('.block_drupal_package_block_contacts .left_wrap_block .field_dpb_inner_wrap.field_inner_wrap_field_contacts_address p br').remove();

				$('<div class="singerPhoto"></div>').appendTo('.block_drupal_package_block_about_careers_text');

				$('<img class="careersPhoto" src="/sites/all/themes/newtheme/images/bg_block.png"/>').appendTo('.block_drupal_package_block_about_find_careers .block_content');

				$('<a class="node_artists_back" href="/careers"></a>').insertBefore('.node-type-careers .content_top_region .page_title');




				var vacanciesList = $('.node-type-careers').parent('html').attr('lang');
				switch (vacanciesList) {
				  case 'ru':
				    	$("<span class='pageNameTitle'>Вакансии</span>").prependTo(".node-type-careers .header").next('.pageNameTitle').remove();
				    break;
				  case 'uk':
						$("<span class='pageNameTitle'>Вакансії</span>").prependTo(".node-type-careers .header").next('.pageNameTitle').remove();
				    break;
				  case 'en':
				  		$("<span class='pageNameTitle'>Careers</span>").prependTo(".node-type-careers .header").next('.pageNameTitle').remove();
				    break;
				}

				$(".view-diplomas.view-display-id-page_1 .view-header").each(function(){
			        $(this).wrapInner("<div class='accordBlock'></div>");
			    });
			    $('.view-diplomas.view-display-id-page_1 .accordBlock').click(function(){
			    	$(this).toggleClass("active");
		    		$(this).parent('.view-header').next('.view-content').slideToggle('slow');
			    });

			    $(".view-diplomas.view-display-id-page_1 .item-list").appendTo('.view-diplomas.view-display-id-page_1 .view-content');


			    



				

			    
		        
	        } 
	    };


	   

	});
})(jQuery);
