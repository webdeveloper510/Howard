<template>
  <Header></Header>
  <div>
    <div class="my-5 intro-y">
      <h2 class="text-3xl font-medium space large-tittle leading-none mt-5 text-center">Corporate Planning Department</h2>
      <div class="saprater"></div>
      <p class=" text-lg mb-3 w-3/4 space text-center mx-auto">Corporate planning is a continuous process in which a company first defines its philosophy, mission and vision in a strategic 
        plan, and then uses that plan to direct, monitor and manage the business. Strategic planning, detailed operational planning and performance monitoring are the three components of corporate planning.</p>
     
      <div class="grid grid-cols-12 gap-6 mt-5">
    <!-- BEGIN: FAQ Menu -->
    <a
      href=""
      class="intro-y col-span-12 lg:col-span-4 box py-10 "
    >
      <div class="text-2xl font-bold space text-center text-base">
        Significance
      </div>
      <div class="text-slate-500 space mt-2 w-3/4 text-center mx-auto">
        Studies prove that companies who do corporate planning perform significantly better than competitors who do not use corporate planning. An annual survey by management consultants Bain and Company continually confirms that executives get more value out of strategic planning than any other management tool.
      </div>
    </a>
    <a href="" class="intro-y col-span-12 lg:col-span-4 box py-10">
      <div class="text-2xl font-bold space text-center text-base">
        Time Frame
      </div>
      <div class="text-slate-500 space mt-2 w-3/4 text-center mx-auto">
        Strategic plans define the long-term vision and once created, plans are typically reviewed every five to ten years. Business departments do detailed planning annually, and operations groups monitor the results throughout the year.
      </div>
    </a>
    <a href="" class="intro-y col-span-12 lg:col-span-4 box py-10 ">

      <div class="text-2xl font-bold text-center space text-base">Benefits</div>
      <div class="text-slate-500 mt-2 w-3/4 space text-center mx-auto">
        Corporate planning gives companies consistent guidelines for making decisions. When there is a crisis, opportunity or gradual evolution of business circumstances, planning helps a company maintain its strategy.
      </div>
    </a>
    <a href="" class="intro-y col-span-12 lg:col-span-6 box py-10 ">

      <div class="text-2xl font-bold text-center space text-base">Considerations</div>
      <div class="text-slate-500 mt-2 w-3/4 space text-center mx-auto">
        Many companies rely on consultants to facilitate planning.
      </div>
    </a>
    <a href="" class="intro-y col-span-12 lg:col-span-6 box py-10 ">
      <div class="text-2xl font-bold text-center space text-base">Expert Insight</div>
      <div class="text-slate-500 mt-2 space w-3/4 text-center mx-auto">
        It's difficult to assess whether the value of corporate planning offsets the cost. The best measure is to study the performance of companies in relevant industries that have adopted planning.
      </div>
    </a>
    <!-- END: FAQ Menu -->
  
  </div>
    </div>
   
  
    
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Header from "../../global-components/Header/Main.vue";

onMounted(() => {
  dom("body").removeClass("main").removeClass("error-page").removeClass("login").removeClass("forms").addClass("landing");
});
</script>
