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
                    <li><router-link to="/Login">LOGIN</router-link></li>
                    <li><router-link to="/Register">REGISTER</router-link></li>
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
                <!--
                <a href="#" class="bar-header-button">
                    <router-link to="/AboutUs">ABOUT US</router-link>
                </a>
                -->
                <router-link class="bar-header-button" to="/AboutUs">ABOUT US</router-link>
                <router-link class="bar-header-button" to="/Contact"> CONTACT </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
};
</script>

<style>
    @import '../assets/style/style';
</style>
