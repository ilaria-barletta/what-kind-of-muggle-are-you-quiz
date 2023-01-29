const detailsForm = document.getElementById("details-form");

/**
 * This funcion stores users details when they submit the wizard-details form 
 */
function detailsFormSubmit (event){
    event.preventDefault();

    const wizardName = detailsForm.elements['wname'].value;
    const wizardEmail = detailsForm.elements['wemail'].value;
    localStorage.setItem('name', wizardName);
    localStorage.setItem('email', wizardEmail);
    
}

detailsForm.addEventListener( 'submit', detailsFormSubmit); 