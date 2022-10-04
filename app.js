let counter = 0   

const value = document.getElementById('contador')

const btnIncrement = document.getElementById('increment')

const btnDecrement = document.getElementById('decrement')

const btnReset = document.getElementById('reset')

//Event handler
function increment (){
counter++
value.innerHTML = counter
}


//evento Event listener
btnDecrement.addEventListener('click',function(){
    if(counter > 0){ 
    counter--
    value.innerHTML = counter
}
})

//evento Event listener
btnReset.addEventListener('click',function(){
    counter = 0
    value.innerHTML = counter
})