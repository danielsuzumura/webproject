<template>
    <div id="container-history">
        <div id="history-box" v-if="user !== null">
            <div id="history-sidebar">
                <router-link class="page-select" to="/User">User information</router-link>
                <a class="page-select active">Purchase history</a>
                <a class="page-select" @click="logout">Logout</a>
            </div>
            <div id="messageNoPurchase" v-show="noPurchaseError === true">
                <p>No purchases made</p>
            </div>
            <div id="history-display" v-if="purchases !== null">
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
</template>

<script>
import * as DB from '../dataSet/DatabaseConnector';
export default {
    name: 'History',
    mounted: async function () {
        try {
            this.user = await DB.getSession();
            this.purchases = await DB.getPurchases(this.user._email);
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
        calculateTotal (price, amount) {
            return (price.replace(',', '.') * amount).toFixed(2);
        },
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
