document.getElementById("tester").style.display = "none";

//Array with all possible characters
let allChars = [
    ['a','b','c'],
    ['d','e','f'],
    ['g','h','i'],
    ['j','k','l'],
    ['m','n','o'],
    ['p','q','r'],
    ['s','t','u'],
    ['v','w','x'],
    ['y','z','!'], 
    ['?','=','+']
]

//All globally declared variables
var row = Math.floor(Math.random()*allChars.length)
var col = Math.floor(Math.random()*allChars[0].length)
var toDisplay = allChars[row][col]
var toDisplayChecker = allChars[row][col]
var answers = allChars[row]
var option1 = answers[0]
var option2 = answers[1]
var option3 = answers[2]

//generate function -- allows us to display the question and the multiple choice options
function generate() {

    document.getElementById("demo").innerHTML = toDisplay 
    
    //allows us to display a certain text for n number of seconds

    setTimeout(function(){
        document.getElementById("demo").innerHTML = ''

        document.getElementById("tester").style.display = "block";
    
        document.getElementById("ex1").innerHTML = option1
        document.getElementById("btn1").innerHTML = option1
        document.getElementById("ex2").innerHTML = option2
        document.getElementById("btn2").innerHTML = option2
        document.getElementById("ex3").innerHTML = option3
        document.getElementById("btn3").innerHTML = option3
    },8000);      
}   
    

//This function allows us to check if the answer submitted by the user is correct or not
var reply_click = function(){

    //eventListener must be used to take in input from player
    document.addEventListener('click', function(e) {

        // console.log("Line 128"+document.getElementById(e.target.id).innerHTML) 
        // console.log("Line 129"+toDisplayChecker)
        // console.log(document.getElementById(e.target.id).innerHTML == toDisplayChecker)
        
        let letterDisplayed = document.getElementById(e.target.id).innerHTML //the letter that is submitted by user
        let modified;

        // console.log("This is assigned to modified: "+letterDisplayed.substring(13,14))
        // console.log("This is substring(13): " + letterDisplayed.substring(13))
        // console.log("Until second tag(14): " + letterDisplayed.substring(14))

        //checks to see if the actual answer contains extra unecessary characters & modifies the string
        if(letterDisplayed.length > 1) {
            modified = letterDisplayed.substring(letterDisplayed.indexOf(">")+1, letterDisplayed.indexOf(">")+2)
            
            //console.log("modified: "+ modified)
        }
        else{
            modified = letterDisplayed
        }

        //checks if the submitted answer is identical to the answer and displays correct or incorrect
        if (modified === toDisplayChecker) {
            document.getElementById(e.target.id).innerHTML = 'correct'
            document.getElementById(e.target.id).style.backgroundColor = "green"
        } else { 
            document.getElementById(e.target.id).innerHTML = 'incorrect'
            document.getElementById(e.target.id).style.backgroundColor = "red"
        }

    }, false)

    setTimeout(
            function(){
                window.location.reload()
        }, 5000)
    }


    //used to take in info
    document.getElementById('btn1').onclick = reply_click;
    document.getElementById('btn2').onclick = reply_click;
    document.getElementById('btn3').onclick = reply_click;
