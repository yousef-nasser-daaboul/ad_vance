<template>
  <div class="min-h-screen">
    <Header />
    <main>
      <Home />
      <Features />
      <Services />
      <ForDeveloper />
      <!-- <About /> -->
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/landing/Header.vue";
import Home from "@/components/landing/Home.vue";
import Services from "@/components/landing/Services.vue";
import Features from "@/components/landing/Features.vue";
import Contact from "@/components/landing/Contact.vue";
// import About from "@/components/landing/About.vue";
import Footer from "@/components/landing/Footer.vue";
import ForDeveloper from "~/components/landing/ForDeveloper.vue";
</script>
