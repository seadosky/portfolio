$(document).ready(function(){
    
    $('.header .gnb .gnb_open').on('click', function(){
        $('.header').addClass('menu_open')
    })
    $('.header .gnb .gnb_close').on('click', function(){
        $('.header').removeClass('menu_open')
    })

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
		nextEl: '.button_prev',  
		prevEl: '.button_next',  
	},

});

})//document.ready