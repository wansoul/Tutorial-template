var firstTime = true;

$(document).ready(function(){
	$("#link_video").prettyPhoto();
	$(".blink_ball").toggle();

	$(".help_btn").click(function(){
		toggleHelp();
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
		firstTime = false;
	}
}