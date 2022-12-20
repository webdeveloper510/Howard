<template>
    <Header></Header>
   
  </template>
  

  
  <script setup>
  import dom from "@left4code/tw-starter/dist/js/dom";
  import { onMounted } from "vue";
  import Header from "../../global-components/Header/Main.vue";
  onMounted(() => {
    dom("body").removeClass("main").removeClass("error-page").removeClass("login").addClass("landing");
  });
  
  </script>
  