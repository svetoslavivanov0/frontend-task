<template>
  <div class="page">
    <h2>Questionnaire</h2>

    <ol class="entries" v-if="questions.length">
      <question
          v-for="question in questions"
          :key="question.id"
          :question="question"
          :disabled="!!question.selectedAnswer"
      />
    </ol>

    <router-link
        class="button"
        v-if="canShowFeedback"
        to="/feedback"
    >
      View Feedback
    </router-link>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import Question from '../components/Question.vue';

export default {
  name: 'HomeComponent',
  components: {
    Question,
  },
  setup() {
    const store = useStore();
    const submittedAnswers = computed(() => store.getters.selectedAnswers);


    return {
      submittedAnswers,
      canShowFeedback: computed(() => store.getters.canShowFeedback),
      questions: computed(() => store.state.questions),
    }
  }
}
</script>

<style scoped>

</style>