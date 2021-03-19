<template>
  <div>
    <button class="btn">ADD</button>
    <button class="btn">SUB</button>
     <div class="grid"> 
       
       <product-card v-for="product in products" :key="product.id" class="card" :product ="product"/>
      </div>
  </div>

</template>

<script>
import ProductCard from './ProductCard'
import {mapActions, mapGetters} from 'vuex'
export default {
  components: {
    ProductCard
  },
   data() {
    return {
     
     }
    },

}
</script>

<style scoped>
.grid{
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, ifr));
  gap: 3rem;
}
.card{
  background: rgb(22, 78, 78);
  color: white ;
}

</style>