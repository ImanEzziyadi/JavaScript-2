
import axios from 'axios'
export default { 
    state: {
        posts: [],
        post: null ,
        searchVal:''
        
    },
    getters:{
        posts: state => state.posts ,
        post: state => state.post

    },
    mutations: {
        SET_POSTS: (state, posts) => {
            state.posts = posts
        },
        SET_POST: (state, post) => {
            state.post = post
        },
        SEARCH: (state, val) => {
            state.searchVal = val
        },

    },
    actions: {
        getPosts: async({commit}) => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            commit('SET_POSTS', res.data)
          },
          getPost: async({commit}) => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts' + id)
            commit('SET_POST', res.data)
          },
          search: ({commit}, val) => {
            commit('SEARCH', val)
          }
        }
     }

  


