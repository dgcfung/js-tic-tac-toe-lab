// Reset button;

// let resetButton= document.querySelector('reset-button')
// console.log(resetButton)

// resetButton.addEventListener('click', resetGame)

// function resetGame(){
//     // resets game, run script again
// }

let playerOne= "O"
let playerTwo= "X"

console.log('boeboufbjaef')

let takenBox

function clickSquareO(){
 
    let selectA1= document.querySelector('#A1')
    selectA1.addEventListener('click', appendO)

    let selectA2= document.querySelector('#A2')
    selectA2.addEventListener('click', appendO)

    let selectA3= document.querySelector('#A3')
    selectA3.addEventListener('click', appendO)

    let selectB1= document.querySelector('#B1')
    selectB1.addEventListener('click', appendO)

    let selectB2= document.querySelector('#B2')
    selectB2.addEventListener('click', appendO)

    let selectB3= document.querySelector('#B3')
    selectB3.addEventListener('click', appendO)

    let selectC1= document.querySelector('#C1')
    selectC1.addEventListener('click', appendO)
    console.log('ihihihi')

    let selectC2= document.querySelector('#C2')
    selectC2.addEventListener('click', appendO)

    let selectC3= document.querySelector('#C3')
    selectC3.addEventListener('click', appendO)
    
    console.log('niwofnw')

}

clickSquareO()

function clickSquareX(){
    let selectA1= document.querySelector('#A1')
    selectA1.addEventListener('click', appendX)

    let selectA2= document.querySelector('#A2')
    selectA2.addEventListener('click', appendX)

    let selectA3= document.querySelector('#A3')
    selectA3.addEventListener('click', appendX)

    let selectB1= document.querySelector('#B1')
    selectB1.addEventListener('click', appendX)

    let selectB2= document.querySelector('#B2')
    selectB2.addEventListener('click', appendX)

    let selectB3= document.querySelector('#B3')
    selectB3.addEventListener('click', appendX)

    let selectC1= document.querySelector('#C1')
    selectC1.addEventListener('click', appendX)

    let selectC2= document.querySelector('#C2')
    selectC2.addEventListener('click', appendX)

    let selectC3= document.querySelector('#C3')
    selectC3.addEventListener('click', appendX)

    console.log('biebfjaf')
// 
}
// clickSquareX()

function appendO(event){
    this.innerHTML= "O"
    check4Win()
    console.log('EHEHES')
}

function appendX(event){
    this.innerHTML= "X"
    check4Win()
    console.log('njoefbaef')
}

function tableFilled(){
    return
}



function playGame(){
    let startGame= confirm ("Do you want to play a game? \nPress OK to begin game.")
    let counter=0
// checks to see that board isn't full(stalemate)
while(counter<9){
    
    for (i=0; i<9; i++){
        if(i%2==0){
            clickSquareO()
            
        } else if(i%2!=0){
            clickSquareX()
           
            // counter++
            // console.log(counter)
            }  
    counter ++
    console.log(counter)
        }
    if(counter=9){
        alert("The Game is a Stalemate!")
    }
}

  
}

playGame()

// function check4Win(){
//     let playerWon= querySelector('table')
//     if('#A1' =="O" && '#A2'== "O" && '#A3'== "O"){
//         alert('Player One Won!')
//     }     

// }
