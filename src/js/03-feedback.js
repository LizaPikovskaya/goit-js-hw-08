import throttle from 'lodash.throttle';


const formEl = document.querySelector('.feedback-form');
const inputEmailEl = document.querySelector('input[name="email"]');
const textareaMessageEl = document.querySelector('textarea[name="email"]');

formEl.addEventListener('input', throttle(onFormInput), 500)
formEl.addEventListener('submit', onFormSubmit);


const FEEDBACK_FORM_STATE = "feedback-form-state";
const formData = {}
restoreFormValue();

function onFormInput (event) {
formData[event.target.name] = event.target.value
localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(formData));

}

function restoreFormValue() {
const savedData = JSON.parse(localStorage.getItem((FEEDBACK_FORM_STATE)));

if(savedData) {
inputEmailEl.value = savedData[inputEmailEl.name];
textareaMessageEl.value = savedData[textareaMessageEl.name];
}
}

function onFormSubmit(event) {
event.preventDefault()
event.currentTarget.reset();
localStorage.removeItem(FEEDBACK_FORM_STATE);
console.log(formData);
}
