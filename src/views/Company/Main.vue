<template>
  <Header></Header>
  <div class="intro-y grid grid-cols-12 gap-6 p-5 mt-5">
    <div class="col-span-12 md:col-span-6 lg:col-span-6 p-5 box ">
      <h1 class="font-bold text-center text-2xl">VISION</h1>
      <div class="saprater"></div>
      <p class="text-center">To become <b> the benchmark </b> manufacturing company for automated storage and retrieval
        <b> solutions </b> by providing <b> world-class </b> products and services, <b> exceeding expectations </b> of
        associates, partners and end-users.</p>
    </div>
    <div class="col-span-12 md:col-span-6 lg:col-span-6 ">
      <img src="../../assets/images/Vision.png" class="h-40 mx-auto" />
    </div>
    <div class="col-span-12 md:col-span-6 lg:col-span-6 ">
      <img src="../../assets/images/Mission.png" class="h-40 mx-auto" />
    </div>
    <div class="col-span-12 md:col-span-6 lg:col-span-6 p-5 box ">
      <h1 class=" font-bold text-center text-2xl">MISSION</h1>
      <div class="saprater"></div>
      <p class="text-center">Our mission is to optimize the intralogistics of all businesses, regardless of their size
        or industry, by delivering the best automated storage solutions. Our high-tech manufacturing standards reflect
        our commitment to innovation, allowing us to deliver value to our customers worldwide.</p>
    </div>
  </div>

  <div class="intro-y">
    <h1 class="font-bold text-center text-2xl mt-8">Company Values</h1>
    <div class="saprater"></div>
    <div class="intro-y box grid grid-cols-12 gap-6 p-5 mt-5">
      <div class="col-span-12 md:col-span-4 lg:col-span-4 p-5 ">
        <h1 class="font-bold text-left text-2xl">Passion (Appeal)</h1>
        <div class="saprater-left"></div>
        <p class="text-left">⦁ Proud of our work and proud of Modula</p>
        <p class="text-left">⦁ Love what you do</p>
        <p class="text-left">⦁ Positive energy</p>
        <p class="text-left">⦁ Go the extra mile</p>
        <p class="text-left">⦁ Welcoming, engaging environment</p>
      </div>
      <div class="col-span-12 md:col-span-4 lg:col-span-4 p-5 ">
        <h1 class="font-bold text-left text-2xl">Pursuit of Excellence </h1>
        <div class="saprater-left"></div>
        <p class="text-left">⦁ Continuous Improvement – interest and willingness to improve</p>
        <p class="text-left">⦁ Committed and dedicated</p>
        <p class="text-left">⦁ Attention to detail</p>
        <p class="text-left">⦁ Care about your work</p>
        <p class="text-left">⦁ Always try your best to achieve goal</p>
      </div>
      <div class="col-span-12 md:col-span-4 lg:col-span-4 p-5 ">
        <h1 class="font-bold text-left text-2xl">Agility </h1>
        <div class="saprater-left"></div>
        <p class="text-left">⦁ Nimble, Flexible & adaptable</p>
        <p class="text-left">⦁ Embrace change</p>
        <p class="text-left">⦁ Ability to multi-task</p>
        <p class="text-left">⦁ Resilience</p>
        <p class="text-left">⦁ Sense of Urgency</p>
      </div>
      <div class="col-span-12 md:col-span-2 lg:col-span-2 p-5 "></div>
      <div class="col-span-12 md:col-span-4 lg:col-span-4 p-5 ">
        <h1 class="font-bold text-left text-2xl">Accountability </h1>
        <div class="saprater-left"></div>
        <p class="text-left">⦁ Trustworthy: Honest, Ethical, integrity</p>
        <p class="text-left">⦁ Takes personal responsibility</p>
        <p class="text-left">⦁ Reliable; Follows through</p>
        <p class="text-left">⦁ Lead by example</p>
        <p class="text-left">⦁ No excuses; no blaming</p>
      </div>
      <div class="col-span-12 md:col-span-4 lg:col-span-4 p-5 ">
        <h1 class="font-bold text-left text-2xl">Teamwork</h1>
        <div class="saprater-left"></div>
        <p class="text-left">⦁ Proactive and effective communication</p>
        <p class="text-left">⦁ Willing to take on a challenge and help others</p>
        <p class="text-left">⦁ Act with humility</p>
        <p class="text-left">⦁ Respect each other</p>
        <p class="text-left">⦁ Curious, open-minded</p>
        <p class="text-left">⦁ Embrace cultural differences and diversity</p>
      </div>
      <div class="col-span-12 md:col-span-2 lg:col-span-2 p-5 "></div>
    </div>
  </div>

  <div class="intro-y">
    <h1 class="font-bold text-center text-2xl mt-8">Leadership Team</h1>
    <div class="saprater"></div>
    <p class="text-center mt-5">This will be a photo album page. It will list key personnel, their titles and include a
          biography that they will submit for publishing.</p>
        <p class="text-center mb-3">Here are the names of our key personnel:</p>
    <div class="intro-y box grid grid-cols-12 gap-6 p-5 mt-5">
      <div class="col-span-12 md:col-span-12 lg:col-span-12 p-5 ">
     



        <div class="mx-6">
          <TinySlider :options="{
            autoplay: false,
            controls: true,
            items: 1,
            responsive: {
              600: {
                items: 4,
              },
              480: {
                items: 2,
              },
            },
          }">
            <div class=" px-2">
              <div class="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                <img src="../../assets/images/user.jpg" class="h-56 w-full"/>
                <h3 class="font-medium flex items-center justify-center text-2xl">Antonio Pagano </h3>
                <p class="text-center pb-3">CEO</p>
              </div>
            </div>
            <div class=" px-2">
              <div class="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                <img src="../../assets/images/user.jpg" class="h-56 w-full"/>
                <h3 class=" font-medium flex items-center justify-center text-2xl">Tim Becker </h3>
                <p class="text-center pb-3">Director of Human Resources</p>
              </div>
            </div>
            <div class=" px-2">
              <div class="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                <img src="../../assets/images/user.jpg" class="h-56 w-full"/>
                <h3 class="font-medium flex items-center justify-center text-2xl">Steve Miller </h3>
                <p class="text-center pb-3">Director of Finance</p>
              </div>
            </div>
            <div class="px-2">
              <div class="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                <img src="../../assets/images/user.jpg" class="h-56 w-full"/>
                <h3 class="h-full font-medium flex items-center justify-center text-2xl">Rick Havener </h3>
                <p class="text-center pb-3">Director of Sales</p>
              </div>
            </div>
            <div class="px-2">
              <div class="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                <img src="../../assets/images/user.jpg" class="h-56 w-full"/>
                <h3 class="h-full font-medium flex items-center justify-center text-2xl">Giangiacomo Clausi </h3>
                <p class="text-center pb-3">Director of Service</p>
              </div>
            </div>
            <div class="px-2">
              <div class="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                <img src="../../assets/images/user.jpg" class="h-56 w-full"/>
                <h3 class="h-full font-medium flex items-center justify-center text-2xl">David Lind </h3>
                <p class="text-center pb-3">Director of Business Development</p>
              </div>
            </div>
            <div class="px-2">
              <div class="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                <img src="../../assets/images/user.jpg" class="h-56 w-full"/>
                <h3 class="h-full font-medium flex items-center justify-center text-2xl">Valentina Cecchi </h3>
                <p class="text-center pb-3">Director of Marketing</p>
              </div>
            </div>
            <div class="px-2">
              <div class="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                <img src="../../assets/images/user.jpg" class="h-56 w-full"/>
                <h3 class="h-full font-medium flex items-center justify-center text-2xl">Enrico Bondi </h3>
                <p class="text-center pb-3">Director of Operations</p>
              </div>
            </div>
            <div class="px-2">
              <div class="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                <img src="../../assets/images/user.jpg" class="h-56 w-full"/>
                <h3 class="h-full font-medium flex items-center justify-center text-2xl">Phil Lessard </h3>
                <p class="text-center pb-3">Director of Engineering</p>
              </div>
            </div>
            <div class=" px-2">
              <div class="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                <img src="../../assets/images/user.jpg" class="h-56 w-full"/>
                <h3 class="h-full font-medium flex items-center justify-center text-2xl">David Gifford </h3>
                <p class="text-center pb-3">Director of Quality & EHS</p>
              </div>
            </div>
            <div class="px-2">
              <div class="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                <img src="../../assets/images/user.jpg" class="h-56 w-full"/>
                <h3 class="h-full font-medium flex items-center justify-center text-2xl">Howard Grant </h3>
                <p class="text-center pb-3">Information Technology Manager</p>
              </div>
            </div>
          </TinySlider>
        </div>
      </div>
    </div>

  </div>
</template>
  

  
<script setup>
import dom from "@left4code/tw-starter/dist/js/dom";
import { onMounted } from "vue";
import Header from "../../global-components/Header/Main.vue";
onMounted(() => {
  dom("body").removeClass("main").removeClass("error-page").removeClass("login").removeClass("landing").addClass("forms");
});

</script>
  