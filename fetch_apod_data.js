const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=yGr83BpP9euSupCDqbIj0hboezorJJ7jHQCcUcCz';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Populate the elements with fetched data
    document.getElementById('apod-title').textContent = data.title;
    document.getElementById('apod-image').src = data.url;
    document.getElementById('apod-image').alt = data.title;
    document.getElementById('apod-explanation').textContent = data.explanation;
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
