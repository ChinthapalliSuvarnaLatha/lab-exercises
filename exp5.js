
const form = document.getElementById('registrationForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const phone = document.getElementById('phone');


const fullNameError = document.getElementById('fullNameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const phoneError = document.getElementById('phoneError');
const successMessage = document.getElementById('successMessage');


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}$/;
const phoneRegex = /^\d{10}$/;


function validateFullName() {
  if (fullName.value.trim() === '') {
    setError(fullName, fullNameError, 'Full name is required');
    return false;
  }
  setSuccess(fullName, fullNameError);
  return true;
}

function validateEmail() {
  if (!emailRegex.test(email.value.trim())) {
    setError(email, emailError, 'Enter a valid email address');
    return false;
  }
  setSuccess(email, emailError);
  return true;
}

function validatePassword() {
  if (!passwordRegex.test(password.value.trim())) {
    setError(password, passwordError, 'Password must be at least 6 characters, include a number and a special character');
    return false;
  }
  setSuccess(password, passwordError);
  return true;
}

function validatePhone() {
  if (!phoneRegex.test(phone.value.trim())) {
    setError(phone, phoneError, 'Phone number must be exactly 10 digits');
    return false;
  }
  setSuccess(phone, phoneError);
  return true;
}


function setError(input, errorElement, message) {
  input.classList.add('invalid');
  input.classList.remove('valid');
  errorElement.textContent = message;
}

function setSuccess(input, errorElement) {
  input.classList.remove('invalid');
  input.classList.add('valid');
  errorElement.textContent = '';
}


fullName.addEventListener('input', validateFullName);
email.addEventListener('input', validateEmail);
password.addEventListener('input', validatePassword);
phone.addEventListener('input', validatePhone);


form.addEventListener('submit', function (e) {
  e.preventDefault();

  const isFullNameValid = validateFullName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isPhoneValid = validatePhone();

  const isFormValid = isFullNameValid && isEmailValid && isPasswordValid && isPhoneValid;

  if (isFormValid) {
    successMessage.textContent = 'Registration successful!';
    form.reset();
    clearValidationStyles();
  } else {
    successMessage.textContent = '';
  }
});

function clearValidationStyles() {
  [fullName, email, password, phone].forEach((input) => {
    input.classList.remove('valid');
    input.classList.remove('invalid');
  });
}

