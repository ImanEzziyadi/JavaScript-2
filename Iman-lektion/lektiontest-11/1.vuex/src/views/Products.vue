<template>
<div class="products">
 <aside>
     <div class="button ">
         <button @click=" comp='Grid'"><i class="fas fa-th-large"></i></button>
         <button @click="comp = 'List'"> <i class="fas fa-list"></i></button>
     </div>
     <br>
     <form>
         <div>
             <input type="text" placeholder="serch...">
         </div>
          </form>
          <br>
           <div>       
             <a href="#">filter</a>
         </div>
 </aside>
 <div class="content">
     <component :is="comp" />
 </div>
</div>
</template>

<script>
import Grid from '../components/Products/Grid'
import List from '../components/Products/List'
export default {
    name: 'Products',
    components :{
        Grid,
        List
    },
    data() {
      return{
         comp: 'Grid'
      }
   }

}
</script>

<style scoped>
.products {
    display: flex;
}
aside {
    flex: 2 ;
    background: grey ;
    padding: 2rem;
    min-height: calc(100vh-66.29px);
}
.content{
    flex: 10 ;
}
a {
    color: white;
}
.button {
    padding: 0.2rem ;
    margin-right: 1rem;
    cursor: pointer;
   
}

</style>