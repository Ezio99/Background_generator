var col1 = document.querySelector(".color1");
var col2 = document.querySelector(".color2");
var css = document.getElementById("gradient");
var h3 = document.querySelector("h3");

function setBG(){
    css.style.background="linear-gradient(to right,"+ col1.value+","+col2.value+")";
    h3.textContent = css.style.background + ";"
}
setBG();

col1.addEventListener("input",setBG);

col2.addEventListener("input",setBG);
