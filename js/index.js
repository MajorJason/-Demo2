// 顶部购物车，移上显示弹出框
$(".site-topbar .topbar-car").mouseenter(function(event) {
	$(this).addClass('topbar-car-active');
	$(this).children('.car-menu').stop().slideDown(200);
});
$(".site-topbar .topbar-car").mouseleave(function(event) {
	$(this).removeClass('topbar-car-active');
	$(this).children('.car-menu').stop().slideUp(200);
});
//$(".site-header .category-item").mouseenter(function () {
//	$(this).addClass('category-item-active');
//});
//$(".site-header .category-item").mouseleave(function () {
//	$(this).removeClass("category-item-active");
//});
//给第一排广告注册事件
$(".nav-list .nav-item").mouseenter(function () {
	var idx = $(this).index();
	$(".justtest .main").eq(idx).addClass("selected").siblings().removeClass("selected");
	$(".justtest").stop().slideDown(200);
})
$(".nav-list").mouseleave(function () {
	$(".justtest").stop().slideUp(300);
})


//给侧边栏的li注册事件，并弹出广告
$(".site-header .category-item").mouseenter(function () {
	$(this).addClass('category-item-active');
	var idx = $(this).index();
	$(".site-category .products .main").eq(idx).addClass("selected").siblings().removeClass("selected");
});
$(".site-header .category-item").mouseleave(function () {
	$(this).removeClass("category-item-active");
});
//移出列表，效果消失
$(".site-category").mouseleave(function(){
	$(".site-category .products").removeClass("block");
	$(".site-category .products .main").removeClass("selected");
})
//-----------------------------------------------------------------------

$(".site-header .search-text").focus(function(){
	$(this).parent().addClass("search-form-active");
});
$(".site-header .search-text").blur(function(){
	$(this).parent().removeClass("search-form-active");
});
for (var i=0;i<$(".slider-main>li").length;i++){
	var li = document.createElement("li");
	$(".slider-circles").append(li);
}
$(".slider-circles li").eq(0).addClass("active");

// 搜索框特效
$(".search-text").focus(function () {
	$(".keyword-list").css("display","block");
	if ($(".result-list")){
		$(".result-list").remove();
	}

	var datas = [
		{'Key':'小米手机5','Rst':11},
		{'Key':'空气净化器2','Rst':1},
		{'Key':'活塞耳机','Rst':4},
		{'Key':'小米路由器','Rst':8},
		{'Key':'移动电源','Rst':21},
		{'Key':'运动相机','Rst':3},
		{'Key':'小蚁摄像机','Rst':2},
		{'Key':'小米体重秤','Rst':1},
		{'Key':'小米插线板','Rst':13},
		{'Key':'配件优惠套装','Rst':32}];

	var ul = document.createElement("ul");
	ul.className = "result-list";
	$(".keyword-list")[0].appendChild(ul);
	for (var i=0;i<datas.length;i++){
		var item = datas[i];
		var li = document.createElement("li");

		$(li).html('<a href="#">'+item.Key+'<span class="result">约有'+item.Rst+'件</span></a>');

		$(".keyword-list ul").append(li);
	}

});
$(".search-text").blur(function () {
	$(".keyword-list").css("display","none");
	$(".result-list").remove();
});
// ==================================================================================
// banner轮播图效果
var lis = $(".slider").length;  // 这是轮播图的长度
var num = 0;
var isOff = 0; // 开关，判断每次动画若没执行完，不会调到下一张

// 点击右键，切换图片
$(".slider-next").click(function () {
	console.log(isOff);
	if (!isOff){
		num++;
		isOff = 1;
		if (num == lis){
			num = 0;
		}
		$(".slider").eq(num).stop().fadeTo(600,1).siblings().stop().fadeTo(600,0, function() {
			isOff = 0;
		});
		$(".slider-circles>li").eq(num).addClass("active").siblings().removeClass("active");
	}
});
$(".slider-prev").click(function () {
	if (!isOff){
		isOff = 1;
		if (num ==  0){
			num = lis;
		}
		num--;
		$(".slider").eq(num).stop().fadeTo(600,1).siblings().stop().fadeTo(600,0, function() {
			isOff = 0;
		});
		$(".slider-circles>li").eq(num).addClass("active").siblings().removeClass("active");
	}
});


