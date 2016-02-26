
$(document).ready(function(){

    
    $('.turn').on("click", function(e){
         e.stopPropagation();
        if($('.accordion').is(":hidden")){
            $(this).parent('.sidebar').find('.accordion').slideDown(700);
            $(this).css("transform", "rotate(0deg)");
        }else{
            $(this).parent('.sidebar').find('.accordion').slideUp(500);
            $(this).css("transform", "rotate(180deg)");
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
            item.addClass('acive-slide active-bord').siblings().removeClass('acive-slide active-bord');

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
        $(this).toggleClass('active-bord');
    });
    
    //колонки

    $('#columnized').columnize({
        columns: 2,
        lastNeverTallest: true
    });


    // селект2

    $('.sort__select').select2({
        minimumResultsForSearch: -1
    });


    // слайдер цен

    $("#price-range").slider({
        range: true,
        min: $('#price-min').data('min'),
        max: $('#price-max').data('max'),
        values: [$('#price-min').val(), $('#price-max').val()],
        slide: function( event, ui ) {
            $('#price-min').val(ui.values[0])
            $('#price-max').val(ui.values[1])
        }
    });


    // переключалки

    $('.display-catalog__view-0, .display-catalog__view-1, .display-catalog__view-2').on("click", function(e){
        e.stopPropagation();

        var ulClass = '',
            itemClass = '';

        if($(this).hasClass('display-catalog__view-0')) {
            itemClass = 'product__item';
        } else if ($(this).hasClass('display-catalog__view-1')) {
            ulClass = 'product-list__2';
            itemClass = 'product-list__picture-list';
        } else {
            itemClass = 'product__item_list';
        }

        $('.product-list').removeClass('product-list__2').addClass(ulClass);
        $('.product__item_list, .product__item, .product-list__picture-list').removeClass('product__item_list product__item product-list__picture-list').addClass(itemClass);
    });

});





