$(document).ready(function(){

    const swiper = new Swiper('.swiper', { 
        //direction: "vertical",

        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	    spaceBetween: 0, /* 팝업과 팝업 사이 여백 */
        mousewheel: true,
        on: {
            slideChange: function(){
                if(this.realIndex == 0){
                    $('header').hide()
                }else if(this.realIndex == 1){
                    $('header').show()
                    $('header .link span').removeClass('on')
                    $('header .link .gcj').addClass('on')
                }else if(this.realIndex == 2){
                    $('header .link span').removeClass('on')
                    $('header .link .em').addClass('on')
                }else if(this.realIndex == 3){
                    $('header .link span').removeClass('on')
                    $('header .link .monx').addClass('on')
                }
            }
        }
    });

    $('header .link .gcj').on('click', function(){
        swiper.slideTo(1, 500)
    });
    $('header .link .em').on('click', function(){
        swiper.slideTo(2, 500)
    });
    $('header .link .monx').on('click', function(){
        swiper.slideTo(3, 500)
    });

})