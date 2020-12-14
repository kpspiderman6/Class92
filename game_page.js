playername1 = localStorage.getItem ("Playername1");
playername2 = localStorage.getItem ("Playername2");

Question_turn = "player1";
Answer_turn = "player2";

Player1_score = 0;
Player2_score = 0;

document.getElementById("player1name").innerHTML=playername1+":";
document.getElementById("player2name").innerHTML=playername2+":";

document.getElementById("span1").innerHTML=Player1_score;
document.getElementById("span2").innerHTML=Player2_score;

document.getElementById("span3").innerHTML=playername1;
document.getElementById("span4").innerHTML=playername2;

function send(){
    user1_word = document.getElementById("game_input_word").value;
    user2_word = user1_word.toLowerCase();
    CharAt1=user2_word.charAt(1);
    length_word = Math.floor(user2_word.length/2);
    CharAt2=user2_word.charAt(length_word);
    lengthminus=user2_word.length-1;
    CharAt3=user2_word.charAt(lengthminus);
    removeCharAt1 = user2_word.replace(CharAt1,"_");
    removeCharAt2 = removeCharAt1.replace(CharAt2,"_");
    removeCharAt3 = removeCharAt2.replace(CharAt3,"_");
    console.log(removeCharAt3);
    question_word = "<h4 id='word_display'> Q. "+removeCharAt3+"</h4>";
   

    input_box = "<br>Answer : <input type='text' id='input_check_box'>"; 
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("game_input_word").value = "";
}
function check(){
    answer = document.getElementById("input_check_box").value;
    answer1 = answer.toLowerCase();
    console.log(answer1);
    if(answer1 == user2_word){
        if(Answer_turn == "player1"){
            Player1_score = Player1_score +1;
            document.getElementById("span1").innerHTML=Player1_score;
        }
        else{
            Player2_score = Player2_score +1;
            document.getElementById("span2").innerHTML=Player2_score;
        }
    }
    if (Question_turn == "player1"){
        Question_turn = "player2";
        document.getElementById("span3").innerHTML=playername2;
    }
    else{
        Question_turn = "player1";
        document.getElementById("span3").innerHTML=playername1;
    }
    if (Answer_turn == "player1"){
        Answer_turn = "player2";
        document.getElementById("span4").innerHTML=playername2;
    }
    else{
        Answer_turn = "player1";
        document.getElementById("span4").innerHTML=playername1;
    }
    document.getElementById("output").innerHTML="";
}