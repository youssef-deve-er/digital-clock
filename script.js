function updateClock() {
    const now = new Date();

    // تجهيز التاريخ
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    
    // الأيام بالإنجليزية
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const dayName = days[now.getDay()];

    const dateString = `${year}-${month}-${day} ${dayName}`;
    document.getElementById('date').textContent = dateString;

    // تجهيز الوقت
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').textContent = timeString;
}

// تشغيل الدالة فوراً حتى لا ننتظر ثانية في البداية
updateClock();

// تحديث الساعة كل 1000 ملي ثانية (ثانية واحدة)
setInterval(updateClock, 1000);