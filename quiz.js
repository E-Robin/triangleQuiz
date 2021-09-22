var quizForm=document.querySelector(".quiz-form");
var SubmitBtn=document.querySelector("#submit-btn");
var result1=document.querySelector(".output");

const correctAnswer=["90°" , "right angled","Equilateral triangle","28°","100°"];

SubmitBtn.addEventListener("click",calculateScore);

function calculateScore(){

    
let score=0;
let index=0;
const formResults=new FormData(quizForm);
for (let value of formResults.values()){
    if (value===correctAnswer[index]){
        score=score+1;
        console.log("score")
    }
    index=index + 1;
}
result1.innerText="your score is "+ score;


}




