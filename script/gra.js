/**
 * Created by hania_c on 06.03.16.
 */

var board=[];
var teraz=new Date();
var month=teraz.getMonth();
var year=teraz.getFullYear();
var day=teraz.getDay();
var firstDayInMonth = (new Date(year, month, 0)).getDay();
//var firstDayInMonth = 5;

function daysInMonth(y, m) {
    return new Date(y, m, 0).getDate();
}


$(document).ready(function() {


    function createBoard(size) {
        for (var x = 0 ; x < size ; x++) {
            board[x]= { date: new Date(year, month, x+1)};
        }
    }

    //daysInMonth(year, month);
    createBoard(daysInMonth(year, month+1));


    for (var i = 0 ; i < board.length ; i++) {
        if ( i === 0 ) {
            var $kartka = '<div id="dzien1">' + (i+1) + '</div>';
        }
        else {
            var $kartka = '<div>' + (i + 1) + '</div>'
        }
        $('#gierka').append($kartka);

        $('#dzien1').css({
            marginLeft: (5+ 112 * firstDayInMonth)
        })
        //if (i === 0) {
        //    kartka.css({
        //        marginLeft: 50
        //});
        //}
    };

    console.log(board);
    //$('#gierka').append(board);

});