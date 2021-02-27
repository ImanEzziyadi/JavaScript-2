<template>
  
      <nav>
          <h1> Hello World</h1>
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              
          </ul>
      </nav>
  
</template>

<script>
export default {

}
</script>

<style scoped>
nav {
    background-color: rgba(16, 145, 16, 0.274);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
}
ul {
    display: flex;
    list-style: none;
}
a {
    padding: 1rem;
    text-decoration: none;
}
a:höver {
    background-color: grey;
}
</style>