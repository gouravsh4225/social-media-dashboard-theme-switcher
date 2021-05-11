const currentTheme = document.getElementsByTagName("body");
const themeOuterElement = document.getElementsByClassName('outer-btn');


function changeTheme() {
    if(currentTheme[0].classList.contains('light-theme')) {
        removeClass(currentTheme[0],'light-theme');
        removeClass(themeOuterElement[0],'active');
        addClass(currentTheme[0],'dark-theme');
        addClass(themeOuterElement[0],'active');
    } else {
        removeClass(currentTheme[0],'dark-theme')
        removeClass(themeOuterElement[0],'active')
        addClass(currentTheme[0],'light-theme');
    }
}

function removeClass(element,classname) {
    element.classList.remove(classname)
}

function addClass(element,classname) {
    element.classList.add(classname)
}
