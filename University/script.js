// navbar togglemenu start index.html
var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}
// navbar togglemenu end
//date change start blog.html
var dt = document.getElementById("det");
let n =  new Date();
let y = n.getFullYear();
let m = n.getMonth();
let d = n.getDate();
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
document.getElementById("det").innerHTML = months[m] + " " + d + ", " + y;
// date change end
