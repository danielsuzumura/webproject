/**
 * Database manipulation
 */

import {Sale} from './Sale.js';

const link = 'http://localhost:3000/';

/**
 * Load database
 */
export async function loadDatabase () {
    window.localStorage.setItem('currentUser', '');
}

/**
 * Product functions
 */

/**
 * Get every category
 * @returns {Category[]} Every category
 */
export async function getCategories () {
    try {
        let category = await fetch(link + 'category');
        category = await category.json();
        return category;
    } catch (err) {
        throw Error(err);
    }
}

/**
 * Insert category
 * @param {Category} category
 */
export async function insertCategory (category) {
    try {
        await fetch(link + 'category', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            // Add doublequote to key in object
            body: JSON.stringify(category)
        });
    } catch (err) {
        throw Error(err);
    }
}

/**
 * Get every product
 * @returns {Product[]} Every product
 */
export async function getProducts () {
    try {
        let products = await fetch(link + 'product');
        products = await products.json();
        return products;
    } catch (err) {
        throw Error(err);
    }
}

/**
 * Get product by id
 * @param {Number} productId Product id
 * @returns {Product}
 */
export async function getProduct (productId) {
    try {
        let product = await fetch(link + 'product/' + productId);
        product = await product.json();
        return product;
    } catch (err) {
        throw Error(err);
    }
}

/**
 * Insert a product
 * @param {Product} product Product to be inserted
 */
export async function insertProduct (product) {
    try {
        await fetch(link + 'product', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            // Add doublequote to key in object
            body: JSON.stringify(product)
        });
    } catch (err) {
        throw Error(err);
    }
}

/**
 * Update a product
 * @param {Product} product New Product values
 */
export async function updateProduct (product) {
    try {
        await fetch(link + 'product/' + product.code, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            // Add doublequote to key in object
            body: JSON.stringify(product)
        });
    } catch (err) {
        throw Error(err);
    }
}

/**
 * Delete product
 * @param {Number} id Product id
 */
export async function deleteProduct (id) {
    try {
        await fetch(link + 'product/' + id, {
            method: 'DELETE'
        });
    } catch (err) {
        throw Error(err);
    }
}

/**
 * Change stock of product
 * @param {Product} product Product sold
 * @param {Number} amount Amount sold
 */
export async function changeProductStock (product, amount) {
    try {
        let stockLeft = parseInt(product.quantityStock) - parseInt(amount);
        if (stockLeft < 0) {
            stockLeft = 0;
        }
        await fetch(link + 'product/stock/' + product.code, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            // Add doublequote to key in object
            body: JSON.stringify({quantityStock: stockLeft})
        });
    } catch (err) {
        throw Error(err);
    }
}

/**
 * Change quantity Sold  of product
 * @param {Product} product Product sold
 * @param {Number} amount Amount sold
 */
export async function changeProductSold (product, amount) {
    try {
        let totalSold = parseInt(product.quantitySold) + parseInt(amount);
        await fetch(link + 'product/sold/' + product.code, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            // Add doublequote to key in object
            body: JSON.stringify({quantitySold: totalSold})
        });
    } catch (err) {
        throw Error(err);
    }
}

/**
 * Change Sold and Stock after purchase
 * @param {Product} product Product sold
 * @param {Number} amount Amount sold
 */
export async function updateFinishPurchase (cart) {
    try {
        cart.forEach(async item => {
            await changeProductSold(item.product, item.amount);
            await changeProductStock(item.product, item.amount);
        });
    } catch (err) {
        throw Error(err);
    }
}

/**
 * Cart functions
 */

/**
 * Add item to cart
 * @param {Product} product Product to be added
 * @param {Number} amount Quantity added
 */

/**
 * Auxiliar function to addProductCart
 * search if there is already a product in the cart with the same name
 * if there is, return the index to only change the amount of the item in the database
 * else, it returns -1
 */

function isAlreadyInCart (cart, product) {
    for (let i in cart) {
        if (cart[i].product.name === product.name) {
            return i;
        }
    }
    return -1;
}

export async function addProductCart (product, amount) {
    let cart = JSON.parse(window.localStorage.getItem('Cart')) || [];
    let isInCart = isAlreadyInCart(cart, product);

    if (isInCart === -1) {
        cart.push({product, amount});
    } else {
        cart[isInCart].amount = parseInt(cart[isInCart].amount) + parseInt(amount);
    }
    window.localStorage.setItem('Cart', JSON.stringify(cart));
}

/**
 * Remove product from cart
 * @param {string} productName Product to be removed
 */
export async function removeProductCart (productName) {
    let cart = JSON.parse(localStorage.getItem('Cart')) || [];
    cart = cart.filter(item => item.product.name !== productName);
    localStorage.setItem('Cart', JSON.stringify(cart));
}

/**
 * Remove all items from cart
 */
export async function deleteCart () {
    window.localStorage.removeItem('Cart');
}

/**
 * Get cart
 * @returns {{Product, quantity} []} Every {item,amount} in cart
 */
export async function getCart () {
    return JSON.parse(localStorage.getItem('Cart'));
}

/**
 * User functions
 */

/**
 * Insert user
 * @param {Person} user User to be inserted
 */
export async function insertUser (user) {
    try {
        await fetch(link + 'person', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            // Add doublequote to key in object
            body: JSON.stringify(user)
        });
    } catch (err) {
        throw Error(err);
    }
}

/**
 * Get user
 * @param {string} userEmail Users email
 * @returns {Person} User
 */
