/**
 * Created by hania_c on 21.02.16.
 */

$(document).ready(

    function() {

        $(document).on('scroll', onScroll);

        function onScroll() {
            var $wysokoscDokumentu=$(document).height() - $(window).height() - 100;
            var $aktualnapozycjaDokumentu = $(document).scrollTop();
            console.debug($aktualnapozycjaDokumentu);
            $('.naglowek-menu a').each (function () {
                var $aktywnyLink = $(this);
                var $elementReferencyjny = $($aktywnyLink.attr('href'));
                if ($aktualnapozycjaDokumentu >= $wysokoscDokumentu) {
                    $('.naglowek-menu ul li a').removeClass('aktywny');
                    $('.naglowek-menu ul :nth-child(3) a').addClass('aktywny');
                }
                else if ($elementReferencyjny.position().top <= $aktualnapozycjaDokumentu +50 && $elementReferencyjny.position().top + $elementReferencyjny.height() > $aktualnapozycjaDokumentu) {
                    $('.naglowek-menu ul li a').removeClass('aktywny');
                    $aktywnyLink.addClass('aktywny');
                }
            });
            console.log('wys dok' + $wysokoscDokumentu + 'aktual poz' + $aktualnapozycjaDokumentu);
        }
//Create by Evag

    $('a[href^="#"]').click(function(event) {
        event.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        })
        });



$(window).scroll(function() {
    var scrolled=$(window).scrollTop();
    $('.par_layer').css('background-position', '0 ' + -(scrolled*0.3) + 'px');
});
});


