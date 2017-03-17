$(function(){

    // 背景图渐显
    $('.bg-holder').each(function() {
        var imgSrc = $(this).children('img').attr('src');
        $(this).css('background-image', 'url("' + imgSrc + '")');
    });
    setTimeout(function() {
        $('.bg-holder').each(function() {
            $(this).addClass('fadeIn');
        });
    }, 200);

    // swiper
    try{
        if(Swiper&&typeof(Swiper)=="function"){
            var mySwiper = new Swiper ('.top-slide', {
                autoplay: 5000,
                loop: true,
                pagination: '.swiper-pagination'
            })
        }else{
            
        }
    }catch(e){
        //console.log(e)
    }

})