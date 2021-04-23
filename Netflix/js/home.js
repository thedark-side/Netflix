const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab_content_iten');



// select tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
    // add border to current tab
    this.classList.add('tab-border');

    // grab content item from dom
    const tabContentItems = document.querySelector(`#{this.id}-content`);

    // add show class

    tabContentItems.classList.add('show');
}




function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}


tabItems.forEach(item => item.addEventListener('click', selectItem));

