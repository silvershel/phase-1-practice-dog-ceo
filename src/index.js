console.log('%c HI', 'color: firebrick')
// FETCH DOG CEO

// CHALLENGE 1
// on page load, fetches the images using the url above ⬆️
// parses the response as JSON
// adds image elements to the DOM for each 🤔 image in the array
document.addEventListener("DOMContentLoaded", () => {
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(response => response.json())
  .then(data => handleDogs(data))
  .catch(error => handleError(error));
  fetch("https://dog.ceo/api/breeds/list/all")
  .then(response => response.json())
  .then(data => {
    handleBreeds(data)
  })
  .catch(error => handleError(error));
});

function handleDogs(data) {
  let container = document.getElementById('dog-image-container');
  let images = data.message;
  for (let image of images) {
    let img = document.createElement('img');
    img.src = image;
    container.appendChild(img);
  };
}

function handleBreeds(data) {
  // CHALLENGE 2
    // stringify image URLs?
    // data to pull from: "https://images.dog.ceo/breeds/DOGBREEDS/butnoteverythingafter"
    // https://dog.ceo/api/breeds/list/all
    let breedList = document.getElementById('dog-breeds');
    let breeds = Object.keys(data.message);
    for (let breed of breeds) {
      let breedItem = document.createElement('li');
      breedItem.textContent = breed;
      breedList.appendChild(breedItem);
  // CHALLENGE 3
      breedItem.addEventListener('click', () => {
        breedItem.style.color = "brown";
      })
    }
  // CHALLENGE 4
    let breedsDropdown = document.getElementById('breed-dropdown')
    breedsDropdown.addEventListener('change', () => {
      const selectedLetter = breedsDropdown.value;
      const breedItems = document.querySelectorAll('#dog-breeds li');

      breedItems.forEach((breedItem) => {
        if (selectedLetter === breedItem.textContent.charAt(0)) {
          breedItem.style.display = 'block';
        } else {
          breedItem.style.display = 'none';
        }
      });
    });
}

// CHALLENGE 2
// Hint: Recall that you will need to ensure that your JavaScript doesn't 
    // run until after the HTML has loaded. You can use whichever method you prefer to accomplish this.
// on page load, fetches all the dog breeds using the url above ⬆️
// adds the breeds to the page in the <ul> provided in index.html

// CHALLENGE 3
// Once all of the breeds are rendered in the <ul>, add JavaScript so that, 
// when the user clicks on any one of the <li>s, the font color of that <li> changes. 
// This can be a color of your choosing.

// CHALLENGE 4
// Once we are able to load all of the dog breeds onto the page, 
// add JavaScript so that the user can filter breeds that start with a 
// particular letter using a dropdownLinks to an external site..
// For example, if the user selects 'a' in the dropdown, only show the 
// breeds with names that start with the letter a. For simplicity, 
// the dropdown only includes the letters a-d. However, we can imagine expanding 
// this to include the entire alphabet.

