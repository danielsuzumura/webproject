<template>
    <div id="container-history">
        <div id="history-box" v-if="user !== null">
            <div id="history-sidebar">
                <router-link class="page-select" to="/User">User information</router-link>
                <a class="page-select active">Purchase history</a>
                <a class="page-select">Logout</a>
            </div>
            <div id="history-display">
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
                        <th>Date</th>
                        <th>Time</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                            <td>a</td>
                        </tr>
                        <tr>
                            <td>b</td>
                            <td>b</td>
                            <td>b</td>
                            <td>b</td>
                            <td>b</td>
                            <td>b</td>
                        </tr>
                    </tbody>
                </table>
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
            await this.getUser();
        } catch (err) {
            this.$router.push('/Login');
        }
    },
    data () {
        return {
            user: null
        };
    },
    methods: {
        async getUser () {
            this.user = await DB.getSession();
            this.old_email = this.user._email;
        }
    }
};
</script>

<style scoped>
    @import '../assets/style/history';
</style>
