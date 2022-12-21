<template>
  <Header></Header>
  <form @submit.prevent="addEmployee" class="add-form">
    <div class="grid grid-cols-11 gap-x-6 mt-5 pb-20">
      <div class="intro-y col-span-11 2xl:col-span-9">
        <!-- BEGIN: Product Information -->
        <div class="intro-y box p-5 mt-5 mx-auto md:w-3/5">
          <div class="intro-y  text-center my-5">
            <h2 class="text-lg font-medium mr-auto">Add Employee</h2>
          </div>
          <div class="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
            <div
              class="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
              <ChevronDownIcon class="w-4 h-4 mr-2" /> Employee Information
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
                      <input id="employee-name" type="text" required class="form-control" placeholder="First Name"
                        v-model="fields.first_name" />
                      <div class="form-help text-right">Maximum character 0/70</div>
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
                      <input id="employee-name" type="text" required class="form-control" placeholder="Last name"
                        v-model="fields.last_name" />
                      <div class="form-help text-right">Maximum character 0/70</div>
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left">
                        <div class="flex items-center">
                          <div class="font-medium">Department</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <select id="category" required v-model="fields.department_id" class="form-select">
                        <option v-for="(department, index) in departments" :key="index" :value="department.id">
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
                          <div class="font-medium">Phone Number</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input id="phone-no" type="number" required class="form-control" v-model="fields.phone"
                        placeholder="Phone Number" />
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">UserName</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input id="UserName" type="text" class="form-control" required v-model="fields.employee_id"
                        placeholder="UserName" />
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
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
                <div class="col-span-12 md:col-span-12 lg:col-span-12">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Password</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input id="password" type="password" class="form-control" v-model="fields.password"
                        placeholder="Password" />
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-12 lg:col-span-12">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
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
              <button type="button"
                class="btn py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 w-full md:w-52">
                Cancel
              </button>
              <button type="submit" class="btn py-3 btn-primary w-full md:w-52">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- BEGIN: Success Notification Content -->
    <div id="success-notification-content" class="toastify-content hidden flex">
      <CheckCircleIcon class="text-success" />
      <div class="ml-4 mr-4">
        <div class="font-medium">Employee Added success!</div>
        <div class="text-slate-500 mt-1">
          Please check your Employees List
        </div>
      </div>
    </div>
    <!-- END: Success Notification Content -->
    <!-- BEGIN: Failed Notification Content -->
    <div id="failed-notification-content" class="toastify-content hidden flex">
      <XCircleIcon class="text-danger" />
      <div class="ml-4 mr-4">
        <div class="font-medium">Employee failed!</div>
        <div class="text-slate-500 mt-1">
          Please check the fileld form.
        </div>
      </div>
    </div>

  </form>
  <!-- END: Failed Notification Content -->
</template>

<script>
import { ref, provide } from "vue";
import axios from 'axios'
import { API_BASE_URL } from '../../config'
const subcategory = ref([]);
import Toastify from "toastify-js";
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
      axios.get(`${API_BASE_URL}/get_department`).then((res) => {
        console.log(res.data.Department)
        this.departments = res?.data?.Department
      }).catch((err) => {
        console.log(err)
      })
    },
    addEmployee(e) {
      e.preventDefault();
      console.log('yess')
      console.log(this.fields)
      this.fields.created_by = 1
      axios.post(`${API_BASE_URL}/create_employee`, this.fields).then((res) => {
        if (res.status == 200) {
          Toastify({
            node: dom("#success-notification-content")
              .clone()
              .removeClass("hidden")[0],
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
          }).showToast();
        }
        else {
          Toastify({
            node: dom("#failed-notification-content")
              .clone()
              .removeClass("hidden")[0],
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
          }).showToast();
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
