/**
 * Created by hania_c on 06.03.16.
 */

var plansza = [];
var teraz = new Date();
var month = teraz.getMonth();
var year = teraz.getFullYear();
//var day=teraz.getDay();
var firstDayInMonth = (new Date(year, month, 0)).getDay();


function daysInMonth(y, m) {
    return new Date(y, m, 0).getDate();
}

var lastDayInMonth = (new Date(year, month, daysInMonth(year, month + 1) - 1)).getDay();

$(document).ready(function () {


    function createBoard(size) {
        for (var x = 0; x < size; x++) {
            plansza[x] = {date: new Date(year, month, x + 1)};
        }
    }

    //daysInMonth(year, month);
    createBoard(daysInMonth(year, month + 1));

    var miesiac
    switch (month) {
        case 0:
            miesiac = 'Styczeń';
            break;
        case 1:
            miesiac = 'Luty';
            break;
        case 2:
            miesiac = 'Marzec';
            break;
        case 3:
            miesiac = 'Kwiecień';
            break;
        case 4:
            miesiac = 'Maj';
            break;
        case 5:
            miesiac = 'Czerwiec';
            break;
        case 6:
            miesiac = 'Liepiec';
            break;
        case 7:
            miesiac = 'Sierpień';
            break;
        case 8:
            miesiac = 'Wrzesień';
            break;
        case 9:
            miesiac = 'Październik';
            break;
        case 10:
            miesiac = 'Listopad';
            break;
        case 11:
            miesiac = 'Grudzień';
            break;
    }
    var $miesiac = '<div id="miesiac">' + miesiac;
    $('#gierka').append($miesiac);


    for (var i = 0; i < firstDayInMonth; i++) {
        var $kartka = '<div class = "szare">' + '' + '</div>';
        $('#gierka').append($kartka);
    }

    for (var i = 0; i < plansza.length; i++) {

        if (i === 0) {
            var $kartka = '<div id="dzien1"  class="kartka">' + (i + 1) + '</div>';
        }
        else {
            var $kartka = '<div class="kartka">' + (i + 1) + '</div>'
        }
        $('#gierka').append($kartka);
    }

    for (var i = 0; i < lastDayInMonth; i++) {
        var $kartk = '<div class = "szare">' + '' + '</div>';
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


    console.log(plansza);


    $(".funkcja_obrazek").click(function () {
        $("#gierka").toggleClass("visibility");
    });

    $('#boxclose').click(function () {
        $("#gierka").toggleClass("visibility");
    });


//Ewa

    var $p1Score = $('#p1Score');
    var $p2Score = $('#p2Score');


    $p1Score.text('0');
    $p2Score.text('0');

    function showPlayer(){//pokazuje punkty graczy
        $("#p1Score").html('Player:'+ state.score.player);
    }

    var state = {
        playerName: 'Janusz',
        time: 20,
        score: {
            player: 0,
            cpu: 0
        }
    };

    function makeInteractive(table) {
        return $(table).on('click', '.kartka', function (event, isCPU) {
            var obrazki = ['red', 'yellow','green','pink'];//tablica z obrazkami
            var randomnumber = Math.floor(Math.random() * obrazki.length);//losowo wybiwea obrazeik któy ma dodaz z tablicy 1-4


            if (isCPU === true) {
                state.score.cpu += 1;
            } else {
                state.score.player += $(this).hasClass('red') ? 1 : -1;
            }

            //displayPlayerScore($p1Score, state);
            //displayCpuScore($p2Score, state);

            if( $(this).text() === (" ")) {//losowo dadaje do miejsca losowy obrazek
                $(this).removeClass(obrazki.join(' '));
                $(this).text(null);
            } else {
                $(this).toggleClass(obrazki[randomnumber]);
                $(this).text(" ");
            }

            $(this).toggleClass('red');//wtedy bez tego
        });
    }


    var $clock = $('#clock');

    function displayClock(node, state) {
        $(node).text('Czas: ' + state.time);
    }

    displayClock($clock, state);

    function startGame(initialState) {
        makeInteractive($(plansza));


        var clockIntervalId = setInterval(function () {
            state.time -= 1;
            displayClock($clock, state);
        }, 1000);

        setTimeout(function () {
            clearInterval(cpuActionIntervalId);
            clearInterval(clockIntervalId);
            $('plansza').off('click');
        }, state.time * 1000);

        var cpuActionIntervalId = setInterval(function () {
            var numberOfCells = daysInMonth(year, month + 1);
            $('.kartka').eq(parseInt(Math.random() * numberOfCells)).trigger('click', true);
        }, 1000);


    };


    $('#startGameButton').click(function () {
        startGame(state);
    });


//function startGame(initialState) {
//

//
//    //przestaje klikać po 20 sekundach
//    setTimeout(function () {
//        clearInterval(cpuActionIntervalId);
//        clearInterval(clockIntervalId);
//        $('table').off('click');
//    }, state.time * 1000);
//}
//
//$('#startGameButton').click(function () {
//    startGame(state);
//});


});