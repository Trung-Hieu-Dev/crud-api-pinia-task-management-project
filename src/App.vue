<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia-logo">
      <h1>{{ taskStore.name }} Task</h1>
    </header>

    <!-- task form -->
    <div class="new-task-form">
      <TaskForm />
    </div>

    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">All Task</button>
      <button @click="filter = 'fav'">Favorite Task</button>
    </nav>

    <!-- task list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ taskStore.totalCount }} tasks to do</p>
      <div v-for="task in taskStore.tasks">
        <TaskDetails :task="task" />
      </div>
    </div>

    <div class="task-list" v-if="filter === 'fav'">
      <p>You have {{ taskStore.favCount }} tasks to do</p>
      <div v-for="task in taskStore.favs">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from 'vue';
import  { useTaskStore } from './stores/TaskStore';
import TaskDetails from './components/TaskDetails.vue';
import TaskForm from './components/TaskForm.vue';

  export default {
    components: {
      TaskDetails,
      TaskForm
    },
    setup() {
      const taskStore = useTaskStore();

      const filter = ref('all');

      return {
        taskStore, filter
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>