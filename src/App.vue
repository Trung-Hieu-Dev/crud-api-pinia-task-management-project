<template>
    <main>
        <!-- heading -->
        <header>
            <img src="./assets/pinia-logo.svg" alt="pinia-logo" />
            <h1>{{ name }} Task</h1>
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

        <div class="loading" v-if="loading">Loading tasks...</div>

        <!-- task list -->
        <div class="task-list" v-if="filter === 'all'">
            <h3>All Tasks</h3>
            <p>You have {{ totalCount }} tasks to do</p>
            <div v-for="task in tasks">
                <TaskDetails :task="task" />
            </div>
        </div>

        <div class="task-list" v-if="filter === 'fav'">
            <h3>Favorite Tasks</h3>
            <p>You have {{ favCount }} tasks to do</p>
            <div v-for="task in favs">
                <TaskDetails :task="task" />
            </div>
        </div>

        <!-- Reset state -->
        <button @click="taskStore.$reset">Reset State</button>
    </main>
</template>

<script>
import { ref } from 'vue';
import { useTaskStore } from './stores/TaskStore';
import TaskDetails from './components/TaskDetails.vue';
import TaskForm from './components/TaskForm.vue';
import { storeToRefs } from 'pinia';

export default {
    components: {
        TaskDetails,
        TaskForm,
    },
    setup() {
        const taskStore = useTaskStore();

        const { name, loading, totalCount, tasks, favCount, favs } =
            storeToRefs(taskStore);

        //fetch tasks
        taskStore.getTasks();

        const filter = ref('all');

        return {
            taskStore,
            filter,
            name,
            loading,
            totalCount,
            tasks,
            favCount,
            favs,
        };
    },
};
</script>
