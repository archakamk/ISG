document.getElementById("tester").style.display = "none"
//both numbers to be displayed
var problem = (Math.random()*10).toFixed(2)

var correctAnswer = Math.ceil(problem)
if (problem - Math.floor(problem) ==0){
problem = Math.random()*10
problem.toFixed(2)
correctAnswer = Math.ceil(problem)
}
var wrong1 = Math.ceil(Math.random()*10)
while (wrong1==correctAnswer){
wrong1 = Math.ceil(Math.random()*10)
}
var wrong2 = Math.ceil(Math.random()*10)
while(wrong2==wrong1 || wrong2 == correctAnswer) {
wrong2 = Math.ceil(Math.random()*10)
}


function generate(){
//Check if the operation is subtraction and if the first number is less than the second
document.getElementById("demo").innerHTML = "How much should you pay if an item costs: \n" + "$" + problem + "?"

document.getElementById("tester").style.display = "block";

var choices = [correctAnswer, wrong1, wrong2]
var choice_1 = Math.floor(Math.random()*3)
var choice_2 = Math.floor(Math.random()*3)
while (choice_2==choice_1){
    choice_2 = Math.floor(Math.random()*3)
}
var choice_3 = Math.floor(Math.random()*3)
while (choice_3 == choice_1 || choice_3 == choice_2){
    choice_3 = Math.floor(Math.random()*3)
}
document.getElementById("btn1").innerHTML = "$" + choices[choice_1]
document.getElementById("btn2").innerHTML = "$" + choices[choice_2]
document.getElementById("btn3").innerHTML = "$" + choices[choice_3]

}

function reply_click(){
document.addEventListener('click', function(e) {
        // let btnID = e.target.id
        // console.log("temp "+btnID)
        

        // if(btnID.indexOf("btn")!=-1){
        //   console.log("here 180")
        //   btnID = "btn" + btnID.substring(1)
        // }
        
        // else {
        //   console.log("here 185")
        //   btnID =  "btn" + btnID.substring(btnID.indexOf("btntn")+6)
        // }
        // console.log(btnID)
        // else{
        //   btnID = "btn" + 
        // }
    
        // console.log("i am inside")
        let answer1 = document.getElementById(e.target.id).innerHTML
        console.log("submitted: " + answer1)
        
        //console.log(numberSubmitted)
        //let buttonID 
        if (answer1.length <= 3){
            answer1 = answer1.substring(answer1.indexOf("$")+1)
        }
        else if(answer1.length > 2){
            answer1 = answer1.substring(answer1.indexOf("$")+2,answer1.indexOf("</")-1)
        }
        else if (answer1.length>1){
            answer1 = answer1.substring(answer1.indexOf("$")+2,answer1.indexOf("</")-1)
        }
        
        console.log("subMod: " + answer1)
        
        // console.log("printint inner html on document.getElementById: " + document.getElementById(e.target.id).innerHTML)
        // console.log("shape name: " + shape_name)
        //console.log(buttonID)

        //checks if the submitted answer is identical to the answer and displays correct or incorrect
        /* e.target.id = btnID */
        if (answer1 === "" + correctAnswer) {
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
    , 2000)
}