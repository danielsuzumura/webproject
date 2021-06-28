<style scoped>
    @import '../assets/style/product-form';
</style>

<template>
    <div id="container">
        <div id="register-box">
            <form @submit.prevent.stop="sendForm" method="POST">
                <h1>PRODUCT REGISTER</h1>

                <label id="product-name"> Product name: </label><br>
                <input type="text" name="name"><br><br>

                <label id="product-image"> Image of the product: </label><br>
                <input type="file" name="file"> <br><br>

                <label id="product-price"> Price: </label><br>
                <input type="text" name="price"><br><br>

                <label id="product-amount"> Amount: </label><br>
                <input type="number" name="amount"><br><br>

                <label for="product-description"> Product description: </label><br>
                <textarea id="product-description" name="product-description" placeholder="Your kind words here"></textarea><br><br>

                <input type="submit" name="btn-submit" value="Submit">
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductForm'
};
</script>
