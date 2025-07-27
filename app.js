function updateClock() {
  const now = new Date();

  const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
  const timeString = now.toLocaleTimeString('en-US', options);

  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = now.toLocaleDateString('en-US', dateOptions);

  document.getElementById('time').textContent = timeString;
  document.getElementById('date').textContent = dateString;
}

setInterval(updateClock, 1000);
updateClock();
