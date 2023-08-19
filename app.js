
let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];

let started = false;
let level =0;

let h2=document.querySelector("h2");




document.addEventListener("keypress" , function () {
    if(started == false){
        console.log("game is started");
        started = true;
        levelUp(); 
    }
});

function gameFlash(btn) {       
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250);
}
function userflash(btn) {          
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    },250);
}





function levelUp() {
    userseq = [];
    level++;
    h2.innerText=`level ${level}`;

let randIdx = Math.floor(Math.random() * 4);
let randColor = btns[randIdx];  
let randBtn = document.querySelector(`.${randColor}`);     

console.log(randIdx);
console.log(randColor);
console.log(randBtn);


gameseq.push(randBtn); 
console.log(gameseq);



gameFlash(randBtn); 

}

function checkAns(idx){
    // console.log("curr level:", level);
   if(userseq[idx] === gameseq[idx]){
    if(userseq.length == gameseq.length){
        setTimeout(levelUp,1000);
    }
   } else{
    h2.innerHTML = `game over! your score was <b> ${level} </b>  <br>  press any key to start.`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function (){
        document.querySelector("body").style.backgroundColor="white";
    } , 150 );

    reset();
   }
}


function btnpress() {
    console.log(this);
    let btn = this;  
    userflash(btn) 
usercolor = btn.getAttribute("id"); 
console.log(usercolor);
userseq.push(usercolor);
checkAns(userseq.length-1);       
}


let allbtns = document.querySelectorAll(".btn");
for(let btn of allbtns) {       

    btn.addEventListener("click",btnpress);  
}

function reset(){
    started=false;
    gameseq =[];
    userseq =[];
    level =0;
}