$(function() {

	$(".btn1").on("click", function () {
		$(".a1").animate({
			opacity: 0.1
		}, 2000);
		$(".a1").animate({opacity: "1"}, 1000);
	});
});

$(function() {

	$(".btn2").on("click", function () {
		$(".a2").slideUp(1000, function(){
			$(".a2").slideDown(1000);
		});
	});
});

$(function() {

	$(".btn3").on("click", function () {
		$(".a3").fadeOut(1000).fadeIn(1000);
	});
});

$(function() {

	$(".btn4").on("click", function () {
		$(".a4").animate({
			left: 230,
			opacity: 0.5
		});
	});
});

$(function() {

	$(".btn5").on("click", function (anim) {
		let a5 = $(".a5");
		a5.animate({
			right: 225
		});
		a5.animate({
			bottom: 324
		});
		a5.animate({
			left: 910
		});
		a5.animate({
			top:0
		});
		a5.animate({
			right: 0,
			left: 0
		}, 2000);
	});
});

$(function() {

	$(".btn6").on("click", function () {
		$(".a6").addClass("addrotate");
		let spin = $(".a6");
		setTimeout(function () {
			$(spin).removeClass("addrotate");
		}, 1200);
	});

});

$(function() {

	$(".btn7").on("click", function () {
		$(".a7")
			.animate({"width": 5}, 1000)
			.animate({"height": 300}, 1000)
			.animate({"width": 200}, 1000);
	});
});


$(function() {

	$(".btn8").on("click", function () {
		$(".a8").css({
			"height": "280",
			"width": "190",
			"border-radius": "60%",
			"border": "3px solid silver",
		});

	});
});