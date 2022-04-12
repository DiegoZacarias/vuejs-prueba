<template>
  <div> these are the categories </div>
  <div v-if="error" class="bg-red-100">
    {{ error }}
  </div>
  <div v-if="categories.length" class="mx-32">
    <input type="text" v-model="searchTerm" class="bg-blue-100 w-full h-10 p-2">
    <span>Search term: {{ searchTerm == '' ? '-' : searchTerm }}</span>
    <!-- <div v-for="category in categories" :key="category.id"> -->
    <div v-for="category in filteredCategories" :key="category.id">
      <div class="my-10 w-full flex flex-col justify-center">
        <CategoryCard class="mt-4" :category="category"/>
      </div>
    </div>
  </div>
  <div v-else> 
    at this moment there are no categories, please wait a minute or so...
  </div>
	
</template>

<script>
import { computed, ref } from 'vue'
import CategoryCard from './../components/CategoryCard.vue'
import getCategories from './../composables/getCategories'

export default {
  name: 'Categories',
  components: {
    CategoryCard
  },
  setup() {
    const searchTerm = ref('')
    const { categories, error, load } = getCategories();
    load();

    const filteredCategories = computed(() => {
      return categories.value.filter(category => {
        return category.name.toLowerCase().includes(searchTerm.value.toLowerCase())
      })
    });


    return { categories, error, searchTerm, filteredCategories }
  }
}
</script>
