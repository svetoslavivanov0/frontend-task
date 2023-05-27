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
        canShowFeedback(state) {
            return state.questions.filter(question => question.selectedAnswer !== null).length;
        }
    },
    mutations: {
        setAnswer(state, { questionId, optionId }){
            const questionToUpdateIndex = state.questions.findIndex(question => question.id === questionId);
            state.questions[questionToUpdateIndex] = {
                ...state.questions[questionToUpdateIndex],
                selectedAnswer: optionId,
            };
        }
    },
    actions: {
        submitQuestion({commit}, answer) {
            commit('setAnswer', answer);
        }
    }
});

export default store;
