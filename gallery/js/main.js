$(document).ready(function(){

    const visual_swiper = new Swiper('.visual .swiper', { 

    effect: "fade",

	autoplay: { 
		delay: 5000,
		disableOnInteraction: true,
	},

	loop: true, 

    });

    const exh_swiper = new Swiper('.exh .swiper', { 

	autoplay: {  
		delay: 2500,
		disableOnInteraction: true,
	},

	loop: true,  

	navigation: {  
		nextEl: '.exh .button_next',  
		prevEl: '.exh .button_prev',  
	},

});

})//document.ready