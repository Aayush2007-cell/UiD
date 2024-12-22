const galleryDiv = document.getElementById("gallery");
const loadingSpinner = document.getElementById("loading-spinner");

loadingSpinner.style.display = "block"; // Show spinner initially

fetch(`https://images-api.nasa.gov/search?q=space&media_type=image`)
  .then(response => response.json())
  .then(data => {
    loadingSpinner.style.display = "none"; // Hide spinner when images are loaded
    const images = data.collection.items.slice(0, 10);
    images.forEach(item => {
      const img = document.createElement("img");
      img.src = item.links[0].href;
      img.alt = item.data[0].title;
      galleryDiv.appendChild(img);
    });
  })
  .catch(error => {
    loadingSpinner.style.display = "none";
    galleryDiv.textContent = "Failed to load images. Please try again later.";
    console.error("NASA API Error:", error);
  });
