(function ($) {
	// $(window).ready(function(){
	//     var movementStrength = 20;
	//     var height = movementStrength / $(window).height();
	//     var width = movementStrength / $(window).width();
	//     $(".content_top_region").mousemove(function(e){
	//       var pageX = e.pageX - ($(window).width() / 2);
	//       var pageY = e.pageY - ($(window).height() / 2);
	//       // var newvalueX = width * pageX * +1 + 30;
	//       var newvalueY = height * pageY * -1 - 60;
	//       $('.content_top_region').css("background-position", newvalueX+"px     "+newvalueY+"px");
	//     });
	// });
	// jQuery.extend(jQuery.fn, {
	// 		compactLabel: function() {
	// 		var form = jQuery('#views-exposed-form-artists-page-1');
	// 		var id = form.attr('id');
	// 		var inputs = form.find('input:text, input:password, input[type=email], input[type=number], textarea');
	// 		inputs.each(function(){
	// 			var field = jQuery(this);
	// 			var show = jQuery(this).val() ? false : true;
	// 			var label = form.find('label[for="' + field.attr('id') + '"]');
	// 			var for_label = label.attr('for');
	// 			jQuery(this).parents('.form-item:first').addClass('compact-label-wrap');
	// 			if(!label.hasClass('compact-label')) {
	// 				if(!show) label.hide();
	// 				else label.show();
	// 				label.addClass('compact-label');
	// 				label.attr('for', id+'-'+for_label);
	// 				field.focus(function(){
	// 					label.fadeOut(200);
	// 				});
	// 				field.blur(function(){
	// 					if(!field.val())
	// 						label.fadeIn(200);
	// 				});
	// 				label.click(function(){
	// 					field.focus();
	// 				});
	// 			}
	// 		});
	// 		}
	// 	});
	$(document).ready(function() {
		$('.webform-confirmation').livequery(function(){
		   setTimeout(function() { 
		   $('.links a').mousedown();
		   $('.popup_exit').click(); 
		   }, 4000)
		});

		// $(window).scroll(function() {
		// 	var pos = 
		// }
		$('.popup_exit, .close').livequery('click', function() {
			$('.popup_exit').fadeOut();
			$('#block-block-4, #block-webform-client-block-50, .block_fixed_services .block-webform').fadeOut();
			$('#block-block-4 .content_inner iframe').remove();
		})
		$('.error_message_status').livequery(function(){
	        setTimeout(function(){
	          $('.error_message_status').addClass('active');
	          $('select').removeClass('error');
	          $('input').removeClass('error');
	          $('textarea').removeClass('error');
	        }, 4000);
	    });
		var devel = $('#gl_devel').html();
		$('#gl_devel').append('<noindex><div class="mask_devel">'+devel+'</div></noindex>');
		$('.node img, .views-field-description-field img').each(function() {
		    var floatImg = $(this).css('float');
		    if (floatImg == 'left') {
		        $(this).addClass('content_left_img');
		    } else if (floatImg == 'right') {
		        $(this).addClass('content_right_img');
		    } else {
		        $(this).addClass('content_center_img');
		    }
		});
		$('.block_search_form .search_btn').livequery('click', function() {
			$('.popup_exit').fadeIn();
			// $('.wrapper').addClass('blur');
			$(this).parents('.block_search_form').addClass('active');
			$('.block_search_form form .form-item input').focus();
		});
		$('.block_search_form.active .search_btn, .popup_exit').livequery('click', function(){
			$('.popup_exit').fadeOut();
			// $('.wrapper').removeClass('blur');
			$('.block_search_form.active').removeClass('active');
		});
		$('.footer .block_menu_footer .menu .group_item .group_item_ul li a').livequery(function() {
			if ($(this).hasClass('active')){
				$(this).parents('li').addClass('active_link');
			}
		})
		// $('.view-diplomas.view-display-id-page_1 .view-content').masonry({
		// 	columnWidth: 252,
		// 	itemSelector: '.views-row',
		// 	horizontalOrder: true
		// });
		$('.view-diplomas.view-display-id-page_1 .view-content').livequery(function(){
			var max_h = 0;
			$(this).find('.views-row').each(function(){
				var row_h = $(this).innerHeight()-50;
				if(row_h > max_h) max_h = row_h;
			});
			$(this).find('.views-row').each(function(){
				var del = $(this).data('del');
				$(this).height(max_h/(del ? del : 1));
			});
			$(this).masonry({
				itemSelector: '.views-row',
			});
		});
		$('.view-id-artists.view-display-id-block_2 .photoswipe-gallery').livequery(function(){
			$(this).masonry({
				itemSelector: '.views-row',
				gutter: 30,
				isAnimated: true
			});
		});

		$('.youtube').click(function(){
			$vid = $(this).attr('data-id');
			$(this).find('img').remove();
			$(this).addClass('active');
			$(this).append('<iframe src="https://www.youtube.com/embed/'+$vid+'?autoplay=1&rel=0" allowfullscreen></iframe>');
		})
		$('.youtube_item .play').click(function(){
			$vid = $(this).parents('.youtube_item').attr('data-id');
			$(this).parents('.youtube_item').find('img').remove();
			$(this).parents('.youtube_item').addClass('active');
			$(this).parents('.youtube_item').append('<iframe src="https://www.youtube.com/embed/'+$vid+'?autoplay=1&rel=0" allowfullscreen></iframe>');
		})

		$('.item_slider_wrap').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			arrows: false,
			dots:true
		})

		$('.view-reviews.view-display-id-block_1 .view-content, .view-reviews.view-display-id-block_2 .view-content, .view-reviews.view-display-id-block_4 .view-content, .view-reviews.view-display-id-block_5 .view-content').slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1
		})
		$('.view-offers.view-display-id-block_1 .view-content, .view-offers.view-display-id-block_2 .view-content').slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1
		})
		$('.block_views_events_block_3 .view-events.view-display-id-block_3 .view-content').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			adaptiveHeight:true,
			responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        autoplay: true
		      }
		    }
		  ]
			
		})
		$('.view-diplomas.view-display-id-block_2 .view-content').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			adaptiveHeight:true
		})
		$('.slider_main_wrapper').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
			fade: true,
			draggable: false,
			// autoplay: true,
			// autoplaySpeed: 3000
		})
		$('.block_views_events_block_3 .view-events.view-display-id-block_3 .views-row .views-fieldset .slider_buttons .slider_right').livequery('click', function() {
			$('.block_views_events_block_3 .slick-arrow.slick-next').click();
		})
		$('.block_views_events_block_3 .view-events.view-display-id-block_3 .views-row .views-fieldset .slider_buttons .slider_left').livequery('click', function() {
			$('.block_views_events_block_3 .slick-arrow.slick-prev').click();
		})
		$('.view-diplomas.view-display-id-block_2 .slider_buttons .slider_right').livequery('click', function() {
			$('.view-diplomas.view-display-id-block_2 .slick-arrow.slick-next').click();
		})
		$('.view-diplomas.view-display-id-block_2 .slider_buttons .slider_left').livequery('click', function() {
			$('.view-diplomas.view-display-id-block_2 .slick-arrow.slick-prev').click();
		})

		$('.slick-dots li').livequery('click', function() {
			// $()
		})
		// var video = $('.slider_item video');
       // var button = document.getElementById("play");
       // if (video.paused) {
          // video.play();
          // button.textContent = "||";
       // } 
       // else {
       //    video.pause();
       //    // button.textContent = ">";
       // }
		$(".node-type-artists #artists_btn").livequery('click', function() {
			$('body, html').scrollTo('.block_summary_send', 500);
		})
		$("#services_btn_term").livequery('click', function() {
			$('body, html').scrollTo('.block_summary_send', 500);
		})
		$("#careers_btn").livequery('click', function() {
			$('body, html').scrollTo('.block_summary_send', 500);
		})
		$("#certificates_btn").livequery('click', function() {
			$('body, html').scrollTo('.block_summary_send', 500);
		})
		$("#services_btn_related").livequery('click', function() {
        	jQuery.scrollTo('.view-related-services.view-display-id-page_1', 500,{
        		offset:-80
	  		});
		})
		$("#services_btn_term_related").livequery('click', function() {
        	$('body, html').scrollTo('.block_summary_send', 500);
		})
		$(".page-services #services_btn").livequery('click', function() {
        	jQuery.scrollTo('.view-services.view-display-id-page_1', 500,{
        		offset:-80
	  		});
		})
		$(".to_up").livequery('click', function() {
			$('body, html').scrollTo('.wrapper', 1000);
		})
		$('.view-reviews .view-content .views-row').livequery('click', function() {
			$vid = $(this).attr('data-id');
			if ($vid) {				
				var html = '<iframe src="https://www.youtube.com/embed/'+$vid+'?autoplay=1&rel=0" allowfullscreen></iframe>';
				$('#block-block-4 .content_inner').html(html);
				$('#block-block-4, .popup_exit').fadeIn();
				var hei = $('#block-block-4').innerHeight();
				hei = hei / 2;
				hei = '-'+hei+'px';		
				$('#block-block-4').css('margin-top', hei);	
			}
		})
		$('.view-artists.view-display-id-page_1 .view-content .views-row .views-field-title-field a').livequery(function() {
			var count = $(this).text();
			count = count.replace(/\s/, " <br>");
			$(this).html(count);
		})
		if ($(window).width() > 767) {
			$.fn.equivalent = function (){
			        var $blocks = $(this),			
			            maxH    = $blocks.eq(0).height();			
			        $blocks.each(function(){			
			            maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;			
			        });			
			        $blocks.height(maxH);			
			    }			
		    // $('.view-goods .views-field-title').equivalent();
		    $('.view-offers.view-display-id-block_1 .view-content .views-row .views-field-title-field a').equivalent();
		    $('.view-offers.view-display-id-block_2 .view-content .views-row .views-field-title-field a').equivalent();
		}
		$('.front .left_sidebar').livequery(function() {	
			var scrollTop = $(window).scrollTop();
			// console.log(scrollTop);
			if( scrollTop > 600 ){
				$('.left_sidebar').addClass("fixed");
			}
			else{
				$('.left_sidebar').removeClass("fixed");
			}		
			$(window).scroll(function() {
				var scrollTop = $(window).scrollTop();
				// var topSliderPosition = $('.left_sidebar').offset().top;
				// console.log(scrollTop);
				if( scrollTop > 600 ){
					$('.left_sidebar').addClass("fixed");
				}
				else{
					$('.left_sidebar').removeClass("fixed");
				}
			})
		})
		$(window).scroll(function() {
			var scrollTop = $(window).scrollTop();
			// var topSliderPosition = $('.left_sidebar').offset().top;
			// console.log(scrollTop);
			if( scrollTop > 900 ){
				$('.order_fixed_btn').addClass("active");
			}
			else{
				$('.order_fixed_btn').removeClass("active");
			}
		})
		
		
		var each = $('.block_drupal_package_block_benefits_main .field-name-field-benefits > .field-items > .field-item').get().reverse();
		$count = 0;
		$(each).each(function() {
			$count ++;
			$(this).css('z-index', $count);
		})

		$('.block_drupal_package_block_about_find_careers .field-name-field-btn-block .field-item').livequery('click', function() {
			$('#block-webform-client-block-50, .popup_exit').fadeIn();
		})

		$('.block_search_form form .form-actions input').click(function() {
			$(this).parents('form').prepend('<div class="search_throbber"></div>');
			$('.popup_exit').fadeIn();
		})
		$('#order_fixed_button').livequery('click', function() {
			// $('.block_fixed_services .block-webform, .popup_exit').fadeIn();
			$('body, html').scrollTo('.block_summary_send', 500);
		})

		$('.view-artists.view-display-id-page_1 .view-filters .views-widget-filter-title_field_value .views-widget .form-item input, .view-artists.view-display-id-page_1 .view-filters .views-widget-filter-title_field_value .views-widget .form-item label').livequery('focus', function() {
			$(this).parents('.form-item').addClass('active');
		});
		$('.view-artists.view-display-id-page_1 .view-filters .views-widget-filter-title_field_value .views-widget .form-item:not(.span_click) input').livequery('blur',function() {
			if ($(this).attr('value') != '') {
				// console.log('value true = '+$(this).attr('value'));
				$(this).parents('.form-item').addClass('active');				
			}else{
				// console.log('value false = '+$(this).attr('value'));
				$(this).parents('.form-item').removeClass('active');				
			}
		});

		var spanText = $('.view-artists.view-display-id-page_1 .view-filters .views-widget-filter-title_field_value .views-widget .form-item label span').text();
		$('.view-artists.view-display-id-page_1 .view-filters .views-widget-filter-title_field_value .views-widget .form-item label span').livequery('click',function(){
			$(this).parents('form').find('.form-text').val(spanText);
			$(this).parents('.form-item').addClass('active span_click');
		});

		$('.node-type-artists .leaf_477 > a').addClass('active');
		$('.node-type-events .leaf_478 > a').addClass('active');
		$('.node-type-news .leaf_480 > a').addClass('active');
		$('.node-type-action .leaf_482 > a, .node-type-action .leaf_733 > a').addClass('active');
		$('.node-type-certificates .leaf_482 > a, .node-type-certificates .leaf_737 > a').addClass('active');
		// $('.node-type-action .leaf_482 a').addClass('active');

		var attr_skype = $('.footer .block_drupal_package_block_contacts_footer .field_inner_wrap_field_links_soc .field-item:first-child a').attr('href');
		attr_skype = attr_skype.replace('/','');
		var attr_viber = $('.footer .block_drupal_package_block_contacts_footer .field_inner_wrap_field_links_soc .field-item:last-child a').attr('href');
		attr_viber = attr_viber.replace('/','');
		$('.footer .block_drupal_package_block_contacts_footer .field_inner_wrap_field_links_soc .field-item:last-child a').attr('href', 'viber://chat?number='+attr_viber);
		$('.footer .block_drupal_package_block_contacts_footer .field_inner_wrap_field_links_soc .field-item:first-child a').attr('href', 'skype:'+attr_skype+'?call');
	});
	 Drupal.behaviors.giz = {
    	attach: function(context, settings) {	

	    	var each = $('.view-careers.view-display-id-page_1 .view-content .views-row').get().reverse();
	    	$count = 0;
	    	$(each).each(function() {
	    		$count ++;
	    		$(this).css('z-index', $count);
	    	})	    
    		// $('.block_block_4').livequery(function(){
    		// 	setTimeout(function() {
	    	// 		var hei = $(this).innerHeight();
	    	// 		hei = hei / 2;
	    	// 		hei = '-'+hei+'px';		
	    	// 		$(this).css('margin-top', hei);	
	    	// 		// console.log($(this).height());
    		// 	}, 1000)
    		// });
    		// $('.pswp').livequery(function() {
    		// 	if ($(this).attr('aria-hidden') == 'false') {
    		// 		$('.wrapper').addClass('blur');				
    		// 	}else{
    		// 		$('.wrapper').removeClass('blur');								
    		// 	}
    		// })
    		// $('.pswp__bg, .pswp__button--close').livequery('click', function() {
   			// 	$('.wrapper').removeClass('blur');								
    		// })
	    }
  	};
})(jQuery);