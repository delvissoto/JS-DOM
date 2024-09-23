const form = document.getElementById('form');
const input = document.getElementById('input');
const ul = document.getElementById('ul');



form.addEventListener('submit', (e) =>{
e.preventDefault();
const li = document.createElement('li')
li.innerText = input.value;
ul.appendChild(li);
input.value = ''
} )

ul.addEventListener('click', (e) =>{
   e.target.nodeName ==='LI' && e.target.remove()
})

