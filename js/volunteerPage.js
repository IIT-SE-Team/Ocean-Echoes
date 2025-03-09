// Fetch data from JSON file
fetch('../assets/data/event.json')
  .then(response => response.json())
  .then(events => {
    // Get the container where you want to append cards
    const container = document.getElementById('card-container');
    
    // Loop through each event in the JSON data
    events.forEach(event => {
      // Create the card container
      const card = document.createElement('div');
      card.classList.add('card');

      // Create the content section
      const content = document.createElement('div');
      content.classList.add('content');

      // Create title and append
      const title = document.createElement('h3');
      title.textContent = event.title;
      content.appendChild(title);

      // Create description and append
      const description = document.createElement('p');
      description.textContent = event.description;
      content.appendChild(description);

      // Create date-time section and append
      const dateTime = document.createElement('div');
      dateTime.classList.add('date-time');

      // Create date section
      const dateDiv = document.createElement('div');
      dateDiv.classList.add('date');
      const dateLabel = document.createElement('label');
      dateLabel.innerHTML = '<b>Date:</b>';
      const dateIcon = document.createElement('i');
      dateIcon.classList.add('fa', 'fa-calendar');
      const dateSpan = document.createElement('span');
      dateSpan.textContent = event.date;
      dateDiv.appendChild(dateLabel);
      dateDiv.appendChild(dateIcon);
      dateDiv.appendChild(dateSpan);

      // Create time section
      const timeDiv = document.createElement('div');
      timeDiv.classList.add('time');
      const timeLabel = document.createElement('label');
      timeLabel.innerHTML = '<b>Time:</b>';
      const timeIcon = document.createElement('i');
      timeIcon.classList.add('fa', 'fa-clock');
      const timeSpan = document.createElement('span');
      timeSpan.textContent = event.duration;
      timeDiv.appendChild(timeLabel);
      timeDiv.appendChild(timeIcon);
      timeDiv.appendChild(timeSpan);

      dateTime.appendChild(dateDiv);
      dateTime.appendChild(timeDiv);
      content.appendChild(dateTime);

      // Create image section
      // const cardImage = document.createElement('div');
      // cardImage.classList.add('card-image');
      // cardImage.style.backgroundImage = `url(${event.image})`;

      // Append content and image to the card
      card.appendChild(content);
      // card.appendChild(cardImage);

      // Append card to the container
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });




// Function to fetch and append the reviews
function loadReviews() {
  fetch('../assets/data/review.json')
      .then(response => response.json())
      .then(data => {
          const grid = document.querySelector('.grid');
          data.forEach(review => {
              const card = document.createElement('div');
              card.classList.add('card');
              
              // Create the inner content for the card
              const rating = document.createElement('h3');
              rating.textContent = review.rating;

              const stars = document.createElement('div');
              stars.classList.add('stars');
              stars.textContent = review.stars;

              const reviewText = document.createElement('p');
              reviewText.textContent = `"${review.review}"`;

              const author = document.createElement('p');
              author.classList.add('author');
              author.textContent = review.author;

              const date = document.createElement('p');
              date.classList.add('date');
              date.textContent = review.date;

              // Append all content to the card div
              card.appendChild(rating);
              card.appendChild(stars);
              card.appendChild(reviewText);
              card.appendChild(author);
              card.appendChild(date);

              // Append the card to the grid container
              grid.appendChild(card);
          });
      })
      .catch(error => {
          console.error("Error loading reviews:", error);
      });
}

document.addEventListener("DOMContentLoaded", loadReviews);

document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".star");
  const ratingInput = document.getElementById("ratingValue");
  const form = document.getElementById("ratingForm");

  stars.forEach(star => {
    star.addEventListener("click", function () {
      const rating = this.getAttribute("data-value");
      console.log(rating);
      addClassforSelectedStar(rating);
      ratingInput.value = rating;
    });
  });
});

function addClassforSelectedStar(count) {
  const stars = document.querySelectorAll(".star");
  
  // Remove "selected" class from all stars
  stars.forEach(star => star.classList.remove("selected"));

  // Add "selected" class to all stars up to the selected one
  stars.forEach((star , index) => {
    if (parseInt(star.getAttribute("data-value")) <= count) {
      setTimeout(() => {
        star.classList.add("selected");
      }, index * 80);
    }
  });
}
