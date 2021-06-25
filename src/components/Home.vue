<template>
    <div id="container">
            <div id="feature-category">
                <div class="slogan">
                    <div id="slogan-text">
                        <h2>Juicy Meat</h2>
                        <p>These juicy patties are melt-in-your-mouth masterpieces.
                            Made from Angus beef raised without antibiotics in the Mid-Atlantic region.<br></p>
                            <!-- <a href="product-display.html">Shop now</a> -->
                            <button>Shop now</button>
                        </div>
                </div>
                <div class="feature-img">
                    <img src="../assets/img/meat.jpg" alt="meat">
                </div>
                <button id="right-button" class="btn-change-page"><i class="fa fa-angle-right"></i></button>
                <button id="left-button" class="btn-change-page"><i class="fa fa-angle-left"></i></button>
            </div>
            <div class="break"></div>
            <div class="categories">
                <h2>Categories</h2>
                <div class="product-container">
                    <div class="box-product">
                        <figure>
                            <img src="../assets/img/candy.jpg">
                            <figcaption><a href="product-display.html">Candy</a></figcaption>
                        </figure>
                    </div>
                    <div class="box-product">
                        <figure>
                            <img src="../assets/img/apple.jpg">
                            <figcaption><a href="product-display.html">Fruits</a></figcaption>
                        </figure>
                    </div>
                    <div class="box-product">
                        <figure>
                            <img src="../assets/img/bread.jpg">
                            <figcaption><a href="product-display.html">Breakfast</a></figcaption>
                        </figure>
                    </div>
                    <div class="box-product">
                        <figure>
                            <img src="../assets/img/dairy-products.jpg">
                            <figcaption><a href="product-display.html">Dairy</a></figcaption>
                        </figure>
                    </div>
                    <div class="box-product">
                        <figure>
                            <img src="../assets/img/tea.jpg">
                            <figcaption><a href="product-display.html">Beverage</a></figcaption>
                        </figure>
                    </div>
                    <div class="box-product">
                        <figure>
                            <img src="../assets/img/apple.jpg">
                            <figcaption><a href="product-display.html">Snacks</a></figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'Home',
    data () {
        return {

        };
    }
};
</script>

<style>
    @import '../assets/style/home';
</style>
