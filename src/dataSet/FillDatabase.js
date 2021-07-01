/**
 * Fill database
 */

import {Product} from './Product';
import {Category} from './Category';
import {Review} from './Review';

const fillProducts = function () {
    let arr = [
        {
            id: '0',
            name: 'M&M',
            photo: 'candy.jpg',
            description: 'Chocolate chip',
            price: '6,99',
            quantityStock: '20',
            quantitySold: '201',
            category: 'Candy'
        },
        {
            id: '1',
            name: 'Apple',
            photo: 'apple.jpg',
            description: 'The bright red coloured and heart shaped Red Delicious apples are crunchy, juicy and slightly sweet. Red Delicious Apples are a natural source of fibre and are fat free. They contain a wide variety of anti-oxidants and polynutrients.',
            price: '2,99',
            quantityStock: '300',
            quantitySold: '123',
            category: 'Fruits'
        },
        {
            id: '2',
            name: 'bread',
            photo: 'bread.jpg',
            description: 'Bread, baked food product made of flour or meal that is moistened, kneaded, and sometimes fermented.',
            price: '10,50',
            quantityStock: '100',
            quantitySold: '100',
            category: 'Breakfast'
        },
        {
            id: '3',
            name: 'Milk',
            photo: 'dairy-products.jpg',
            description: 'Milk is a nutrient-rich liquid food produced by the mammary glands of mammals. It is the primary source of nutrition for young mammals',
            price: '5,50',
            quantityStock: '30',
            quantitySold: '5',
            category: 'Dairy'
        },
        {
            id: '4',
            name: 'Tea',
            photo: 'tea.jpg',
            description: 'Tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves of Camellia sinensis, an evergreen shrub native to China',
            price: '20,50',
            quantityStock: '1',
            quantitySold: '2',
            category: 'Beverage'
        },
        {
            id: '5',
            name: 'Popcorn',
            photo: 'apple.jpg',
            description: 'Popcorn is a variety of corn kernel which expands and puffs up when heated',
            price: '2,50',
            quantityStock: '10',
            quantitySold: '30',
            category: 'Snacks'
        }
    ];
    return arr.map(product => new Product(product.id, product.name, product.photo, product.description, product.price, product.quantityStock, product.quantitySold, product.category));
};
export const ProductsInfo = fillProducts();
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

const fillReview = function () {
    let arr = [
        {
            name: 'Carlos Silva Santos',
            rating: '4',
            productId: '0',
            reviewText: 'Delicious Apples.'
        },
        {
            name: 'Seijougahara, Hitagi',
            rating: '2',
            productId: '0',
            reviewText: 'Bad. Not mature and tastes horrible.'
        }
    ];
    return arr.map(review => new Review(review.name, review.rating, review.productId, review.reviewText));
};
export const ReviewInfo = fillReview();
