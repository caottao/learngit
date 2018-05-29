	var url = "http://customfront.yun300.cn/mobile/jscps/meeting";
	var bespeak = {	
	};
	var other = {};
	var res = {
			toiletPrice:""
	};
	var list = new Array();
$(document).ready(function(){
	$.ajax({
	　　url : url+"/getPrice",
	　　type: "get",
	　　error : function(textStatus, errorThrown) {
	　　			$('#institution_alert_error').show('fade in');
				window.setTimeout(function() {
					$('#institution_alert_error').hide('fade in');
				}, 5000);
				$("#btn").attr("disabled",true);
　　		},
		success:function(data){
			
		if(data != undefined && data != null){
			data = JSON.parse(data);
			var price1 = 0;
			var price2 = 0;
			var price3 = 0;
			if(data != null){
			if(data.boardroomFruitPrice != null &&  data.boardroomFruitPrice != undefined){
				var fruit = data.boardroomFruitPrice.split(",");
				 price1 =  fruit[0] == ""?0:fruit[0];
				 price2 =  fruit[1] == ""?0:fruit[1];
				 price3 =  fruit[2] == ""?0:fruit[2];
			}
			}
			var hm = "<input class='dz_ckeckbox_style dz_free_items' type='checkbox' name='increment_price'  value='"+price1+"'/>"+price1+"元/份";
			hm+="<input class='dz_ckeckbox_style dz_free_items' type='checkbox' name='increment_price'  value='"+price2+"'/>"+price2+"元/份";
			hm+="<input class='dz_ckeckbox_style dz_free_items' type='checkbox' name='increment_price'  value='"+price3+"'/>"+price3+"元/份";
			$("#boadroomFruit").html(hm);
			var coffePrice =  0;
			if(data != null){
				if(data.boardroomCoffePrice != null && data.boardroomCoffePrice != undefined){
					coffePrice = data.boardroomCoffePrice == ""?0:data.boardroomCoffePrice;
				}
			}
			$("#boadroomCoffe").html("<input type='checkbox' class='dz_ckeckbox_style dz_free_items' name='coffeePrice' value='"+coffePrice+"' />"+coffePrice+"元/杯");
			var teaprice1 = 0;
			var teaprice2 = 0;
			var teaprice3 = 0;
			if(data != null){
				if(data.boardroomTeaPrice != null && data.boardroomTeaPrice != undefined){
					var tea = data.boardroomTeaPrice.split(",");
					teaprice1 = tea[0] == ""?0:tea[0];
					teaprice2 = tea[1] == ""?0:tea[1];
					teaprice3 = tea[2] == ""?0:tea[2];
				}
			}
			var teaprice = "<input class='dz_ckeckbox_style dz_free_items' type='checkbox' name='teaprice'  value='"+teaprice1+"' />"+teaprice1+"元/份"; 
			teaprice += "<input class='dz_ckeckbox_style dz_free_items' type='checkbox' name='teaprice'  value='"+teaprice2+"' />"+teaprice2+"元/份";
			teaprice += "<input class='dz_ckeckbox_style dz_free_items' type='checkbox' name='teaprice'  value='"+teaprice3+"' />"+teaprice3+"元/份";
			$("#boardroomTea").html(teaprice);
			var toliet = 0;
			if(data != null){
				if(data.roomTolietPrice != null && data.roomTolietPrice != undefined){
					toliet = data.roomTolietPrice == "" ? 0 : data.roomTolietPrice;
				}
			}
			// 这里需要将洗漱用品的价格同步到返回后端的tolietPrice
			$("#roomToliet").html("<label class='dz_use_date' >2、洗漱用品("+toliet+"元/份起订)</label>");
			res.toiletPrice = toliet;
			// 还差有备注的客房水果
			var room1 = "";
			var room2 = "";
			var room3 = "";
			var roomFruitPrice1 = 0;
			var roomFruitPrice2 = 0;
			var roomFruitPrice3 = 0;
			var content1 = "";
			var content2 = "";
			var content3 = "";
			if(data != null){
				if(data.roomFruitPrice != null && data.roomFruitPrice != undefined){
					var room = data.roomFruitPrice.split(",");
					room1 =  room[0].split("(");
					room2 = room[1].split("(");
					room3 = room[2].split("(");
					roomFruitPrice1 = room1[0].length == 0 ? 0:room1[0];
					roomFruitPrice2 = room2[0].length == 0 ? 0:room2[0];
					roomFruitPrice3 = room3[0].length == 0 ? 0:room3[0];
					content1 =  room1[1].length==1?"":"("+room1[1];
					content2 = room2[1].length==1?"":"("+room2[1];
					content3 = room3[1].length==1?"":"("+room3[1];
				}else{
					content1 =  room1;
					content2 =  room2;
					content3 =  room3;
				}
			}
			var rf = "<input class='dz_ckeckbox_style dz_free_items' type='checkbox' name='room_fruit'  value='"+roomFruitPrice1+"元/份"+content1+"' />"+roomFruitPrice1+"元/份"+content1;
			rf += "<input class='dz_ckeckbox_style dz_free_items' type='checkbox' name='room_fruit'  value='"+roomFruitPrice2+"元/份"+content2+"' />"+roomFruitPrice2+"元/份"+content2;
			rf += "<input class='dz_ckeckbox_style dz_free_items' type='checkbox' name='room_fruit'  value='"+roomFruitPrice3+"元/份"+content3+"' />"+roomFruitPrice3+"元/份"+content3;
			$("#roomfruit").html(rf);
			// 自助餐的价格
			var buffetPrice1 = 0;
			var buffetPrice2 = 0;
			var buffetPrice3 =0;
			
			if(data != null){
				if(data.buffetPrice != null && data.buffetPrice != undefined){
					var buffet = data.buffetPrice.split(",");
					buffetPrice1 = buffet[0] == ""?0:buffet[0];
					buffetPrice2 = buffet[1] == ""?0:buffet[1];
					buffetPrice3 = buffet[2] == ""?0:buffet[2];
				}
			}
			var buffetPrice = "<input class='dz_ckeckbox_style dz_free_items' type='checkbox' name='buffet_price'  value='"+buffetPrice1+"'/>"+buffetPrice1+"元/人";
			buffetPrice += "<input class='dz_ckeckbox_style dz_free_items' type='checkbox' name='buffet_price'  value='"+buffetPrice2+"'/>"+buffetPrice2+"元/人";
			buffetPrice += "<input class='dz_ckeckbox_style dz_free_items' type='checkbox' name='buffet_price'  value='"+buffetPrice3+"'/>"+buffetPrice3+"元/人";
			$("#buffet").html(buffetPrice);
			var meetPrice1 = 0;
			var meetPrice2= 0;
			var meetPrice3 = 0;
			var meetPrice4 = 0;
			if(data != null){
				if(data.meetingPrice != null && data.meetingPrice != undefined){
					var meet = data.meetingPrice.split(",");
					meetPrice1 = meet[0] == ""?0:meet[0];
					meetPrice2 = meet[1] == ""?0:meet[1];
					meetPrice3 = meet[2] == ""?0:meet[2];
					meetPrice4 = meet[3] == ""?0:meet[3];
				}
			}
			
			// 会议宴请
			var meetPrice = "<input class='dz_ckeckbox_style dz_free_items' type='checkbox' name='meet_price' value='"+meetPrice1+"' />"+meetPrice1+"元/桌";
			meetPrice += "<input class='dz_ckeckbox_style dz_free_items' type='checkbox' name='meet_price' value='"+meetPrice2+"' />"+meetPrice2+"元/桌";
			meetPrice += "<input class='dz_ckeckbox_style dz_free_items' type='checkbox' name='meet_price' value='"+meetPrice3+"' />"+meetPrice3+"元/桌";
			meetPrice += "</br>";
			meetPrice += "<input class='dz_ckeckbox_style dz_free_items' type='checkbox' name='meet_price' value='"+meetPrice4+"' />"+meetPrice4+"元/桌";
			$("#meet").html(meetPrice);
//			$("#meet2").html();
			// 主桌鲜花
			var main = 0;
			if(data != null){
				if(data.mainTableFlowerPrice != null && data.mainTableFlowerPrice != undefined){
					main = data.mainTableFlowerPrice == undefined ? 0 : data.mainTableFlowerPrice;
				}
			}
			var maintable = "<input class='dz_ckeckbox_style dz_free_items' type='checkbox' name='otherProject'  value='主桌鲜花("+main+"元起订)'/>";
			maintable += "<span>主桌鲜花("+main+"元起订)</span>";
			$("#maintable").html(maintable);
			var banner  = 0;
			if(data != null){
				if(data.bannerPrice != null && data.bannerPrice != undefined){
					 banner = data.bannerPrice == undefined ? 0 : data.bannerPrice;
				}
			}
			$("#cbd1").html("<input class='dz_ckeckbox_style dz_free_items' type='checkbox' name='cbdName'  value='横幅("+banner+"元/个)' />");
			$("#price1").html("<span>"+banner+"元/个</span>");
			var backSign  = 0;
			if(data != null){
				if(data.backSignPrice != null && data.backSignPrice != undefined){
					backSign = data.backSignPrice == undefined ? 0 : data.backSignPrice;
				}
			}
			$("#cbd2").html("<input class='dz_ckeckbox_style dz_free_items' type='checkbox' name='cbdName' value='21米回头标("+backSign+"元/个)' />");
			$("#price2").html("<span>"+backSign+"元/个</span>");
			var nameCard  = 0;
			if(data != null){
				if(data.nameCardPrice != null && data.nameCardPrice != undefined){
					nameCard = data.nameCardPrice == undefined ? 0:data.nameCardPrice;
				}
			}
			$("#cbd3").html("<input class='dz_ckeckbox_style dz_free_items' type='checkbox' name='cbdName' value='席卡("+nameCard+"元/个)' />");
			$("#price3").html("<span>"+nameCard+"元/个</span>");
			var signPost  = 0;
			if(data != null){
				if(data.signpostPrice != null && data.signpostPrice != undefined){
					signPost = data.signpostPrice == undefined ? 0:data.signpostPrice;
				}
			}
			$("#cbd4").html("<input class='dz_ckeckbox_style dz_free_items' type='checkbox' name='cbdName'  value='指示牌("+signPost+"元/个)' />");
			$("#price4").html("<span>"+signPost+"元/个</span>");
			var signCard  = 0;
			if(data != null){
				if(data.signCardPrice != null && data.signCardPrice != undefined){
					signCard = data.signCardPrice == undefined ? 0:data.signCardPrice;
				}
			}
			$("#cbd5").html("<input class='dz_ckeckbox_style dz_free_items' type='checkbox' name='cbdName'  value='签到牌("+signCard+"元/个)' />");
			$("#price5").html("<span>"+signCard+"元/个</span>");
			var seatMap  = 0;
			if(data != null){
				if(data.seatMapPrice != null && data.seatMapPrice != undefined){
					seatMap = data.seatMapPrice == undefined ? 0:data.seatMapPrice;
				}
			}
			$("#cbd6").html("<input class='dz_ckeckbox_style dz_free_items' type='checkbox' name='cbdName'  value='座位示意图("+seatMap+"元/个)' />");
			$("#price6").html("<span>"+seatMap+"元/个</span>");
			var electronic  = 0;
			if(data != null){
				if(data.electronicScreenPrice != null && data.electronicScreenPrice != undefined){
					electronic = data.electronicScreenPrice == undefined ? 0:data.electronicScreenPrice;
				}
			}
			$("#cbd7").html("<input class='dz_ckeckbox_style dz_free_items' type='checkbox' name='cbdName'  value='大厅电子显示屏("+electronic+"元/个)' />");
			$("#price7").html("<span>"+electronic+"元/个</span>");
			var print  = 0;
			if(data != null){
				if(data.printPrice != null && data.printPrice != undefined){
					print = data.printPrice == undefined ? 0:data.printPrice;
				}
			}
			$("#cbd8").html("<input class='dz_ckeckbox_style dz_free_items' type='checkbox' name='cbdName'  value='打印("+print+"元/个)' />");
			$("#price8").html("<span>"+print+"元/个</span>");
			var copy  = 0;
			if(data != null){
				if(data.copyPrice != null && data.copyPrice != undefined){
					copy = data.copyPrice == undefined ? 0:data.copyPrice;
				}
			}
			
			$("#cbd9").html("<input class='dz_ckeckbox_style dz_free_items' type='checkbox' name='cbdName'  value='复印("+copy+"元/个)' />");
			$("#price9").html("<span>"+copy+"元/个</span>");
			var sendFax  = 0;
			if(data != null){
				if(data.sendFaxPrice != null && data.sendFaxPrice != undefined){
					sendFax = data.sendFaxPrice == undefined ? 0:data.sendFaxPrice;
				}
			}
			
			$("#cbd10").html("<input class='dz_ckeckbox_style dz_free_items' type='checkbox' name='cbdName'  value='发传真("+sendFax+"元/个)' />");
			$("#price10").html("<span>"+sendFax+"元/个</span>");
			var receiveFax  = 0;
			if(data != null){
				if(data.receiveFaxPrice != null && data.receiveFaxPrice != undefined){
					receiveFax = data.receiveFaxPrice == undefined ? 0:data.receiveFaxPrice;
				}
			}
			$("#cbd11").html("<input class='dz_ckeckbox_style dz_free_items' type='checkbox' name='cbdName'  value='收传真("+receiveFax+"元/个)' />");
			$("#price11").html("<span>"+receiveFax+"元/个</span>");
			var filebagprice1  = 0;
			var filebagprice2  = 0;
			if(data != null){
				if(data.fileBagPrice != null && data.fileBagPrice != undefined){
					var filebag = data.fileBagPrice.split(",");
					filebagprice1 = filebag[0] == "" ? 0 : filebag[0];
					filebagprice2 = filebag[1] == "" ? 0 : filebag[1];
				}
			}
			var filebagprice = "<input class='dz_ckeckbox_style dz_free_items' type='checkbox' name='filebag' value='"+filebagprice1+"' />"+filebagprice1+"元/份";
			filebagprice += "<input class='dz_ckeckbox_style dz_free_items' type='checkbox' name='filebag' value='"+filebagprice2+"' />"+filebagprice2+"元/份";
			$("#filebag").html(filebagprice);
		}
	
		}
	});
	
});
	
