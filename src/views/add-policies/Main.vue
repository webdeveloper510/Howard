<template>
  <Header></Header>
  <form @submit.prevent="addPolicy" class="add-form">
    <div class="grid grid-cols-11 gap-x-6 mt-5 pb-20">
      <div class="intro-y col-span-11 2xl:col-span-9">

        <!-- BEGIN: Product Information -->
        <div class="intro-y box1 p-5 mt-5 md:w-3/4 mx-auto">
          <div class="intro-y text-center my-5">
            <h2 class="text-lg font-medium mr-auto">Add Policy</h2>
          </div>
          <div class="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
            <div
              class="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
              <ChevronDownIcon class="w-4 h-4 mr-2" /> Policy Information
            </div>

            <div class="mt-5">

              <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left">
                    <div class="flex items-center">
                      <div class="font-medium">Policy Name</div>
                      <div
                        class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                        Required
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="Department" type="text" required class="form-control" v-model="fields.name"
                    placeholder="Policy Name" />
                </div>
              </div>
            </div>

            <div class="mt-5">
              <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left">
                    <div class="flex items-center">
                      <div class="font-medium">Policy Description</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <textarea id="update-profile-form-5" class="form-control" required
                    placeholder="Enter Policy Description" v-model="fields.description" rows="4"></textarea>
                </div>
              </div>
            </div>
            <div class="mt-5">
              <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left">
                    <div class="flex items-center">
                      <div class="font-medium"> Policy Document </div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="Policy" type="file" required v-on:change="handleFileObject" class="form-control" placeholder="Policy File" />
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-end flex-col md:flex-row gap-2 mt-5">
            <button type="button"
              class="btn py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 w-full md:w-52">
              Cancel
            </button>
            <button type="submit" class="btn py-3 btn-primary w-full md:w-52">
              Save
            </button>
          </div>
        </div>
        <!-- END: Product Information -->

      </div>

      <!-- BEGIN: Success Notification Content -->
      <div id="success-notification-content" class="toastify-content hidden flex">
        <CheckCircleIcon class="text-success" />
        <div class="ml-4 mr-4">
          <div class="font-medium">Policy Added success!</div>
          <div class="text-slate-500 mt-1">
            Please check your Policies
          </div>
        </div>
      </div>
      <!-- END: Success Notification Content -->
      <!-- BEGIN: Failed Notification Content -->
      <div id="failed-notification-content" class="toastify-content hidden flex">
        <XCircleIcon class="text-danger" />
        <div class="ml-4 mr-4">
          <div class="font-medium">Policy failed!</div>
          <div class="text-slate-500 mt-1">
            Please check the fileld form.
          </div>
        </div>
      </div>
      <!-- END: Failed Notification Content -->
    </div>
  </form>


</template>
<script>
import { ref, provide } from "vue";
import axios from 'axios';
import _ from 'lodash'
import Toastify from "toastify-js";
import dom from "@left4code/tw-starter/dist/js/dom";
import { API_BASE_URL } from '../../config'
const subcategory = ref([]);
const editorData = ref("<p>Content of the editor.</p>");
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
    handleFileObject(event) {
      this.file = event.target.files[0];
      console.log(this.file)
      //this.avatarName = this.avatar.name
    },
    addPolicy(e) {
      e.preventDefault();
      this.fields.status = 1
      var formData = new FormData();    
      _.each(this.fields, (value, key) => {
        console.log(value)
          formData.append(key, value)
        })  
     formData.append('file',this.file)
      console.log(this.fields)
      axios.post(`${API_BASE_URL}/policy_create`, formData).then((res) => {
        if (res.status == 200) {
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
        else {
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
import { onMounted } from "vue";
import Header from "../../global-components/Header/Main.vue";

onMounted(() => {
  dom("body").removeClass("main").removeClass("error-page").removeClass("login").removeClass("landing").addClass("forms");
});

</script>


