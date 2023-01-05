<template>
  <Header></Header>
  
  <div class="intro-y box1 mb-10 p-5 md:w-3/4 mx-auto gap-6 h-full mt-10">
    <br/>
    <br/>
    <div class="intro-y items-center mt-8">
    <h2 class="text-3xl font-medium space large-tittle leading-none mt-3 text-center">Training </h2>
    <div class="saprater"></div>
    
    
  </div>
  <p class="space text-base text-center mt-4 ">Welcome to the Modula Training page. <br/><br/>  Please follow the links below to access our training products.
</p>
     <p class="space text-base text-center mt-4 ">Modula Academy --- <a href="https://www.modulaacademy.com" target="_blank">https://www.modulaacademy.com</a>
<br/>
<br/>
Stormwind Studios --- <a href="https://app.stormwindstudios.com" target="_blank">https://app.stormwindstudios.com</a>
<br/>
<br/>
<br/>
<br/>
<br/>
</p>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Header from "../../global-components/Header/Main.vue";
onMounted(() => {
  dom("body").removeClass("main").removeClass("error-page").removeClass("login").removeClass("landing").addClass("forms");
});
</script>
