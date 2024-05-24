<template>
  <div>
    <header>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Pinialogo.svg/800px-Pinialogo.svg.png" alt="" width="100" height="100">
   
    </header>
    <!-- {{ taskStore.getapirequest }} -->

  
    <!-- new task form  -->
   <div class="new-task-form">
    <TaskForm />
   </div>
    <!-- filter -->
  <nav class="filter">
    <div>  </div>
    <button @click="filter='all'"> all task</button>
    <button @click="filter='favs'"> Favs task</button>

  </nav>
    <!-- end filter -->
    <!-- all task -->
    <div class="task-list" v-if="filter==='all'">
      <p>  Your have {{ taskStore.totalCount }} Task lef to do </p>
      <div v-for="task in taskStore.tasks">
         <TaskDetail  :task="task"/>
      </div>
    </div>
    <!-- fav tast -->
    <div class="task-list" v-if="filter==='favs'">
      <p>  Your have {{ taskStore.favCount }} Task lef to do </p>
      <div v-for="task in taskStore.favs">
         <TaskDetail  :task="task" :color="true"/>
      </div>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from './stores/TaskStore';
import TaskDetail from './components/TaskDetail.vue';
import TaskForm from './components/TaskForm.vue';
export default {
  data() {
    return {
      filter: 'all'
    }
  },
  components: {TaskDetail , TaskForm},
  setup() {
    const taskStore = useTaskStore();
    taskStore.getapirequest();
  
    return {taskStore, }
  }
}

</script>