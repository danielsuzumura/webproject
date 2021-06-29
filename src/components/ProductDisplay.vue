<template>
    <div id="container" v-if="product !== null">
        <div id="product-entry">
            <div id="product-image-div" class="box">
                <img id="product-image" :src="getImgUrl(product.photo)" alt="Four red apples, one of them cutted in half">
            </div><br>
            <div id="product-entry-description" class="box">
                <h1 id="entry-title">{{product.name}}</h1>
                <p id="review-average">
                    <img src="icons/three-stars.png" alt="three stars icon" id="img-review-average">
                    2 reviews
                </p>
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
                <!-- <a href="login.html"><button id="button-addCart"> ADD TO CART </button></a> -->
                <router-link to="/Cart"><button id="button-addCart" @click='addToCart'> ADD TO CART </button></router-link >
            </div>

        </div>

        <div id="product-description">
            <h1>{{product.name}}</h1>
            <h2>Description:</h2>
            <p id="description">{{product.description}}</p>
        </div>

        <div id="product-review" >
            <h2>Rating and Reviews:</h2>
            <div class="review">
                <p class="review name">
                    <img src="icons/five-stars.png" alt="five stars icon" class="img-review" >
                    Carlos Silva Santos
                    </p>
                <p>Delicious Apples.</p>
            </div> <br>
            <div class="review">
                <p class="review name">
                    <img src="icons/one-stars.png" alt="one star icon" class="img-review" >
                    Seijougahara, Hitagi
                </p>
                <p>Bad.<br>
                    Not mature and tastes horrible.</p>
            </div>
        </div>
    </div>
</template>

<script>
import {ImportImage} from './shared';
import * as DB from '../dataSet/DatabaseConnector';
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
    },
    data () {
        return {
            user: {},
            productQuery: this.$route.query.query,
            product: null,
            amount: 1
        };
    },
    methods: {
        addToCart () {
            DB.addProductCart(this.product, this.amount);
        }
    }
};
</script>

<style scoped>
    @import '../assets/style/product';
</style>
