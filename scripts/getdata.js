const year = document.querySelector("#year");
const today = new Date();
const lastModif = document.getElementById("lastModif");

year.innerHTML = ` <span class="highlight">${today.getFullYear()}</span>`;
lastModif.innerHTML = new Date(document.lastModified);