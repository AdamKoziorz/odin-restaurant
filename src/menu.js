import Placeholder from './assets/menu-items/placeholder.png';

function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const itemName = document.createElement("h3");
    itemName.textContent = name;

    const itemImage = document.createElement("img");
    itemImage.src = Placeholder;
    itemImage.alt = `${name}`; 

    const itemDescription = document.createElement("p");
    itemDescription.textContent = description;

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemImage);
    menuItem.appendChild(itemDescription);

    return menuItem;
}

function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.classList.add("main-content");

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Menu";

    const menuGrid = document.createElement("div");
    menuGrid.classList.add("menu-grid");

    menuGrid.appendChild(createMenuItem("Tropical Paradise", "A blend of pineapple, mango, coconut milk, and a hint of lime"));
    menuGrid.appendChild(createMenuItem("Berry Burst", "A medley of strawberries, blueberries, raspberries, and Greek yogurt"));
    menuGrid.appendChild(createMenuItem("Green Goddess", "A nutritious mix of spinach, kale, banana, apple, and a touch of honey"));
    menuGrid.appendChild(createMenuItem("Creamy Caramel Delight", "A decadent combination of banana, dates, almond milk, and a swirl of caramel"));
    menuGrid.appendChild(createMenuItem("Citrus Zing", "Energize with a zesty blend of orange, lemon, lime, and a splash of ginger"));
    menuGrid.appendChild(createMenuItem("Choco-Nut Bliss", "Satisfy your cravings with a creamy fusion of chocolate, peanut butter, banana, and almond milk"));

    menu.appendChild(title);
    menu.appendChild(menuGrid);
    return menu;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;