(function($) {
	$.form = function(options) {
		var $property = $(options.property) || $('.property');

		$property.on('click', 'li', function() {
			$(this).addClass('selected').siblings().removeClass('selected');
		});
	};
})(jQuery);