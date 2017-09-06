define(['jquery','template','util'],function($,template,util){
	// 设置导航菜单选中
	util.setMenu('main/index');

	$.ajax({
		type:'get',
		url:'/api/teacher/profile',
		dataType:'json',
		success:function(data){
			var html=template('profileForm',data.result);
			$('#profile').html(html);
		}
	})
});