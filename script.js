// Reset button;

// let resetButton= document.querySelector('reset-button')
// console.log(resetButton)

// resetButton.addEventListener('click', resetGame)

// function resetGame(){
//     // resets game, run script again
// }

document.querySelector('.reset-button').onclick= function(){
    // document.querySelectorAll('.square').reset()
    let resetSquares= document.querySelectorAll('.square')
    // reset squares is similar to an array.
    resetSquares.forEach(square => {
        // square is similar to an element in array
        square.style.backgroundColor='white'
        square.innerHTML='☺'
        square.style.color='black'
    });
    // .innerHTML='☺'
    // resetSquares.style.backgroundColor='white'
    // console.log(resetBoard)
    // resetBoard.style.backgroundColor='white'
    // document.querySelectorAll('#A1').innerHTML='☺'

    // resetSquares.style.backgroundColor='blue'
    // document.querySelector('#player-turn').innerHTML= 'New Game';
    checkStalemate=0;
    
}

// document.getElementById("reset").onclick = function() {
//     document.getElementById("numbers").innerHTML = "";
//  };

let allSquares = document.querySelectorAll('.square')  //we select all the squares
console.log(allSquares)
console.log(A1)
console.log(A9)

// document.querySelector('.reset-button').onclick= function(){
//     // document.querySelectorAll('.square').innerHTML="☺"
//     // console.log(resetBoard)
//     // resetBoard.style.backgroundColor='white'
//     allSquares.style.backgroundColor= 'white'
//     document.querySelector('#player-turn').innerHTML= 'New Game';
//     checkStalemate=0;
    
// }

// let square1= document.querySelector('#A1>h1').innerHTML
// let square2= document.querySelector('#A2>h1').innerHTML
// let square3= document.querySelector('#A3>h1').innerHTML
// let square4= document.querySelector('#A4>h1').innerHTML
// let square5= document.querySelector('#A5>h1').innerHTML
// let square6= document.querySelector('#A6>h1').innerHTML
// let square7= document.querySelector('#A7>h1').innerHTML
// let square8= document.querySelector('#A8>h1').innerHTML
// let square9= document.querySelector('#A9>h1').innerHTML


allSquares.forEach((square) => { //
    square.addEventListener('click', newClick) // WE DO AGAIN A forEach in ORDER TO ADD CLICKS
    // console.log(square)
})
// allSquares is similar to an array.

let playerTurn= document.querySelector('#player-turn')
console.log(playerTurn)

let checkStalemate= 0

