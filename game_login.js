function navigate(){
    playername1 = document.getElementById("player_1name").value;
    playername2 = document.getElementById("player_2name").value;
    localStorage.setItem("Playername1",playername1);
    localStorage.setItem("Playername2",playername2);
    window.location = "game_page.html";
}