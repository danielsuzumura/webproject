/**
 * Product class
 */

export class Product {
    constructor (code, name, photo, description, price, quantityStock, quantitySold, category) {
        this.code = code;
        this.name = name;
        this.photo = photo;
        this.description = description;
        this.price = price;
        this.quantityStock = quantityStock;
        this.quantitySold = quantitySold;
        this.category = category;
    }
}
