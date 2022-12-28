<template>

<Header></Header>

  <form @submit.prevent="createReport" class="add-form">
    <div class="grid grid-cols-11 gap-x-6 mt-5 pb-20">

      <div class="intro-y col-span-11 2xl:col-span-9">
        <!-- BEGIN: Product Information -->
        <div class="intro-y box1 md:w-3/4 mx-auto p-5 mt-5">
          <div class=" dark:border-darkmode-400 rounded-md p-5">
            <div class="intro-y text-center mt-3">
              <h2 class="text-lg font-medium mr-auto">Employee Access Badge Form</h2>

            </div>
            <div class="mt-2 intro-y text-center">
              This form is for employees who require an access badge to one of our facilities.
            </div>
            <div class="mt-5">
              <div class="grid gap-6 grid-cols-12">
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left">
                        <div class="flex items-center">
                          <div class="font-medium">Employee Name</div>
                        </div>

                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input id="Employee-Name" type="text" class="form-control" placeholder="Employee Name"
                        v-model="fields.employee_name" />

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
                      <select id="Location" v-model="fields.location" class="form-select">
                        <option value="Franklin">
                          Franklin, OH
                        </option>
                        <option value="Lewiston">
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
                          <div class="font-medium">Employee Type</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <select id="Location" v-model="fields.emp_type" class="form-select">
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
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Job Title</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input id="title" type="text" class="form-control" v-model="fields.title"
                        placeholder="Job Title" />
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
                      <select id="category" v-model="fields.department_id" class="form-select">
                        <option v-for="(department, index) in departments" :key="index"
                          :value="department.department_name">
                          {{ department.department_name }}
                        </option>
                      </select>

                      <div class="form-help text-right">Enter Assigned Department here. Example: Operations, Production,
                        HR, IT, Marketing, Sales, Etc.</div>

                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Existing Badge #</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input id="time" v-model="fields.exist_badge" type="text" class="form-control" />
                      <div class="form-help text-right">If an employee has a badge from another office, please enter the
                        5-digit badge # found on the back of their current badge. Leave blank if no badge has been
                        assigned previously.</div>
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
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
                          <input id="checkbox-switch-4" class="form-check-input" type="radio" v-model="fields.visit"
                            value="Yes" name="visit" />
                          <label class="form-check-label" for="checkbox-switch-4">Yes</label>
                        </div>
                        <div class="form-check mr-2 mt-2 sm:mt-0">
                          <input name="visit" id="checkbox-switch-5" class="form-check-input" type="radio"
                            v-model="fields.visit" value="No" />
                          <label class="form-check-label" for="checkbox-switch-5">No</label>
                        </div>
                      </div>
                      <div class="form-help text-right">Select whether an employee is visiting from a different office
                        other than their normal office.</div>
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
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
                          <input id="radio-switch-4" v-model="fields.lost" class="form-check-input" type="radio"
                            name="lost" value="Yes">
                          <label class="form-check-label" for="radio-switch-4">Yes</label>
                        </div>
                        <div class="form-check mr-2 mt-2 sm:mt-0">
                          <input id="radio-switch-5" v-model="fields.lost" class="form-check-input" type="radio"
                            name="lost" value="No">
                          <label class="form-check-label" for="radio-switch-5">No</label>
                        </div>
                      </div>
                      <div class="form-help text-right">Select "YES" if this is to report a lost or missing badge.
                        Otherwise, leave at the default of "NO".</div>
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Shift Hours - Types of Access Required</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <select id="Location" v-model="fields.shift_hour" class="form-select">
                        <option value=" Mon-Fri 1st Shift">
                          Mon-Fri 1st Shift
                        </option>
                        <option value="Mon-Fri 2nd Shift">
                          Mon-Fri 2nd Shift
                        </option>
                        <option value="Office/​Administrative Staff">
                          Office/​Administrative Staff
                        </option>
                        <option value="Saturday/​Weekend Shift">
                          Saturday/​Weekend Shift
                        </option>
                      </select>
                      <div class="form-help text-right">Please select shift employee will work.</div>
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Requested By</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input id="time" v-model="fields.requested_by" type="text" class="form-control" />
                      <div class="form-help text-right">Manager or Supervisor must request. Any other requestor will be
                        rejected.</div>
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Notes</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <textarea id="notes" class="form-control" placeholder="Notes" v-model="fields.notes"
                        rows="4"></textarea>
                      <div class="form-help text-right">Please enter any additional information that may be required or
                        requires special attention.</div>

                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class=" items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Assigned Badge # </div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input id="assigned_badge" v-model="fields.assigned_badge" type="text" class="form-control"
                        placeholder="Enter Assigned Badge" />
                      <div class="form-help text-right">For IT Department Use Only</div>

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

      console.log(this.fields)
      axios.post(`${API_BASE_URL}/create_badge_request`, this.fields).then((res) => {
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