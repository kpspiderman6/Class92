function back(){
    window.location="activity_1.html";
}
function Getscore(){
    last_score = localStorage.getItem("score");
    document.getElementById("new_score").innerHTML="score: "+last_score;
}