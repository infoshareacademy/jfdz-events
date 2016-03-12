/**
 * Created by hania_c on 06.03.16.
 */

var board=[];
var teraz=new Date();
var month=teraz.getMonth();
var year=teraz.getFullYear();
var day=teraz.getDay();
//var firstDay=

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
        $('#gierka').append('<div>' + (i+1) + '</div>');
    }

    console.log(board);
    //$('#gierka').append(board);

});