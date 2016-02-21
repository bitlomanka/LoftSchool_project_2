
$(document).ready(function(){

    
    $('.turn').on("click", function(e){
         e.stopPropagation();
        if($('.accordion').is(":hidden")){
            $(this).parent('.sidebar').find('.accordion').slideDown(700);
        }else{
            $(this).parent('.sidebar').find('.accordion').slideUp(700);
        }
        console.log(1);
    });

    
});


//            $('.accordion').slideDown(300);
//            $('.accordion').slideUp(300);




