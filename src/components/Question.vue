<template>
  <li
      class="entry"
  >
    <h3>{{ question.title }}</h3>

    <ul class="options">
      <li
          class="option"
          v-for="option in question.options"
          :key="option.id"
      >
        <label>
          <input
              type="radio"
              :name="question.id"
              :value="option.id"
              :checked="question.selectedAnswer === option.id"
              :disabled="disabled"
              v-model="selectedValue"
          />
          {{ option.text }}
        </label>
      </li>
    </ul>
    <button
        class="button"
        :disabled="!selectedValue || disabled"
        @click="confirmAnswer(question)">
      Confirm
    </button>
  </li>
</template>

<script>
/**
 * External dependencies
 */
import { computed, ref } from "vue";
import { useStore } from 'vuex';

export default {
  name: 'QuestionComponent',
  props: {
    question: {
      type: Object,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: () => false,
    }
  },
  setup(props) {
    const store = useStore();
    const submittedAnswers = computed(() => store.getters.selectedAnswers);
    const selectedValue = ref(null);

    const confirmAnswer = () => {
      if (!selectedValue.value) {
        alert('Please select an option');
        return;
      }

      if (confirm('Are you sure about your answer?')) {
        store.dispatch('submitQuestion', {
          questionId: props.question.id,
          optionId: selectedValue.value,
        })
      }
    };

    return {
      selectedValue,
      submittedAnswers,
      confirmAnswer
    }
  }
}
</script>

<style scoped>

</style>