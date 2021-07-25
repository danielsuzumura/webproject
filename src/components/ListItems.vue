<template>
     <div id="container">
        <div class="products">
            <h2 v-if="query === undefined">{{category}}</h2>
            <h2 class="query-display" v-if="query !== undefined">Results for product: {{query}}</h2>
            <div class="product-container">
                <div class="loading" v-if="!isLoaded"></div>
                <div v-else>
                    <div class="box-product" v-for="product in filter" :key="product.name">
                        <figure >
                            <img id="img-product" :src=product.photo :v-if="product.photo !== undefined">
                            <figcaption>
                                <div id="stock-test" v-if="product.quantityStock > 0">
                                    <router-link :to=getlinkToProduct(product)>{{product.name}}</router-link>
                                </div>
                                <div v-else>
                                    <p id="out-stock"> {{product.name}} (OUT OF STOCK) </p>
                                </div>
                                <p>{{product.brand}}</p>
                                <p>R${{setPrecision(product.price)}}</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div v-if="filter.length === 0">
                        <p>No products were found</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as DB from '../dataSet/DatabaseConnector';
import {ImportImage, fixedDecimalPlaces} from './shared';
export default {
    name: 'ListItems',
    mixins: [ImportImage, fixedDecimalPlaces],
    beforeMount: async function () {
        this.isLoaded = false;
        this.products = await DB.getProducts();
        this.isLoaded = true;
    },
    data () {
        return {
            category: this.$route.params.category,
            products: null,
            query: this.$route.query.query,
            linkToProduct: '/ProductDisplay/?query=',
            isLoaded: false
        };
    },
    computed: {
        /**
         * Select products by category or query
         */
        filter () {
            if (this.products === null) {
                return null;
            }
            if (this.category !== undefined) {
                /** Get every product from category */
                return this.products.filter(product => product.category.toLowerCase() === this.category.toLowerCase());
            } else {
                /** Get every product that contains search query */
                let result = this.products.filter(product => product.name.toLowerCase().includes(this.query.toLowerCase()));
                return result;
            }
        }
    },
    watch: {
        /**
         * Check if search query was updated
         */
        $route: function (value) {
            this.query = this.$route.query.query;
        }
    },
    methods: {
        /**
         * Generate link to selected product
         */
        getlinkToProduct (product) {
            return this.linkToProduct + product.code;
        }
    }
};
</script>

<style scoped>
    @import '../assets/style/list-items';
</style>
