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
function RedirectHome() {
    window.location.href = "./home.html";
}

function RedirectSignin() {
    window.location.href = "./login.html";
}

function RedirectSignup() {
    window.location.href = "./signup.html";
}
