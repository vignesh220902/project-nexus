 var change1=document.querySelector('#signingpage')
var change=document.querySelector('#logpage')
var fpass=document.querySelector('.fpass')

//login page transform to signup page
function myfun(){
    change1.classList.add("mystyle1")
    change.classList.remove("mystyle")
    change.setAttribute("style","transform:transition:2s,");
    change1.style.transform="rotate(7deg)"
}

//signup page transform to login page
function myfun1(){
    change.classList.add("mystyle") 
    change1.classList.remove("mystyle1")
    change1.setAttribute("style"," transtion:5s; ");
    
} 

function fpclick(){
    alert('This Function Currently Unavailable !')
    alert.style.backgroundcolor="white"
}

// ==================================================================================

var form = document.querySelector('#form');
var username = document.querySelector('#fname');
var emails = document.querySelector('#usermail');
var password = document.querySelector('#pass');
var password2 = document.querySelector('#pass2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkinputs();
});

//this function join the error class
function seterrorfor(input, message) {
    const inputcontrol = input.parentElement;
    const errorelement = inputcontrol.querySelector('.erroring');
    errorelement.innerText = message; 
    inputcontrol.className = 'inputitems error'; 
}

//this function join the success class
function setsuccessfor(input) {
    const inputcontrol = input.parentElement;
    const errorelement = inputcontrol.querySelector('.erroring');
    errorelement.innerText = ''; 
    inputcontrol.className = 'inputitems success'; 
}


function checkinputs() {
    const uservalue = username.value;
    const emailvalue = emails.value;
    const passwordValue = password.value;
    const password2Value = password2.value;
    
    if (uservalue === '') {
        seterrorfor(username, "Name is mandatory");
    } else {
        setsuccessfor(username);
    }

    if (emailvalue === '') {
        seterrorfor(emails, 'Email is required');
    } else if (!isValidEmail(emailvalue)) {
        seterrorfor(emails, 'Provide a valid email address');
    } else {
        setsuccessfor(emails);
    }

    if (passwordValue === '') {
        seterrorfor(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        seterrorfor(password, 'Password must be at least 8 characters.');
    } else {
        setsuccessfor(password);
    }

    if (password2Value === '') {
        seterrorfor(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        seterrorfor(password2, "Passwords don't match");
    } else {
        setsuccessfor(password2);
    }
}

var loginForm = document.getElementById('fom');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const loginEmail = loginForm.querySelector('input[name="usermail"]');
    const loginPassword = loginForm.querySelector('input[name="pass1"]');
    checkRequired([loginEmail, loginPassword]);
    alert("your login submitted")
});