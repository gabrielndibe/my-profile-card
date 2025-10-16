


document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.querySelector('[data-testid="test-user-time-value"]');
    if (timeElement) {
      timeElement.textContent = Date.now();
    } else {
      console.error('Current time element not found');
    }
  });