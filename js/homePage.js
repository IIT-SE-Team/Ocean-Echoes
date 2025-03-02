// homePage.js

carouselNextBtn = document.getElementById('carousel-next-btn');
carouselPrevBtn = document.getElementById('carousel-prev-btn');
const radios = document.querySelectorAll('input[name="slide"]');




carouselNextBtn.addEventListener('click', () => {
  let checkedIndex = Array.from(radios).findIndex(radio => radio.checked);
  if (checkedIndex < radios.length) {
    radios[checkedIndex+1].checked = true
  }
})
carouselPrevBtn.addEventListener('click', () => {
  let checkedIndex = Array.from(radios).findIndex(radio => radio.checked);
  if (checkedIndex >= 0) {
    radios[checkedIndex-1].checked = true
  }
})



