<template>
    <div class="right-component-parent">
        <div class="right-parent-upper">

            <!-- Change product layout buttons -->

            <div class="right-parent-upper-left">
                <!-- <button>btn1</button> -->
                <i class="fa fa-navicon product-box-view"></i>
                <i class="fa fa-window-restore	product-list-view"></i>
                <!-- <button class="right-parent-upper-left-button-2">btn2</button> -->
            </div>
            <div class="right-parent-upper-right">

                <!-- Relevance filter + next page pf products arrow buttons -->

                <div>
                    <select @change="relevanceFilter($event)" class="right-upper-right-product-input-relevance">
                        <option value="relevance">Relevance</option>
                        <option value="latest">Latest</option>
                        <option value="lowtohigh">Price Low to High</option>
                        <option value="hightolow">Price High to Low</option>
                        <option value="moqLowToHigh">MOQ Low to High</option>
                        <option value="ratingsHighToLow">Ratings High to Low</option>
                    </select>
                </div>
                <i class="fa fa-toggle-left right-product-left-button"></i>
                <input class="right-upper-right-product-input" type="text" value="1" readonly>
                <p>of 22</p>
                <i class="fa fa-toggle-right right-product-left-button" v-on:click="nextPage"></i>
            </div>
        </div>

        <!-- Products display section -->

        <div class="right-parent-lower">
            <div class="right-product-display" v-for="item in getProducts.products">
                <div  class="single-product-container">
                    <img class="product-image" v-bind:src=item.images[0].url alt="">
                    <div class="product-info-text">
                        <!-- <p>Rolhei 75% Ethanol Wet Wipe - 100 co...</p> -->
                        <P>{{ item.product_name }}</P>
                        <p class="product-moq-price-text">MOQ: {{item.display_moq}}</p>
                        <p class="product-price-text">{{item.price}}</p>
                    </div>
                </div>
            </div>

        <!-- Next page pf products arrow buttons -->
                  
        </div>
        <div class="product-lower-next-button-container">
            <div class="product-lower-next-button">
                <i class="fa fa-toggle-left right-product-left-button"></i>
                <input class="right-upper-right-product-input" type="text" value="1" readonly>
                <p>of 22</p>
                <i class="fa fa-toggle-right right-product-left-button"></i>
            </div>
        </div>

        <!-- <button v-on:click="zikTest">Here</button> -->
        <!-- <div>
            <p>here</p>
            <ul>
                <li v-for="item in getProducts">{{ item }}</li>
            </ul>
        </div> -->
    </div>
</template>

<script>

export default{
    data(){
        return{
            page:1
        }
    },
    computed:{
        getProducts(){
            return this.$store.getters.getProducts
        },
        // products(){
        //     return this.$store.state.products
        // },
        },
    created(){
        this.$store.dispatch('fetchProducts');
    },
    methods:{
        relevanceFilter(event){
            if(event.target.value=='relevance'){
                this.$store.dispatch('relevance');
                return this.$store.getters.relevance
            }
            else if(event.target.value=='latest'){
                this.$store.dispatch('latest');
                return this.$store.getters.latest
            }
            else if(event.target.value=='lowtohigh'){
                this.$store.dispatch('lowToHigh');
                return this.$store.getters.lowToHigh
            }
            else if(event.target.value=='hightolow'){
                this.$store.dispatch('highToLow');
                return this.$store.getters.highToLow
            }
            else if(event.target.value=='moqLowToHigh'){
                this.$store.dispatch('MOQlowToHigh');
                return this.$store.getters.MOQlowToHigh
            }
            else if(event.target.value=='ratingsHighToLow'){
                this.$store.dispatch('ratingsHighToLow');
                return this.$store.getters.ratingsHighToLow
            }
        },
        zikTest(){
            console.log(this.$store.state.products.total_results)
        },
        nextPage(){
            this.$store.dispatch('nextPage', ++this.page);
            return this.$store.getters.nextPage
        }
    }
}
</script>

<style>
.right-parent-lower{
    /* background-color: crimson; */
    display: flex;
    flex-wrap: wrap;
}
.right-product-left-button{
    font-size: 24px;
    background-color: #F2F2F2;
    padding: 10px;
    border-radius: 50px;
    color: #6e6c6c;
    cursor: pointer;
}
.product-box-view{
    font-size: 24px;
    cursor: pointer;
}
.product-list-view{
    font-size: 24px;
    cursor: pointer;
    margin-left: 20px;
    color: #918E8F;
}
.right-component-parent{
    margin: 20px 0 20px 20px;
    width: 100%;
}
.right-parent-upper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: crimson; */
    /* height: 64px; */
}
.right-parent-upper-left-button-2{
    margin-left: 20px;
}
.right-parent-upper-right{
    width: 470px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.right-upper-right-product-input{
    width: 50px;
    border-radius: 50px;
    background-color: #F2F2F2;
    padding: 10px 8px;
    border: 1px solid #c8c5c5;
    text-align: center;
}
.right-parent-upper-right button{
    padding: 10px;
    border-radius: 50px;
    background-color: #F2F2F2;
    border: none;
}
.right-upper-right-product-input-relevance{
    border-radius: 50px;
    background-color: #F2F2F2;
    padding: 10px 8px;
    border: 1px solid #c8c5c5;
}
.right-product-display{
    /* display: flex;
    flex-wrap: wrap; */
    /* background-color: crimson; */
    justify-content: space-between;
    /* align-items: center; */
    margin-top: 20px;
    /* padding: 20px; */
}
.product-image{
    width: 280px;
    /* max-height: 250px; */
    height: 250px;
    padding: 0px 20px;
    object-fit: contain;
}
.product-moq-price-text{
    color: #918E8F;
    font-size: 14px;
}
.product-price-text{
    font-weight: bold;
}
.single-product-container{
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    width: 355px;
    margin-bottom: 50px;
    border-radius: 8px;
    height: 400px;
}
.single-product-container:hover{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.single-product-container p{
    line-height: 0.7em;
}
.product-info-text{
    padding: 0 20px;
}
.product-lower-next-button{
    display: flex;
    /* background-color: crimson; */
    justify-content: right;
    align-items: center;
}
.product-lower-next-button{
    width: 250px;
    display: flex;
    justify-content: space-between;
    
}
.product-lower-next-button button{
    padding: 10px;
    border-radius: 50px;
    background-color: #F2F2F2;
    border: none;
}
.product-lower-next-button-container{
    display: flex;
    justify-content: right;
    align-items: center;
}
</style>