// Script do Menu Lateral

function toggleMenu() {
    var menu = document.querySelector('.sidepanel');
    menu.style.width = menu.style.width === '350px' ? '0' : '350px';
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