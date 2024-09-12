// Script do Menu Lateral

function toggleMenu() {
    var menu = document.querySelector('.sidepanel');
    var size = '350px';

    menu.style.width = menu.style.width === size ? '0' : size;
}

var isActive = false;
function showUILimiters() {
    var elements = document.querySelectorAll("*");

    if (!isActive) {
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.border = "1px solid red";
        }
        isActive = true;
    } else {
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.border = "";
        }
        isActive = false;
    }
}