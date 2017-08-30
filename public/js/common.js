
	NProgress.start();

	NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	// 退出
	$('#logoutBtn').click(function(){
		$.ajax({
			url: 'api/logout',
			type: 'POST',
			dataType: 'json',
			success:function(data){
				if (data.code==200) {
					location.href='/main/login';
				}
			}
		});
	});