import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

// Vue.use(VueAxios, axios)
Vue.use(Vuex)

export const store=new Vuex.Store({
    state:{
        products:[],
        filters:[],
        categories:'',
        filterOptions:{
            page:1,
            sortBy:''
        },
        leftDynamicFilter:''
    },
    getters:{
        getProducts:(state)=>state.products,
        grandFilter:(state)=>state.products,

        getFilters:(state)=>state.filters,
        getCategories:(state)=>state.categories,
        // pageNumber:(state)=>state.filterOptions.page,
        // sortBy:(state)=> state.filterOptions.sortBy,
        // productCertification:(state)=>state.filterOptions.proCert
        joinedValues(state) {
            return state.filterOptions.checkedValues.join(',');
          },
    },
    actions:{
        fetchProducts: async (context)=>{
            try {
                const data = await axios.get('https://portal.thebuyhive.com/api/ecom/v2/search?keyword=&category=&page=1&sort_by=default')
                context.commit('SET_PRODUCTS', data.data)
            } catch (error) {
                console.log(error)
            }
        },
        fetchCategories: async (context)=>{
            try {
                const data = await axios.get('https://portal.thebuyhive.com/api/ecom/v2/categories')
                context.commit('SET_CATEGORIES',data.data)
                // console.log(data.data.categories)
            } catch (error) {
                console.log(error)
            }
        },
        // grandFilter: async (context, payload)=>{
        //     try {
        //         const data = await axios.get('https://portal.thebuyhive.com/api/ecom/v2/search?keyword=&category=&page='+payload.page+'&certificates=&sort_by='+payload.selectedOption)
        //         context.commit('GRAND_FILTER', data.data)
        //         console.log(payload)
        //     } catch (error) {
        //         console.log(error)
        //     }
        // },
        grandFilter: async (context)=>{
            try {
                const data = await axios.get('https://portal.thebuyhive.com/api/ecom/v2/search?keyword=&category='+encodeURIComponent(context.state.filterOptions.category?context.state.filterOptions.category:'')+'&page='+context.state.filterOptions.page+'&certificates=&sort_by='+context.state.filterOptions.sortBy)
                context.commit('GRAND_FILTER', data.data)
            } catch (error) {
                console.log(error)
            }
        },
        fetchFilters: async (context)=>{
            try {
                const data = await axios.get('https://portal.thebuyhive.com/api/ecom/v2/search-filter?keyword=&category='+encodeURIComponent(context.state.filterOptions.category?context.state.filterOptions.category:'')+'&page=1&sort_by=default')
                context.commit('SET_FILTERS', data.data.filters)
                console.log(data.data.filters)
            } catch (error) {
                console.log(error)
            }
        },
        incrementPage:(context)=>{
            context.commit('INCREMENT_PAGE')
        },
        decrementPage:(context)=>{
            context.commit('DECREMENT_PAGE')
        },
        sortByFilter:(context, payload)=>{
            context.commit('SORT_BY_FILTER', payload)
        },
        category:(context, payload)=>{
            context.commit('CATEGORY', payload)
        },
    },
    mutations:{
        SET_PRODUCTS(state, products){
            state.products=products
        },
        SET_CATEGORIES(state, categories){
            state.categories=categories
        },
        GRAND_FILTER(state, products){
            state.products=products
        },
        SET_FILTERS(state, filters){
            state.filters=filters
        },
        INCREMENT_PAGE(state) {
            state.filterOptions.page++
        },
        DECREMENT_PAGE(state) {
            if(state.filterOptions.page>1){
                state.filterOptions.page--
            }
        },
        SORT_BY_FILTER(state, payload){
            state.filterOptions.sortBy=payload
        },
        CATEGORY(state, payload){
            state.filterOptions.category=payload
        },
    }
})