function newClick() {

    if (this.innerHTML == '☺') {
        if (checkStalemate == 0){
            this.innerHTML = "X"
            checkStalemate += 1
            playerTurn.innerHTML= "Player 2 Turn"
            this.style.color='green'
            this.style.backgroundColor='yellow'
            console.log(checkStalemate)
        } else if (checkStalemate == 1) {
        if (checkStalemate == 1)
            this.innerHTML = "O"
            checkStalemate += 1
            this.style.color='pink'
            this.style.backgroundColor='blue'
            playerTurn.innerHTML= "Player 1 Turn"
            console.log(checkStalemate)
        } else if(checkStalemate==2){
            this.innerHTML = "X"
            checkStalemate += 1
            playerTurn.innerHTML= "Player 2 Turn"
            this.style.color='green'
            this.style.backgroundColor='yellow'
            console.log(checkStalemate)
        }else if (checkStalemate==3){
            this.innerHTML = "O"
            checkStalemate += 1
            this.style.color='pink'
            this.style.backgroundColor='blue'
            playerTurn.innerHTML= "Player 1 Turn"
            console.log(checkStalemate)
            check4Win()
        }else if (checkStalemate==4){
            this.innerHTML = "X"
            checkStalemate += 1
            playerTurn.innerHTML= "Player 2 Turn"
            this.style.color='green'
            this.style.backgroundColor='yellow'
            console.log(checkStalemate)
            check4Win()
        }else if (checkStalemate==5){
            this.innerHTML = "O"
            checkStalemate += 1
            this.style.color='pink'
            this.style.backgroundColor='blue'
            playerTurn.innerHTML= "Player 1 Turn"
            console.log(checkStalemate)
            check4Win()
        }else if (checkStalemate==6){
            this.innerHTML = "X"
            checkStalemate += 1
            playerTurn.innerHTML= "Player 2 Turn"
            this.style.color='green'
            this.style.backgroundColor='yellow'
            console.log(checkStalemate)
            check4Win()
        }else if (checkStalemate==7){
            this.innerHTML = "O"
            checkStalemate += 1
            this.style.color='pink'
            this.style.backgroundColor='blue'
            playerTurn.innerHTML= "Player 1 Turn"
            console.log(checkStalemate)
            check4Win()
        }else if (checkStalemate==8){
            this.innerHTML = "X"
            checkStalemate += 1
            playerTurn.innerHTML= "Full Board: It's a stalemate! Press Reset."
            this.style.color='green'
            this.style.backgroundColor='yellow'
            console.log(checkStalemate)
            check4Win()
            // alert(`Full board, It's a tie!`)
        }else if (checkStalemate==9){
            checkStalemate += 1
            console.log(checkStalemate)
            alert(`Full board, It's a tie!`)
        }
    
    }

}

// Allow us to check for win by setting each square ID a separate variable
// let square1= 0
// let square2= 0
// let square3= 0
// let square4= document.querySelector('#A4')
// let square5= document.querySelector('#A5')
// let square6= document.querySelector('#A6')
// let square7= document.querySelector('#A7')
// let square8= document.querySelector('#A8')
// let square9= document.querySelector('#A9')

// console.log(square1)
// let square1= document.querySelector('#A1>h1').innerHTML
//     let square2= document.querySelector('#A2>h1').innerHTML
//     let square3= document.querySelector('#A3>h1').innerHTML
//     let square4= document.querySelector('#A4>h1').innerHTML
//     let square5= document.querySelector('#A5>h1').innerHTML
//     let square6= document.querySelector('#A6>h1').innerHTML
//     let square7= document.querySelector('#A7>h1').innerHTML
//     let square8= document.querySelector('#A8>h1').innerHTML
//     let square9= document.querySelector('#A9>h1').innerHTML


// let playerOneWin
let playerTwoWin
// let playerTwoWin
let resetGame= false

