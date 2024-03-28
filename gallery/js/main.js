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
	slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
		640: {    /* 640px 이상일때 적용 */
			slidesPerView: 3,
			spaceBetween: 20,
		},
		768: {    /* 768px 이상일때 적용 */
			slidesPerView: 4,
			spaceBetween: 30,
		},
		1024: {   /* 1024px 이상일때 적용 */
			slidesPerView: 5,
			spaceBetween: 40,
		},
		1280: {    /* 1280px 이상일때 적용 */
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