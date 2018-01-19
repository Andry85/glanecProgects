(function ($) {
	$(document).ready(function() {
		$('.webform-confirmation').livequery(function(){
			setTimeout(function() { 
				$('.links a').mousedown();
				$('.popup_fon').click(); 
			}, 4000)
		});
		var devel = $('#gl_devel').html();
		$('#gl_devel').append('<noindex><div class="mask_devel">'+devel+'</div></noindex>');
		$('.node img').each(function() {
			var floatImg = $(this).css('float');
			if (floatImg == 'left') {
				$(this).addClass('content_left_img');
			} else if (floatImg == 'right') {
				$(this).addClass('content_right_img');
			} else {
				$(this).addClass('content_center_img');
			}
		});
		$('.arrow_phone').click(function(){
			$('.hidden_phone').fadeToggle(500);
			$('.arrow_phone').toggleClass('rotate');
		});
		$('#block-drupal-package-block-contacts .main-phone').append('<div class="button-phones"></div>');
		$('#block-drupal-package-block-contacts .button-phones').click(function(){
			$('#block-drupal-package-block-contacts .phone_ithem_wrap').fadeToggle(500);
			$('#block-drupal-package-block-contacts .button-phones').toggleClass('rotate');
		});
		$(document).mouseup(function (e) {
			var container = $('#block-drupal-package-block-contacts .phone_ithem_wrap');
			if (container.has(e.target).length === 0){
				container.fadeOut(500);
			}
			var container = $('.hidden_phone');
			if (container.has(e.target).length === 0){
				container.fadeOut(500);
			}
			if (container.has(e.target).length === 0){
				$('#block-drupal-package-block-contacts .button-phones').removeClass('rotate');
			}
			if (container.has(e.target).length === 0){
				$('.arrow_phone').removeClass('rotate');
			}
		});
		$('#block-views-events-block-1 .view-id-events .view-content  .views-row').addClass('close');
		$('#block-views-events-block-1 .other_date_btn').click(function(){
			$(this).parents('.views-row').find('.second_other_date').slideToggle(500);
			var title_1 = $(this).parents('.views-row').find('.label_text1').text();
			var title_2 = $(this).parents('.views-row').find('.label_text2').text();
			var main_title_1 = $(this).parents('.views-row').find('.main_date_text1').text();
			var main_title_2 = $(this).parents('.views-row').find('.main_date_text2').text();
			$(this).parents('.views-row').toggleClass('open');
			$(this).parents('.views-row').toggleClass('close');
			if( $(this).parents('.views-row').hasClass('open') ){
				$(this).parents('.views-row').find('.label_text0').text(title_2);
				$(this).parents('.views-row').find('.main_date_text0').text(main_title_2);
			}
			if($(this).parents('.views-row').hasClass('close')){
				$(this).parents('.views-row').find('.label_text0').text(title_1);
				$(this).parents('.views-row').find('.main_date_text0').text(main_title_1);
			}

		});
		$('#block-webform-client-block-16  , #block-views-blog-block-1 .popup_wrapper').livequery(function(){
			var formHeight = $(this).innerHeight() / 2;
			var formWidth = $(this).innerWidth() / 2;
			$(this).css({'margin-top' : - formHeight , 'margin-left' : - formWidth});
		});
		$('.product_popup_wrapp').livequery(function(){
			var formHeight = $(this).innerHeight() / 2;
			var formWidth = $(this).innerWidth() / 2;
			$(this).css({'margin-top' : - formHeight , 'margin-left' : - formWidth});
		});
		$('#block-views-events-block-1 .view-id-events .view-content .views-field-nid').click(function(){
			$('#block-webform-client-block-16').fadeIn(500);
			$('.popup_fon').fadeIn(500);
			$('#block-webform-client-block-16 input[name="submitted[meropriyatie]"]').val($(this).find('.event').data('nid')).blur();

		});
		$('.popup_fon, .btn-close').click(function(){
			$('.popup_fon').fadeOut(500);
			$('#block-webform-client-block-16 ').fadeOut(500);
		});
		$('#block-drupal-package-block-header-slider .slider_front').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			autoplay: true,
			autoplaySpeed: 5000,
			infinite: true
		});


		/**/
		$('.block_views_video_block_1 .views-row').click(function(){
			$vid = $(this).find('.prevu').attr('data-video-url');
			// console.log(111);
			$(this).parents('body').append('<div class="video_wrap"><div class="close1"></div><iframe src="https://www.youtube.com/embed/'+$vid+'?autoplay=1&rel=0" allowfullscreen></iframe></div>');
			$('.popup_fon_video').fadeIn(500);
		});

		$('.popup_fon_video , .close').click(function(){
			$('.popup_fon_video , .video_wrap').fadeOut(500);
			$('.video_wrap').remove();
		});

			$('.product_popup_wrapp').append('<div class="close"></div>');
		$('.button_show').click(function(){
			$('.product_popup_wrapp').fadeOut(500);
			$(this).parents('.views-row').find('.product_popup_wrapp').fadeIn(500);
			$('.popup_fon_video').fadeIn(500);
		});
		$('.popup_fon_video, .close').click(function(){
		$('.popup_fon_video, .product_popup_wrapp').fadeOut(500);
		});

		$('.popup_wrapper').append('<div class="close"></div>');
		$('#block-views-blog-block-1 .view-display-id-block_1 .view-content .views-field-title-field, #block-views-blog-block-1 .view-display-id-block_1 .view-content .views-field-field-img-blog').click(function(){
			$('.popup_wrapper').fadeOut(500);
			$(this).parents('.views-row').find('.popup_wrapper').fadeIn(500);
			$('.popup_fon').fadeIn(500);
		});
		$('.popup_fon, .popup_wrapper .close').click(function(){
		$('.popup_fon, .popup_wrapper').fadeOut(500);
		});
		if( $('body').hasClass('i18n-uk') ){
			$('#block-views-events-block-1 .view-id-events .view-content .views-field-nid').text('Записатися');
			
		}


		/**/


		$('#block-system-main-menu li.leaf a').click(function(e){
            $('.front #block-system-main-menu li.leaf').removeClass('active_click');
            $(this).parents('li').addClass('active_click');
            var href = $(this).attr('href');
            var b_top = 38;
            var _pos = href.indexOf('#');
            if(_pos >= 0) {
                href = href.substring(_pos);
                
                var elem = $(href);
                if(elem.length) {
                    var top = elem.offset().top - b_top;
                    var win_top = $(window).scrollTop();
                    var scroll_time = Math.abs(win_top - top);
                    $('html, body').animate({scrollTop : top + 'px'}, scroll_time);
                    e.preventDefault();
                }
            }
        });
        
        $(window).scroll(function(){
            $('.block').each(function () {
                var win_h = $('#block-system-main-menu').height();
                var window_top = $(window).scrollTop();
                var position = $(this).offset().top-40;
                if (window_top > position) {
                    $('#block-system-main-menu ul li').removeClass('active_click');
                    $('#block-system-main-menu ul li a[href="/#'+ $(this).attr('id') +'"]').parents('li').addClass('active_click');
                }
            });
        });
        

	});
})(jQuery);