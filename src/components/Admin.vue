<template>
    <div id="container-admin">
        <div class="loading" v-if="!isLoaded"></div>
        <div v-if="isLoaded && isAdmin">
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
            <button id="messages" class="stat-box" @click=seeInfo($event)>
                <!--{{messages.length}}-->
                <br>
                MESSAGES
            </button>
            <div class="list-display" v-if="displayed !== null && displayed !== sales">
                <h2>{{displayedName}}</h2>
                <router-link :to=redirectToAdd>
                    <i v-if="displayedKeys !== null && redirectToAdd !== '' && displayed !== messages && displayed !== admins" class="fa fa-plus" aria-hidden="true" style="font-size:46px;color:green"></i>
                </router-link>
                <table v-if="displayedKeys !== null">
                    <thead>
                        <th v-for="key in displayedKeys" :key="key">
                            {{key}}
                        </th>
                        <th v-if="displayed === users">Admin</th>
                        <th v-else-if="displayed !== messages"></th>
                        <th v-if="displayed !== admins && displayed !== messages"></th>
                    </thead>
                    <tr v-for="item in displayed" :key="item._id">
                        <td v-for="(attribute,index) in item" :key="attribute._id">{{trimAttribute(attribute,index)}}</td>
                        <!-- Admin icon -->
                        <td v-if="displayed === users && getIsAdmin(item)" @click=removeAdmin(item)><i class="fa fa-unlock" style="font-size:24px;"></i></td>
                        <!-- Not admin icon -->
                        <td v-else-if="displayed === users" @click=makeAdmin(item)><i class="fa fa-lock" style="font-size:24px;"></i></td>
                        <!-- Edit icon -->
                        <td @click=editProduct(item) v-if="displayed === products"><i class="fa fa-pencil-square-o" style="font-size:24px;"></i></td>
                        <!-- Remove icon -->
                        <td v-if="displayed !== messages " @click=remove(item)><i class="fa fa-times" style="font-size:24px;color:red"></i></td>
                    </tr>
                </table>
            </div>
            <div class="list-display" v-else-if="displayed === sales">
                <h2>Sales</h2>
                <div id="history-display" v-if="sales !== null">
                    <div v-for="sale in sales" :key="sale.id">
                        <p><b>Id</b>: {{sale.id}}</p>
                        <p><b>User</b>: {{sale.user}}</p>
                        <p><b>Data</b>: {{sale.date}}, {{sale.time}}</p>
                        <p><b>Price:</b> R${{setPrecision(sale.price)}}</p>
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
                                <tr v-for="item in sale.cart" :key="item.product.name">
                                    <td>{{item.product.name}}</td>
                                    <td>{{setPrecision(item.product.price)}}</td>
                                    <td>{{item.amount}}</td>
                                    <td>{{calculateTotal(item.product.price, item.amount)}}</td>
                                </tr>
                            </tbody>
                        </table>
                        <hr>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-admin denied" v-else-if="isLoaded">
            <h1>Access denied</h1>
        </div>
    </div>
</template>

<script>
import * as DB from '../dataSet/DatabaseConnector';
import {calculateTotalProduct, fixedDecimalPlaces} from './shared';
const MAXTRIM = 25;
export default {
    name: 'Admin',
    mounted: async function () {
        /**
         * Check if current user is admin (permission verification)
         */
        if (await DB.isAdmin()) {
            this.isAdmin = true;
        }
        this.users = await DB.getUsers();
        this.products = await DB.getProducts();
        this.admins = await DB.getAdmins();
        this.sales = await DB.getSales();
        this.messages = await DB.getContactUs();
        this.isLoaded = true;
    },
    mixins: [calculateTotalProduct, fixedDecimalPlaces],
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
            redirectToAdd: '',
            messages: null
        };
    },
    methods: {
        trimAttribute (attribute, index) {
            if (index === 'photo' && attribute.constructor.name === 'String' && attribute.length >= 100) {
                return attribute.substring(0, MAXTRIM) + '...';
            } else if (attribute.constructor.name === 'Number' && this.displayed === this.products && index === 'price') {
                return attribute.toFixed(2);
            } else {
                return attribute;
            }
        },
        /**
         * Display list depending on what field the admin clicked
         */
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
            case 'messages': {
                this.displayed = this.messages;
                break;
            }
            }
            /** Get key name from object */
            if (this.displayed.length !== 0) {
                this.displayedKeys = Object.keys(this.displayed[0]);
            } else {
                this.displayedKeys = null;
            }
            this.displayedName = event.target.id.toUpperCase();
        },
        /**
         * Delete item
         */
        async remove (item) {
            if (this.displayed === this.users) {
                await DB.deleteUser(item.email);

                /** Update user list */
                this.users = await DB.getUsers();
                /** Update displayed list */
                this.displayed = this.users;
            } else if (this.displayed === this.products) {
                await DB.deleteProduct(item.code);

                /** Update product list */
                this.products = await DB.getProducts();
                /** Update displayed list */
                this.displayed = this.products;
            } else {
                await DB.deleteAdmin(item.email);

                /** Update admin list */
                this.admins = await DB.getAdmins();
                /** Update displayed list */
                this.displayed = this.admins;
            }
        },
        /**
         * Redirect to product form page
         */
        editProduct (product) {
            this.$router.push('/ProductForm?query=' + product.code);
        },
        /**
         * Verify if user is admin
         */
        getIsAdmin (user) {
            /** Check if user is in admin list */
            if (this.admins.filter(admin => admin.email === user.email).length > 0) {
                return true;
            } else {
                return false;
            }
        },
        /**
         * Make user admin
         */
        async makeAdmin (item) {
            await DB.insertAdmin(item);
            /** Update admin list */
            this.admins = await DB.getAdmins();
        },
        /**
         * Remode admin from admin list
         */
        async removeAdmin (item) {
            await DB.deleteAdmin(item.email);
            /** Update admin list */
            this.admins = await DB.getAdmins();
        }
    }
};
</script>

<style scoped>
    @import '../assets/style/admin';
</style>
