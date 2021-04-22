// Tips were taken from various videos I will link below.
//https://www.youtube.com/watch?v=YeFzkC2awTM&t=1859s
//https://www.youtube.com/watch?v=90PgFUPIybY&t=8384s



if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready) //Checks to make sure all html elements are loaded before executing.

} else {
    ready()
}

function ready() {
//Removes Item from cart on remove click
let removeCartItemButtons = document.getElementsByClassName('remove-item');
for (let i = 0; i < removeCartItemButtons.length; i++) {
    let button = removeCartItemButtons[i];
    button.addEventListener('click', removeCartItem);
        
}





//Change event listener for product inputs
let quantityInputs = document.getElementsByClassName('quantity-input');
for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i];
    input.addEventListener('change', quantityChanged);
}

let addToCartButtons = document.getElementsByClassName('add-to-cart-btn');
for (let i = 0; i < addToCartButtons.length; i++) {
    let button = addToCartButtons[i];
    button.addEventListener('click', addToCartClicked);
}

document.getElementsByClassName('banner-btn')[0].addEventListener('click', purchaseClicked);

function purchaseClicked() {
    alert('Online payments are not currently available. A member of staff will be in contact shortly to process payment. Thank you!')
    let cartItems = document.getElementsByClassName('cart-list')[0];
    while (cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild);//Removes cart items and displays message when purchase is clicked.
    }
    updateCartTotal();
 }
}



function removeCartItem(event) {
        let buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
        updateCartTotal();
   
}

function quantityChanged(event) { //Makes sure user can't have any less than one products in basket.
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updateCartTotal();
}

function addToCartClicked(event) {
    alert('Item added to cart');
    let button = event.target
    let shopItem = button.parentElement.parentElement
    let title = shopItem.getElementsByClassName('product-name')[0].innerText;
    let price = shopItem.getElementsByClassName('product-price')[0].innerText;
    addItemToCart(title, price);
    updateCartTotal()
}

//adds div to cart list and inputs the price and title of product added.

function addItemToCart(title, price){
    let cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    let cartItems = document.getElementsByClassName('cart-list')[0];
    let cartItemNames = cartItems.getElementsByClassName('cart-item-title');
    for (let i = 0; i < cartItemNames.length; i++){
        if (cartItemNames[i].innerText == title){
            alert('This item is already in your cart');
            return;
        }
    }
    let cartRowContents = `
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
    let cartItemContainer = document.getElementsByClassName('cart-list')[0];
    let cartRows = cartItemContainer.getElementsByClassName('cart-row');
    let total = 0;
    for(let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName('cart-item-price')[0];
        let quantityElement = cartRow.getElementsByClassName('quantity-input')[0];
        let price = parseFloat(priceElement.innerText.replace('£', '')); //removes pound sign for use in maths fucntions
        let quantity = quantityElement.value;
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
                            <p class="product-price">£120.00</p>
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
                            <p class="product-price">£120.00</p>
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
                            <p class="product-price">£120.00</p>
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
                            <p class="product-price">£120.00</p>
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

//gets mains buttona and on click toggles to mains list
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
                            <p class="product-price">£120.00</p>
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
                            <p class="product-price">£120.00</p>
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
                            <p class="product-price">£120.00</p>
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
                            <p class="product-price">£120.00</p>
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
                            <p class="product-price">£120.00</p>
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
                            <p class="product-price">£120.00</p>
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
                            <p class="product-price">£120.00</p>
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
                            <p class="product-price">£120.00</p>
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
                            <p class="product-price">£120.00</p>
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
                            <p class="product-price">£120.00</p>
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
                            <p class="product-price">£120.00</p>
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
                            <p class="product-price">£120.00</p>
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

//Opens cart on cart click
document.getElementById('cart-button').addEventListener('click', openCart); 

function openCart(){
    document.querySelector('.cart').style.transform = 'translateX(0)';
}

//Closes cart on close button click
document.getElementById('close-button').addEventListener('click', closeCart);

function closeCart(){
    document.querySelector('.cart').style.transform = 'translateX(-100%)';
}
//----------------------END TOGGLE BETWEEN MENU CHOICES