function check4Win(){

    let resetGame= false

    let square1= document.querySelector('#A1').innerHTML
    let square2= document.querySelector('#A2').innerHTML
    let square3= document.querySelector('#A3').innerHTML
    let square4= document.querySelector('#A4').innerHTML
    let square5= document.querySelector('#A5').innerHTML
    let square6= document.querySelector('#A6').innerHTML
    let square7= document.querySelector('#A7').innerHTML
    let square8= document.querySelector('#A8').innerHTML
    let square9= document.querySelector('#A9').innerHTML


    // let playerOneA1= document.querySelector('#A1'.querySelector('h1')
    // console.log(square1)
    // console.log(square2)
    // console.log(square3)
    // console.log(square4)
    // console.log(square5)
    // console.log(square6)
    // console.log(square7)
    // console.log(square8)
    // console.log(square9)

    // console.log(playerOneWinA1)

    if(square1=="O" && square2=="O" && square3=="O"){
    // if('#A1' =="<h1>O</h1>" && '#A2' == "<h1>O</h1>" && '#A3' == "<h1>O</h1>"){
        alert('Player Two Won!')
        resetGame= true
        // resetGame()
        // playerTwoWin +=
        // console.log(playerTwoWin)
        // console.log(winner)
    }if(square4=="O"&& square5=="O"&& square6=="O"){
        alert('Player Two Won!')
        // playerTwoWin +=
        // console.log(playerTwoWin)
        // console.log(winner)
    }else if(square7=="O" && square8=="O"&& square9=="O"){
        alert('Player Two Won!')
        // playerTwoWin +=
        // console.log(playerTwoWin)
        // console.log(winner)
    }else if(square1=="O" && square5=="O"&& square9=="O"){
        alert('Player Two Won!')
        // playerTwoWin +=
        // console.log(playerTwoWin)
        // console.log(winner)
    }else if(square3=="O" && square5=="O"&& square7=="O"){
        alert('Player Two Won!')
        // playerTwoWin +=
        // console.log(playerTwoWin)
        // console.log(winner)
    }else if(square1=="O"&& square4=="O"&& square7=="O"){
        alert('Player Two Won!')
        // playerTwoWin +=
        // console.log(playerTwoWin)
        // console.log(winner)
    }else if(square2=="O"&& square5=="O"&& square8=="O"){
        alert('Player Two Won!')
        // playerTwoWin +=
        // console.log(playerTwoWin)
        // console.log(winner)
    }else if(square3=="O"&& square6=="O"&& square9=="O"){
        alert('Player Two Won!')
        // playerTwoWin +=
        // console.log(playerTwoWin)
        // console.log(winner)
    }else if(square1=="X" && square2=="X" && square3=="X"){
        alert('Player One Won!')
        // playerOneWin +=
        // console.log(playerOneWin)
    }if(square4=="X"&& square5=="X"&& square6=="X"){
        alert('Player One Won!')
        // playerOneWin +=
        // console.log(playerOneWin)
        // console.log(winner)
    }else if(square7=="X" && square8=="X"&& square9=="X"){
        alert('Player One Won!')
        // playerOneWin +=
        // console.log(playerOneWin)
        // console.log(winner)
    }else if(square1=="X" && square5=="X"&& square9=="X"){
        alert('Player One Won!')
        // playerOneWin +=
        // console.log(playerOneWin)
        // console.log(winner)
    }else if(square3=="X" && square5=="X"&& square7=="X"){
        alert('Player One Won!')
        // playerOneWin +=
        // console.log(playerOneWin)
        // console.log(winner)
    }else if(square1=="X"&& square4=="X"&& square7=="X"){
        alert('Player One Won!')
        // playerOneWin +=
        // console.log(playerOneWin)
        // console.log(winner)
    }else if(square2=="X"&& square5=="X"&& square8=="X"){
        alert('Player One Won!')
        // playerOneWin +=
        // console.log(playerOneWin)
        // console.log(winner)
    }else if(square3=="X"&& square6=="X"&& square9=="X"){
        alert('Player One Won!')
        // playerOneWin +=
        // console.log(playerOneWin)
        // console.log(winner)
    }
    // else if(square1 == "O" || square1=="X" && square2 == "O" ||square2=="X" && square3 == "O"&& square3=="X" && square4 == "O"||square4== "X" && square5 == "O"|| square5=="X" && square6 == "X" || square6=="X"&& square7 == "O" ||square7=="X"&& square8 == "O"||square8=="X" && square9 =="O"|| square9=="X") {
    //     alert(`It's a tie!`)
    // }

    // console.log(playerOneWin)
    // console.log(playerTwoWin)
    
}

// function reset(){
//     console.log('ojoenbag')
//     // let newGame= document.querySelectorAll(".square")
//     // newGame.innerHTML= "☺"

// }

// let square1= document.querySelectorAll('#A1')
// let square2= document.querySelectorAll('#A2')
// let square3= document.querySelectorAll('#A3')
// let square4= document.querySelectorAll('#A4')
// let square5= document.querySelectorAll('#A5')
// let square6= document.querySelectorAll('#A6')
// let square7= document.querySelectorAll('#A7')
// let square8= document.querySelectorAll('#A8')
// let square9= document.querySelectorAll('#A9')


