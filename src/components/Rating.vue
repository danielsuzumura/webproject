<template>
    <div id="rating">
        <i class="rating-star fa fa-star"></i>
        <i class="rating-star fa fa-star"></i>
        <i class="rating-star fa fa-star"></i>
        <i class="rating-star fa fa-star"></i>
        <i class="rating-star fa fa-star"></i>
    </div>
</template>

<script>
export default {
    name: 'Rating',
    props: ['ratingValue'],
    mounted: function () {
        this.fillStar();
    },
    methods: {
        fillStar () {
            console.log(this.ratingValue);
            let star = document.querySelectorAll('.rating-star');
            const starClassFill = 'rating-star fa fa-star';
            const starClass = 'rating-star fa fa-star-o';
            for (let i = 0; i < this.ratingValue; ++i) {
                star[i].className = starClassFill;
            }
            for (let i = this.ratingValue; i < 5; ++i) {
                star[i].className = starClass;
            }
            console.log(star);
        }
    }
};
</script>

<style>
    .rating-star{
        color: yellow;
        font-size: 24px;
    }
</style>
