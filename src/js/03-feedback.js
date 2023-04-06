import _ from 'lodash';


const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', onFormInput)
// formEl.addEventListener('submit', onFormSubmit);


const inputEmailEl = document.querySelector('input[name="email"]');
const textareaMessageEl = document.querySelector('textarea[name="email"]');
const FEEDBACK_FORM_STATE = "feedback-form-state";
const formData = {}

function onFormInput (event) {
formData[event.target.name] = event.target.value
localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(formData));

}

function restoreFormValue() {
const savedData = localStorage.getItem(JSON.parse(FEEDBACK_FORM_STATE));

if(savedData) {
inputEmailEl.value = savedData[inputEmailEl.name];
textareaMessageEl.value = savedData[textareaMessageEl.name];
}
}

restoreFormValue()

// function onFormSubmit(event) {
// event.preventDefault()
// if(!event.target.trim()) {
//     alert ('Заповніть поля, будь ласка');
//     return
// }
// }

// if (window.localStorage) {
//   var elements = document.querySelectorAll('[name]');

//   for (var i = 0, length = elements.length; i < length; i++) {
//     (function (element) {
//       var name = element.getAttribute('name');

//       element.value = localStorage.getItem(name) || '';

//       element.onkeyup = function () {
//         localStorage.setItem(name, element.value);
//       };
//     })(elements[i]);
//   }
// }