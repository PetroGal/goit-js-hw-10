import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');
const delayEl = document.querySelector('.input-delay');

formEl.addEventListener('submit', handleSubmit);

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

function handleSubmit(event) {
  event.preventDefault();
  const delay = event.target.elements.delay.value;
  const state = event.target.elements.state.value;

  createPromise(delay, state)
    .then(function (delay) {
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: '#59A10D',
        messageColor: 'white',
        icon: '',
      });
    })
    .catch(function (delay) {
      iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: '#EF4040',
        messageColor: 'white',
        icon: '',
        color: 'white',
      });
    });
}
