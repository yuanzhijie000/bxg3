define(['jquery','template','bootstrap'],function($,template){
	$.ajax({
		url: '/api/teacher',
		type: 'GET',
		dataType: 'json',
		success:function(data){
			// 渲染讲师列表
			var html=template('teacherTpl',{list:data.result});
			$('#teacherInfo').html(html);

			// 查看讲师信息
			$('.preview').click(function() {
				var td=$(this).closest('td');
				var tcId=td.attr('data-tcId');
				$.ajax({
					url: '/api/teacher/view',
					type: 'GET',
					dataType: 'json',
					data: {tc_id: tcId},
					success:function(data){
						// console.log(data)
						var html=template('modalTpl',data.result);
						$('#modalInfo').html(html);
						$('#teacherModal').modal();
					}
				})
			});
		}
	});
});