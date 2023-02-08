# What kind of muggle are you?
![What kind of muggle are you on multiple devices](assets/images/readme-multiple-devices.png)

This is a quiz game addressed to Harry Potter's fans. The main goal is to entertain users online. Questions can be tricky and multiple options can be at the same time somehow correct. Users need to provide their best answers in order to get the highest score possible. After answering 10 questions, they will be given an answer to the main question: "What kind muggles are they?". If they are unhappy with the outcome, they can try again.

The live link to the quiz can be found here: https://ilaria-barletta.github.io/what-kind-of-muggle-are-you-quiz/

----
## Features

__Homepage__: ![Welcome page and users name request](assets/images/homepage-details.png)

This is a welcome to the quiz page. It presents a header and a brief message to the user. The content is centered and there is contrast with the background. A form is also present with the request to provide a name (wizard name)in order to proceed to the actual quiz. The name is mandatory as it is needed in order to be stored  along with the score and be shown at the end of the quiz. If the users does not provide a name, they won't be able to play. Under the quiz button a rule button takes the user to the rules of the game. They can then get back to the main page by selecting the back button. This page is resposive to multiple devices. The details form has been styled with the addition of a background color so that it's always perfectly visibile on the background on different screen sizes. Once the user has typed a name they can use the go button that will take them directly to the first quiz question.

__Quiz__: ![Quiz questions with multiple option](assets/images/quiz.png)

The Quiz section will become visible only after the user has provided a name and has clicked on the go button. The questions all have 5 options and each option has been assigned a specific value. A negative value of -10 if the answer is completely wrong and a positive value if it is correct. The best option is worth 10 points. The values then get added and give the final score. The users current score is always shown on the top left of the quiz. For the quiz section a background color with an opacity has been added so that the text is always perfectly visible but the background does not conflict with the main background. During the quiz the user can always check the instructions. There are two buttons at the bottom of each question. One to go to the next question and one to go to the rules. The user needs to give an answer before moving to the next qusetion as they are not allowed to skip any.  

__Instruction button__ : ![The instruction button will take the user to the rules](assets/images/instructions-button.png)

The instruction button "rules" takes the user to the rules of the game. They can use this to see the rules before beginning or during the quiz. The style is consistent with the quiz and the background with the opacity is also here present. This screen along with everything else, is also responsive.  In order to return to the quiz, or to the home page, a "Back" button at the rules text can be clicked. Once clicked the user will be taken back to the same question where they were at before clicking the button or back to the home page where they can enter their name and start the quiz.

__Score__ : ![The score page showing the name of the user along with their score and the outcome of the quiz](assets/images/scores-readme.png)

The score page presents the final score to the user along with the name they provided at the beginning. Depending on the score they got, the user will get different outcomes. In particular there are 3 different score blocks. One if they got a negative number, one if they scored a number between 0 and 50 and the last one for users that scored a number from 51 to 100. A "try again" button is also present. If clicked, the user will start the quiz again. The user that wants to start the quiz over will not be asked for their name again. The quiz will start automatically as soon as they click the button. 

----
## Testing

__Manual testing__: I have tested the quiz manually to ensure it works as intended on different devices. 
1. The media query are working as intended adapting all the sections to the preferred screen device. When resizing, the elements work correctly. 
2. I have checked that all the elements present on the page are visible or invisible at the right time. 
3. I have checked that the user can't proceed if they don't provide a name.
4. I have checked that the user can go back respectively to the homeage or to the right question when they click on the instruction button. 
5. I have checked that the user can't proceed to the next question if they do not provide an answer.
5. I have checked that they are not asked for their name again if they decide to start the quiz again after an attempt.  

__Validators__: ![Validators screeshot showing the outcome of html, css and js testing](assets/images/validators-readme.png)
The code has been tested using respectively w3cvalidator for [html](https://validator.w3.org/#validate_by_input), jigsaw for [css](https://jigsaw.w3.org/css-validator/) and jshint for [javascript](https://jshint.com/). In javascript the validator gave me multiple warnings for the use of "const". I have then put the version specification in the file in order to get rid of them. The variable "quizQuestions" has been highlighted in both js file. The reason is that I have defined it in one file and used it in the other one. Question.js in fact only contains a list of all the quiz questions. I have 2 js files as make only one file including all the questions, options, and values would have made the file really hard to read. 

![lighthouse testing screenshot on both mobile and desktop](assets/images/lighthouse%20readme.png)
Additionaly,I have also used lighthouse for testing. Both desktop and mobile testing have retured an accessibility of 100%. 

__Fixed Bugs__: While developing the website I have changed the structure of the quiz making it more user friendly and encountered some styling obstacles. I have also encountered some obstacles in the logical part of it as for example how to pick a random number and make sure it is not repeated in the same quiz. 

`1`

**Expected**
Parts of the website should be shown/hidden depending on the actions the user performs. 

**Testing**
I tested this by clicking the buttons and filling the fields that a user would when using the site. 

**Result**
Parts of the site were hidden and shown, but even when they were hidden they still filled up space on the page meaning that the other content that was shown was in the wrong place. 

**Fix**
I had originally used `visibility: hidden` to hide content, but I found that it was the cause of the space being taken up in my research. I then switched to `display: none` instead which solved the issue. 

`2`

**Expected**
Clicking the "Rules" button in the quiz should show the rules section and hide the quiz. Clicking "Back" should then bring the user back to the same question they were on before viewing the rules. 

**Testing**
I tested this by clicking the rules button when viewing different questions in the quiz and then clicking the "Back" button to return to the quiz. 

**Result**
Clicking "Back" from the rules brought the user back to a different question than when they clicked the "Rules" button originally. 

**Fix**
In the quiz form there are 2 buttons. Originally I didn't specify the types of the buttons so both buttons were submitting the form and moving to the next question. To fix it I added `type="submit"` to the "Next" button and `type="button"` to the "Rules" button which stopped the "Rules" button from submitting the question by mistake. 

`3`

**Expected**
Answering the questions and clicking next should go to the next quiz question and not have any errors in the console. 

**Testing**
I tested this by navigating through the quiz multiple times, and starting over at the end as a user would. I checked the console as I was doing this. 

**Result**
Clicking "Next" on a question would sometimes show an error in the console `cannot read property of undefined`. 

**Fix**
The issue was that I was placing `undefined` questions in the list of questions to show to the user by mistake. To get the list of questions I pick them at random from an array. To do that I generate a random number between 0 and the length of the array. However, I added `+ 1` to this number by mistake which meant I could get an index too big for the array. To fix this I just had to make sure the number I generated was between `0` and `19` as there are `20` total questions I have defined to choose from. 


----
## Deployment

The site has been deployed to GitHub pages. The steps to deploy are as follows:
1. Click on the Settings tab in the repository.
2. Click Pages under the code and automation section.
3. Select "main" as the branch and click Save.
4. Refresh the page and wait for the link to appear.

The live link can be found at: https://ilaria-barletta.github.io/what-kind-of-muggle-are-you-quiz/ 

### Cloning & Forking
To fork this repository click on the "Fork" button in the top right of the repository. 

To clone this repository:
1. Click the "Code" button in the repository. 
2. Copy the clone link.
3. Use git to clone the copied link: `git clone LINK`. 

----
## Credits

1. The background image has been taken from google images. 
2. The code to pick a random question and have it dispayed if not chosen before has been taken from here:  https://stackoverflow.com/a/2380113 
3. The structure of this readme file has been taken from the CI Love running project. 
----