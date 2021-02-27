<template>
  <div>
      <label for="name">Name :</label>
      <input  :class="hasError ? {error: true }: {success: true}" type="text" id="name">
  </div>
</template>

<script>
export default {
    data(){
        return{
          hasError : false 
        }
    }

}
</script>

<style scoped>
label{
    padding: 0.5rem 0 ;
}
input{
    padding: 0.5rem 0 ;
}
.error{
    border: 2px solid rgb(128, 15, 0);
}
.success{
    border: 2px solid green;
}
</style>
