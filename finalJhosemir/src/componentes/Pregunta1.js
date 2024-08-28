import React from "react";

const logo = document.getElementById('logo');

logo.addEventListener('mouseenter', () => {
  logo.style.transform = 'scale(1.2)';
});

logo.addEventListener('mouseleave', () => {
  logo.style.transform = 'scale(1)';
});