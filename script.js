console.log("hello");

//when you click on project name, images and info will show up on toggle 
var boxOne = document.querySelector(".box1");
var boxTwo = document.querySelector(".box2");
boxOne.addEventListener("click", function(){

    boxTwo.classList.toggle("active");

})

var boxThree = document.querySelector(".box3");
var boxFour = document.querySelector(".box4");
boxThree.addEventListener("click", function(){

    boxFour.classList.toggle("active");

})

var boxFive = document.querySelector(".box5");
var boxSix = document.querySelector(".box6");
boxFive.addEventListener("click", function(){

    boxSix.classList.toggle("active");

})

var boxSeven = document.querySelector(".box7");
var boxEight = document.querySelector(".box8");
boxSeven.addEventListener("click", function(){

    boxEight.classList.toggle("active");

})

var boxNine = document.querySelector(".box9");
var boxTen = document.querySelector(".box10");
boxNine.addEventListener("click", function(){

    boxTen.classList.toggle("active");

})

var boxEleven = document.querySelector(".box11");
var boxTwelve = document.querySelector(".box12");
boxEleven.addEventListener("click", function(){

    boxTwelve.classList.toggle("active");

})

var boxThirteen = document.querySelector(".box13");
var boxFourteen = document.querySelector(".box14");
boxThirteen.addEventListener("click", function(){

    boxFourteen.classList.toggle("active");

})

//when the down pointer hand is pressed, activate the click class 
var pointer = document.querySelector(".down");
var names = document.querySelector(".name");

pointer.addEventListener("click", function(){

    names.classList.add("up");

})
