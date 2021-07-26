<template>
    <div id="container">
        <div class="loading" v-if="!isLoaded"></div><br>
        <div v-if="product !== null">
            <div id="product-entry">
                <div id="product-image-div" class="box">
                    <img id="product-image" :src="product.photo" :alt="product.name">
                </div><br>
                <div id="product-entry-description" class="box">
                    <h1 id="entry-title">{{product.name}}</h1>
                    <Rating :rating-value = reviewMean />
                    <span>({{ratingAmount}})</span>
                </div>
                <div id="product-price" class="box">
                    <p id="price">R${{setPrecision(product.price)}}</p>
                    <p id="sold">Left: {{product.quantityStock}}</p>
                    <p id="amount">AMOUNT:<br>
                        <select v-model="amount">
                            <option v-for="index in Math.min(parseInt(product.quantityStock),5)" :key=index>{{index}}</option>
                        </select>
                    </p>
                    <router-link to="/Cart"><button id="button-addCart" @click='addToCart'> ADD TO CART </button></router-link >
                </div>

            </div>

            <div id="product-description">
                <h1>{{product.name}}</h1>
                <h2>Description:</h2>
                <p id="description">{{product.description}}</p>
            </div>

            <div class="loading" v-if="!isLoaded"></div>

            <div id="product-write-review">
                <h1>Write your own review:</h1>
                <form action="POST" @submit.prevent.stop=submitReview>
                    <input type="text" placeholder="Name" v-model="reviewName" required><br>
                    <RatingInteractive id="my-rating" />
                    <textarea name="my-review" v-model="reviewText" required></textarea><br>
                    <input type="submit" name="post-review" value="Post">
                </form>
                <p v-if="reviewRatingError === true">Please insert rating</p>
                <p v-if="reviewPosted === true">{{reviewStatusMessage}}</p>
            </div>

            <div id="product-review" v-if="reviews !== null">
                <h2>Rating and Reviews:</h2>
                <div class="review" v-for="review in reviews" :key='review.id'>
                    <p class="review name">
                        <Rating :rating-value=review.rating />
                        {{review.name}}
                    </p>
                    <p>{{review.reviewText}}</p>
                </div>
            </div>
            <div v-else>
                <h2>No reviews</h2>
            </div>
        </div>
    </div>
</template>

<script>
import {ImportImage, fixedDecimalPlaces} from './shared';
import * as DB from '../dataSet/DatabaseConnector';
import {Review} from '../dataSet/Review';
import Rating from './Rating';
import RatingInteractive from './RatingInteractive';

export default {
    name: 'ProductDisplay',
    mixins: [ImportImage, fixedDecimalPlaces],
    mounted: async function () {
        /** Get Product info */
        try {
            this.product = await DB.getProduct(this.productQuery);
        } catch (err) {
            this.product = 'not found';
        }
        /** Get review info */
        await this.getRating();
        /** Listen to user review input to get rating value */
        this.$root.$on('click', (reviewRating) => {
            this.reviewRating = reviewRating;
        });
        this.isLoaded = true;
    },
    data () {
        return {
            user: {},
            productQuery: this.$route.query.query,
            product: null,
            amount: null,
            ratingAmount: 0,
            reviews: null,
            reviewMean: 0,
            reviewName: '',
            reviewText: '',
            reviewPosted: false,
            reviewRating: null,
            reviewRatingError: false,
            reviewStatusMessage: '',
            isLoaded: false
        };
    },
    methods: {
        /**
         * Add product to cart
         */
        addToCart () {
            DB.addProductCart(this.product, this.amount);
        },
        /**
         * Submit product review
         */
        async submitReview () {
            let reviewId = await DB.getReviewId();
            if (this.reviewRating === null) {
                this.reviewRatingError = true;
            } else {
                this.reviewRatingError = false;
                let review = new Review(reviewId, this.reviewName, this.reviewRating, this.product.code, this.reviewText);
                try {
                    await DB.insertReview(review);
                    /** Update reviews */
                    this.reviews = await DB.getProductReviews(this.product.code);
                    this.reviewStatusMessage = 'Thanks for reviewing this product';
                    /** Update product rating */
                    await this.getRating();
                } catch (err) {
                    this.reviewStatusMessage = 'Invalid review';
                }
                this.reviewPosted = true;
            }
        },
        /**
         * Calculate rating mean
         */
        productMeanRating () {
            if (this.reviews.length !== 0) {
                let sum = 0;
                this.reviews.map(review => {
                    sum += parseInt(review.rating);
                });
                return parseInt(sum / this.reviews.length);
            } else {
                return 0;
            }
        },
        /**
         * Get product review and calculate rating
         */
        async getRating () {
            this.reviews = await DB.getProductReviews(this.product.code);
            this.ratingAmount = this.reviews.length;
            this.reviewMean = this.productMeanRating();
        }
    },
    components: {
        Rating, RatingInteractive
    }
};
</script>

<style scoped>
    @import '../assets/style/product';
</style>
