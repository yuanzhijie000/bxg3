define(['jquery','template'],function($,template){
	$.ajax({
		url: '/api/teacher',
		type: 'GET',
		dataType: 'json',
		success:function(data){
			var html=template('teacherTpl',{list:data.result});
			$('#teacherInfo').html(html);
		}
	});
});