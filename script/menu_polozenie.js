/**
 * Created by hania_c on 21.02.16.
 */

$(document).ready(

    function() {

        $(document).on('scroll', onScroll);

        function onScroll() {
            var $pozycjaDokumentu = $(document).scrollTop();
            console.debug($pozycjaDokumentu);
            $('.naglowek-menu a').each (function () {
                var $aktywnyLink = $(this);
                var $elementReferencyjny = $($aktywnyLink.attr('href'));
                if ($elementReferencyjny.position().top <= $pozycjaDokumentu && $elementReferencyjny.position().top + $elementReferencyjny.height() > $pozycjaDokumentu) {
                    $('.naglowek-menu ul li a').removeClass('aktywny');
                    $aktywnyLink.addClass('aktywny');
                }
            })
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
        })

    });