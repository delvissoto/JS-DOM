const body = document.querySelector('body')
const h1 = document.querySelector('h1')
const btn = document.querySelector('button')

btn.addEventListener('click', () =>{
    let num1 = Math.floor(Math.random()* 256)
    let num2 = Math.floor(Math.random()* 256)
    let num3 = Math.floor(Math.random()* 256)
    h1.innerText = `rgb: ${num1}, ${num2}, ${num3}`
    body.style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`

})