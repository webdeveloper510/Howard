<template>
  <div class="intro-y flex items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Facilities Maintenance Request</h2>

  </div>
  <div class="mt-2 intro-y">
    This form is to be used when equipment is issued to an employee. It is a receipt showing assignment of items to a
    specific person and they are responsible for the care and safekeeping of those items, while the items are in their
    possession.
  </div>
  <form @submit.prevent="createReport" class="add-form">
    <div class="grid grid-cols-11 gap-x-6 mt-5 pb-20">

      <div class="intro-y col-span-11 2xl:col-span-9">
        <!-- BEGIN: Product Information -->
        <div class="intro-y box p-5 mt-5">
          <div class=" dark:border-darkmode-400 rounded-md p-5">

            <div class="mt-5">
              <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left">
                    <div class="flex items-center">
                      <div class="font-medium">First Name</div>
                      <div
                        class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                        Required
                      </div>
                    </div>

                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="Full-name" type="text" class="form-control" placeholder="First name"
                    v-model="fields.first_name" />

                </div>
              </div>

              <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left">
                    <div class="flex items-center">
                      <div class="font-medium">Last Name</div>
                      <div
                        class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                        Required
                      </div>
                    </div>

                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="Full-name" type="text" class="form-control" placeholder="Last name"
                    v-model="fields.last_name" />

                </div>
              </div>
              <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left">
                    <div class="flex items-center">
                      <div class="font-medium">Email</div>
                      <div
                        class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                        Required
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="Full-name" type="email" class="form-control" placeholder="Last name"
                    v-model="fields.last_name" />

                </div>
              </div>
              <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Phone</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="phone-no" type="number" class="form-control" v-model="fields.phone" placeholder="Phone" />
                </div>
              </div>

              <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Priority</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <div class="flex flex-col sm:flex-row mt-2">
                    <div class="form-check mr-2">
                      <input id="radio-switch" class="form-check-input" type="radio" value="" />
                      <label class="form-check-label" for="radio-switch">Emergency</label>
                    </div>

                    <div class="form-check mr-2 mt-2 sm:mt-0">
                      <input id="radio-switch-1" class="form-check-input" type="radio" value="" />
                      <label class="form-check-label" for="radio-switch-1">High</label>
                    </div>
                    <div class="form-check mr-2 mt-2 sm:mt-0">
                      <input id="radio-switch-2" class="form-check-input" type="radio" value="" />
                      <label class="form-check-label" for="radio-switch-2">Medium</label>
                    </div>
                    <div class="form-check mr-2 mt-2 sm:mt-0">
                      <input id="radio-switch-3" class="form-check-input" type="radio" value="" />
                      <label class="form-check-label" for="radio-switch-3">Low</label>
                    </div>
                  </div>

                </div>
              </div>
              <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left">
                    <div class="flex items-center">
                      <div class="font-medium">Facility Location</div>
                      <div
                        class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                        Required
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
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
              <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">General Location</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <select id="Location" class="form-select">
                    <option value="Desktop">
                      Main Floor - Electrical
                    </option>
                    <option value="Laptop">
                      Main Floor - Mechanical
                    </option>
                    <option value="Tablet">
                      Main Floor - Powder Coat
                    </option>
                    <option value="Tablet">
                      Main Floor - S4/P4
                    </option>
                    <option value="Tablet">
                      Main Floor - Shipping
                    </option>
                    <option value="Tablet">
                      Lobby
                    </option>
                    <option value="Tablet">
                      Theater/Training Room
                    </option>
                    <option value="Tablet">
                      Executive Offices
                    </option>
                    <option value="Tablet">
                      Receiving
                    </option>
                    <option value="Tablet">
                      Shipping
                    </option>
                    <option value="Tablet">
                      Penninsula
                    </option>
                    <option value="Tablet">
                      Slim Area
                    </option>
                  </select>
                </div>
              </div>
              <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Department Requesting</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <select id="Location" class="form-select">
                    <option value="Dell">
                      Environmental, Health, & Safety
                    </option>
                    <option value="HP">
                      Finance
                    </option>
                    <option value="Lenovo">
                      Human Resources
                    </option>
                    <option value="Panasonic">
                      Information Technology
                    </option>
                    <option value="Panasonic">
                      Logistics
                    </option>
                    <option value="Panasonic">
                      Manufacturing
                    </option>
                    <option value="Panasonic">
                      Operational Excellence
                    </option>
                    <option value="Panasonic">
                      Quality
                    </option>
                  </select>
                </div>
              </div>
              <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Facilities Request</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <div class="flex flex-col sm:flex-row flex-wrap mt-2">
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">Maintenance</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">Repair</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">Notification</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">Remodel</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">Installation</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">Upgrade</label>
                    </div>

                  </div>
                </div>
              </div>
              <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">System</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <div class="flex flex-col sm:flex-row mt-2 flex-wrap">
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">Cafeteria</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">Custodial Services</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">Doors</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">Electrical/​Lighting</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">General Facilities</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">HVAC</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">Restrooms</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">Parking Lot</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">Office Space /​ Cubicle</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">Vending Machines</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Description</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <textarea id="update-profile-form-5" class="form-control" placeholder="Description"
                    v-model="fields.address" rows="4"></textarea>
                </div>
              </div>
              <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Upload Photos or Supporting Information  </div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="phone-no" type="file" class="form-control"  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Product Information -->



        <div class="flex justify-end flex-col md:flex-row gap-2 mt-5">
          <button type="button"
            class="btn py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 w-full md:w-52">
            Cancel
          </button>
          <button type="button"
            class="btn py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 w-full md:w-52">
            Save & Add Facilities Maintenance Request
          </button>
          <button type="submit" class="btn py-3 btn-primary w-full md:w-52">
            Save
          </button>
        </div>
      </div>

      <div class="intro-y col-span-2 hidden 2xl:block">
        <div class="pt-10 sticky top-0">
          <ul
            class="text-slate-500 relative before:content-[''] before:w-[2px] before:bg-slate-200 before:dark:bg-darkmode-600 before:h-full before:absolute before:left-0 before:z-[-1]">
            <li class="mb-4 border-l-2 pl-5 border-primary dark:border-primary text-primary font-medium">
              <a href="">Upload Product</a>
            </li>
            <li class="mb-4 border-l-2 pl-5 border-transparent dark:border-transparent">
              <a href="">Product Information</a>
            </li>
            <li class="mb-4 border-l-2 pl-5 border-transparent dark:border-transparent">
              <a href="">Product Detail</a>
            </li>
            <li class="mb-4 border-l-2 pl-5 border-transparent dark:border-transparent">
              <a href="">Product Variant</a>
            </li>
            <li class="mb-4 border-l-2 pl-5 border-transparent dark:border-transparent">
              <a href="">Product Variant (Details)</a>
            </li>
            <li class="mb-4 border-l-2 pl-5 border-transparent dark:border-transparent">
              <a href="">Product Management</a>
            </li>
            <li class="mb-4 border-l-2 pl-5 border-transparent dark:border-transparent">
              <a href="">Weight & Shipping</a>
            </li>
          </ul>
          <div
            class="mt-10 bg-warning/20 dark:bg-darkmode-600 border border-warning dark:border-0 rounded-md relative p-5">
            <LightbulbIcon class="w-12 h-12 text-warning/80 absolute top-0 right-0 mt-5 mr-3" />
            <h2 class="text-lg font-medium">Tips</h2>
            <div class="mt-5 font-medium">Price</div>
            <div class="leading-relaxed text-xs mt-2 text-slate-600 dark:text-slate-500">
              <div>
                The image format is .jpg .jpeg .png and a minimum size of 300 x
                300 pixels (For optimal images use a minimum size of 700 x 700
                pixels).
              </div>
              <div class="mt-2">
                Select product photos or drag and drop up to 5 photos at once
                here. Include min. 3 attractive photos to make the product more
                attractive to buyers.
              </div>
            </div>
          </div>
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
      this.fields.last_known_location = 'Test'
      this.fields.description = 'Hii'
      this.fields.resolution = 'Hii'
      this.fields.status = 1
      console.log(this.fields)
      axios.post(`${API_BASE_URL}/demage_report`, this.fields).then((res) => {
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
