const refs = {
  name: document.getElementById('name'),
  message: document.getElementById('message'),
  agreement: document.getElementById('agreement'),
  age: document.getElementById('age'),
};

localStorage.setItem('name', 'Tatiana');

window.addEventListener('load', () => {
  const message = localStorage.getItem('message');
  const agreement = localStorage.getItem('agreement');

  refs.name.value = localStorage.getItem('name');
  refs.message.value = message;
  refs.agreement.checked = agreement === 'true';
});
