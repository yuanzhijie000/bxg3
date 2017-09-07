define(['jquery','template','util','ckeditor','uploadify','datepicker','language','region','validate','form','state'],function($,template,util,CKEDITOR){
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

			// 富文本
			CKEDITOR.replace('ckeditor',{
		      toolbarGroups : [
		          { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		          { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		          { name: 'links', groups: [ 'links' ] }
		        ]
		    });

			// 表单提交
			$('#settingsForm').validate({
			sendForm:false,
			valid:function(){
				// 富文本数据同步到表单域
				for(var instance in CKEDITOR.instances){
					CKEDITOR.instances[instance].updateElement();	
				}

				// 获取家乡数据
				var p=$('#p options:selected').text();
				var c=$('#p options:selected').text();
				var d=$('#p options:selected').text();
				var hometown=p+'|'+c+'|'+d;
				// 所有验证都通过
				$(this).ajaxSubmit({
					type : 'post',
					url : '/api/teacher/modify',
					data:{tc_hometown:hometown},
					dataType:'json',
					success : function(data){
						if (data.code==200) {
							// 刷新页面
							location.reload();
						}
					}
				});
			}
		});

		}
	});
});