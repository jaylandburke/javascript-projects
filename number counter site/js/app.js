let plusBtn = document.getElementById("plus-btn")
let minusBtn = document.getElementById("minus-btn")
let resetBtn = document.getElementById("reset-btn")
let counter = document.getElementById("counter")
let count = 0

// when clicked add, subtract, or reset.
plusBtn.addEventListener('click', ()=>{
    count ++;
    counter.innerHTML = count;
})

minusBtn.addEventListener('click', ()=>{
    count --;
    counter.innerHTML = count;
})

resetBtn.addEventListener('click', ()=> {
    count = 0;
    counter.innerHTML = 0;
})