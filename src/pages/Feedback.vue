<template>
  <div class="page">
    <h2>Answers</h2>

    <div>
      <feedback-answer
          :key="question.id"
          :question="question"
          v-for="question in questions"
      />

      <a href="#" @click.prevent="reset">Reset</a>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import FeedbackAnswer from '../components/FeedbackAnswer.vue';

export default {
  name: 'FeedbackComponent',
  components: {
    FeedbackAnswer,
  },
  setup() {
    const store = useStore();

    const reset = () => {
      store.dispatch('resetAnswers');
    };

    return {
      reset,
      questions: computed(() => store.state.questions)
    }
  }
}
</script>

<style scoped>

</style>