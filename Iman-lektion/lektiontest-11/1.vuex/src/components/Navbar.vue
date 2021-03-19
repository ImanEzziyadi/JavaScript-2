<template>
<nav>
    <router-link to="/" class="logo">LOGO</router-link>
    <div>
         <router-link to="/exact" class="link" exact>Home</router-link>
          <router-link to="/about" class="link" exact>About</router-link>
           <router-link to="/products" class="link" exact>Products</router-link>
    </div>
</nav>
  
</template>

<script>
export default {

}
</script>

<style scoped>
nav {
    display :flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(19, 1, 1, 0.767);
    color: blanchedalmond;
}
 .logo {
    text-decoration: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
     color: white;
}
.link {
    color: white;
    text-decoration: none;
    display: inline-block;
    padding: 1rem 1.5rem;
    position: relative;
}
.link:hover{
    color: #a5a5a5;
}
.link.router-link-active::after {
    content: '';
      position: absolute;
    border-bottom: 1px solid blue;
    left: 1rem;
    right: 1.7rem;
    bottom: 1rem;
  
    

}


</style>
