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
                            <router-link to="/ProductDisplay">{{product.name}}</router-link>
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
import {ProductsInfo} from '../dataSet/Product';
export default {
    name: 'ListItems',
    data () {
        return {
            category: this.$route.params.category,
            products: ProductsInfo,
            query: this.$route.query.query
        };
    },
    computed: {
        filter () {
            if (this.category !== undefined) {
                return this.products.filter(product => product.category === this.category);
            } else {
                return this.products.filter(product => product.name.toLowerCase() === this.query.toLowerCase());
            }
        }
    },
    methods: {
        getImgUrl (photo) {
            return require('../assets/img/' + photo);
        }
    }
};
</script>

<style scoped>
    @import '../assets/style/list-items';
</style>
