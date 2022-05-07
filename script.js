let money = 0;
let upgradeStatus = 0;
const but1 = document.querySelector('#upgrade');
const but2 = document.querySelector('#noUpgrade');
let textBox = document.querySelector('.textBox');
let dripSold = document.querySelector("#dripSold");
let espressoSold = document.querySelector('#espressoSold');
let cortadoSold = document.querySelector('#cortadoSold');
let cappucinoSold = document.querySelector('#cappucinoSold');
let latteSold = document.querySelector('#latteSold');
let teaSold = document.querySelector('#teaSold');
let dripCount = 0;
let espressoCount = 0;
let cortadoCount = 0;
let cappucinoCount = 0;
let latteCount = 0;
let teaCount = 0;


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

function upgradeChoice(){
    textBox.innerHTML = 'You have upgraded your shop!';
    coffeeValues.forEach((element,index,array) =>{
        coffeeValues[index].value=coffeeValues[index].value*2;
        // console.log(coffeeValues[index].value)
        
    })
}

document.getElementById("drip").addEventListener("click",function(){
    sellCoffee(drip.value)
    dripCount++;
    dripSold.innerHTML= dripCount;
})

document.getElementById("espresso").addEventListener("click",function(){
    sellCoffee(espresso.value)
    espressoCount++;
    espressoSold.innerHTML = espressoCount;
})

document.getElementById("cortado").addEventListener("click",function(){
    sellCoffee(cortado.value)
    cortadoCount++;
    cortadoSold.innerHTML = cortadoCount;
})

document.getElementById("cappucino").addEventListener("click",function(){
    sellCoffee(cappucino.value)
    cappucinoCount++;
    cappucinoSold.innerHTML = cappucinoCount;
})

document.getElementById("latte").addEventListener("click",function(){
    sellCoffee(latte.value)
    latteCount++;
    latteSold.innerHTML = latteCount;
})

document.getElementById("tea").addEventListener("click",function(){
    sellCoffee(tea.value)
    teaCount++;
    teaSold.innerHTML = teaCount;
})


function sellCoffee(cost){
    money = money + cost;
    let score = document.querySelector(".score");
    score.innerHTML = (parseInt(score.innerHTML)+ cost).toString().padStart(4,"0")
    let storesOwned = document.querySelector(".stores");
    storesOwned.innerHTML = (parseInt(upgradeStatus)).toString().padStart(4,"0")
    // return money;
   if(money >= 100 && money <= 200 && upgradeStatus != 1){
       textBox.innerHTML = `You have $${money} and a chance to buy a new store!`
       but1.style.display = 'block';
       but2.style.display = 'block';

        but1.addEventListener('click', () => {
            upgradeChoice();
            upgradeStatus++;
            console.log(upgradeStatus);
            console.log(coffeeValues[0].value)
            but1.style.display = 'none';
            but2.style.display = 'none';
            setTimeout(()=>{
                textBox.innerHTML='';
            },1000);
        })

        but2.addEventListener('click', ()=>{
            textBox.innerHTML = `You have decided to not buy a new store!`
            upgradeStatus++;
            console.log(upgradeStatus)
            but1.style.display = 'none';
            but2.style.display = 'none';
            setTimeout(()=>{
                textBox.innerHTML='';
            },1000);
        })
   }else if(money >=1000 && money <= 1100 && upgradeStatus != 2){
    textBox.innerHTML = `You now have $${money} and a chance to buy a new store!`
    but1.style.display = 'block';
    but2.style.display = 'block';

    // but1.addEventListener('click', ()=>{
    //     upgradeChoice();
    //     // upgradeStatus++;
    //     but1.style.display = 'none';
    //     but2.style.display = 'none';
    //     setTimeout(()=>{
    //         textBox.innerHTML='';
    //     },1000);
    // })

   }else if(money >= 5000 && money <= 5100 && upgradeStatus != 3){
    textBox.innerHTML = `You now have $${money} and a chance to buy a new store!`
    but1.style.display = 'block';
    but2.style.display = 'block';

    // but1.addEventListener('click', ()=>{
    //     upgradeChoice();
    //     // upgradeStatus++;
    //     but1.style.display = 'none';
    //     but2.style.display = 'none';
    //     setTimeout(()=>{
    //         textBox.innerHTML='';
    //     },1000);
    // })

   } else if(money >= 10000 && money <= 10100 && upgradeStatus != 4){
    textBox.innerHTML = `You now have $${money} and a chance to upgrade a fourth time.`
    but1.style.display = 'block';
    but2.style.display = 'block';
   }
}

// but1.style.display = 'none';
// but2.style.display = 'none';

