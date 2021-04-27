
function setTextSize(){
    var x = document.querySelectorAll("p");
    var i;
        for (i = 0; i < x.length; i++) {
        x[i].style.fontSize = "20px";
        }
}

document.getElementById("text_button").onclick = setTextSize;
