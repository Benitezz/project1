let money = 0;
const but1 = document.querySelector('#upgrade');
const but2 = document.querySelector('#noUpgrade');
let textBox = document.querySelector('.textBox');
but1.style.display = 'none';
but2.style.display = 'none';

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

let coffeeValues = [];
coffeeValues.push(drip);
coffeeValues.push(espresso);
coffeeValues.push(cortado);
coffeeValues.push(cappucino);
coffeeValues.push(latte);
coffeeValues.push(tea);

coffeeValues.forEach((element,index,array) =>{
    coffeeValues[index].value=coffeeValues[index].value*2;
    console.log(coffeeValues[index].value)
    // coffeeValues = coffeeValues[index].value * 2;
})



// document.getElementById("drip").addEventListener("click",sellDrip)

// function sellDrip(){
//     money = money + drip;
//     let score = document.querySelector(".score");
//     score.innerHTML = (parseInt(score.innerHTML)+ drip).toString().padStart(4,"0")
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

function upgradeChoice (){
    textBox.innerHTML = 'You have upgraded your shop!'

}


function sellCoffee(cost){
    money = money + cost;
    let score = document.querySelector(".score");
    score.innerHTML = (parseInt(score.innerHTML)+ cost).toString().padStart(4,"0")
    console.log(money)
    // return money;
   if(money >= 100 && money <= 200){
       textBox.innerHTML = `You have $${money}`
       but1.style.display = 'block';
       but2.style.display = 'block';

        but1.addEventListener('click', () => {
            console.log('The button had been clicked');
            but1.style.display = 'none';
            but2.style.display = 'none';
        })
   }else{
    but1.style.display = 'none';
    but2.style.display = 'none';
   }
}

