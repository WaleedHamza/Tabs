// Select all tabs in html the document 
const tabs = document.querySelectorAll('[data-tab-target]');
// Select All Tabs Content
const tabContents = document.querySelectorAll('[data-tab-content]');
const labels = document.querySelectorAll('.label');
// Adding an event listner to the tabs to show and hide on click event
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        // loop through all tabs and remove the active class otherwise all tabs will be shown
        tabContents.forEach(tabContent => tabContent.classList.remove('active'))
        target.classList.add('active');
        tabs.forEach(tab => tab.classList.remove('active'))
        tab.classList.add('active');
    })
});