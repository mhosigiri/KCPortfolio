// Add this as locations.js
document.addEventListener('DOMContentLoaded', () => {
    // Animate timeline items
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });
  
    document.querySelectorAll('.timeline-item').forEach((item) => {
      observer.observe(item);
    });
  
    // Animate progress bars
    const progressObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressFill = entry.target;
          const percentage = progressFill.getAttribute('data-progress');
          progressFill.style.transform = `scaleX(${percentage / 100})`;
        }
      });
    });
  
    document.querySelectorAll('.progress-fill').forEach((fill) => {
      const progress = fill.getAttribute('data-progress');
      fill.style.setProperty('--progress', `${progress}%`);
    });
  
    // Animate stat numbers
    const animateValue = (obj, start, end, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };
  
    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const statNumber = entry.target;
          const endValue = parseInt(statNumber.getAttribute('data-value'));
          animateValue(statNumber, 0, endValue, 2000);
          statObserver.unobserve(statNumber);
        }
      });
    });
  
    document.querySelectorAll('.stat-number').forEach((stat) => {
      statObserver.observe(stat);
    });
  });