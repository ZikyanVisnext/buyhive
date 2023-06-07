<template>
  <div id="app">
    <app-header />
    <app-search />
    <app-below-search />
    <div class="left-right-components">
      <app-left-filter />
      <app-right-products />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Search from './components/Search.vue';
import belowSearch from './components/belowSearch.vue';
import leftFilter from './components/leftFilter.vue';
import rightProducts from './components/rightProducts.vue';

export default {
  components: {
    'app-header': Header,
    'app-search': Search,
    'app-below-search': belowSearch,
    'app-left-filter': leftFilter,
    'app-right-products': rightProducts
  }
}
</script>

<style scoped>
#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 30px 220px;
  padding: 0;
}
.left-right-components{
  display: flex;

}
</style>
