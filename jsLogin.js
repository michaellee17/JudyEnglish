window.addEventListener("scroll", function() {
    let header = document.getElementById("logo");
    if (document.documentElement.scrollTop >= 400) {
        header.classList.add("smallPanel");


    } else {
        header.classList.remove("smallPanel");
    }
})