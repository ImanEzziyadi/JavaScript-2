<template>
  <div v-if="users.lenght">
      <div v-for="user in users" :key"user.id" class="card">
      <h3>{{user.name}}</h3>
      <p>{[user.age]}</p>
  </div>
  </div>
  <div v-else>
      <h3>No users register</h3>
</template>

<script>
export default {
    props:['user']

}
</script>
.card{
    broder:
}
<style>

</style>
