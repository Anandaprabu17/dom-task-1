function colorChange() {
    var a = document.getElementById("color");
    var b = a.value;
    a.style.backgroundColor = b;
}

function inputBox() {
    var c = document.getElementById("box");
    var d = c.value;
    var e = document.getElementsByTagName("body");
    e[0].style.backgroundColor = d;
}
function name() {
    var g = document.getElementsByTagName("p");
    g[0].style.fontSize = "50px";

}
