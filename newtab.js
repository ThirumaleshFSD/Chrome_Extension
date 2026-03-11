function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}`;

    let greeting = "Good morning Thiru";
    if (now.getHours() >= 12 && now.getHours() < 17) greeting = "Good afternoon Thiru";
    else if (now.getHours() >= 17) greeting = "Good evening Thiru";
    document.getElementById('greeting').textContent = greeting;
}

setInterval(updateClock, 1000);
updateClock();
