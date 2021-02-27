<template>
  <div class="container">
      <button @click="a++">lägg till på A</button>
      <button @click="b++">lägg till på B</button>
      <p>Number är {{number}}</p>
      <p> A= {{a}}</p>
      <p> B= {{b}}</p>
      <br>
      <p>number + A = {{addA}}</p>
      <p>number + B = {{addB}}</p>
      
  </div>
</template>

<script>
export default {
    data(){
        return{
            number: 30,
            a:0,
            b:0
        }
    },
    computed: {
         addA() {
        return this.number+ this.a
    },
    addB() {
        return  this.number+ this.b
    }

    }
   
   

}

</script>

<style>


</style>