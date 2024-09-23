const image = document.getElementsByClassName('image-container1')
const button = document.querySelector('button');

button.onclick = () =>{
    
}
document.querySelector('img').style.borderRadius = "50%"

// image.setAttribute('class', 'Purple')

// image.classList.add('orange')
// image.classList.remove('orange')
// image.classList.add('orange')

// image.classList.toggle('purple') //  toggle works like a boolean that removes and add the action that is needed and in this example is the purple class. but can be used for more things. 



//  In the console we can use window.getComputedStyle.(h1).color to check the style property chosen for the html tag, ID or Class name. 

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOUR CODE GOES HERE:
const rainbow = document.querySelectorAll("span")
let num = 0
for(let span of rainbow){
    
    span.style.color = `${colors[num]}`
    num++
}

const secondImage = document.querySelector('.image-container');
secondImage.parentElement.style.backgroundColor = "green"