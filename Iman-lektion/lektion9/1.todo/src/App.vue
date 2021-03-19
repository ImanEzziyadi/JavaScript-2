<template>
  <div class="bg-light">
    <Header title=" TODOS by Iman"/>
    <add-todo @addTodo="add" @sort="sortTodos"   />
     <div class="container py-5">
       <todos :value="sort" :todos="todos"  @delete-todo="deleteTodo" />
     </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos/Todos'
// import { v4 as uuidv4 } from 'uuid';
export default {
  name: 'App',
  components: {
    Header,
    AddTodo,
    Todos
  },
  data() {
    return {
      // todos:[
      //    { _id: '1', title: 'Todo item one', completed: true },
      //   { _id: '2', title: 'Todo item two', completed: false },
      //    { _id: '3', title: 'Todo item three', completed: true},
      //    { _id: '4', title: 'Todo item four', completed: false },
      //    { _id: '5', title: 'Todo item five', completed: false },
    
    
      // ],
        todos: [],
      sort:''
    }

  },
  methods: {
    deleteTodo(id) {
      // this.todos = this.todos.filter(todo => todo.id !== id)
       fetch(`http://localhost:3000/todos/${id}`, {
        method: 'DELETE'
      })
      .then(res => {
        if(res.status === 200) {
          this.fetchTodos()
        }
      })

    },

 
   add(title) {
    
    //   let todo = {
    //      id: uuidv4(),
    //      title: title,
    //      completed: false
    //    }
    //   this.todos.unshift(todo)
   
   fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
          title,
          completed: false
        })
      })
      .then(res => {
        if(res.status === 201) {
          this.fetchTodos()
        }
      })

    },
    sortTodos(val){
      switch(val) {
        case 'false':
          this.sort = false
          break;
        case 'true':
          this.sort = true
          break;
        default:
          this.sort = ''
      }
    },
    fetchTodos() {
      fetch('http://localhost:3000/todos')
        .then(res => res.json())
        .then(data => {
          this.todos = data
        })
    }
  },
  created() {
    this.fetchTodos()
  }
}
  


</script>

<style>


</style>
