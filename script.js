var boxes = document.querySelectorAll(".box")
var resetBtn = document.querySelector("#reset")

var msgCon=document.querySelector(".msg-container")
var newGame=document.querySelector("#newGame")
var msg=document.querySelector("#msg")

let turnO = true;

const winPatterns = [ //Array to Store Win Patterns
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];



const disabledBoxes=()=>{

    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{

    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}

const resetBox=()=>{

   turnO=true;
enableBoxes();
msgCon.style.display="none";
  resetBtn.style.disabled="none";
}


boxes.forEach((box) => {

    box.addEventListener("click", (e) => {
        if (turnO) {
            box.innerHTML = "O";
            turnO = false;
        }
        else {
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;
        // Daibles the button after presssing it Once

        checkWinner();
    })

})

const checkWinner = () => {

    for (let pattern of winPatterns) {

        let position1val = boxes[pattern[0]].innerHTML;
        let position2val = boxes[pattern[1]].innerHTML;
        let position3val = boxes[pattern[2]].innerHTML;

        if (position1val != "" && position2val != "" && position3val != "") {


            if (position1val === position2val && position2val === position3val){

                
                showWinner(position1val);
            }
    }

    }
}

const showWinner=(winner)=>{
msg.innerHTML=`Congratulation, Winner is  ${winner}` ;

msgCon.style.display="block";

disabledBoxes();
}

newGame.addEventListener("click",resetBox);
resetBtn.addEventListener("click",resetBox);




