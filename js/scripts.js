const formObj = {username: '', email: '', pass: ''};

const formElement = document.getElementById('signin-form');
formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailElement = document.querySelector('.js-reg-email');
    const passElement = document.querySelector('.js-reg-pass');
    const confirmPassElement = document.querySelector('.js-reg-confirm-pass');
    const warningElement = document.querySelector('.js-warning');
    const usernameElement = document.querySelector('.js-reg-username');
    formObj.username = usernameElement.value;
    if (emailElement) {
        formObj.email = emailElement.value;
    }
    const getPass = passElement.value;
    if (confirmPassElement) {
        const getConfirmPass = confirmPassElement.value;
    
        if (getPass === getConfirmPass) {
            formObj.pass = getPass;

            warningElement.innerHTML = `Congratulations!! ${formObj.username}, You have successfully registered. Now please sign in.`;
            
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
            formElement.innerHTML = signInHTML;
            formElement.addEventListener('submit', (event) => {
                event.preventDefault();
                signInAction();
            });
        }
        else {
            warningElement.innerHTML = '<p class="css-warning">Your password and confirm password doesn\'t match</p>'
        }
    }
});


function signInAction() {
    const signInUserElement = document.querySelector('.js-reg-username');
    const signinPassElement = document.querySelector('.js-reg-pass');
    const warningElement = document.querySelector('.js-warning');
    const signInUserName = signInUserElement.value;
    const signInPass = signinPassElement.value;

    if (signInUserName === formObj.username && signInPass === formObj.pass) {
        signInSuccess = `<p class="css-signin">${formObj.username}, You have successfully signed in</p>`;


        formElement.innerHTML = signInSuccess;
    }
    else {
        warningElement.innerHTML = '<p class="css-warning">You\'re username and password doesn\'t match</p>';
    }
}