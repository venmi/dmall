$(function() {
	$.tab({
		container: '#tab'
	});

	/**
	 * 关于.data()选择器请祥看
	 * http://www.jquery123.com/data/
	 * data-property 储存标签属性
	 * data-value 储存标签属性值
	 * 选中状态为.selected
	 */

	$.form({
		property: '.property'
	});

  var $form = $('#form');
	var $buyNowBtn = $('#buyNow');

	$buyNowBtn.on('click', function() {
    var length = $form.find('.property').length;

    for(var i = 0;i<length;i++){
      console.log($('.property').eq(i).data('property'));
      console.log($('.property').eq(i).find('.selected').data('value'));
    }

    return false;
  });
});