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

		responsiveWidth: 768 
	});

	const gallery_swiper = new Swiper('.gallery .swiper', { 
	slidesPerView: 4, 
	spaceBetween: 35, 
	centeredSlides: true, 
	loop: true,  
	autoplay: {  
		delay: 2500,
		disableOnInteraction: true,
	},
});

})//document.ready