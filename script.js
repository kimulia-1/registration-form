let form = document.querySelector('.js-form'),
  getName = document.querySelector('.js-first-name'),
  getSecondName = document.querySelector('.js-second-name'),
  getEmail = document.querySelector('.js-email'),
  getPassword = document.querySelector('.js-password'),
  getConfirmPassword = document.querySelector('.js-confirm-password'),
  getAge = document.querySelector('.js-age'),
  nameMistake = document.querySelector('.js-name-mistake'),
  secondNameMistake = document.querySelector('.js-second-name-mistake'),
  emailMistake = document.querySelector('.js-email-mistake'),
  passwordMistake = document.querySelector('.js-password-mistake'),
  confirmPasswordMistake = document.querySelector('.js-confirm-password-mistake'),
  ageMistake = document.querySelector('.js-age-mistake');
  


const validateName = (str) => {
  const regExp = /^([А-Я]{1}[а-яё]{1,35}|[A-Z]{1}[a-z]{1,35})$/;
  return regExp.test(str);
};
const validateEmail = (str) => {
  const regExp =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return regExp.test(str);
};
const validatePassword = (str) => {
  const regExp = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;
  return regExp.test(str);
};


const isAdult = (str) => {
  let dateOfBirthdayParse = Date.parse(str);
  let dateNow = Date.now();
  const adultYearsInMilliseconds = 567648000000;
  return (dateNow - dateOfBirthdayParse) > adultYearsInMilliseconds ? true : false;
};

form.onsubmit = () => {
  let nameVal = getName.value,
    secondNameVal = getSecondName.value,
    emailVal = getEmail.value,
    passwordVal = getPassword.value,
    confirmPasswordVal = getConfirmPassword.value,
    ageVal = getAge.value;

  const mistakes = {};

  // function builder(validation, input, mistake) {
  //   const mistakes = {};
  //   const inputVal = input.value;
  //   if (!validation(inputVal) || input === '') {
  //     mistake.classList.add('mistake-error');
  //     input.classList.add('error');
  //     mistakes.input = 1;
  //   }
  //   else {
  //     mistake.classList.remove('mistake-error');
  //     input.classList.remove('error');
  //     delete mistakes.input;
  //   }
  // };

  // builder(validateName, getName, nameMistake);
  // builder(validateName, getSecondName, secondNameMistake);
  // builder(validateEmail, getEmail, emailMistake);
  // builder(validatePassword, getPassword, passwordMistake);
  // builder(isAdult, getAge, ageMistake);

  if (!validateName(nameVal) || getName === '') {
    nameMistake.classList.add('mistake-error');
    getName.classList.add('error');
    mistakes.getName = 1;
  }
  else {
    nameMistake.classList.remove('mistake-error');
    getName.classList.remove('error');
    delete mistakes.getName;
  };
  
  if (!validateName(secondNameVal) || getSecondName === '') {
    secondNameMistake.classList.add('mistake-error');
    getSecondName.classList.add('error');
    mistakes.getSecondName = 1;
  }
  else {
    secondNameMistake.classList.remove('mistake-error');
    getSecondName.classList.remove('error');
    delete mistakes.getSecondName;
  };
  
  if (!validateEmail(emailVal) || getEmail === '') {
    emailMistake.classList.add('mistake-error');
    getEmail.classList.add('error');
    mistakes.getEmail = 1;
  }
  else {
    emailMistake.classList.remove('mistake-error');
    getEmail.classList.remove('error');
    delete mistakes.getEmail;
  };
  
  if (!validatePassword(passwordVal) || getPassword === '') {
    passwordMistake.classList.add('mistake-error');
    getPassword.classList.add('error');
    mistakes.getPassword = 1;
  }
  else {
    passwordMistake.classList.remove('mistake-error');
    getPassword.classList.remove('error');
    delete mistakes.getPassword;
  };

  if (passwordVal !== confirmPasswordVal || confirmPasswordVal === '') {
    console.log('password not confirm');
    confirmPasswordMistake.classList.add('mistake-error');
    getConfirmPassword.classList.add('error');
    mistakes.getConfirmPassword = 1;
  }
  else {
    confirmPasswordMistake.classList.remove('mistake-error');
    getConfirmPassword.classList.remove('error');
    delete mistakes.getConfirmPassword;
  };

  if (!isAdult(ageVal) || getAge === '') {
    ageMistake.classList.add('mistake-error');
    getAge.classList.add('error');
    mistakes.getAge = 1;
  }
  else {
    ageMistake.classList.remove('mistake-error');
    getAge.classList.remove('error');
    delete mistakes.getAge;
  };

  if (Object.keys(mistakes).length !== 0) {
    return false;
  }
  else if (Object.keys(mistakes).length === 0) {
    return true;
  }
};





