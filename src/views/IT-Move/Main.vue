<template>
<Header></Header>


  <form @submit.prevent="createReport" class="add-form">
    <div class="grid grid-cols-11 gap-x-6 mt-5 pb-20">

      <div class="intro-y col-span-11 2xl:col-span-9">
        <!-- BEGIN: Product Information -->
        <div class="intro-y box1 p-5 md:w-3/5 mt-5 mx-auto">
          <div class=" dark:border-darkmode-400 rounded-md p-5">
            <div class="intro-y text-center mt-3">
                <h2 class="text-lg font-medium mr-auto">IT Move Request Form</h2>
              </div>
              <div class="mt-2 intro-y text-center">
                Please use this form to plan office, cubicle or system moves. All forms should be submitted at least 5 business days prior to any planned moves.
              </div>
            <div class="mt-5">
              <div class="grid gap-6 grid-cols-12">
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left">
                    <div class="flex items-center">
                      <div class="font-medium">Requestor Name</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="Full-name" type="text" class="form-control" placeholder="Requestor Name"
                    v-model="itMove.requestor_name" />
                </div>
              </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left">
                    <div class="flex items-center">
                      <div class="font-medium">Requestor Last Name</div>
                    </div>

                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="Full-name" type="text" class="form-control" placeholder="Requestor Name"
                    v-model="itMove.last_name" />

                </div>
              </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left">
                    <div class="flex items-center">
                      <div class="font-medium">Requestor Email</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="Full-name" type="text" class="form-control" placeholder="Requestor Email"
                    v-model="itMove.requestor_email" />

                </div>
              </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left">
                    <div class="flex items-center">
                      <div class="font-medium">Location</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1" @change="locationChange($event)">
                  <select id="Location" class="form-select">
                    <option value="Franklin, OH">
                      Franklin, OH
                    </option>
                    <option value="Lewiston, ME">
                      Lewiston, ME
                    </option>
                    <option value="Remote">
                      Field Technicians / Remote / Sales
                    </option>
                  </select>
                </div>
              </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Department</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="phone-no" type="text" class="form-control" v-model="itMove.department"
                    placeholder="Department" />
                </div>
              </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Move From Location (Office #/​Dept)</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="phone-no" type="text" class="form-control" v-model="itMove.move_from"
                    placeholder="Move From Location (Office #/​Dept)" />
                </div>
              </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left">
                    <div class="flex items-center">
                      <div class="font-medium">Move To Location</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="phone-no" type="text" class="form-control" v-model="itMove.move_to"
                    placeholder="Move To Location" />
                </div>
              </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Additional Details</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <textarea
                      id="update-profile-form-5"
                      class="form-control"
                      placeholder="Additional Details"
                      v-model="itMove.additional_detail" 
                      rows="4"
                    ></textarea>
                </div>
              </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Manager Approval</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <textarea
                      id="update-profile-form-5"
                      class="form-control"
                      placeholder="Manager Approval"
                      v-model="itMove.manager_approval" 
                      rows="4"
                    ></textarea>
                </div>
              </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Resolution</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <textarea
                      id="update-profile-form-5"
                      class="form-control"
                      placeholder="Resolution"
                      v-model="itMove.resolution" 
                      rows="4"
                    ></textarea>
                </div>
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
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import axios from 'axios'

import DarkModeSwitcher from "@/components/dark-mode-switcher/Main.vue";
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
      departments: [],
      msg: [],
      fields: {},
      errors: {},
      success: false,
      itMove:{},
      location:'Franklin, OH'
    }
  },
  created() {
    this.getDepartments();
  },
  methods: {
    getDepartments() {
      axios.get(`${API_BASE_URL}/get_department`).then((res) => {
        console.log(res.data.Department)
        this.departments = res?.data?.Department
      }).catch((err) => {
        console.log(err)
      })

    },
    locationChange(event){
        this.location=event.target.value
    },
    createReport(e) {
      e.preventDefault();
      this.itMove.location=this.location
      axios.post(`${API_BASE_URL}/add_it_move`, this.itMove).then((res) => {
        if (res.status == 200) {
          this.$toast.success(`IT Move Created Successfully!`);
        }
        else {
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