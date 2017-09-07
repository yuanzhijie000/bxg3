define(['jquery'],function(){
	$(document).ajaxStart(function(){
		// 控制遮罩层显示
		$('.overlay').show();
	});

	$(document).ajaxStart(function(){
		// 控制遮罩层隐藏
		setTimeout(function(){
			$('.overlay').hide();
		},500)
		
	});
});