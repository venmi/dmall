$(function() {

  Banner();

	function Banner() {
		var $banner = $('#banner');

		var url = $banner.data('url');
    var bg = $banner.data('bg');

    $banner.css({
      'background-color': bg,
      'background-image': 'url('+url+')',
      'background-position': 'center'
    });

	}



});