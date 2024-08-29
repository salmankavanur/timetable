document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.notification-btn').forEach(button => {
        button.addEventListener('click', () => {
            const day = button.getAttribute('data-day');
            const time = button.getAttribute('data-time');
            const student = button.getAttribute('data-student');
            const platform = button.getAttribute('data-platform');
            const eventTime = `${day} ${time}`;
            const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(student + ' - ' + platform)}&dates=${encodeURIComponent(new Date().toISOString().slice(0, 10))}T${time.replace(':', '')}00Z/${encodeURIComponent(new Date().toISOString().slice(0, 10))}T${time.replace(':', '')}59Z&details=${encodeURIComponent('Class with ' + student + ' on ' + platform)}&location=&sf=true&output=xml`;
            window.open(calendarUrl, '_blank');
        });
    });
});
