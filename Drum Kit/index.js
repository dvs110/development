//adding event listner (it listens to command)
// document.querySelector("button").addEventListener("click",handleclick);   //targetting first button, it listenes to click,,,there are many types of listner and they take two parameters
// function handleclick(){
// alert("clicked");}
//   addEventListenere means that what event it should listen too and what function it should perform after listening



 // another way of doing it by using anonymous function
// document.querySelector("button").addEventListener("click",function()
// {
//   alert("clicked");
// }
// );




// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click",function()
//   {
//  alert("clicked");
//     var audio=new Audio("sounds/tom-1.mp3");
//     audio.play();
//   }
// );}



function buttonAnimation(currentkey){

var activity=document.querySelector("."+currentkey);// we have to add "." //its a way of writing

activity.classList.add("pressed");//adding class pressed
setTimeout(function(){  activity.classList.remove("pressed");},//adding class pressed{first parameter of setTimeout}
100);//second parameter of setTimeout
}



// now adding addEventListener to all buttons
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function()
   {
//  alert("clicked");
//"this" it gives current buttons
// this.style.color="white"; It will change the color of current button after getting clicked
  var buttoninnerhtml=this.innerHTML;//"this.innerhtml " gives of current button"
  buttonAnimation(buttoninnerhtml);//for animation
  switch (buttoninnerhtml) {
  case "w":
  var audio1=new Audio("sounds/tom-1.mp3");
  audio1.play();
  break;
  case "a":
  var audio2=new Audio("sounds/tom-2.mp3");
  audio2.play();
  break;
  case "s":
  var audio3=new Audio("sounds/tom-3.mp3");
  audio3.play();
  break;
  case "d":
  var audio4=new Audio("sounds/tom-4.mp3");
  audio4.play();
  break;
  case "j":
  var audio5=new Audio("sounds/snare.mp3");
  audio5.play();
  break;
  case "k":
  var audio6=new Audio("sounds/crash.mp3");
  audio6.play();
  break;
  case "l":
  var audio7=new Audio("sounds/kick-bass.mp3");
  audio7.play();
  break;

  default:
console.log(buttoninnerhtml);
}
   }
 );}


//now if we want to hear sound by just pressing key in keyboard
document.addEventListener("keypress",function(event)//"event" tells which key is pressed or trigger keypress
{
  buttonAnimation(event.key);
makesound(event.key)
}
);
function makesound(key){

  switch (key) {
    case "w":
    var audio1=new Audio("sounds/tom-1.mp3");
    audio1.play();
    break;
    case "a":
    var audio2=new Audio("sounds/tom-2.mp3");
    audio2.play();
    break;
    case "s":
    var audio3=new Audio("sounds/tom-3.mp3");
    audio3.play();
    break;
    case "d":
    var audio4=new Audio("sounds/tom-4.mp3");
    audio4.play();
    break;
    case "j":
    var audio5=new Audio("sounds/snare.mp3");
    audio5.play();
    break;
    case "k":
    var audio6=new Audio("sounds/crash.mp3");
    audio6.play();
    break;
    case "l":
    var audio7=new Audio("sounds/kick-bass.mp3");
    audio7.play();
    break;
    default:
    console.log(key);
  }}
