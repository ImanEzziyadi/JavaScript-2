<template>
  <div id="app">
     </div>
     <loop : "names" />

</template>

<script>
import Loop from './components/Loop'
import Users from './components/Users.vue'

export default {
  name: 'App',
  components: {
    Loop,
    Users
  },
  data()  {
    return{
      names:['Iman','omar']
    }
  }

  }
</script>

<style>

</style>
