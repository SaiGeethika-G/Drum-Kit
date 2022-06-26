var btns=document.querySelectorAll(".drum");
var audio = new Audio('sounds\kick-bass.mp3');
audio.play();
for(var i=0;i<btns.length;i++){
    btns[i].addEventListener("click",playSound);
    //document.querySelectorAll(".drum")[i].addEventListener("click",playSound);
    
}
function handleClick(){
    alert("I got clicked!");
}
function playSound(){
    //var audio = new Audio('sounds/tom-1.mp3');
    //audio.play();
    alert(this.style.color="green");
}