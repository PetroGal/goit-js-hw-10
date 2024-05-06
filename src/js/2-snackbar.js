import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');
const delayEl = document.querySelector('.input-delay');

formEl.addEventListener('submit', handleSubmit);

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    if (state === 'fulfilled') {
      setTimeout(() => {
        resolve();
      }, `${delay}`);
    } else {
      setTimeout(() => {
        reject();
      }, `${delay}`);
    }
  });
}

function handleSubmit(event) {
  event.preventDefault();
  const delay = event.target.elements.delay.value;
  const state = event.target.elements.state.value;

  createPromise(delay, state)
    .then(function () {
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(function () {
      iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
}
