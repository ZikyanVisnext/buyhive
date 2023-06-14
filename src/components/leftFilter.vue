<template>
  <div class="left-filter-parent">
    <div class="left-filter-container">
      <div
        v-if="getFilters.categories?.length >= 1"
        class="left-filter-cert-container"
      >
        <div class="left-filter-cert-container-inner">
          <div class="cert-filter">
            <input
              type="text"
              placeholder="More Categories"
              v-model="moreCategoriesSearch"
              @change="moreCategoriesSearchFunction"
            />
          </div>
          <div class="left-filter-cert-checkbox">
            <div
              class="left-filter-big-checkbox"
              v-for="(item, index) in moreCategoriesSearchFunction"
              :key="index"
            >
              <p
                @click="handleMoreCategoryEvent(item.category_slug)"
                class="top-more-category-filter"
              >
                {{ item.category_name }}
              </p>
              <div
                v-if="item.sub_categories"
                class="top-more-category-filter-sub-category"
              >
                <p
                  style="font-size: 15px"
                  v-for="(item, index) in item.sub_categories"
                  @click="handleMoreCategoryEvent(item.category_slug)"
                >
                  {{ item.category_name }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Price Section -->

      <div class="left-filter-price-container">
        <p>Price</p>
        <div class="price-filter">
          <input
            type="number"
            name="min"
            placeholder="from"
            :value="getFilters.min_price"
            @input="handlePrice"
          />
          <p>&nbsp;-&nbsp;</p>
          <input
            type="number"
            name="max"
            placeholder="to"
            :value="getFilters.max_price"
            @input="handlePrice"
          />
        </div>
      </div>

      <!-- MOQ Section -->

      <div class="left-filter-moq-container">
        <p>MOQ</p>
        <div class="moq-filter">
          <input
            type="number"
            placeholder="Less than"
            v-model="moqSearch"
            @input="handleMoqSearch"
          />
        </div>
      </div>

      <!-- Product Certification Section -->

      <div
        v-if="getFilters.product_certification?.length"
        class="left-filter-cert-container"
      >
        <p>Product Certification</p>
        <div class="left-filter-cert-container-inner">
          <div class="cert-filter">
            <input
              type="text"
              placeholder="Product Certifications..."
              v-model="productSearch"
              @change="productSearchFunction"
            />
          </div>
          <div class="left-filter-cert-checkbox">
            <div
              class="left-filter-big-checkbox"
              v-for="(item, index) in productSearchFunction"
              :key="index"
            >
              <input
                type="checkbox"
                :value="item"
                v-model="productCertificates"
                @change="proCertFilter"
              />
              <span>&nbsp; &nbsp; {{ item }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Supplier Certification -->

      <div
        v-if="getFilters.supplier_certification?.length"
        class="left-filter-cert-container"
      >
        <p>Supplier Certification</p>
        <div class="left-filter-cert-container-inner">
          <div class="cert-filter">
            <input
              type="text"
              placeholder="Supplier Certifications..."
              v-model="supplySearch"
              @change="supplySearchFunction"
            />
          </div>
          <div class="left-filter-supply-checkbox">
            <div
              class="left-filter-big-checkbox"
              v-for="(item, index) in supplySearchFunction"
              :key="index"
            >
              <input
                type="checkbox"
                :value="'&has_' + item + '=true'"
                v-model="productSupply"
                @change="proSupplyFilter"
              />
              <span>&nbsp; &nbsp; {{ item }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Manufacturer Location -->

      <div
        v-if="getFilters.supplier_locations?.length"
        class="left-filter-cert-container"
      >
        <p>Manufacturer Location</p>
        <div class="left-filter-cert-container-inner">
          <div class="cert-filter">
            <input
              type="text"
              placeholder="Country/Region"
              v-model="countrySearch"
              @change="countrySearchFunction"
            />
          </div>
          <div class="left-filter-cert-checkbox">
            <div
              class="left-filter-big-checkbox"
              v-for="(item, index) in countrySearchFunction"
              :key="index"
            >
              <input
                type="checkbox"
                :value="item"
                v-model="productCountry"
                @change="proCountryFilter"
              />
              <span>&nbsp; &nbsp; {{ item }}</span>
            </div>
          </div>
        </div>
      </div>

      <div v-if="getFilters.stock_in_usa_filter" class="left-filter-stock">
        <p>Stock Availability</p>
        <div class="left-filter-stock-flex">
          <input type="checkbox" @click="usaStockFunction" />
          <img src="../assets/usa.png" width="25px" />
          <span style="font-size: 14px">&nbsp;in USA</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productCertificates: [],
      productCountry: [],
      productSupply: [],
      usaStock: "",
      moqSearch: null,
      price: {
        minPrice: null,
        maxPrice: null,
      },
      productSearch: "",
      supplySearch: "",
      countrySearch: "",
      moreCategoriesSearch: "",
    };
  },
  computed: {
    getFilters() {
      return this.$store.getters.getFilters;
    },
    productSearchFunction() {
      return this.getFilters.product_certification.filter((item) => {
        return item.toLowerCase().includes(this.productSearch.toLowerCase());
      });
    },
    supplySearchFunction() {
      return this.getFilters.supplier_certification.filter((item) => {
        return item.toLowerCase().includes(this.supplySearch.toLowerCase());
      });
    },
    countrySearchFunction() {
      return this.getFilters.supplier_locations.filter((item) => {
        return item.toLowerCase().includes(this.countrySearch.toLowerCase());
      });
    },
    moreCategoriesSearchFunction() {
      return this.getFilters.categories.filter((item) => {
        return item.category_name
          .toLowerCase()
          .includes(this.moreCategoriesSearch.toLowerCase());
      });
    },
  },
  created() {
    this.items = this.$store.dispatch("fetchFilters");
  },
  methods: {
    proCertFilter() {
      this.$store.dispatch("joinCertificate", this.productCertificates);
      this.$store.dispatch("grandFilter");
    },
    proCountryFilter() {
      this.$store.dispatch("joinCountry", this.productCountry);
      this.$store.dispatch("grandFilter");
    },
    proSupplyFilter() {
      this.$store.dispatch("joinSupply", this.productSupply);
      this.$store.dispatch("grandFilter");
    },
    usaStockFunction() {
      this.$store.dispatch("usaStock");
      this.$store.dispatch("grandFilter");
    },
    handleMoqSearch() {
      setTimeout(() => {
        this.$store.dispatch("moqSearch", this.moqSearch);
        this.$store.dispatch("grandFilter");
      }, 800);
    },
    handlePrice(event) {
      this.price.minPrice =
        event.target.name === "min"
          ? event.target.value
          : this.$store.state.filterOptions.minPrice;
      this.price.maxPrice =
        event.target.name === "max"
          ? event.target.value
          : this.$store.state.filterOptions.maxPrice;
      setTimeout(() => {
        this.$store.dispatch("priceSearch", this.price);
        this.$store.dispatch("grandFilter");
      }, 800);
    },
    handleMoreCategoryEvent(category) {
      this.$store.dispatch("category", category);
      this.$store.dispatch("grandFilter");
      this.$store.dispatch("fetchFilters");
    },
  },
};
</script>

