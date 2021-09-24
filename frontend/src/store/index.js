import { createStore } from 'vuex';
import { faqCategories } from '../utils/db.json';

export default createStore({
  state: {
    categories: [],
    questions: {},
    answer: {},
    component: 'Categories'
  },
  mutations: {
    SET_COMPONENT(state, component) {
      state.component = component;
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    SET_QUESTIONS(state, questions) {
      state.questions = questions;
    },
    SET_ANSWER(state, answer) {
      state.answer = answer;
    }
  },
  actions: {
    fetchCategories(context) {
      context.commit('SET_CATEGORIES', faqCategories);
    },
    setQuestions(context, id) {
      const questions = this.state.categories.find((item) => item.id === id);
      context.commit('SET_QUESTIONS', questions);
      context.commit('SET_COMPONENT', 'Questions');
    },
    setAnswer(context, id) {
      const answer = this.state.questions.questions.find(
        (item) => item.id === id
      );
      context.commit('SET_ANSWER', answer);
      context.commit('SET_COMPONENT', 'Answer');
    },
    backPage(context, component) {
      context.commit('SET_COMPONENT', component);
    }
  },
  getters: {
    $allCategories(state) {
      return state.categories;
    },
    $getQuestions(state) {
      return state.questions;
    },
    $getAnswer(state) {
      return state.answer;
    },
    $getComponent(state) {
      return state.component;
    }
  }
});
