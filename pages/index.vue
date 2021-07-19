<template>
  <div class="main_container flex flex-col h-screen justify-between">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Main from "../components/Main.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<style>
</style>