<style>
.top-more-category-filter-sub-category {
  margin-left: 20px;
  cursor: pointer;
}
.top-more-category-filter {
  padding: 0;
  margin: 5px;
  cursor: pointer;
}
.left-filter-stock-flex {
  display: flex;
  align-items: center;
}
.left-filter-stock img {
  margin-left: 10px;
}
.left-filter-parent p {
  font-size: 18px;
}
.moq-filter input::-webkit-inner-spin-button {
  display: none;
}
.price-filter input::-webkit-inner-spin-button {
  display: none;
}
.left-filter-container {
  border: 1px solid #c8c5c5;
  padding: 20px 10px;
  border-radius: 5px;
}
.left-filter-parent input {
  text-align: center;
}
.price-filter {
  display: flex;
  justify-content: center;
  align-items: center;
}
.price-filter input {
  border-radius: 50px;
  border: 1px solid #c8c5c5;
  background-color: #f2f2f2;
  width: 120px;
  height: 35px;
}
.moq-filter {
  display: flex;
  justify-content: center;
  align-items: center;
}
.moq-filter input {
  border-radius: 50px;
  border: 1px solid #c8c5c5;
  background-color: #f2f2f2;
  width: 250px;
  height: 35px;
}
.cert-filter {
  display: flex;
  justify-content: center;
  align-items: center;
}
.cert-filter input {
  border-radius: 50px;
  border: 1px solid #c8c5c5;
  background-color: #f2f2f2;
  width: 250px;
  height: 35px;
}
.cert-filter ::-webkit-input-placeholder {
  text-align: center;
}
.moq-filter ::-webkit-input-placeholder {
  text-align: center;
}
.left-filter-moq-container {
  margin-top: 20px;
}
.left-filter-cert-container {
  margin-top: 20px;
}
.left-filter-cert-container-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.left-filter-cert-checkbox {
  margin-top: 20px;
  height: 100px;
  overflow-y: scroll;
  width: 90%;
  height: 170px;
}
.left-filter-cert-checkbox::-webkit-scrollbar {
  background-color: #dedede;
  width: 5px;
}
.left-filter-cert-checkbox::-webkit-scrollbar-thumb {
  background-color: #5cb674;
}
.left-filter-cert-checkbox input {
  margin: 8px 0;
}

.left-filter-big-checkbox input[type="checkbox"] {
  width: 20px;
  height: 20px;
}
.left-filter-stock {
  margin-top: 30px;
}
.left-filter-stock input[type="checkbox"] {
  width: 20px;
  height: 20px;
  margin-left: 10px;
}
.left-filter-big-checkbox {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
}
.left-filter-supply-checkbox {
  margin-top: 20px;
  height: 100px;
  width: 94%;
  height: 170px;
}
@media only screen and (max-width: 900px) {
  .left-filter-parent{
    display: none;
  }
}
</style>
