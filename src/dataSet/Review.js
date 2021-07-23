/**
 * Review class
 */

export class Review {
    constructor (id, name, rating, productId, reviewText) {
        this.id = id;
        this.name = name;
        this.rating = rating;
        this.productId = productId;
        this.reviewText = reviewText;
    }
}
