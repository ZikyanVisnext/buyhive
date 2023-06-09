<template>
    <div class="below-search-parent">
        <div class="below-search-left">
            <p>Products &nbsp; &nbsp; <span class="below-search-number-of-products">({{getProducts.total_results}} Products)</span></p>
        </div>
        <div class="below-search-middle">
            <p>Buy</p>
        </div>
        <div class="below-search-right">
            Placing bulk orders on BuyHive is safe & easy.<br>
            <strong>Click to learn how it works!</strong>
        </div>
        
    </div>
</template>

<script>
export default{
    data(){
        return{

        }
    },
    computed:{
        getProducts(){
           return this.$store.getters.getProducts
        }   
    },
    created(){
        this.$store.dispatch('fetchProducts')
    }
}

</script>

<style>
.below-search-parent{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.below-search-left p{
    font-size: 20px;
    font-weight: 500;
}
.below-search-number-of-products{
    color: #918E8F;
    font-weight: 500;
}
.below-search-middle{
    margin-right: 470px;
    color: #918E8F;
}
.below-search-right{
    background-image: url('../assets/textBackground.png');
    color: #fff;
    border-radius: 10px;
    text-align: center;
    font-size: 18px;
    width: 450px;
    padding: 10px;
}
</style>