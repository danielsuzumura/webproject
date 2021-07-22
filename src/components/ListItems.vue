<template>
     <div id="container">
        <div class="products">
            <h2 v-if="query === undefined">{{category}}</h2>
            <h2 class="query-display" v-if="query !== undefined">Results for product: {{query}}</h2>
            <div class="product-container">
                <div class="box-product" v-for="product in filter" :key="product.name">
                    <figure >
                        <img id="img-product" :src=product.photo>
                        <figcaption>
                            <div id="stock-test" v-if="product.quantityStock > 0">
                                <router-link :to=getlinkToProduct(product)>{{product.name}}</router-link>
                            </div>
                            <div v-else>
                                <p id="out-stock"> {{product.name}} (OUT OF STOCK) </p>
                            </div>
                            <p>{{product.brand}}</p>
                            <p>R${{product.price}}</p>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as DB from '../dataSet/DatabaseConnector';
import {ImportImage} from './shared';
export default {
    name: 'ListItems',
    mixins: [ImportImage],
    beforeMount: async function () {
        this.products = await DB.getProducts();
    },
    data () {
        return {
            category: this.$route.params.category,
            products: null,
            query: this.$route.query.query,
            linkToProduct: '/ProductDisplay/?query='
        };
    },
    computed: {
        filter () {
            if (this.products === null) {
                return null;
            }
            if (this.category !== undefined) {
                return this.products.filter(product => product.category === this.category);
            } else {
                return this.products.filter(product => product.name.toLowerCase() === this.query.toLowerCase());
            }
        }
    },
    watch: {
        $route: function (value) {
            this.query = this.$route.query.query;
        }
    },
    methods: {
        getlinkToProduct (product) {
            return this.linkToProduct + product.code;
        }
    }
};
</script>

<style scoped>
    @import '../assets/style/list-items';
</style>
