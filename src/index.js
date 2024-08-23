import i from "./i.jpg";
import r from "./refresh-button.png";
import "./css/style.css";
import { setupEventListeners } from "./modules/events.js";

import {
  logoImg,
  reloadImg,
} from "./modules/dom.js";
reloadImg.src = r;
logoImg.src = i;

document.addEventListener('DOMContentLoaded',() => {
  setupEventListeners();
  const fixedTop = document.querySelector('.header');
  const navLinks = document.querySelectorAll('ul a');

  function adjustBodyPadding() {
    const fixedHeight = fixedTop.offsetHeight;
    document.body.style.paddingTop = fixedHeight + 'px';
  }

  window.addEventListener('load', adjustBodyPadding);
  window.addEventListener('resize', adjustBodyPadding);

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const fixedHeight = fixedTop.offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - fixedHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
})

