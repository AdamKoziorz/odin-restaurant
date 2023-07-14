import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

function createBackground() {
    const background = document.createElement("div");
    background.classList.add("background");
    return background;
}

function createHeader() {
    // Header Container
    const header = document.createElement("header");
    header.classList.add("header");

    // Navigation
    const navigation = document.createElement("nav");
    const homeBtn = document.createElement("button");
    homeBtn.classList.add("nav-btn");
    homeBtn.textContent = "Home";
    homeBtn.addEventListener("click", loadHome)
    const menuBtn = document.createElement("button");
    menuBtn.textContent = "Menu";
    menuBtn.classList.add("nav-btn");
    menuBtn.addEventListener("click", loadMenu)
    const aboutBtn = document.createElement("button");
    aboutBtn.textContent = "About";
    aboutBtn.classList.add("nav-btn");
    aboutBtn.addEventListener("click", loadAbout)

    // Piece together
    navigation.appendChild(homeBtn);
    navigation.appendChild(menuBtn);
    navigation.appendChild(aboutBtn);
    header.appendChild(navigation);

    return header;
}

function createMain() {
    // Generate Elements
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");

    return main;
}

function createFooter() {
    // Generate Elements
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    const text = document.createElement("p");
    text.textContent = "Want to check out my website? ";
    const link = document.createElement("a");
    link.textContent = "Click Here!";
    link.href = "https://adamkoziorz.github.io";
    
    // Piece together
    text.appendChild(link);
    footer.appendChild(text);

    return footer;
}

function loadContent() {
    const content = document.getElementById("content");
    content.appendChild(createBackground());
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
}

function init() {
    loadContent();
    loadHome();
}

export default init;