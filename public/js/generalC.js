/*eslint-env jquery */
$(document).ready(function() {
	$(".mobile").click(function(){
		$(".sidebar").slideToggle('fast');
	});
	$("#msg").click(function(){
		$(".msgDrop").slideToggle('fast');
		
	});
	$('.iconClose').on('click', function(){
    $(this).parent().remove();
});
	window.onresize = function(event)
	{
		if($(window).width() > 500)
		{
			$(".sidebar").show();
			$(".mobile").hide();
		}
		if($(window).width() < 500)
		{
			$(".mobile").show();
			$(".sidebar").hide();

		}
	};
	$(".boxCharts").hide();

	setProvinceR();

	setProvinceB();
	//chartsLoadB();
});
