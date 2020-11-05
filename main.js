//Global containers and event listeners
let productList = [];
let cartEl = document.getElementById('cartOutput');
document.getElementById('purchase1').addEventListener('click', addAlbum);
document.getElementById('purchase2').addEventListener('click', addAlbum);
document.getElementById('purchase3').addEventListener('click', addAlbum);
document.addEventListener('click', clickHandler);

//Add album to cart
function addAlbum(event) {
    let albumName = event.target.dataset.name;
    //Only one of each item allowed in cart
    let alreadyThere = false;
    for(let i = 0; i < productList.length; i++){
        if(productList[i].name == albumName){
            alreadyThere = true;
        }
    }
    if(alreadyThere == false){
        productList.push(addProduct(albumName));
    }

    document.getElementById('cartItems').innerHTML = '';
    for (let i = 0; i < productList.length; i++) {
        document.getElementById('cartItems').innerHTML += "<p>" + productList[i].name + " <button id= '" + productList[i].name + "'>Remove<button></a> <span class='price'>$5</span></p>";
        document.getElementById('cartAmount').innerHTML = [i + 1];
        document.getElementById('cartCost').innerHTML = [i + 1] * 5;
    }
}

//Remove item function
function clickHandler(event) {
    if (event.target.nodeName == 'BUTTON') {
        let targetName = event.target.dataset.name;
        for (let i = 0; i < productList.length; i++) {
            if (productList[i].albumName == targetName) {
                productList.splice(i, 1);
                break;
            }
        }
    }
    //Redraws the cart
    document.getElementById('cartItems').innerHTML = '';
    for (let i = 0; i < productList.length; i++) {
        document.getElementById('cartItems').innerHTML += "<p>" + productList[i].name + " <button id= '" + productList[i].name + "'>Remove<button></a> <span class='price'>$5</span></p>";
        document.getElementById('cartAmount').innerHTML = [i + 1];
        document.getElementById('cartCost').innerHTML = [i + 1] * 5;
    }
}

//Adds a product to the array
function addProduct(initName) {
    return {
    name: initName
    }
}
