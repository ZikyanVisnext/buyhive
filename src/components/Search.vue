<template>
    <div class="search-parent">
            <div>
                <div class="search-container">
                    <div class="search-left" @click="isCategory=!isCategory">
                        <i class="fa fa-window-restore	search-category-icon"></i>
                        <p style="font-size: 18px;">Categories</p>
                    </div>
                    <div class="search-middle">
                        <input class="search-middle-input" type="text" v-model="searchKey" placeholder="What are you looking for?">
                        <select class="search-select-all-categories" @change="selectedCategoryFunction($event)">
                            <option value="default">All Categories</option>
                            <option v-for="(parent, index) in getCategories.categories" :key="index">{{parent.category_name}}</option>
                        </select>
                    </div>
                    <div class="search-right">
                        <button class="search-right-button" @click="submitSearch">Search</button>
                    </div>
                </div>
        </div>

        <div v-if="isCategory" class="category-drop-down">
            <div v-for="(parent, index) in getCategories.categories" :key="index" class="search-category-dropdown-parent" >
                <ul>
                    <li class="search-category-dropdown-parent-category" @click="category(parent.category_slug)" >{{ parent.category_name }}</li>
                </ul>
                <ul v-for="(item, index) in parent.sub_categories" :key="index">
                    <li class="search-category-dropdown-sub-category" @click="category(item.category_slug)" >{{ item.category_name }}</li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
export default{
    data(){
        return{
            isCategory:false,
            searchKey:'',
            searchObject:{
                enteredText:'',
                selectedCategory:''
            }
        }
    },
    computed:{
        getCategories(){
            return this.$store.getters.getCategories
        }
    },
    created(){
        this.$store.dispatch('fetchCategories')
    },
    methods:{
        category(payload){
            this.isCategory=false
            this.searchKey=''
            this.$store.dispatch('category',payload)
            this.$store.dispatch('grandFilter')
            this.$store.dispatch('fetchFilters')
        },
        selectedCategoryFunction(event){
            this.searchObject.selectedCategory=event.target.value
        },
        submitSearch(){
            console.log(this.searchObject.selectedCategory)
            this.$store.dispatch('searchKey',this.searchKey)
            this.$store.dispatch('grandFilter')
            this.$store.dispatch('fetchFilters')
        }
    }
}

</script>

<style>
.category-drop-down{
    /* position: absolute; */
    background-color:#F2F2F2;
    /* padding: 30px;
    position: inherit; */
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
}
.category-drop-down ul{
    padding: 0;
    margin: 0;
}
.search-category-dropdown-parent{
    padding: 20px;
  
    /* display: flex;
    justify-content: space-between; */
    /* width: 100%; */
    
    /* padding: 30px; */
    /* position: absolute; */
    /* z-index: 999; */
    /* overflow-x: scroll; */
    /* padding: 0;
    margin: 0; */
}
/* .search-category-dropdown ul{
    padding: 0;
    margin: 0;
} */
.search-category-dropdown-parent-category{
    font-size: 14px;
    font-weight: 600;
    list-style-type: none;
    /* background-color: crimson; */
    cursor: pointer;
}
.search-category-dropdown-parent-category:hover{
    color:#5CB674;
}
.search-category-dropdown-sub-category:hover{
    color:#5CB674;
}
.search-category-dropdown-sub-category{
    font-size: 15px;
    font-weight: 500;
    list-style-type: none;
    margin-top: 10px;
    cursor: pointer;
}
.search-category-icon{
    font-size: 24px;
    margin-right: 20px;
    color: #57C2D8;
}
.search-left{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.search-parent{
    /* display: flex;
    justify-content: center; */
    margin-top: 30px;
    width: 100%;
}
.search-container{
    
    display: flex;
    justify-content: space-between;
    background-color: #F2F2F2;
    border-radius: 10px;
    padding: 10px 20px;
    align-items: center;
}
.search-middle-input{
    height: 15px;
    /* width: 950px; */
    width: 50vw;
    padding: 15px;
    border-radius: 50px;
    font-size: 18px;
    border: 1px solid #c8c5c5;
}
.search-right-button{
    border: 1px solid #47B3CA;
    background-color: #47B3CA;
    width: 120px;
    height: 40px;
    border-radius: 50px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
}
.search-select-all-categories{
    margin-left: -250px;
    font-size: 18px;
    background: rgba(0, 0, 0, 0);
    border: none;
}

</style>