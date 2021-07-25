<template>
    <div id="container">
            <div id="feature-category">
                <div class="slogan">
                    <div id="slogan-text">
                        <h2>{{highlightCategory}}</h2>
                        <p>{{highlightText}}<br></p>
                        <div class="loading" v-if="!isLoaded"></div><br>
                        <button><router-link :to="'ListItems/'+highlightCategory">Shop Now</router-link></button>
                    </div>
                </div>
                <div class="feature-img">
                    <img v-if="pic !== ''" :src=pic :alt="pic">
                </div>
                <button id="right-button" class="btn-change-page" @click.prevent.stop = "changeCategory($event)"><i class="fa fa-angle-right"></i></button>
                <button id="left-button" class="btn-change-page" @click = "changeCategory($event)"><i class="fa fa-angle-left"></i></button>
            </div>
            <div class="break"></div>
            <div class="categories">
                <h2>Categories</h2>
                <div class="loading" v-if="!isLoaded"></div>
                <div class="product-container">
                    <div v-for="category in Categories" :key="category.name" class="box-product">
                        <figure>
                            <img :src=category.photo>
                            <figcaption><router-link :to="'/ListItems/'+category.name">{{category.name}}</router-link></figcaption>
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
    name: 'Home',
    mixins: [ImportImage],
    mounted: async function () {
        this.Categories = await DB.getCategories();
        this.pic = this.Categories[0].photo;
        this.highlightText = this.Categories[0].slogan;
        this.highlightCategory = this.Categories[0].name;
        this.isLoaded = true;
    },
    data () {
        return {
            Categories: {},
            picIndex: 0,
            pic: '',
            highlightText: '',
            highlightCategory: '',
            isLoaded: false
        };
    },
    methods: {
        /**
         * Change the highlighted category
         * @param {Event}
         */
        changeCategory (event) {
            if (event.currentTarget.id === 'right-button') {
                this.picIndex += 1;
            } else {
                this.picIndex -= 1;
                if (this.picIndex < 0) {
                    this.picIndex = this.Categories.length - 1;
                }
            }
            this.picIndex = this.picIndex % this.Categories.length;
            this.pic = this.Categories[this.picIndex].photo;
            this.highlightText = this.Categories[this.picIndex].slogan;
            this.highlightCategory = this.Categories[this.picIndex].name;
        }
    }
};

</script>

<style scoped>
    @import '../assets/style/home';
</style>
