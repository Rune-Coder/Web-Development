document.getElementById("signup").addEventListener("click", sinup);

function sinup() {
    var element = document.getElementById("login");
    element.classList.add("loginpg");
    document.getElementById("accreate").classList.remove("register");
}

document.getElementById("loginreturn").addEventListener("click", logi);

function logi() {
    var element = document.getElementById("login");
    element.classList.remove("loginpg");
    document.getElementById("accreate").classList.add("register");
}
