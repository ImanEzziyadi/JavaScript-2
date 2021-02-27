<template>
  <div>
    <navbar />
    <function />
    <computed />
  </div>
</template>

<script>
import Function from './components/Function'
import Navbar from './components/Navbar'
import Computed from './components/Computed'

export default {
  name: 'App',
  components: {
    Navbar,
    Function,
    Computed
   
  }
}
</script>

<style>

</style>
