let boxes=document.querySelectorAll('.box')
let resetBtn=document.querySelector("#reset-btn")
let newgameBtn=document.querySelector("#new-btn")
let msgContainer=document.querySelector('.msg-container')
let msg=document.querySelector("#msg")

// this variable will keep track of which player turn is playerO,playerX
let turnO=true ;

//it will be 2d array
const winningPatters=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]

const resetGame=()=>{
    turnO=true 
    enableBoxes() 
    msgContainer.classList.add('hide')
}

//when i will click on one button->div->box something should happen
// so addEventListener
//9 box do used forEach loop on Boxes
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        //console.log('box was clicked')

        if(turnO===true){
            box.innerText='O'
            turnO=false ;// next time there will turn of playerX
        }else{
            box.innerText='X'
            turnO=true
        }
        box.disabled=true
        checkWinner()
    })
})

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true 
        //box.innerText=""
    }
}

const enableBoxes=()=>{
   for(let box of boxes){
    box.disabled=false ;
    box.innerText=""
   }
}

const showWinner=(winner)=>{
    msg.innerHTML=`congratulation winner is ${winner}`
    msgContainer.classList.remove('hide')
    disableBoxes() 
}

const checkWinner=()=>{
    //if position1,pos2,pos2 has same element/equal value then that ele will be winner
    for(let pattern of winningPatters){
       // console.log(pattern)
        //console.log(boxes[pattern[0]].innerText)

        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText ;
        let pos3Val=boxes[pattern[2]].innerText ;

        if(pos1Val!=='' && pos2Val!=='' && pos3Val!==''){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
               console.log('winner is ',pos1Val)
               showWinner(pos1Val)
            }
        }
    }
}


newgameBtn.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)