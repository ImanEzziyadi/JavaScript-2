<template>
<div>
  <hero />
  <div class="container mt-5">
    <div class="row">
      <div class="col-6">
       <sign-in />
      </div>
       <div class="col-6">
       <register />
       </div>
  </div>
  </div>
  
</div>
</template>

<script>
import Hero from './components/Hero'
import signIn from './components/signIn'
 import Register from './components/Register'
export default {
  name: 'App',
  components: {
    Hero,
    signIn,
    Register
  }
}
</script>

<style>

</style>
