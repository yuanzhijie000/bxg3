define(['jquery','template','util','bootstrap','state'],function($,template,util){

	var ret=util.qs('uname');


	util.setMenu(location.pathname);
	// $('.navs a[href="'+location.pathname+'"]').addClass('active');
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
				});
			});

			// 启用注销
			$('.eod').click(function() {
				var td=$(this).closest('td');
				var tcId=td.attr('data-tcId');
				var tcStatus=td.attr('data-status');
				var that=this;
				$.ajax({
					url: '/api/teacher/handle',
					type: 'post',
					dataType: 'json',
					data: {tc_id: tcId,tc_status: tcStatus},
					success:function(data){
						if (data.code==200) {
							td.attr('data-status',data.result.tc_status);
							if (data.result.tc_status==0) {
								$(that).html('注 销');
							}else {
								$(that).html('启 用');
							}
						}
					}
				})
			});
		}
	});
});