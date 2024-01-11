const ITEMS_CONTAINER = document.getElementById("items");
const ITEMS_TEMPLATE = document.getElementById("itemTemplate");
const ADD_BUTTON = document.getElementById("add");

let items = getItems();

function getItems() {
    const value = localStorage.getItem("todo") || "[]";
    return JSON.parse(value);
}

console.log(items);