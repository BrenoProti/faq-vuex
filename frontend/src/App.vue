<template>
  <div class="wrapper">
    <div class="container">
      <transition
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
        :appear="true"
        mode="out-in"
      >
        <component class="component" :is="$getComponent"></component>
      </transition>
    </div>
  </div>
</template>

<script>
import Categories from './components/Categories.vue';
import Questions from './components/Questions.vue';
import Answer from './components/Answer.vue';
import 'animate.css';

export default {
  components: { Categories, Questions, Answer },
  computed: {
    $getComponent() {
      return this.$store.getters.$getComponent;
    }
  }
};
</script>

<style lang="css" scoped>
.wraper {
  width: 100vw;
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
}

.component {
  animation-duration: 300ms; /* don't forget to set a duration! */
}
.container {
  width: 305px;
  height: 457px;
  background: linear-gradient(180deg, #3f4452, #26282c);
  border-radius: 30px;
  display: grid;
  align-content: start;
  box-shadow: 0 8px 21px 3px rgb(0 0 0 / 30%);
  padding: 2rem 0.375rem;
  padding-bottom: 0.875rem;
}
</style>
