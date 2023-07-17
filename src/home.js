import StoreIcon from './assets/store.png';

function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");
    home.classList.add("main-content");

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Smoothies";

    const homeImage = document.createElement("img");
    homeImage.src = StoreIcon;
    homeImage.alt = "Store front"; 

    const message = document.createElement("h2");
    message.classList.add("slogan");
    message.textContent = "Come try our delicious smoothies!";

    home.appendChild(title);
    home.appendChild(homeImage);
    home.appendChild(message);
    return home;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;