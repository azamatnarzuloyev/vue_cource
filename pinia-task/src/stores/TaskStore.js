import { defineStore } from "pinia";

export const useTaskStore = defineStore('TaskStore',{
 state: () =>({
    tasks: [],
    name: null,
    isloading: false
 }),
 getters: {
    favs() {
        return this.tasks.filter(t => t.completed )
    },
    favCount() {
        return this.tasks.reduce((p, c) =>{
            return c.completed ? p +1 :p
        },0)
    },
    totalCount: (state) =>{
        return state.tasks.length
    }
 },
 
 actions: {
    async getapirequest(){
        this.isloading =true; 
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/?page=1')
        const data = await res.json()
        this.tasks = data
        this.isloading =false



    },

    addtask(task) {
        this.tasks.push(task)
    },
    deletetask(id) {
        this.tasks = this.tasks.filter(t =>{
           return t.id !== id 
        })
    },
    toggleFav(id) {
        const task = this.tasks.find(t => t.id===id)
        task.completed =  !task.completed

    }
 }
  

})