export async function getUser (userEmail) {
    try {
        let user = await fetch(link + 'person/' + userEmail);
        user = await user.json();
        return user;
    } catch (err) {
        throw Error(err);
    }
}

/**
 * Get every user
 * @returns {Person[]} Every user
 */
export async function getUsers () {
    try {
        let users = await fetch(link + 'person/');
        users = await users.json();
        return users;
    } catch (err) {
        throw Error(err);
    }
}

/**
 * Login user
 * @param {string} email
 * @param {string} password
 * @returns {Person} user matching email
 */
export async function loginUser (email, password) {
    let user;
    try {
        user = await getUser(email);
        if (user === null) {
            throw Error('User doesn\'t exist');
        }
        if (password === user.password) {
            window.localStorage.setItem('currentUser', user.email);
            return user;
        } else {
            throw Error('Wrong password');
        }
    } catch (error) {
        throw Error(error.message);
    }
}

/**
 * Update user info
 * @param {Person} user User to be updated
 * @param {string} oldEmail User's old email(or current, if info wasn't updated)
 */
export async function updateUser (user, oldEmail) {
    try {
        await deleteUser(oldEmail);
        window.localStorage.setItem('currentUser', user.email);
        try {
            await insertUser(user);
        } catch (err) {
            user.email = oldEmail;
            await insertUser(user);
            throw Error('Email is already in use');
        }
    } catch (error) {
        throw Error(error.message);
    }
}

/**
 * Delete user
 * @param {string} userEmail Email from user to be deleted
 */
export async function deleteUser (userEmail) {
    try {
        await fetch(link + 'person/' + userEmail, {
            method: 'DELETE'
        });
    } catch (err) {
        throw Error(err);
    }
}

/**
 * Session function
 */

/**
 * Get current user
 * @returns {Person} Current user
 */
export async function getSession () {
    // Get email from current user
    let userEmail = window.localStorage.getItem('currentUser');
    // Get object matching current user
    if (userEmail !== '') {
        let user = await getUser(userEmail);
        return user;
    } else {
        throw ReferenceError('No user logged in');
    }
}

export async function logout () {
    window.localStorage.setItem('currentUser', '');
}

/**
 * Sales function
 */

/**
 * Create a sale
 * @param {{Product, quantity} []} cart
 * @param {Number} price Total price from purchase
 */
export async function insertSale (cart, price) {
    // Create sale
    let id = await getSales();
    id = id.length;
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    let user = await getSession();
    let sale = new Sale(id, cart, price, user.email, date, time);
    deleteCart();
    // get list of sales
    try {
        await fetch(link + 'sale', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            // Add doublequote to key in object
            body: JSON.stringify(sale)
        });
    } catch (err) {
        throw Error(err);
    }
}

/**
 * Get every sale
 * @returns {Sale[]} Every sale
 */
export async function getSales () {
    try {
        let sales = await fetch(link + 'sale');
        sales = await sales.json();
        return sales;
    } catch (err) {
        throw Error(err);
    }
}

/**
 * Get every purchase from user
 * @param {string} userEmail User email
 * @returns {Sale[]} every purchase made from user
 */
export async function getPurchases (userEmail) {
    let Sales = await getSales();
    if (Sales.length === 0) {
        throw Error('No purchases made');
    }
    Sales = Sales.filter(sale => sale.user === userEmail);
    if (Sales.length === 0) {
        throw Error('No purchases made');
    }
    return Sales;
}

/**
 * Admin function
 */

/**
 * Get every admin
 * @returns Every admin
 */
export async function getAdmins () {
    try {
        let admin = await fetch(link + 'admin');
        admin = await admin.json();
        return admin;
    } catch (err) {
        throw Error(err);
    }
}

/**
 * Insert admin
 * @param {User} user User that will be admin
 */
export async function insertAdmin (user) {
    try {
        await fetch(link + 'admin', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            // Add doublequote to key in object
            body: JSON.stringify(user)
        });
    } catch (err) {
        throw Error(err);
    }
}

/**
 * Delete admin
 * @param {string} id Admin email
 */
export async function deleteAdmin (email) {
    try {
        await fetch(link + 'admin/' + email, {
            method: 'DELETE'
        });
    } catch (err) {
        throw Error(err);
    }
}

/**
 * Check if current user is admin
 * @returns {Bool} If current user is admin
 */
export async function isAdmin () {
    let Admins = await getAdmins();
    let user;
    try {
        user = await getSession();
    } catch (err) {
        return false;
    }
    return Admins.filter(admin => admin.email === user.email).length;
}

/**
 * Check if user is admin
 * @param {string} email Users email
 * @returns {Bool} If current user is admin
 */
export async function isAdminEmail (email) {
    let Admins = await getAdmins();
    let isAdmin = Admins.filter(admin => admin.email === email).length;
    if (isAdmin > 0) {
        return true;
    } else {
        return false;
    }
}

/**
 * Review
 */

/**
 * Get every review
 * @returns {Review []} Every review
 */
export async function getReviews () {
    try {
        let reviews = await fetch(link + 'review');
        reviews = await reviews.json();
        return reviews;
    } catch (err) {
        throw Error(err);
    }
}

/**
 * Get every review
 * @param {Review} review Review to be inserted
 */
export async function insertReview (review) {
    try {
        await fetch(link + 'review', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            // Add doublequote to key in object
            body: JSON.stringify(review)
        });
    } catch (err) {
        throw Error(err);
    }
}

/**
 * Insert contact text
 * @param {string} name Name
 * @param {string} email Email
 * @param {string} text Text
 */
export async function insertContactUs (name, email, text) {
    // Contact.push({name, email, text});
}
