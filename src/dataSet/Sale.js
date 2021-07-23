/**
 * Sale class
 */

export class Sale {
    constructor (id, cart, price, user, date, time) {
        this.id = id;
        this.cart = cart;
        this.price = price;
        this.user = user;
        this.date = date;
        this.time = time;
    }
}
