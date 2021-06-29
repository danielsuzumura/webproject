import * as FillDB from './FillDatabase';

let Categories;
let Products;
let Users;
/**
 * Load Database
 */
export async function loadDatabase () {
    Categories = FillDB.CategoryInfo;
    Products = FillDB.ProductsInfo;
    window.localStorage.setItem('currentUser', '');
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