//验证规则
$(function(){

	// 实现价格的单选
	$("#boadroomFruit").delegate('input[name=increment_price]','click',function(){
		$(this).attr('checked', 'checked').siblings().removeAttr('checked');
	});
	$("#boardroomTea").delegate('input[name=teaprice]','click',function(){
		$(this).attr('checked', 'checked').siblings().removeAttr('checked');
	});
	
	$("#roomfruit").delegate('input[name=room_fruit]','click',function(){
		$(this).attr('checked', 'checked').siblings().removeAttr('checked');
	});
	$("#buffet").delegate('input[name=buffet_price]','click',function(){
		$(this).attr('checked', 'checked').siblings().removeAttr('checked');
	});
	$("#meet").delegate('input[name=meet_price]','click',function(){
		$(this).attr('checked', 'checked').siblings().removeAttr('checked');
	});
	$("#filebag").delegate('input[name=filebag]','click',function(){
		$(this).attr('checked', 'checked').siblings().removeAttr('checked');
	});
	// 点击下一步
	$("#btn").click(function(){
	    if($("#dz_commentForm").valid()){
	    	$(".dz_form1").hide();
	    	$(".dz_form2").show();
	 	};
	});
	// 点击提交表单
	$("#btn3").click(function(){
		$("#btn3").attr("disabled",true);
		$("#btn4").attr("disabled",true);
	  if($("#conferenceRoom").val() != ""){
		  res.conferenceRoom = $("#conferenceRoom").val();
	  }
	  if($("#screenings").val() != ""){
		  res.screenings = $("#screenings").val();
	  }
	  if($("#dz_use_date_start").val() != ""){
		  res.startTime = $("#dz_use_date_start").val();
	  }
	  if($("#dz_use_date_end").val() != ""){
		  res.endTime = $("#dz_use_date_end").val();
	  }
	  if($("#number").val() != ""){
		  res.number = $("#number").val();
	  }
	  var boardroomType = getBoxValue($("input[name='boardroomType']:checked"));
	  if(boardroomType != ""){
		  res.boardroomType = boardroomType;
	  }
	  if($("#boardroomRequire").val() != ""){
		  res.boardroomRequire = $("#boardroomRequire").val();
	  }
	  var freeProject =  getBoxValue($("input[name='freeProject']:checked"));
	  if(freeProject != ""){
		 res.freeProject = freeProject;
	  }
	  var chargeProject = getBoxValue($("input[name='chargeProject']:checked"));
	  if(chargeProject != ""){
		res.chargeProject = chargeProject;
	  }
	  if($("#incrementProjectNumber").val() != ""){
		  res.incrementProjectNumber = $("#incrementProjectNumber").val();
	  }
	  var incrementPrice = getBoxValue($("input[name='increment_price']:checked"));
	  if(incrementPrice != ""){
		  res.incrementPrice =incrementPrice ;
	  }
	  if($("#toiletRequire").val() == ""){
		  delete res.toiletPrice;
	  }
	  
	  if($("#incrementRequire").val() != ""){
		  res.incrementRequire =$("#incrementRequire").val();
	  }
	  if($("#dz_time_place_date").val() != ""){
		  res.reportTime = $("#dz_time_place_date").val();
	  }
	  if($("#coffeeNumber").val() != ""){
		  res.coffeeNumber =$("#coffeeNumber").val();
	  }
	  var coffeePrice = getBoxValue($("input[name='coffeePrice']:checked"));
	  if(coffeePrice != ""){
		  res.coffeePrice = coffeePrice;
	  }
	  if($("#coffeeRequire").val() != ""){
		  res.coffeeRequire =$("#coffeeRequire").val();
	  }
	  if($("#dz_time_place_date2").val() != ""){
		  res.coffeeReportTime =$("#dz_time_place_date2").val();
	  }
	  if($("#teaNumber").val() != ""){
		  res.teaNumber =  $("#teaNumber").val()
	  }
	  var teaprice = getBoxValue($("input[name='teaprice']:checked"));
	  if(teaprice != ""){
		  res.teaPrice =teaprice
	  }
	  if($("#teaRequire").val() != ""){
		  res.teaRequire = $("#teaRequire").val();
	  }
	  if($("#dz_time_place_date3").val() != ""){
		  res.teaReportTime = $("#dz_time_place_date3").val();
	  }
	  var flowerType = getBoxValue($("input[name=flowertype]:checked"));
	  if(flowerType != ""){
		  res.flowerType = flowerType;
	  }
	  if($("#toiletRequire").val() != ""){
		  res.toiletRequire = $("#toiletRequire").val();
	  }
	  if($("#dz_delivery_time").val() != ""){
		  res.tolietReportTime = $("#dz_delivery_time").val();
	  }
	  var fruitPrice = getBoxValue($("input[name=room_fruit]:checked"));
	  if(fruitPrice != ""){
		  res.fruitPrice = fruitPrice;
	  }
	  if($("#fruitNumber").val() != ""){
		  res.fruitNumber = $("#fruitNumber").val();
	  }
	  if($("#fruitRequire").val() != ""){
		  res.fruitRequire =$("#fruitRequire").val();
	  }
	  if($("#dz_delivery_time2").val() != ""){
		  res.fruitReportTime = $("#dz_delivery_time2").val();
	  }
	  if($("#dz_checkout_time").val() != ""){
		  res.checkoutTime = $("#dz_checkout_time").val();
	  }
	  if($("#roomRequire").val() != ""){
		  res.roomRequire =$("#roomRequire").val();
	  }
	  if($("#dz_meal_date").val() != ""){
		  other.buffetEatingTime =$("#dz_meal_date").val();
	  }
	  var buffetPrice = getBoxValue($("input[name=buffet_price]:checked"));
	  if(buffetPrice != ""){
		  other.buffetPrice = buffetPrice;
	  }
	  if($("#buffetNumber").val() != ""){
		  other.buffetNumber = $("#buffetNumber").val();
	  }
	  if($("#dz_meal_date2").val() != ""){
		  other.dinnerTime = $("#dz_meal_date2").val();
	  }
	  var dinnerPrice =  getBoxValue($("input[name=meet_price]:checked"));
	  if(dinnerPrice != ""){
		  other.dinnerPrice = dinnerPrice;
	  }
	  
	  if($("#dinnerNumber").val() != ""){
		  other.dinnerNumber =$("#dinnerNumber").val();
	  }
	 var otherProject = getBoxValue($("input[name=otherProject]:checked"));
	  if(otherProject != ""){
		  other.otherProject = otherProject;
	  }
	  if($("#meet_name").val() != ""){
		  other.meetingName =$("#meet_name").val();
	  }
	 var  cbdName = getBoxValue($("input[name='cbdName']:checked"));
	  if(cbdName != ""){
		  other.cbdName = cbdName;
	  }
	  var cbdPrice = getBoxValue($("input[name='filebag']:checked"));
	  if(cbdPrice != ""){
		  other.cbdPrice = cbdPrice;
	  }
	  
	  if($("#cdb_require").val() != ""){
		  other.cdbRequire = $("#cdb_require").val()
	  }
	  // 客房
	  if($("#dz_room_date1").val() != ""){
		  if($("#standard_room1").val() != ""){
			  var stay = {};
			  stay.checkinDate = $("#dz_room_date1").val();
			  stay.houseType = "标间";
			  stay.requiredNumber = $("#standard_room1").val();
			  list.push(stay);
		  }
		  if($("#single_room1").val() != ""){
			  var stay = {};
			  stay.checkinDate = $("#dz_room_date1").val();
			  stay.houseType = "单间";
			  stay.requiredNumber = $("#single_room1").val();
			  list.push(stay);
		  }
		  if($("#suite_room1").val() != ""){
			  var stay = {};
			  stay.checkinDate = $("#dz_room_date1").val();
			  stay.houseType = "套间";
			  stay.requiredNumber = $("#suite_room1").val();
			  list.push(stay);
		  }
	  }
	  
	  if($("#dz_room_date2").val() != ""){
		  if($("#standard_room2").val() != ""){
			  var stay = {};
			  stay.checkinDate = $("#dz_room_date2").val();
			  stay.houseType = "标间";
			  stay.requiredNumber = $("#standard_room2").val();
			  list.push(stay);
		  }
		  if($("#single_room2").val() != ""){
			  var stay = {};
			  stay.checkinDate = $("#dz_room_date2").val();
			  stay.houseType = "单间";
			  stay.requiredNumber = $("#single_room2").val();
			  list.push(stay);
		  }
		  if($("#suite_room2").val() != ""){
			  var stay = {};
			  stay.checkinDate = $("#dz_room_date2").val();
			  stay.houseType = "套间";
			  stay.requiredNumber = $("#suite_room2").val();
			  list.push(stay);
		  }
	  }
	  
	  if($("#dz_room_date3").val() != ""){
		  if($("#standard_room3").val() != ""){
			  var stay = {};
			  stay.checkinDate = $("#dz_room_date3").val();
			  stay.houseType = "标间";
			  stay.requiredNumber = $("#standard_room3").val();
			  list.push(stay);
		  }
		  if($("#single_room3").val() != ""){
			  var stay = {};
			  stay.checkinDate = $("#dz_room_date3").val();
			  stay.houseType = "单间";
			  stay.requiredNumber = $("#single_room3").val();
			  list.push(stay);
		  }
		  if($("#suite_room3").val() != ""){
			  var stay = {};
			  stay.checkinDate = $("#dz_room_date3").val();
			  stay.houseType = "套间";
			  stay.requiredNumber = $("#suite_room3").val();
			  list.push(stay);
		  }
	  }
	  if($("#dz_room_date4").val() != ""){
		  if($("#standard_room4").val() != ""){
			  var stay = {};
			  stay.checkinDate = $("#dz_room_date4").val();
			  stay.houseType = "标间";
			  stay.requiredNumber = $("#standard_room4").val();
			  list.push(stay);
		  }
		  if($("#single_room4").val() != ""){
			  var stay = {};
			  stay.checkinDate = $("#dz_room_date4").val();
			  stay.houseType = "单间";
			  stay.requiredNumber = $("#single_room4").val();
			  list.push(stay);
		  }
		  if($("#suite_room4").val() != ""){
			  var stay = {};
			  stay.checkinDate = $("#dz_room_date4").val();
			  stay.houseType = "套间";
			  stay.requiredNumber = $("#suite_room4").val();
			  list.push(stay);
		  }
	  }
	  var bespeak = {
				rname:$("#dz_username").val(),
				phone:$("#dz_phone").val(),
				title:$("#dz_meeting_title").val(),
				startTime:$("#datetimeStart").val(),
				endTime:$("#datetimeEnd").val(),
				invitationName:$("#dz_invitation_name").val(),
				invitationWord:$("#dz_invitation_words").val(),
				activityTimeStart:$("#dz_activity_time1").val(),
				activityTimeEnd:$("#dz_activity_time2").val(),
				sponsor:$("#dz_organizer").val(),
				sponsorCall:$("#dz_organizer_phone").val(),
				activityAttr:$("#dz_event_location").val(),
				activityDetail:$("#dz_activities_detailed_introduction").val(),
				invitationShareTitle:$("#dz_invitation_share_title").val(),
				invitationShareDetail:$("#dz_invitation_share_description").val(),
				signActivityName:$("#dz_sign_event_name").val(),
				signActivityTitle:$("#dz_sign_event_share_title").val(),
				signActivityDetail:$("#dz_Sign_share_description_activities").val(),
				conferenceProcess: "",
				seat : "",
			    invitationShare :"",
			    signFocus : "",
			    signFocus :"",
			    signActivityShare : ""
		}
		// 先保存图片，然后提交表单数据
		var formData = new FormData();
	  	formData.append('file',$("#dz_click_upload_meeting_process")[0].files[0]);
	  	formData.append('file',$("#dz_click_upload_seat_table")[0].files[0]);
	  	formData.append('file',$("#dz_invitation_share_map")[0].files[0]);
	  	formData.append('file',$("#dz_Sign_page_focus_map")[0].files[0]);
	  	formData.append('file',$("#dz_Sign_event_sharing_map")[0].files[0]);
		$.ajax({
			type:"post",
			url:url + "/fileUpload",
			cache: false,
			data: formData,
		    processData: false,
		    contentType: false,
		    success:function(data){
		    	if(data != null && typeof data === "string"){
		    		data = JSON.parse(data);
		    		bespeak.conferenceProcess = data.file0;
		    		bespeak.seat = data.file1;
		    		bespeak.invitationShare = data.file2;
		    		bespeak.signFocus = data.file3;
		    		bespeak.signActivityShare = data.file4;
		    		$.ajax({
						url:url+"/save",
		                type: "post",
		                data: {
		                	"bespeak":JSON.stringify(bespeak),
		                	"res":JSON.stringify(res),
		                	"other":JSON.stringify(other),
		                	"list":JSON.stringify(list)
		                },
		                dataType : "JSON",
		                success: function (data) {
		                	bespeak = {};
		                	res = {};
		                	other = {};
		                	list = new Array();
		                	data = JSON.parse(data);
		                	if(data.code == "200"){
		                		$('#institution_alert_add').show('fade in');
//		        				警告框消失
		        				window.setTimeout(function() {
		        					$('#institution_alert_add').hide('fade in');
		        				}, 3000);
		                	}else{
		                		$('#institution_alert_failed').show('fade in');
//		        				警告框消失
		        				window.setTimeout(function() {
		        					$('#institution_alert_failed').hide('fade in');
		        				}, 3000);
		        				$("#btn3").attr("disabled",false);
		        				$("#btn4").attr("disabled",false);
		                	}
		                },
					})
		    	}else{
		  			// 文件上传出错，直接提示保存失败
		    		$('#institution_alert_warning').show('fade in');
//    				警告框消失
    				window.setTimeout(function() {
    					$('#institution_alert_warning').hide('fade in');
    				}, 3000);
    				$("#btn3").attr("disabled",false);
    				$("#btn4").attr("disabled",false);
		    	}
		    },
		    error:function(textStatus, errorThrown){
		    	$('#institution_alert_error').show('fade in');
				window.setTimeout(function() {
					$('#institution_alert_error').hide('fade in');
				}, 3000);
				$("#btn3").attr("disabled",false);
				$("#btn4").attr("disabled",false);
		    }
		});
	  
	
	});
	
	
	// 点击跳过
	$("#btn2").click(function(){
		$('.page2').show();
		$('.zzc').show();
		// 点击  直接提交会议预约表单提交
		$("#btn4").click(function(){
			 $('.page2').hide();
			 $('.zzc').hide();
			 $("#btn4").attr("disabled",true);
			 $("#btn3").attr("disabled",true);
			var bespeak = {
					rname:$("#dz_username").val(),
					phone:$("#dz_phone").val(),
					title:$("#dz_meeting_title").val(),
					startTime:$("#datetimeStart").val(),
					endTime:$("#datetimeEnd").val(),
					invitationName:$("#dz_invitation_name").val(),
					invitationWord:$("#dz_invitation_words").val(),
					activityTimeStart:$("#dz_activity_time1").val(),
					activityTimeEnd:$("#dz_activity_time2").val(),
					sponsor:$("#dz_organizer").val(),
					sponsorCall:$("#dz_organizer_phone").val(),
					activityAttr:$("#dz_event_location").val(),
					activityDetail:$("#dz_activities_detailed_introduction").val(),
					invitationShareTitle:$("#dz_invitation_share_title").val(),
					invitationShareDetail:$("#dz_invitation_share_description").val(),
					signActivityName:$("#dz_sign_event_name").val(),
					signActivityTitle:$("#dz_sign_event_share_title").val(),
					signActivityDetail:$("#dz_Sign_share_description_activities").val(),
					conferenceProcess: "",
					seat : "",
				    invitationShare :"",
				    signFocus : "",
				    signFocus :"",
				    signActivityShare : ""
			}
			// 先保存图片，然后提交表单数据
			var formData = new FormData();
	    	formData.append('file',$("#dz_click_upload_meeting_process")[0].files[0]);
	    	formData.append('file',$("#dz_click_upload_seat_table")[0].files[0]);
	    	formData.append('file',$("#dz_invitation_share_map")[0].files[0]);
	    	formData.append('file',$("#dz_Sign_page_focus_map")[0].files[0]);
	    	formData.append('file',$("#dz_Sign_event_sharing_map")[0].files[0]);
			$.ajax({
			type:"post",
			url:url + "/fileUpload",
			cache: false,
			data: formData,
		    processData: false,
		    contentType: false,
		    success:function(data){
		    	if(data != null && typeof data === "string"){
		    		data = JSON.parse(data);
		    		bespeak.conferenceProcess = data.file0;
		    		bespeak.seat = data.file1;
		    		bespeak.invitationShare = data.file2;
		    		bespeak.signFocus = data.file3;
		    		bespeak.signActivityShare = data.file4;
		    		$.ajax({
						url:url+"/savemeet",
		                type: "post",
		                data: {
		                	"bespeak":JSON.stringify(bespeak),
		                },
		                dataType : "JSON",
		                success: function (data) {
		                	bespeak = {};
		                	data = JSON.parse(data);
		                	if(data.code == "200"){
		                		$('#institution_alert_add').show('fade in');
//		        				警告框消失
		        				window.setTimeout(function() {
		        					$('#institution_alert_add').hide('fade in');
		        				}, 3000);
		                	}else{
		                		$('#institution_alert_failed').show('fade in');
//		        				警告框消失
		        				window.setTimeout(function() {
		        					$('#institution_alert_failed').hide('fade in');
		        				}, 3000);
		        				$("#btn3").attr("disabled",false);
		        				$("#btn4").attr("disabled",false);
		                	}
		                },
					})
		    	}else{
		  			// 文件上传出错，直接提示保存失败
		    		$('#institution_alert_warning').show('fade in');
//    				警告框消失
    				window.setTimeout(function() {
    					$('#institution_alert_warning').hide('fade in');
    				}, 3000);
    				$("#btn3").attr("disabled",false);
    				$("#btn4").attr("disabled",false);
		    	}
		    },
		    error:function(textStatus, errorThrown){
		    	$('#institution_alert_error').show('fade in');
				window.setTimeout(function() {
					$('#institution_alert_error').hide('fade in');
				}, 3000);
				$("#btn3").attr("disabled",false);
				$("#btn4").attr("disabled",false);
		    }
		});
	  
		});
		$("#btn5").click(function(){
		    $('.page2').hide();
		    $('.zzc').hide();
		});
	    
	});
	
	$("#dz_commentForm").validate({
    	rules:{
    		dz_username: {
		        required: true,
		    	maxlength:30
		    },
    		dz_phone: {
		        required: true,
		        minlength:11,
		        isMobile:true
		    },
    		dz_meeting_title: {
		        required: true,
		    	maxlength:30
		    },
    		dz_starting_time: {
		        required: true
		    },
    		dz_end_time: {
		        required: true
		    },
    		dz_end_time: {
		        required: true
		    },
		    dz_invitation_name:{
		    	required: true,
		    	maxlength:30
		    },
		    dz_invitation_words:{
		    	required: true,
		    	maxlength:500
		    },
		    dz_activity_time:{
		    	required: true
		    },
		    dz_organizer:{
		    	required: true,
		    	maxlength:30
		    },
    		dz_organizer_phone: {
		        required: true,
		        minlength:11,
		        isMobile:true
		    },
		    dz_event_location:{
		    	required: true,
		    	maxlength:100
		    },
		    dz_activities_detailed_introduction:{
		    	required: true,
		    	maxlength:500
		    },
		    dz_invitation_share_title:{
		    	required: true,
		    	maxlength:23
		    },
		    dz_invitation_share_description:{
		    	required: true,
		    	maxlength:35
		    },
		    dz_sign_event_name:{
		    	required: true,
		    	maxlength:30
		    },
		    dz_sign_event_share_title:{
		    	required: true,
		    	maxlength:23
		    },
		    dz_Sign_share_description_activities:{
		    	required: true,
		    	maxlength:35
		    },
		    dz_click_upload_meeting_process:{
		    	required:true
		    },
		    dz_click_upload_seat_table:{
		    	required:true
		    },
		    dz_invitation_share_map:{
		    	required:true
		    },
		    dz_Sign_page_focus_map:{
		    	required:true
		    },
		    dz_Sign_event_sharing_map:{
		    	required:true
		    }
    	},
    	messages:{
    		dz_username: {
		        required: "用户名不得为空",
		    	maxlength:"最多可输入30字符"
		    },
    		dz_phone: {
		        required: "手机号不得为空",
		        minlength:'确认手机号码不能小于11个字符',
		        isMobile:'请正确填写您的手机号码'
		    },
    		dz_meeting_title: {
		        required: "会议标题不得为空",
		        maxlength:"最多可输入30字符"
		    },
		    dz_starting_time:{
		    	required: "会议起止时间不得为空"
		    },
		    dz_end_time:{
		    	required: "会议结束时间不得为空"
		    },
		    dz_invitation_name:{
		    	required: "邀请函名称不得为空",
		    	maxlength:"最多可输入30字符"
		    },
		    dz_invitation_words:{
		    	required: "邀请语不得为空",
		    	maxlength:"最多可输入500字符"
		    },
		    dz_activity_time:{
		    	required: "活动时间不得为空"
		    },
		    dz_organizer:{
		    	required: "主办方不得为空",
		    	maxlength:"最多可输入30字符"
		    },
    		dz_organizer_phone: {
		        required: "手机号不得为空",
		        minlength:'确认手机号码不能小于11个字符',
		        isMobile:'请正确填写您的手机号码'
		    },
		    dz_event_location:{
		    	required: "活动地点不得为空",
		    	maxlength:"最多可输入100字符"
		    },
		    dz_activities_detailed_introduction:{
		    	required: "活动详细介绍不得为空",
		    	maxlength:"最多可输入500字符"
		    },
		    dz_invitation_share_title:{
		    	required: "邀请函分享标题不得为空",
		    	maxlength:"最多可输入23字符"
		    },
		    dz_invitation_share_description:{
		    	required: "邀请函分享描述不得为空",
		    	maxlength:"最多可输入35字符"
		    },
		    dz_sign_event_name:{
		    	required: "签到活动名称不得为空",
		    	maxlength:"最多可输入30字符"
		    },
		    dz_sign_event_share_title:{
		    	required: "签到活动分享标题不得为空",
		    	maxlength:"最多可输入23字符"
		    },
		    dz_Sign_share_description_activities:{
		    	required: "签到活动分享描述不得为空",
		    	maxlength:"最多可输入35字符"
		    },
		    dz_click_upload_meeting_process:{
		    	required:"请上传会议流程"
		    },
		    dz_click_upload_seat_table:{
		    	required:"请上传座位表"
		    },
		    dz_invitation_share_map:{
		    	required:"请上传邀请分享图"
		    },
		    dz_Sign_page_focus_map:{
		    	required:"请上传签到页面焦点图"
		    },
		    dz_Sign_event_sharing_map:{
		    	required:"请上传签到活动分享图"
		    }
    	}
    });
});
function getBoxValue(test){
	var boxValue = "";
	test.each(function(){
		boxValue += $(this).val()+",";
	});
	return boxValue.substring(0,boxValue.length -1);
}
