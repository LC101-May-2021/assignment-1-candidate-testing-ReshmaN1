const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

let questions=["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","What is the minimum crew size for the ISS? "];
let correctAnswers =["Sally Ride","true","40","Trajectory","3"];
let candidateAnswers = [];

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let question="Who was the first American woman in space? ";
let correctAnswer="Sally Ride";
let candidateAnswer="";



function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName= input.question ("Enter your name: ");

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  
  //candidateAnswer=input.question(question);
  for(let i=0;i<questions.length;i++){
    candidateAnswer=input.question(questions[i]);
    candidateAnswers.push(candidateAnswer);
  }


}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
   /*if(candidateAnswer == correctAnswer){
     console.log("Answer is correct.");
   }else{
     console.log("Answer is incorrect.")
   }*/
   console.log("\n\n")
   console.log("Candidate Name: "+candidateName);
   let correctAnswerCount=0;

   for(let i=0;i<candidateAnswers.length;i++){
    console.log((i+1)+")"+questions[i] )
    console.log("Your Answer: "+candidateAnswers[i]);
    console.log("Correct Answer: "+correctAnswers[i]);
    console.log("   ");
    if(candidateAnswers[i].toUpperCase() == correctAnswers[i].toUpperCase()){
      correctAnswerCount++;
    }

   }
    
  let grade = correctAnswerCount /(questions.length)
  console.log( ">>> Overall Grade: "+ grade*100 +"%"+" ("+correctAnswerCount+" of "+candidateAnswers.length+" responses correct) <<<");
  
  if ([grade * 100]>=[ 0.8*100]){
    console.log ("PASS!");
  }else if ([grade *100] < [0.8*100]){
    console.log(" >>> Status : FAILED <<<");
  }
  
  
  grade = grade *100;
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Welcome " + candidateName);
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};