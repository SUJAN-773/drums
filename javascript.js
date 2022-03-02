for( var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        makeSound(this.innerHTML);
    });
}
function makeSound(key){
    switch(key){
        case "w":
            soundByClickW();
            break;
        case "a":
            soundByClickA();
            break;
        case "s":
            soundByClickS();
            break;
        case "d":
            soundByClickD();
            break;
        case "j":
            soundByClickJ();
            break;
        case "k":
            soundByClickK();
            break;
        case "l":
            soundByClickL();
            break;
        default:
            alert("press a valid drum");
    }
}
function soundByClickW(){
    var tom1=new Audio("sounds/tom-1.mp3");
    tom1.play();
}
function soundByClickA(){
    var tom2=new Audio("sounds/tom-2.mp3");
    tom2.play();
}
function soundByClickS(){
    var tom3=new Audio("sounds/tom-3.mp3");
    tom3.play();
}
function soundByClickD(){
    var tom4=new Audio("sounds/tom-4.mp3");
    tom4.play();
}
function soundByClickJ(){
    var snare=new Audio("sounds/snare.mp3");
    snare.play();
}
function soundByClickK(){
    var crash=new Audio("sounds/crash.mp3");
    crash.play();
}
function soundByClickL(){
    var kick=new Audio("sounds/kick-bass.mp3");
    kick.play();
}
document.addEventListener("keydown", function(event){
    makeSound(event.key);
});
