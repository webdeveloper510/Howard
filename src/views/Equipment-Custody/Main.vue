<template>

<Header></Header>

 
  <form @submit.prevent="createReport" class="add-form">
    <div class="grid grid-cols-11 gap-x-6 mt-5 pb-20">

      <div class="intro-y col-span-11 2xl:col-span-9">
        <!-- BEGIN: Product Information -->
        <div class="intro-y box1 md:w-3/5 p-5 mt-5 mx-auto">
          <div class=" dark:border-darkmode-400 rounded-md p-5">
            <div class="intro-y text-center mt-8">
              <h2 class="text-lg font-medium mr-auto">Equipment Custody Record</h2>

            </div>
            <div class="mt-2 intro-y">
              This form is to be used when equipment is issued to an employee. It is a receipt showing assignment of items to a
              specific person and they are responsible for the care and safekeeping of those items, while the items are in their
              possession.
            </div>
            <div class="mt-5">
              <div class="grid gap-6 grid-cols-12">
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left">
                    <div class="flex items-center">
                      <div class="font-medium">First Name</div>
                    </div>

                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="Full-name" type="text" class="form-control" placeholder="First name"
                    v-model="fields.employee_name" />
                </div>
              </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left">
                    <div class="flex items-center">
                      <div class="font-medium">Last Name</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="Full-name" type="text" class="form-control" placeholder="Last name"
                    v-model="fields.last_name" />
                </div>
              </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left">
                    <div class="flex items-center">
                      <div class="font-medium">Equipment Type</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="Full-name" type="text" class="form-control" placeholder="Equipment Type"
                    v-model="fields.equipment_type" />
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
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <select id="Location" class="form-select" v-model="fields.location">
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
                      <div class="font-medium">Job Title</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="phone-no" type="text" class="form-control" v-model="fields.title"
                    placeholder="Job Title" />
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
                  <select id="category" v-model="fields.department_id" class="form-select">
                    <option v-for="(department, index) in departments" :key="index" :value="department.department_name">
                      {{ department.department_name }}
                    </option>
                  </select>

                </div>
              </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left">
                    <div class="flex items-center">
                      <div class="font-medium">Laptop or Desktop Issued?</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <div class="flex flex-col sm:flex-row mt-2">
                    <div class="form-check mr-2">
                      <input id="radio-switch-4" class="form-check-input" v-model="fields.laptop_issue"  type="radio" value="1" />
                      <label class="form-check-label" for="radio-switch-4">Yes</label>
                    </div>
                    <div class="form-check mr-2 mt-2 sm:mt-0">
                      <input id="radio-switch-5" class="form-check-input" v-model="fields.laptop_issue" type="radio" value="0" />
                      <label class="form-check-label" for="radio-switch-5">No</label>
                    </div>
                  </div>
                </div>
              </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Manufacturer</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <select id="Location" class="form-select" v-model="fields.manufatured_by">
                    <option value="Desktop">
                      Desktop PC
                    </option>
                    <option value="Laptop">
                      Laptop
                    </option>
                    <option value="Tablet">
                      Tablet
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
                      <div class="font-medium">Model #</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="Model" type="text" class="form-control" v-model="fields.model_number" placeholder="Model" />
                  <div class="form-help text-right">Enter the model of your device</div>
                </div>
              </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Serial #</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="serial" type="text" class="form-control" v-model="fields.serial_number" placeholder="Serial" />
                  <div class="form-help text-right">Enter serial number here</div>
                </div>
              </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Company Phone Issued?</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <div class="flex flex-col sm:flex-row mt-2">
                    <div class="form-check mr-2">
                      <input id="radio-switch-4" class="form-check-input" type="radio" value="1" />
                      <label class="form-check-label" for="radio-switch-4">Yes</label>
                    </div>
                    <div class="form-check mr-2 mt-2 sm:mt-0">
                      <input id="radio-switch-5" class="form-check-input" type="radio" value="0" />
                      <label class="form-check-label" for="radio-switch-5">No</label>
                    </div>
                  </div>
                </div>
              </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Phone Issue Date - Contract Start Date</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="date" v-model="fields.phone_issue_date" type="date" class="form-control" />
                </div>
              </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Mobile Phone Brand</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <select id="Location" class="form-select" v-model="fields.phone_brand">
                    <option value="Google">
                      Google
                    </option>
                    <option value="iPhone">
                      iPhone
                    </option>
                    <option value="Android">
                      Android
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
                      <div class="font-medium">Phone Model </div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <select id="Location" class="form-select" v-model="fields.phone_model">
                    <option value="Google">
                      Google Pixel 6
                    </option>
                    <option value="iPhone">
                      iPhone XR
                    </option>
                    <option value="Android">
                      iPhone 5
                    </option>
                    <option value="Android">
                      iPhone 6
                    </option>
                    <option value="Android">
                      iPhone 7
                    </option>
                    <option value="Android">
                      iPhone 8
                    </option>
                    <option value="Android">
                      iPhone 9
                    </option>
                    <option value="Android">
                      iPhone 10
                    </option>
                    <option value="Android">
                      iPhone 11
                    </option>
                    <option value="Android">
                      iPhone 12
                    </option>
                    <option value="Android">
                      iPhone 13
                    </option>
                    <option value="Android">
                      Samsung Galaxy A21
                    </option>
                    <option value="Android">
                      Samsung Galaxy A715G
                    </option>
                    <option value="Android">
                      Samsung Galaxy J7V
                    </option>
                    <option value="Android">
                      Samsung Galaxy S7
                    </option>
                    <option value="Android">
                      Samsung Galaxy S10E
                    </option>
                    <option value="Android">
                      Samsung Galaxy S20
                    </option>
                    <option value="Android">
                      Samsung Galaxy S22
                    </option>
                    <option value="Android">
                      Samsung Galaxy XCover Pro
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
                      <div class="font-medium">Phone Serial # </div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="password" type="text" v-model="fields.phone_serial" class="form-control"
                    placeholder="Enter Police Report " />
                </div>
              </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Laptop Bag Issued </div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <div class="flex flex-col sm:flex-row mt-2">
                    <div class="form-check mr-2">
                      <input id="radio-switch-4" v-model="fields.laptop_issue" class="form-check-input" type="radio" value="yes" />
                      <label class="form-check-label" for="radio-switch-4">Yes</label>
                    </div>
                    <div class="form-check mr-2 mt-2 sm:mt-0">
                      <input id="radio-switch-5"  v-model="fields.laptop_issue" class="form-check-input" type="radio" value="No" />
                      <label class="form-check-label" for="radio-switch-5">No</label>
                    </div>
                  </div>
                </div>
              </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Bag Type </div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <select id="Location" class="form-select" v-model="fields.bag_type">
                    <option value="Google">
                      Wheeled Roller Bag
                    </option>
                    <option value="iPhone">
                      Briefcase
                    </option>
                    <option value="Android">
                      Backpack
                    </option>
                    <option value="Android">
                      Executive Bag
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
                      <div class="font-medium">Monitors Issued?</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <div class="flex flex-col sm:flex-row mt-2">
                    <div class="form-check mr-2">
                      <input id="radio-switch-4" class="form-check-input" type="radio" value="Yes" v-model="fields.monitor_issue"/>
                      <label class="form-check-label" for="radio-switch-4">Yes</label>
                    </div>
                    <div class="form-check mr-2 mt-2 sm:mt-0">
                      <input id="radio-switch-5" class="form-check-input" type="radio" value="No" v-model="fields.monitor_issue" />
                      <label class="form-check-label" for="radio-switch-5">No</label>
                    </div>
                  </div>
                </div>
              </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Docking Station Issued?</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <div class="flex flex-col sm:flex-row mt-2">
                    <div class="form-check mr-2">
                      <input id="radio-switch-4" class="form-check-input" v-model="fields.docking_issue"
                       type="radio" value="1" />
                      <label class="form-check-label" for="radio-switch-4">Yes</label>
                    </div>
                    <div class="form-check mr-2 mt-2 sm:mt-0">
                      <input id="radio-switch-5" class="form-check-input" v-model="fields.docking_issue" type="radio" value="0" />
                      <label class="form-check-label" for="radio-switch-5">No</label>
                    </div>
                  </div>
                </div>
              </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Monitor Brand </div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <select id="Location" class="form-select" v-model="fields.monitor_brand">
                    <option value="Google">
                      Spectre
                    </option>
                    <option value="iPhone">
                      Samsung
                    </option>
                    <option value="Android">
                      Viewsonic
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
                      <div class="font-medium">Monitor Model # </div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="text" v-model="fields.monitor_model" type="text" class="form-control" />
                </div>
              </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Monitor Serial #</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <textarea
                      id="update-profile-form-5"
                      class="form-control"
                      placeholder="Monitor Serial"
                      v-model="fields.monitor_serial" 
                      rows="4"
                    ></textarea>
                </div>
              </div>
                </div>
              </div>
              <!-- <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Manufacturer</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <select id="Location" class="form-select" v-model="fields.manufatured_by">
                    <option value="Dell">
                      Dell
                    </option>
                    <option value="HP">
                      HP
                    </option>
                    <option value="Lenovo">
                      Lenovo
                    </option>
                    <option value="Panasonic">
                      Panasonic
                    </option>
                  </select>
                </div>
              </div> -->
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
    createReport(e) {
      e.preventDefault();
      this.fields.status = 1
      console.log(this.fields)
      axios.post(`${API_BASE_URL}/create_custody_request`, this.fields).then((res) => {
        if (res.status == 200) {
          this.$toast.success(`Report Created Successfully!`);
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