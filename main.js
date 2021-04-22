var player1, player2;
function start(){
    player1 = document.getElementById("player_1").value;
    player2 = document.getElementById("player_2").value;
    localStorage.setItem("player_1", player1);
    localStorage.setItem("player_2", player2);
    window.location = "game.html";
}
