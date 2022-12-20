<template>
  <Header></Header>

  <form @submit.prevent="createReport" class="add-form">

    <div class="grid grid-cols-11 gap-x-6 mt-5 pb-20">

      <div class="intro-y col-span-11 2xl:col-span-9">
        <!-- BEGIN: Product Information -->
        <div class="intro-y box p-5 mt-5 md:w-4/5 mx-auto">
          <div class="intro-y text-center mt-8">
            <h2 class="text-lg font-medium">Damaged & Lost Equipment Report</h2>
          </div>
          <div class="mt-2 text-center intro-y">
            Modula employees are required to report any damage, loss or theft of company owned and
            operated equipment as soon as possible. Completed copies of this form must be submitted
            within 24 hours of an incident. Please note that where an injury occurs as a result of any
            damage, loss or theft of Modula owned and operated equipment, employees are required to
            report the incident and notify the Safety Department immediately.
          </div>
          <div class=" dark:border-darkmode-400 rounded-md p-5">
            <div class="mt-5">
              <div class="grid gap-6 grid-cols-12">
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class=" items-start  mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label ">
                      <div class="text-left">
                        <div class="flex items-center">
                          <div class="font-medium">First Name</div>
                        </div>

                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input id="Full-name" type="text" class="form-control" placeholder="First name"
                        v-model="fields.first_name" />

                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
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
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left">
                        <div class="flex items-center">
                          <div class="font-medium">Location</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input id="Full-name" type="text" class="form-control" placeholder="Location"
                        v-model="fields.location" />
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Phone Number</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input id="phone-no" type="number" class="form-control" v-model="fields.phone"
                        placeholder="Phone Number" />
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Email</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input id="email" type="email" class="form-control" v-model="fields.email" placeholder="Email" />
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left">
                        <div class="flex items-center">
                          <div class="font-medium">Department</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <select id="category" v-model="fields.department" class="form-select">
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
                          <div class="font-medium">Position/​Title</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input id="password" type="text" v-model="fields.title" class="form-control"
                        placeholder="Enter Position/​Title" />
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Time Reported</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input id="time" v-model="fields.reported_time" type="time" class="form-control" />
                      <div class="form-help text-right">Enter the approximate time the item was lost, stolen or damaged.
                      </div>

                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Date of Incident</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <div class="relative w-full mx-auto">
                        <div
                          class="absolute rounded-l w-10 h-full flex items-center justify-center bg-slate-100 border text-slate-500 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400">
                          <CalendarIcon class="w-4 h-4" />
                        </div>
                        <Litepicker v-model="fields.date_of_incident" :options="{
                          autoApply: false,
                          showWeekNumbers: true,
                          format: 'YYYY-MM-DD\T00:00:00'
                        }" class="form-control pl-12" />
                      </div>
                      <div class="form-help text-right">Enter the approximate date the item was lost, stolen or damaged.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Time of Incident</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input id="time" v-model="fields.time_of_incident" type="time" class="form-control" />
                      <div class="form-help text-right">Enter the approximate time the item was lost, stolen or damaged.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Date Reported</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <div class="relative w-full mx-auto">
                        <div
                          class="absolute rounded-l w-10 h-full flex items-center justify-center bg-slate-100 border text-slate-500 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400">
                          <CalendarIcon class="w-4 h-4" />
                        </div>
                        <Litepicker v-model="fields.reported_date" :options="{
                          autoApply: false,
                          showWeekNumbers: true,
                          format: 'YYYY-MM-DD\T00:00:00'
                        }" class="form-control pl-12" />
                      </div>
                      <div class="form-help text-right">Enter the approximate date the item was lost, stolen or damaged.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Police Report </div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input id="password" v-model="fields.police_report" type="text" class="form-control"
                        placeholder="Enter Police Report " />
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Officer In Charge/​Reporting Officer Name </div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input id="password" type="text" v-model="fields.reporting_officer_name" class="form-control"
                        placeholder="Enter Officer In Charge/​Reporting Officer Name " />
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Station Phone </div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input id="password" type="number" v-model="fields.station_phone" class="form-control"
                        placeholder="Enter Police Report " />
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Police Phone </div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input id="password" v-model="fields.police_phone" type="number" class="form-control"
                        placeholder="Enter Police Phone" />
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Item Lost/​Stolen/​Damaged</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <select id="Location" v-model="fields.status" class="form-select">

                        <option value="Lost/Stolen">
                          Lost/Stolen
                        </option>
                        <option value="Damaged">
                          Damaged
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-span-12">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Last Known Location</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <select id="Location" v-model="fields.last_known_location" class="form-select">
                    <option value="Airport/Airplane">
                      Airport/Airplane
                    </option>
                    <option value="Personal Vehicle">
                      Personal Vehicle
                    </option>
                    <option value="Rental Vehicle">
                      Rental Vehicle
                    </option>
                    <option value="Bus/Train/Public Transportation">
                      Bus/Train/Public Transportation
                    </option>
                    <option value="Hotel">
                      Hotel
                    </option>
                    <option value="Restaurant">
                      Restaurant
                    </option>
                    <option value="Unknown">
                      Unknown
                    </option>
                  </select>

                </div>
              </div>
                </div>
                <div class="col-span-12">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Detailed Description</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <textarea id="update-profile-form-5" class="form-control" placeholder="Enter Department Description"
                    v-model="fields.description" rows="4"></textarea>
                </div>
              </div>
                </div>
                <div class="col-span-12">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Address</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <textarea id="update-profile-form-5" class="form-control" placeholder="Address"
                    v-model="fields.address" rows="4"></textarea>
                  <div class="form-help text-right">Only complete this box if you are not located in the Lewiston or
                    Franklin offices. If you work remotely from home,
                    or travel as a sales rep, etc, then complete this address field.</div>
                </div>
              </div>
                </div>
                <div class="col-span-12">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Resolution</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <textarea id="update-profile-form-5" class="form-control" placeholder="Enter Department Description"
                    v-model="fields.resolution" rows="4"></textarea>
                </div>
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

<script setup>
import { onMounted } from "vue";
import Header from "../../global-components/Header/Main.vue";
onMounted(() => {
  dom("body").removeClass("main").removeClass("error-page").removeClass("login").addClass("landing");
});

</script>
