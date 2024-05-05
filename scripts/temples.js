const menuItems = document.querySelectorAll('.menu li');
const headingContainer = document.getElementById('heading-container');
const year = document.querySelector("#year");
const today = new Date();
const lastModif = document.getElementById("lastModif");
const hamButton = document.querySelector('#menu_button');
const navigation = document.querySelector('.menu');


menuItems.forEach(menuItem => {
  menuItem.addEventListener('click', () => {
    const menuSelection = menuItem.textContent;
    const heading = document.createElement('h1');

    heading.textContent = menuSelection;
    headingContainer.innerHTML = '';
    headingContainer.appendChild(heading);
  });
});

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

year.innerHTML = ` <span class="highlight">${today.getFullYear()}</span>`;
lastModif.innerHTML = new Date(document.lastModified);