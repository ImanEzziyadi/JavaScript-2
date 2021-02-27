<template>
<div>
  <div class="container">
    <h1 v-if ="name==='Iman'"> Hello {{name}}</h1>
  </div>
  <navbar />
  <appForm />
</div>
 </template>

<script>
    import Navbar from './components/Navbar'
    import AppForm from './components/Form'
    export default {
   name: 'App',
   components: {
    Navbar,
     AppForm
   
  },
   data(){
     return {
       name: 'Iman'
     }

   }
}
</script>

<style>
.container {
  padding: auto; 
}
</style>
