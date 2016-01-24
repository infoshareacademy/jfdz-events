/**
 * Created by witek on 24.01.16.
 */

$(document).ready(
    function(){

        var regImie=/^[A-Za-ząśżźćńółęĄŻŹĆŃŁÓĘŚ]*$/;
        var regPoczta=/^([A-Za-z0-9_.]*)@{1}([A-Za-z0-9_.]*)$/;
        var regTel=/^\+?\d{0,2} ?\d{9}$/;

        $('input').change(

            function(){

                var doSprImie=$('#formularz1').val();
                var doSprPoczta=$('#formularz2').val();
                var doSprTel=$('#formularz3').val();

                var evalImie= doSprImie.match(regImie);
                var evalPoczta= doSprPoczta.match(regPoczta);
                var evalTel= doSprTel.match(regTel);

                if (evalImie==null) {
                    alert('Musisz poprawnie wpisać imię!');
                }
                if (evalImie==null) alert('Musisz poprawnie wpisać E-mail!');
                if (evalImie==null) alert('Musisz poprawnie wpisać numer telefonu!');

        }
        )


    }
);

//


//function sprMail(adresMail){
//
//    //var adresMail = document.getElementById('formularz2').value;
//
//    //Wyrażenie regularne

//
//    var porownaj=testMail.match(adresMail);
//
//    if (porownaj==null){
//
//        alert('Musisz poprawić adres poczty elektronicznej!');
//        document.getElementById('formularz2').value='';
//        document.getElementById('formularz2').onfocus;
//        return false;
//
//    }
//
//}