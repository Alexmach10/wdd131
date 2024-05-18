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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Belem Brazil",
    location: "Belém - PA, Brazil",
    dedicated: "2022, November, 20",
    area: 28675,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/belem-brazil/400x250/belem_brazil_temple_exterior2.jpg"
  },
  {
    templeName: "Baton Rouge Louisiana",
    location: "United States",
    dedicated: "2000, July, 16",
    area: 10890,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/baton-rouge-louisiana/400x250/1-ea20b19384c9f98d17ef56b627c79c3a75f62cb3.jpeg"
  },
  {
    templeName: "Barranquilla Colombia",
    location: "Barranquilla, Cartagena, Barranquilla Atlantico, Colombia",
    dedicated: "2018, December, 9",
    area: 25349,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/400x250/3-Barranquilla-Columblia-Temple-2135198.jpg"
  }

];

const templeCardsContainer = document.getElementById('templeCards');

// Function to display all temples
function displayAllTemples() {
  templeCardsContainer.innerHTML = '';
  temples.forEach(temple => {
    createTempleCard(temple);
  });
}

// Function to display temples built before 1900
function displayOldTemples() {
  templeCardsContainer.innerHTML = '';
  const oldTemples = temples.filter(temple => {
    const dedicatedYear = parseInt(temple.dedicated.split(',')[0]);
    return dedicatedYear < 1900;
  });
  oldTemples.forEach(temple => {
    createTempleCard(temple);
  });
}

// Function to display temples built after 2000
function displayNewTemples() {
  templeCardsContainer.innerHTML = '';
  const newTemples = temples.filter(temple => {
    const dedicatedYear = parseInt(temple.dedicated.split(',')[0]);
    return dedicatedYear > 2000;
  });
  newTemples.forEach(temple => {
    createTempleCard(temple);
  });
}

// Function to display temples larger than 90000 square feet
function displayLargeTemples() {
  templeCardsContainer.innerHTML = '';
  const largeTemples = temples.filter(temple => temple.area > 90000);
  largeTemples.forEach(temple => {
    createTempleCard(temple);
  });
}

// Function to display temples smaller than 10000 square feet
function displaySmallTemples() {
  templeCardsContainer.innerHTML = '';
  const smallTemples = temples.filter(temple => temple.area < 10000);
  smallTemples.forEach(temple => {
    createTempleCard(temple);
  });
}

// Helper function to create temple card
function createTempleCard(temple) {
  const card = document.createElement('div');
  card.classList.add('temple-card');

  const templeName = document.createElement('h2');
  templeName.textContent = temple.templeName;

  const location = document.createElement('p');
  location.textContent = `Location: ${temple.location}`;

  const dedicated = document.createElement('p');
  dedicated.textContent = `Dedicated: ${temple.dedicated}`;

  const area = document.createElement('p');
  area.textContent = `Area: ${temple.area} square feet`;

  const image = document.createElement('img');
  image.src = temple.imageUrl;
  image.alt = temple.templeName;
  image.loading = 'lazy';

  card.appendChild(templeName);
  card.appendChild(location);
  card.appendChild(dedicated);
  card.appendChild(area);
  card.appendChild(image);

  templeCardsContainer.appendChild(card);
}

// Event listeners for main navigation menu items
document.getElementById('home').addEventListener('click', displayAllTemples);
document.getElementById('old').addEventListener('click', displayOldTemples);
document.getElementById('new').addEventListener('click', displayNewTemples);
document.getElementById('large').addEventListener('click', displayLargeTemples);
document.getElementById('small').addEventListener('click', displaySmallTemples);

// Display all temples by default
displayAllTemples();