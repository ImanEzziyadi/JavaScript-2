<template>
<div class="card">
    <p>ID: {{product.id}} </p>
     <p>NAME: {{product.name}} </p>
      <p>PRICE: {{product.price}} </p>
</div>
  
</template>

<script>

export default {
    props: ['product']

}
</script>

<style scoped>
.card {
    border: 1px solid black;
    border-radius: 5px;
    padding: 2rem;
}


</style>