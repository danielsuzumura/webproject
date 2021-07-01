<template>
    <div id="container-history">
        <div id="history-box" v-if="user !== null">
            <div id="history-sidebar">
                <router-link class="page-select" to="/User">User information</router-link>
                <a class="page-select active">Purchase history</a>
                <a class="page-select" @click="logout">Logout</a>
            </div>
            <div id="history-display" >
                <div id="messageNoPurchase" v-if="noPurchaseError === true || purchases !== null">
                    <p>No purchases made!</p>
                </div>
                <div v-else>
                    <div v-for="purchase in purchases" :key="purchase.price">
                        <h2>Data: {{purchase._date}}, {{purchase._time}}</h2>
                        <h2>{{purchase._price}}</h2>
                        <table>
                            <colgroup>
                                <col class="item">
                                <col class="amount">
                                <col class="total">
                            </colgroup>
                            <thead>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Amount</th>
                                <th>Total</th>
                            </thead>
                            <tbody>
                                <tr v-for="item in purchase._cart" :key="item.product._name">
                                    <td>{{item.product._name}}</td>
                                    <td>{{item.product._price}}</td>
                                    <td>{{item.amount}}</td>
                                    <td>{{calculateTotal(item.product._price, item.amount)}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as DB from '../dataSet/DatabaseConnector';
import {calculateTotalProduct} from './shared';
export default {
    name: 'History',
    mixins: [calculateTotalProduct],
    mounted: async function () {
        try {
            this.user = await DB.getSession();
            this.purchases = await DB.getPurchases(this.user._email);
            if (this.purchases.length === 0) {
                throw Error('No purchases made');
            }
        } catch (err) {
            if (err.message === 'No purchases made') {
                this.noPurchaseError = true;
            } else {
                this.$router.push('/Login');
            }
        }
    },
    data () {
        return {
            user: null,
            purchases: null,
            noPurchaseError: false
        };
    },
    methods: {
        async logout () {
            await DB.logout();
            this.$root.$emit('login');
            this.$router.push('/');
        }
    }
};
</script>

<style scoped>
    @import '../assets/style/history';
</style>
