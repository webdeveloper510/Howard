<template>
  <div>
    <DarkModeSwitcher />
    <div class="container sm:px-10">
      <div class="block xl:grid grid-cols-2 gap-4">

        <!-- BEGIN: Login Info -->

        <div class="hidden xl:flex flex-col min-h-screen">
          <a href="/Howard/" class="-intro-x flex items-center pt-5">
            <img alt="Midone Tailwind HTML Admin Template"
              src="https://www.cognitoforms.com/file/PY98Tpd3p2cUH_ojupJJzh6dKQWEicACg9A7BuMhySwbN2I0NPclvU6pOcXxgN0-" />
          </a>
          <div class="my-auto">
            <img alt="Midone Tailwind HTML Admin Template" class="-intro-x w-1/2 -mt-16"
              src="@/assets/images/illustration.svg" />
            <div class="-intro-x text-white font-medium text-4xl leading-tight mt-10">
              A few more clicks to <br />
              sign in to your account.
            </div>
            <div class="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-slate-400">
              Manage all your e-commerce accounts in one place
            </div>
          </div>
        </div>

        <!-- END: Login Info -->

        <!-- BEGIN: Login Form -->

        <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-10">
          <form @submit.prevent="onSubmit" class="add-form">
            <div
              class="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
              <h2 class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                Sign In
              </h2>
              <div class="intro-x mt-2 text-slate-400 xl:hidden text-center">
                A few more clicks to sign in to your account. Manage all your accounts in one place
              </div>
              <div class="intro-x mt-8">
                <input type="text" class="intro-x login__input form-control py-3 px-4 block" placeholder="Username"
                  v-model="fields.username" />
                <div v-if="errors && errors.username" class="text-danger">{{ errors.username[0] }}</div>
                <input type="password" class="intro-x login__input form-control py-3 px-4 block mt-4"
                  placeholder="Password" v-model="fields.password" />
                <div v-if="errors && errors.password" class="text-danger">{{ errors.password[0] }}</div>
              </div>
              <div class="intro-x flex text-slate-600 dark:text-slate-500 text-xs sm:text-sm mt-4">
                <div class="flex items-center mr-auto">
                  <input id="remember-me" type="checkbox" class="form-check-input border mr-2" />
                  <label class="cursor-pointer select-none" for="remember-me">Remember me</label>
                </div>
                <a href="">Forgot Password?</a>
              </div>
              <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                <button type="submit" class="btn btn-dark py-3 px-4 w-full xl:w-32 xl:mr-3 align-top" name="submit">
                  Login
                </button>
              </div>
              <div v-if="success" class="alert alert-success mt-3">
                Message sent!
              </div>
              <div class="intro-x mt-10 xl:mt-24 text-slate-600 dark:text-slate-500 text-center xl:text-left">
                By signin up, you agree to our
                <a class="text-primary dark:text-slate-200" href="">Terms and Conditions</a>
                &
                <a class="text-primary dark:text-slate-200" href="">Privacy Policy</a>
              </div>
            </div>
          </form>
        </div>
        <!-- END: Login Form -->
       <!-- BEGIN: Success Notification Content -->
       <div id="success-notification-content" class="toastify-content hidden flex">
        <CheckCircleIcon class="text-success" />
        <div class="ml-4 mr-4">
          <div class="font-medium">Login success!</div>
        </div>
      </div>
      <!-- END: Success Notification Content -->
      <!-- BEGIN: Failed Notification Content -->
      <div id="failed-notification-content" class="toastify-content hidden flex">
        <XCircleIcon class="text-danger" />
        <div class="ml-4 mr-4">
          <div class="font-medium">Login failed!</div>
          <div class="text-slate-500 mt-1">
            Please check the fileld form.
          </div>
        </div>
      </div>
      <!-- END: Failed Notification Content -->
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import axios from 'axios';
import Toastify from "toastify-js";
import DarkModeSwitcher from "@/components/dark-mode-switcher/Main.vue";
import dom from "@left4code/tw-starter/dist/js/dom";
import { API_BASE_URL } from '../../config'
export default {
  name: 'Test',
  props: {
    msg: String
  },
  data() {
    return {

      msg: [],
      fields: {},
      errors: {},
      success: false,
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      console.log('yess')
      console.log(this.fields);
      axios.post(`${API_BASE_URL}/login`, this.fields).then((res) => {
        if(res.status==200){
          Toastify({
            node: dom("#success-notification-content")
              .clone()
              .removeClass("hidden")[0],
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
          }).showToast();
          }
          else{
            Toastify({
            node: dom("#failed-notification-content")
              .clone()
              .removeClass("hidden")[0],
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
          }).showToast();
          }
      })
    }
  }


}

</script>
<script setup>
import { ref, provide } from "vue";
onMounted(() => {
  dom("body").removeClass("main").addClass("login").removeClass("landing").removeClass("error-page");
});



// Success notification
const successNotification = ref();
provide("bind[successNotification]", (el) => {
  // Binding
  successNotification.value = el;
});
const successNotificationToggle = () => {
  // Show notification
  successNotification.value.showToast();
};

</script>
