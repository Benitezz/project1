let money = 0;
let drip = 2;

document.getElementById("drip").addEventListener("click",clickFunc)

function clickFunc(){
    money = money + drip;
    let score = document.querySelector(".score");
    score.innerHTML = (parseInt(score.innerHTML)+ drip).toString().padStart(4,"0")
    console.log(money)
}