// function check4Win(){
//     let playerWon= querySelector('table')
//     if('#A1' =="O" && '#A2'== "O" && '#A3'== "O"){
//         alert('Player One Won!')
//     }     

// }



let playerOne = "O"
let playerTwo = "X"

console.log('boeboufbjaef')

let takenBox

// function clickSquareO(){

//     let selectA1= document.querySelector('#A1')
//     selectA1.addEventListener('click', appendO)

//     let selectA2= document.querySelector('#A2')
//     selectA2.addEventListener('click', appendO)

//     let selectA3= document.querySelector('#A3')
//     selectA3.addEventListener('click', appendO)

//     let selectB1= document.querySelector('#B1')
//     selectB1.addEventListener('click', appendO)

//     let selectB2= document.querySelector('#B2')
//     selectB2.addEventListener('click', appendO)

//     let selectB3= document.querySelector('#B3')
//     selectB3.addEventListener('click', appendO)

//     let selectC1= document.querySelector('#C1')
//     selectC1.addEventListener('click', appendO)
//     console.log('ihihihi')

//     let selectC2= document.querySelector('#C2')
//     selectC2.addEventListener('click', appendO)

//     let selectC3= document.querySelector('#C3')
//     selectC3.addEventListener('click', appendO)

//     console.log('niwofnw')

// }
// combi

// clickSquareO()

// function clickSquare(){
//     let selectA1= document.querySelector('#A1')
//     selectA1.addEventListener('click', appendOorX)

//     let selectA2= document.querySelector('#A2')
//     selectA2.addEventListener('click', appendOorX)

//     let selectA3= document.querySelector('#A3')
//     selectA3.addEventListener('click', appendOorX)

//     let selectA4= document.querySelector('#A4')
//     selectA4.addEventListener('click', appendOorX)

//     let selectA5= document.querySelector('#A5')
//     selectA5.addEventListener('click', appendOorX)

//     let selectA6= document.querySelector('#A6')
//     selectA6.addEventListener('click', appendOorX)

//     let selectA7= document.querySelector('#A7')
//     selectA7.addEventListener('click', appendOorX)

//     let selectA8= document.querySelector('#A8')
//     selectA8.addEventListener('click', appendOoeX)

//     let selectA9= document.querySelector('#A9')
//     selecta9.addEventListener('click', appendOorX)

//     console.log('biebfjaf')
// // 
// }
// clickSquareX()

// function newClick(event) {
//     // if(stalemateNTurn%2=0){
//     this.innerHTML = "O"
//     // }else{
//     //     this.innerHTML= "X"
//     // }

//     // check4Win()

//     console.log('EHEHES')
// }

function appendX(event) {
    this.innerHTML = "X"
}

// function appendX(event){
//     this.innerHTML= "X"
//     check4Win()
//     console.log('njoefbaef')
// }

function tableFilled() {
    return
}

// let checkStalemate
// // checks for stalemate
// let square1
// let square2
// let square3
// let square4
// let square5
// let square6 
// let square7
// let square8
// let square9


// function newClick() {

//     if (this.innerHTML == '') {
//         if (stalemateNTurn == 0)
//             this.innerHTML = "<h1>X</h1>"
//             stalemateNTurn += 1
//     } else if (stalemateNTurn == 1) {
//         if (stalemateNTurn == 1)
//             this.innerHTML = "<h1>O</h1>"
//             stalemateNTurn += 1
//     } else if( stalemateNTurn==2){
//         this.innerHTML = "<h1>X</h1>"
//         stalemateNTurn += 1
//     }else if (stalemateNTurn==3){
//         this.innerHTML = "<h1>O</h1>"
//             stalemateNTurn += 1
//     }else if (stalemateNTurn==4){
//         this.innerHTML = "<h1>X</h1>"
//         stalemateNTurn += 1
//     }else if (stalemateNTurn==5){
//         this.innerHTML = "<h1>O</h1>"
//             stalemateNTurn += 1
//     }else if (stalemateNTurn==6){
//         this.innerHTML = "<h1>X</h1>"
//         stalemateNTurn += 1
//     }else if (stalemateNTurn==7){
//         this.innerHTML = "<h1>O</h1>"
//             stalemateNTurn += 1
//     }else if (stalemateNTurn==8){
//         this.innerHTML = "<h1>X</h1>"
//         stalemateNTurn += 1
//     }
// }

