import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const userData = {
  email: '',
  message: '',
};

saveValueOfInput(userData);
setValueOfUserData(userData);
form.addEventListener('input', throttle(saveValueOfLocalStorage, 500));

function saveValueOfLocalStorage(e) {

setValueOfUserData(userData);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userData));
  saveValueOfInput(userData);
}
function saveValueOfInput(userData) {
  const gettingValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (gettingValue) {

    form.elements.email.value = gettingValue.email;
    form.elements.message.value = gettingValue.message;

  }
}
function setValueOfUserData (){
    userData.email = form.elements.email.value;
    userData.message = form.elements.message.value;

}
form.addEventListener('submit', submitForm);

function submitForm(e) {
  if (form.elements.email.value === '' || form.elements.message.value === '') {
    alert('You need to fill all fields');
    e.preventDefault();
  } else {
    console.log(userData);
    e.preventDefault();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    e.currentTarget.reset();
  }
}
