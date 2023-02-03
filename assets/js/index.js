const detailsFormSection = document.getElementById("wizard-details-form");
const detailsForm = document.getElementById("details-form");
const quizQuestionsForm = document.getElementById("quiz-questions-form");
const quizQuestionsSection = document.getElementById("quiz-questions");
const homepageIntroSection = document.getElementById("homepage-intro");
const championsSection = document.getElementById("champions-section");
const currentQuestionLabel = document.getElementById("current-question-label");
const instructionButton = document.getElementById("instruction-button");
const rulesSection = document.getElementById("rules-section");
const backToQuizButton = document.getElementById("back-to-quiz-button")

let currentQuizQuestion = 0;
let userScore = 0;

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

function makeChampionsSectionVisible() {
    championsSection.classList.remove("invisible");
}

function makeChampionsSectionInvisible() {
    championsSection.classList.add("invisible");
}

function makeInstructionButtonVisible() {
    instructionButton.classList.remove("invisible");
}

function makeInstructionButtonInvisible() {
    instructionButton.classList.add("invisible");
}

function makeRulesSectionVisible() {
    rulesSection.classList.remove("invisible");
}

function makeRulesSectionInvisible() {
    rulesSection.classList.add("invisible");
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
    makeInstructionButtonVisible();
    makeRulesSectionInvisible();

    showQuizQuestion(0);
}

function goToDetailsForm(){
    makeDetailsFormVisible();
    makeQuizInvisible();
    makeRulesSectionInvisible();
    makeInstructionButtonInvisible();
}

function endQuiz() {
    makeQuizInvisible();
    makeChampionsSectionVisible();
    makeInstructionButtonInvisible();
}

function instructionButtonClick() {
    makeQuizInvisible();
    makeRulesSectionVisible();
    makeInstructionButtonInvisible();
}

instructionButton.addEventListener('click', instructionButtonClick)

function backToQuizButtonClick() {
    makeQuizVisible();
    makeRulesSectionInvisible();
    makeInstructionButtonVisible();
}

backToQuizButton.addEventListener('click',backToQuizButtonClick)

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

    // Update the score
    const question = quizQuestions[currentQuizQuestion];
    const selectedOptionRadio = document.querySelector('input[name="answer"]:checked');
    const selectedValue = selectedOptionRadio.value; 
    const chosenOption = question.options[selectedValue];
    const optionScore = chosenOption.value;

    userScore = userScore + optionScore;
    
    console.log(' score: ', userScore);

    // Reset the selected option
    selectedOptionRadio.checked = false;


    // If we are on the last question finish the quiz
    if (currentQuizQuestion === quizQuestions.length - 1) {
        // Finish the quiz
        endQuiz();
    } else {
        // Go to the next question
        currentQuizQuestion++; 
        showQuizQuestion(currentQuizQuestion) 
    }
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
