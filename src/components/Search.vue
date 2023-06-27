<template>
  <div class="search-parent">
    <div>
      <div class="search-container">
        <div class="search-left" @click="isCategory = !isCategory">
          <i class="fa fa-window-restore search-category-icon"></i>
          <p @click="zikTest" style="font-size: 18px">Categories</p>
        </div>
        <div class="search-middle">
          <input
            class="search-middle-input"
            type="text"
            v-model="searchObject.enteredText"
            placeholder="What are you looking for?"
          />
          <select
            class="search-select-all-categories"
            @change="selectedCategoryFunction($event)"
          >
            <option value="default">All Categories</option>
            <option
              v-for="(parent, index) in getCategories"
              :key="index"
            >
              {{ parent.category_name }}
            </option>
          </select>
        </div>
        <div class="search-right">
          <button class="search-right-button" @click="submitSearch">
            Search
          </button>
        </div>
        <div class="search-right-responsive">
          <button class="search-right-button" @click="submitSearch">
            <i class="fa fa-search" style="font-size: 24px"></i>
          </button>
        </div>
      </div>
      <div class="search-middle-more-categories-responsive-parent">
        <div
          @click="isCategory = !isCategory"
          class="search-middle-more-categories-responsive"
        >
          <i class="fa fa-window-restore search-category-icon"></i>
          <p>Categories</p>
        </div>
      </div>
    </div>

    <div v-if="isCategory" class="category-drop-down">
      <div
        v-for="(parent, index) in getCategories"
        :key="index"
        class="search-category-dropdown-parent"
      >
        <ul>
          <li
            class="search-category-dropdown-parent-category"
            @click="selectCategory(parent.category_slug)"
          >
            {{ parent.category_name }}
          </li>
        </ul>
        <ul v-for="(item, index) in parent.sub_categories" :key="index">
          <li
            class="search-category-dropdown-sub-category"
            @click="selectCategory(item.category_slug)"
          >
            {{ item.category_name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      isCategory: false,
      searchObject: {
        enteredText: "",
        selectedCategory: "",
      },
    };
  },
  computed: {
    ...mapGetters(["getCategories"]),
  },
  created() {
    this.$store.dispatch("fetchCategories");
  },
  methods: {
    ...mapActions([
      "fetchCategories",
      "category",
      "grandFilter",
      "fetchFilters",
      "searchKey",
    ]),
    selectCategory(payload) {
      this.isCategory = false;
      this.category(payload);
      this.grandFilter();
      this.fetchFilters();
      this.searchObject.enteredText = "";
      this.searchObject.selectedCategory = "";
    },
    selectedCategoryFunction(event) {
      this.searchObject.selectedCategory = event.target.value;
    },
    submitSearch() {
      this.searchKey(this.searchObject);
      this.grandFilter();
      this.fetchFilters();
    },
    zikTest(){
      console.log(this.$store.getters.getCategories)
    }
  },
};
</script>

<style>
.category-drop-down {
  background-color: #f2f2f2;
  display: flex;
  justify-content: space-between;
}
.category-drop-down ul {
  padding: 0;
  margin: 0;
}
.search-right-responsive {
  display: none;
}
.search-category-dropdown-parent {
  padding: 20px;
}
.search-category-dropdown-parent-category {
  font-size: 14px;
  font-weight: 600;
  list-style-type: none;
  cursor: pointer;
}
.search-category-dropdown-parent-category:hover {
  color: #5cb674;
}
.search-category-dropdown-sub-category:hover {
  color: #5cb674;
}
.search-category-dropdown-sub-category {
  font-size: 15px;
  font-weight: 500;
  list-style-type: none;
  margin-top: 10px;
  cursor: pointer;
}
.search-category-icon {
  font-size: 24px;
  margin-right: 20px;
  color: #57c2d8;
}
.search-left {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.search-parent {
  margin-top: 30px;
  width: 100%;
}
.search-middle-more-categories-responsive {
  display: none;
}
.search-container {
  display: flex;
  justify-content: space-between;
  background-color: #f2f2f2;
  width: auto;
  border-radius: 10px;
  padding: 10px 20px;
  align-items: center;
}
.search-middle-input {
  height: 15px;
  width: 50vw;
  padding: 15px;
  border-radius: 50px;
  font-size: 18px;
  border: 1px solid #c8c5c5;
}
.search-right-button {
  margin-left: 8px;
  border: 1px solid #47b3ca;
  background-color: #47b3ca;
  width: auto;
  padding: 0 20px;
  height: 40px;
  border-radius: 50px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}
.search-select-all-categories {
  margin-left: -250px;
  font-size: 18px;
  background: rgba(0, 0, 0, 0);
  border: none;
}
@media only screen and (max-width: 1100px) {
  .search-left {
    display: none;
  }
  .search-right {
    display: none;
  }
  .search-select-all-categories {
    display: none;
  }
  .search-right-responsive {
    display: block;
  }
  .search-middle-input {
    width: 60vw;
  }
  .search-middle-more-categories-responsive-parent {
    width: 100%;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
  .search-middle-more-categories-responsive {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f2f2f2;
    border-radius: 50px;
    margin-top: 20px;
    width: 80vw;
  }
  .search-right-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search-right-button {
    border: 1px solid #47b3ca;
    background-color: #47b3ca;
    width: auto;
    height: auto;
    border-radius: 50px;
    padding: 5px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }
  .category-drop-down {
    background-color: #f2f2f2;
    display: flex;
    justify-content: space-between;
    overflow-x: scroll;
    margin-top: 10px;
    border-radius: 10px;
  }
  .category-drop-down::-webkit-scrollbar {
    background-color: #dedede;
    width: 5px;
    height: 10px;
    border-radius: 10px;
  }
  .category-drop-down::-webkit-scrollbar-thumb {
    background-color: #5cb674;
    border-radius: 10px;
  }
}
</style>
