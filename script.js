let globalScrollPosition = 0;

window.onscroll = function (e) {
    const header = document.getElementById("header");
    const scrollPosition = window.scrollY;

    if (scrollPosition >= globalScrollPosition) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
    globalScrollPosition = scrollPosition;
};