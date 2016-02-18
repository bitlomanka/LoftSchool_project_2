
$(document).ready(function(){
    
    // nav
    
    $(".mobile_menu").on("click", function(){
        $(this).children('.navigation_mob').toggleClass("open");
    });

    // popup
    
        // image_project_form
    function val_img(){
        if ($(this).val()) {
            $(this).siblings('.fileformlabel').text($(this).val()).addClass('color_fileformlabel');    
        } else {
            $(this).siblings('.fileformlabel').text('Загрузите изображение').removeClass('color_fileformlabel');  
        }  
        
    };

    $('.fileform .upload').on('change', val_img);
    
    $('.new_project').on('click', function(){        
        $('.pop_up').bPopup({
            speed:500,
            opacity:0.3,
            positionStyle: 'absolute',
            transition: 'slideDown',
            onClose:function(){    
                $('.pop_up').find("label.error").remove();
                $('.pop_up').find('.error').removeClass('error');
                $('.pop_up')[0].reset();
                $('.fileform .upload').each(val_img);
            }
        })
    });
    
    
    $('.clean').on('click', function(){ 
        $('.form_of_communication ').find("label.error").remove();
        $('.form_of_communication ').find('.error').removeClass('error');        
    });
    
    $('form').validate({
        rules:{
            name_project_form:'required',
            image_project_form:'required',
            url_project_form:{
                required: true,
                url: true
            },
            message_project:'required',
            username:'required',
            mail:{
                required:true,
                email: true
            },
            message:'required',
            captcha:'required'
        },messages:{
            name_project_form:'введите название',
            image_project_form:'изображение',
            url_project_form:{
                required:'ссылка на проект',
                url: 'Введите корректный адрес'
            },
            message_project:'описание проекта',
            username:'введите имя',
            mail:{
                required:'введите email',
                email: 'Введите корректный e-mail'
            },
            message:'ваш вопрос',
            captcha:{
                required:'код капчи',
                captcha: 'Введите правильный код'
            }
        },
        errorPlacement: function(error, element) {
            error.appendTo( element.closest('.input_container') );
        }        
    });
    
    
    //ie placeholder
    
    $('input, textarea').placeholder();
});