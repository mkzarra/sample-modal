var backdrop = document.getElementById('backdrop');
var myModal = document.getElementById('modal');
var closeButton = document.getElementById('close_button');
var open = document.getElementById('open');

backdrop.addEventListener('click', hideModal); // this and the line below pass a reference to the hideModal function which will be executed when element is clicked
closeButton.addEventListener('click', hideModal); 
open.addEventListener('click', () => showModal(myModal)); // this arrow function prevents the function call from being immediately executed. This implementation is used here so that showModal can receive an arguement.

function showModal(modal) {
  // modal is a variable that can be used on whichever modal is passed through this function
  backdrop.style.display = 'block';
  modal.style.display = 'block';
  console.log('open');
}

function hideModal() {
  backdrop.style.display = 'none';
  myModal.style.display = 'none';
  console.log('close');
}