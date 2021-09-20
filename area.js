var side=document.querySelectorAll(".side-input");
var btn1=document.querySelector("#btn");
var output1=document.querySelector(".output");

function multipleOfSides(a,b){
    var multiple=(a*b);
    return (multiple);
}



function calculateAreaOfTriangle(){
    var multiple=multipleOfSides(Number(side[0].value),Number(side[1].value));
    var result=multiple/2;
    output1.innerText="The area of Triangle is " + result +" cm(Square)"
}


function calculateAreaOfTriangle1(){
    side1=side[0].value;
    side2=side[1].value;
    if (side1&&side2){
        calculateAreaOfTriangle();
    }
    else{
        output1.innerHTML="Please enter the values to get area!";
    }
}



btn1.addEventListener("click",calculateAreaOfTriangle1);