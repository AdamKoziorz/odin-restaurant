function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");
    home.classList.add("main-content");

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Smoothies";

    home.appendChild(title);
    return home;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;