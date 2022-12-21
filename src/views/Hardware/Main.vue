<template>

 <Header></Header>


  <form @submit.prevent="createReport" class="add-form">
    <div class="grid grid-cols-11 gap-x-6 mt-5 pb-20">

      <div class="intro-y col-span-11 2xl:col-span-9">
        <!-- BEGIN: Product Information -->
        <div class="intro-y box p-5 mt-5 md:w-3/5 mx-auto">
          <div class=" dark:border-darkmode-400 rounded-md p-5">
            <div class="intro-y text-center mt-8">
              <h2 class="text-lg font-medium mr-auto">Hardware & Software Request Form</h2>

            </div>
            <div class="mt-2 intro-y">
              This form is to be used to request new hardware and software installations.
              It is also to be used for upgrades to existing systems. This form applies to desktops, laptops, tablets,
              printers, mobile phones or other data devices. All requests must include
              a justification for placing this request. Do not use this form for new hire initial equipment requests.
            </div>
            <div class="mt-5">
              <div class="grid gap-6 grid-cols-12">
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left">
                        <div class="flex items-center">
                          <div class="font-medium">Requestor Name</div>
                        </div>

                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input id="Full-name" type="text" class="form-control" placeholder="Requestor Name"
                        v-model="fields.requestor_name" />
                      <div class="form-help text-right">Manager or Supervisor name.</div>
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left">
                        <div class="flex items-center">
                          <div class="font-medium">Equipment For Name</div>
                        </div>

                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input id="Full-name" type="text" class="form-control" placeholder="Equipment for name"
                        v-model="fields.equipment_name" />
                      <div class="form-help text-right">Enter the name of the employee who this request is for. If this
                        request
                        is for multiple users, please note their names at the bottom of this form.</div>
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left">
                        <div class="flex items-center">
                          <div class="font-medium">Location</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <select v-model="fields.location" id="Location" class="form-select">
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
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Requestor Email</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input type="email" class="form-control" v-model="fields.requestor_email" placeholder="email" />
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Contact Phone#</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input id="phone-no" type="number" class="form-control" v-model="fields.contact_phone"
                        placeholder="Phone" />

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
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Requested by date</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input type="date" class="form-control" v-model="fields.requested_by_date" placeholder="date" />
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Type of Hardware Requested</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <TomSelect v-model="fields.type_hardware_requested" :options="{
                        placeholder: 'Select Type of Hardware',
                        plugins: {
                          dropdown_header: {
                            title: 'Hardware',
                          },
                        },
                      }" class="w-full" multiple>
                        <option value="Desktop">
                          Desktop
                        </option>
                        <option value="Laptop">
                          Laptop
                        </option>
                        <option value="Laptop (Touchscreen)">
                          Laptop (Touchscreen)
                        </option>
                        <option value="iPad/​Tablet">
                          iPad/​Tablet
                        </option>
                        <option value="iPhone">
                          iPhone
                        </option>
                        <option value="Android Phone">
                          Android Phone
                        </option>
                        <option value="Monitor">
                          Monitor
                        </option>
                        <option value="Printer">
                          Printer
                        </option>
                        <option value="Scan Gun - Datalogic">
                          Scan Gun - Datalogic
                        </option>
                        <option value="Thermal Printer - Zebra">
                          Thermal Printer - Zebra
                        </option>
                        <option value="USB Keyboard">
                          USB Keyboard
                        </option>
                        <option value="USB Mouse">
                          USB Mouse
                        </option>
                        <option value="Wireless Keyboard">
                          Wireless Keyboard
                        </option>
                        <option value="Wireless Mouse">
                          Wireless Mouse
                        </option>
                        <option value="Wall Mount Display Monitor & PC">
                          Wall Mount Display Monitor & PC
                        </option>
                      </TomSelect>

                      <div class="form-help text-right">This section describes the type of hardware being requested.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Software Requested</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <TomSelect v-model="fields.software_requested" :options="{
                        placeholder: 'Select Software',
                        plugins: {
                          dropdown_header: {
                            title: 'Software',
                          },
                        },
                      }" class="w-full" multiple>
                        <option value="Adobe Acrobat Pro">
                          Adobe Acrobat Pro
                        </option>
                        <option value="Adobe Standard DC">
                          Adobe Standard DC
                        </option>
                        <option value="AutoDesk/​AutoCAD">
                          AutoDesk/​AutoCAD
                        </option>
                        <option value="CRM">
                          CRM
                        </option>
                        <option value="MPS">
                          MPS
                        </option>
                        <option value="SAP">
                          SAP
                        </option>
                        <option value="Microsoft Office 365">
                          Microsoft Office 365
                        </option>
                        <option value="Microsoft Publisher">
                          Microsoft Publisher
                        </option>
                        <option value="WMS">
                          WMS
                        </option>
                        <option value="Microsoft Visio">
                          Microsoft Visio
                        </option>
                        <option value="Microsoft Teams">
                          Microsoft Teams
                        </option>
                        <option value="TeamViewer Pro">
                          TeamViewer Pro
                        </option>
                        <option value="VNC - (Requires Justification)">
                          VNC - (Requires Justification)
                        </option>
                        <option value="Zoom">
                          Zoom
                        </option>
                        <option value="Gotomeeting">
                          Gotomeeting
                        </option>
                      </TomSelect>

                      <div class="form-help text-right">This section describes the type of software being requested.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Ship To Address</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input id="date" v-model="fields.ship_address" type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">City</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input id="date" v-model="fields.ship_city" type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">State</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input id="State" v-model="fields.ship_state" type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Zip Code</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input id="date" v-model="fields.ship_zipcode" type="number" class="form-control" />
                      <div class="form-help text-right">Please complete this box if the item is being shipped to a
                        Remote User. </div>
                    </div>
                  </div>
                </div>

                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Additonal Users </div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input id="password" type="text" v-model="fields.additonal_users_fname" class="form-control"
                        placeholder="Enter Additonal Users Name " />

                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Authorized By Signature </div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input id="password" type="text" v-model="fields.signature" class="form-control"
                        placeholder="Authorized By Signature " />
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Office Location</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <input id="password" type="text" v-model="fields.office_location" class="form-control"
                        placeholder="Office Location" />
                      <div class="form-help text-right">Enter the location where the employee will be sitting. Be as
                        descriptive as possible.</div>
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Additional Software or Hardware (Describe in detail)</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <textarea id="update-profile-form-5" class="form-control"
                        placeholder="Additional Software or Hardware (Describe in detail)"
                        v-model="fields.additional_equipment" rows="4"></textarea>
                      <div class="form-help text-right">Use this section to describes any type of specialty hardware or
                        software that is not listed in the options above. Be as detailed as possible.</div>
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-6">
                  <div class="items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                    <div class="form-label xl:w-64 xl:!mr-10">
                      <div class="text-left mt-2">
                        <div class="flex items-center">
                          <div class="font-medium">Reason for Request/​Justification (Please be specific)</div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full mt-3 xl:mt-0 flex-1">
                      <textarea id="update-profile-form-5" class="form-control"
                        placeholder="Reason for Request/​Justification (Please be specific)" v-model="fields.reason"
                        rows="4"></textarea>
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
import axios from 'axios'
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
      this.fields.additonal_users_lname = 'Test'
      this.fields.last_name = 'Test'
      console.log(this.fields)
      axios.post(`${API_BASE_URL}/add_equipment_request`, this.fields).then((res) => {
        if (res.status == 200) {
          this.$toast.success(`Form Saved Successfully!`);
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
  dom("body").removeClass("main").removeClass("error-page").removeClass("login").removeClass("landing").addClass("forms") ;
});

</script>
