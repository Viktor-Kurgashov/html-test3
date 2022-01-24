const reviewModal = document.getElementsByClassName('review-modal')[0];

function openReview () {
  if (reviewModal.firstElementChild.src) reviewModal.firstElementChild.src = "https://www.youtube.com/embed/BqAXIbQFqGg";
  document.body.style.paddingRight = window.innerWidth - document.body.clientWidth + 'px';
  document.body.style.overflowY = 'hidden';
  reviewModal.hidden = false;
}

reviewModal.addEventListener('click', () => {
  document.body.style.paddingRight = document.body.style.overflowY = '';
  reviewModal.hidden = true;
})
