import { createStore } from 'vuex';

import router from './router';

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
            {
                id: 3,
                title: 'Which country has the biggest population?',
                options: [
                    { id: 1, text: 'China' },
                    { id: 2, text: 'India' },
                    { id: 3, text: 'Russia' }
                ],
                correctAnswer: 1,
                selectedAnswer: null,
            },
            {
                id: 4,
                title: 'What is the capital of Spain?',
                options: [
                    { id: 1, text: 'Madrid' },
                    { id: 2, text: 'Barcelona' },
                    { id: 3, text: 'Valencia' }
                ],
                correctAnswer: 1,
                selectedAnswer: null,
            },
            {
                id: 5,
                title: 'What is the name of Manchester United\'s stadium?',
                options: [
                    { id: 1, text: 'Old Trafford' },
                    { id: 2, text: 'Stamford Bridge' },
                    { id: 3, text: 'Etihad' }
                ],
                correctAnswer: 1,
                selectedAnswer: null,
            },
            {
                id: 6,
                title: 'Which is one the most famous sports?',
                options: [
                    { id: 1, text: 'Football' },
                    { id: 2, text: 'Chess' },
                    { id: 3, text: 'Handball' }
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
        },
        reset(state) {
            state.questions = state.questions.map((question) => {
                return {
                    ...question,
                    selectedAnswer: null,
                }
            });

            router.push('/');
        }
    },
    actions: {
        submitQuestion({commit}, answer) {
            commit('setAnswer', answer);
        },
        resetAnswers({commit}) {
            commit('reset');
        }
    }
});

export default store;
