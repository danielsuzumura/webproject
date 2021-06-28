<template>
    <div id="container-admin">
        <div id="statistics">
            <button id="user-count" class="stat-box">
                1
                <br>
                USERS
            </button>
            <button id="product-count" class="stat-box">
                1
                <br>
                PRODUCTS
            </button>
            <button id="admin-count" class="stat-box">
                1
                <br>
                ADMINS
            </button>
            <button id="sale-count" class="stat-box">
                1
                <br>
                SALES
            </button>
        </div>
        <div id="list-display"></div>
    </div>
</template>

<script>
export default {
    name: 'Admin'
};
</script>

<style scoped>
    @import '../assets/style/admin';
</style>
