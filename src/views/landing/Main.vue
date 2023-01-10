<template>
  <div>

    <Header></Header>

    <div class="md:-mx-5 intro-y space">
      <TinySlider :options="{
        mode: 'gallery',
        controls: true,
        speed: 500,
      }">
        <div class="">
          <div class="image-fit rounded-md overflow-hidden" style="height: 500px;">
            <img alt="Midone Tailwind HTML Admin Template" src="../../assets/images/banner1.png" />
            <div class="slider-content">
              <h2 class="text-3xl text-center font-bold leading-none large-tittle space mt-3">Welcome to the <span
                  style="color:#f1ba22">Modula Intranet! </span> </h2>
              <p class="text-lg my-3 space">The Modula Mission is to optimize the intralogistics of all businesses,
                regardless of their size <br /> or industry, by delivering the best automated storage solutions. Our
                high-tech manufacturing <br /> standards reflect our commitment to innovation, allowing us to deliver
                value <br /> to our customers worldwide.</p>
            </div>
          </div>
        </div>
        <div class="">
          <div class="image-fit rounded-md overflow-hidden" style="height: 500px;">
            <img alt="Midone Tailwind HTML Admin Template" src="../../assets/images/banner2.png" />
            <div class="slider-content">
              <h2 class="text-3xl text-center font-bold leading-none large-tittle space mt-3">Welcome to the <span
                  style="color:#f1ba22">Modula Intranet! </span> </h2>
              <p class="text-lg my-3 space">The Modula Mission is to optimize the intralogistics of all businesses,
                regardless of their size <br /> or industry, by delivering the best automated storage solutions. Our
                high-tech manufacturing <br /> standards reflect our commitment to innovation, allowing us to deliver
                value <br /> to our customers worldwide.</p>
            </div>
          </div>
        </div>

      </TinySlider>
    </div>



    <div class="intro-y space">
      <h1 class="font-bold text-center uppercase text-2xl space mt-8">Welcome to the team</h1>
      <div class="saprater"></div>

      <div class="intro-y grid grid-cols-12 gap-6 p-5 mt-5">
        <div class="col-span-12 md:col-span-12 lg:col-span-12 p-5 ">
          <div class="mx-6 space">
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
                  <img src="../../assets/images/user.jpg" class="h-56 w-full" />
                  <h3 class="font-medium flex items-center justify-center text-2xl">Alex King </h3>
                  <p class="text-center pb-3">Machine Operator</p>
                </div>
              </div>
              <div class=" px-2">
                <div class="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                  <img src="../../assets/images/user.jpg" class="h-56 w-full" />
                  <h3 class=" font-medium flex items-center justify-center text-2xl">Gavin Farmer </h3>
                  <p class="text-center pb-3">Field Technician</p>
                </div>
              </div>
              <div class=" px-2">
                <div class="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                  <img src="../../assets/images/user.jpg" class="h-56 w-full" />
                  <h3 class="font-medium flex items-center justify-center text-2xl">Robert Sanders </h3>
                  <p class="text-center pb-3">Field Technician</p>
                </div>
              </div>

              <div class="px-2">
                <div class="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                  <img src="../../assets/images/user.jpg" class="h-56 w-full" />
                  <h3 class="h-full font-medium flex items-center justify-center text-2xl">Thomas Miller</h3>
                  <p class="text-center pb-3">Field Technician</p>
                </div>
              </div>
              <div class="px-2">
                <div class="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                  <img src="../../assets/images/user.jpg" class="h-56 w-full" />
                  <h3 class="h-full font-medium flex items-center justify-center text-2xl">Desiree Fantini </h3>
                  <p class="text-center pb-3">Service Admin</p>
                </div>
              </div>
              <div class="px-2">
                <div class="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                  <img src="../../assets/images/user.jpg" class="h-56 w-full" />
                  <h3 class="h-full font-medium flex items-center justify-center text-2xl">Dan Robichaud</h3>
                  <p class="text-center pb-3">Logistics Specialist</p>
                </div>
              </div>

            </TinySlider>
          </div>
        </div>
      </div>

    </div>
    <div class="my-5 md:mx-6 intro-y">
      <div class="intro-y grid grid-cols-12 gap-6 mt-5">
        <div class="col-span-12 md:col-span-6 space text-left">
          <h1 class="font-medium text-left space text-3xl mx-auto mt-3">Benefits of Modula automated vertical
            warehouses:</h1>
          <div class="saprater-left"></div>
          <p class="text-lg mb-3">Save up to 90% of occupied floor space</p>
          <p class="text-lg mb-3">Save time on picking operations</p>
          <p class="text-lg mb-3">Use software integrated with corporate information systems (ERP)</p>
          <p class="text-lg mb-3">Maintain constant control over goods movements, picking and refilling </p>
          <p class="text-lg mb-3">Draw up an inventory with just one click without impeding operations</p>
          <p class="text-lg mb-3">Increase picking accuracy, with a lower error rate</p>
        </div>
        <div class="col-span-12 md:col-span-6 text-center">
          <img src="https://www.modula.eu/wp-content/uploads/2022/06/CCC_0059-1200x800-1-768x512-c-center.webp"
            class="p-5" />
        </div>
      </div>

    </div>
    <div class="my-5 md:mx-6 intro-y">
      <div class="intro-y grid grid-cols-12 gap-6 mt-5">

        <div class="col-span-12 md:col-span-6 text-center">
          <img src="https://www.modula.eu/wp-content/uploads/2022/06/magazzini_module_f-800x534-1-768x513-c-center.webp"
            class="p-5" />
        </div>
        <div class="col-span-12 md:col-span-6 space text-left">
          <h1 class="font-medium text-left space text-3xl mx-auto mt-3">Modula vertical and horizontal warehouses offer:
          </h1>
          <div class="saprater-left"></div>
          <p class="text-lg mb-3">Ad hoc solutions for all types of warehouse</p>
          <p class="text-lg mb-3">Rapid, safe implementation into your warehouse workflow</p>
          <p class="text-lg mb-3">The option to increase your number of warehouses</p>
          <p class="text-lg mb-3">Staff preparation for hardware and software training</p>
          <p class="text-lg mb-3">Outstanding pre- and after-sales assistance service</p>
          <p class="text-lg mb-3">Two decades of experience in integration between Modula WMS and ERP</p>
          <p class="text-lg mb-3">Quick and easy integration with other technologies</p>
          <p class="text-lg mb-3">Technical and commercial presence across Italy and internationally</p>
        </div>
      </div>
    </div>

    <div class="py-5 md:mx-6 intro-y">
      <h1 class="font-medium text-center uppercase space text-3xl mx-auto mt-3">Holiday Calendar</h1>
      <div class="saprater"></div>
      <div class="grid grid-cols-12 gap-5 mt-5">
        <!-- BEGIN: Calendar Side Menu -->
        <div class="col-span-12 xl:col-span-4 2xl:col-span-3">
          <div class="box p-5 intro-y">
            <h2 class="font-medium text-left  space text-base mx-auto mt-3">Upcomming Holiday</h2>
            <div class="saprater-left"></div>
           
            <FullCalendarDraggable id="calendar-events" :options="dragableOptions"
              class="border-t border-slate-200/60 dark:border-darkmode-400 mt-5 mb-4 py-3">
              <div class="relative">
                <div
                  class="event p-3 -mx-3 cursor-pointer transition duration-300 ease-in-out hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md flex items-center">
                  <div class="w-2 h-2 bg-warning rounded-full mr-3"></div>
                  <div class="pr-10">
                    <div class="event__title truncate">Vue Fes Japan 2019</div>
                    <div class="text-slate-500 text-xs mt-0.5">
                      <span class="event__days">3</span> Days
                      <span class="mx-1">•</span> 07:00 AM
                    </div>
                  </div>
                </div>
                <a class="flex items-center absolute top-0 bottom-0 my-auto right-0" href="">
                  <EditIcon class="w-4 h-4 text-slate-500" />
                </a>
              </div>
              <div class="relative">
                <div
                  class="event p-3 -mx-3 cursor-pointer transition duration-300 ease-in-out hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md flex items-center">
                  <div class="w-2 h-2 bg-warning rounded-full mr-3"></div>
                  <div class="pr-10">
                    <div class="event__title truncate">Vue Fes Japan 2019</div>
                    <div class="text-slate-500 text-xs mt-0.5">
                      <span class="event__days">3</span> Days
                      <span class="mx-1">•</span> 07:00 AM
                    </div>
                  </div>
                </div>
                <a class="flex items-center absolute top-0 bottom-0 my-auto right-0" href="">
                  <EditIcon class="w-4 h-4 text-slate-500" />
                </a>
              </div>
              <div class="relative">
                <div
                  class="event p-3 -mx-3 cursor-pointer transition duration-300 ease-in-out hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md flex items-center">
                  <div class="w-2 h-2 bg-pending rounded-full mr-3"></div>
                  <div class="pr-10">
                    <div class="event__title truncate">Laracon 2021</div>
                    <div class="text-slate-500 text-xs mt-0.5">
                      <span class="event__days">4</span> Days
                      <span class="mx-1">•</span> 11:00 AM
                    </div>
                  </div>
                </div>
                <a class="flex items-center absolute top-0 bottom-0 my-auto right-0" href="">
                  <EditIcon class="w-4 h-4 text-slate-500" />
                </a>
              </div>
              <div class="relative">
                <div
                  class="event p-3 -mx-3 cursor-pointer transition duration-300 ease-in-out hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md flex items-center">
                  <div class="w-2 h-2 bg-pending rounded-full mr-3"></div>
                  <div class="pr-10">
                    <div class="event__title truncate">Sports Day</div>
                    <div class="text-slate-500 text-xs mt-0.5">
                      <span class="event__days">4</span> Days
                      <span class="mx-1">•</span> 11:00 AM
                    </div>
                  </div>
                </div>
                <a class="flex items-center absolute top-0 bottom-0 my-auto right-0" href="">
                  <EditIcon class="w-4 h-4 text-slate-500" />
                </a>
              </div>
              <div class="relative">
                <div
                  class="event p-3 -mx-3 cursor-pointer transition duration-300 ease-in-out hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md flex items-center">
                  <div class="w-2 h-2 bg-pending rounded-full mr-3"></div>
                  <div class="pr-10">
                    <div class="event__title truncate">Office Party 2023</div>
                    <div class="text-slate-500 text-xs mt-0.5">
                      <span class="event__days">4</span> Days
                      <span class="mx-1">•</span> 11:00 AM
                    </div>
                  </div>
                </div>
                <a class="flex items-center absolute top-0 bottom-0 my-auto right-0" href="">
                  <EditIcon class="w-4 h-4 text-slate-500" />
                </a>
              </div>
              <div class="relative">
                <div
                  class="event p-3 -mx-3 cursor-pointer transition duration-300 ease-in-out hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md flex items-center">
                  <div class="w-2 h-2 bg-pending rounded-full mr-3"></div>
                  <div class="pr-10">
                    <div class="event__title truncate">Lunch</div>
                    <div class="text-slate-500 text-xs mt-0.5">
                      <span class="event__days">1</span> Days
                      <span class="mx-1">•</span> 11:00 AM
                    </div>
                  </div>
                </div>
                <a class="flex items-center absolute top-0 bottom-0 my-auto right-0" href="">
                  <EditIcon class="w-4 h-4 text-slate-500" />
                </a>
              </div>
              <div class="relative">
                <div
                  class="event p-3 -mx-3 cursor-pointer transition duration-300 ease-in-out hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md flex items-center">
                  <div class="w-2 h-2 bg-pending rounded-full mr-3"></div>
                  <div class="pr-10">
                    <div class="event__title truncate">Birthday</div>
                    <div class="text-slate-500 text-xs mt-0.5">
                      <span class="event__days">4</span> Days
                      <span class="mx-1">•</span> 11:00 AM
                    </div>
                  </div>
                </div>
                <a class="flex items-center absolute top-0 bottom-0 my-auto right-0" href="">
                  <EditIcon class="w-4 h-4 text-slate-500" />
                </a>
              </div>
              <div class="relative">
                <div
                  class="event p-3 -mx-3 cursor-pointer transition duration-300 ease-in-out hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md flex items-center">
                  <div class="w-2 h-2 bg-pending rounded-full mr-3"></div>
                  <div class="pr-10">
                    <div class="event__title truncate">Party</div>
                    <div class="text-slate-500 text-xs mt-0.5">
                      <span class="event__days">4</span> Days
                      <span class="mx-1">•</span> 11:00 AM
                    </div>
                  </div>
                </div>
                <a class="flex items-center absolute top-0 bottom-0 my-auto right-0" href="">
                  <EditIcon class="w-4 h-4 text-slate-500" />
                </a>
              </div>
              <div class="text-slate-500 p-3 text-center hidden" id="calendar-no-events">
                No events yet
              </div>
            </FullCalendarDraggable>
          </div>
        </div>
        <!-- END: Calendar Side Menu -->
        <!-- BEGIN: Calendar Content -->
        <div class="col-span-12 xl:col-span-8 2xl:col-span-9">
          <div class="box p-5">
            <Calendar />
          </div>
        </div>
        <!-- END: Calendar Content -->
      </div>
      <div class="py-5 md:mx-6 intro-y">
        <h1 class="font-medium text-center space uppercase text-3xl mx-auto mt-3">Map</h1>
        <div class="saprater"></div>
        <div class="my-3 ">
          <img src="../../assets/images/map1.jpg" class="w-full rounded-md" data-action="zoom" />
        </div>
        <div class="my-3 ">
          <img src="../../assets/images/map.jpg" class="w-full rounded-md" data-action="zoom" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import dom from "@left4code/tw-starter/dist/js/dom";
import Header from "../../global-components/Header/Main.vue";
import Calendar from "@/components/calendar/Main.vue";

const dragableOptions = {
  itemSelector: ".event",
  eventData(eventEl) {
    return {
      title: dom(eventEl).find(".event__title").html(),
      duration: {
        days: parseInt(dom(eventEl).find(".event__days").text()),
      },
    };
  },
};
onMounted(() => {
  dom("body").removeClass("main").removeClass("error-page").removeClass("login").removeClass("forms").addClass("landing");
});
</script>
