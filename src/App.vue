<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavMenu from './components/NavMenu.vue'
import TopNav from './components/TopNav.vue'
import Footer from './components/Footer.vue';
import LoginView from "./components/LoginView.vue";
</script>

<template>
  <template v-if="getAuth() == true">
    <header class="pt-3">
      <nav>
        <TopNav />
        <NavMenu />
      </nav>
    </header>
    <div class="container">
      <RouterView />
    </div>
    <footer>
      <Footer />
    </footer>
  </template>
  <template v-else>
    <LoginView />
  </template>
</template>

<style scoped></style>

<script>
import { IS_USER_AUTHENTICATED } from "./store/storeconstants";

export default {
  methods: {
    getAuth() {
      return this.$store.getters[`auth/${IS_USER_AUTHENTICATED}`]
    },
  }
}
</script>

