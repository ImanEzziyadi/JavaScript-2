<template>
  <div>
    <button  @click="addToPris" class="btn" >ADD</button>
    <button  @click="subPris(5)" class="btn">SUB</button>
     <div class="grid"> 
       
       <product-card v-for="product in prodTax" :key="product.id" class="card" :product ="product"/>
      </div>
  </div>

</template>

<script>
import ProductCard from './ProductCard'
export default {
  components: {
    ProductCard
  },
   // data() {
   //  return {
   //    products: [
   //       { id: 1, name: 'Product 1', price: 200 },
   //     { id: 2, name: 'Product 2', price: 299 },
   //      { id: 3, name: 'Product 3', price: 500 },
   //       { id: 4, name: 'Product 4', price: 100 },
   //      { id: 5, name: 'Product 5', price: 234 },
   //      { id: 6, name: 'Product 6', price: 999 },
   //       { id: 7, name: 'Product 7', price: 222 },
   //      { id: 8, name: 'Product 8', price: 200 },
   //      { id: 9, name: 'Product 9', price: 300 },
   //      { id: 10, name: 'Product 10', price: 400 },
   //       { id: 11, name: 'Product 11', price: 500 },
   //      { id: 12, name: 'Product 12', price: 600 },
   //      { id: 13, name: 'Product 13', price: 700 },
   //       { id: 14, name: 'Product 14', price: 800 },
   //      { id: 15, name: 'Product 15', price: 900 }
   //     ]
   //   }
   //  },
    methods: {
       addToPris() {
          this.$stor.commit('ADD',10)
         //  this.products.forEach(product => {
         //     product.price +=10
             
         //  })
       },
        subPris(amount) {
          this.products.forEach(product => {
             product.price +=amount
             
          })
       },
       computed: {
          products() {
             return this.$stor.state.products
          }
       },
      //  prodTax() {
      //  let taxedProducts = this.$store.state.products.map(product => {
      //   return {
      //     ...product,
      //     name: product.name + ' + tax',
      //     price: Math.round(product.price + product.price * 0.2)
      //  }
      // })

      //  return taxedProducts

      //  }
    }

}
</script>

<style scoped>
.card {
  background: gray;
  color: white ;
  margin: 1rem;
  display: flex;
  justify-content: space-between ;
}

</style>