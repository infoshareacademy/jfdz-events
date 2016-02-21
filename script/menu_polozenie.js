/**
 * Created by hania_c on 21.02.16.
 */
$(document).on('scroll',onScroll);


$(document).ready(
function onScroll() {
    var $pozycjaDokumentu= $(document).scrollTop();
    $('.naglowek-menu a').each (function() {
        var $aktywnyLink=$(this);
        var $elementReferencyjny=$($aktywnyLink.attr('href'));
        if ($elementReferencyjny.position().top <= $pozycjaDokumentu && $elementReferencyjny.position().top + $elementReferencyjny.height()>$pozycjaDokumentu) {
            $('.naglowek-menu ul li a').removeClass('aktywny');
            $aktywnyLink.addClass('aktywny');
        }
    })
});