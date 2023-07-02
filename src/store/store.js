import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [],
    filters: [],
    categories: "",
    minMaxPrice:{
      minPrice: '',
      maxPrice: '',
    },
    filterOptions: {
      page: 1,
      sortBy: "",
      certificate: [],
      category: "",
      country: [],
      supply: [],
      usaStock: false,
      key: "",
      moqSearch: '',
      minPrice: '',
      maxPrice: '',
    },
  },
  getters: {
    getProducts: (state) => state.products,
    grandFilter: (state) => state.products,
    getFilters: (state) => state.filters,
    getCategories: (state) => state.categories,
    getPrice: (state) => state.minMaxPrice,
  },
  actions: {
    fetchProducts: async (context) => {
      try {
        const data = await axios.get(
          "http://localhost:3000/products"
        );
        context.commit("SET_PRODUCTS", data.data);
      } catch (error) {
        console.log(error);
      }
    },
    fetchCategories: async (context) => {
      try {
        const data = await axios.get(
          // "https://portal.thebuyhive.com/api/ecom/v2/categories"
          "http://localhost:3000/categories"
        );
        context.commit("SET_CATEGORIES", data.data);
      } catch (error) {
        console.log(error);
      }
    },
    grandFilter: async (context) => {
      try {
        const data = await axios.get(
          "http://localhost:3000/products/search?keyword=" +
            context.state.filterOptions.key +
            "&category=" +
            encodeURIComponent(
              context.state.filterOptions.category
                ? context.state.filterOptions.category
                : ""
            ) +
            "&min_price=" +
            context.state.filterOptions.minPrice +
            "&max_price=" +
            context.state.filterOptions.maxPrice +
            "&country=" +
            context.state.filterOptions.country +
            "&certificates=" +
            context.state.filterOptions.certificate +
            "&supplier=" +
            context.state.filterOptions.supply +
            "&sort_by=" +
            context.state.filterOptions.sortBy +
            (context.state.filterOptions.moqSearch
              ? "&moq=" + context.state.filterOptions.moqSearch
              : "") +
            (context.state.filterOptions.usaStock ? "&usa_stock=true" : "")
        );

        context.commit("GRAND_FILTER", data.data);
      } catch (error) {
        console.log(error);
      }
    },
    fetchFilters: async (context) => {
      try {
        const data = await axios.get(
          "http://localhost:3000/filters/search-filter?keyword=" +
            context.state.filterOptions.key +
            "&category=" +
            encodeURIComponent(
              context.state.filterOptions.category
                ? context.state.filterOptions.category
                : ""
            ) +
            "&sort_by=default"
        );
        // context.state.filterOptions.minPrice = data.data[0].min_price;
        // context.state.filterOptions.maxPrice = data.data[0].max_price;
        context.commit("SET_FILTERS", data.data[0]);
      } catch (error) {
        console.log(error);
      }
    },
    fetchPrice: async (context, payload) => {
      try {
        const data = await axios.get(
          "http://localhost:3000/filters/price?" +
            "&category=" +
            encodeURIComponent(
              payload
                ? payload
                : ""
            ) +
            "&sort_by=default"
        );
        context.commit("SET_PRICE", data.data[0]);
      } catch (error) {
        console.log(error);
      }
    },
    pageFunction: (context, payload) => {
      context.commit("PAGE_FUNCTION", payload);
    },
    sortByFilter: (context, payload) => {
      context.commit("SORT_BY_FILTER", payload);
    },
    category: (context, payload) => {
      context.commit("CATEGORY", payload);
    },
    usaStock: (context, payload) => {
      context.commit("USA_STOCK", payload);
    },
    searchKey: (context, payload) => {
      context.commit("SEARCH_KEY", payload);
    },
    moqSearch: (context, payload) => {
      context.commit("MOQ_SEARCH", payload);
    },
    priceSearch: (context, payload) => {
      context.commit("PRICE_SEARCH", payload);
    },
    setFilterOption(context, { option, value }) {
      context.commit('SET_FILTER_OPTION', { option, value });
    },

  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    GRAND_FILTER(state, products) {
      state.products = products;
    },
    SET_FILTERS(state, filters) {
      state.filters = filters;
    },
    SET_PRICE(state, filters) {
      state.minMaxPrice = filters;
    },
    SET_FILTER_OPTION(state, { option, value }) {
      state.filterOptions[option] = value;
    },
    PAGE_FUNCTION(state, payload) {
      const newPage = state.filterOptions.page + payload;
      if (
        newPage > 0 &&
        newPage <= Math.ceil(state.products.total_results / 24)
      ) {
        state.filterOptions.page = newPage;
      }
    },
    SORT_BY_FILTER(state, payload) {
      state.filterOptions.sortBy = payload;
    },
    CATEGORY(state, payload) {
      state.filterOptions.category = payload;
      state.filterOptions.key = "";
      state.filterOptions.moqSearch = null;
      state.filterOptions.page = 1;
      state.filterOptions.minPrice = "";
      state.filterOptions.maxPrice = "";
    },
    USA_STOCK(state) {
      state.filterOptions.usaStock = !state.filterOptions.usaStock;
    },
    SEARCH_KEY(state, payload) {
      state.filterOptions.key = payload.enteredText;
      state.filterOptions.category = payload.selectedCategory;
      state.filterOptions.page = 1;
      state.filterOptions.minPrice = "";
      state.filterOptions.maxPrice = "";
    },
    MOQ_SEARCH(state, payload) {
      state.filterOptions.moqSearch = payload;
    },
    PRICE_SEARCH(state, payload) {
      state.filterOptions.minPrice = payload.minPrice;
      state.filterOptions.maxPrice = payload.maxPrice;
    },
  },
});
