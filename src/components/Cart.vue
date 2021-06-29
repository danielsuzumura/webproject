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
                        <td>R${{calculateValue(item.product._price, item.amount)}}</td>
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
        </div>
    </div>
</template>

<script>
import {ImportImage} from './shared';
import * as DB from '../dataSet/DatabaseConnector';
export default {
    name: 'Cart',
    mixins: [ImportImage],
    mounted: async function () {
        this.cart = await DB.getCart();
    },
    computed: {
        total () {
            let total = 0;
            this.cart.forEach(item => {
                total += item.product._price.replace(',', '.') * item.amount;
            });
            return total.toFixed(2);
        }
    },
    data () {
        return {
            cart: null
        };
    },
    methods: {
        goToPayment () {

        },
        calculateValue (price, amount) {
            return (price.replace(',', '.') * amount).toFixed(2);
        }
    }
};
</script>

<style scoped>
    @import '../assets/style/cart';
</style>
