/**
 * Created by witek on 24.01.16.
 */

$(document).ready(
    function() {
        $('.monit').hide();
        $('input[type=submit]').attr('disabled', 'disabled');
        //Powyżej blokowanie przycisku submit
        var regImie = /^[A-Za-zĄĆĘŁŃÓŚŻŹąćęłńóśźż]{2,}$/;
        var regPoczta = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var regTel = /^\+?\d?\d? ?\d{9}/;
        $('#formularz1').change(
            function () {

                var evalImie = $('#formularz1').val().match(regImie);
                if (evalImie == null) {
                    //alert('Musisz poprawnie wpisać imię!');
                    $('#formularz1').next().show(500);
                    $('#formularz1').css('background-color', 'red');
                    $('#formularz1').focus();
                }
                else {
                    $('#formularz1').next().hide(500);
                    $('#formularz1').css('background-color', '');
                    $('input[type=submit]').removeAttr('disabled');
                }
            }
        );

        $('#formularz2').change(
            function () {
                var evalPoczta = $('#formularz2').val().match(regPoczta);
                if (evalPoczta == null) {
                    $('#formularz2').next().show(500);
                    $('#formularz2').css('background-color', 'red');
                    $('#formularz2').focus();
                }
                else {
                    $('#formularz2').next().hide(500);
                    $('#formularz2').css('background-color', '');
                    $('input[type=submit]').removeAttr('disabled');
                }
            }
        );

        $('#formularz3').change(
            function () {
                var evalTel = $('#formularz3').val().match(regTel);
                if (evalTel == null) {
                    $('#formularz3').next().show(500);
                    $('#formularz3').css('background-color', 'red');
                    $('#formularz3').focus();
                }
                else {
                    $('#formularz3').next().hide(500);
                    $('#formularz3').css('background-color', '');
                    $('input[type=submit]').removeAttr('disabled')
                }
            }
        );

        //Checked checkbox agree
        $(':checkbox').each(function () {
            $(this).wrap('<span class="input-styled"></span>');
            $(this).after('<span></span>');
        });


    });

