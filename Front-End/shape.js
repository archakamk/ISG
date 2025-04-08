var diamond = {link:'https://i.imgur.com/9EKOmKq.png', name: "diamond"}
var circle = {link: 'https://i.imgur.com/tEKUDt1.png', name: "circle"}
var trapezoid = {link: 'https://i.imgur.com/IVez7G9.png', name: "trapezoid"}
var rectangle = {link:'https://i.imgur.com/MgQUfJb.png', name: "rectangle"}
var triangle = {link: 'https://i.imgur.com/V33tp9a.png', name:"triangle"}
var square = {link: 'https://i.imgur.com/Auhwwq4.png', name: "square"}

/* var diamond = {link:'/Images/Shapes-Img/diamond.png', name: "diamond"}
var circle = {link: '/Images/Shapes-Img/circle.png', name: "circle"}
var trapezoid = {link: '/Images/Shapes-Img/trapezoid.png', name: "trapezoid"}
var rectangle = {link:'/Images/Shapes-Img/rectangle.png', name: "rectangle"}
var triangle = {link: '/Images/Shapes-Img/triangle.png', name:"triangle"}
var square = {link: '/Images/Shapes-Img/square.png', name: "square"} */

var thisContainsAllShapes = [diamond, circle, trapezoid, rectangle, triangle, square]

var allShapes = [
    [diamond, trapezoid, rectangle],
    [circle, square, trapezoid],
    [rectangle, circle, triangle],
    [square, rectangle, trapezoid],
    [diamond, circle, triangle],
    [square, trapezoid, rectangle]
]

//All globally declared variables
var row = Math.floor(Math.random()*6)
var answerRand = Math.floor(Math.random()*3)
var option1 = allShapes[row][0]
var option2 = allShapes[row][1]
var option3 = allShapes[row][2]
var answer = allShapes[row][answerRand]
var answerName = answer.name

//generate function -- allows us to display the question and the multiple choice options
function generate() {
    document.getElementById("tester").style.display = "block";
    document.getElementById("text-before").innerHTML = 'Click on the '
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
        // console.log("printint inner html on document.getElementById: " + document.getElementById(e.target.id).innerHTML)
        // console.log("shape name: " + shape_name)

        //checks if the submitted answer is identical to the answer and displays correct or incorrect

            if (shape_name === answerName) {
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

//function reply_click_img(){
    //eventListener must be used to take in input from player
    /* document.addEventListener('click', function(e) {
        
        let testURL = document.getElementById(e.target.id).src //the shape that is submitted by user
        let btnID = e.target.id
        let btnIDActual = "ex" + btnID.substring(2)
        console.log("testURL: "+testURL)
        console.log("e.target.id: "+e.target.id)
        console.log("btnID: "+btnID)
        console.log("btnIDActual: "+btnIDActual)

        //console.log("189")
        if(testURL === answer.link){
            document.getElementById(e.target.id).style.backgroundColor = 'green'
            document.getElementById(e.target.id).innerHTML = 'correct'
            document.getElementById(btnIDActual).style.backgroundColor = 'green'
        } else {
            document.getElementById(e.target.id).innerHTML = 'incorrect'
            document.getElementById(e.target.id).style.backgroundColor = "red"
            document.getElementById(btnIDActual).style.backgroundColor = "red"
        } */
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

        /* console.log("231")
    }, false)

    console.log("234")

    setTimeout(
        function(){
            window.location.reload()
        }
    , 4000)

    console.log("finished with reply_click_img")
}

document.getElementById('btn1').onclick = reply_click;
document.getElementById('btn2').onclick = reply_click;
document.getElementById('btn3').onclick = reply_click; */