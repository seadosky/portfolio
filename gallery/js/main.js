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

const arts_swiper = new Swiper('.arts .swiper', { 
	slidesPerView: 1, 
	spaceBetween: 12, 
	breakpoints: {
		400: {    
			slidesPerView: 2,
			spaceBetween: 12,
		},
		640: {   
			slidesPerView: 3,
			spaceBetween: 20,
		},
		768: {   
			slidesPerView: 3,
			spaceBetween: 22,
		},
		1024: {   
			slidesPerView: 3,
			spaceBetween: 28,
		},
		1280: {   
			slidesPerView: 4,
			spaceBetween: 28,
		},
		1600: {  
		slidesPerView: 5,
		spaceBetween: 28,
	},
	},

	loop: true,  

	navigation: {  
		nextEl: '.arts .button_next', 
		prevEl: '.arts .button_prev',  
	},
});

})//document.ready