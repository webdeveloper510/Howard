<template>
  <div class="intro-y flex items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Employee Access Badge Form</h2>
    
  </div>
  <div class="mt-2 intro-y">
    This form is for employees who require an access badge to one of our facilities.
    </div>
    <form @submit.prevent="createReport" class="add-form">
  <div class="grid grid-cols-11 gap-x-6 mt-5 pb-20">
 
    <div class="intro-y col-span-11 2xl:col-span-9">
      <!-- BEGIN: Product Information -->
      <div class="intro-y box p-5 mt-5">
        <div
          class=" dark:border-darkmode-400 rounded-md p-5"
        >
            
          <div class="mt-5">
            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Employee Name</div>
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
                <select id="Location"  class="form-select">
                  <option
                 value="Franklin, OH"
                  >
                  Franklin, OH
                  </option>
                  <option
                 value="Lewiston, ME"
                  >
                  Lewiston, ME
                  </option>
                  <option
                 value="Remote"
                  >
                  Field Technicians / Remote / Sales
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
                    <div class="font-medium">Employee Type</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <select id="Location"  class="form-select">
                  <option value="Full Time">
                  Full Time
                  </option>
                  <option value="Part Time">
                  Part Time
                  </option>
                  <option value="Temp">
                  Temp
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
                    <div class="font-medium">Job Title</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <input
                  id="email"
                  type="text"
                  class="form-control"
                  v-model="fields.email"
                  placeholder="Job Title"
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

                <div class="form-help text-right">Enter Assigned Department here.  Example: Operations, Production, HR, IT, Marketing, Sales, Etc.</div>

              </div>
            </div>
              <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Visiting Employee?</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <div class="flex flex-col sm:flex-row mt-2">
                <div class="form-check mr-2">
                  <input
                    id="checkbox-switch-4"
                    class="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  <label class="form-check-label" for="checkbox-switch-4"
                    >Yes</label
                  >
                </div>
                <div class="form-check mr-2 mt-2 sm:mt-0">
                  <input
                    id="checkbox-switch-5"
                    class="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  <label class="form-check-label" for="checkbox-switch-5"
                    >No</label
                  >
                </div>
              </div>
              <div class="form-help text-right">Select whether an employee is visiting from a different office other than their normal office.</div>
              </div>
            </div>
              <div     
                class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Lost or Missing Badge?</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <div class="flex flex-col sm:flex-row mt-2">
                  <div class="form-check mr-2">
                      <input id="radio-switch-4" class="form-check-input" type="radio" name="horizontal_radio_button" value="horizontal-radio-chris-evans">
                      <label class="form-check-label" for="radio-switch-4">Yes</label>
                  </div>
                  <div class="form-check mr-2 mt-2 sm:mt-0">
                      <input id="radio-switch-5" class="form-check-input" type="radio" name="horizontal_radio_button" value="horizontal-radio-liam-neeson">
                      <label class="form-check-label" for="radio-switch-5">No</label>
                  </div>
              </div>
              <div class="form-help text-right">Select "YES" if this is to report a lost or missing badge.  Otherwise, leave at the default of "NO".</div>
              </div>
            </div>
            <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Existing Badge #</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <input
                  id="time"
                  v-model="fields.time_of_incident"
                  type="text"
                  class="form-control"
                />
                <div class="form-help text-right">If an employee has a badge from another office, please enter the 5-digit badge # found on the back of their current badge. Leave blank if no badge has been assigned previously.</div>
              </div>
            </div>
            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Shift Hours - Types of Access Required</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <select id="Location"  class="form-select">
                  <option value="Full Time">
                    Mon-Fri 1st Shift
                  </option>
                  <option value="Part Time">
                    Mon-Fri 2nd Shift
                  </option>
                  <option value="Temp">
                    Office/​Administrative Staff
                  </option>
                  <option value="Temp">
                    Saturday/​Weekend Shift
                  </option>
                </select>
                <div class="form-help text-right">Please select shift employee will work.</div>           
              </div>
            </div>
            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Requested By</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <input
                  id="time"
                  v-model="fields.time_of_incident"
                  type="text"
                  class="form-control"
                />
                <div class="form-help text-right">Manager or Supervisor must request.  Any other requestor will be rejected.</div>
              </div>
            </div>
            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Notes</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <textarea
                      id="update-profile-form-5"
                      class="form-control"
                      placeholder="Notes"
                      v-model="fields.address" 
                      rows="4"
                    ></textarea>
                <div class="form-help text-right">Please enter any additional information that may be required or requires special attention.</div>
             
              </div>
            </div>
            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Assigned Badge # </div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <input
                  id="password"
                  v-model="fields.police_report"
                  type="text"
                  class="form-control"
                  placeholder="Enter Assigned Badge"
                />
                <div class="form-help text-right">For IT Department Use Only</div>
             
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
          Save & Add Employee Access Badge
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
      departments:[],
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
                this.fields.last_known_location='Test'
                this.fields.description='Hii'
                this.fields.resolution='Hii'
                this.fields.status=1
                console.log(this.fields)
                axios.post(`${API_BASE_URL}/demage_report`,this.fields).then((res)=>{
                  if(res.status==200){
                      this.$toast.success(`Report Created Successfully!`);
                    }
                    else{
                      this.$toast.error(`Some error Occure`);
                    }
                })
            }
        }

  
}
</script>