// let stalemateNTurn = 0
// let square1= document.querySelectorAll('#A1')
// let square2= document.querySelectorAll('#A2')
// let square3= document.querySelectorAll('#A3')
// let square4= document.querySelectorAll('#A4')
// let square5= document.querySelectorAll('#A5')
// let square6= document.querySelectorAll('#A6')
// let square7= document.querySelectorAll('#A7')
// let square8= document.querySelectorAll('#A8')
// let square9= document.querySelectorAll('#A9')

// function playGame() {
//     // let startGame= confirm ("Do you want to play a game? \nPress OK to begin game.")
//     // statemateNTurn=0
//     console.log("Line 150" + stalemateNTurn)
//     // console.log(i%2)

//     square1.

//     let selectA1 = document.querySelector('#A1')
//     selectA1.addEventListener('click', newClick)

//     let selectA2 = document.querySelector('#A2')
//     selectA2.addEventListener('click', newClick)

//     let selectA3 = document.querySelector('#A3')
//     selectA3.addEventListener('click', newClick)

//     let selectA4 = document.querySelector('#A4')
//     selectA4.addEventListener('click', newClick)

//     let selectA5 = document.querySelector('#A5')
//     selectA5.addEventListener('click', newClick)

//     let selectA6 = document.querySelector('#A6')
//     selectA6.addEventListener('click', newClick)

//     let selectA7 = document.querySelector('#A7')
//     selectA7.addEventListener('click', newClick)

//     let selectA8 = document.querySelector('#A8')
//     selectA8.addEventListener('click', newClick)

//     let selectA9 = document.querySelector('#A9')
//     selectA9.addEventListener('click', newClick)

//     console.log("Line 181" + stalemateNTurn)


// }



// for (i=1; i<=9; i++){
//     while(stalemateNTurn<=9)
//     let selectA1= document.querySelector('#A1')
//     selectA1.addEventListener('click', appendOorX)

//     let selectA2= document.querySelector('#A2')
//     selectA2.addEventListener('click', appendOorX)

//     let selectA3= document.querySelector('#A3')
//     selectA3.addEventListener('click', appendOorX)

//     let selectA4= document.querySelector('#A4')
//     selectA4.addEventListener('click', appendOorX)

//     let selectA5= document.querySelector('#A5')
//     selectA5.addEventListener('click', appendOorX)

//     let selectA6= document.querySelector('#A6')
//     selectA6.addEventListener('click', appendOorX)

//     let selectA7= document.querySelector('#A7')
//     selectA7.addEventListener('click', appendOorX)

//     let selectA8= document.querySelector('#A8')
//     selectA8.addEventListener('click', appendOoeX)

//     let selectA9= document.querySelector('#A9')
//     selecta9.addEventListener('click', appendOorX)

//     stalemateNTurn ++
//     }

// }




// for (i=0; i<9; i++){
//     if(i%2==0){
//         clickSquareOoX(0)

//     } else if(i%2!=0){
//         clickSquareOorX(1)

//         // counter++
//         // console.log(counter)
//         }  
// counter ++
// console.log(counter)
//         }
//     // if(counter=9){
//     //     alert("The Game is a Stalemate!")
//     // }
// }


// }

// playGame()

// function check4Win(){
//     let playerWon= querySelector('table')
//     if('#A1' =="O" && '#A2'== "O" && '#A3'== "O"){
//         alert('Player One Won!')
//     }     

// }
