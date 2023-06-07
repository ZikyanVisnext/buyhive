<template>
    <div class="below-search-parent">
        <div class="below-search-left">
            <p>Products &nbsp; &nbsp; <span class="below-search-number-of-products">(524 Products)</span></p>
        </div>
        <div class="below-search-middle">
            <p>Buy</p>
        </div>
        <div class="below-search-right">
            <p>Placing bulk orders on BuyHive is safe & easy.</p>
            <p class="below-search-learn-text">Click to learn how it works!</p>
        </div>
        
    </div>
</template>

<script>
export default{
    data(){
        return{

        }
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
    font-weight: bold;
}
.below-search-number-of-products{
    color: #C1C0C0;
    font-weight: 500;
}
.below-search-middle{
    margin-right: 500px;
}
.below-search-right{
    background-color: #39A0C3;
    color: #fff;
    border-radius: 10px;
    text-align: center;
    font-size: 18px;
    width: 450px;
    
}
.below-search-learn-text{
    font-weight: bold;
}
</style>