<template>
    <div id="container" v-if="product !== null">
        <div id="product-entry">
            <div id="product-image-div" class="box">
                <img id="product-image" :src="getImgUrl(product.photo)" alt="Four red apples, one of them cutted in half">
            </div><br>
            <div id="product-entry-description" class="box">
                <h1 id="entry-title">{{product.name}}</h1>
                <Rating rating-value=2 />
                <span>({{ratingAmount}})</span>
            </div>
            <div id="product-price" class="box">
                <p id="price">R${{product.price}}</p>
                <p id="sold">Left: {{product.quantityStock}}</p>
                <p id="amount">AMOUNT:<br>
                    <select v-model="amount">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
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

        <div id="product-write-review">
            <h1>Write your own review:</h1>
            <form action="POST" @submit.prevent.stop=submitReview>
                <input type="text" placeholder="Name" v-model="reviewName" required><br>
                <RatingInteractive id="my-rating" />
                <textarea name="my-review" v-model="reviewText" required></textarea><br>
                <input type="submit" name="post-review" value="Post">
            </form>
            <p v-if="reviewRatingError === true">Please insert rating</p>
            <p v-if="reviewPosted === true">Thanks for reviewing this product</p>
        </div>

        <div id="product-review" v-if="reviews !== null">
            <h2>Rating and Reviews:</h2>
            <div class="review" v-for="review in reviews" :key='review._reviewText'>
                <p class="review name">
                    <Rating :rating-value=review._rating />
                    {{review._name}}
                </p>
                <p>{{review._reviewText}}</p>
            </div>
        </div>
        <div v-else>
            <h2>No reviews</h2>
        </div>
    </div>
</template>

<script>
import {ImportImage} from './shared';
import * as DB from '../dataSet/DatabaseConnector';
import {Review} from '../dataSet/Review';
import Rating from './Rating';
import RatingInteractive from './RatingInteractive';

export default {
    name: 'ProductDisplay',
    mixins: [ImportImage],
    mounted: async function () {
        // get Product info
        try {
            this.product = await DB.getProduct(this.productQuery);
        } catch (err) {
            this.product = 'not found';
        }
        this.reviews = await DB.getReviews();
        this.$root.$on('click', (reviewRating) => {
            this.reviewRating = reviewRating;
        });
    },
    data () {
        return {
            user: {},
            productQuery: this.$route.query.query,
            product: null,
            amount: 1,
            ratingAmount: 20,
            reviews: null,
            reviewName: '',
            reviewText: '',
            reviewPosted: false,
            reviewRating: null,
            reviewRatingError: false
        };
    },
    methods: {
        addToCart () {
            DB.addProductCart(this.product, this.amount);
        },
        submitReview () {
            if (this.reviewRating === null) {
                this.reviewRatingError = true;
            } else {
                this.reviewRatingError = false;
                let review = new Review(this.reviewName, this.reviewRating, this.product._id, this.reviewText);
                DB.insertReview(review);
                this.reviewPosted = true;
            }
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
