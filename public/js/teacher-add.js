define(['jquery','template','util','datepicker','language'],function($,template,util){
	// 高亮选中
	util.setMenu('/teacher/list');

	// 编辑的讲师的ID
	var tcId=util.qs('tc_id');
	if (tcId) {
		// 编辑
		$.ajax({
			url: '/api/teacher/edit',
			type: 'GET',
			dataType: 'json',
			data: {tc_id: tcId},
			success:function(data){
				// console.log(data.result)
				data.result.operate="编辑讲师";
				var html=template('teacherTpl',data.result);
				$('#teacherInfo').html(html);

				// 提交编辑讲师表单
				submitForm('/api/teacher/update');
			}
		})
		
	}else{
		// 添加
		var html=template('teacherTpl',{operate:'添加讲师'});
		$('#teacherInfo').html(html);

		// 提交编辑讲师表单
		submitForm('/api/teacher/add');
	}
	// 提交表单公用方法
	function submitForm(url){
		$('#teacherBtn').click(function () {
			$.ajax({
				url : url,
                type : 'post',
				data:$('#teacherForm').serialize(),
				dataType:'json',
                success : function(data){
                	if (data.code==200) {
                		location.href='/teacher/list';
                	}
                }
			});
		});
	};
});