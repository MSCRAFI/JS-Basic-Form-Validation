const formObj = {username: '', email: '', pass: ''}; // saving form info as object

// signup form event
const formElement = document.getElementById('signin-form');
formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailElement = document.querySelector('.js-reg-email'); // form email
    const passElement = document.querySelector('.js-reg-pass'); // form pass
    const confirmPassElement = document.querySelector('.js-reg-confirm-pass'); // form confirm pass
    const warningElement = document.querySelector('.js-warning'); // form warning
    const usernameElement = document.querySelector('.js-reg-username'); //form username
    formObj.username = usernameElement.value; // adding username to the object
    if (emailElement) { // email availablity condition
        formObj.email = emailElement.value;
    }
    const getPass = passElement.value; // adding pass to the object
    if (confirmPassElement) { // confirm pass availablity condition
        const getConfirmPass = confirmPassElement.value;
    
        if (getPass === getConfirmPass) { // condition if pass and confirm pass matches
            formObj.pass = getPass;

            warningElement.innerHTML = `Congratulations!! ${formObj.username}, You have successfully registered. Now please sign in.`; // success warning html
            
            // sign in form html
            const signInHTML = `
            <form id="signin-form">
            <h3 class="css-heading">Sign In</h3>
            <div class="js-form">
            <p class="js-warning"></p>
            <input type="text" placeholder="Username" class="js-reg-username css-input" id="signup-username" required> <br>
            <input type="password" placeholder="Password" class="js-reg-pass css-input" id="signup-password" required> <br>
            <button type="submit" class="js-red-submit css-submit-btn">Sign in</button>
            </div>
            </form>
            `;

            // Delayed code
            setTimeout(function() {
                // Code to be executed after the delay
                formElement.innerHTML = signInHTML;
                formElement.addEventListener('submit', (event) => {
                    event.preventDefault();
                    // executing signin action function
                    signInAction(usernameElement, passElement, warningElement);
                });
            }, 2000);
  
        }
        else {
            warningElement.innerHTML = '<p class="css-warning">Your password and confirm password doesn\'t match</p>'
        }
    }
});

// signin action function
function signInAction(signInUserElement, signinPassElement, warningElement) {
    // getting user and pass from html element
    const signInUserName = signInUserElement.value;
    const signInPass = signinPassElement.value;

    // conditions for signin
    if (signInUserName === formObj.username && signInPass === formObj.pass) {
        signInSuccess = `<p class="css-signin">${formObj.username}, You have successfully signed in</p>`;


        formElement.innerHTML = signInSuccess;
    }
    else {
        warningElement.innerHTML = '<p class="css-warning">You\'re username and password doesn\'t match</p>';
    }
}