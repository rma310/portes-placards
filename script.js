let globalScrollPosition = 0;

window.onscroll = function(e) {
    const header = document.getElementById("main-header");
    const scrollPosition = window.scrollY;

    if (scrollPosition >= globalScrollPosition) {
        console.log('disappear')
        header.classList.add("scroll");
    } else {
        console.log('appear')
        header.classList.remove("scroll");
    }

    globalScrollPosition = scrollPosition;
};