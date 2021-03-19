{<template>
  <div>
      <button class="btn btn-sm btn-primary" :class="loginClasses"     @click="change('Login')">Login</button>
      <button class="btn btn-sm btn-outline-primary" :class="registerClasses" @click="change('Signup')">Register</button>
     <keep-alive>
     <component :is="comp" />
     </keep-alive>
  </div>
</template>

<script>
import Login from './Login'
import Signup from './Signup'
export default {
    components: {
        Login,
        Signup
    },
    data() {
        return {
        comp: 'Login',
        login: true,
        register: false
     }
    },
    methods: {
    change(val) {
      this.comp = val
      if(val === 'Login') {
        this.login = true
        this.register = false
      } else {
         this.login = false
         this.register = true
      
         }
     },
        registerClasses() {
            return {
                'btn-primary': this.register,
                  'btn-outline-primary': !this.register
            }
        }

    }

}
</script>

<style>

</style>}