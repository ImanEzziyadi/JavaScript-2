<template>
  <div>
   
   <navbar />
   <app-footer />
    <router-view/>
  </div>
</template>
<script >
import Navbar from './components/navigation/Navbar'
import AppFooter from './components/navigation/Footer'

export default{
  components: {
    Navbar,
    AppFooter
  }
}
</script>


<style>

</style>
