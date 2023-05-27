import { createStore } from 'vuex';

// import router from './router';

const store = createStore({
    state: {
        questions: [
            {
                id: 1,
                title: 'Where is Bulgaria located at?',
                options: [
                    { id: 1, text: 'Europe' },
                    { id: 2, text: 'Asia' },
                    { id: 3, text: 'Africa' }
                ],
                correctAnswer: 1,
                selectedAnswer: null,
            },
            {
                id: 2,
                title: 'Where does Manchester United play?',
                options: [
                    { id: 1, text: 'England' },
                    { id: 2, text: 'Spain' },
                    { id: 3, text: 'Netherlands' }
                ],
                correctAnswer: 1,
                selectedAnswer: null,
            },
        ],
    },
    getters: {
        canShowResults () {
            return false;
        },
        selectedAnswers() {
            return [];
        }
    },
    mutations: {
    },
    actions: {
        submitQuestion() {
            alert();
        }
    }
});

export default store;
