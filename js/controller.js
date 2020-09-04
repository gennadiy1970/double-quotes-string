import refs from './refs.js';


function getCode(event) {
  event.preventDefault();
  const data = new FormData(refs.form);
  const code = data.get('field');
  const res = code
  .split('\n')
  .map((e, i, arr) => i === arr.length - 1 ? `"${e}"` : `"${e}"  + \n` )
  .join('');
  refs.result.textContent = res;
}

function clearCode(event) {
  event.preventDefault();
  refs.result.textContent = "";
}

refs.form.addEventListener('submit', getCode)
refs.form.addEventListener('reset', clearCode)