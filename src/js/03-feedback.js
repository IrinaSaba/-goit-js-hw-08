import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

const LOCALSTORAGE_KEY = 'feedback-form-state';

updateForm();
const user = {};
refs.form.addEventListener(
  'input',
  throttle(event => {
    user[event.target.name] = event.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(user));
  }),
  500,
);

refs.form.addEventListener('submit', event => {
  event.preventDefault();
  const lastUser = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  console.log(lastUser);
  localStorage.removeItem(LOCALSTORAGE_KEY);
  refs.form.reset();
});

function updateForm() {
  if (localStorage.getItem(LOCALSTORAGE_KEY)) {
    const UserStorage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    //   console.log(UserSorage);
    refs.message.value = UserStorage.message;
    refs.email.value = UserStorage.email;
    return;
  }
  refs.message.value = '';
  refs.email.value = '';
}
