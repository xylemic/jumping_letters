const letters = document.querySelectorAll('.container span');

letters.forEach(letter => {
  letter.addEventListener('click', (e) => {
    e.target.classList.add('active');
  });
});
