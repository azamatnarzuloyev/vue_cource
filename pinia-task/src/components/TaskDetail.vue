<template>
   
    <div class="task">
        <h1> {{ task.title }} </h1>
        <div class="icons">
            <i class="material-icons" @click="taskStore.deletetask(task.id)" > delete</i>
            <i class="material-icons" @click="taskStore.toggleFav(task.id)" :class="{active:task.completed}"> favorite</i>
        </div>
    </div>
</template>

<script>
import { useTaskStore } from '@/stores/TaskStore';
import {ref } from 'vue';

    export default {
    props: ["task", 'color'],

    setup() {
        const taskStore = useTaskStore()
        return {taskStore }

    }
    }

    
</script> 

<style>
.task i.active {
    color: red;
}

</style>