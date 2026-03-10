function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}`;

    let greeting = "Good morning";
    if (now.getHours() >= 12 && now.getHours() < 17) greeting = "Good afternoon";
    else if (now.getHours() >= 17) greeting = "Good evening";
    document.getElementById('greeting').textContent = greeting;
}

setInterval(updateClock, 1000);
updateClock();
