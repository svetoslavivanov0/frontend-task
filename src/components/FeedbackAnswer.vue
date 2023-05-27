<template>
  <div>
    <b>{{ question.title }}</b>

    <p v-if="question.selectedAnswer">Correct answer - {{ getCorrectAnswerText }}</p>

    <span v-if="question.selectedAnswer">{{ question.correctAnswer === question.selectedAnswer ? 'Correct' : 'Wrong' }}</span>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'FeedbackAnswer',
  props: {
    question: {
      type: Object,
      required: () => true,
    },
  },
  setup(props) {
    const getCorrectAnswerText = computed(() => {
      const correctAnswer = props.question.options.find(answer => answer.id === props.question.correctAnswer);

      return correctAnswer.text;
    });

    return {
      getCorrectAnswerText
    }
  }
}
</script>

<style scoped>

</style>