player1_name = localStorage.getItem("player1_name");
	player2_name = localStorage.getItem("player2_name");

	player1_score = 0;
	player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;


function send(){

    var get_word=document.getElementById("word").value;
    var word=get_word.toLowerCase();
    c1= word.charAt(1);
    console.log(c1);
    var halflength=Math.floor(word.length/2);
    var c2=word.charAt(halflength);
    console.log(c2);
    var lastletter=word.length-1;
    var c3=word.charAt(lastletter);
    console.log(c3);
    var removec1 = word.replace(c1,"_");
    var removec2 = removec1.replace(c2,"_");
    console.log(removec2);
    var c3=removec2.replace(c3," _ ");

    
    var question="<h4 id='word_display' >Q."+c3+" </h4>";
    var answer="<br><br> Ans: <input id='input_box' placeholder='ANSWER'>";
    var check_button="<br><br> <button onclick='check()' class='btn btn-primary'>CHECK</button>";
    var row=question+answer+check_button;

    document.getElementById("output").innerHTML=row;

    document.getElementById("word").value="";
}