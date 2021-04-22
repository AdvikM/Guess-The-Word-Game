var player1_name, player2_name, player1_score = 0, player2_score = 0;
player1_name = localStorage.getItem("player_1");
player2_name = localStorage.getItem("player_2");
displayNamesAndScores();
document.getElementById("question").textContent = player1_name;
document.getElementById("answer").textContent = player2_name;
function displayNamesAndScores(){
    document.getElementById("player1_name").textContent = player1_name;
    document.getElementById("player2_name").textContent = player2_name;
    document.getElementById("player1_score").textContent = player1_score;
    document.getElementById("player2_score").textContent = player2_score;
    
}
var original;
function send(){
    orignal=document.getElementById('word').value;
    var copy=orignal.replace(orignal.charAt(1) , "_")
    copy=copy.replace(copy.charAt(copy.length-2) , "_")
    copy=copy.replace(copy.charAt(Math.round(copy.length/2)) , "_")
    console.log(copy);
    document.getElementById('questionDiv').innerHTML=`
    
       <h2>Q. <span id='question_word'>${copy}</span></h2>
       <h3>Answer : <input type = "text" id ="answer_word" value = "0" ></h3>
       <button onclick='check()'>Check</button>
    
    `
    document.getElementById('word').value="" ;
 }




// 1 , orignal.length-2 , Math.round(orignal.length/2)

var answer, q, a;
function check(){
    a = document.getElementById("answer").textContent;
    answer = document.getElementById("answer_word").value;
    if (answer == orignal) {
        if (a == player1_name){
            player1_score++
            console.log(player1_name);
            displayNamesAndScores();
            document.getElementById("question").textContent = player1_name;
            document.getElementById("answer").textContent = player2_name;
        }
        else{
            player2_score++
            console.log(player2_name);
            displayNamesAndScores();
            document.getElementById("question").textContent = player2_name;
            document.getElementById("answer").textContent = player1_name;
        }
    }
    else{
        alert("Wrong Answer!")
        displayNamesAndScores();
        if (a == player1_name){
            console.log(player1_name);
            displayNamesAndScores();
            document.getElementById("question").textContent = player1_name;
            document.getElementById("answer").textContent = player2_name;
        }
        else{
            console.log(player2_name);
            displayNamesAndScores();
            document.getElementById("question").textContent = player2_name;
            document.getElementById("answer").textContent = player1_name;
        }
    }
    document.getElementById("answer_word").value="";
    document.getElementById("questionDiv").innerHTML = "";
}