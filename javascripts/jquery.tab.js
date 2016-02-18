(function($) {
	$.tab = function(options) {
		var $container = $(options.container) || $('#tab');
		var $btn = $container.find('.btns').find('.btn');
		var $content = $container.find('.cont').find('.content');

    $btn.on('click',function(){
      var index = $(this).index();
      $(this).addClass('active').siblings().removeClass('active');
      $content.eq(index).addClass('active').siblings().removeClass('active');
    });
	};
})(jQuery);