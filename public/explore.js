// Language proficiency data
const languageData = {
  labels: ['Javascript', 'Typescript', 'C++', 'C'],
  datasets: [{
      label: 'Proficiency Level',
      data: [85, 65, 50, 35],
      backgroundColor: [
          'rgba(99, 102, 241, 0.8)',  // Indigo for JS
          'rgba(59, 130, 246, 0.8)',  // Blue for TS
          'rgba(236, 72, 153, 0.8)',  // Pink for C++
          'rgba(248, 113, 113, 0.8)'  // Red for C
      ],
      borderWidth: 2,
      borderColor: [
          'rgba(99, 102, 241, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(236, 72, 153, 1)',
          'rgba(248, 113, 113, 1)'
      ]
  }]
};

// Initialize bar chart with animations
function initializeBarChart() {
  const ctx = document.getElementById('languageChart').getContext('2d');
  new Chart(ctx, {
      type: 'bar',
      data: languageData,
      options: {
          responsive: true,
          plugins: {
              legend: {
                  display: false
              },
              tooltip: {
                  callbacks: {
                      label: function(context) {
                          return `Proficiency: ${context.raw}%`;
                      }
                  }
              }
          },
          scales: {
              y: {
                  beginAtZero: true,
                  max: 100,
                  ticks: {
                      callback: function(value) {
                          return value + '%';
                      }
                  }
              }
          },
          animation: {
              duration: 2000,
              easing: 'easeInOutQuart'
          }
      }
  });
}

// Related technologies for each language
const relatedTech = {
  'Javascript': ['Node.js', 'React', 'Vue.js', 'Express'],
  'Typescript': ['Angular', 'Next.js', 'NestJS'],
  'C++': ['STL', 'Boost', 'Qt'],
  'C': ['Linux', 'Systems Programming', 'Embedded']
};

// Create skills grid with related technologies
function createSkillsGrid() {
  const skillsGrid = document.getElementById('skillsGrid');
  
  Object.entries(relatedTech).forEach(([lang, techs]) => {
      const skillDiv = document.createElement('div');
      skillDiv.className = 'skill-card';
      
      const techList = techs.map(tech => `<span class="tech-tag">${tech}</span>`).join(', ');
      
      skillDiv.innerHTML = `
          <h4 class="skill-card-title">${lang}</h4>
          <div class="tech-tags">
              ${techList}
          </div>
      `;
      
      skillsGrid.appendChild(skillDiv);
  });
}

// Add smooth scrolling for navigation
function initializeSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
}

// Add animations to stats
function animateStats() {
  const stats = document.querySelectorAll('.stat-value');
  stats.forEach(stat => {
      const value = parseInt(stat.textContent);
      let current = 0;
      const increment = value / 50;
      const updateStat = () => {
          if (current < value) {
              current += increment;
              stat.textContent = Math.round(current) + (stat.textContent.includes('+') ? '+' : '');
              requestAnimationFrame(updateStat);
          } else {
              stat.textContent = value + (stat.textContent.includes('+') ? '+' : '');
          }
      };
      updateStat();
  });
}

// Initialize mobile menu
function initializeMobileMenu() {
  const navLinks = document.querySelector('.nav-links');
  const menuToggle = document.createElement('button');
  menuToggle.className = 'menu-toggle';
  menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  menuToggle.setAttribute('aria-label', 'Toggle menu');
  
  // Insert menu toggle button into navbar
  document.querySelector('.navbar .container').appendChild(menuToggle);
  
  // Add menu toggle functionality
  menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.innerHTML = navLinks.classList.contains('active') 
          ? '<i class="fas fa-times"></i>' 
          : '<i class="fas fa-bars"></i>';
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
          navLinks.classList.remove('active');
          menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      }
  });

  // Close menu when window is resized to desktop view
  window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
          navLinks.classList.remove('active');
          menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      }
  });
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeBarChart();
  createSkillsGrid();
  initializeSmoothScroll();
  animateStats();
  initializeMobileMenu();
});