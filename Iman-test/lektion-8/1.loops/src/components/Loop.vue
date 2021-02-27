<template>
  <div>
      <div v-if="name.lenght> 0">
          <p v-for="(name, index) in names": key="index">
Name nr :
  </div>
 
 </template>

<script>
export default {
props:['names']
}
</script>

<style>

</style>