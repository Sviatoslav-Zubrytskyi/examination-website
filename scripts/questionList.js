    //create a constuctor class for creating an exam question
class Question {
    constructor(question0, answer1, correct1 = false, answer2, correct2 = false, answer3, correct3 = false, answer4, correct4 = false) {
        this.questionList = {
            "question": question0,
            1: {
                "answer":answer1,
                "correct":correct1,
            },
            2: {
                "answer":answer2,
                "correct":correct2,
            },
            3: {
                "answer":answer3,
                "correct":correct3,
            },
            4: {
                "answer":answer4,
                "correct":correct4,
            },
        }
    }

}



const questions = [
    new Question("2+2=", "4", true,"5",false, "6",false,"7", false),
    new Question("Q2", "1", false, "2", false, "3", false, "4", true),
    new Question("Q3", "1", false, "2", false, "3", false, "4", true),
    new Question("2+2=", "4", true,"5",false, "6",false,"7", false),
    new Question("Q2", "1", false, "2", false, "3", false, "4", true),
    new Question("Q3", "1", false, "2", false, "3", false, "4", true),
    new Question("2+2=", "4", true,"5",false, "6",false,"7", false),
    new Question("Q2", "1", false, "2", false, "3", false, "4", true),
    new Question("Q3", "1", false, "2", false, "3", false, "4", true),
    new Question("2+2=", "4", true,"5",false, "6",false,"7", false),
    new Question("Q2", "1", false, "2", false, "3", false, "4", true),
    new Question("Q3", "1", false, "2", false, "3", false, "4", true),
    new Question("2+2=", "4", true,"5",false, "6",false,"7", false),
    new Question("Q2", "1", false, "2", false, "3", false, "4", true),
    new Question("Q3", "1", false, "2", false, "3", false, "4", true),
    new Question("2+2=", "4", true,"5",false, "6",false,"7", false),


];
console.log(questions[0].questionList[1].correct)