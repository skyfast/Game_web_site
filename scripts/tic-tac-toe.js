// this is code for the tic-tac-toe game

// I wish I was better with event handling omg
//It is a bit of a dumster fire in here umu

//vars
let mode = 0; // amount of players
let onePlayerBtn = document.getElementById("playerone"); // one player btn
let twoPlayerBtn = document.getElementById("playertwo"); // two player btn
let buttonBox = document.getElementById("playTab"); // the player tab 
let playerTxt = document.getElementById("Player_turn");
let bordSquares = document.getElementsByClassName("tttboard"); // holds all the board sqrs
let syb = "X"; // holds the current syb
let currentPlayer = 1; // holds curent player

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

function GameWin(curentSyb) // checks if the curent play won
{
    //first row
    if(bordSquares[0].textContent == curentSyb && bordSquares[1].textContent == curentSyb && bordSquares[2].textContent == curentSyb )
    {
        return true;
    }
    //second row
    else if(bordSquares[3].textContent == curentSyb && bordSquares[4].textContent == curentSyb && bordSquares[5].textContent == curentSyb )
    {
        return true;
     }
    //last row
    else if(bordSquares[6].textContent == curentSyb && bordSquares[7].textContent == curentSyb && bordSquares[8].textContent == curentSyb )
    {
        return true;
    }
    //first col
    else if(bordSquares[0].textContent == curentSyb && bordSquares[3].textContent == curentSyb && bordSquares[6].textContent == curentSyb )
    {
        return true;
    }
    //second col
    else if(bordSquares[1].textContent == curentSyb && bordSquares[4].textContent == curentSyb && bordSquares[7].textContent == curentSyb )
    {
        return true;
    }
    // last col
    else if(bordSquares[2].textContent == curentSyb && bordSquares[5].textContent == curentSyb && bordSquares[8].textContent == curentSyb )
    {
        return true;
    }
    //diagonals
     else if(bordSquares[0].textContent == curentSyb && bordSquares[4].textContent == curentSyb && bordSquares[8].textContent == curentSyb )
     {
         return true;
     }
    else if(bordSquares[2].textContent == curentSyb && bordSquares[4].textContent == curentSyb && bordSquares[6].textContent == curentSyb )
     {
         return true;
     }
    else
    {
        return false;    
    }
}

function endWin(currentPlayer) // ends the game if there is a win
{
     for(let i = 0; i < bordSquares.length; i++) // addes a listener to each board spot
        bordSquares[i].removeEventListener("click", bordListener)
     alert("Winner player " + currentPlayer);
}
function GameDraw() // check if the game is a draw
{
    isDraw = true;  
    for(i = 0; i < bordSquares.length; i++) // check to see if any space is empty
        {
            if(bordSquares[i].textContent == "")
                isDraw = false;
        }
    return isDraw; 
}

function bordListener(e)
{
    {
        let goodMove;
        goodMove = playerMove(e.target);
        if(goodMove)
        {
            if(GameWin(syb))
            {
                endWin(currentPlayer);  
            }
            else if(GameDraw())
            {
                alert("Game is a draw!");
            }
            else
            {
                currentPlayer = swtichPlayer(currentPlayer);
            }
        }
    }
}
    
// 2 player game
function twoPlayerGame()
{
     // holds the curent player
     playerTxt.textContent = "Player " + currentPlayer + " X"; //starts the board
    
    for(let i = 0; i < bordSquares.length; i++) // addes a listener to each board spot
        {
            bordSquares[i].addEventListener("click", bordListener)
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