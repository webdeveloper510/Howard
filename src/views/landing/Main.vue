<template>
  <div>

    <Header></Header>
    
    <div class="-mx-5 intro-y space">
      <TinySlider
                :options="{
                  mode: 'gallery',
                  controls: true,
                  speed: 500,
                }"
              >
                <div class="px-2">
                  <div class="image-fit rounded-md overflow-hidden" style="height: 500px;">
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      :src="$f()[0].images[0]" 
                    />
                    <div class="slider-content">
                      <h2 class="text-3xl text-left font-bold leading-none large-tittle space mt-3">EASY <br/> <span style="color:#f1ba22"> ACCURATE, SMART </span> <br/> AUTOMATED, WAREHOUSE</h2>
                      <p class="text-lg my-3 space"><b> Automated vertical and horizontal warehouses: </b> <br/> the right step towards automating your warehouse!</p>
                    </div>
                  </div>
                </div>
                <div class="px-2">
                  <div class="image-fit rounded-md overflow-hidden" style="height: 500px;">
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      :src="$f()[1].images[1]" 
                    />
                    <div class="slider-content">
                      <h2 class="text-3xl text-left font-bold leading-none large-tittle space mt-3">EASY <br/> <span style="color:#f1ba22"> ACCURATE, SMART </span> <br/> AUTOMATED, WAREHOUSE</h2>
                      <p class="text-lg my-3 space"><b> Automated vertical and horizontal warehouses: </b><br/> the right step towards automating your warehouse!</p>
                    </div>
                  </div>
                </div>
                <div class="px-2">
                  <div class="image-fit rounded-md overflow-hidden" style="height: 500px;">
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      :src="$f()[2].images[2]" 
                    />
                    <div class="slider-content">
                      <h2 class="text-3xl text-left font-bold leading-none large-tittle space mt-3">EASY <br/> <span style="color:#f1ba22"> ACCURATE, SMART </span> <br/> AUTOMATED, WAREHOUSE</h2>
                      <p class="text-lg my-3 space"><b> Automated vertical and horizontal warehouses: </b><br/> the right step towards automating your warehouse!</p>
                    </div>
                  </div>
                </div>
      </TinySlider>
    </div>                             
    
                                    
                                
    <!-- <div class=" -mx-5 intro-y space landing_banner">
      <h1 class="font-medium text-left space text-3xl mt-3">TAKE YOUR MATERIAL HANDLING</h1>
      <h2 class="text-3xl text-left font-bold leading-none large-tittle space mt-3">TO THE NEXT LEVEL</h2>
      <p class="text-lg mb-3 space">Transform Your Material Handling With The Most Advanced
        Automated Storage And Retrieval Systems From Modula.</p>
        <button class="btn btn-dark space">Explore Our Solutions</button>
    </div> -->
    <div class="my-5 md:mx-6 intro-y">
      <div class="intro-y grid grid-cols-12 gap-6 mt-5">
        <div class="col-span-12 md:col-span-6 space text-left">
         <h1 class="font-medium text-left space text-3xl mx-auto mt-3">Benefits of Modula automated vertical warehouses:</h1>
         <div class="saprater-left"></div>
         <p class="text-lg mb-3">Save up to 90% of occupied floor space</p>
         <p class="text-lg mb-3">Save time on picking operations</p>
         <p class="text-lg mb-3">Use software integrated with corporate information systems (ERP)</p>
         <p class="text-lg mb-3">Maintain constant control over goods movements, picking and refilling </p>
         <p class="text-lg mb-3">Draw up an inventory with just one click without impeding operations</p>
         <p class="text-lg mb-3">Increase picking accuracy, with a lower error rate</p>
        </div>
        <div class="col-span-12 md:col-span-6 text-center">
          <img src="https://www.modula.eu/wp-content/uploads/2022/06/CCC_0059-1200x800-1-768x512-c-center.webp" class="p-5"/>
        </div>
      </div>
      
    </div>
    <div class="my-5 md:mx-6 intro-y">
      <div class="intro-y grid grid-cols-12 gap-6 mt-5">
      
        <div class="col-span-12 md:col-span-6 text-center">
          <img src="https://www.modula.eu/wp-content/uploads/2022/06/magazzini_module_f-800x534-1-768x513-c-center.webp" class="p-5"/>
        </div>
        <div class="col-span-12 md:col-span-6 space text-left">
         <h1 class="font-medium text-left space text-3xl mx-auto mt-3">Modula vertical and horizontal warehouses offer:</h1>
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
      <h1 class="font-medium text-center space text-3xl mx-auto mt-3">Calendar</h1>
         <div class="saprater"></div>
      <div class="grid grid-cols-12 gap-5 mt-5">
    <!-- BEGIN: Calendar Side Menu -->
    <div class="col-span-12 xl:col-span-4 2xl:col-span-3">
      <div class="box p-5 intro-y">
        <button type="button" class="btn btn-dark w-full mt-2">
          <Edit3Icon class="w-4 h-4 mr-2" /> Add New Schedule
        </button>
        <FullCalendarDraggable
          id="calendar-events"
          :options="dragableOptions"
          class="border-t border-b border-slate-200/60 dark:border-darkmode-400 mt-6 mb-5 py-3"
        >
          <div class="relative">
            <div
              class="event p-3 -mx-3 cursor-pointer transition duration-300 ease-in-out hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md flex items-center"
            >
              <div class="w-2 h-2 bg-pending rounded-full mr-3"></div>
              <div class="pr-10">
                <div class="event__title truncate">VueJS Amsterdam</div>
                <div class="text-slate-500 text-xs mt-0.5">
                  <span class="event__days">2</span> Days
                  <span class="mx-1">•</span> 10:00 AM
                </div>
              </div>
            </div>
            <a
              class="flex items-center absolute top-0 bottom-0 my-auto right-0"
              href=""
            >
              <EditIcon class="w-4 h-4 text-slate-500" />
            </a>
          </div>
          <div class="relative">
            <div
              class="event p-3 -mx-3 cursor-pointer transition duration-300 ease-in-out hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md flex items-center"
            >
              <div class="w-2 h-2 bg-warning rounded-full mr-3"></div>
              <div class="pr-10">
                <div class="event__title truncate">Vue Fes Japan 2019</div>
                <div class="text-slate-500 text-xs mt-0.5">
                  <span class="event__days">3</span> Days
                  <span class="mx-1">•</span> 07:00 AM
                </div>
              </div>
            </div>
            <a
              class="flex items-center absolute top-0 bottom-0 my-auto right-0"
              href=""
            >
              <EditIcon class="w-4 h-4 text-slate-500" />
            </a>
          </div>
          <div class="relative">
            <div
              class="event p-3 -mx-3 cursor-pointer transition duration-300 ease-in-out hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md flex items-center"
            >
              <div class="w-2 h-2 bg-pending rounded-full mr-3"></div>
              <div class="pr-10">
                <div class="event__title truncate">Laracon 2021</div>
                <div class="text-slate-500 text-xs mt-0.5">
                  <span class="event__days">4</span> Days
                  <span class="mx-1">•</span> 11:00 AM
                </div>
              </div>
            </div>
            <a
              class="flex items-center absolute top-0 bottom-0 my-auto right-0"
              href=""
            >
              <EditIcon class="w-4 h-4 text-slate-500" />
            </a>
          </div>
          <div class="relative">
            <div
              class="event p-3 -mx-3 cursor-pointer transition duration-300 ease-in-out hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md flex items-center"
            >
              <div class="w-2 h-2 bg-pending rounded-full mr-3"></div>
              <div class="pr-10">
                <div class="event__title truncate">Sports Day</div>
                <div class="text-slate-500 text-xs mt-0.5">
                  <span class="event__days">4</span> Days
                  <span class="mx-1">•</span> 11:00 AM
                </div>
              </div>
            </div>
            <a
              class="flex items-center absolute top-0 bottom-0 my-auto right-0"
              href=""
            >
              <EditIcon class="w-4 h-4 text-slate-500" />
            </a>
          </div>
          <div class="relative">
            <div
              class="event p-3 -mx-3 cursor-pointer transition duration-300 ease-in-out hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md flex items-center"
            >
              <div class="w-2 h-2 bg-pending rounded-full mr-3"></div>
              <div class="pr-10">
                <div class="event__title truncate">Office Party 2023</div>
                <div class="text-slate-500 text-xs mt-0.5">
                  <span class="event__days">4</span> Days
                  <span class="mx-1">•</span> 11:00 AM
                </div>
              </div>
            </div>
            <a
              class="flex items-center absolute top-0 bottom-0 my-auto right-0"
              href=""
            >
              <EditIcon class="w-4 h-4 text-slate-500" />
            </a>
          </div>
          <div class="relative">
            <div
              class="event p-3 -mx-3 cursor-pointer transition duration-300 ease-in-out hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md flex items-center"
            >
              <div class="w-2 h-2 bg-pending rounded-full mr-3"></div>
              <div class="pr-10">
                <div class="event__title truncate">Lunch</div>
                <div class="text-slate-500 text-xs mt-0.5">
                  <span class="event__days">1</span> Days
                  <span class="mx-1">•</span> 11:00 AM
                </div>
              </div>
            </div>
            <a
              class="flex items-center absolute top-0 bottom-0 my-auto right-0"
              href=""
            >
              <EditIcon class="w-4 h-4 text-slate-500" />
            </a>
          </div>
          <div class="relative">
            <div
              class="event p-3 -mx-3 cursor-pointer transition duration-300 ease-in-out hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md flex items-center"
            >
              <div class="w-2 h-2 bg-pending rounded-full mr-3"></div>
              <div class="pr-10">
                <div class="event__title truncate">Birthday</div>
                <div class="text-slate-500 text-xs mt-0.5">
                  <span class="event__days">4</span> Days
                  <span class="mx-1">•</span> 11:00 AM
                </div>
              </div>
            </div>
            <a
              class="flex items-center absolute top-0 bottom-0 my-auto right-0"
              href=""
            >
              <EditIcon class="w-4 h-4 text-slate-500" />
            </a>
          </div>
          <div class="relative">
            <div
              class="event p-3 -mx-3 cursor-pointer transition duration-300 ease-in-out hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md flex items-center"
            >
              <div class="w-2 h-2 bg-pending rounded-full mr-3"></div>
              <div class="pr-10">
                <div class="event__title truncate">Party</div>
                <div class="text-slate-500 text-xs mt-0.5">
                  <span class="event__days">4</span> Days
                  <span class="mx-1">•</span> 11:00 AM
                </div>
              </div>
            </div>
            <a
              class="flex items-center absolute top-0 bottom-0 my-auto right-0"
              href=""
            >
              <EditIcon class="w-4 h-4 text-slate-500" />
            </a>
          </div>
          <div
            class="text-slate-500 p-3 text-center hidden"
            id="calendar-no-events"
          >
            No events yet
          </div>
        </FullCalendarDraggable>
        <div class="form-check form-switch flex">
          <label class="form-check-label" for="checkbox-events"
            >Remove after drop</label
          >
          <input
            class="show-code form-check-input ml-auto"
            type="checkbox"
            id="checkbox-events"
          />
        </div>
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
      <h1 class="font-medium text-center space text-3xl mx-auto mt-3">Map</h1>
         <div class="saprater"></div>
         <div class="my-3 ">
          <img src="../../assets/images/map1.jpg" class="w-full rounded-md" data-action="zoom"/>
         </div>
         <div class="my-3 ">
          <img src="../../assets/images/map.jpg" class="w-full rounded-md" data-action="zoom"/>
         </div>
         
     </div>
      <h2 class="text-3xl font-medium leading-none mt-3 space">AWESOME FEATURES</h2>
      <div class="saprater-left"></div>
      <div class="intro-y grid grid-cols-12 gap-6 mt-5">
        <div class="col-span-12 space md:col-span-12">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quisquam,<br /> culpa, soluta hic
            aperiam porro ipsum nisi optio necessitatibus commodi dolorum ente voluptatem officiis similique maiores!
          </p>
          <div class="intro-y grid grid-cols-12 gap-6 mt-5">
            <div class="col-span-12 md:col-span-4 lg:col-span-4 p-5 box ">
              <h1 class="font-bold text-2xl space">BUSINESS SOLUTIONS</h1>
              <div class="saprater-left"></div>
              <p class="space">Lorem ipsum dolor sit amet, consectetur werts erty rtyer adipisicing elit, sed do eiusmod tempor incass
                incididunt
                ut labore et dolore magna aliqua. Ut enim ad minimrtyut veniam.</p>
            </div>
            <div class="col-span-12 md:col-span-4 lg:col-span-4 p-5 box ">
              <h1 class=" font-bold text-2xl space">INNOVATIVE TECHNOLOGIES</h1>
              <div class="saprater-left"></div>
              <p class="space">Lorem ipsum dolor sit amet, consectetur werts erty rtyer adipisicing elit, sed do eiusmod tempor incass
                incididunt
                ut labore et dolore magna aliqua. Ut enim ad minimrtyut veniam.</p>
            </div>
            <div class="col-span-12 md:col-span-4 lg:col-span-4 p-5 box ">
              <h1 class=" font-bold text-2xl space">REDEFINING THE WEB</h1>
              <div class="saprater-left"></div>
              <p class="space">Lorem ipsum dolor sit amet, consectetur werts erty rtyer adipisicing elit, sed do eiusmod tempor incass
                incididunt
                ut labore et dolore magna aliqua. Ut enim ad minimrtyut veniam.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="intro-y grid grid-cols-12 gap-6 mt-5">
        <div class="col-span-12 md:col-span-12 lg:col-span-12 cursor-pointer  p-5 ">
          <h2 class="text-3xl font-medium leading-none text-center space pt-1"> Contact Us</h2>
          <div class="saprater"></div>
        </div>
        <div class="col-span-12 md:col-span-3 lg:col-span-3"></div>
        <div class="col-span-12 md:col-span-6 lg:col-span-6  box p-5">
          <div class="grid grid-cols-12 gap-4 gap-y-5 mt-5">
            <div class="intro-y col-span-12 sm:col-span-6">
              <label for="input-wizard-1" class="form-label space">First Name</label>
              <input id="input-wizard-1" type="text" class="form-control" placeholder="Enter First Name" />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6">
              <label for="input-wizard-4" class="form-label space">Last Name</label>
              <input id="input-wizard-4" type="text" class="form-control" placeholder="Enter Last Name" />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6">
              <label for="input-wizard-1" class="form-label space">Phone No.</label>
              <input id="input-wizard-1" type="text" class="form-control" placeholder="Enter Phone number" />
            </div>

            <div class="intro-y col-span-12 sm:col-span-6">
              <label for="input-wizard-2" class="form-label space">Email</label>
              <input id="input-wizard-2" type="text" class="form-control" placeholder="example@gmail.com" />
            </div>
            <div class="intro-y col-span-12 ">
              <label for="input-wizard-4" class="form-label space">Work</label>
              <input id="input-wizard-4" type="text" class="form-control" placeholder="Enter Work " />
            </div>
            <div class="intro-y col-span-12 ">
              <label for="input-wizard-3" class="form-label space">Subject</label>
              <input id="input-wizard-3" type="text" class="form-control" placeholder="Important Meeting" />
            </div>

            <div class="intro-y col-span-12 flex items-center justify-center sm:justify-center mt-5">
              <button class="btn btn-dark w-24 ml-2">Submit</button>
            </div>
          </div>

        </div>
        <div class="col-span-12 md:col-span-3 lg:col-span-3"></div>
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
