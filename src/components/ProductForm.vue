<template>
    <div>
        <div id="container" v-if="isAdmin === true">
            <div id="register-box">
                <form @submit.prevent.stop="sendForm" method="POST">
                    <h1>PRODUCT REGISTER</h1>

                    <label id="product-name"> Product name: </label><br>
                    <input type="text" name="name" v-model="name"><br><br>

                    <label id="product-image"> Image of the product: </label><br>
                    <input type="file" name="file"> <br><br>

                    <label id="product-price"> Price: </label><br>
                    <input type="number" name="price" v-model="price" step=".01"><br><br>

                    <label id="product-amount"> Stock: </label><br>
                    <input type="number" name="amount" min=0 v-model="stock"><br><br>

                    <label id="product-category"> Category: </label><br>
                    <input type="text" name="category" v-model="category"><br><br>

                    <label for="product-description"> Product description: </label><br>
                    <textarea id="product-description" name="product-description"></textarea><br><br>

                    <input type="submit" name="btn-submit" value="Submit">
                </form>
                <p id="changes-saved" v-show="sucessMessage === true">Product created</p>
            </div>
        </div>
        <div class="denied" v-else>
            <h1>Acess denied</h1>
        </div>
    </div>
</template>

<script>
import * as DB from '../dataSet/DatabaseConnector';
import {Product} from '../dataSet/Product';
export default {
    name: 'ProductForm',
    mounted: async function () {
        if (await DB.isAdmin()) {
            this.isAdmin = true;
        }
    },
    data () {
        return {
            isAdmin: false,
            name: '',
            img: '',
            price: '',
            stock: '',
            category: '',
            description: '',
            sucessMessage: false
        };
    },
    methods: {
        async sendForm () {
            let product = new Product(0, this.name, this.photo, this.description, this.price, this.quantityStock, 0, this.category);
            try {
                await DB.insertProduct(product);
                this.sucessMessage = true;
            } catch (err) {
                console.log(err.message);
                this.errorMessage = err.message;
            }
        }
    }
};
</script>

<style scoped>
    @import '../assets/style/product-form';
    #changes-saved{
        margin-top: 5%;
        color:green;
        font-size: x-large;
        text-align: center;
    }
    .denied {
        line-height: 100vh;
        margin: 0 auto;
        text-align: center;
        color:red;
    }
</style>
