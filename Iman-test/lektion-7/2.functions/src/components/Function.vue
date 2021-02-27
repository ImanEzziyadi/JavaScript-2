<template>
  <div>
      <button class="btn" @click="sum++"> add</button>
      <button class="btn"  @click="sum--">sub</button>
      <div>sum: {{sum}}</div>
  </div>
</template>

<script>
export default {
    data() {
        return{
            sum: 35

        }
        
    }

}
</script>

<style>

</style>