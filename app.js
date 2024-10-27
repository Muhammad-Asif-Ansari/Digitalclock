function updateClock() {
    var now = new Date();

    var options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    var timeString = now.toLocaleTimeString('en-US', options);

    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}

setInterval(updateClock, 1000);
updateClock();
