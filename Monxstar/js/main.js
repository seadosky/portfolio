$(document).ready(function(){
    const myFullpage = new fullpage('#fullpage', { 

		navigation: true,
		navigationPosition: 'left', 
		navigationTooltips: ['Main', '공간소개', '이용안내', '갤러리'], 
		showActiveTooltip: true, 

		autoScrolling:true, 
		scrollHorizontally: true,

		verticalCentered: true,
		
		scrollOverflow: false, 

		afterLoad: function(origin, destination, direction, trigger){
			if(destination.index == 0){
				
			}
		},

		responsiveWidth: 768 /* fullpage를 적용시키지 않을 모바일 사이즈 */
	});
})//document.ready