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
    $('.front .middle_bottom').addClass('scrollme');
    $('.front .middle_bottom').addClass('animateme');
    $('.front .middle_bottom').attr({
      'data-when': 'exit',
      'data-from': '1',
      'data-to': '0',
      'data-opacity': '0'
    });
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
        var wiw = window.innerWidth;
        var scrollTop = $(window).scrollTop() / 2;
        var opacity = 1 - scrollTop / 50;
        // console.log(opacity);
        $('.logo_wrapper').css('opacity', opacity);
        if (opacity <= 0) {
          $('.logo_wrapper').hide();
        } else {
          $('.logo_wrapper').show();
        }
        
        if(wiw > 767) {
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
  });
})(jQuery);
