<template>
     <div id="container">
        <div class="products">
            <h2>Products</h2>
            <div class="product-container">
                <div class="box-product">
                    <figure>
                        <img src="../assets/img/apple.jpg">
                        <figcaption><router-link to="/ProductDisplay">Apple</router-link></figcaption>
                    </figure>
                </div>
                <div class="box-product">
                    <figure>
                        <img src="../assets/img/bread.jpg">
                        <figcaption><router-link to="/ProductDisplay">Bread</router-link></figcaption>
                    </figure>
                </div>
                <div class="box-product">
                    <figure>
                        <img src="../assets/img/tea.jpg">
                        <figcaption><router-link to="/ProductDisplay">Tea</router-link></figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListItems'
};
</script>

<style scoped>
    @import '../assets/style/list-items';
</style>
