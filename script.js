let key;
let min;
let max;
let count;
function genNew(){
    count=0;
     min=document.getElementById("min-val").value;
     max=document.getElementById("max-val").value;
    if(min==""||max==""){
        alert("Enter both min and max value");
        return;
    }
    min=parseInt(min);
    max=parseInt(max);
    if(max<=min){
        alert("Maximum should be grater than Minimum");   
        return; 
    }
    key=Math.floor(Math.random()*(max-min+1))+min;
    document.querySelector(".status").textContent="Value generated! Start guessing 🎯";
}
function checkVal(){
    let guess=document.getElementById("guessed-val").value;
    let msg=document.querySelector(".msg").textContent ;
    if(guess==""){
        alert("Guess the number first !!");
    }
    guess=parseInt(guess);
    if(guess>max||guess<min){
        alert("Value is not with in the range");
        return;
    }
    count++;
    if(guess===key){
        document.querySelector(".status").textContent=`You won the game 🥳 after ${count} number of guesses `;
        return;
    }else if(guess>key){
        document.querySelector(".status").textContent="Your guess is greater than the value ⬆️";
    }else{
        document.querySelector(".status").textContent="Your guess is smaller than the value ⬇️";
    }
}