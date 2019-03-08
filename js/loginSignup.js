// const signUp = document.querySelector('.sign-up');
// const signIn = document.querySelector('.sign-in');
//
// // Switch btns
// const btn1 = document.querySelector('.opposite-btn1');
// const btn2 = document.querySelector('.opposite-btn2');
//
//
// Switches to 'Create Account'
// btn1.addEventListener('click', () => {
//   signUp.style.display = 'block';
//   signIn.style.display = 'none';
// });
//
// // Switches to 'Sign In'
// btn2.addEventListener('click', () => {
//   signUp.style.display = 'none';
//   signIn.style.display = 'block';
// });

// // Switches to 'Create Account'
// btn1.addEventListener('click', () => {
//   window.location.pathname = '/home.html'
// });
//
// // Switches to 'Sign In'
// btn2.addEventListener('click', () => {
//   window.location.pathname = '/home.html'
// });
//
// opposite-btn1.addEventListener('click', () => {
//   window.location.pathname = '/signup.html'
// }

// document.getElementById("signup").onclick = function () {
//         location.href = "www.yoursite.com";
// }
//
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function RedirectHome() {
    var emailForm = document.getElementById("emailForm");
    if (validateEmail(emailForm.value))
      {
        window.location.href = "./home.html";
      }
    else
    {
      emailForm.value = "";
      emailForm.placeholder = "Invalid Email Address";
    }
}

function RedirectSignin() {
    window.location.href = "./login.html";
}

function RedirectSignup() {
    window.location.href = "./signup.html";
}
