document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp' || event.key === ' ') {
        event.preventDefault();
    }
});
