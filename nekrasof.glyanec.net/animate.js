(function($) {
  $(document).ready(function() {
    $('.front .middle_inner .region-content #block-drupal-package-block-about-main .block_content').addClass('scrollme');
    $('.front .middle_inner .region-content #block-drupal-package-block-about-main .block_content').addClass('animateme');
    $('.front .middle_inner .region-content #block-drupal-package-block-about-main .block_content').attr({
      'data-when': 'enter',
      'data-from': '1',
      'data-to': '0',
      'data-opacity': '0'
    });

    $('.front .middle_inner .region-content #block-views-offers-block-5 .block_content').addClass('scrollme');
    $('.front .middle_inner .region-content #block-views-offers-block-5 .block_content').addClass('animateme');
    $('.front .middle_inner .region-content #block-views-offers-block-5 .block_content').attr({
      'data-when': 'enter',
      'data-from': '1',
      'data-to': '0',
      'data-opacity': '0'
    });
    $('.front .middle_inner .region-content #block-drupal-package-block-benefits-main .block_content').addClass('scrollme');
    $('.front .middle_inner .region-content #block-drupal-package-block-benefits-main .block_content').addClass('animateme');
    $('.front .middle_inner .region-content #block-drupal-package-block-benefits-main .block_content').attr({
      'data-when': 'enter',
      'data-from': '1',
      'data-to': '0',
      'data-opacity': '0'
    });

    $('#block-drupal-package-block-about-main').addClass('scrollme');
    $('#block-drupal-package-block-about-main').addClass('animateme');
    $('#block-drupal-package-block-about-main').attr({
      'data-when': 'enter',
      'data-from': '1',
      'data-to': '0',
      'data-opacity': '0'
    });
    if ($('body').hasClass('device-desktop')) {
	    $('.front .middle_bottom').addClass('scrollme');
	    $('.front .middle_bottom').addClass('animateme');
	    $('.front .middle_bottom').attr({
	      'data-when': 'exit',
	      'data-from': '1',
	      'data-to': '0',
	      'data-opacity': '0'
	    });
    }
    $('.front .middle_after_bottom .block .block_content').addClass('scrollme');
    $('.front .middle_after_bottom .block .block_content').addClass('animateme');
    $('.front .middle_after_bottom .block .block_content').attr({
      'data-when': 'enter',
      'data-from': '1',
      'data-to': '0',
      'data-opacity': '0'
    });
    if ($('body').hasClass('front')) {
      $(window).scroll(function() {
        var scrollTop = $(window).scrollTop() / 2;
        var opacity = 1 - scrollTop / 50;
        // console.log(opacity);
        $('.logo_wrapper').css('opacity', opacity);

        var sliderPos = $('#block-drupal-package-block-slider-main').offset();
        console.log(sliderPos.top);
       
        if ($(window).scrollTop() >= sliderPos.top) {
          $('.logo_wrapper').hide();
        } else {
          $('.logo_wrapper').show();
        }
        
        if ($('body').hasClass('device-desktop')) {
        	$('#block-drupal-package-block-slider-main .slider_text_block').css('transform', 'translateX(' + scrollTop + 'px)');

        }
        var h = $('#block-drupal-package-block-about-main').offset().top;
        if ($(this).scrollTop() >= h) {
          $('#block-drupal-package-block-left-banner').fadeIn(1000);
        } else {
          $('#block-drupal-package-block-left-banner').fadeOut(1000);
        }
      });
      // $('.block_drupal_package_block_about_main .field_inner_wrap_field_about_first_block > .field-name-field-about-first-block > .field-items > .field-item .field-name-field-count .field-item').counterUp({
      //   delay: 10,
      //   time: 1000
      // });
    }
    (setInterval(function() {
      $('#block-views-offers-block-5 .pager-load-more li a,#block-views-reviews-block-3 .pager-load-more li a,#block-views-news-block-4 .pager-load-more li a').addClass('animated');
      $('#block-views-offers-block-5 .pager-load-more li a,#block-views-reviews-block-3 .pager-load-more li a,#block-views-news-block-4 .pager-load-more li a').toggleClass('bounce');
    }, 1500));





    function anim(nameSection, nameBlock, selectClass, nameAddClass, addOfs){
      if (nameSection.is(nameBlock)) {
        var block = nameBlock;
        $(window).scroll(function() {
          if (percentIsInVision()) {
            ShowText();
          }
        });
      }
      function percentIsInVision() {
        var blockBottom = block.offset().top + addOfs;
        var windowBottom = $(window).scrollTop() + $(window).height();
        return windowBottom >= blockBottom;
      }
      function ShowText() {
        selectClass.addClass(nameAddClass);
      } 
    }

    anim($('div'), $('.view-services.view-display-id-page_1 .view-content .views-row'), $('.view-services.view-display-id-page_1 .view-content .views-row'), 'show', 250);
    anim($('div'), $('.view-id-dpb.view-display-id-block_1 .photoswipe-gallery .views-row'), $('.view-id-dpb.view-display-id-block_1 .photoswipe-gallery .views-row'), 'galery_anym', 250);



    if ($("div").is("#block-drupal-package-block-about-main")) {
      var block2 = $('#block-drupal-package-block-about-main');
      $(window).scroll(function() {
        if (percentIsInVision2()) {
          ShowText2();
        }
      });
    }
    function percentIsInVision2() {
      var blockBottom = block2.offset().top + 100;
      var windowBottom = $(window).scrollTop() + $(window).height();
      return windowBottom >= blockBottom;
    }
    function ShowText2() {
      $('.block_drupal_package_block_about_main .field_inner_wrap_field_about_first_block > .field-name-field-about-first-block > .field-items > .field-item:nth-child(1) .field-name-field-count').animate({ num: 20}, {
          duration: 2000,
          step: function (num){
              this.innerHTML = (num).toFixed(0);
          }
      });
      $('.block_drupal_package_block_about_main .field_inner_wrap_field_about_first_block > .field-name-field-about-first-block > .field-items > .field-item:nth-child(2) .field-name-field-count').animate({ num: 3000}, {
          duration: 2000,
          step: function (num){
              this.innerHTML = (num).toFixed(0);
          }
      });
      $('.block_drupal_package_block_about_main .field_inner_wrap_field_about_first_block > .field-name-field-about-first-block > .field-items > .field-item:nth-child(3) .field-name-field-count').animate({ num: 400}, {
          duration: 2000,
          step: function (num){
              this.innerHTML = (num).toFixed(0);
          }
      });
      $('.block_drupal_package_block_about_main .field_inner_wrap_field_about_first_block > .field-name-field-about-first-block > .field-items > .field-item:nth-child(4) .field-name-field-count').animate({ num: 100}, {
          duration: 2000,
          step: function (num){
              this.innerHTML = (num).toFixed(0);
          }
      });
    }
  });
})(jQuery);
