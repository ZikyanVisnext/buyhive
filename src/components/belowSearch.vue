<template>
  <div class="below-search-parent">
    <div class="below-search-left">
      <p v-show="productText">Products &nbsp; &nbsp;</p>
      <div v-for="(item, index) in showProductName" :key="index">
        <p>{{ item.category_name }} &nbsp; &nbsp;</p>
      </div>
      <div class="below-search-number-of-products">
        ({{ getProducts.total_results }} Products)
      </div>
    </div>
    <div class="below-search-middle">
      <div class="below-search-buy-text">
        Buy
        <div
          v-for="(item, index) in getFilters.category_breadcrumbs"
          :key="index"
        >
          <p
            class="buy-category-cursor"
            @click="handleMoreCategoryEvent(item.category_slug)"
          >
            &nbsp;/ {{ item.category_name }}
          </p>
        </div>
      </div>
    </div>

    <div class="below-search-right">
      Placing bulk orders on BuyHive is safe & easy.<br />
      <strong>Click to learn how it works!</strong>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      productText: true,
    };
  },
  computed: {
    ...mapGetters(["getProducts", "getFilters"]),
    showProductName() {
      if (this.getFilters.category_breadcrumbs?.length == 0) {
        this.productText = true;
      } else {
        this.productText = false;
        return this.getFilters.category_breadcrumbs?.slice(-1).reverse();
      }
    },
  },
  created() {
    this.fetchProducts();
    this.fetchFilters();
  },
  methods: {
    ...mapActions(["fetchProducts", "grandFilter", "fetchFilters", "category"]),
    handleMoreCategoryEvent(category) {
      this.category(category);
      this.grandFilter();
      this.fetchFilters();
    },
  },
};
</script>

<style>
.below-search-filter-responsive-parent {
  display: none;
}
.buy-category-cursor {
  cursor: pointer;
}
.left-filter-responsive {
  display: none;
}
.below-search-parent {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.below-search-left {
  text-align: justify;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  font-size: 20px;
  font-weight: 500;
  width: 290px;
}
.below-search-number-of-products {
  color: #918e8f;
  font-weight: 500;
}
.below-search-middle {
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  margin-left: 310px;
  color: #918e8f;
}
.below-search-buy-text {
  display: flex;
  align-items: center;
  justify-content: center;
}
.below-search-right {
  background-image: url("../assets/textBackground.png");
  color: #fff;
  border-radius: 10px;
  text-align: center;
  font-size: 18px;
  background-size: cover;
  width: 450px;
  padding: 10px;
}
@media only screen and (max-width: 1100px) {
  .below-search-parent {
    display: block;
  }
  .below-search-middle {
    display: none;
  }
  .below-search-right {
    display: none;
  }
  .left-filter-responsive {
    display: block;
    background-color: crimson;
  }
}
</style>
