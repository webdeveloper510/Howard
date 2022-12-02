<template>
  <div class="intro-y flex items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Damaged & Lost Equipment Report</h2>
    
  </div>
  <div class="mt-2">
      Modula employees are required to report any damage, loss or theft of company owned and
       operated equipment as soon as possible. Completed copies of this form must be submitted 
       within 24 hours of an incident. Please note that where an injury occurs as a result of any
        damage, loss or theft of Modula owned and operated equipment, employees are required to 
        report the incident and notify the Safety Department immediately.
    </div>
    <form @submit.prevent="createReport" class="add-form">
  <div class="grid grid-cols-11 gap-x-6 mt-5 pb-20">
 
    <div class="intro-y col-span-11 2xl:col-span-9">
      <!-- BEGIN: Product Information -->
      <div class="intro-y box p-5 mt-5">
        <div
          class=" dark:border-darkmode-400 rounded-md p-5"
        >
            <div
              class="font-medium text-base flex items-center border-slate-200/60 dark:border-darkmode-400 pb-5"
            >
              Employee Information <ChevronDownIcon class="w-4 h-4 ml-2" />
            </div>
          <div class="mt-5">
            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">First Name</div>
                    <div
                      class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
                    >
                      Required
                    </div>
                  </div>
                 
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <input
                  id="Full-name"
                  type="text"
                  class="form-control"
                  placeholder="First name"
                  v-model="fields.first_name"
                />
               
              </div>
            </div>

            <div
            class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
          >
            <div class="form-label xl:w-64 xl:!mr-10">
              <div class="text-left">
                <div class="flex items-center">
                  <div class="font-medium">Last Name</div>
                  <div
                    class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
                  >
                    Required
                  </div>
                </div>
               
              </div>
            </div>
            <div class="w-full mt-3 xl:mt-0 flex-1">
              <input
                id="Full-name"
                type="text"
                class="form-control"
                placeholder="First name"
                v-model="fields.last_name"
              />
             
            </div>
          </div>


            
            
            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Location</div>
                    <div
                      class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
                    >
                      Required
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <select id="category" v-model="fields.location" class="form-select">
                  <option
                    v-for="(faker, fakerKey) in $_.take($f(), 9)"
                    :key="fakerKey"
                    :value="faker.categories[0].name"
                  >
                    {{ faker.categories[0].name }}
                  </option>
                </select>
              </div>
            </div>
            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Phone Number</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <input
                  id="phone-no"
                  type="number"
                  class="form-control"
                  v-model="fields.phone"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            
              <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Email</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <input
                  id="email"
                  type="email"
                  class="form-control"
                  v-model="fields.email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Department</div>
                    <div
                      class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
                    >
                      Required
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <select id="category" v-model="fields.department" class="form-select">
                  <option
                  v-for="(department, index) in departments"
                    :key="index"
                    :value="department.id"
                  >
                    {{department.department_name}}
                  </option>
                </select>
              </div>
            </div>
              <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Position/​Title</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <input
                  id="password"
                  type="text"
                  v-model="fields.title" 
                  class="form-control"
                  placeholder="Enter Position/​Title"
                />
              </div>
            </div>
              <div     
                class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Address</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <textarea
                      id="update-profile-form-5"
                      class="form-control"
                      placeholder="Address"
                      v-model="fields.address" 
                      rows="4"
                    ></textarea>
                <div class="form-help text-right">Only complete this box if you are not located in the Lewiston or Franklin offices. If you work remotely from home,
                   or travel as a sales rep, etc, then complete this address field.</div>
              </div>
            </div>
            <div          class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Date of Incident</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <div class="relative w-full mx-auto">
                  <div class="absolute rounded-l w-10 h-full flex items-center justify-center bg-slate-100 border text-slate-500 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400">
                        <CalendarIcon class="w-4 h-4" />
                  </div>
                  <Litepicker v-model="fields.date_of_incident" :options="{
                                    autoApply: false,
                                    showWeekNumbers: true,
                                    format:'YYYY-MM-DD\T00:00:00'
                                  }" class="form-control pl-12" />
                </div>
                <div class="form-help text-right">Enter the approximate date the item was lost, stolen or damaged.</div>
              </div>
            </div>
            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Time of Incident</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <input
                  id="time"
                  v-model="fields.time_of_incident"
                  type="time"
                  class="form-control"
                />
                <div class="form-help text-right">Enter the approximate time the item was lost, stolen or damaged.</div>           
              </div>
            </div>
            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Date Reported</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <div class="relative w-full mx-auto">
                  <div class="absolute rounded-l w-10 h-full flex items-center justify-center bg-slate-100 border text-slate-500 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400">
                        <CalendarIcon class="w-4 h-4" />
                  </div>
                  <Litepicker v-model="fields.reported_date" :options="{
                                    autoApply: false,
                                    showWeekNumbers: true,
                                    format: 'YYYY-MM-DD\T00:00:00'
                                  }" class="form-control pl-12" />
                </div>
                <div class="form-help text-right">Enter the approximate date the item was lost, stolen or damaged.</div>
              </div>
            </div>
            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Time Reported</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <input
                  id="time"
                  v-model="fields.reported_time"
                  type="time"
                  class="form-control"
                />
                <div class="form-help text-right">Enter the approximate time the item was lost, stolen or damaged.</div>
             
              </div>
            </div>
            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Police Report </div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <input
                  id="password"
                  v-model="fields.police_report"
                  type="text"
                  class="form-control"
                  placeholder="Enter Police Report "
                />
              </div>
            </div>
            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Officer In Charge/​Reporting Officer Name </div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <input
                  id="password"
                  type="text"
                  v-model="fields.reporting_officer_name"
                  class="form-control"
                  placeholder="Enter Officer In Charge/​Reporting Officer Name "
                />
              </div>
            </div>
            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Station Phone </div>
                  </div>
                </div>
              </div> 
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <input
                  id="password"
                  type="number"
                  v-model="fields.station_phone"
                  class="form-control"
                  placeholder="Enter Police Report "
                />
              </div>
            </div>
            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Police Phone </div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <input
                  id="password"
                  v-model="fields.police_phone"
                  type="number"
                  class="form-control"
                  placeholder="Enter Police Phone"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Product Information -->
    
    
    
      <div class="flex justify-end flex-col md:flex-row gap-2 mt-5">
        <button
          type="button"
          class="btn py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 w-full md:w-52"
        >
          Cancel
        </button>
        <button
          type="button"
          class="btn py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 w-full md:w-52"
        >
          Save & Add Report
        </button>
        <button type="submit" class="btn py-3 btn-primary w-full md:w-52">
          Save
        </button>
      </div>
    </div>

    <div class="intro-y col-span-2 hidden 2xl:block">
      <div class="pt-10 sticky top-0">
        <ul
          class="text-slate-500 relative before:content-[''] before:w-[2px] before:bg-slate-200 before:dark:bg-darkmode-600 before:h-full before:absolute before:left-0 before:z-[-1]"
        >
          <li
            class="mb-4 border-l-2 pl-5 border-primary dark:border-primary text-primary font-medium"
          >
            <a href="">Upload Product</a>
          </li>
          <li
            class="mb-4 border-l-2 pl-5 border-transparent dark:border-transparent"
          >
            <a href="">Product Information</a>
          </li>
          <li
            class="mb-4 border-l-2 pl-5 border-transparent dark:border-transparent"
          >
            <a href="">Product Detail</a>
          </li>
          <li
            class="mb-4 border-l-2 pl-5 border-transparent dark:border-transparent"
          >
            <a href="">Product Variant</a>
          </li>
          <li
            class="mb-4 border-l-2 pl-5 border-transparent dark:border-transparent"
          >
            <a href="">Product Variant (Details)</a>
          </li>
          <li
            class="mb-4 border-l-2 pl-5 border-transparent dark:border-transparent"
          >
            <a href="">Product Management</a>
          </li>
          <li
            class="mb-4 border-l-2 pl-5 border-transparent dark:border-transparent"
          >
            <a href="">Weight & Shipping</a>
          </li>
        </ul>
        <div
          class="mt-10 bg-warning/20 dark:bg-darkmode-600 border border-warning dark:border-0 rounded-md relative p-5"
        >
          <LightbulbIcon
            class="w-12 h-12 text-warning/80 absolute top-0 right-0 mt-5 mr-3"
          />
          <h2 class="text-lg font-medium">Tips</h2>
          <div class="mt-5 font-medium">Price</div>
          <div
            class="leading-relaxed text-xs mt-2 text-slate-600 dark:text-slate-500"
          >
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
  data(){
    return {

      msg: [],
      fields: {},
      errors: {},
      success: false,
    }
  },
  created() {
             this.getDepartments();
        },
  methods : {
        getDepartments() {
              axios.get(`${API_BASE_URL}/get_department`).then((res)=>{
                console.log(res.data.Department)
                this.departments=res?.data?.Department
              }).catch((err)=>{
                console.log(err)
              })
             
            },
            createReport(e){
                 e.preventDefault();
                console.log('yess')
                this.fields.last_known_location='Test'
                this.fields.description='Hii'
                this.fields.resolution='Hii'
                this.fields.status=1
                console.log(this.fields)
                axios.post(`${API_BASE_URL}/demage_report`,this.fields).then((res)=>{
                    console.log(res)
                })
            }
        }

  
}
</script>
