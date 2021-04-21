if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready) //Checks to make sure all html elements are loaded before executing.

} else {
    ready()
}

function ready() {
    //Removes Item from cart on remove click
var removeCartItemButtons = document.getElementsByClassName('remove-item');
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener('click', removeCartItem);
        
}

var quantityInputs = document.getElementsByClassName('quantity-input');
for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener('change', quantityChanged);
}

var addToCartButtons = document.getElementsByClassName('add-to-cart-btn')
for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener('click', addToCartClicked);
}

}

function removeCartItem(event) {
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
        updateCartTotal();
   
}

function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updateCartTotal();
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('product-name')[0].innerText;
    var price = shopItem.getElementsByClassName('product-price')[0].innerText;
    addItemToCart(title, price);
    updateCartTotal()
}

function addItemToCart(title, price){
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    var cartItems = document.getElementsByClassName('cart-list')[0];
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title');
    for (var i = 0; i < cartItemNames.length; i++){
        if (cartItemNames[i].innerText == title){
            alert('This item is already in your cart');
            return;
        }
    }
    var cartRowContents = `
            <div class="cart-item">
                <h4 class="cart-item-title">${title}</h4>
                <h5 class="cart-item-price">${price}</h5>
                <span class="remove-item">Remove</span>
            </div>
            <div class="item-quantity">
                <input class="quantity-input" type="number" value="1">
            </div>`
            cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('remove-item')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('quantity-input')[0].addEventListener('change', quantityChanged);
}

//Updates cart total when item is removed from cart
function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-list')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for(var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-item-price')[0];
        var quantityElement = cartRow.getElementsByClassName('quantity-input')[0];
        var price = parseFloat(priceElement.innerText.replace('£', '')); //removes pound sign for use in maths fucntions
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    total = Math.round(total * 100) /100; //rounds total to nearest two decimal places
    document.getElementsByClassName('cart-total')[0].innerText = '£' + total;
}





//----------------------TOGGLE BETWEEN MENU CHOICES
// Get starters button and on click change back to starters menu
$("#smalls-button").click(function () {
    document.getElementById("smalls-button").classList.add("btn-success");
    const desserts = document.getElementById("desserts-button");
    desserts.classList.remove("btn-success");
    const mains = document.getElementById("mains-button");
    mains.classList.remove("btn-success");
    const drinks = document.getElementById("drinks-button");
    drinks.classList.remove("btn-success");
    document.getElementById("product-list").innerHTML = `
    <div class="product-item">
                        <div class="product-content">
                            <h3 class="product-name">Small Plates</h3>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, vel in error
                                    laborum
                                    quaerat deleniti nemo! Alias rerum, </p>
                            </div>
                            <p class="product-price">$120.00</p>
                            <div>
                                <button type="button" class="add-to-cart-btn">
                                    <i class="fas fa-shopping-cart"></i>Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="product-item">
                        <div class="product-content">
                            <h3 class="product-name">Product</h3>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, vel in error
                                    laborum
                                    quaerat deleniti nemo! Alias rerum, </p>
                            </div>
                            <p class="product-price">$120.00</p>
                            <div>
                                <button type="button" class="add-to-cart-btn">
                                    <i class="fas fa-shopping-cart"></i>Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="product-item">
                        <div class="product-content">
                            <h3 class="product-name">Product</h3>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, vel in error
                                    laborum
                                    quaerat deleniti nemo! Alias rerum, </p>
                            </div>
                            <p class="product-price">$120.00</p>
                            <div>
                                <button type="button" class="add-to-cart-btn">
                                    <i class="fas fa-shopping-cart"></i>Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="product-item">
                        <div class="product-content">
                            <h3 class="product-name">Product</h3>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, vel in error
                                    laborum
                                    quaerat deleniti nemo! Alias rerum, </p>
                            </div>
                            <p class="product-price">$120.00</p>
                            <div>
                                <button type="button" class="add-to-cart-btn">
                                    <i class="fas fa-shopping-cart"></i>Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
  `;
    ready();
});

$("#mains-button").click(function () {
    document.getElementById("mains-button").classList.add("btn-success");
    const smalls = document.getElementById("smalls-button");
    smalls.classList.remove("btn-success");
    const desserts = document.getElementById("desserts-button");
    desserts.classList.remove("btn-success");
    const drinks = document.getElementById("drinks-button");
    drinks.classList.remove("btn-success");
    document.getElementById("product-list").innerHTML = `
    <div class="product-item">
                        <div class="product-content">
                            <h3 class="product-name">Mains</h3>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, vel in error
                                    laborum
                                    quaerat deleniti nemo! Alias rerum, </p>
                            </div>
                            <p class="product-price">$120.00</p>
                            <div>
                                <button type="button" class="add-to-cart-btn">
                                    <i class="fas fa-shopping-cart"></i>Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="product-item">
                        <div class="product-content">
                            <h3 class="product-name">Product</h3>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, vel in error
                                    laborum
                                    quaerat deleniti nemo! Alias rerum, </p>
                            </div>
                            <p class="product-price">$120.00</p>
                            <div>
                                <button type="button" class="add-to-cart-btn">
                                    <i class="fas fa-shopping-cart"></i>Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="product-item">
                        <div class="product-content">
                            <h3 class="product-name">Product</h3>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, vel in error
                                    laborum
                                    quaerat deleniti nemo! Alias rerum, </p>
                            </div>
                            <p class="product-price">$120.00</p>
                            <div>
                                <button type="button" class="add-to-cart-btn">
                                    <i class="fas fa-shopping-cart"></i>Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="product-item">
                        <div class="product-content">
                            <h3 class="product-name">Product</h3>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, vel in error
                                    laborum
                                    quaerat deleniti nemo! Alias rerum, </p>
                            </div>
                            <p class="product-price">$120.00</p>
                            <div>
                                <button type="button" class="add-to-cart-btn">
                                    <i class="fas fa-shopping-cart"></i>Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
    `;
    ready();
});

