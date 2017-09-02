define(['jquery','cookie'],function($){
	$('#login').click(function(){
        var formdata = $('#loginForm').serialize();
        $.ajax({
            type : 'post',
            url : '/api/login',
            data : formdata,
            dataType : 'json',
            success : function(data){
                if(data.code == 200){
                    // 保存cookie
                    $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
                    
                    // 登录成功，跳转到主页面
                    location.href = '/main/index'
                }else{
                    alert('用户名或者密码错误');
                }
            }
        });
        return false;
    });
});