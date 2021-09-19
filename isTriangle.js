const input=document.querySelectorAll(".angle");
const output=document.querySelector("#isTriangle");
const buttons=document.querySelector("#button");



function calculateSumOfAngles(angle1,angle2,angle3){
    const sum=angle1+angle2+angle3;
    console.log(sum);
    return(sum);
   
}



function isTriangles(){
    var sumOfAngles=calculateSumOfAngles(Number(input[0].value),Number(input[1].value),Number(input[2].value));
    console.log(sumOfAngles);

    if (sumOfAngles===180){
        output.innerText="Yay! this is a triangle "
    }
    else{
        output.innerText="No!This is not a triangle "
    }


    }

buttons.addEventListener("click",isTriangles)