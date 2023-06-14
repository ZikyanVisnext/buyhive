<template>
  <div class="right-component-parent">
    <div class="right-parent-upper">
      <!-- Change product layout buttons -->

      <div class="right-parent-upper-left">
        <i
          class="fa fa-navicon product-box-view"
          :class="
            view
              ? 'change-view1-button-color-dynamic'
              : 'change-view2-button-color-dynamic'
          "
          @click="toggleView(1)"
        ></i>
        <i
          class="fa fa-window-restore product-list-view"
          :class="
            view
              ? 'change-view2-button-color-dynamic'
              : 'change-view1-button-color-dynamic'
          "
          @click="toggleView(2)"
        ></i>
      </div>
      <div class="right-parent-upper-right">
        <!-- Relevance filter + next page pf products arrow buttons -->

        <div>
          <select
            @change="sortByFilter($event)"
            class="right-upper-right-product-input-relevance"
          >
            <option value="relevance">Relevance</option>
            <option value="latest">Latest</option>
            <option value="price_low_to_high">Price Low to High</option>
            <option value="price_high_to_low">Price High to Low</option>
            <option value="MOQ_low_to_high">MOQ Low to High</option>
            <option value="ratings_high_to_low">Ratings High to Low</option>
          </select>
        </div>
        <i
          class="fa fa-toggle-left right-product-left-button"
          @click="pageFunction(-1)"
        ></i>

        <input
          class="right-upper-right-product-input"
          type="text"
          :value="$store.state.filterOptions.page"
          readonly
        />
        <p>of &nbsp; {{ Math.ceil(getProducts.total_results / 24) }}</p>
        <i
          class="fa fa-toggle-right right-product-left-button"
          v-on:click="pageFunction(1)"
        ></i>
      </div>
    </div>

    <!-- Products display section -->

    <div class="right-parent-lower">
      <div
        :class="view ? 'right-product-display' : 'right-product-display-view-2'"
        v-for="(item, index) in getProducts.products"
        :key="index"
        @mouseover="showButton(index)"
        @mouseleave="showButton(null)"
      >
        <div
          v-bind:class="
            view
              ? 'single-product-container'
              : 'single-product-container-view-2'
          "
        >
          <div class="single-image-display-center">
            <img class="product-image" v-bind:src="item.images[0].url" alt="" />
          </div>

          <div v-if="item.stock_in_usa" class="product-stock-in-usa">
            <img
              class="product-main-image"
              src="../assets/usa.png"
              width="25px"
            />
            <span style="font-size: 14px">&nbsp;Stock in USA</span>
          </div>
          <div class="product-info-text">
            <P v-bind:class="!item.stock_in_usa ? 'stock_usa_false' : ''">{{
              item.product_name.length > 40
                ? item.product_name.slice(0, 40) + "..."
                : item.product_name
            }}</P>
            <p class="product-moq-price-text">MOQ: {{ item.display_moq }}</p>
            <p class="product-price-text">{{ item.price }}</p>
          </div>
          <div class="add-cart-button-parent">
            <button
              v-show="showButtonId === index"
              class="add-cart-button-show"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Next page of products arrow buttons -->

    <div class="product-lower-next-button-container">
      <div class="product-lower-next-button">
        <i
          class="fa fa-toggle-left right-product-left-button"
          v-on:click="pageFunction(-1)"
        ></i>
        <input
          class="right-upper-right-product-input"
          type="text"
          :value="this.$store.state.filterOptions.page"
          readonly
        />
        <p>of &nbsp; {{ Math.ceil(getProducts.total_results / 24) }}</p>
        <i
          class="fa fa-toggle-right right-product-left-button"
          v-on:click="pageFunction(1)"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      view: true,
      previousButton: 1,
      showButtonId: null,
    };
  },
  computed: {
    getProducts() {
      return this.$store.getters.getProducts;
    },
  },
  created() {
    this.$store.dispatch("fetchProducts");
  },
  methods: {
    grandFilter() {
      this.$store.dispatch("grandFilter");
      return this.$store.getters.grandFilter;
    },
    sortByFilter(event) {
      this.$store.dispatch("sortByFilter", event.target.value);
      this.grandFilter();
    },
    pageFunction(item) {
      this.$store.dispatch("pageFunction", item);
      this.grandFilter();
    },
    toggleView(button) {
      if (button === this.previousButton) {
        return;
      }
      this.view = !this.view;
      this.previousButton = button;
    },
    showButton(productId) {
      this.showButtonId = productId;
    },
  },
};
</script>

<style>
.change-view1-button-color-dynamic {
  color: #000;
}
.change-view2-button-color-dynamic {
  color: #918e8f;
}
.add-cart-button-parent {
  display: flex;
  justify-content: center;
  margin: 20px;
}
.add-cart-button {
  display: none;
}
.add-cart-button-show {
  display: block;
  border: 1px solid #47b3ca;
  background-color: #47b3ca;
  width: 100%;
  height: 35px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}
.single-image-display-center {
  width: 100%;
  display: flex;
  justify-content: center;
}
.product-stock-in-usa {
  display: flex;
  align-items: center;
  padding: 0 20px;
}
.right-parent-lower {
  display: flex;
  flex-wrap: wrap;
}
.right-product-left-button {
  font-size: 24px;
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 50px;
  color: #6e6c6c;
  cursor: pointer;
}
.product-box-view {
  font-size: 24px;
  cursor: pointer;
}
.product-list-view {
  font-size: 24px;
  cursor: pointer;
  margin-left: 20px;
}
.right-component-parent {
  margin: 20px 0 20px 20px;
  width: 100%;
}
.right-parent-upper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right-parent-upper-left-button-2 {
  margin-left: 20px;
}
.right-parent-upper-right {
  width: 470px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right-upper-right-product-input {
  width: 50px;
  border-radius: 50px;
  background-color: #f2f2f2;
  padding: 10px 8px;
  border: 1px solid #c8c5c5;
  text-align: center;
}
.right-parent-upper-right button {
  padding: 10px;
  border-radius: 50px;
  background-color: #f2f2f2;
  border: none;
}
.right-upper-right-product-input-relevance {
  border-radius: 50px;
  background-color: #f2f2f2;
  padding: 10px 8px;
  border: 1px solid #c8c5c5;
}
.right-product-display {
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
.right-product-display-view-2 {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
.single-product-container {
  flex: 1;
  height: 450px;
  margin: 0px;
  border-radius: 8px;
}
.single-product-container-view-2 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  margin: 0px;
  border-radius: 8px;
  border: 1px solid #000;
}
.product-image {
  width: 280px;
  height: 280px;
  padding: 0px 20px;
  object-fit: contain;
}
.product-moq-price-text {
  color: #918e8f;
  font-size: 14px;
}
.product-price-text {
  font-weight: bold;
}
.single-product-container:hover {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.single-product-container-view-2:hover {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.single-product-container p {
  line-height: 0.7em;
}
.product-info-text {
  padding: 0 20px;
}
.stock_usa_false {
  margin-top: 40px;
}
.product-lower-next-button {
  width: 15.5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product-lower-next-button button {
  padding: 10px;
  border-radius: 50px;
  background-color: #f2f2f2;
  border: none;
}
.product-lower-next-button-container {
  display: flex;
  justify-content: right;
  align-items: center;
}
</style>
