<template>

  <div class="border-b border-white/[0.08]  md:-mt-5 -mx-3 sm:-mx-8 px-3 box pt-3 mb-1">
    <div class="top-bar-boxed flex items-center my-4">
      <!-- BEGIN: Logo -->
      <router-link :to="{ name: 'side-menu-dashboard-overview-4' }" tag="a" class="-intro-x md:flex">
        <img class="h-16" alt="Midone Tailwind HTML Admin Template"
          src="https://www.cognitoforms.com/file/PY98Tpd3p2cUH_ojupJJzh6dKQWEicACg9A7BuMhySwbN2I0NPclvU6pOcXxgN0-" />
      </router-link>
      <!-- END: Logo -->
      <!-- BEGIN: Account Menu -->
      <div class="ml-auto flex">

        <!-- BEGIN: Slide Over Toggle -->

        <!-- BEGIN: Small Slide Over Toggle -->
        <a href="javascript:;" data-tw-toggle="modal" data-tw-target="#small-slide-over-size-preview" class="btn ">
          <AlignJustifyIcon class="block mx-auto" />
        </a>
        <!-- END: Small Slide Over Toggle -->

        <!-- END: Slide Over Toggle -->
        <!-- BEGIN: Slide Over Content -->
        <div id="small-slide-over-size-preview" class="modal modal-slide-over" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-sm">
            <div class="modal-content">
              <div class="modal-header block py-5">
                <img
                  src="https://www.cognitoforms.com/file/PY98Tpd3p2cUH_ojupJJzh6dKQWEicACg9A7BuMhySwbN2I0NPclvU6pOcXxgN0-"
                  class="img-fluid" />
                <h2 class="font-medium text-base text-center">User Name</h2>
              </div>
              <div class="modal-body p-0">
                <router-link :to="{ name: 'landing' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex ml-5 mt-2 ">
                  Home
                </router-link>
                <router-link :to="{ name: 'side-menu-add-product' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex ml-5 mt-2 ">
                  Forms
                </router-link>
                <div class="dropdown">
                  <a class="dropdown-toggle btn btn-primary" aria-expanded="false" data-tw-toggle="dropdown">Show
                    Dropdown</a>
                  <div class="dropdown-menu w-40">
                    <ul class="dropdown-content">
                      <li>
                        <a href="/employeeAccess" class="dropdown-item">Employee-Access</a>
                      </li>
                      <li>
                        <a href="/facilitiesMaintenance" class="dropdown-item">Facilities-Maintenance</a>
                      </li>
                      <li>
                        <a href="" class="dropdown-item">Employee-Custody</a>
                      </li>
                      <li>
                        <a href="" class="dropdown-item">Hardware & Software Request Form </a>
                      </li>
                      <li>
                        <a href="" class="dropdown-item">New Hire IT Equipment </a>
                      </li>
                      <li>
                        <a href="" class="dropdown-item">Modula-Termination-Notice </a>
                      </li>
                      <li>
                        <a href="" class="dropdown-item">IT Move Request Form </a>
                      </li>
                      <li>
                        <a href="" class="dropdown-item">Damaged & Lost Equipment</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <router-link :to="{ name: 'side-menu-add-product' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex ml-5 mt-2 ">
                  News & Announcements
                </router-link>
                <router-link :to="{ name: 'side-menu-add-product' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex ml-5 mt-2 ">
                  Company Strategy & Goals
                </router-link>
                <router-link :to="{ name: 'side-menu-add-product' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex ml-5 mt-2 ">
                  Policies
                </router-link>
                <router-link :to="{ name: 'side-menu-add-product' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex ml-5 mt-2 ">
                  New Employee Onboarding
                </router-link>
                <router-link :to="{ name: 'Purchasing' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex ml-5 mt-2 ">
                  Purchasing
                </router-link>
                <router-link :to="{ name: 'Corporate' }" tag="a" data-tw-dismiss="modal"
                  class=" font-medium -intro-x md:flex ml-5 mt-2 ">
                  Corporate Planning Department
                </router-link>
                <a href="https://access.paylocity.com" target="_blank" data-tw-dismiss="modal"
                  class=" font-medium -intro-x md:flex ml-5 mt-2 ">
                  Paylocity
                </a>
                <router-link :to="{ name: 'side-menu-add-product' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex ml-5 mt-2 ">
                  Departments
                </router-link>
                <router-link :to="{ name: 'side-menu-add-product' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex ml-5 mt-2 ">
                  Training
                </router-link>
                <router-link :to="{ name: 'side-menu-add-product' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex ml-5 mt-2 ">
                  Safety
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Slide Over Content -->
      </div>
      <!-- END: Account Menu -->
    </div>
  </div>

  <form @submit.prevent="createReport" enctype="multipart/form-data" class="add-form">
    <div class="grid grid-cols-11 gap-x-6 mt-5 pb-20">

      <div class="intro-y col-span-11 2xl:col-span-9">
        <!-- BEGIN: Product Information -->
        <div class="intro-y box md:w-4/5 p-5 mt-5 mx-auto">
          <div class=" dark:border-darkmode-400 rounded-md p-5">
            <div class="intro-y text-center mt-3">
              <h2 class="text-lg font-medium mr-auto">Facilities Maintenance Request</h2>
            </div>
            <div class="mt-2 intro-y text-center">
              This form is to be used when equipment is issued to an employee. It is a receipt showing assignment of
              items to a
              specific person and they are responsible for the care and safekeeping of those items, while the items are
              in their
              possession.
            </div>
            <div class="mt-5">
              <div class="grid gap-6 grid-cols-12">
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left">
                        <div class="flex items-center">
                          <div class="font-medium"> Name</div>
                        </div>

                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input id="Full-name" type="text" class="form-control" placeholder=" Name"
                        v-model="fields.name" />

                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left">
                        <div class="flex items-center">
                          <div class="font-medium">Email</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input id="Full-name" type="email" class="form-control" placeholder="Email"
                        v-model="fields.email" />
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Phone</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input id="phone-no" type="number" class="form-control" v-model="fields.phone"
                        placeholder="Phone" />
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
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
                          <input id="radio-switch" v-model="fields.priority" class="form-check-input" type="radio"
                            value="1" />
                          <label class="form-check-label" for="radio-switch">Emergency</label>
                        </div>

                        <div class="form-check mr-2 mt-2 sm:mt-0">
                          <input id="radio-switch-1" v-model="fields.priority" class="form-check-input" type="radio"
                            value="2" />
                          <label class="form-check-label" for="radio-switch-1">High</label>
                        </div>
                        <div class="form-check mr-2 mt-2 sm:mt-0">
                          <input id="radio-switch-2" v-model="fields.priority" class="form-check-input" type="radio"
                            value="3" />
                          <label class="form-check-label" for="radio-switch-2">Medium</label>
                        </div>
                        <div class="form-check mr-2 mt-2 sm:mt-0">
                          <input id="radio-switch-3" v-model="fields.priority" class="form-check-input" type="radio"
                            value="4" />
                          <label class="form-check-label" for="radio-switch-3">Low</label>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left">
                        <div class="flex items-center">
                          <div class="font-medium">Facility Location</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <select id="Location" v-model="fields.facility_location" class="form-select">
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
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">General Location</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <select id="Location" v-model="fields.general_location" class="form-select">
                        <option value="Main-Floor-Electrical">
                          Main Floor - Electrical
                        </option>
                        <option value="Main-Floor-Mechanical">
                          Main Floor - Mechanical
                        </option>
                        <option value="Main-Floor-Powder">
                          Main Floor - Powder Coat
                        </option>
                        <option value="Main-Floor-s4/p4">
                          Main Floor - S4/P4
                        </option>
                        <option value="Main-Floor-shipping">
                          Main Floor - Shipping
                        </option>
                        <option value="Lobby">
                          Lobby
                        </option>
                        <option value="Theater">
                          Theater/Training Room
                        </option>
                        <option value="Executive">
                          Executive Offices
                        </option>
                        <option value="Receiving">
                          Receiving
                        </option>
                        <option value="Shipping">
                          Shipping
                        </option>
                        <option value="Penninsula">
                          Penninsula
                        </option>
                        <option value="Slim-Area">
                          Slim Area
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Department Requesting</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <select id="category" v-model="fields.department_id" class="form-select">
                        <option v-for="(department, index) in departments" :key="index"
                          :value="department.department_name">
                          {{ department.department_name }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Facilities Request</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <TomSelect v-model="fields.facility_request" :options="{
                        placeholder: 'Select Facilities',
                        plugins: {
                          dropdown_header: {
                            title: 'Facilities',
                          },
                        },
                      }" class="w-full" multiple>
                        <option value="Maintenance">Maintenance</option>
                        <option value="Repair">Repair</option>
                        <option value="Notification">Notification</option>
                        <option value="Remodel">Remodel</option>
                        <option value="Installation">Installation</option>
                        <option value="Upgrade">Upgrade</option>
                      </TomSelect>

                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">System</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <TomSelect v-model="fields.system" :options="{
                        placeholder: 'Select System',
                        plugins: {
                          dropdown_header: {
                            title: 'System',
                          },
                        },
                      }" class="w-full" multiple>
                        <option value="Cafeteria">Cafeteria</option>
                        <option value="Custodial">Custodial Services</option>
                        <option value="Doors">Doors</option>
                        <option value="Electrical">Electrical/​Lighting</option>
                        <option value="General">General Facilities</option>
                        <option value="HVAC">HVAC</option>
                        <option value="Restrooms">Restrooms</option>
                        <option value="Parking">Parking Lot</option>
                        <option value="Cubicle">Office Space /​ Cubicle</option>
                        <option value="Vending">Vending Machines</option>
                      </TomSelect>
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Description</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <textarea id="update-profile-form-5" v-model="fields.description" class="form-control"
                        placeholder="Description" rows="4"></textarea>
                    </div>
                  </div>
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
                  <input id="phone-no" v-on:change="handleFileObject" type="file" class="form-control" />
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


    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import axios from 'axios';
import _ from 'lodash'
import DarkModeSwitcher from "@/components/dark-mode-switcher/Main.vue";
import dom from "@left4code/tw-starter/dist/js/dom";
import { API_BASE_URL } from '../../config'

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
      file: '',
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
    handleFileObject(event) {
      this.file = event.target.files[0];
      console.log(this.file)
      //this.avatarName = this.avatar.name
    },
    createReport(e) {
      e.preventDefault();
      this.fields.status = 1
      var formData = new FormData();
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }
      // _.each(this.fields, (value, key) => {
      //   console.log(value)
      //     formData.append(key, value)
      //   })
  
     formData.append('file', this.file)
     console.log(formData);
     // this.fields.file=this.file
      axios.post(`${API_BASE_URL}/create_facility_request`, JSON.stringify(formData), config).then((res) => {
        console.log(res);
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
const system = ref(["1"]);

onMounted(() => {
  dom("body").removeClass("main").removeClass("error-page").removeClass("login").addClass("landing");
});

</script>