let form = document.querySelector('.js-form'),
  formInputs = document.querySelectorAll('.js-input'),
  inputFirstName = document.querySelector('.js-first-name'),
  inputSecondName = document.querySelector('.js-second-name'),
  inputEmail = document.querySelector('.js-email'),
  inputPassword = document.querySelector('.js-password'),
  inputConfirmPassword = document.querySelector('.js-confirm-password'),
  selectDay = document.querySelector('.js-day'),
  selectMonth = document.querySelector('.js-month'),
  selectYear = document.querySelector('.js-year'),
  nameMistake = document.querySelector('.js-name-mistake'),
  secondNameMistake = document.querySelector('.js-second-name-mistake'),
  emailMistake = document.querySelector('.js-email-mistake'),
  passwordMistake = document.querySelector('.js-password-mistake'),
  confirmPasswordMistake = document.querySelector('.js-confirm-password-mistake'),
  ageMistake = document.querySelector('.js-age-mistake');
  


const validateName = (str) => {
  const re = /^([А-Я]{1}[а-яё]{1,35}|[A-Z]{1}[a-z]{1,35})$/;
  return re.test(str);
};
const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(email);
};
const validatePassword = (str) => {
  const re = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;
  return re.test(str);
};

const isAdult = (selectDay, selectMonth, selectYear) => {
  let birthDay = selectDay.value,
    birthMonth = selectMonth.value,
    birthYear = selectYear.value;
  let dateOfBirthday = `${birthYear}-${birthMonth}-${birthDay}`;
  let dateOfBirthdayParse = Date.parse(dateOfBirthday);
  let dateNow = Date.now();
  const adultYearsInMilliseconds = 567648000000;
  return (dateNow - dateOfBirthdayParse) > adultYearsInMilliseconds ? true : false;
};

form.onsubmit = () => {
  let firstName = inputFirstName.value,
    secondName = inputSecondName.value,
    emailVal = inputEmail.value,
    passwordVal = inputPassword.value,
    confirmPasswordVal = inputConfirmPassword.value,
    emptyInputs = Array.from(formInputs).filter(input => input.value === '');

  formInputs.forEach(function (input) {
    if (input.value === '') {
      input.classList.add('error');
    }
    else {
      input.classList.remove('error');
    }
  })
  
  if (emptyInputs.length !== 0) {
    console.log('inputs not filled');
    return false;
  };

  if (!validateName(firstName)) {
    console.log('first name not valid');
    nameMistake.classList.add('mistake-error');
    inputFirstName.classList.add('error');
    return false;
  }
  else {
    nameMistake.classList.remove('mistake-error');
    inputFirstName.classList.remove('error');
  };

  if (!validateName(secondName)) {
    console.log('second name not valid');
    secondNameMistake.classList.add('mistake-error')
    inputSecondName.classList.add('error');
    return false;
  }
  else {
    secondNameMistake.classList.remove('mistake-error')
    inputFirstName.classList.remove('error');
  };
  
  if (!validateEmail(emailVal)) {
    console.log('email not valid');
    emailMistake.classList.add('mistake-error');
    inputEmail.classList.add('error');
    return false;
  }
  else {
    emailMistake.classList.remove('mistake-error');
    inputEmail.classList.remove('error');
  };

  if (!validatePassword(passwordVal)) {
    console.log('password not valid');
    passwordMistake.classList.add('mistake-error');
    inputPassword.classList.add('error');
    return false;
  }
  else {
    passwordMistake.classList.remove('mistake-error');
    inputPassword.classList.remove('error');
  };

  if (passwordVal !== confirmPasswordVal) {
    console.log('password not confirm');
    confirmPasswordMistake.classList.add('mistake-error');
    inputConfirmPassword.classList.add('error');
    return false;
  }
  else {
    confirmPasswordMistake.classList.remove('mistake-error');
    inputConfirmPassword.classList.remove('error');
  };

  if (!isAdult(selectDay, selectMonth, selectYear)) {
    ageMistake.classList.add('mistake-error')
    selectDay.classList.add('select-error');
    selectMonth.classList.add('select-error');
    selectYear.classList.add('select-error');
    return false;
  }
  else {
    selectDay.classList.remove('select-error');
    selectMonth.classList.remove('select-error');
    selectYear.classList.remove('select-error');
  };
};





