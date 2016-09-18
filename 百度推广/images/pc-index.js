$(function() {

	function initTurnTable() {
		$('.turntable-goods1').rotate(-36);
		$('.turntable-gift1').rotate(70);
		$('.turntable-goods2').rotate(36);
		$('.turntable-goods3').rotate(108);
		$('.turntable-gift3').rotate(-130);
		$('.turntable-goods4').rotate(180);
		$('.turntable-gift4').rotate(120);
		$('.turntable-goods5').rotate(-108);
		$('.turntable-gift5').rotate(70);
		$('.turntable-photo5').rotate(15);
	}


	function initRoleAction() {
		var rotation = function() {
			$(".turntable-role").rotate({
				angle: 0,
				animateTo: 360,
				callback: rotation,
				duration: 3000,
				easing: function(x, t, b, c, d) { // t: current time, b: begInnIng value, c: change In value, d: duration
					return c * (t / d) + b;
				}
			});
		}
		rotation();
	}

	function initLightAction() {
		var angle = 0;
		setInterval(function() {
			angle += 15;
			$(".turntable-light").rotate(angle);
		}, 500);
	}

	function clickComppleteBtn() {
		$('.success-goback').click(function() {
			_hmt.push(['_trackEvent', 'click', '点击返回', '点击返回']);
			$('.mask').hide();
		});
	}



	function init() {
		initTurnTable();
		initRoleAction();
		initLightAction();
		clickComppleteBtn();
	}

	try {
		init();
	} catch(e) {

	}

});