	define(['jquery','template','cookie'],function($,template){
		// NProgress.start();

		// NProgress.done();

		$('.navs ul').prev('a').on('click', function () {
			$(this).next().slideToggle();
		});

		// 退出
		$('#logoutBtn').click(function(){
			$.ajax({
				url: '/api/logout',
				type: 'POST',
				dataType: 'json',
				success:function(data){
						console.log(data)
					if (data.code==200) {
						location.href='/main/login';
					}
				}
			});
		});

		// 验证是否登录
		var sessionId=$.cookie('PHPSESSID');
		if (!sessionId&&location.pathname!='/main/login') {
			location.href='/main/login';
		}

		// 获取登录信息
		var loginInfo=$.cookie('loginInfo');
		var info=JSON.parse(loginInfo);
		// $('.profile img').attr('src',info.tc_avatar);
		// $('.profile h4').html(info.tc_name);
		
		var tplstr='<div class="avatar img-circle"><img src="{{tc_avatar}}"></div><h4>{{tc_name}}</h4>';
		var html=template.render(tplstr,info);
		$('.aside .profile').html(html);
 
	});