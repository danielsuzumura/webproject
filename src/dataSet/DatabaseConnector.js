/**
 * Database manipulation
 */

import * as FillDB from './FillDatabase';
import {Person} from './Person';
import {Sale} from './Sale';

let Categories;
let Products;
let Users = [];
let Admins = [];

/**
 * Load database
 */
export async function loadDatabase () {
    Categories = FillDB.CategoryInfo;
    Products = FillDB.ProductsInfo;
    Object.keys(window.localStorage).forEach((key) => {
        try {
            if (key !== 'Cart' && key !== 'Sales') {
                let user = JSON.parse(window.localStorage.getItem(key));
                if (Object.keys(user).length > 5) {
                    Users.push(JSON.parse(window.localStorage.getItem(key)));
                }
            }
        } catch (err) {
            // ignore error
        }
    });
    window.localStorage.setItem('currentUser', '');
    await createAdmin();
}

/**
 * Product functions
 */

/**
 * Get every category
 * @returns {Category[]} Every category
 */
export async function getCategories () {
    return Categories;
}

/**
 * Insert category
 * @param {Category} category
 */
export async function insertCategory (category) {
    Categories.insert(category);
}

/**
 * Get every product
 * @returns {Product[]} Every product
 */
export async function getProducts () {
    return Products;
}

/**
 * Get product by id
 * @param {Number} productId Product id
 * @returns {Product}
 */
export async function getProduct (productId) {
    return Products.filter(product => product.id === productId)[0];
}

/**
 * Insert a product
 * @param {Product} product Product to be inserted
 */
export async function insertProduct (product) {
    Products.push(product);
    console.log(Products);
}

/**
 * Delete product
 * @param {Number} id Product id
 */
export async function deleteProduct (id) {
    Products = Products.filter(product => product._id !== id);
}

/**
 * Cart functions
 */

/**
 * Add item to cart
 * @param {Product} product Product to be added
 * @param {Number} amount Quantity added
 */
export async function addProductCart (product, amount) {
    let cart = JSON.parse(window.localStorage.getItem('Cart')) || [];
    cart.push({product, amount});
    window.localStorage.setItem('Cart', JSON.stringify(cart));
}

/**
 * Remove product from cart
 * @param {string} productName Product to be removed
 */
export async function removeProductCart (productName) {
    let cart = JSON.parse(localStorage.getItem('Cart')) || [];
    cart = cart.filter(item => item.product._name !== productName);
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
        if (window.localStorage.getItem(user._email) === null) { // email doesn't exist
            window.localStorage.setItem(user._email, JSON.stringify(user));
            Users.push(user);
        } else {
            throw Error('Email is already in use');
        }
    } catch (error) {
        throw Error(error.message);
    }
}

/**
 * Get user
 * @param {string} userEmail Users email
 * @returns {Person} User
 */
export async function getUser (userEmail) {
    // Get object matching current user
    let user = window.localStorage.getItem(userEmail);
    if (user !== null) {
        return JSON.parse(user);
    } else {
        throw ReferenceError('User not found');
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
        user = JSON.parse(window.localStorage.getItem(email));
        if (user === null) {
            throw Error('User doesn\'t exist');
        }
        // Make user instanceof Person class ?
        if (password === user._password) {
            window.localStorage.setItem('currentUser', user._email);
            return user;
        } else {
            throw Error('Invalid email or password');
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
        window.localStorage.setItem('currentUser', user._email);
        try {
            await insertUser(user);
        } catch (err) {
            user._email = oldEmail;
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
        if (window.localStorage.getItem(userEmail) === null) {
            throw Error('User not found');
        } else {
            window.localStorage.removeItem(userEmail);
            Users = Users.filter(item => item._email !== userEmail);
        }
    } catch (error) {
        throw Error(error.message);
    }
}

/**
 * Get every user
 * @returns {Person[]} Every user
 */
export async function getUsers () {
    return Users;
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
    let userKey = window.localStorage.getItem('currentUser');
    // Get object matching current user
    if (userKey !== '') {
        let user = window.localStorage.getItem(userKey);
        return JSON.parse(user);
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
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    let user = await getSession();
    let sale = new Sale(cart, price, user, date, time);
    deleteCart();
    // get list of sales
    let Sales = JSON.parse(window.localStorage.getItem('Sales')) || [];
    Sales.push(sale);
    window.localStorage.setItem('Sales', JSON.stringify(Sales));
}

/**
 * Get every sale
 * @returns {Sale[]} Every sale
 */
export async function getSales () {
    let sales = JSON.parse(localStorage.getItem('Sales'));
    if (sales === null) {
        return [];
    } else {
        return sales;
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
    Sales = Sales.filter(sale => sale._user._email === userEmail);
    if (Sales.length === 0) {
        throw Error('No purchases made');
    }
    return Sales;
}

/**
 * Admin function
 */

/**
 * Create main admin
 * login:
 *      Email: admin@admin
 *      Password: admin
 */
async function createAdmin () {
    let admin = new Person('admin', 'admin@admin', 'admin', '', '1234-5678');
    try {
        await insertUser(admin);
    } catch (err) {

    }
    Admins.push(admin);
}

/**
 * Get every admin
 * @returns Every admin
 */
export async function getAdmins () {
    return Admins;
}

/**
 * Delete admin
 * @param {string} id Admin email
 */
export async function deleteAdmin (email) {
    Admins = Admins.filter(admin => admin._email !== email);
}

/**
 * Check if current user is admin
 * @returns {Bool} If current user is admin
 */
export async function isAdmin () {
    let user;
    try {
        user = await getSession();
    } catch (err) {
        return false;
    }
    return Admins.filter(admin => admin._email === user._email).length;
}
