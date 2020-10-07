window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("navigation").style.padding = "0px 10px";
        document.getElementById("cartCount").style.top = "2px";
    }
    else {
        document.getElementById("navigation").style.padding = "13px 10px";
        document.getElementById("cartCount").style.top = "20px";
    }
}