var menu = document.querySelector('.make-sticky');
var menuPosition = menu.getBoundingClientRect();
var placeholder = document.createElement('div');
placeholder.style.width = menuPosition.width + 'px';
placeholder.style.height = menuPosition.height + 'px';
var isAdded = false;

window.addEventListener('scroll', function() {
    if (window.pageYOffset >= menuPosition.top && !isAdded) {
        menu.classList.add('is-sticky');
        menu.parentNode.insertBefore(placeholder, menu);
        isAdded = true;
    } else if (window.pageYOffset < menuPosition.top && isAdded) {
        menu.classList.remove('is-sticky');
        menu.parentNode.removeChild(placeholder);
        isAdded = false;
    }
});


var second = document.querySelector('.content');
var secondPosition = second.getBoundingClientRect();
// console.debug(secondPosition.height);
var asdf = document.querySelector('.hidden-footer');
asdf.style.height = secondPosition.height + 'px';
