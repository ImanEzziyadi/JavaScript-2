<template>
<div>
  <div class="d-flex  justify-content-between  align-items-center  border p-2 bg-white mt-2 ">
   <p class="p-3" :class="{done: todo.completed}" @click="todo.completed=!todo.completed"> {{todo.title}}</p>
   <button class="btn btn-danger px-3" @click="$emit('delete-todo', todo.id)"> X</button>
  </div>
   </div>
</template>

<script>
export default {
    props: ['todo']

}
</script>

<style scoped>
p {
    margin: 0;
    cursor:pointer;
    flex: 1;
}
.done {
    text-decoration : line-through; 
    color: #bbb;
}


</style>