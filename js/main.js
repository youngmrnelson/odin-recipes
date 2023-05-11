"use strict";

// DOM Variables
const navIcons = document.querySelectorAll('i');

navIcons.forEach(icon => {
    // Add fade effect to icon icons
    if(!icon.parentElement.classList.contains('nav-link')) {
        icon.parentElement.addEventListener('mouseover', (e) => {
            icon.classList.add('fa-fade');
        })
    }
    // Remove fade effect on icon 
    icon.parentElement.addEventListener('mouseout', (e) => {
        icon.classList.remove('fa-fade');
    })
})