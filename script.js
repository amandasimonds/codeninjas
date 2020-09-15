// (function () {

// //define our global variables
// let canvas, ctx, gravity, ball, friction

// //runs once in the beginning
// //loads
// function init(){
//     //loads the canvas
//     canvas = document.querySelector(".bouncyball")
//     ctx = canvas.getContext("2d")

//     canvas.width=500;
//     canvas.height=400;
// }

// function draw(){
//     //clear the canvas

//     //draw things
//     ctx.beginPath();
//     ctx.fillStyle="red";
//     ctx.arc(100, 100, 20, 0, Math.PI*2, true);
//     ctx.closePath();
//     ctx.fill();
// }

// //runs everything
// function update(){

//     //draw after logic
//     draw()
// }

// // start our code once the page has loaded
// document.addEventListener('DOMContentLoaded', init)
// })()

// var array = [1, 2, 3, 4, 5]
// var letters = ["a", "b", "c", "d", "e"]
// var string = "hello"

// var num1 = 100
// var num2 = 51
// var num3 = 49

// function check(a, b, c) {
//     if (a === 100){
//         console.log("yes it is 100")
//         return true
//     }

//     if(b + c === 100) {
//         console.log("it equals 100")
//         return console.log("equals 100")
//     }
// }

// // check(num1, num2, num3)

// const isEqualto100 = (a, b) => a === 100 || b === 100 || a + b === 100;
// // console.log(isEqualto100(100, 0))
// // console.log(isEqualto100(51, 49))

// function equalTo(a, b){
//     if (a === 100 || b === 100){
//         return false
// }
// }
// // console.log(equalTo(100, 0))

// const moveCharsForward = (str) => 
//     str
//     .split("")
//     .map(char => String.fromCharCode(
//         char.charCodeAt(0) + 1))
//         .join("");
// // console.log(moveCharsForward("hello"))

// var numbers = [1, 4, 6, 10, 14, 20, 45]

// const findUnder10 = (nums) => {
//     const smallNums = [];
//     for (let i = 0; i <= nums.length; i++){
//         if (nums[i] < 10){
//             smallNums.push(nums[i])
//         } 
//     }
//     return smallNums
// }

// const findOver10 = (nums) => {
//     const bigNums = [];
//     for (let i = 0; i <= nums.length; i++){
//         if (nums[i] >= 10){
//             bigNums.push(nums[i])
//         } 
//     }
//     return bigNums
// }

// console.log("big nums", (findOver10(numbers)))
// console.log("small nums", (findUnder10(numbers)))


// // const todaysDate = (d) => 
// //         {
// //             d = new Date()
// //         }

// // console.log(todaysDate(d))

// // var combined = array.concat(letters)
// function combine() {

//     var newArray = []
    
//     for (let i; i <= array.length; i++){
//         var char = array[i];
//         console.log(char)
//         newArray.push(char)
//     }
    
//     // console.log(newArray)
// }

// combine()

// Write a program that prints the numbers 
// from 1 to 100. But for multiples of three print 
// “Fizz” instead of the number and for the multiples 
// of five print “Buzz”. For numbers which are multiples 
// of both three and five print “FizzBuzz”.

const isMultipleOf3 = (num) => {
    
}

const printNums = () => {
    for (let num = 1; num <= 100; num++){
        var str = "";
        if ((num % 3) == 0 && (num % 5) == 0){
            str = "FizzBuzz"
        }
        else if ((num % 3) == 0){
            str = "Fizz"
        }
        else if ((num % 5) == 0){
            str = "Buzz"
        } else {
            str = num
        }
        console.log(str)
    }
}

printNums()