<template>
     <div id="container">
        <div class="products">
            <h2 v-if="query === undefined">{{category}}</h2>
            <h2 class="query-display" v-if="query !== undefined">Results for product: {{query}}</h2>
            <div class="product-container">
                <div class="box-product" v-for="product in filter" :key="product.name">
                    <figure >
                        <img :src="getImgUrl(product.photo)">
                        <figcaption>
                            <router-link :to=getlinkToProduct(product)>{{product.name}}</router-link>
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
    methods: {
        getlinkToProduct (product) {
            return this.linkToProduct + product.id;
        }
    }
};
</script>

<style scoped>
    @import '../assets/style/list-items';
</style>
