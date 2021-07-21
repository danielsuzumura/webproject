/**
 * User class
 */

export class Person {
    constructor (name, email, password, address, phone) {
        this._name = name;
        this._email = email;
        this._password = password;
        this._address = address;
        this._phone = phone;
        this._cart = {};
    }
    get name () {
        return this._name;
    }
    get email () {
        return this._email;
    }
    get password () {
        return this._password;
    }
    get address () {
        return this._address;
    }
    get phone () {
        return this._phone;
    }
    get cart () {
        return this._cart;
    }
    addProductCart (idProduct, amount) {
        this._cart.idProduct = amount;
    }
    deleteProductCart (idProduct) {
        delete this._cart.idProduct;
    }
}
