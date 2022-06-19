import { headerData } from "./data.js";

const { logo, menu } = headerData;
const { src, alt } = logo;

// const header = document.createElement("header");
const header = document.querySelector("#header");

// Header Logo
const divLogo = document.createElement("div");
const logoImg = document.createElement("img");

logoImg.src = src;
logoImg.setAttribute("alt", alt);

divLogo.appendChild(logoImg);

// Header Menu
const navBar = document.createElement("nav");
const navBarList = document.createElement("ul");
navBar.classList.add("nav-bar");
menu.forEach(({ id, title, path }) => {
  // const {id, title, path}= item;

  const navBarListItem = document.createElement("li");
  const navBarListItemLink = document.createElement("a");
  navBarListItemLink.innerText = title;
  navBarListItemLink.href = path;

  navBarListItem.setAttribute("id", id);
  navBarListItem.appendChild(navBarListItemLink);

  navBarList.appendChild(navBarListItem);
});

navBar.append(navBarList);

header.appendChild(divLogo);
header.append(navBar);
// document.body.append(header);

window.addEventListener("scroll", () => {
  const headerHeight = header.clientHeight;

  if (window.pageYOffset >= headerHeight) {
    header.classList.add("fixed-header");
  } else {
    header.classList.remove("fixed-header");
  }
});
