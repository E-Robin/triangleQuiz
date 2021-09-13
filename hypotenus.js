const sides=document.querySelectorAll(".side-input");
const hypotenusBtn=document.querySelector("#btn");
const result1=document.querySelector("#output");

function calculateSumOfSquares(a,b){
    const sums=a*a +b*b;
    return sums;
}




function calculateHypotenus(){
    const sumOfSquares=calculateSumOfSquares(
    Number(sides[0].value),Number(sides[1].value));

    const lengthOfHypotenus=Math.sqrt(sumOfSquares);
     result1.innerText="The length of hypotenus is " + lengthOfHypotenus + " cm";

}

function calculateHypotenus1() {
    var  side1=sides[0].value;
    var side2=sides[1].value;
    
if (side1&&side2){

    console.log("mtynaem");
    calculateHypotenus();
    
}
else {
    console.log("222");
    result1.innerText="Please enter the values";
}

}

hypotenusBtn.addEventListener("click",calculateHypotenus1);