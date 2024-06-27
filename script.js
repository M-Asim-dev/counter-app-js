let countValue = document.getElementById("countDown");
let resetValue = document.querySelector(".resetValue");
let count = 0;
let interval;
let running = false;

const start = () => {
    if(!running){
        interval = setInterval( ()=> {
            countValue.innerText = count++;
        } , 500)
        running = true;
    }  
}

const stop = () => {
    clearInterval(interval)
    running = false;
}

const reset = () => {
    clearInterval(interval);
    count = 0;
    countValue.innerText = count;
    running = false;
}

const getTime = () => {
    let pElem = document.createElement("p");
    pElem.innerText = `Your Count Stop At ${count}`;
    resetValue.appendChild(pElem);
}

const clear = () => {
    resetValue.innerHTML = "";
}

document.querySelector(".start_btn").addEventListener("click" , ()=> {
    start();
})
document.querySelector(".stop_btn").addEventListener("click" , ()=> {
    stop();
})
document.querySelector(".reset_btn").addEventListener("click" , ()=> {
    reset();
})
document.querySelector(".time_btn").addEventListener("click" , ()=> {
    getTime();
})
document.querySelector(".clear_btn").addEventListener("click" , ()=> {
    clear();
})