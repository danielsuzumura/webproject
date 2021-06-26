<template>
    <div id="header">
        <div id="main-header">
            <ul class="list-inline">
                <li id="header-search">
                    <i class="fa fa-search"></i>
                    <input type="text" id="search-text" placeholder="search..">
                </li>
                <li id="header-name">SUPERMARKET</li>
                <ul id="header-account">
                    <li v-if="isLogged"><router-link to="/User">USER</router-link></li>
                    <li v-else><router-link to="/Login">LOGIN</router-link></li>
                    <li v-if="isLogged"><router-link to="/Cart"><i class="fa fa-shopping-cart"></i>CART</router-link></li>
                    <li v-else><router-link to="/Register">REGISTER</router-link></li>
                </ul>
            </ul>
        </div>
        <div id="bar-header">
            <div class="bar-header-base"></div>
            <ul class="list-inline">
                <router-link class="bar-header-button" to="/">HOME</router-link>
                <div class="list-dropdown">
                    <a class="bar-header-button">PRODUCTS</a>
                    <div class="dropdown-elem">
                        <a class="bar-header-button-selected cursor-default">PRODUCTS</a>
                        <router-link class="bar-header-button" to="/ListItems">Candy</router-link>
                        <router-link class="bar-header-button" to="/ListItems">Fruits</router-link>
                        <router-link class="bar-header-button" to="/ListItems">Breakfast</router-link>
                        <router-link class="bar-header-button" to="/ListItems">Dairy</router-link>
                        <router-link class="bar-header-button" to="/ListItems">Beverage</router-link>
                        <router-link class="bar-header-button" to="/ListItems">Snacks</router-link>
                    </div>
                </div>
                <a href="#" class="bar-header-button">ABOUT US</a>
                <a href="#" class="bar-header-button">CONTACT</a>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data () {
        return {
            isLogged: false
        };
    },
    mounted: function () {
        this.$root.$on('login', () => {
            if (window.localStorage.getItem('currentUser') !== '') {
                this.isLogged = true;
            } else {
                this.isLogged = false;
            }
        });
    }
};
</script>

<style>
    @import '../assets/style/style';
</style>
