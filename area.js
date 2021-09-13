var side=document.querySelectorAll(".side-input");
var btn1=document.querySelector("#btn");
var output1=document.querySelector(".output");

function sumOfSides(a,b){
    var sum=a+b;
    return (sum);
}



function calculateAreaOfTriangle(){
    var sum=sumOfSides(Number(side[0].value),Number(side[1].value));
    var result=sum/2;
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