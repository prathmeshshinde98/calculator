let number1 = document.getElementById("input").value;
function nine(){
    document.getElementById("input").value = document.getElementById("input").value.concat("9");
}
function eight(){
    document.getElementById("input").value = document.getElementById("input").value.concat("8");
}
function seven(){
    document.getElementById("input").value = document.getElementById("input").value.concat("7");
}
function six(){
    document.getElementById("input").value = document.getElementById("input").value.concat("6");
}
function five(){
    document.getElementById("input").value = document.getElementById("input").value.concat("5");
}
function four(){
    document.getElementById("input").value = document.getElementById("input").value.concat("4");
}
function three(){
    document.getElementById("input").value = document.getElementById("input").value.concat("3");
}
function two(){
    document.getElementById("input").value = document.getElementById("input").value.concat("2");
}
function one(){
    document.getElementById("input").value = document.getElementById("input").value.concat("1");
}
function zero(){
    document.getElementById("input").value = document.getElementById("input").value.concat("0");
}
function pls(){
    document.getElementById("input").value = document.getElementById("input").value.concat(" + ");
}
function minus(){
    document.getElementById("input").value = document.getElementById("input").value.concat(" - ");
}
function multiply(){
    document.getElementById("input").value = document.getElementById("input").value.concat(" * ");
}
function divide(){
    document.getElementById("input").value = document.getElementById("input").value.concat(" / ");
}
function dot(){
    document.getElementById("input").value = document.getElementById("input").value.concat(".");
}
function clr(){
    document.getElementById("input").value = "";
}
function display(){
    let number3 = document.getElementById('input').value;
    document.getElementById("input").value = eval(number3);
}