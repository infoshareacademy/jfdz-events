/**
 * Created by witek on 24.01.16.
 */

$(document).ready(
    function(){
        $('.monit').hide();
        $('input[type=submit]').attr('disabled','disabled');
        //Powyżej blokowanie przycisku submit

        var regImie=/^[A-Za-ząśżźćńółęĄŻŹĆŃŁÓĘŚ][^\s0-9]{2,30}/;
        var regPoczta=/^([A-Za-z0-9_.]*)@{1}([A-Za-z0-9_.]*)/;
        var regTel=/^\+?\d{0,2} ?\d{9}/;

        $('#formularz1').change(
            function(){

                var evalImie= $('#formularz1').val().match(regImie);
                if (evalImie==null){
                        //alert('Musisz poprawnie wpisać imię!');
                        $('#formularz1').next().show(500);
                        $('#formularz1').css('background-color','red');
                        $('#formularz1').focus();
                }
                    else {
                        $('#formularz1').next().hide(500);
                        $('#formularz1').css('background-color','');
                        $('input[type=submit]').removeAttr('disabled');
                }
            }
        );

        $('#formularz2').change(
            function(){

                var evalPoczta= $('#formularz2').val().match(regPoczta);
                if (evalPoczta==null){
                    $('#formularz2').next().show(500);
                    $('#formularz2').css('background-color','red');
                    $('#formularz2').focus();
                }
                else {
                    $('#formularz2').next().hide(500);
                    $('#formularz2').css('background-color','');
                    $('input[type=submit]').removeAttr('disabled');
                }
            }
        );

        $('#formularz3').change(
            function(){
                var evalTel= $('#formularz3').val().match(regTel);
                if (evalTel==null){
                    $('#formularz3').next().show(500);
                    $('#formularz3').css('background-color','red');
                    $('#formularz3').focus();
                }
                else {
                    $('#formularz3').next().hide(500);
                    $('#formularz3').css('background-color','');
                    $('input[type=submit]').removeAttr('disabled');
                }
            }
        )
    });