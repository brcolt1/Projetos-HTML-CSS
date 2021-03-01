function changeVisible() {
    let items = document.getElementsByClassName('nav-item');
    let i;
    for(i = 0; i < items.length; i++) {
        items[i].classList.toggle('visible');
    }
}