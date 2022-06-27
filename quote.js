const words = ["Where would we be without salt?", "Its better to be a warrior in a garden than to be a gardener in the battlefield", "Everyone is naked in the river of truth", "The universe is full of magical things patiently waiting for our wits to grow sharper", "Reality leaves a lot to the imagination"];
const randomindex = Math.floor(Math.random()*words.length); 
console.log(randomindex);
const quote = document.querySelector(".quote")
quote.textContent = `${words[randomindex]}`

const red = document.querySelector(".red1")
const blue = document.querySelector(".blue1")
const green = document.querySelector(".green1")
const violet = document.querySelector(".violet1")

red.addEventListener("click",function(){
    quote.classList.add("red");
    quote.classList.remove("blue", "green", "violet");
    // quote.classList.remove("green");
    // quote.classList.remove("violet");

});

blue.addEventListener("click",function(){
    quote.classList.add("blue");
    quote.classList.remove("red", "green", "violet");
    // quote.classList.remove("green");
    // quote.classList.remove("violet");

});

green.addEventListener("click",function(){
    quote.classList.add("green");
    quote.classList.remove("blue", "red", "violet");
    // quote.classList.remove("red");
    // quote.classList.remove("violet");

});

violet.addEventListener("click",function(){
    quote.classList.remove("blue");
    quote.classList.remove("green");
    quote.classList.remove("red");
    quote.classList.add("violet");
});




