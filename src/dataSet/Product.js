/**
 * Product class
 */

export class Product {
    constructor (id, name, photo, description, price, quantityStock, quantitySold, category) {
        this._id = id;
        this._name = name;
        this._photo = photo;
        this._description = description;
        this._price = price;
        this._quantityStock = quantityStock;
        this._quantitySold = quantitySold;
        this.category = category;
    }
    get id () {
        return this._id;
    }
    get name () {
        return this._name;
    }
    get photo () {
        return this._photo;
    }
    get description () {
        return this._description;
    }
    get price () {
        return this._price;
    }
    get quantityStock () {
        return this._quantityStock;
    }
    get quantitySold () {
        return this._quantitySold;
    }
    get category () {
        return this._category;
    }
    set name (name) {
        this._name = name;
    }
    set photo (photo) {
        this._photo = photo;
    }
    set description (description) {
        this._description = description;
    }
    set price (price) {
        this._price = price;
    }
    set quantityStock (quantityStock) {
        this._quantityStock = quantityStock;
    }
    set quantitySold (quantitySold) {
        this._quantitySold = quantitySold;
    }
    set category (category) {
        this._category = category;
    }
    sellProduct (n) {
        this._quantityStock -= n;
        if (this._quantityStock < 0) {
            throw Error('No stock available for this amount. Current amount: ', this._quantityStock);
        }
        this._quantitySold += n;
    }
    addStock (n) {
        this._quantityStock += n;
    }
    updateProduct (newProduct) {
        this._name = newProduct._name;
        this._photo = newProduct._photo;
        this._description = newProduct._description;
        this._price = newProduct._price;
        this._quantityStock = newProduct._quantityStock;
        this._quantitySold = newProduct._quantitySold;
        this._category = newProduct._category;
    }
}
