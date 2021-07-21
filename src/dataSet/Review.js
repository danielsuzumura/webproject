/**
 * Review class
 */

export class Review {
    constructor (name, rating, productId, reviewText) {
        this._name = name;
        this._rating = rating;
        this._productId = productId;
        this._reviewText = reviewText;
    }
    get name () {
        return this._name;
    }
    get rating () {
        return this._rating;
    }
    get productId () {
        return this._productId;
    }
    get reviewText () {
        return this._reviewText;
    }
}
