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

  const navLinks = document.querySelector('.nav-links');
  const toggleNav = document.createElement('button');
  toggleNav.textContent = '☰';
  toggleNav.classList.add('nav-toggle');
  document.querySelector('header .container').appendChild(toggleNav);

  toggleNav.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  
  const searchBox = document.getElementById('search-box');
  const missions = document.querySelectorAll('.mission');

  searchBox.addEventListener('input', function () {
    const searchText = searchBox.value.toLowerCase();
    missions.forEach((mission) => {
      const missionName = mission.querySelector('h3').textContent.toLowerCase();
      const missionDescription = mission.querySelector('p').textContent.toLowerCase();
      if (missionName.includes(searchText) || missionDescription.includes(searchText)) {
        mission.style.display = 'block';
      } else {
        mission.style.display = 'none';
      }
    });
  });