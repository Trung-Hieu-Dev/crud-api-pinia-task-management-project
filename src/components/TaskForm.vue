<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="I need to..." v-model="newTask" />
        <button>Add Task</button>
    </form>
</template>

<script>
import { ref } from 'vue';
import { useTaskStore } from '../stores/TaskStore.js';

export default {
    setup() {
        const taskStore = useTaskStore();

        const newTask = ref('');

        const handleSubmit = () => {
            if (newTask.value.length > 0) {
                taskStore.addTask({
                    id: new Date().toISOString(),
                    title: newTask.value,
                    isFav: false
                });
            }
            newTask.value = '';
        }

        return {
            handleSubmit, newTask
        }
    }
};
</script>
