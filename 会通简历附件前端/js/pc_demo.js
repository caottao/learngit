dz_url = 'http://192.168.5.106:8080/front/htxcl/jobApply/saveApply';

var dz_off = true;
$(function(){
	
//	定义formDate对象，用键值对的方式模拟表单，完成上传
	var formData = new FormData();
//	上传文件的input框改变的时候，获取文件name，然后判断类型。
	$("#dz_file").on('change',function(){
		var dz_localtion = $("#dz_file")[0].files[0].name;
		console.log($("#dz_file")[0].files[0],'==获取文件==');
		console.log(dz_localtion,'==获取文件名==');
		var point = dz_localtion.lastIndexOf(".");   
	    var type = dz_localtion.substr(point);  
	    if(type!=".pdf"&&type!=".doc"&&type!=".docx"&&type!=".rar"&&type!=".zip"){   
			$('#dz_title_center').text("文件类型错误,请选择PDF、Word、RAR、ZIP格式的文件！");
			$('.zzc').show();
			$('.dz_title').show();
	        $('#dz_file').val('');
	        return;  
	    };
	    console.log(formData);
	});
	
	$('.dz_p_btn').on('click',function(){
		$('#dz_form').submit();	
	});
	$('#dz_form').validate({
		rules:{
			dz_name:{
				required:true
			},
			dz_sex:{
				required:true
			},
			dz_phone:{
				required:true,
				isMobile:true
			},
			dz_year:{
				required:true,
				number:true
			},
			dz_salary:{
				required:true,
				number:true
			},
			dz_file:{
				required:true
			},
			dz_email:{
				required:true,
				email:true
			},
			dz_origin:{
				required:true,
				isChinese:true
			},
			dz_post:{
				required:true
			},
			dz_time:{
				required:true
			}
		},
		messages:{
			dz_name:{
				required:'该项为必填项'
			},
			dz_sex:{
				required:'该项为必填项'
			},
			dz_phone:{
				required:'该项为必填项',
				isMobile:'请输入正确的手机号'
			},
			dz_year:{
				required:'该项为必填项',
				number:'请输入一个有效的数字'
			},
			dz_salary:{
				required:'该项为必填项',
				digits:'请输入一个有效的数字'
			},
			dz_file:{
				required:'该项为必填项'
			},
			dz_email:{
				required:'该项为必填项',
				email:'请输入有效的电子邮件地址'
			},
			dz_origin:{
				required:'该项为必填项',
				isChinese:'请输入中文'
			},
			dz_post:{
				required:'该项为必填项'
			},
			dz_time:{
				required:'该项为必填项'
			}
		},
//		验证通过之后执行
		submitHandler: function() {
			
			formData.append('name', $('#dz_name').val());
			formData.append('gender', $('#dz_sex').val());
			formData.append('mobile', $('#dz_phone').val());
			formData.append('workExperience', $('#dz_year').val());
			formData.append('expectSalary', $('#dz_salary').val());
			formData.append('file', $("#dz_file")[0].files[0]);
			formData.append('emial', $('#dz_email').val());
			formData.append('nativePlace', $('#dz_origin').val());
			formData.append('positionApplied', $('#dz_post').val());
			formData.append('dateTime', $('#dz_time').val());
			
			$.ajax({
				type:"post",
				url:dz_url,
            	processData: false,
            	contentType: false,
            	data:formData,
	            success: function(res) {
	            	data = JSON.parse(res);
	                if(data.code == 200){
						$('#dz_title_center').text("提交成功！");
						$('.zzc').show();
						$('.dz_title').show();
						dz_off = false;
	                } else if(data.code == 1002){
						$('#dz_title_center').text("提交失败,文件不能超过5M！");
						$('.zzc').show();
						$('.dz_title').show();
	                } else {
						$('#dz_title_center').text("提交失败,请刷新重试！");
						$('.zzc').show();
						$('.dz_title').show();
	                };
	            },
	            error: function(a,b){
	            	console.log(a);
	            	console.log(b);
					$('#dz_title_center').text("网络异常，请联系管理员！");
					$('.zzc').show();
					$('.dz_title').show();
	            }
			});
		}
	});
	laydate.render({
	  	elem: '#dz_time',  //指定元素
	  	type:'date',  //可选择：datetime年月日时分秒
//		min: '2016-10-14',
//		max: '2080-10-14',
	  	format: 'yyyy-MM-dd',  //时间格式  yyyy-MM-dd HH:mm:ss
        min: -0,  //最小日期为当前日期的前一天 
        max: '2222-06-16 23:59:59',  //最大日期
        theme: '#393D49'  //自定义主题颜色
	});
	//	关闭提示框
	$('.dz_title_btn').on('click',function(){
		if(dz_off==true){
			$('#dz_title_center').text('');
			$('.zzc').hide();
			$('.dz_title').hide();
		} else {
			$('#dz_title_center').text('');
			$('.zzc').hide();
			$('.dz_title').hide();
			location.reload();
		};
	});
});
