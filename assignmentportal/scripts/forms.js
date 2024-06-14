document.querySelector('form').addEventListener('submit', function (e) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        document.getElementById('password').value = '';
        document.getElementById('confirm-password').value = '';
        document.getElementById('password').focus();
        e.preventDefault();
    }
});