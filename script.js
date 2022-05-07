let money = 0;
let upgradeStatus = 0;
let winCount = 0;
const but1 = document.querySelector('#upgrade');
const but2 = document.querySelector('#noUpgrade');
let textBox = document.querySelector('.textBox');

but1.style.display = 'none';
but2.style.display = 'none';


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

document.querySelector('#dripPrice').innerHTML = '$' + coffeeValues[0].value;
document.querySelector('#espressoPrice').innerHTML = '$' + coffeeValues[1].value;
document.querySelector('#cortadoPrice').innerHTML = '$' + coffeeValues[2].value;
document.querySelector('#cappuccinoPrice').innerHTML = '$' + coffeeValues[3].value;
document.querySelector('#lattePrice').innerHTML = '$' + coffeeValues[4].value;
document.querySelector('#teaPrice').innerHTML = '$' + coffeeValues[5].value;


function upgradeChoice(){
    coffeeValues.forEach((element,index,array) =>{
        coffeeValues[index].value=coffeeValues[index].value*2;

        document.querySelector('#dripPrice').innerHTML = '$' + coffeeValues[0].value;
        document.querySelector('#espressoPrice').innerHTML = '$' + coffeeValues[1].value;
        document.querySelector('#cortadoPrice').innerHTML = '$' + coffeeValues[2].value;
        document.querySelector('#cappuccinoPrice').innerHTML = '$' + coffeeValues[3].value;
        document.querySelector('#lattePrice').innerHTML = '$' + coffeeValues[4].value;
        document.querySelector('#teaPrice').innerHTML = '$' + coffeeValues[5].value;
        
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

document.querySelector('.mug1').addEventListener('click', ()=>{
    upgradeChoice();
    upgradeStatus++;
    textBox.innerHTML = 'You have found the secret bonus!';
    setTimeout(()=>{
        textBox.innerHTML='';
    },3000);
})

function addUpgrade(){
    upgradeStatus++;
}


// let mugBonus2 = document.querySelector('.mug2');
but1.addEventListener('click', ()=>{
    upgradeChoice();
    addUpgrade();
    textBox.innerHTML = 'You have upgraded your shop!';
    but1.style.display = 'none';
    but2.style.display = 'none';
    setTimeout(()=>{
        textBox.innerHTML='';
    },1000);
    return
},true);

but2.addEventListener('click', ()=>{
    textBox.innerHTML = `You have decided to not buy a new store!` 
    but1.style.display = 'none';
    but2.style.display = 'none';
    setTimeout(()=>{
        textBox.innerHTML='';
    },1000);
    upgradeStatus++;
});

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

   }else if(money >=1000 && money <= 1100 && upgradeStatus != 2){
    textBox.innerHTML = `You now have $${money} and a chance to buy a new store!`
    but1.style.display = 'block';
    but2.style.display = 'block';


   }else if(money >= 3000 && money <= 3100 && upgradeStatus != 3){
    textBox.innerHTML = `You now have $${money} and a chance to buy a new store!`
    but1.style.display = 'block';
    but2.style.display = 'block';


   } else if(money >= 5000 && money <= 5100 && upgradeStatus != 4){
    textBox.innerHTML = `You now have $${money} and a chance to buy a new store!.`
    but1.style.display = 'block';
    but2.style.display = 'block';

   }else if(money >= 10000 && money <= 10200 && upgradeStatus != 5){
    textBox.innerHTML = `You now have $${money} and a chance to buy a new store!.`
    but1.style.display = 'block';
    but2.style.display = 'block';

   }else if(money >= 15000 && money <= 15100 && upgradeStatus != 6){
   textBox.innerHTML = `You now have $${money} and a chance to buy a new store!.`
    but1.style.display = 'block';
    but2.style.display = 'block';

   }else if(money >= 20000 && money <= 20500 && upgradeStatus != 7){
    textBox.innerHTML = `You now have $${money} and a chance to buy a new store!.`
    but1.style.display = 'block';
    but2.style.display = 'block';

   }else if(money >= 25000 && money <= 30500 && upgradeStatus != 8){
    textBox.innerHTML = `You now have $${money} and a chance to buy a new store!.`
    but1.style.display = 'block';
    but2.style.display = 'block';

   }else if(dripCount === 99){
       textBox.innerHTML= `You've sold 100 cups of coffee! Enjoy this free bonus!`
       upgradeChoice();
       setTimeout(()=>{
        textBox.innerHTML='';
        },3000);

   }else if(espressoCount === 99){
       textBox.innerHTML= `You've sold 100 espressos! Enjoy this free bonus!`
       upgradeChoice();
       setTimeout(()=>{
        textBox.innerHTML='';
        },3000);

   }else if(cortadoCount === 99){
    textBox.innerHTML= `You've sold 100 cortados! Enjoy this free bonus!`
    upgradeChoice();
    setTimeout(()=>{
        textBox.innerHTML='';
        },3000);
    
    }else if(cappucinoCount === 99){
        textBox.innerHTML= `You've sold 100 cappuccinos! Enjoy this free bonus!`
        upgradeChoice();
        setTimeout(()=>{
            textBox.innerHTML='';
            },3000);
        
    }else if(latteCount === 99){
        textBox.innerHTML= `You've sold 100 lattes! Enjoy this free bonus!`
        upgradeChoice();
        setTimeout(()=>{
            textBox.innerHTML='';
            },3000);
        
    }else if(teaCount === 99){
        textBox.innerHTML= `You've sold 100 cups of tea! Enjoy this free bonus!`
        upgradeChoice();
        setTimeout(()=>{
            textBox.innerHTML='';
            },3000);
        
    }else if(money >= 50000 && money <= 55000 && upgradeStatus != 9){
        textBox.innerHTML = 'Is your finger tired? Maybe you should have a cup of hot coffee? Hint hint'
        setTimeout(()=>{
            textBox.innerHTML='';
            },3000);
    }else if(money >= 10000000 && winCount !=1){
        textBox.innerHTML = `You've made over $10.000.000 selling coffee! You're super rich and can retire now! Congratulations!`
        setTimeout(()=>{
            textBox.innerHTML='';
            },3000);
    }

}

// but1.style.display = 'none';
// but2.style.display = 'none';

