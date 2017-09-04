define(['jquery'],function($){
	return {
		// 导航菜单高亮选中
		setMenu:function(path){
			$('.navs a[href="'+path+'"]').addClass('active');
		},
		// 获取指定url参数值
		qs:function(key){
			var param=location.search.substring(1);
			// console.log(param);
			var result=null;
			if (param) {
				var kvs=param.split('&');
				$.each(kvs,function(i,item) {
					var kv=item.split('=');
					if (key==kv[0]) {
						result=kv[1];
						return false;
					}	
				})
			}
			return result;
		}
	}
})