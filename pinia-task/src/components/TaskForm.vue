<template>
    <form @click.prevent="hundlSubmit">
    <input
    type="text" 
    placeholder="I need to "
    v-model="newTask" 
    >
    <button>Add</button>
    </form>
</template>

<script>
import { useTaskStore } from '@/stores/TaskStore';
import {ref}  from 'vue'
export default {
       setup() {
        const taskStore = useTaskStore()
        const newTask = ref('')
        const hundlSubmit = () =>{
            if (newTask.value.length > 0) {
                 taskStore.addtask({
                    title: newTask.value , 
                    completed:false,
                    id:Math.floor(Math.random *100000)
                 }),
                 newTask.value =""
            }
          
        }
        return { hundlSubmit , newTask  }
       }
    }
</script>  