const ram_8 = document.getElementById('RAM_8GB');
const ram_16 = document.getElementById('RAM_16GB');
const ssd_256 = document.getElementById('SSD_256GB');
const ssd_512 = document.getElementById('SSD_512GB');
const ssd_1t = document.getElementById('SSD_1TB');
const deliveryFree = document.getElementById('delivery_free');
const deliveryCharge = document.getElementById('delivery_charge');

const extraRam = document.getElementById('ram_extra');
const extraSSD = document.getElementById('ssd_extra');
const extraDelivery = document.getElementById('charge_extra');

const costTotal = document.getElementById('total_cost');

let ramCost = 0;
let ssdCost = 0;
let deleveryCost = 0;
let totalCost = 0;

// function ramCost8(){
//     ramCost = 0;
// }

// function ramCost16(){
//     ramCost = 180;
// }

// function ssdCost256(){
//     ssdCost = 0;
// }
// function ramCost512(){
//     ssdCost = 100;
// }
// function ramCost1T(){
//     ssdCost = 180;
// }

// function deliveryCostFree(){
//     deleveryCost = 0;
// }
// function deliveryCostCharge(){
//     deleveryCost = 20;
// }

ram_8.addEventListener('click',function(){
    extraRam.innerText = '0';
    ramCost = 0;

    totalCost = (ramCost + ssdCost + deleveryCost + 1299);
    costTotal.innerText= totalCost;
})

function ramCost16(){
    extraRam.innerText = '180';
    ramCost = 180;

    totalCost = (ramCost + ssdCost + deleveryCost + 1299);
    costTotal.innerText= totalCost;
}

// ram_16.addEventListener('click',function(){
//     extraRam.innerText = '180';
//     ramCost = 180;

//     totalCost = (ramCost + ssdCost + deleveryCost + 1299);
//     costTotal.innerText= totalCost;
// })

ssd_256.addEventListener('click',function(){
    extraSSD.innerText = '0';
    ssdCost = 0;

    totalCost = (ramCost + ssdCost + deleveryCost + 1299);
    costTotal.innerText= totalCost;
})

ssd_512.addEventListener('click',function(){
    extraSSD.innerText = '100';
    ssdCost = 100;

    totalCost = (ramCost + ssdCost + deleveryCost + 1299);
    costTotal.innerText= totalCost;
})

ssd_1t.addEventListener('click',function(){
    extraSSD.innerText = '180';
    ssdCost = 180;

    totalCost = (ramCost + ssdCost + deleveryCost + 1299);
    costTotal.innerText= totalCost;
})

deliveryFree.addEventListener('click',function(){
    extraDelivery.innerText = '0';
    deleveryCost = 0;

    totalCost = (ramCost + ssdCost + deleveryCost + 1299);
    costTotal.innerText= totalCost;
})

deliveryCharge.addEventListener('click',function(){
    extraDelivery.innerText = '20';
    deleveryCost = 20;

    totalCost = (ramCost + ssdCost + deleveryCost + 1299);
    costTotal.innerText= totalCost;
})


function applyPomoCode(){
    let x;
    if(document.getElementById('inputPomo').value == 'stevekaku'){
        x = parseFloat(costTotal.innerText);
        x -= ((x*20)/100);
        console.log(x);
    }
    document.getElementById('total_price').innerText = x;
}