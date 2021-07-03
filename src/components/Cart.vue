<template>
    <div id="container">
        <div id="cart-box">
            <table>
                <caption>Cart</caption>
                <colgroup>
                    <col class="item">
                    <col class="amount">
                    <col class="total">
                </colgroup>
                <thead>
                    <th></th>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Total</th>
                </thead>
                <tbody v-if="cart !== null">
                    <tr v-for="item in cart" :key="item.key">
                        <td><img :src="getImgUrl(item.product._photo)"></td>
                        <td>{{item.product._name}}</td>
                        <td>R${{item.product._price}}</td>
                        <td>{{item.amount}}</td>
                        <td>R${{calculateTotal(item.product._price, item.amount)}}</td>
                        <td @click.prevent.stop=removeProduct(item.product._name)><i class="fa fa-times" style="font-size:24px;color:red"></i></td>
                    </tr>
                </tbody>
                <tfoot v-if="cart !== null">
                    <tr>
                        <td colspan="4"></td>
                        <td colspan="1">Total: R${{total}}</td>
                    </tr>
                </tfoot>
            </table>
            <br><br>
            <button @click="goToPayment">Finish purchase</button>
            <p v-if="noItemMessage">EMPTY CART</p>
        </div>
    </div>
</template>

<script>
import {ImportImage, calculateTotalCart, calculateTotalProduct} from './shared';
import * as DB from '../dataSet/DatabaseConnector';
export default {
    name: 'Cart',
    mixins: [ImportImage, calculateTotalCart, calculateTotalProduct],
    mounted: async function () {
        this.cart = await DB.getCart();
        try {
            this.user = await DB.getSession();
        } catch (err) {
            this.user = null;
        }
    },
    data () {
        return {
            cart: null,
            user: null,
            noItemMessage: false
        };
    },
    methods: {
        goToPayment () {
            if (this.cart === null || this.cart.length < 1) {
                this.noItemMessage = true;
                return;
            } else {
                this.noItemMessage = false;
            }
            if (this.user === null) {
                this.$router.push('/Login');
            } else {
                this.$router.push('/Payment');
            }
        },
        async removeProduct (productName) {
            DB.removeProductCart(productName);
            this.cart = await DB.getCart();
        }
    }
};
</script>

<style scoped>
    @import '../assets/style/cart';
</style>
