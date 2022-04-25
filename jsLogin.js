window.addEventListener("scroll", function() {
    let header = document.getElementById("logo");
    if (document.documentElement.scrollTop >= 300) {
        header.classList.add("smallPanel");


    } else if (document.documentElement.scrollTop <= 200) {
        header.classList.remove("smallPanel");
    }
})