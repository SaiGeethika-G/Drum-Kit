var btns=document.querySelectorAll(".drum");
var audio = new Audio('sounds\kick-bass.mp3');
audio.play();
for(var i=0;i<btns.length;i++){
    btns[i].addEventListener("click",clickSound);  
    btns[i].addEventListener("keypress",typeSound);
    //document.querySelectorAll(".drum")[i].addEventListener("click",playSound);
}

/*function handleClick(){
    alert("I got clicked!");
}*/

//Handling mouse click 
function clickSound(){
    var letter=this.innerHTML;
    playMusic(letter);
    buttonAnimation(letter);
}

//Handling keyboard press
function typeSound(event){
    var alph=event.key;
    playMusic(alph);
    buttonAnimation(alph);
}
function playMusic(letter){
    switch(letter){
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break; 
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break; 
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break; 
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break; 
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break; 
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break; 
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break; 
        default:
            alert("Unidentified button"); 
    }
}

function buttonAnimation(l){
    //document.querySelector("."+l).style.color="yellow";
    activeButton=document.querySelector("."+l)
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    })
}
