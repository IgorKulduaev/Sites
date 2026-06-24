
const food = [
    { img: "Assets/rest-1.png", name: "Blaze Pizza", time: "11.00 AM - 10.00 PM" },
    { img: "Assets/rest-2.png", name: "Pizza Ranch", time: "09.00 AM - 10.00 PM" },
    { img: "Assets/rest-3.png", name: "Dion's Pizza Hut", time: "10.00 AM - 12.00 PM" },
    { img: "Assets/rest-4.png", name: "Royel Burger", time: "11.00 AM - 10.00 PM" },
    { img: "Assets/rest-5.png", name: "KFC Restaurant", time: "09.00 AM - 10.00 PM" },
    { img: "Assets/rest-6.png", name: "Star Food", time: "10.00 AM - 12.00 PM" }
];
const restaurantTop = document.getElementById('restaurant-top');
const restaurantBottom = document.getElementById('restaurant-bottom');
const topRestaurants = food.slice(0, 3);
const bottomRestaurants = food.slice(3, 6);
restaurantTop.innerHTML = topRestaurants.map(
    item => `<div class="restaurant-card">
                <img src="${item.img}" alt="">
                <h1>${item.name}</h1>
                <div class="restaurant-info">
                    <img src="Assets/icon-clock.png" alt="">
                    <p>${item.time}</p>
                    <button>→</button>
                </div>
            </div>`
).join('');
restaurantBottom.innerHTML = bottomRestaurants.map(
    item => `<div class="restaurant-card">
                <img src="${item.img}" alt="">
                <h1>${item.name}</h1>
                <div class="restaurant-info">
                    <img src="Assets/icon-clock.png" alt="">
                    <p>${item.time}</p>
                    <button>→</button>
                </div>
            </div>`
).join('')
// .гей
