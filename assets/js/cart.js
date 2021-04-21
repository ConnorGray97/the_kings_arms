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