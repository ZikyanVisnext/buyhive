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
            <button class="header-right-button">Sign in</button>
        </div>
        <button>cart</button>
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
    width: 300px;
    /* background-color: crimson; */
}
.header-right-button{
    width: 100px;
    height: 40px;
    border-radius: 50px;
    color: rgb(95, 170, 170);
    font-size: 16px;
    background-color: rgba(240, 248, 255, 0);
    border: 1px solid rgb(95, 170, 170);
}
.header-right-first-two-buttons{
    /* background-color: crimson; */
    width: 220px;
    display: flex;
    justify-content: space-around;
}

</style>