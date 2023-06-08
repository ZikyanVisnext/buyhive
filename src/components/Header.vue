<template>
    <div class="header-parent">
        <div class="header-left">
            <img src="../assets/buyHiveLogo.png" alt="buy-hive-logo" width="150px" height="auto">
            <ul class="header-menus-ul">
                <li v-for="menu in menus">{{ menu }}</li>
            </ul>
        </div>
    <div class="header-right">
        <div class="header-right-first-two-buttons">
            <button class="header-right-button">Register</button>
            <button class="header-right-button-signin">Sign in</button>
        </div>
        <!-- <button>cart</button> -->
        <i class="fa fa-shopping-basket header-cart-icon"> </i>
        <span class="cart-icon-circle">0</span>
        <!-- <i class="icon-cart text-green text-2.5xl"></i> -->
    </div>
    </div>
</template>

<script>

export default{
    data(){
        return{
            menus:['Expert Sourcing', 'Contract Manufacturing', 'Buy', 'Financing', 'About Us']
        }
    }
}

</script>

<style>
.cart-icon-circle{
    font-size: 18px;
    color: #fff;
    background-color: #000;
    padding: 0px 5px;
    border-radius: 50px;
    margin-left: -25px;
    margin-top: 25px;
}
.header-cart-icon{
    font-size: 24px;
    color: #66BA86;
    cursor: pointer;
}
.header-parent{
    /* background-color: crimson; */
    display: flex;
    justify-content: space-between;
}
.header-left{
    display: flex;
    justify-content: space-around;
}
.header-menus-ul{
    display: flex;
    list-style-type: none;
    /* font-size: 20px; */
    justify-content: space-between;
    width: 700px;
}
.header-menus-ul li{
    font-size: 18px;
}
.header-right{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 270px;
    /* background-color: crimson; */
}
.header-right-button{
    width: 100px;
    height: 40px;
    border-radius: 50px;
    color: #57C2D8;
    font-size: 16px;
    background-color: #fff;
    border: 1px solid #57C2D8;
    cursor: pointer;
}
.header-right-button-signin{
    width: 100px;
    height: 40px;
    border-radius: 50px;
    color: #66BA86;
    font-size: 16px;
    background-color: #fff;
    border: 1px solid #66BA86;
    cursor: pointer;
}
.header-right-first-two-buttons{
    /* background-color: crimson; */
    width: 220px;
    display: flex;
    justify-content: space-around;
}

</style>