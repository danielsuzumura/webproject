<template>
    <div>
        <div id="container-admin" v-if="isLoaded && isAdmin">
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
                <router-link :to=redirectToAdd>
                    <i v-if="displayedKeys !== null && redirectToAdd !== ''" class="fa fa-plus" aria-hidden="true" style="font-size:46px;color:green"></i>
                </router-link>
                <table v-if="displayedKeys !== null">
                    <thead>
                        <th v-for="key in displayedKeys" :key="key">
                            {{key}}
                        </th>
                        <th></th>
                        <th></th>
                    </thead>
                    <tr v-for="item in displayed" :key="item._name">
                        <td v-for="attribute in item" :key="attribute.id">{{attribute}}</td>
                        <td><i class="fa fa-pencil-square-o" style="font-size:24px;"></i></td>
                        <td><i class="fa fa-times" style="font-size:24px;color:red"></i></td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="container-admin denied" v-else>
            <h1>Acess denied</h1>
        </div>
    </div>
</template>

<script>
import * as DB from '../dataSet/DatabaseConnector';
export default {
    name: 'Admin',
    mounted: async function () {
        if (await DB.isAdmin()) {
            this.isAdmin = true;
        }
        this.users = await DB.getUsers();
        this.products = await DB.getProducts();
        this.admins = await DB.getAdmins();
        this.sales = await DB.getSales();
        this.isLoaded = true;
    },
    data () {
        return {
            isAdmin: false,
            isLoaded: false,
            users: null,
            products: null,
            admins: null,
            sales: null,
            displayed: null,
            displayedKeys: null,
            displayedName: '',
            redirectToAdd: ''
        };
    },
    methods: {
        seeInfo (event) {
            switch (event.target.id) {
            case 'users': {
                this.displayed = this.users;
                this.redirectToAdd = '/UserForm';
                break;
            }
            case 'products': {
                this.displayed = this.products;
                this.redirectToAdd = '/ProductForm';
                break;
            }
            case 'admins': {
                this.displayed = this.admins;
                this.redirectToAdd = '/ProductForm';
                break;
            }
            case 'sales': {
                this.displayed = this.sales;
                break;
            }
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
