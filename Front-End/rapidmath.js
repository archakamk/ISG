document.getElementById("tester").style.display = "none"
//both numbers to be displayed
let first = Math.floor(Math.random()*9)+1
let second = Math.floor(Math.random()*9)+1
//list with possible opperations
var operations = ["+","-"]
//Random operator
let operation = operations[Math.floor(Math.random()*2)]
let answer
let wrong1
let wrong2
let tempID
        
function generate(){
//Check if the operation is subtraction and if the first number is less than the second
if (operation === "-" && first<second){
    var temp = first
    first = second
    second = temp
}
//Storing value of answer
if (operation === "-"){
    answer = first-second
} 
else {
    answer = first+second
}

wrong1 = Math.floor(Math.random()*19)
while (wrong1==answer) {
    wrong1 = Math.floor(Math.random()*19)
}

wrong2 = Math.floor(Math.random()*19)
while (wrong2==answer || wrong2==wrong1) {
    wrong1 = Math.floor(Math.random()*19)
}
document.getElementById("demo").innerHTML = first + " " + operation + " " + second

document.getElementById("tester").style.display = "block";

var choices = [answer, wrong1, wrong2]
var choice_1 = Math.floor(Math.random()*3)
var choice_2 = Math.floor(Math.random()*3)
while (choice_2==choice_1){
    choice_2 = Math.floor(Math.random()*3)
}
var choice_3 = Math.floor(Math.random()*3)
while (choice_3 == choice_1 || choice_3 == choice_2){
    choice_3 = Math.floor(Math.random()*3)
}
document.getElementById("ex1").innerHTML = choices[choice_1]
document.getElementById("btn1").innerHTML = choices[choice_1]
document.getElementById("ex2").innerHTML = choices[choice_2]
document.getElementById("btn2").innerHTML = choices[choice_2]
document.getElementById("ex3").innerHTML = choices[choice_3]
document.getElementById("btn3").innerHTML = choices[choice_3]
        
}

function reply_click(){
document.addEventListener('click', function(e) {
        temp = e.target.id
        // if(temp.indexOf("btn")!=-1) {
        //   temp
        // }
        //console.log("temp = "+ temp)
        // console.log("i am inside")
        let answer1 = document.getElementById(e.target.id).innerHTML
        console.log("answer: " + answer1)
        
        //console.log(numberSubmitted)
        //let buttonID 
        if (answer1.length>2){
            answer1 = answer1.substring(answer1.indexOf(">")+1,answer1.indexOf(">")+2)
        }
        
        // console.log("printint inner html on document.getElementById: " + document.getElementById(e.target.id).innerHTML)
        // console.log("shape name: " + shape_name)
        //console.log(buttonID)

        //checks if the submitted answer is identical to the answer and displays correct or incorrect
        if (answer1 === ""+answer) {
            document.getElementById(e.target.id).innerHTML = 'correct'
            document.getElementById(e.target.id).style.backgroundColor = "green"
        } else { 
            document.getElementById(e.target.id).innerHTML = 'incorrect'
            document.getElementById(e.target.id).style.backgroundColor = "red"
        }

    }, false)

    //console.log("173 am i outside")

    setTimeout(
        function(){
            window.location.reload()
        }
    , 3000)
}