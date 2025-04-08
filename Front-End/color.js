var black = {link:'https://i.imgur.com/CT9Cmdz.png', name: "Black"}
var yellow = {link: 'https://i.imgur.com/AhSR4U7.png', name: "Yellow"}
var green = {link: 'https://i.imgur.com/50RNszh.png', name: "Green"}
var orange = {link:'https://i.imgur.com/Gos0FdL.png', name: "Orange"}
var pink = {link: 'https://i.imgur.com/q14r4cD.png', name:"Pink"}
var red = {link: 'https://i.imgur.com/khh1via.png', name: "Red"}

var thisContainsAllColors = [black, yellow, green, orange, pink, red]

var allColors = [
    [black, yellow, green],
    [yellow, green, orange],
    [pink, black, green],
    [red, black, pink],
    [yellow, green, black],
    [green, orange, pink]
]

//All globally declared variables
var row = Math.floor(Math.random()*6)
var answerRand = Math.floor(Math.random()*3)
var option1 = allColors[row][0]
var option2 = allColors[row][1]
var option3 = allColors[row][2]
var answer = allColors[row][answerRand]
var answerName = answer.name

//generate function -- allows us to display the question and the multiple choice options
function generate() {
    document.getElementById("text-before").innerHTML = 'Click on '
    document.getElementById("demo").innerHTML = answerName
    
    document.getElementById("ex1").src = option1.link
    document.getElementById("ex1").id = option1.name
    document.getElementById("btn1").id = option1.name
    document.getElementById("ex2").src = option2.link
    document.getElementById("ex2").id = option2.name
    document.getElementById("btn2").id = option2.name
    document.getElementById("ex3").src = option3.link 
    document.getElementById("ex3").id = option3.name      
    document.getElementById("btn3").id = option3.name             
}

//This function allows us to check if the answer submitted by the user is correct or not
function reply_click(){
    

    //eventListener must be used to take in input from player
    document.addEventListener('click', function(e) {
        // console.log("i am inside")
        
        let shape_name = document.getElementById(e.target.id).id //the shape that is submitted by user
        console.log("Shape name: " + shape_name)
        // console.log("printint inner html on document.getElementById: " + document.getElementById(e.target.id).innerHTML)
        // console.log("shape name: " + shape_name)

        //checks if the submitted answer is identical to the answer and displays correct or incorrect
        if (shape_name === answerName) {
            console.log("its correct u mf")
            document.getElementById(e.target.id).innerHTML = 'correct'
            console.log(e.target.id)
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

/* function reply_click_img(){
    //eventListener must be used to take in input from player
    document.addEventListener('click', function(e) {
        
        let testURL = document.getElementById(e.target.id).src //the shape that is submitted by user
        let btnID = e.target.id
        let btnIDActual = "ex" + btnID.substring(2)
        console.log("testURL: "+testURL)
        console.log("e.target.id: "+e.target.id)
        console.log("btnID: "+btnID)
        console.log("btnIDActual: "+btnIDActual)

        //console.log("189")
        if(testURL === answer.link){
            document.getElementById(btnID).style.backgroundColor = 'green'
            document.getElementById(e.target.id).style.backgroundColor = 'green'
            document.getElementById(e.target.id).innerHTML = 'correct'
        } else {
            document.getElementById(btnID).style.backgroundColor = 'red'
            document.getElementById(e.target.id).innerHTML = 'incorrect'
            document.getElementById(e.target.id).style.backgroundColor = "red"
        }
        //let URLMatchingName;

        // for (let x = 0; x < 6; x++) {
        //     if(testURL === thisContainsAllShapes[x].link) {
        //         URLMatchingName = thisContainsAllShapes[x].name
        //     }
        // }


        // let modified = shape_name.substring(testURL.indexOf("id=")+4, testURL.indexOf(" s")-1)
        // console.log(modified)
        // console.log("This is assigned to modified: "+letterDisplayed.substring(13,14))
        // console.log("This is substring(13): " + letterDisplayed.substring(13))
        // console.log("Until second tag(14): " + letterDisplayed.substring(14))

        //checks to see if the actual answer contains extra unecessary characters & modifies the string
        /* if(letterDisplayed.length > 1) {
            modified = letterDisplayed.substring(letterDisplayed.indexOf(">")+1, letterDisplayed.indexOf(">")+2)
            
            //console.log("modified: "+ modified)
        }
        else{
            modified = letterDisplayed
        } */

        //checks if the submitted answer is identical to the answer and displays correct or incorrect
        /* if (URLMatchingName=answerName) {
            document.getElementById(e.target.id).innerHTML = 'correct'
            document.getElementById(e.target.id).style.backgroundColor = "green"
        } else { 
            document.getElementById(e.target.id).innerHTML = 'incorrect'
            document.getElementById(e.target.id).style.backgroundColor = "red"
        } */
/* 
        console.log("231")
    }, false)

    console.log("234") */

    /* setTimeout(
        function(){
            window.location.reload()
        }
    , 3000) */

    /*console.log("finished with reply_click_img")
} */