import './assets/scss/all.scss';
const data = [];

// Generate 12 data entries
for (let i = 0; i < 12; i++) {
    const item = {
        "id": i,
        "name": "Poppy & Barley",
        "imgUrl": `https://github.com/hexschool/webLayoutTraining1st/blob/master/perfume-week6/product1.jpg?raw=true`, 
        "brand": "Jo Malone",
        "salePrice": 1380,
        "originalPrice": 1580
    };
    data.push(item);
}

const list = document.querySelector(".list");
let str = '';

data.forEach(function(item) {
    str += `<li class="goods">
                <div class="img-container">
                    <img src="${item.imgUrl}" alt="${item.name}">
                </div>
                <div class="goods-content SF">
                    <h3>${item.name}</h3>
                    <a href="#">${item.brand}</a>
                    <div class="mb4"><span class="saleoff mr8">NT$${item.salePrice}</span><span class="price"><del class="g-3">NT${item.originalPrice}</del></span></div>
                    <div>
                        <a href="#"><span class="material-symbols-sharp brown mr12">favorite</span></a>
                        <a href="#"><span class="material-symbols-sharp brown">shopping_cart</span></a>
                    </div>
                </div>
            </li>`;
});

list.innerHTML = str;

