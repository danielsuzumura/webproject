import * as FillDB from './FillDatabase';
import {Person} from './Person';
let Categories;
let Products;
let Users = [];
let Admins = [];
let Sales = [];

function createAdmin () {
    let admin = new Person('admin', 'admin@admin', 'admin', '', '1234-5678');
    Admins.push(admin);
}

/**
 * Load Database
 */
export async function loadDatabase () {
    Categories = FillDB.CategoryInfo;
    Products = FillDB.ProductsInfo;
    Object.keys(window.localStorage).forEach((key) => {
        try {
            let user = JSON.parse(window.localStorage.getItem(key));
            if (Object.keys(user).length > 5) {
                Users.push(JSON.parse(window.localStorage.getItem(key)));
            }
        } catch (err) {

        }
    });
    window.localStorage.setItem('currentUser', '');
    createAdmin();
}

export async function getCategories () {
    return Categories;
}
export async function insertCategory (category) {
    Categories.insert(category);
}
export async function getProducts () {
    return Products;
}
export async function getProduct (productId) {
    return Products.filter(product => product.id === productId)[0];
}
export async function insertProduct (product) {
    Categories.insert(product);
}
export async function addProductCart (product, amount) {
    let cart = JSON.parse(window.localStorage.getItem('Cart')) || [];
    cart.push({product, amount});
    window.localStorage.setItem('Cart', JSON.stringify(cart));
}
export async function removeProductCart (productName) {
    let cart = JSON.parse(localStorage.getItem('Cart')) || [];
    cart = cart.filter(item => item.product.name !== productName);
    localStorage.setItem('Cart', JSON.stringify(cart));
}
export async function getCart () {
    return JSON.parse(localStorage.getItem('Cart'));
}
/** User functions */

export async function insertUser (user) {
    try {
        if (window.localStorage.getItem(user.email) === null) {
            window.localStorage.setItem(user.email, JSON.stringify(user));
            Users.push(user);
        } else {
            throw Error('Email is already in use');
        }
    } catch (error) {
        throw Error(error.message);
    }
}

export async function loginUser (email, password) {
    let user;
    try {
        user = JSON.parse(window.localStorage.getItem(email));
        if (user === null) {
            throw Error('User doesn\'t exist');
        }
        // Make user instanceof Person class ?
        if (password === user._password) {
            window.localStorage.setItem('currentUser', user.email);
            return user;
        } else {
            throw Error('Invalid email or password');
        }
    } catch (error) {
        throw Error(error.message);
    }
}
export async function getUsers () {
    return Users;
}
export async function getSession () {
    // Get email from current user
    let userKey = window.localStorage.getItem('currentUser');
    // Get object matching current user
    if (userKey !== '') {
        let user = window.localStorage.getItem(userKey);
        return user;
    } else {
        throw ReferenceError('No user logged in');
    }
}

export async function getAdmins () {
    return Admins;
}

export async function getSales () {
    return Sales;
}
