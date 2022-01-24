let modalVisible = false;
const btn = document.getElementsByClassName('nav-btn')[0],
    modal = document.getElementsByClassName('nav-modal')[0];

btn.addEventListener('click', () => {
  if (!modalVisible) {
    document.body.style.paddingRight = window.innerWidth - document.body.clientWidth + 'px';
    document.body.style.overflowY = 'hidden';
    modal.classList.add('_visible');
    btn.classList.add('_closing');
    modalVisible = true;
  }
  else {
    document.body.style.paddingRight = document.body.style.overflowY = '';
    modal.classList.remove('_visible');
    btn.classList.remove('_closing');
    modalVisible = false;
  }
});

modal.addEventListener('click', () => {
  if (modalVisible) {
    document.body.style.paddingRight = document.body.style.overflowY = '';
    modal.classList.remove('_visible');
    btn.classList.remove('_closing');
    modalVisible = false;
  }
});
