<template>
  <div class="intro-y flex items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Add Employee</h2>
  </div>
  <form @submit.prevent="addEmployee" class="add-form">
  <div class="grid grid-cols-11 gap-x-6 mt-5 pb-20">
    <div class="intro-y col-span-11 2xl:col-span-9">
      <!-- BEGIN: Uplaod Product -->
      <div class="intro-y box p-5">
        <div
          class="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5"
        >
          <div
            class="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5"
          >
            <ChevronDownIcon class="w-4 h-4 mr-2" /> Upload Employee
          </div>
          <div class="mt-5">
            
            <div class="form-inline items-start flex-col xl:flex-row mt-10">
              <div class="form-label w-full xl:w-64 xl:!mr-10">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Employee Photos</div>
                    <div
                      class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
                    >
                      Required
                    </div>
                  </div>
                  <div class="leading-relaxed text-slate-500 text-xs mt-3">
                    <div>
                      The image format is .jpg .jpeg .png and a minimum size of
                      300 x 300 pixels (For optimal images use a minimum size of
                      700 x 700 pixels).
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="w-full mt-3 xl:mt-0 flex-1 border-2 border-dashed dark:border-darkmode-400 rounded-md pt-4"
              >
                <div class="grid grid-cols-10 gap-5 pl-4 pr-5">
                  <div
                    v-for="(faker, fakerKey) in $_.take($f(), 1)"
                    :key="fakerKey"
                    class="col-span-12 md:col-span-12 h-28 relative image-fit cursor-pointer zoom-in"
                  >
                    <img
                      class="rounded-md"
                      alt="Midone - HTML Admin Template"
                      :src="faker.photos[0]"
                    />
                    <Tippy
                      content="Remove this image?"
                      class="tooltip w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-danger right-0 top-0 -mr-2 -mt-2"
                    >
                      <XIcon class="w-4 h-4" />
                    </Tippy>
                  </div>
                </div>
                <div
                  class="px-4 pb-4 mt-5 flex items-center justify-center cursor-pointer relative"
                >
                  <ImageIcon class="w-4 h-4 mr-2" />
                  <span class="text-primary mr-1">Upload a file</span> or drag
                  and drop
                  <input
                    id="horizontal-form-1"
                    type="file"
                    class="w-full h-full top-0 left-0 absolute opacity-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Uplaod Product -->
      <!-- BEGIN: Product Information -->
      <div class="intro-y box p-5 mt-5">
        <div
          class="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5"
         >
              <div
                class="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5"
              >
            <ChevronDownIcon class="w-4 h-4 mr-2" /> Employee Information
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
                  id="employee-name"
                  type="text"
                  class="form-control"
                  placeholder="First Name"
                  v-model="fields.first_name"
                />
                <div class="form-help text-right">Maximum character 0/70</div>
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
                id="employee-name"
                type="text"
                class="form-control"
                placeholder="Last name"
                v-model="fields.last_name"
              />
              <div class="form-help text-right">Maximum character 0/70</div>
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
                <select id="category"  v-model="fields.department_id" class="form-select">
                  <option
                  v-for="(department, index) in departments"
                    :key="index"
                    :value="department.id"
                  >
                    {{ department.department_name }}
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
                    <div class="font-medium">UserName</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <input
                  id="UserName"
                  type="text"
                  class="form-control"
                  v-model="fields.employee_id"
                  placeholder="UserName"
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
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Password</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <input
                  id="password"
                  type="password"
                  class="form-control"
                  v-model="fields.password"
                  placeholder="Password"
                />
              </div>
            </div>
        
              <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Address</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                  <ClassicEditor v-model="fields.department_id" :config="editorConfig" />
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
          Save & Add New Employee
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
 <!-- BEGIN: Success Notification -->
 <PreviewComponent class="intro-y box mt-5" v-slot="{ toggle }">
        <div
          class="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400"
        >
          <h2 class="font-medium text-base mr-auto">Success Notification</h2>
          
        </div>
        <div class="p-5">
          <Preview>
            <div class="text-center">
              <!-- BEGIN: Notification Content -->
              <Notification refKey="successNotification" class="flex">
                <CheckCircleIcon class="text-success" />
                <div class="ml-4 mr-4">
                  <div class="font-medium">Message Saved!</div>
                  <div class="text-slate-500 mt-1">
                    The message will be sent in 5 minutes.
                  </div>
                </div>
              </Notification>
              <!-- END: Notification Content -->
              <!-- BEGIN: Notification Toggle -->
              <button
                class="btn btn-primary"
                @click="successNotificationToggle"
              >
                Show Notification
              </button>
              <!-- END: Notification Toggle -->
            </div>
          </Preview>
          
        </div>
      </PreviewComponent>
      <!-- END: Success Notification -->

</template>

<script>
import { ref, provide } from "vue";
import axios from 'axios'
import { API_BASE_URL } from '../../config'
const subcategory = ref([]);
const editorData = ref("<p>Content of the editor.</p>");
export default {
data() {
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

   methods: {
            getDepartments() {
                  axios.get(`${API_BASE_URL}/get_department`).then((res)=>{
                    console.log(res.data.Department)
                    this.departments=res?.data?.Department
                  }).catch((err)=>{
                    console.log(err)
                  })
                
                },
                addEmployee(e){
                    e.preventDefault();
                    console.log('yess')
                    console.log(this.fields)
                    this.fields.created_by=1
                    axios.post(`${API_BASE_URL}/create_employee`,this.fields).then((res)=>{
                      if(res.status==200){
                        this.$toast.success(`Employee Created Successfully!`);
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
// Success notification
const successNotification = ref();
provide("bind[successNotification]", (el) => {
  // Binding
  successNotification.value = el;
});
const successNotificationToggle = () => {
  // Show notification
  successNotification.value.showToast();
};

</script>
