<template>
  <div>
    <MobileMenu />
    <div
      class="border-b border-white/[0.08] mt-[2.2rem] md:-mt-5 -mx-3 sm:-mx-8 px-3 sm:px-8 pt-3 bg-blue-800 mb-1"
    >
      <div class="top-bar-boxed flex items-center my-4">
        <!-- BEGIN: Logo -->
        <router-link
          :to="{ name: 'side-menu-dashboard-overview-4' }"
          tag="a"
          class="-intro-x hidden md:flex"
        >
          <img
            class="h-16"
            alt="Midone Tailwind HTML Admin Template"
            src="https://www.cognitoforms.com/file/PY98Tpd3p2cUH_ojupJJzh6dKQWEicACg9A7BuMhySwbN2I0NPclvU6pOcXxgN0-"
          />
          
        </router-link>
        <!-- END: Logo --> 
        <!-- BEGIN: Account Menu -->
        <router-link
          :to="{ name: 'side-menu-dashboard-overview-4' }"
          tag="a"
          class="-intro-x hidden md:flex ml-auto"
        >
        <button class="btn box  mr-2 mb-2">
                <UserIcon class="w-4 h-4 mr-2" /> Login
              </button>
          
        </router-link>
        <!-- END: Account Menu -->
      </div>
    </div>
    <div class="-mx-5">
      <div class=" pb-8">
              <TinySlider
                :options="{
                  mode: 'gallery',
                  controls: true,
                  nav: true,
                  speed: 500,
                }"
              >
                <div class="h-[500px] px-2">
                  <div class="h-full image-fit rounded-md overflow-hidden">
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      :src="$f()[0].images[0]"
                    />
                  </div>
                </div>
                <div class=" h-[500px] px-2">
                  <div class="h-full image-fit rounded-md overflow-hidden">
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      :src="$f()[1].images[1]"
                    />
                  </div>
                </div>
                <div class=" h-[500px] px-2">
                  <div class="h-full image-fit rounded-md overflow-hidden">
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      :src="$f()[2].images[2]"
                    />
                  </div>
                </div>
              </TinySlider>
            </div>
    </div>
    <div class="">
      <h2 class="text-3xl font-medium leading-none mt-3">Services Us</h2>
      <div class="intro-y grid grid-cols-12 gap-6 mt-5">
        <div class="col-span-7">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
            </p>
        </div>
      </div>
      <div class="intro-y grid grid-cols-12 gap-6 mt-5">
        <div class="col-span-4 cursor-pointer zoom-in box p-5">
          <h2 class="text-3xl font-medium text-center leading-none mt-3 mb-3">Services Us</h2>
          <p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
            </p>
        </div>
        <div class="col-span-4 cursor-pointer zoom-in box p-5">
          <h2 class="text-3xl font-medium text-center leading-none my-3">Services Us</h2>
          <p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
            </p>
        </div>
        <div class="col-span-4 cursor-pointer zoom-in box p-5">
          <h2 class="text-3xl font-medium text-center leading-none my-3">Services Us</h2>
          <p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
            </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import DarkModeSwitcher from "@/components/dark-mode-switcher/Main.vue";
import dom from "@left4code/tw-starter/dist/js/dom";

onMounted(() => {
  dom("body").removeClass("main").removeClass("error-page").addClass("landing");
});
</script>
