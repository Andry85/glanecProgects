(function ($) {
	$(document).ready(function() {

		$(".region-header #block-system-main-menu .menu li a").each(function(){
	        $(this).attr("data-hover", $(this).text());
	    });

		


	    $(window).resize(startAnimation);
	    startAnimation();
	    function startAnimation() {
	        var wiw = window.innerWidth;
	        if(wiw > 767) {
		       
		       $('#block-views-events-block-1').addClass('wow zoomInUp').attr("data-wow-delay", "0.5s").attr("data-wow-duration", "3s");
		
		        var timeAnim = 0.15;
		        $("#block-views-product-block .block_content .view-product .view-content .views-row").each(function(index,element){
			        $(this).addClass('wow bounceInUp').attr("data-wow-delay", timeAnim + "s");
			        timeAnim = timeAnim + 0.15;
			    });

			    var timeAnim_1 = 0.5;
		        $("#block-views-blog-block-1 .view-display-id-block_1 .view-content .views-row").each(function(index,element){
			        $(this).addClass('wow bounceInRight').attr("data-wow-delay", timeAnim_1 + "s");
			        timeAnim_1 = timeAnim_1 + 0.5;
			    });
			    
	        } 
	    };

	   

	});
})(jQuery);