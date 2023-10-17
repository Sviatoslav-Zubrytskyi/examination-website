    //create a constuctor class for creating an exam question
class Question {
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
    new Question("2+2=", "4","5","6","7"),
    new Question("Q2","1 "," 2", "3 ", "4 "),
    new Question("Q3 ","1 ","2 ", "3 ", "4 "),
    new Question("Q4 ","1"," 2", " 3", "4 "),
    new Question("Q5", "4","5","6","7"),
    new Question("Q6","1 "," 2", "3 ", "4 "),
    new Question("Q7 ","1 ","2 ", "3 ", "4 "),
    new Question("Q8 ","1"," 2", " 3", "4 "),
    new Question("Q9", "4","5","6","7"),
    new Question("Q10","1 "," 2", "3 ", "4 "),
    new Question("Q11","1 ","2 ", "3 ", "4 "),
    new Question("Q12","1"," 2", " 3", "4 "),
    new Question("Q13","1"," 2", " 3", "4 "),
];
