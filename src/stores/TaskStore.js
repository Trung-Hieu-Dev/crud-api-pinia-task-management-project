import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
    state: () => {
        return {
            tasks: [
                { id: 1, title: 'buy some milk', isFav: false },
                { id: 2, title: 'play Gloomhaven', isFav: true },
            ],
            name: 'Hieu',
        };
    },
});
