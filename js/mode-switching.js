document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    });
});