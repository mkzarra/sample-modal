var backdrop = document.getElementById('backdrop');
var modal = document.getElementById('modal');
var closeButton = document.getElementById('close_button');
var open = document.getElementById('open');

backdrop.addEventListener('click', hideModal);
closeButton.addEventListener('click', hideModal);
open.addEventListener('click', () => showModal(modal));

function showModal(m) {
  backdrop.style.display = 'block';
  m.style.display = 'block';
  console.log('open');
}

function hideModal() {
  backdrop.style.display = 'none';
  modal.style.display = 'none';
  console.log('close');
}