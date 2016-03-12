/**
 * Created by witek on 24.01.16.
 */

function validateForm (field,checkFormula) {
    var evalImie = $(field).val().match(checkFormula);
    if (evalImie == null) {
        $(field).next().show(500);
        $(field).css('background-color', 'red').focus();
    }
    else {
        $(field).next().hide(500);
        $(field).css('background-color', '');
        $('input[type=submit]').removeAttr('disabled');
    }
}

$(document).ready(
    function () {
        $('.monit').hide();
        $('input[type=submit]').attr('disabled', 'disabled');
        //Powyżej blokowanie przycisku submit
        var regImie = /^[A-Za-zĄĆĘŁŃÓŚŻŹąćęłńóśźż]{3,}$/;
        var regPoczta = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var regTel = /^\+?\d?\d? ?\d{9}/;

        $('#formularz1').change(function() {
            var field = ('#formularz1');
            validateForm(field, regImie)
        });

        $('#formularz2').change(function () {
            var field = ('#formularz2');
            validateForm(field, regPoczta)
        });

        $('#formularz3').change(function () {
            var field = ('#formularz3');
            validateForm(field, regTel)
        });

        $(':checkbox').each(function () {
            $(this).wrap('<span class="input-styled"></span>');
            $(this).after('<span></span>');
        });

        //wysylanie formularza
        $('.form-wyslij').on('click', function () {

            $('.formularz').animate({
                marginRight: '-551px'
            }, 500);
            $('.mask').animate({
                marginLeft: '0px'
            }, 500);

            $('#target').submit();

            //$.post('http://jfdz.infoshareaca.nazwa.pl/mailer.php', function (data) {
            //    alert(data);
            //});
        });

        //obsługa ciasteczek na naszej stronie
        var ciastko=document.cookie;
        ciastko == '' ? document.cookie = "arabica=the best" : $('.cookie').hide();

        $('.close').on('click', function() {
            $(this).css({
                boxShadow: '0px 0px 0px',
                marginTop: 1,
                marginLeft: 91
            });
            $('.cookie').animate({
                marginBottom:-51
                //display:'none',
            },1000);
        })
    });

