window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("navigation").style.backgroundColor = "#103bbf";
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
        document.getElementById("home").style.color = "#103bbf";
        document.getElementById("about").style.color = "#103bbf";
        document.getElementById("services").style.color = "#103bbf";
        document.getElementById("blog").style.color = "#103bbf";
        document.getElementById("contact").style.color = "#103bbf";
        document.getElementById("logo").style.color = "#103bbf";
        document.getElementById("logotext").style.color = "#103bbf";
        document.getElementById("menubars").style.color = "#103bbf";
    }
}

