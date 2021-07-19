<template>
    <div class="main_container">
      <Header />
      <Tab />
      <Footer />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Tab from '../components/Tab.vue'
export default {

  components: {
    Header,
    Footer,
    Tab,
  }

}
</script>

<style>

</style>