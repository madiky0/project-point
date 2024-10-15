const shareBtn = document.getElementById('share-btn');
const shareMenu = document.getElementById('share-menu');

shareBtn.addEventListener('click', () => {
    if (shareMenu.style.display === 'block') {
        shareMenu.style.display = 'none';
    } else {
        shareMenu.style.display = 'block';
    }
});

document.addEventListener('click', (event) => {
    if (!shareBtn.contains(event.target) && !shareMenu.contains(event.target)) {
        shareMenu.style.display = 'none';
    }
});