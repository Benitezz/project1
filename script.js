let money = 0;

class Coffee {
    constructor(name, value){
        this.name = name;
        this.value = value;
    }
}

let drip = new Coffee('Drip', 2);
let espresso = new Coffee('Espresso', 3);
let cortado = new Coffee('Cortado', 4);
let cappucino = new Coffee('Cappucino', 5);
let latte = new Coffee('Latte', 6)
let tea = new Coffee('Tea', 7);


// document.getElementById("drip").addEventListener("click",sellDrip)

// function sellDrip(){
//     money = money + drip;
//     let score = document.querySelector(".score");
//     score.innerHTML = (parseInt(score.innerHTML)+ drip).toString().padStart(4,"0")
//     console.log(money)
//     return money;
// }

// document.getElementById("espresso").addEventListener("click",sellEspresso)

// function sellEspresso(){
//     money = money + espresso;
//     let score = document.querySelector(".score");
//     score.innerHTML = (parseInt(score.innerHTML)+ espresso).toString().padStart(4,"0")
//     console.log(money)
//     return money;
// }

document.getElementById("drip").addEventListener("click",function(){
    sellCoffee(drip.value)
})


document.getElementById("espresso").addEventListener("click",function(){
    sellCoffee(espresso.value)
})

document.getElementById("cortado").addEventListener("click",function(){
    sellCoffee(cortado.value)
})

document.getElementById("cappucino").addEventListener("click",function(){
    sellCoffee(cappucino.value)
})

document.getElementById("latte").addEventListener("click",function(){
    sellCoffee(latte.value)
})

document.getElementById("tea").addEventListener("click",function(){
    sellCoffee(tea.value)
})

function sellCoffee(cost){
    money = money + cost;
    let score = document.querySelector(".score");
    score.innerHTML = (parseInt(score.innerHTML)+ cost).toString().padStart(4,"0")
    console.log(money)
    return money;
}