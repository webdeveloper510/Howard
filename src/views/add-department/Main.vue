<template>
  <Header></Header>
  <form @submit.prevent="addDepartment" class="add-form">
    <div class="grid grid-cols-11 gap-x-6 mt-5 pb-20">

      <div class="intro-y col-span-11 2xl:col-span-9">

        <!-- BEGIN: Product Information -->
        <div class="intro-y box1 p-5 mt-5 md:w-3/4 mx-auto">
          <div class="intro-y text-center my-5">
            <h2 class="text-lg font-medium mr-auto">Add Department</h2>
          </div>
          <div class="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
            <div
              class="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
              <ChevronDownIcon class="w-4 h-4 mr-2" /> Department Information
            </div>

            <div class="mt-5">

              <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left">
                    <div class="flex items-center">
                      <div class="font-medium">Department</div>
                      <div
                        class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                        Required
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="Department" type="text" class="form-control" v-model="fields.department_name"
                    placeholder="Department Name" />
                </div>
              </div>
            </div>

            <div class="mt-5">

              <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left">
                    <div class="flex items-center">
                      <div class="font-medium">Department Description</div>

                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <textarea id="update-profile-form-5" class="form-control" placeholder="Enter Department Description"
                    v-model="fields.description" rows="4"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-end flex-col md:flex-row gap-2 mt-5">
          <button type="button"
            class="btn py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 w-full md:w-52">
            Cancel
          </button>
          <button type="submit" class="btn py-3 btn-dark w-full md:w-52">
            Save
          </button>
        </div>
        </div>
        <!-- END: Product Information -->
     
      </div>
    </div>
    <!-- END: Product Information -->
  </form>
</template>
<script>
import { ref, provide } from "vue";
const successNotification = ref();
import axios from 'axios'
import DarkModeSwitcher from "@/components/dark-mode-switcher/Main.vue";
import dom from "@left4code/tw-starter/dist/js/dom";
import { API_BASE_URL } from '../../config'
const subcategory = ref([]);
const editorData = ref("<p>Content of the editor.</p>");
provide("bind[successNotification]", (el) => {
  // Binding
  successNotification.value = el;
});
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
    addDepartment(e) {
      e.preventDefault();
      console.log('yess')
      console.log(this.fields)
      axios.post(`${API_BASE_URL}/create_department`, this.fields).then((res) => {
        //console.log(res)
            if(res.status==200){
              this.$toast.success(`Department Created Successfully!`);
            }
            else{
              this.$toast.error(`Some error Occure`);
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
