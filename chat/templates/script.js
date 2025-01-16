window.addEventListener('resize', resizePage);

document.getElementById('toggleMenu').addEventListener('click', function() {
    document.getElementById('leftMenu').classList.toggle('collapsed');
});

function resizePage() {
    const width = window.innerWidth;
    let scale = 1;

    if (width >= 992 && width <= 1600) {
        scale = 0.9;
    } else if (width >= 700 && width <= 767) {
        scale = 0.8;
    } else if (width >= 600 && width <= 700) {
        scale = 0.75;
    } else if (width <= 600) {
        scale = 0.5;
    }

    document.body.style.transform = `scale(${scale})`;
}

resizePage();  // Call on load to set the initial scale
