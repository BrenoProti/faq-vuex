<template>
  <div class="answer">
    <header class="header">
      <div class="header__answer">
        <button class="back-btn" @click="backPage()">
          <img src="@/assets/images/arrow-left.svg" alt="Voltar" />
        </button>
        <h1>{{ $getAnswer.title }}</h1>
      </div>
    </header>
    <main class="answer_text">
      <span v-html="$getAnswer.content"> </span>
    </main>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    backPage() {
      this.$store.dispatch('backPage', 'Questions');
    }
  },
  computed: {
    $getAnswer() {
      return this.$store.getters.$getAnswer;
    }
  }
});
</script>

<style scoped>
.header__answer {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 10px;
  padding-bottom: 10px;
}

.answer_text {
  padding: 10px 20px;
  border-top: 1px solid #3f4452;
}

.answer_text span {
  font-size: 13px;
}
</style>
