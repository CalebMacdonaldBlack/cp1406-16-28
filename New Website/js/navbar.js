window.onscroll = changePos;

function changePos() {
    var navBar = document.getElementById("navBar");
    if (window.pageYOffset > document.getElementById("banner").offsetHeight) {
        navBar.style.position = "fixed";
        navBar.style.top = "0";
    } else {
        navBar.style.position = "";
        navBar.style.top = "";
    }
}