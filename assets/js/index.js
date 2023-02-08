/* jshint esversion: 6 */

const detailsFormSection = document.getElementById("wizard-details-form");
const detailsForm = document.getElementById("details-form");
const quizQuestionsForm = document.getElementById("quiz-questions-form");
const quizQuestionsSection = document.getElementById("quiz-questions");
const homepageIntroSection = document.getElementById("homepage-intro");
const userScoreSection = document.getElementById("user-score-section");
const negativeScoreFeedback = document.getElementById("negative-number-score");
const upToFiftyScoreFeedback = document.getElementById("up-to50-score");
const fromFiftyOneScoreFeedback = document.getElementById("from51-score");
const userScoreHeading = document.getElementById("user-score-heading");
const currentQuestionLabel = document.getElementById("current-question-label");
const instructionButton = document.getElementById("instruction-button");
const rulesSection = document.getElementById("rules-section");
const backToQuizButton = document.getElementById("back-to-quiz-button");
const startQuizOverButton = document.getElementById("start-quiz-over-button");

let wizardName = localStorage.getItem('name');

let currentQuizQuestion = 0;
let userScore = 0;
// Use these variable to pick different questions every time
const numberOfQuestions = 10;
let chosenQuizQuestions = [];

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
    homepageIntroSection.classList.add("invisible");
}

function makeUserScoreSectionVisible() {
    userScoreSection.classList.remove("invisible");
}

function makeUserScoreSectionInvisible() {
    userScoreSection.classList.add("invisible");
}

function makeRulesSectionVisible() {
    rulesSection.classList.remove("invisible");
}

function makeRulesSectionInvisible() {
    rulesSection.classList.add("invisible");
}

function showQuizQuestion (questionNumber) {
    const question = chosenQuizQuestions[questionNumber];
    currentQuestionLabel.innerText = question.title;

    // Set the option labels for each question option
    for(let i = 0; i < question.options.length; i++) {
        const optionOneLabel = document.getElementById("option"+(i+1)+"label");
        optionOneLabel.innerText = question.options[i].title;
    }
}

function makeChosenQuizQuestions() {
    // Reset the list to only show 10 questions
    chosenQuizQuestions = [];
    /**
     * This code was taken from here: https://stackoverflow.com/a/2380113 
     * It gets a random question and chooses it if we didnt choose it before
     */
    while (chosenQuizQuestions.length < numberOfQuestions) {
        let randomQuestion = quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
        if (chosenQuizQuestions.indexOf(randomQuestion) === -1) {
            chosenQuizQuestions.push(randomQuestion);
        }
    }
}

function goToQuiz() {
    makeQuizVisible();
    makeDetailsFormInvisible();
    makeHomepageIntroInvisible();
    makeRulesSectionInvisible();
    makeUserScoreSectionInvisible();

    // Reset variables so we can use this to start the quiz a few times
    currentQuizQuestion = 0;
    userScore = 0;

    // Get random questions before we start the quiz 
    makeChosenQuizQuestions();

    showQuizQuestion(currentQuizQuestion);
}

function goToDetailsForm(){
    makeDetailsFormVisible();
    makeQuizInvisible();
    makeRulesSectionInvisible();
}

function endQuiz() {
    makeQuizInvisible();
    makeUserScoreSectionVisible();
    showUserScoreResults();
}

function showUserScoreResults() {
    // Show the score in the heading 
    userScoreHeading.innerHTML = "You have finished the quiz, " + wizardName + ". Your score is: " + userScore;

    // Show the correct user score feedback section
    if (userScore < 0) {
        negativeScoreFeedback.classList.remove("invisible");
        upToFiftyScoreFeedback.classList.add("invisible");
        fromFiftyOneScoreFeedback.classList.add("invisible");
    } else if (userScore < 51) {
        upToFiftyScoreFeedback.classList.remove("invisible");
        negativeScoreFeedback.classList.add("invisible");
        fromFiftyOneScoreFeedback.classList.add("invisible");
    } else {
        fromFiftyOneScoreFeedback.classList.remove("invisible");
        negativeScoreFeedback.classList.add("invisible");
        upToFiftyScoreFeedback.classList.add("invisible");
    }
}

/**
 * This function lets users go to the rules section
 */
function instructionButtonClick() {
    makeQuizInvisible();
    makeRulesSectionVisible();
    makeInstructionButtonInvisible();
}

instructionButton.addEventListener('click', instructionButtonClick);

/**
 * This function lets users go back to the quiz from the rules 
 */
function backToQuizButtonClick() {
    makeQuizVisible();
    makeRulesSectionInvisible();
}

backToQuizButton.addEventListener('click',backToQuizButtonClick);

function startQuizOverButtonClick() {
    goToQuiz();
}

startQuizOverButton.addEventListener('click', startQuizOverButtonClick);

/**
 * This function stores users details when they submit the wizard-details form 
 */
function detailsFormSubmit (event){
    event.preventDefault();

    const name = detailsForm.elements.wname.value;
    localStorage.setItem('name', name);

    // This is to store the wizardname to show on the score page
    wizardName = name;

    goToQuiz();
}

detailsForm.addEventListener('submit', detailsFormSubmit); 

/**
 * This function updates the question shown when user clicks on next
 */
function quizQuestionsFormSubmit (event){ 
    event.preventDefault();

    // Update the score
    const question = chosenQuizQuestions[currentQuizQuestion];
    const selectedOptionRadio = document.querySelector('input[name="answer"]:checked');
    if (selectedOptionRadio) {
        const selectedValue = selectedOptionRadio.value; 
        const chosenOption = question.options[selectedValue];
        const optionScore = chosenOption.value;

        userScore = userScore + optionScore;

        // Reset the selected option
        selectedOptionRadio.checked = false;


        // If we are on the last question finish the quiz
        if (currentQuizQuestion === chosenQuizQuestions.length - 1) {
            // Finish the quiz
            endQuiz();
        } else {
            // Go to the next question
            currentQuizQuestion++; 
            showQuizQuestion(currentQuizQuestion);
        }
    }
}

quizQuestionsForm.addEventListener('submit', quizQuestionsFormSubmit); 

/**
 * Show quiz or form depending on if we already have users details or not
 */
if (wizardName !== null) {
    goToQuiz();
} else {
    goToDetailsForm();
}
