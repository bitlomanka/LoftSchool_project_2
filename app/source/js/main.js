
$(document).ready(function(){

    
    $('.turn').on("click", function(e){
         e.stopPropagation();
        if($('.accordion').is(":hidden")){
            $(this).parent('.sidebar').find('.accordion').slideDown(700);
        }else{
            $(this).parent('.sidebar').find('.accordion').slideUp(500);
        }
    });

    $('.slide-show__pic').on("click", function(e){
        e.preventDefault();
        var $this = $(this),
            item = $this.closest('.slide-show__item'),
            container = $this.closest('.slide-show'),
            display = container.find('.slideshow__display'),
            path = item.find('img').attr('src'),
            duration = 300;

        if(!item.hasClass('acive-slide')){
            item.addClass('acive-slide').siblings().removeClass('acive-slide');

            display.find('img').fadeOut(duration, function(){
                $(this).attr('src', path).fadeIn(duration);
            });
        }
    });

    $('.shop-filter__reset').on('click', function(e){
         e.preventDefault();

        $(this).closest('.sidebar-list').find('.shop-filter__check').removeAttr('checked');

    });

    $('.color__item').on("click", function(e){
         e.stopPropagation();
        $(this).css("border", "2px solid #ff6600");
    });
    
    $(function(){
  $('#columnized').columnize({
  	columns: 2,
    lastNeverTallest: true
  });
});

    // переключалки

     $('.display-catalog__view-0').on("click", function(e){
        e.stopPropagation();
        $('.section').find('.product__item_list').addClass('product__item').removeClass('product__item_list');
        $('.section').find('.product-list__picture-list').addClass('product__item').removeClass('product-list__picture-list');
        $('.section').find('.product-list__2').addClass('product-list').removeClass('product-list__2');
        $('.feature-list').css("display", "none");
    });

    $('.display-catalog__view-1').on("click", function(e){
         e.stopPropagation();
        $('.section').find('.product-list').addClass('product-list__2').removeClass('product-list');
        $('.product-list__2').find('.product__item_list').addClass('product-list__picture-list').removeClass('product__item_list');
        $('.product-info-list').find('.feature-list').css("display", "block");

        $('.product__item').addClass('product-list__picture-list').removeClass('product__item');


    });

    $('.display-catalog__view-2').on("click", function(e){
        e.stopPropagation();
        $('.section').find('.product__item').addClass('product__item_list').removeClass('product__item');
        $('.section').find('.product-list__picture-list').addClass('product__item_list').removeClass('product-list__picture-list');
        $('.section').find('.product-list__2').addClass('product-list').removeClass('product-list__2');
        $('.feature-list').css("display", "none");
    });

});





