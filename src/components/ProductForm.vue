<template>
    <div>
        <div id="container" v-if="isAdmin === true">
            <div id="register-box">
                <form @submit.prevent.stop="sendForm" method="POST">
                    <h1>PRODUCT REGISTER</h1>

                    <label id="product-name"> Product name: </label><br>
                    <input type="text" name="name" v-model="name"><br><br>

                    <label id="product-image"> Image of the product: </label><br>
                    <input type="file" name="file" @change='getBaseUrl()'> <br><br>

                    <label id="product-price"> Price: </label><br>
                    <input type="text" name="price" v-model="price"><br><br>

                    <label id="product-amount"> Stock: </label><br>
                    <input type="number" name="amount" min=0 v-model.number="stock"><br><br>

                    <label id="product-category"> Category: </label><br>
                    <input type="text" name="category" v-model="category"><br><br>

                    <label for="product-description"> Product description: </label><br>
                    <textarea id="product-description" name="product-description" v-model="description"></textarea><br><br>

                    <input type="submit" name="btn-submit" value="Submit">
                </form>
                <p id="changes-saved" v-show="sucessMessage === true">{{sucessMessageContent}}</p>
            </div>
        </div>
        <div class="denied" v-else>
            <h1>Access denied</h1>
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
        let size = (await DB.getProducts()).length;
        this.code = size;
        if (this.productIdQuery !== undefined) {
            let product = await DB.getProduct(this.productIdQuery);
            this.name = product.name;
            this.photo = product.photo;
            this.description = product.description;
            this.price = product.price;
            this.stock = product.quantityStock;
            this.sold = product.quantitySold;
            this.category = product.category;
            this.code = product.code;
            this.sucessMessageContent = 'Product updated';
        } else {
            this.sucessMessageContent = 'Product created';
        }
    },
    data () {
        return {
            isAdmin: false,
            name: '',
            photo: '',
            price: '',
            stock: '',
            sold: 0,
            category: '',
            description: '',
            code: 0,
            sucessMessage: false,
            sucessMessageContent: '',
            productIdQuery: this.$route.query.query
        };
    },
    methods: {
        getBaseUrl () {
            var file = document.querySelector('input[type=file]')['files'][0];
            var reader = new FileReader();
            var baseString;
            reader.onloadend = () => {
                baseString = reader.result;
                this.photo = baseString;
            };
            reader.readAsDataURL(file);
        },
        async sendForm () {
            console.log(this.photo);
            let product = new Product(this.code, this.name, this.photo, this.description, this.price, this.stock, this.sold, this.category);
            console.log(product);
            try {
                if (this.productIdQuery) {
                    await DB.updateProduct(product);
                } else {
                    await DB.insertProduct(product);
                }
                this.sucessMessage = true;
            } catch (err) {
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
