var x = 0;
$("#player1").click(function () {
    x++;
    console.log(x);
    $("p1count").text(x)
    score();
    winner()
});


var y = 0;
$("#player2").click(function () {

    y++;
    console.log(y);
    $("p2count").text(y);
    score();
    winner();
});



function winner(){
    if (x===15){
        alert("PLAYER 1 WINS!!!")
    }
    else if(y===15){
        alert("PLAYER 2 WINS!!!")
    }
}
function score() {

    if (x === y) {
        $("#lead").text("Tied")
    } else if (x > y) {
        $("#lead").text("Player 1 is winning")
    } else if (y > x) {
        $("#lead").text("Player 2 is winning")
    }
}




$("#keyboard").click(function () {
    $(this).attr("disabled", "");
    $("#mouse").removeAttr("disabled");
    $("#player1").attr("disabled", "");
    $("#player2").attr("disabled", "");
    document.addEventListener("keypress", function keypress(e) {
        if (e.code === "KeyQ") {
            x++;
            $("p1count").text(x);
        } else if (e.code === "KeyP") {
            y++;
            $("p2count").text(y);

        }
        score();
        winner();
    })

});


$("#mouse").click(function () {
    $(this).attr("disabled", "");
    $("#keyboard").removeAttr("disabled");
    $("#player1").removeAttr("disabled");
    $("#player2").removeAttr("disabled");

});

$("#red").click(function () {
    $("body").addClass("red");
});

$("#blue").click(function () {
    $("body").addClass("blue");
});

$("#yellow").click(function () {
    $("body").addClass("yellow");
});
