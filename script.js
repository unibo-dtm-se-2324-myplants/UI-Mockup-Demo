document.addEventListener('DOMContentLoaded', function () {
    function updateProgressBar(progress, idSuffix) {
        const progressBar = document.querySelector(`#progress-bar-${idSuffix}`);
        const progressText = document.querySelector(`#progress-text-${idSuffix}`);
        progressBar.style.width = progress + '%';
        progressText.textContent = progress + '%';
    }

    updateProgressBar(100, 1);
    updateProgressBar(50, 2);
});
