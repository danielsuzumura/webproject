class Category {
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
const fillCategory = function () {
    let arr = [
        {
            name: 'Candy',
            image: 'candy.jpg',
            alt: 'candy',
            slogan: 'Taste the Rainbow'
        },
        {
            name: 'Fruits',
            image: 'apple.jpg',
            alt: 'fruits',
            slogan: 'Fresh fruit for you'
        },
        {
            name: 'Breakfast',
            image: 'bread.jpg',
            alt: 'breakfast',
            slogan: 'A healthy breakfast'
        },
        {
            name: 'Dairy',
            image: 'dairy-products.jpg',
            alt: 'dairy',
            slogan: 'Milk for a stronger tomorrow'
        },
        {
            name: 'Beverage',
            image: 'tea.jpg',
            alt: 'beverage',
            slogan: 'Refreshing taste you\'ll remember'
        },
        {
            name: 'Snacks',
            image: 'apple.jpg',
            alt: 'snacks',
            slogan: 'The taste that you will definitely admire'
        }
    ];
    return arr.map(category => new Category(category.name, category.image, category.alt, category.slogan));
};
export const CategoryInfo = fillCategory();
