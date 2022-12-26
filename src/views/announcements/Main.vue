<template>
  <Header></Header>
  
  <div class="intro-y box1 p-5 md:w-3/4 mx-auto gap-6 mt-5">
    <div class="w-full sm:w-auto flex justify-end mt-4 sm:mt-0">
      <a href="/post" class="btn btn-dark space shadow-md mr-2">Add New Announcements/News</a>
    </div>
    <div class="intro-y items-center mt-8">
    <h2 class="text-3xl font-medium space large-tittle leading-none mt-3 text-center">Announcements/News </h2>
    <div class="saprater"></div>
  </div>
     <p class="space text-base mt-4 ">⦁	Company Town Hall with CEO, Antonio Pagano, is scheduled for November 11, 2022 at 11AM EST in the Franklin Auditorium.  Links will be provided via email the day prior to the event.  For those unable to attend, we will have a recording of the Town Hall available for viewing.
<br/>
<br/>
⦁	The Customer Service Department has completed their move in the Franklin plant.
<br/>
<br/>
⦁	The IT Department has completed planning for wireless infrastructure upgrades for 2023.  Modula will be upgrading Wi-Fi speed and capacity!
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
