
var random_result;
var lost = 0;
var win = 0;
var previous = 0;


//$(".crystal").attr('class');

var startGame = function () {
    random_result = Math.floor(Math.random() * 101) + 19;
    //console.log(random_result);

    $("#result").html('Random Result: ' + random_result);

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;
        //console.log(random);

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

        crystal.html(random);

        $(".crystals").append(crystal);
    }
}
 startGame();

$(".crystal").on('click', function () {

    var num = parseInt($(this).attr('data-random'));
    previous += num;

    console.log(previous);

    if (previous > random_result) {
        lost--;
        $("#lost").html(win);
    }
    else if (previous == random_result) {
        win++;
        $("#win").html(win);

    }

    console.log(previous);


});