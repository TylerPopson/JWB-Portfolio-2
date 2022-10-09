<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Banner from './components/Banner.vue';
import About  from './components/About.vue';
import Listen from './components/Listen.vue';
import Contact from './components/Contact.vue'
</script>

<template>
  <div id="app" class="scroll-smooth font-overpassRegular">
    <Navbar />
    <Banner />
    <About />
    <Listen />
    <Contact />
  </div>
</template>

<style>
  @import url('https://fonts.google.com/specimen/Overpass?query=overpass');
</style>