window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("navigation").style.backgroundColor = "#2c59e3";
        document.getElementById("home").style.color = "#fff";
        document.getElementById("about").style.color = "#fff";
        document.getElementById("services").style.color = "#fff";
        document.getElementById("blog").style.color = "#fff";
        document.getElementById("contact").style.color = "#fff";
        document.getElementById("logo").style.color = "#fff";
        document.getElementById("logotext").style.color = "#fff";
        document.getElementById("menubars").style.color = "#fff";
    }
    else {
        document.getElementById("navigation").style.backgroundColor = "#fff";
        document.getElementById("home").style.color = "#2c59e3";
        document.getElementById("about").style.color = "#2c59e3";
        document.getElementById("services").style.color = "#2c59e3";
        document.getElementById("blog").style.color = "#2c59e3";
        document.getElementById("contact").style.color = "#2c59e3";
        document.getElementById("logo").style.color = "#2c59e3";
        document.getElementById("logotext").style.color = "#2c59e3";
        document.getElementById("menubars").style.color = "#2c59e3";
    }
}

