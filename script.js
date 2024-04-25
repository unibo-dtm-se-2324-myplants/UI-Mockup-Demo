document.addEventListener('DOMContentLoaded', function () {
    function updateProgressBar(progress) {
        const progressBar = document.querySelector('.progress-bar');
        const progressText = document.querySelector('.progress-text');
        progressBar.style.width = progress + '%';
        progressText.textContent = progress + '%';
    }

    updateProgressBar(60); // Example percentage
});
