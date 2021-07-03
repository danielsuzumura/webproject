<template>
    <div id="rating">
        <i v-for="(star,index) in Number(ratingValue)" :key="'startFill'+index" class="rating-star fa fa-star"></i>
        <i v-for="(star,index)  in Number(5-ratingValue)" :key="'start'+index" class="rating-star fa fa-star-o"></i>
    </div>
</template>

<script>
export default {
    name: 'Rating',
    props: ['ratingValue']
};
</script>

<style>
    .rating-star{
        color: yellow;
        font-size: 24px;
    }
    #rating{
        display: inline-flex;
    }
</style>
