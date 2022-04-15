window.addEventListener("scroll", function() {
    let header = document.getElementsByClassName("header");
    if (document.documentElement.scrollTop >= 300) {
        header.classList.add("smallPanel");


    } else {
        header.classList.remove("smallPanel");
    }
})