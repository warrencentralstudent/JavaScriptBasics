function printMessage(){
    let element = document.getElementById("print");
    element.innerHTML = "Hello World";
    element.style.display = "none";

}

function display(){
    let element = document.getElementById("print");

    element.style.display = "block";
    element.style.color = "red";
}