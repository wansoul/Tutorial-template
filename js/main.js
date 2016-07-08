var firstTime = true;

$(document).ready(function(){
	$("#link_video").prettyPhoto();
	$(".blink_ball").toggle();
	$(".help_tip2").toggle();

	$(".help_btn").click(function(){
		toggleHelp();
	});

	$(".blink_ball").click(function(){
		$(".help_tip2").slideUp();
	});

});

function toggleHelp(){
	$(".blink_ball").toggle();

	if( $(".help_btn").hasClass("active") ){
		$(".help_btn").removeClass("active");
	} else {
		$(".help_btn").addClass("active");
	}

	if (firstTime) {
		$(".help_tip").hide();
		$(".help_tip2").slideDown();
		firstTime = false;
	} else {
		if( $(".help_tip2").is(":visible") ){
			$(".help_tip2").slideUp();
		}
	}

}