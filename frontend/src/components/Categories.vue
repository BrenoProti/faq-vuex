<template>
  <div class="category">
    <header class="header">
      <img src="@/assets/images/astronaut.svg" alt="" />
      <div class="header__text">
        <h1>Perguntas frequentes</h1>
        <h2>Escolha a categoria desejada</h2>
      </div>
    </header>
    <main class="categories">
      <ul>
        <li
          v-for="category in $allCategories"
          :key="category.id"
          class="item-list"
          @click="selectCategory(category.id)"
        >
          <img
            :src="require(`@/assets/images/${category.icon}`)"
            alt="Icone"
            class="icon"
          />
          {{ category.title }}
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  created() {
    this.$store.dispatch('fetchCategories');
  },
  computed: {
    $allCategories() {
      return this.$store.getters.$allCategories;
    }
  },
  methods: {
    selectCategory(id) {
      this.$store.dispatch('setQuestions', id);
    }
  }
});
</script>

<style scoped>
.header__text {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 5px;
}
</style>
