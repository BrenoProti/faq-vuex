<template>
  <div class="category-question">
    <header class="header">
      <button class="back-btn" @click="backPage()">
        <img src="@/assets/images/arrow-left.svg" alt="Voltar" />
      </button>
      <div class="header__tex">
        <h1>{{ $getQuestions.title }}</h1>
        <h2>Selecione uma pergunta</h2>
      </div>
      <img
        class="icon"
        :src="require(`@/assets/images/${$getQuestions.icon}`)"
        alt="Icon"
      />
    </header>
    <main class="questions">
      <ul>
        <li
          v-for="question in $getQuestions.questions"
          :key="question.id"
          class="item-list"
          @click="selectQuestion(question.id)"
        >
          {{ question.title }}
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  computed: {
    $getQuestions() {
      return this.$store.getters.$getQuestions;
    }
  },
  methods: {
    backPage() {
      this.$store.dispatch('backPage', 'Categories');
    },
    selectQuestion(id) {
      this.$store.dispatch('setAnswer', id);
    }
  }
});
</script>

<style scoped>
.header {
  grid-template-columns: repeat(3, auto);
  grid-gap: 10px;
  padding-bottom: 10px;
}

.questions {
  padding-top: 10px;
  border-top: 1px solid #3f4452;
}
</style>
