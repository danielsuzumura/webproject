export class Product {
    constructor (name, photo, description, price, quantityStock, quantitySold, category) {
        this._name = name;
        this._photo = photo;
        this._description = description;
        this._price = price;
        this._quantityStock = quantityStock;
        this._quantitySold = quantitySold;
        this.category = category;
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
        return this.category;
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
}

const fillProducts = function () {
    let arr = [
        {
            name: 'M&M',
            photo: 'candy.jpg',
            description: 'Chocolate chip',
            price: '6,99',
            quantityStock: '20',
            quantitySold: '201',
            category: 'Candy'
        },
        {
            name: 'Apple',
            photo: 'apple.jpg',
            description: 'The bright red coloured and heart shaped Red Delicious apples are crunchy, juicy and slightly sweet. Red Delicious Apples are a natural source of fibre and are fat free. They contain a wide variety of anti-oxidants and polynutrients.',
            price: '2,99',
            quantityStock: '300',
            quantitySold: '123',
            category: 'Fruits'
        },
        {
            name: 'bread',
            photo: 'bread.jpg',
            description: 'Bread, baked food product made of flour or meal that is moistened, kneaded, and sometimes fermented.',
            price: '10,50',
            quantityStock: '100',
            quantitySold: '100',
            category: 'Breakfast'
        },
        {
            name: 'Milk',
            photo: 'dairy-products.jpg',
            description: 'Milk is a nutrient-rich liquid food produced by the mammary glands of mammals. It is the primary source of nutrition for young mammals',
            price: '5,50',
            quantityStock: '30',
            quantitySold: '5',
            category: 'Dairy'
        },
        {
            name: 'Tea',
            photo: 'tea.jpg',
            description: 'Tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves of Camellia sinensis, an evergreen shrub native to China',
            price: '20,50',
            quantityStock: '1',
            quantitySold: '2',
            category: 'Beverage'
        },
        {
            name: 'Popcorn',
            photo: 'apple.jpg',
            description: 'Popcorn is a variety of corn kernel which expands and puffs up when heated',
            price: '2,50',
            quantityStock: '10',
            quantitySold: '30',
            category: 'Snacks'
        }
    ];
    return arr.map(product => new Product(product.name, product.photo, product.description, product.price, product.quantityStock, product.quantitySold, product.category));
};
export const ProductsInfo = fillProducts();
