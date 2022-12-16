<template>
  <div class="intro-y flex items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Modula Termination Notice</h2>
    
  </div>
  <div class="mt-2 intro-y">
    Please use this form to request termination of IT accounts, access, and services. This includes email accounts, user accounts, mobile phones, and door access badges.
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
                    <div class="font-medium">Manager/​Requestor Name</div>
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
                  placeholder="Manager/​Requestor Name"
                  v-model="termination.manager_name"
                />
               
              </div>
            </div>
            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Manager Last Name</div>
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
                  placeholder="Manager/​Requestor Name"
                  v-model="termination.last_name"
                />
               
              </div>
            </div>
            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Manager/​Requestor Email </div>
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
                  type="email"
                  class="form-control"
                  placeholder="Manager/​Requestor Email "
                  v-model="termination.manager_email"
                />
               
              </div>
            </div>
            
            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Requestor Job Title</div>
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
                  placeholder="Requestor Job Title"
                  v-model="termination.title"
                />
               
              </div>
            </div>
             
            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Effective Date</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <input
                  id="Full-name"
                  type="date"
                  class="form-control"
                  placeholder="Effective Date"
                  v-model="termination.effective_date"
                />
              </div>
            </div>

            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Priority</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <select id="Location"  class="form-select" @change="onChangePriority($event)">
                  <option
                 value="Normal"
                  >
                  Normal
                  </option>
                  <option
                 value="Immediate"
                  >
                  Immediate
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
                    <div class="font-medium">New Employee Position/​Job Title</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <input
                  id="email"
                  type="text"
                  class="form-control"
                  v-model="fields.email"
                  placeholder="New Employee Position"
                />
              </div>
            </div>

            <!-- <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Priority</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <select id="Location"  class="form-select">
                  <option
                 value="Normal"
                  >
                  Normal
                  </option>
                  <option
                 value="Immediate"
                  >
                  Immediate
                  </option>
                </select>
              </div>
            </div> -->
            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Employee Name</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <input
                  id="email"
                  type="text"
                  class="form-control"
                  v-model="termination.employee_name"
                  placeholder="Employee Name"
                />
              </div>
            </div>

            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Employee Last Name</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <input
                  id="email"
                  type="text"
                  class="form-control"
                  v-model="termination.emp_last_name"
                  placeholder="Employee Last Name"
                />
              </div>
            </div>
           
            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Employee Job Title</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <input
                  id="email"
                  type="text"
                  class="form-control"
                  v-model="termination.emp_job_title"
                  placeholder="Employee Job Title"
                />
              </div>
            </div>
            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium"> Badge #</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <input
                  id="email"
                  type="text"
                  class="form-control"
                  v-model="termination.badge"
                  placeholder=" Badge"
                />
              </div>
            </div>

            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Badge Collected?</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <select id="Location"  class="form-select" @change="changeBadge($event)">
                  <option
                 value="yes"
                  >
                  yes
                  </option>
                  <option
                 value="No"
                  >
                  No
                  </option>
                 
                </select>
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
                <select id="Location"  class="form-select"  @change="changeLocation($event)">
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
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Cell Phone Access Code</div>
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
                  id="email"
                  type="number"
                  class="form-control"
                  v-model="termination.code"
                  placeholder="Employee Job Title"
                />
              </div>
            </div>
             
              <div     
                class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Equipment Collected</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <TomSelect
              v-model="termination.equipment_collected"
              :options="{
                placeholder: 'Select your Equipment Type',
                plugins: {
                  dropdown_header: {
                    title: 'Equipment Type',
                  },
                },
              }"
              class="w-full"
              multiple
            >
              <option value="Docking-Station">Docking Station</option>
              <option value="Laptop">Laptop</option>
              <option value="Laptop-Bag/​Backpack">Laptop Bag/​Backpack</option>
              <option value="Mobile-Phone">Mobile Phone</option>
              <option value="Power-Cords">Power Cords</option>
            </TomSelect>
              </div>
            </div>
            <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Software Removal</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <TomSelect
              v-model="termination.soft_removal"
              :options="{
                placeholder: 'Select Software Removal',
                plugins: {
                  dropdown_header: {
                    title: 'Software ',
                  },
                },
              }"
              class="w-full"
              multiple
            >
              <option value="MPS">MPS</option>
              <option value="Office365">Office365</option>
              <option value="Outlook/​Exchange">Outlook/​Exchange</option>
              <option value="WMS">WMS</option>
              <option value="SAP">SAP</option>
              <option value="Windchill">Windchill</option>
              <option value="Not-Applicable">Not Applicable</option>
            </TomSelect>
           </div>
            </div>
         
            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Special Instructions</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <textarea
                      id="update-profile-form-5"
                      class="form-control"
                      placeholder="Special Instructions"
                      v-model="termination.instruction" 
                      rows="4"
                    ></textarea>
             
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

        <button type="submit" class="btn py-3 btn-primary w-full md:w-52">
          Save
        </button>
      </div>
    </div>
<!-- 
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
    </div> -->
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
      termination:{},
      priority:'Normal',
      location:'Franklin, OH',
      collected:'yes'
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
            onChangePriority(event){
              this.priority=event.target.value
            },
            changeBadge(event){
              this.collected=event.target.value
            },
            changeLocation(event){
              this.location=event.target.value
            },
            createReport(e){
                 e.preventDefault();
                 this.termination.priority=this.priority
                 this.termination.location=this.location
                 this.termination.collected=this.badge
                console.log(this.termination)
                axios.post(`${API_BASE_URL}/add_terminate_office`,this.termination).then((res)=>{
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
<script setup>
const selectSoftware = ref([]);
const selectEquipment = ref([]);
</script>
