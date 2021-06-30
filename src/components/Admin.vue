<template>
    <div id="container-admin" v-if="isLoaded">
        <div id="statistics">
            <button id="users" class="stat-box" @click=seeInfo($event)>
                {{users.length}}
                <br>
                USERS
            </button>
            <button id="products" class="stat-box" @click=seeInfo($event)>
                {{products.length}}
                <br>
                PRODUCTS
            </button>
            <button id="admins" class="stat-box" @click=seeInfo($event)>
                {{admins.length}}
                <br>
                ADMINS
            </button>
            <button id="sales" class="stat-box" @click=seeInfo($event)>
                {{sales.length}}
                <br>
                SALES
            </button>
        </div>
        <div id="list-display" v-if="displayed !== null">
            <h2>{{displayedName}}</h2>
            <i v-if="displayedKeys !== null" class="fa fa-plus" aria-hidden="true" style="font-size:46px;color:green"></i>
            <table v-if="displayedKeys !== null">
                <thead>
                    <th v-for="key in displayedKeys" :key="key">
                        {{key}}
                    </th>
                    <th></th>
                    <th></th>
                </thead>
                <tr v-for="item in displayed" :key="item._id">
                    <td v-for="attribute in item" :key="attribute.id">{{attribute}}</td>
                    <td><i class="fa fa-pencil-square-o" style="font-size:24px;"></i></td>
                    <td><i class="fa fa-times" style="font-size:24px;color:red"></i></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import * as DB from '../dataSet/DatabaseConnector';
export default {
    name: 'Admin',
    mounted: async function () {
        this.users = await DB.getUsers();
        this.products = await DB.getProducts();
        this.admins = await DB.getAdmins();
        this.sales = await DB.getSales();
        this.isLoaded = true;
    },
    data () {
        return {
            isLoaded: false,
            users: null,
            products: null,
            admins: null,
            sales: null,
            displayed: null,
            displayedKeys: null,
            displayedName: ''
        };
    },
    methods: {
        seeInfo (event) {
            switch (event.target.id) {
            case 'users': this.displayed = this.users; break;
            case 'products': this.displayed = this.products; break;
            case 'admins': this.displayed = this.admins; break;
            case 'sales': this.displayed = this.sales; break;
            }
            if (this.displayed.length !== 0) {
                this.displayedKeys = Object.keys(this.displayed[0]);
            } else {
                this.displayedKeys = null;
            }
            this.displayedName = event.target.id.toUpperCase();
        }
    }
};
</script>

<style scoped>
    @import '../assets/style/admin';
</style>
