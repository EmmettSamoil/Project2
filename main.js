let productList = [];
let cartEl = document.getElementById('cartOutput');
document.getElementById('purchase1').addEventListener('click', addChill);

function addChill() {
    productList.push(addProduct('Chill'));
}

function addProduct(initName) {
    return {
    name: initName
    }
}

for (let i = 0; 1 < productList.length; i++) {
    document.getElementById('cartItems').innerHTML += '<p>' + productList[i].name + '</a> <span class="price">$5</span></p>';
}