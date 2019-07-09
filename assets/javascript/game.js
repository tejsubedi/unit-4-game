var random_result;
var lost = 0;
var win = 0;
var previous = 0;

//setters
//getters
//$(".crystal").attr('class','red');


var resetAndStart = function() {
    $(".crystals").empty();

random_result = Math.floor(Math.random() * 69) + 30; //hoisting
console.log(random_result);
$("#result").html("Random Result:  " + random_result);

for(var i =0; i < 4; i++){

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
$("#previous").html("Total Score: " + previous);
}
resetAndStart();

//Evenet Delegation

$(document).on('click',".crystal", function() {

    var num = parseInt($(this).attr('data-random'));
    previous += num;
    

    $("#previous").html("Total Score: " + previous);

    console.log(previous);

    if(previous > random_result){
        lost--;

        $("#lost").html("You lost" + lost);

        previous = 0;

        resetAndStart();

    } else if(previous === random_result){
        win++;

        $("#win").html("You win" +  win);


        previous = 0;

        resetAndStart();
       
    }

   
});
