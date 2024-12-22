document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const apodAPI = "https://api.nasa.gov/planetary/apod"; // Replace DEMO_KEY with your NASA API key

async function fetchAPOD() {
  try {
    const response = await fetch(apodAPI);
    const data = await response.json();

    // Update the APOD section
    document.getElementById("apod-image").src = data.url;
    document.getElementById("apod-image").alt = data.title;
    document.getElementById("apod-title").textContent = data.title;
    document.getElementById("apod-explanation").textContent = data.explanation;
  } catch (error) {
    console.error("Error fetching APOD:", error);
    document.getElementById("apod-title").textContent = "Error loading Picture of the Day";
    document.getElementById("apod-explanation").textContent =
      "Unable to fetch the Astronomy Picture of the Day. Please try again later.";
  }
}

// Fetch APOD on page load
fetchAPOD();
