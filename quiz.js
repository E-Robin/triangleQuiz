var quizForm=document.querySelector(".quiz-form");
var SubmitBtn=document.querySelector("#submit-btn");
var output1=document.querySelector("#output");

const correctAnswer=["90°" , "right angled"];


function calculateScore(){
let score=0;
let index=0;
const formResults=new FormData(quizForm);
for (let value of formResults.values()){
    if (value===correctAnswer[index]){
        score=score+1;
    }
    index=index+1;
}
output1.innerText="your score is "+ score;


}




SubmitBtn.addEventListener("click",calculateScore);