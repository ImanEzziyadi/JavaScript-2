<template>
  <div class="container mt-5">
    <div class="border round p-5">
     <h1>{post.{title}}</h1>
     <p>{{post.body}}</p>
    </div>
   </div>
  
</template>

<script>
import { mapActions , mapGetters } from 'vuex'
export default {
    methods: {
        ...mapActions(['getPost'])
    },
    computed:{
         ...mapGetters(['post'])

    },

    created() {
        this.getPost(this.$route.params.id)
    }

}
</script>

<style>

</style>