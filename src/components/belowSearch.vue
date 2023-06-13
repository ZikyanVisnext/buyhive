<template>
    <div class="below-search-parent">
        <div class="below-search-left">
            <p v-show="productText">Products &nbsp; &nbsp;</p>
            <div v-for="(item, index) in lastFiveItems" :key="index">
                <p>{{ item.category_name }} &nbsp; &nbsp;</p>
                <!-- <p>{{ index }}&nbsp; &nbsp;</p> -->
            </div>
            <!-- <p>Products</p> -->
            <div class="below-search-number-of-products">
                ({{getProducts.total_results}} Products)
            </div>
        </div>
        <div class="below-search-middle">
            <div class="zik-test">
                Buy
            <div v-for="(item, index) in getFilters.category_breadcrumbs" :key=index >
            <p>&nbsp;/ {{ item.category_name }}</p>
        </div>
            
            
        </div>
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
            productText:true
        }
    },
    computed:{
        getProducts(){
           return this.$store.getters.getProducts
        },
        getFilters(){
            return this.$store.getters.getFilters
        },
        lastFiveItems(){
            if (this.getFilters.category_breadcrumbs?.length == 0) {
                this.productText=true
            } else {
                this.productText=false
                return this.getFilters.category_breadcrumbs?.slice(-1).reverse()
            }
            
        }
    },
    created(){
        this.$store.dispatch('fetchProducts')
        this.$store.dispatch('fetchFilters')
        // console.log(this.getProducts)
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
.below-search-left{
    text-align: justify;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    font-size: 20px;
    font-weight: 500;
    width: 290px;
    /* background-color: crimson;     */
}
.below-search-number-of-products{
    color: #918E8F;
    font-weight: 500;
}
.below-search-middle{
    display: flex;
    position: absolute;
    /* background-color: crimson; */
    align-items: center;
    justify-content: center;
    margin-left: 310px;
    color: #918E8F;
    
}
.zik-test{
    display: flex;
    align-items: center;
    justify-content: center;
}
.below-search-right{
    background-image: url('../assets/textBackground.png');
    color: #fff;
    border-radius: 10px;
    text-align: center;
    font-size: 18px;
    background-size: cover;
    /* width: 25vw;
    padding: 10px; */
    width: 450px;
    padding: 10px;
}
</style>