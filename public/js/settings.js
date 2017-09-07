define(['jquery','template','util','uploadify','datepicker','language','region'],function($,template,util){
	// 设置导航菜单选中
	util.setMenu('main/index');

	$.ajax({
		type:'get',
		url:'/api/teacher/profile',
		dataType:'json',
		success:function(data){
			var html=template('profileForm',data.result);
			$('#profile').html(html);

			// 头像上传
			$('#upfile').uploadify({
				width:120,
				height:120,
				buttonText:'',
				itemTemplate:'<span></span>',
				swf:'/public/assets/upload/uploadify.swf',
				uploader:'/api/uploader/avatar',
				fileObjName:'tc_avatar',
				onUploadSuccess:function(f,data){
					// 图片地址
					var data=JSON.parse(data);
					$('.preview img').attr('src',data.result.path);
				}
			});

			// 三级联动
			$('#pcd').region({
				url:'/public/assets/jquery-region/region.json'
			});
		}
	});
});