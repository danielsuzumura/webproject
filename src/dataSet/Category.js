/**
 * Category class
 */
export class Category {
    constructor (name, image, alt, slogan) {
        this._name = name;
        this._image = image;
        this._alt = alt;
        this._slogan = slogan;
    }
    get name () {
        return this._name;
    }
    get image () {
        return this._image;
    }
    get alt () {
        return this._alt;
    }
    get slogan () {
        return this._slogan;
    }
}
