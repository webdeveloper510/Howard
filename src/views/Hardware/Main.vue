<template>
  <div class="intro-y flex items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Hardware & Software Request Form</h2>

  </div>
  <div class="mt-2 intro-y">
    This form is to be used to request new hardware and software installations.
     It is also to be used for upgrades to existing systems. This form applies to desktops, laptops, tablets,
      printers, mobile phones or other data devices. All requests must include
     a justification for placing this request. Do not use this form for new hire initial equipment requests.
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
                      <div class="font-medium">Requestor Name</div>
                      <div
                        class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                        Required
                      </div>
                    </div>

                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="Full-name" type="text" class="form-control" placeholder="Requestor Name"
                    v-model="fields.first_name" />
                  <div class="form-help text-right">Manager or Supervisor name.</div>
                </div>
              </div>

              <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left">
                    <div class="flex items-center">
                      <div class="font-medium">Equipment For Name</div>
                      <div
                        class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                        Required
                      </div>
                    </div>

                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="Full-name" type="text" class="form-control" placeholder="Equipment for name"
                    v-model="fields.last_name" />
                  <div class="form-help text-right">Enter the name of the employee who this request is for. If this request 
                    is for multiple users, please note their names at the bottom of this form.</div>
                </div>
              </div>




              <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left">
                    <div class="flex items-center">
                      <div class="font-medium">Location</div>
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
                      <div class="font-medium">Requestor Email</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="phone-no" type="email" class="form-control" v-model="fields.phone"
                    placeholder="email" />
                </div>
              </div>

              <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Contact Phone#</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="phone-no" type="number " class="form-control" v-model="fields.phone"
                    placeholder="Phone" />

                </div>
              </div>
              <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left">
                    <div class="flex items-center">
                      <div class="font-medium">Department</div>
                      <div
                        class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                        Required
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <select id="category" v-model="fields.department" class="form-select">
                    <option v-for="(department, index) in departments" :key="index" :value="department.id">
                      {{ department.department_name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Requested by date</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="phone-no" type="date " class="form-control" v-model="fields.phone"
                    placeholder="Phone" />
                </div>
              </div>
              <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Type of Hardware Requested</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <div class="flex flex-col sm:flex-row mt-2 flex-wrap">
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">Desktop</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">Laptop</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">Laptop (Touchscreen)</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">iPad/​Tablet</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">iPhone</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">Android Phone</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">Monitor</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">Printer</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">Scan Gun - Datalogic</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">Thermal Printer - Zebra</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">USB Keyboard</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">USB Mouse</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">Wireless Keyboard</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">Wireless Mouse</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">Wall Mount Display Monitor & PC</label>
                    </div>
                  </div>
                  <div class="form-help text-right">This section describes the type of hardware being requested.</div>
                </div>
              </div>
              <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Software Requested</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <div class="flex flex-col sm:flex-row mt-2 flex-wrap">
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">Adobe Acrobat Pro</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">Adobe Standard DC</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">AutoDesk/​AutoCAD</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">Microsoft Office 365</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">Microsoft Publisher</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">Microsoft Visio</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">Microsoft Teams</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">MPS</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">SAP</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">TeamViewer Pro</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">VNC - (Requires Justification)</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">WMS</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">Zoom</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">Gotomeeting</label>
                    </div>
                    <div class="form-check mt-2 mr-3">
                      <input id="checkbox-switch-3" class="form-check-input" type="checkbox" value="" />
                      <label class="form-check-label" for="checkbox-switch-3">CRM</label>
                    </div>
                  </div>
                  <div class="form-help text-right">This section describes the type of software being requested.</div>
                </div>
              </div>
              <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Additional Software or Hardware (Describe in detail)</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <textarea
                      id="update-profile-form-5"
                      class="form-control"
                      placeholder="Additional Software or Hardware (Describe in detail)"
                      v-model="fields.address" 
                      rows="4"
                    ></textarea>
                    <div class="form-help text-right">Use this section to describes any type of specialty hardware or software that is not listed in the options above.  Be as detailed as possible.</div>
                </div>
              </div>
              <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Reason for Request/​Justification (Please be specific)</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <textarea
                      id="update-profile-form-5"
                      class="form-control"
                      placeholder="Reason for Request/​Justification (Please be specific)"
                      v-model="fields.address" 
                      rows="4"
                    ></textarea>
                </div>
              </div>
              <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Ship To Address</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="date" v-model="fields.reported_time" type="text" class="form-control" />
                </div>
              </div>
              <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">City</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="date" v-model="fields.reported_time" type="text" class="form-control" /> 
                </div>
              </div>
              <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">State</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="State" v-model="fields.reported_time" type="text" class="form-control" /> 
                </div>
              </div>
              <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Zip Code</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="date" v-model="fields.reported_time" type="number" class="form-control" /> 
                  <div class="form-help text-right">Please complete this box if the item is being shipped to a Remote User. </div>
                </div>
              </div>
              <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Office Location</div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <textarea
                      id="update-profile-form-5"
                      class="form-control"
                      placeholder="Office Location"
                      v-model="fields.address" 
                      rows="4"
                    ></textarea>
                    <div class="form-help text-right">Enter the location where the employee will be sitting. Be as descriptive as possible.</div>
                </div>
              </div>
              <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Additonal Users </div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="password" type="text" v-model="fields.station_phone" class="form-control"
                    placeholder="Enter Additonal Users Name " />
                   
                </div>
              </div>
              <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                <div class="form-label xl:w-64 xl:!mr-10">
                  <div class="text-left mt-2">
                    <div class="flex items-center">
                      <div class="font-medium">Authorized By Signature </div>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-3 xl:mt-0 flex-1">
                  <input id="password" type="text" v-model="fields.station_phone" class="form-control"
                    placeholder="Authorized By Signature " />
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
            Save & Add Equipment Custody
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
