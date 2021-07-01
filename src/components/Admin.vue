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
            <div class="list-display" v-if="displayed !== null && displayed !== sales">
                <h2>{{displayedName}}</h2>
                <router-link :to=redirectToAdd>
                    <i v-if="displayedKeys !== null && redirectToAdd !== ''" class="fa fa-plus" aria-hidden="true" style="font-size:46px;color:green"></i>
                </router-link>
                <table v-if="displayedKeys !== null">
                    <thead>
                        <th v-for="key in displayedKeys" :key="key">
                            {{key}}
                        </th>
                        <th v-if="displayed === users">Admin</th>
                        <th v-else></th>
                        <th v-if="displayed !== admins"></th>
                    </thead>
                    <tr v-for="item in displayed" :key="item._name">
                        <td v-for="attribute in item" :key="attribute.id">{{attribute}}</td>
                        <td v-if="displayed === users && getIsAdmin(item)" @click=removeAdmin(item)><i class="fa fa-unlock" style="font-size:24px;"></i></td>
                        <td v-else-if="displayed === users" @click=makeAdmin(item)><i class="fa fa-lock" style="font-size:24px;"></i></td>
                        <td @click=editProduct(item) v-if="displayed === products"><i class="fa fa-pencil-square-o" style="font-size:24px;"></i></td>
                        <td @click=remove(item)><i class="fa fa-times" style="font-size:24px;color:red"></i></td>
                    </tr>
                </table>
            </div>
            <div class="list-display" v-else-if="displayed === sales">
                <h2>Sales</h2>
                <div id="history-display" v-if="sales !== null">
                    <div v-for="sale in sales" :key="sale.price">
                        <p><b>User</b>: {{sale._user._email}}</p>
                        <p><b>Data</b>: {{sale._date}}, {{sale._time}}</p>
                        <p><b>Price:</b> R${{sale._price}}</p>
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
                                <tr v-for="item in sale._cart" :key="item.product._name">
                                    <td>{{item.product._name}}</td>
                                    <td>{{item.product._price}}</td>
                                    <td>{{item.amount}}</td>
                                    <td>{{calculateTotal(item.product._price, item.amount)}}</td>
                                </tr>
                            </tbody>
                        </table>
                        <hr>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-admin denied" v-else>
            <h1>Acess denied</h1>
        </div>
    </div>
</template>

<script>
import * as DB from '../dataSet/DatabaseConnector';
import {calculateTotalProduct} from './shared';
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
    mixins: [calculateTotalProduct],
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
        },
        async remove (item) {
            if (this.displayed === this.users) {
                await DB.deleteUser(item._email);
                this.users = await DB.getUsers();
                this.displayed = this.users;
            } else if (this.displayed === this.products) {
                await DB.deleteProduct(item._id);
                this.products = await DB.getProducts();
                this.displayed = this.products;
            } else {
                await DB.deleteAdmin(item._email);
                this.admins = await DB.getAdmins();
                this.displayed = this.admins;
            }
        },
        editProduct (product) {
            this.$router.push('/ProductForm?query=' + product._id);
        },
        getIsAdmin (user) {
            if (DB.isAdminEmail(user._email)) {
                return true;
            } else {
                return false;
            }
        },
        async makeAdmin (item) {
            await DB.insertAdmin(item);
            this.admins = await DB.getAdmins();
        },
        async removeAdmin (item) {
            await DB.deleteAdmin(item._email);
            this.admins = await DB.getAdmins();
        }
    }
};
</script>

<style scoped>
    @import '../assets/style/admin';
</style>
