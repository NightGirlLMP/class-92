player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name;

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("Word in lowercase - " + word);

    CharAt1 = word.charAt(1);
    console.log(CharAt1);

    length_divide_2 = Math.floor(word.length/2);
    CharAt2 = word.charAt(length_divide_2);
    console.log(CharAt2);

    length_minus_1 = word.length-1;
    CharAt3 = word.charAt(length_minus_1);
    console.log(CharAt3);

    remove_CharAt1 = word.replace(CharAt1, "_");
    remove_CharAt2 = remove_CharAt1.replace(CharAt2, "_");
    remove_CharAt3 = remove_CharAt2.replace(CharAt3, "_");
    console.log(remove_CharAt3);

    question_word = "<h4 id='word_display'>Q. " + remove_CharAt3 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_checkbox'>";
    check_button = "<br> <br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

question_turn = "player_1";
answer_turn = "player_2";

function check(){
    get_answer=document.getElementById("input_checkbox").value;
    answer=get_answer.toLowerCase();
    console.log("Answer = " + answer);

    if (answer==word){
        if (answer_turn == "player_1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }

        if (question_turn == "player_1"){
            question_turn = "player_2";
            document.getElementById("player_question").innerHTML = "Question turn = " + player2_name;
        }
        else {
            question_turn = "player_1";
            document.getElementById("player_question").innerHTML = "Question turn = " + player1_name;
        }

        if (answer_turn == "player_1"){
            answer_turn = "player_2";
            document.getElementById("player_answer").innerHTML = "Answer turn = " + player2_name;
        }
        else {
            answer_turn = "player_1";
            document.getElementById("player_answer").innerHTML = "Answer turn = " + player1_name;
        }

        document.getElementById("output").innerHTML = "";
    }
}