// 鼠标点击序号时，切换到相应图片
$(".slider-circles li").click(function(){
	num = $(this).index();
	$(".slider").eq(num).stop().fadeTo(600,1).siblings().stop().fadeTo(600,0, function () {
		isOff = 0;
	});
	$(this).toggleClass("active").siblings().removeClass("active");
});
//设置定时器，每个3秒切换一次
var timerId = setInterval(function(){
	$(".slider-next").click();
},3000);
$(".slider").mouseenter(function () {
	clearInterval(timerId);
});
$(".slider").mouseleave(function () {
	timerId = setInterval(function(){
		$(".slider-next").click();
	},3000);
});


// subanner 效果

// 产品移入时的效果
$(".around-item").mouseenter(function () {
	$(this).find(".review-wrapper").animate({"opacity":1,"height":"64px"},300);
	$(this).addClass("around-item-active").siblings().removeClass("around-item-active");
});
$(".around-item").mouseleave(function () {
	$(this).removeClass("around-item-active");
	$(this).find(".review-wrapper").animate({"opacity":0,"height":"0px"},300);
});
$(".goods-item").mouseenter(function () {
	$(this).addClass("around-item-active").siblings().removeClass("around-item-active");
});
$(".goods-item").mouseleave(function () {
	$(this).removeClass("around-item-active");
});

// 明星产品图片切换
$(".star-goods .control-next").click(function () {
	$(".star-goods .goods-list").animate({
		"left": "-1240px"
	},1000);
});
$(".star-goods .control-prev").click(function () {
	$(".star-goods .goods-list").animate({
		"left": "0px"
	},1000);
});

// 鼠标移进内容部分，出现箭头
$(".content-item").mouseenter(function () {
	$(this).find(".control").fadeTo(0.5,400);
});
$(".content-item").mouseleave(function () {
	$(this).find(".control").fadeOut(0,400);
});

////内容部分的图片切换
//var num1 = 0;
//$(".content-box .control-next").click(function(){
//	num1++;
//	if (num1 == $(".content-box .item-list li").length){
//		num1 = $(".content-box .item-list li").length - 1;
//	}
//	var liWidth = $(".content-item").width();
//	$(this).parents("li.content-item").find("ul.item-list").animate("left",-num1*liWidth);
//});

//宣鹏开始
//$(function () {
	$("#J_modal_a").click(function () {
		$("#xp-modal-box").animate({
			"top":"40px",
			"opacity":1
		},800);
		$("#xp-bgDiv").css({
			"background":"black",
			"opacity":0.6,
			"width":document.body.offsetWidth + "px",
			"height":document.body.offsetHeight + "px",
			"z-index":20,
			"display":"block",
		});
	});
	$("#xp-modal-box .xp-close,#xp-bgDiv").click(function(){
		$("#xp-modal-box").animate({
			"top":"-700px",
			"opacity":0
		},800);
		$("#xp-bgDiv").css("display","none");
	})
//
//});

//朱昀辰返回顶部
window.onload = function(){
	var topbtn = document.getElementById("btn");
	var timer = null;
	var pageheight = document.documentElement.clientHeight;//获取屏幕的高度

	//获取滚动条事件
	window.onscroll = function(){
		var backtop = document.body.scrollTop;
		if(backtop >= 3*pageheight){
			topbtn.style.display = "block";
		}
		else{
			topbtn.style.display = "none";
		}
	};

	topbtn.onclick = function(){
		// alert("heihei")

		timer = setInterval(function(){
			var backtop = document.body.scrollTop;//滚动的高度
			var speedtop = backtop/5;
			document.body.scrollTop = backtop-speedtop;
			if(backtop == 0){
				clearInterval(timer)
			}
		},30)
	}
};

//红米手机的移动
var num2 = $("#HM_shouji").offset().top;
$(window).scroll(function () {
	var num1 = $(window).scrollTop();
	if (num1>num2){
		$("#HM_shouji").css("left",num1-num2);
		//$("#HM_shouji").css("top",num1-num2);
		$("#HM_shouji2").css("right",num1-num2);
	}
})

