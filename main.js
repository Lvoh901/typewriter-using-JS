//we are using let because it can be re-assigned as compared to const that cannot be re-assigned//
let text = document.getElementById("Typewriter");

const textArray = text.textContent.split("");

console.log(textArray);
let timeLooper;

text.innerHTML = "";

console.log(text);

function typewriterEffect(){
    if(textArray.length > 0){
        text.innerHTML += textArray.shift();
    } else{
        clearTimeout()
    }

    timeLooper = setTimeout("typewriterEffect()", Math.floor(Math.random() * (200, 250)));
}

typewriterEffect();