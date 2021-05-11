const mouseCursor = document.querySelector('.cursor');
const links = document.querySelectorAll('.link');
const img = document.querySelector('img');

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow');
        link.classList.add('hovered-link');
    });
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
        link.classList.remove('hovered-link');
    })
})

img.addEventListener('mouseover', () => {
    mouseCursor.classList.add('square');
});
img.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('square');
});

window.addEventListener('mousemove', cursor);