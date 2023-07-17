function createAbout() {
    const about = document.createElement("div");
    about.classList.add("about");
    about.classList.add("main-content");

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "About";

    const message = document.createElement("p");
    message.classList.add("message");
    message.textContent = "At Smoothies, we're passionate about crafting delicious and nutritious smoothies that nourish your body and delight your taste buds. Our mission is to provide a vibrant and welcoming space where health-conscious individuals can indulge in flavorful blends made from the freshest fruits, vegetables, and wholesome ingredients. Whether you're seeking a post-workout pick-me-up or simply treating yourself to a guilt-free treat, our skilled team is dedicated to creating smoothies that are both satisfying and packed with goodness. Join us on a journey to vibrant well-being, one sip at a time.";
    about.appendChild(title);
    about.appendChild(message);
    return about;
}

function loadAbout() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createAbout());
}

export default loadAbout;