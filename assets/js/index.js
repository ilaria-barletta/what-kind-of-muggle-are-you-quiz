const detailsFormSection = document.getElementById("wizard-details-form");
const detailsForm = document.getElementById("details-form");
const quizQuestionsSection = document.getElementById("quiz-questions");
const homepageIntroSection = document.getElementById("homepage-intro")

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

function goToQuiz(){
    makeQuizVisible();
    makeDetailsFormInvisible();
    makeHomepageIntroInvisible();
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
 * When loading quiz page show quiz or form depending on if we already have users details or not
 */
const wizardName = localStorage.getItem('name');
if (wizardName !== null) {
    goToQuiz()
} else {
    goToDetailsForm()
}