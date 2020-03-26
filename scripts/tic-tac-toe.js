// this is code for the tic-tac-toe game

//vars
let mode = 0; // amount of players
let onePlayerBtn = document.getElementById("playerone"); // one player btn
let twoPlayerBtn = document.getElementById("playertwo"); // two player btn
let buttonBox = document.getElementById("playTab"); // the player tab 
let playerTxt = document.getElementById("Player_turn");
let bordSquares = document.getElementsByClassName("tttboard"); // holds all the board sqrs
let syb = "X";
//functions

function swtichPlayer(player) // switches the players and returns the cutrent player
{
    if(player == 1)
        {
        player = 2;
        syb = "O";
        }
    else
        {
        player = 1;
        syb = "X";
        }
    playerTxt.textContent = "Player " + player + " " + syb; // updates the board
    return player;
}

//player move code
function playerMove(target) //checks
{
    if(target.firstElementChild.textContent == "")
        {
            target.firstElementChild.textContent = syb;
            //console.log(syb);
            return true;
        }
    return false;
}

// 2 player game
function twoPlayerGame()
{
    let currentPlayer = 1; // holds the curent player
     playerTxt.textContent = "Player " + currentPlayer + " X"; //starts the board
    
    for(let i = 0; i < bordSquares.length; i++) // addes a listener to each board spot
        {
            bordSquares[i].addEventListener("click", function(){
                let goodMove;
                goodMove = playerMove(bordSquares[i]);
                if(goodMove)
                {
                    currentPlayer = swtichPlayer(currentPlayer);
                }
            })
        }
   
}



//body
//if one player mode
onePlayerBtn.addEventListener("click", function(){
    buttonBox.style.display = "none";
    
})

//if two player mode
twoPlayerBtn.addEventListener("click", function(){
    buttonBox.style.display = "none";
    twoPlayerGame();
    
})