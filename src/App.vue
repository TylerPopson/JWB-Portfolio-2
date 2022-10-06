<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Banner from './components/Banner.vue';
import About  from './components/About.vue';
import Listen from './components/Listen.vue';
</script>

<template>
  <div id="app" class="scroll-smooth">
    <Navbar />
    <Banner />
    <About />
    <Listen />
  </div>
</template>
