    //create a constuctor class for creating an exam question
class Question {
    constructor(question0, answer1, correct1 = false, answer2, correct2 = false, answer3, correct3 = false, answer4, correct4 = false) {
        this.questionList = {
            "question": question0,
            0: {
                "answer":answer1,
                "correct":correct1,
            },
            1: {
                "answer":answer2,
                "correct":correct2,
            },
            2: {
                "answer":answer3,
                "correct":correct3,
            },
            3: {
                "answer":answer4,
                "correct":correct4,
            },
        }
    }

}

const questions = [
    new Question(
        '"Provides information about the performance of a system which can be used to modify its behaviour"<br><br> This is the definition of:', 
        "Control mechanism", false,
        "Process",false, 
        "System objective",false,
        "Feedback mechanism", true
    ),
    new Question(
        "Which of the following statement(s) about ERD is correct?<br><br>1) An ERD gives a high-level view of the detailed attributes of an entity<br>2) An ERD gives a data-focused view of the main data objects", 
        "Only statement 1 is correct", false, 
        "Only statement 2 is correct", true, 
        "Both statements are incorrect", false, 
        "Both statements are correct", false
    ),
    new Question(
        'The statement defines a Business information system.<br><br>Fill in the blanks with the best alternative to make the definition complete.<br><br>"A business information system is a group of interralated components that work collectively to carry out ...A() ... in order to convert data into information products that can be used to support ... B() ... in an organisation".', 
        "(A) analyses; (B) sales", false, 
        "(A) all sorts of actions; (B) tactical and operationalactivities", true, 
        "(A) transactions and calculations; (B) business decisions",false, 
        "(A) tasks; (B) the people", false
    ),
    new Question(
        "Which of the following statement about System Analysis is correct?",
        "None", false,
        "System Analysis consists of the components Fact-Finding and Documentation ",true,
        "Only after the requirements determination the System Analysis can take place",false,
        "System Analysis is about finding out How the new system should work rather than What the new system is to do", false
    ),
    new Question(
        "The basic SDLC consists of 8 phases. What is the correct sequence of these phases?",
        "Initiation, Feasibility study, Requirements analysis, System design, Build, Kill, Implement, Maintain", false,
        "Initiation, Requirements analysis, System design, Feasibility study, Build, Implement, Maintain, Kill",false,
        "Requirements analysis, Feasibility study, System design, Build, Implement, Initiation, Maintain, Kill",false,
        "Initiation, Feasibility study, Requirements analysis, System design, Build, Implement, Maintain, Kill", true
    ),
    new Question(
        "Which of the following is NOT an attribute of information quality?",
        "Relevance", false,
        "Cost",true,
        "Frequency",false,
        "Accuracy", false
        ),
    new Question(
        "'Aggregating', 'Classification', and 'Selection' are examples of?",
        "Data modeling", false,
        "A data process",true,
        "A data dictionary",false,
        "A data recording", false
    ),
    new Question(
        "Which of the following systems development activities would typically NOT be necessary when acquiring a standard off-the-shelf package?",
        "Program writing", true,
        "Conducting a feasibility study",false,
        "Detailed analysis of user requirements",false,
        "Data conversion", false
    ),
    new Question(
        "KISS stands for 'Keep IT Simple, Stupid. Many designers and developers adopt this principle.<br><br> Which statement about design is correct?",
        "Evaluation of different implementation methods is NOT part of the design", false,
        "While designing, only the present releases of software are relevant",false,
        "Design simply involves producing an architectural and detailed design",false,
        "To achieve flexibility, simplicity in design is a requirement", true
    ),
    new Question(
        "Which statement about Design is correct?",
        "Starting with the financial module is an example of Bottom-up design", true,
        "Starting with the security module is compulsory by the General Data Protection Regulation (GDPR)",false,
        "System design is the design of the individual modules and the interactions between them",false,
        "None of the others", false
    ),
    new Question(
        "Which of the following is an example of B2B?",
        "Internet commerce", true,
        "Internet infrastructure",false,
        "Internet intermediaries",false,
        "Internet service provider", false
    ),
    new Question(
        "BIS acquisition describes the method of obtaining an information system for a business.<br><br> The main choices for using this method of obtaining information are:<br>I) Purchasing off-the-shelf<br>II) Bespoke development<br>III) Application developed by an in-house IT department<br>IV).<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>14<br>15<br>16<br>17<br>14<br>15<br>16<br>17<br>14<br>15<br>16<br>17",
        "The systems development lifecycle (SDLC)", false,
        "User-developed software",true,
        "Waterfall method",false,
        "Scrum", false
    ),
    new Question(
        "In client/server model, typical desktop PCs serve as the 'front-end' access point to business applications.<br><br>Which of the following statements is correct?",
        "A two-tier C/S offers better security than a three-tier C/S", false,
        "In a three-tier C/S, the second tier typically serves as the dara source",false,
        "Due to scalabillity, a three-tier system is preffered as compared to a two-tier C/S",true,
        "A two-tier C/S occasionally called a 'thin-client' model", false
    ),
    new Question(
        '"Provides information about the performance of a system which can be used to modify its behaviour"<br><br> This is the definition of:', 
        "Control mechanism", false,
        "Process",false, 
        "System objective",false,
        "Feedback mechanism", true
    ),
    new Question(
        '"Provides information about the performance of a system which can be used to modify its behaviour"<br><br> This is the definition of:', 
        "Control mechanism", false,
        "Process",false, 
        "System objective",false,
        "Feedback mechanism", true
    ),
];