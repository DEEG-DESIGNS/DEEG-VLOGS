function countdownToNewYear() {
  // Get the current date and time
  const now = new Date();

  // Determine the next New Year's date
  const nextYear = now.getFullYear() + 1;
  const newYearDate = new Date(`october 25,2024, ${nextYear} 09:30:00`);


  // Function to update the countdown
  function updateCountdown() {
    // Get the current time
    const currentTime = new Date();

    // Calculate the time difference between now and New Year's
    const timeLeft = newYearDate - currentTime;

    // If the time left is negative, the countdown has passed; set all units to zero
    if (timeLeft < 0) {
      document.getElementById("weeks").textContent = 0;
      document.getElementById("days").textContent = 0;
      document.getElementById("hours").textContent = 0;
      document.getElementById("minutes").textContent = 0;
      document.getElementById("seconds").textContent = 0;
      return;
    }

    // Calculate weeks, days, hours, minutes, and seconds remaining
    const weeks = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 7)); // Convert milliseconds to weeks
    const days = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)); // Convert remaining milliseconds to days
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Convert remaining milliseconds to hours
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)); // Convert remaining milliseconds to minutes
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000); // Convert remaining milliseconds to seconds

    // Update the HTML elements with the calculated time
    document.getElementById("weeks").textContent = weeks;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }

  // Initial call to display the countdown
  updateCountdown();

  // Set the countdown to update every second
  setInterval(updateCountdown, 1000);
}

// Start the countdown when the script is loaded
countdownToNewYear()



const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');

menuToggle.addEventListener('click', function() {
    sidebar.style.display = 'flex';
});

closeBtn.addEventListener('click', function() {
    sidebar.style.display = 'none';
});