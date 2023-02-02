const detailsFormSection = document.getElementById("wizard-details-form");
const detailsForm = document.getElementById("details-form");
const quizQuestionsForm = document.getElementById("quiz-questions-form");
const quizQuestionsSection = document.getElementById("quiz-questions");
const homepageIntroSection = document.getElementById("homepage-intro");
const currentQuestionLabel = document.getElementById("current-question-label");

let currentQuizQuestion = 0;

function makeQuizVisible() {
    quizQuestionsSection.classList.remove("invisible");
}

function makeQuizInvisible() {
    quizQuestionsSection.classList.add("invisible");
}

function makeDetailsFormVisible() {
    detailsFormSection.classList.remove("invisible");
}

function makeDetailsFormInvisible() {
    detailsFormSection.classList.add("invisible");
}

function makeHomepageIntroInvisible() {
    homepageIntroSection.classList.add("invisible")
}

function showQuizQuestion (questionNumber) {
    const question = quizQuestions[questionNumber];
    currentQuestionLabel.innerText = question.title;

    // Set the option labels for each question option
    for(let i = 0; i < question.options.length; i++) {
        const optionOneLabel = document.getElementById("option"+(i+1)+"label");
        optionOneLabel.innerText = question.options[i].title;
    }
}

function goToQuiz() {
    makeQuizVisible();
    makeDetailsFormInvisible();
    makeHomepageIntroInvisible();

    showQuizQuestion(0);
}

function goToDetailsForm(){
    makeDetailsFormVisible();
    makeQuizInvisible();
}

/**
 * This function stores users details when they submit the wizard-details form 
 */
function detailsFormSubmit (event){
    event.preventDefault();

    const wizardName = detailsForm.elements['wname'].value;
    const wizardEmail = detailsForm.elements['wemail'].value;
    localStorage.setItem('name', wizardName);
    localStorage.setItem('email', wizardEmail);

    goToQuiz();
}

detailsForm.addEventListener('submit', detailsFormSubmit); 

/**
 * This function updates the question shown when user clicks on next
 */
function quizQuestionsFormSubmit (event){ 
    event.preventDefault();
    currentQuizQuestion++; 
    showQuizQuestion(currentQuizQuestion) 
}

quizQuestionsForm.addEventListener('submit', quizQuestionsFormSubmit); 


/**
 * Show quiz or form depending on if we already have users details or not
 */
const wizardName = localStorage.getItem('name');
if (wizardName !== null) {
    goToQuiz()
} else {
    goToDetailsForm()
}
