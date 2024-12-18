let choice = document.querySelectorAll(".choice"); // for rock,paper,scissor
let msg = document.getElementById("msg");

let userScore = document.getElementById("user-score");
let compScore = document.getElementById("comp-score");

let userScr = 0;  // to increment when user wins
let compScr = 0; // to increment whne user loses

let reset = document.querySelector("#reset");


choice.forEach((choice) => {
    choice.addEventListener("click",function(){

        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
        // console.log("choice was clicked",userChoice);
    });
});
    
function compChoice(){
    let arr = ["rock","paper","scissors"];
   let index =  Math.floor(Math.random()*3);
   return arr[index];
}

function playGame(userChoice){

    console.log(userChoice);
    let comp = compChoice();
    console.log(comp);

    if(userChoice === comp){
        console.log("Game Draw");
        msg.innerText = "Game Draw!";
    }
    else if(userChoice === "rock" && comp === "scissors"){
        console.log("You Won");
        msg.innerText = `You Won! ${userChoice} beats ${comp}`
        msg.style.backgroundColor = "green";

        userScr++;
        userScore.innerText = userScr;

    }

    else if(userChoice === "rock" && comp === "paper"){
        console.log("comp Won");
        msg.innerText = `You Lose! ${comp} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScr++;
        compScore.innerText = compScr;
    }

    else if(userChoice === "paper" && comp === "rock"){
        console.log("You Won");
        msg.innerText = `You Won! ${userChoice} beats ${comp}`
        msg.style.backgroundColor = "green";
        userScr++;
        userScore.innerText = userScr;
    }

    else if(userChoice === "paper" && comp === "scissors"){
        console.log("Comp Won");
        msg.innerText = `You Lose! ${comp} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScr++;
        compScore.innerText = compScr;
    }

    else if(userChoice === "scissors" && comp === "rock"){
        console.log("comp Won");
        msg.innerText = `You Lose! ${comp} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScr++;
        compScore.innerText = compScr;
    }
    else {
        console.log("You Won");
        msg.innerText = `You Won! ${userChoice} beats ${comp}`
        msg.style.backgroundColor = "green";
        userScr++;
        userScore.innerText = userScr;
    }


}


reset.addEventListener("click",function(){

    console.log("reset clicked");
    msg.style.backgroundColor = "#081B31";
    msg.innerText = "Play Your Move";

    userScr = 0; 
    compScr = 0; 

    userScore.innerText = userScr;
    compScore.innerText = compScr;


   
});



