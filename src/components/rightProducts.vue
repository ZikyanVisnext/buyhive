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
                    <select class="right-upper-right-product-input-relevance">
                        <option>Relevance</option>
                        <option>Latest</option>
                        <option>Price Low to High</option>
                        <option>Price High to Low</option>
                        <option>MOQ Low to High</option>
                        <option>Ratings High to Low</option>
                    </select>
                </div>
                <i class="fa fa-toggle-left right-product-left-button"></i>
                <input class="right-upper-right-product-input" type="text" value="1" readonly>
                <p>of 22</p>
                <i class="fa fa-toggle-right right-product-left-button"></i>
            </div>
        </div>

        <!-- Products display section -->

        <div class="right-parent-lower">
            <div class="right-product-display">
                <div  class="single-product-container">
                    <img class="product-image" src="../assets/product1.png" alt="">
                    <div class="product-info-text">
                        <p>Rolhei 75% Ethanol Wet Wipe - 100 co...</p>
                        <p class="product-moq-price-text">MOQ: 1,512 Pieces</p>
                        <p class="product-price-text">$ 1.40 / Piece</p>
                    </div>
                </div>

                <div  class="single-product-container">
                    <img class="product-image" src="../assets/product2.jpg" alt="">
                    <div class="product-info-text">
                        <p>Rolhei 75% Ethanol Wet Wipe - 100 co...</p>
                        <p class="product-moq-price-text">MOQ: 1,512 Pieces</p>
                        <p class="product-price-text">$ 1.40 / Piece</p>
                    </div>
                </div>

                <div  class="single-product-container">
                    <img class="product-image" src="../assets/product3.png" alt="">
                    <div class="product-info-text">
                        <p>Rolhei 75% Ethanol Wet Wipe - 100 co...</p>
                        <p class="product-moq-price-text">MOQ: 1,512 Pieces</p>
                        <p class="product-price-text">$ 1.40 / Piece</p>
                    </div>
                </div>

                <div  class="single-product-container">
                    <img class="product-image" src="../assets/product4.jpg" alt="">
                    <div class="product-info-text">
                        <p>Rolhei 75% Ethanol Wet Wipe - 100 co...</p>
                        <p class="product-moq-price-text">MOQ: 1,512 Pieces</p>
                        <p class="product-price-text">$ 1.40 / Piece</p>
                    </div>
                </div>

                <div  class="single-product-container">
                    <img class="product-image" src="../assets/product4.jpg" alt="">
                    <div class="product-info-text">
                        <p>Rolhei 75% Ethanol Wet Wipe - 100 co...</p>
                        <p class="product-moq-price-text">MOQ: 1,512 Pieces</p>
                        <p class="product-price-text">$ 1.40 / Piece</p>
                    </div>
                </div>

                <div  class="single-product-container">
                    <img class="product-image" src="../assets/product4.jpg" alt="">
                    <div class="product-info-text">
                        <p>Rolhei 75% Ethanol Wet Wipe - 100 co...</p>
                        <p class="product-moq-price-text">MOQ: 1,512 Pieces</p>
                        <p class="product-price-text">$ 1.40 / Piece</p>
                    </div>
                </div>
            </div>

          

        <!-- Next page pf products arrow buttons -->
            <div class="product-lower-next-button-container">
                <div class="product-lower-next-button">
                    <i class="fa fa-toggle-left right-product-left-button"></i>
                    <input class="right-upper-right-product-input" type="text" value="1" readonly>
                    <p>of 22</p>
                    <i class="fa fa-toggle-right right-product-left-button"></i>
                </div>
            </div>        
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
    display: flex;
    flex-wrap: wrap;
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