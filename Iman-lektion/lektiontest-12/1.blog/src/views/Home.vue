<template>
  <div>
    <h1 class="mt-5">MY POSTS </h1>
   <div class="container mt-5">
      <input type="text" placeholder="search" class="form-control mt-5" v-model="search">
    
    <post  v-for="post in posts" :key="post.id" :post='post' />
    
    </div>



  </div>
</template>

<script>
import Post from '../components/Post.vue'
import { mapActions,mapGetters } from 'vuex'

export default {
  name: 'Home',
   
  data() {
    return {
    search: ''
    }

  },
  computed: {
    ...mapGetters(['posts'])


  },
  methods:{
    ...mapActions(['getPosts'])

  },
  mounted() {
    this.getPosts()
  }


}
</script>
