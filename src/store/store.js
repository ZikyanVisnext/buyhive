import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

// Vue.use(VueAxios, axios)
Vue.use(Vuex)

export const store=new Vuex.Store({
    state:{
        products:[],
        filters:[]
    },
    getters:{
        getProducts:(state)=>state.products,
        relevance:(state)=>state.products,
        latest:(state)=>state.products,
        lowToHigh:(state)=>state.products,
        highToLow:(state)=>state.products,
        MOQlowToHigh:(state)=>state.products,
        ratingsHighToLow:(state)=>state.products,

        getFilters:(state)=>state.filters,

        nextPage:(state)=>state.products
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
        relevance: async (context)=>{
            try {
                const data = await axios.get('https://portal.thebuyhive.com/api/ecom/v2/search?keyword=&category=&page=1&sort_by=relevance')
                context.commit('RELEVANCE', data.data)
            } catch (error) {
                console.log(error)
            }
        },
        latest: async (context)=>{
            try {
                const data = await axios.get('https://portal.thebuyhive.com/api/ecom/v2/search?keyword=&category=&page=1&sort_by=latest')
                context.commit('LATEST', data.data)
            } catch (error) {
                console.log(error)
            }
        },
        lowToHigh: async (context)=>{
            try {
                const data = await axios.get('https://portal.thebuyhive.com/api/ecom/v2/search?keyword=&category=&page=1&sort_by=price_low_to_high')
                context.commit('LOWTOHIGH', data.data)
            } catch (error) {
                console.log(error)
            }
        },
        highToLow: async (context)=>{
            try {
                const data = await axios.get('https://portal.thebuyhive.com/api/ecom/v2/search?keyword=&category=&page=1&sort_by=price_high_to_low')
                context.commit('HIGHTOLOW', data.data)
            } catch (error) {
                console.log(error)
            }
        },
        MOQlowToHigh: async (context)=>{
            try {
                const data = await axios.get('https://portal.thebuyhive.com/api/ecom/v2/search?keyword=&category=&page=1&sort_by=MOQ_low_to_high')
                context.commit('MOQLOWTOHIGH', data.data)
            } catch (error) {
                console.log(error)
            }
        },
        ratingsHighToLow: async (context)=>{
            try {
                const data = await axios.get('https://portal.thebuyhive.com/api/ecom/v2/search?keyword=&category=&page=1&sort_by=ratings_high_to_low')
                context.commit('RATINGSHIGHTOLOW', data.data)
            } catch (error) {
                console.log(error)
            }
        },
        fetchFilters: async (context)=>{
            try {
                const data = await axios.get('https://portal.thebuyhive.com/api/ecom/v2/search-filter?keyword=&category=face_mask&page=1&sort_by=default')
                context.commit('SET_FILTERS', data.data.filters)
            } catch (error) {
                console.log(error)
            }
        },
        nextPage: async (context, payload)=>{
            try {
                const data = await axios.get('https://portal.thebuyhive.com/api/ecom/v2/search?keyword=&category=&page='+payload+'&sort_by=default')
                context.commit('NEXT_PAGE', data.data)
            } catch (error) {
                console.log(error)
            }
        },
    },
    mutations:{
        SET_PRODUCTS(state, products){
            state.products=products
        },
        RELEVANCE(state, products){
            state.products=products
        },
        LATEST(state, products){
            state.products=products
        },
        LOWTOHIGH(state, products){
            state.products=products
        },
        HIGHTOLOW(state, products){
            state.products=products
        },
        MOQLOWTOHIGH(state, products){
            state.products=products
        },
        RATINGSHIGHTOLOW(state, products){
            state.products=products
        },
        SET_FILTERS(state, filters){
            state.filters=filters
        },
        NEXT_PAGE(state, products){
            state.products=products
        },
    }
})