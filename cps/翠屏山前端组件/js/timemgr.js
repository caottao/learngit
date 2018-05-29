window.onload = function(){
Date.prototype.Format = function (fmt) { //author: meizz
	    var o = {
	        "M+": this.getMonth() + 1, //月份 
	        "d+": this.getDate(), //日 
	        "h+": this.getHours(), //小时 
	        "m+": this.getMinutes(), //分 
	        "s+": this.getSeconds(), //秒 
	        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
	        "S": this.getMilliseconds() //毫秒 
	    };
	    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	    for (var k in o)
	    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	    return fmt;
	}
	var time = new Date().Format("yyyy-MM-dd  hh:mm");
	var currentTime = new Date().Format("yyyy-MM-dd");
	var theSelectData = time;
	//console.log(time);
//	$('#datetimeStart').click(newTime());
	$('#datetimeStart').click(newTime('datetimeStart',time));
	$('#datetimeEnd').click(newTime('datetimeEnd',time,'datetimeStart'));
	function newTime(name,num,sheet){
		var calendar = new datePicker();
		calendar.init({
			'trigger': '#'+name, /*按钮选择器，用于触发弹出插件*/
			'type': 'datetime',/*模式：date日期；datetime日期时间；time时间；ym年月；*/
			'minDate':currentTime,/*最小日期*/
			'maxDate':'2100-12-31 00:00',/*最大日期*/
			'onSubmit':function(){/*确认时触发事件*/
				//theSelectData=calendar.value;
				if(sheet){
					showVal(calendar,$('#'+sheet).val(),name);
				}else{
					showVal(calendar,num,name);
				}
			},
			'onClose':function(){/*取消时触发事件*/
			}
		});
	}
	function showVal(time1,time2,id){
		var timestamp1 = Date.parse(new Date(time1.value)) / 1000;
		var timestamp2 = Date.parse(new Date(time2)) / 1000;
		var timestamp5 = Date.parse(new Date(theSelectData)) / 1000;
		if(timestamp1<timestamp2 || timestamp1 < timestamp5 || timestamp2 < timestamp5){
			$('#'+id).val("");
		}else{
			$('#'+id).val(time1.value+':00');
		}
		if(id == 'datetimeStart'){
			var timestamp3 = Date.parse(new Date($('#datetimeStart').val())) / 1000;
			var timestamp4 = Date.parse(new Date($('#datetimeEnd').val())) / 1000;
			if(timestamp3 > timestamp4){
				$('#datetimeEnd').val("");
			}
		}
		if(id == 'dz_activity_time1'){
			var timestamp3 = Date.parse(new Date($('#dz_activity_time1').val())) / 1000;
			var timestamp4 = Date.parse(new Date($('#dz_activity_time2').val())) / 1000;
			if(timestamp3 > timestamp4){
				$('#dz_activity_time2').val("");
			}
		}
		if(id == 'dz_use_date_start'){
			var timestamp3 = Date.parse(new Date($('#dz_use_date_start').val())) / 1000;
			var timestamp4 = Date.parse(new Date($('#dz_use_date_end').val())) / 1000;
			if(timestamp3 > timestamp4){
				$('#dz_use_date_end').val("");
			}
		}
	}
	
	$('#dz_activity_time1').click(newTime('dz_activity_time1',time));
	$('#dz_activity_time2').click(newTime('dz_activity_time2',time,'dz_activity_time1'));
	
	$('#dz_use_date_start').click(newTime('dz_use_date_start',time));
	$('#dz_use_date_end').click(newTime('dz_use_date_end',time,'dz_use_date_start'));
	
	function setTime(name){
		var calendar2 = new datePicker();
		var time = new Date().Format("yyyy-MM-dd");
		calendar2.init({
			'trigger': '#'+name, /*按钮选择器，用于触发弹出插件*/
			'type': 'date',/*模式：date日期；datetime日期时间；time时间；ym年月；*/
			'minDate':time,/*最小日期*/
			'maxDate':'2100-12-31',/*最大日期*/
			'onSubmit':function(){/*确认时触发事件*/
				//theSelectData=calendar.value;
				$('#'+name).val(calendar2.value);
			},
			'onClose':function(){/*取消时触发事件*/
			}
		});
	}
	
	$("#dz_room_date1").click(setTime('dz_room_date1'));
	$("#dz_room_date2").click(setTime('dz_room_date2'));
	$("#dz_room_date3").click(setTime('dz_room_date3'));
	$("#dz_room_date4").click(setTime('dz_room_date4'));
	
	function oldTime (name){
		var currentTime = new Date().Format("yyyy-MM-dd");
		var calendar = new datePicker();
		calendar.init({
			'trigger': '#'+name, /*按钮选择器，用于触发弹出插件*/
			'type': 'datetime',/*模式：date日期；datetime日期时间；time时间；ym年月；*/
			'minDate':currentTime,/*最小日期*/
			'maxDate':'2100-12-31 00:00',/*最大日期*/
			'onSubmit':function(){/*确认时触发事件*/
				//theSelectData=calendar.value;
				$('#'+name).val(calendar.value+":00");
			},
			'onClose':function(){/*取消时触发事件*/
			}
		});
	
	
	}
	$("#dz_time_place_date").click(oldTime('dz_time_place_date'));
	
	$("#dz_time_place_date2").click(oldTime('dz_time_place_date2'));
	
	$("#dz_time_place_date3").click(oldTime('dz_time_place_date3'));
	
	
	$("#dz_delivery_time").click(oldTime('dz_delivery_time'));
	$("#dz_delivery_time2").click(oldTime('dz_delivery_time2'));
	
	$("#dz_checkout_time").click(oldTime('dz_checkout_time'));
	
	$("#dz_meal_date").click(oldTime('dz_meal_date'));
	
	$("#dz_meal_date2").click(oldTime('dz_meal_date2'));
	
}