//On click changes to desserts menu. Also get the dessert button.
$("#desserts-button").click(function () {
    document.getElementById("desserts-button").classList.add("btn-success");
    const smalls = document.getElementById("smalls-button");
    smalls.classList.remove("btn-success");
    const mains = document.getElementById("mains-button");
    mains.classList.remove("btn-success");
    const drinks = document.getElementById("drinks-button");
    drinks.classList.remove("btn-success");
    document.getElementById("product-list").innerHTML = `
    <div class="product-item">
                        <div class="product-content">
                            <h3 class="product-name">Desserts</h3>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, vel in error
                                    laborum
                                    quaerat deleniti nemo! Alias rerum, </p>
                            </div>
                            <p class="product-price">$120.00</p>
                            <div>
                                <button type="button" class="add-to-cart-btn">
                                    <i class="fas fa-shopping-cart"></i>Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="product-item">
                        <div class="product-content">
                            <h3 class="product-name">Product</h3>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, vel in error
                                    laborum
                                    quaerat deleniti nemo! Alias rerum, </p>
                            </div>
                            <p class="product-price">$120.00</p>
                            <div>
                                <button type="button" class="add-to-cart-btn">
                                    <i class="fas fa-shopping-cart"></i>Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="product-item">
                        <div class="product-content">
                            <h3 class="product-name">Product</h3>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, vel in error
                                    laborum
                                    quaerat deleniti nemo! Alias rerum, </p>
                            </div>
                            <p class="product-price">$120.00</p>
                            <div>
                                <button type="button" class="add-to-cart-btn">
                                    <i class="fas fa-shopping-cart"></i>Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="product-item">
                        <div class="product-content">
                            <h3 class="product-name">Product</h3>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, vel in error
                                    laborum
                                    quaerat deleniti nemo! Alias rerum, </p>
                            </div>
                            <p class="product-price">$120.00</p>
                            <div>
                                <button type="button" class="add-to-cart-btn">
                                    <i class="fas fa-shopping-cart"></i>Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
            
    `;
    ready();
});

// Get drinks button and on click change to drinks menu
$("#drinks-button").click(function () {
    document.getElementById("drinks-button").classList.add("btn-success");
    const smalls = document.getElementById("smalls-button");
    smalls.classList.remove("btn-success");
    const mains = document.getElementById("mains-button");
    mains.classList.remove("btn-success");
    const desserts = document.getElementById("desserts-button");
    desserts.classList.remove("btn-success");
    document.getElementById("product-list").innerHTML = `
    <div class="product-item">
                        <div class="product-content">
                            <h3 class="product-name">Drinks</h3>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, vel in error
                                    laborum
                                    quaerat deleniti nemo! Alias rerum, </p>
                            </div>
                            <p class="product-price">$120.00</p>
                            <div>
                                <button type="button" class="add-to-cart-btn">
                                    <i class="fas fa-shopping-cart"></i>Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="product-item">
                        <div class="product-content">
                            <h3 class="product-name">Product</h3>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, vel in error
                                    laborum
                                    quaerat deleniti nemo! Alias rerum, </p>
                            </div>
                            <p class="product-price">$120.00</p>
                            <div>
                                <button type="button" class="add-to-cart-btn">
                                    <i class="fas fa-shopping-cart"></i>Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="product-item">
                        <div class="product-content">
                            <h3 class="product-name">Product</h3>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, vel in error
                                    laborum
                                    quaerat deleniti nemo! Alias rerum, </p>
                            </div>
                            <p class="product-price">$120.00</p>
                            <div>
                                <button type="button" class="add-to-cart-btn">
                                    <i class="fas fa-shopping-cart"></i>Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="product-item">
                        <div class="product-content">
                            <h3 class="product-name">Product</h3>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, vel in error
                                    laborum
                                    quaerat deleniti nemo! Alias rerum, </p>
                            </div>
                            <p class="product-price">$120.00</p>
                            <div>
                                <button type="button" class="add-to-cart-btn">
                                    <i class="fas fa-shopping-cart"></i>Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
    
    `;
    ready();
});
//----------------------END TOGGLE BETWEEN MENU CHOICES





