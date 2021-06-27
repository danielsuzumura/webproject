<template>
    <div id="container">
        <div id="product-entry">
            <div id="product-image-div" class="box">
                <img id="product-image" src="../assets/img/apple.jpg" alt="Four red apples, one of them cutted in half">
            </div><br>
            <div id="product-entry-description" class="box">
                <h1 id="entry-title">APPLE</h1>
                <p id="review-average">
                    <img src="../../icons/three-stars.png" alt="three stars icon" id="img-review-average">
                    2 reviews
                </p>
            </div>
            <div id="product-price" class="box">
                <p id="price">R$19.99</p>
                <p id="sold">SOLD: 301</p>
                <p id="amount">AMOUNT:<br>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>ALL</option>
                    </select>
                </p>
                <a href="login.html"><button id="button-addCart"> ADD TO CART </button></a>
            </div>

        </div>

        <div id="product-description">
            <h1>Apple</h1>
            <h2>Description:</h2>
            <p id="description">
                The bright red coloured and heart shaped
                Red Delicious apples are crunchy, juicy and slightly sweet.
                Red Delicious Apples are a natural source of fibre and are fat free.
                They contain a wide variety of anti-oxidants and polynutrients.</p>
        </div>

        <div id="product-review" >
            <h2>Rating and Reviews:</h2>
            <div class="review">
                <p class="review name">
                    <img src="../../icons/five-stars.png" alt="five stars icon" class="img-review" >
                    Carlos Silva Santos
                    </p>
                <p>Delicious Apples.</p>
            </div> <br>
            <div class="review">
                <p class="review name">
                    <img src="../../icons/one-stars.png" alt="one star icon" class="img-review" >
                    Seijougahara, Hitagi
                </p>
                <p>Bad.<br>
                    Not mature and tastes horrible.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductDisplay'
};
</script>

<style>
    @import '../assets/style/product';
</style>
