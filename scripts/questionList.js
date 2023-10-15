    //create a constuctor class for creating an exam question
class question {
    constructor(question0, answer1,answer2,answer3,answer4) {
        this.questionList = {
            "question": question0,
            1: answer1,
            2: answer2,
            3: answer3,
            4: answer4,
        }
    }

}
const questions = [
    new question("2+2=", "4","5","6","7"),
    new question(" Q2","1 "," 2", "3 ", "4 "),
    new question("Q3 ","1 ","2 ", "3 ", "4 "),
    new question("Q4 ","1"," 2", " 3", "4 "),
];
