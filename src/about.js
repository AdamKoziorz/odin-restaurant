function createAbout() {
    const about = document.createElement("div");
    about.classList.add("about");
    about.classList.add("main-content");

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "About";

    about.appendChild(title);
    return about;
}

function loadAbout() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createAbout());
}

export default loadAbout;