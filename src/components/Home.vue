<template>
    <div id="container">
            <div id="feature-category">
                <div class="slogan">
                    <div id="slogan-text">
                        <h2>{{highlightCategory}}</h2>
                        <p>{{highlightText}}<br></p>
                            <button><router-link :to=highlightCategory>Shop Now</router-link></button>
                        </div>
                </div>
                <div class="feature-img">
                    <img :src="getImgUrl(pic)" :alt="pic">
                </div>
                <button id="right-button" class="btn-change-page" @click.prevent.stop = "changeCategory($event)"><i class="fa fa-angle-right"></i></button>
                <button id="left-button" class="btn-change-page" @click = "changeCategory($event)"><i class="fa fa-angle-left"></i></button>
            </div>
            <div class="break"></div>
            <div class="categories">
                <h2>Categories</h2>
                <div class="product-container">
                    <div v-for="category in Categories" :key="category.name" class="box-product">
                        <figure>
                            <img :src="getImgUrl(category.image)">
                            <figcaption><router-link :to="'/ListItems/'+category.name">{{category.name}}</router-link></figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import {CategoryInfo} from '../dataSet/Category';
export default {
    name: 'Home',
    data () {
        return {
            Categories: CategoryInfo,
            picIndex: 0,
            pic: CategoryInfo[0].image,
            highlightText: CategoryInfo[0].slogan,
            highlightCategory: CategoryInfo[0].name
        };
    },
    methods: {
        getImgUrl (pic) {
            return require('../assets/img/' + pic);
        },
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
                    this.picIndex = CategoryInfo.length - 1;
                }
            }
            this.picIndex = this.picIndex % CategoryInfo.length;
            this.pic = CategoryInfo[this.picIndex].image;
            this.highlightText = CategoryInfo[this.picIndex].slogan;
            this.highlightCategory = CategoryInfo[this.picIndex].name;
        }
    }
};

</script>

<style scoped>
    @import '../assets/style/home';
</style>
