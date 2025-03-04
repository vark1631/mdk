const fetch = require("node-fetch");

const API_URL = "https://9212a4fb99cfc82d.mokky.dev";
const PROJECT_ID = "9212a4fb99cfc82d"; // Замените на свой ID
const COLLECTION = "amount_clicks"; // Имя коллекции
const LINK_ID = "https://vark1631.github.io/mdk/index.html"; // ID ссылки

// Функция увеличения количества кликов
async function incrementClick() {
    const response = await fetch(`${API_URL}/${PROJECT_ID}/${COLLECTION}/${LINK_ID}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ count: { $inc: 1 } }) // Увеличиваем счетчик
    });
    const data = await response.json();
    console.log("Updated Click Count:", data);
    console.log("Click Count:", data.count);
}

// Вызываем функцию при переходе по ссылке


