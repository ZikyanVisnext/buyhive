<template>
  <div class="header-parent">
    <div class="header-left">
      <img
        src="../assets/buyHiveLogo.png"
        alt="buy-hive-logo"
        width="150px"
        height="auto"
      />
      <ul class="header-menus-ul">
        <li v-for="menu in menus">{{ menu }}</li>
      </ul>
    </div>
    <div class="header-right">
      <div class="header-right-first-two-buttons">
        <button class="header-right-button">Register</button>
        <button class="header-right-button-signin">Sign in</button>
      </div>
      <i class="fa fa-shopping-basket header-cart-icon"> </i>
      <span class="cart-icon-circle">0</span>
    </div>
    <div class="header-right-responsive">
      <p>Sign in</p>
      <i class="fa fa-shopping-basket header-cart-icon"> </i>
      <i @click="toggleMobileMenu" class="fa fa-reorder hamburger-menu" style="font-size: 24px"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        "Expert Sourcing",
        "Contract Manufacturing",
        "Buy",
        "Financing",
        "About Us",
      ],
      isMobileMenuOpen: false
    };
  },
  methods:{
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
  }
};
</script>

<style>
.cart-icon-circle {
  font-size: 18px;
  color: #fff;
  background-color: #000;
  padding: 0px 5px;
  border-radius: 50px;
  margin-left: -25px;
  margin-top: 25px;
}
.header-cart-icon {
  font-size: 24px;
  color: #66ba86;
  cursor: pointer;
}
.header-parent {
  display: flex;
  justify-content: space-between;
  width: auto;
}
.header-left {
  display: flex;
  justify-content: space-around;
}
.header-menus-ul {
  display: flex;
  list-style-type: none;
  justify-content: space-between;
}
.header-menus-ul li {
  font-size: 18px;
  margin: 0 10px;
}
.header-right {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-right-button {
  width: 100px;
  height: 40px;
  border-radius: 50px;
  color: #57c2d8;
  font-size: 16px;
  background-color: #fff;
  border: 1px solid #57c2d8;
  cursor: pointer;
}
.header-right-button-signin {
  width: 100px;
  height: 40px;
  border-radius: 50px;
  color: #66ba86;
  font-size: 16px;
  background-color: #fff;
  border: 1px solid #66ba86;
  cursor: pointer;
  margin: 0 20px;
}
.header-right-first-two-buttons {
  width: 220px;
  display: flex;
  justify-content: space-around;
}
.header-right-responsive {
  display: none;
}
@media only screen and (max-width: 1100px) {
  .header-menus-ul {
    display: none;
  }
  .header-right-responsive {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 35vw;
  }
  .header-right {
    display: none;
  }
}
</style>
