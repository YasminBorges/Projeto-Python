document.addEventListener("DOMContentLoaded", function() {
    const includeDiv = document.querySelector('[data-include]');
    const filePath = includeDiv.getAttribute('data-include');
  
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(html => {
        includeDiv.innerHTML = html;
      })
      .catch(error => {
        console.error('There was a problem fetching the included file:', error);
      });
  });