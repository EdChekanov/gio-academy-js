document.addEventListener("DOMContentLoaded", () => {
    const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
    const tabsFieldElems = document.querySelectorAll('[data-tabs-field]');

    for (const el of tabsHandlerElems) {
        el.addEventListener('click', () => {
            tabsHandlerElems.forEach(item => {
                if (el === item) {
                    item.classList.add('design-list__item_active');
                } else {
                    item.classList.remove('design-list__item_active');
                }
            })
            
            tabsFieldElems.forEach(item => {
                if (el.dataset.tabsHandler === item.dataset.tabsField) {
                    item.classList.remove('hidden')
                } else {
                    item.classList.add('hidden')
                }
        })
        })      
    }
});