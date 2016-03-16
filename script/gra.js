/**
 * Created by hania_c on 06.03.16.
 */

var board=[];
var teraz=new Date();
var month=teraz.getMonth();
var year=teraz.getFullYear();
//var day=teraz.getDay();
var firstDayInMonth = (new Date(year, month, 0)).getDay();



function daysInMonth(y, m) {
    return new Date(y, m, 0).getDate();
}

var lastDayInMonth = (new Date(year, month, daysInMonth(year,month+1)-1)).getDay();

$(document).ready(function() {


    function createBoard(size) {
        for (var x = 0 ; x < size ; x++) {
            board[x]= { date: new Date(year, month, x+1)};
        }
    }

    //daysInMonth(year, month);
    createBoard(daysInMonth(year, month+1));

    var miesiac
    switch(month) {
        case 0:
            miesiac= 'Styczeń'
            break;
        case 1:
            miesiac= 'Luty'
            break;
        case 2:
            miesiac= 'Marzec'
            break;
        case 3:
            miesiac= 'Kwiecień'
            break;
        case 4:
            miesiac= 'Maj'
            break;
        case 5:
            miesiac= 'Czerwiec'
            break;
        case 6:
            miesiac= 'Liepiec'
            break;
        case 7:
            miesiac= 'Sierpień'
            break;
        case 8:
            miesiac= 'Wrzesień'
            break;
        case 9:
            miesiac= 'Październik'
            break;
        case 10:
            miesiac= 'Listopad'
            break;
        case 11:
            miesiac= 'Grudzień'
            break;
    }
    var $miesiac = '<div id="miesiac">' + miesiac
    $('#gierka').append($miesiac);


    for (var i = 0 ; i < firstDayInMonth ; i++) {
        var $kartka = '<div class = "szare">'+ '' +'</div>'
        $('#gierka').append($kartka);
    }

    for (var i = 0 ; i < board.length ; i++) {

        if (i === 0) {
            var $kartka = '<div id="dzien1"  class="kartka">' + (i + 1) + '</div>';
        }
        else {
            var $kartka = '<div class="kartka">' + (i + 1) + '</div>'
        }
        $('#gierka').append($kartka);
    }

    for (var i = 0 ; i <= lastDayInMonth ; i++) {
        var $kartk = '<div class = "szare">'+ '' +'</div>'
        $('#gierka').append($kartk);
    }

        //$('#dzien1').css({
        //    marginLeft: (5+ 112 * firstDayInMonth)
        //})
        //if (i === 0) {
        //    kartka.css({
        //        marginLeft: 50
        //});
        //}


    console.log(board);


    $(".funkcja_obrazek").click(function(){
        $("#gierka").toggleClass("visibility");
    });

    $('#boxclose').click(function(){
        $("#gierka").toggleClass("visibility");
    });
});


//Ewa

function makeInteractive(board) {
    return $(board).on('click', 'td', function (event, isCPU) {

        var obrazki = ['red', 'yellow','green','pink'];
        var randomnumber = Math.floor(Math.random() * obrazki.length);

        if (isCPU === true) {
            state.score.cpu += $(this).hasClass('black') ? -1 : 1;
        } else {
            state.score.player += $(this).hasClass('black') ? 1 : 0;
        }

        displayPlayerScore($p1Score, state);
        displayCpuScore($p2Score, state);

        if( $(this).text() === (" ")) {
            $(this).removeClass(obrazki.join(' '));
            $(this).text(null);
        } else {
            $(this).toggleClass(obrazki[randomnumber]);
            $(this).text(" ");
        }

        //   $(this).toggleClass('piesek')// w tym miejscuu pokazuje sie to co komputer dodaje
    });
}