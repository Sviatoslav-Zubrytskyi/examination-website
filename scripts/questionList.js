    //create a constuctor class for creating an exam question
class Question {
    constructor(question0, answer1,answer2,answer3,answer4) {
        this.questionList = {
            "Question": question0,
            1: answer1,
            2: answer2,
            3: answer3,
            4: answer4,
        }
    }

}
const questions = [
    new Question("2+2=", "4","5","6","7"),
    new Question(" Q2","1 "," 2", "3 ", "4 "),
    new Question("Q3 ","1 ","2 ", "3 ", "4 "),
    new Question("Q4 ","1"," 2", " 3", "4 "),
];
