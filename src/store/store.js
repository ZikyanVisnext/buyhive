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
            sortBy:'',
            certificate: [],
            country: [],
            supply: [],
            usaStock: false,
            key: '',
            moqSearch: null,
            minPrice: 0,
            maxPrice: 6900
        }
    },
    getters:{
        getProducts:(state) => state.products,
        grandFilter:(state) => state.products,

        getFilters:(state)=>state.filters,
        getCategories:(state)=>state.categories,
        // pageNumber:(state)=>state.filterOptions.page,
        // sortBy:(state)=> state.filterOptions.sortBy,
        // productCertification:(state)=>state.filterOptions.proCert
        // joinedValues(state) {
        //     return state.filterOptions.checkedValues.join(',');
        // },
        // proCertFilter:(state) => state.filterOptions.certificate.join(','),
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
                const data = await axios.get('https://portal.thebuyhive.com/api/ecom/v2/search?keyword='+context.state.filterOptions.key+
                '&category='+encodeURIComponent(context.state.filterOptions.category?context.state.filterOptions.category:'')+
                '&page='+context.state.filterOptions.page+'&min_price='+context.state.filterOptions.minPrice+'&max_price='+context.state.filterOptions.maxPrice+'&country='+context.state.filterOptions.country+'&certificates='+
                context.state.filterOptions.certificate+'&sort_by='+context.state.filterOptions.sortBy+
                (context.state.filterOptions.moqSearch?('&moq='+context.state.filterOptions.moqSearch):'')+
                (context.state.filterOptions.usaStock?'&stock_in_usa=true':''))

                context.commit('GRAND_FILTER', data.data)
            } catch (error) {
                console.log(error)
            }
        },
        fetchFilters: async (context)=>{
            try {
                const data = await axios.get('https://portal.thebuyhive.com/api/ecom/v2/search-filter?keyword='+context.state.filterOptions.key+'&category='+encodeURIComponent(context.state.filterOptions.category?context.state.filterOptions.category:'')+'&page=1&sort_by=default')
                context.commit('SET_FILTERS', data.data.filters)
                // console.log(data.data.filters)
            } catch (error) {
                console.log(error)
            }
        },
        incrementPage:(context, totalProducts)=>{
            context.commit('INCREMENT_PAGE', totalProducts)
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
        joinCertificate:(context, payload)=>{
            context.commit('JOIN_CERTIFICATE', payload)
        },
        joinCountry:(context, payload)=>{
            context.commit('JOIN_COUNTRY', payload)
        },
        joinSupply:(context, payload)=>{
            context.commit('JOIN_SUPPLY', payload)
        },
        usaStock:(context, payload)=>{
            context.commit('USA_STOCK', payload)
        },
        searchKey:(context, payload)=>{
            context.commit('SEARCH_KEY', payload)
        },
        moqSearch:(context, payload)=>{
            context.commit('MOQ_SEARCH', payload)
        },
        priceSearch:(context, payload)=>{
            context.commit('PRICE_SEARCH', payload)
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
        INCREMENT_PAGE(state, payload) {
        if(payload>1){
            state.filterOptions.page++
        }    
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
            state.filterOptions.key=''
            state.filterOptions.moqSearch=null
        },
        JOIN_CERTIFICATE(state, payload){
            state.filterOptions.certificate=payload
        },
        JOIN_COUNTRY(state, payload){
            state.filterOptions.country=payload
        },
        JOIN_SUPPLY(state, payload){
            state.filterOptions.supply=payload
        },
        USA_STOCK(state){
            state.filterOptions.usaStock=!state.filterOptions.usaStock
            // console.log(state.filterOptions.usaStock)
        },
        SEARCH_KEY(state, payload){
            state.filterOptions.key=payload
            state.filterOptions.category=''
        },
        MOQ_SEARCH(state, payload){
            state.filterOptions.moqSearch=payload
        },
        PRICE_SEARCH(state, payload){
            state.filterOptions.minPrice=payload.minPrice
            state.filterOptions.maxPrice=payload.maxPrice
        }
    }
})