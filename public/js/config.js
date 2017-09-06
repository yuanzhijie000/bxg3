
require.config({
	baseUrl:'/public/assets',
	paths:{
		jquery:'jquery/jquery',
		cookie:'jquery-cookie/jquery.cookie',
		template:'artTemplate/template-web',
		bootstrap:'bootstrap/js/bootstrap.min',
		datepicker:'bootstrap-datepicker/js/bootstrap-datepicker',
		language:'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
		validate:'jquery-validate/jquery-validate.min',
		form:'jquery-form/jquery.form',
		common:'../js/common',
		login:'../js/login',
		index:'../js/index',
		teacherlist:'../js/teacher-list',
		teacheradd:'../js/teacher-add',
		util:'../js/util',
		settings:'../js/settings'
	},
	shim:{
		bootstrap:{
			deps:['jquery']
		},
		language:{
			deps:['jquery','datepicker']
		},
		validate:{
			deps:['jquery']
		}
	}
});