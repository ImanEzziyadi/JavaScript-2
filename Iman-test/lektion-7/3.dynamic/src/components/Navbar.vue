<template>
<div>
  <nav>
     <h3> Dynamic Klassar</h3>
    </nav>
    <div @click="available=!available " :class="{className: available}">
       <span> Iman </span>
    </div>
</div>
</template>

<script>
export default {
    data () {
        return {
          available: true  

        }
    }

}
</script>

<style scoped>
nav {
     background-color:rgb(58, 9, 9);
    color: white ;
    padding: 1rem ;
}
.className span {
    background: green;
}

</style>