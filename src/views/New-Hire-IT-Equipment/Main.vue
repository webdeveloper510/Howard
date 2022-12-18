<template>
  <div class="intro-y flex items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Modula New Hire IT Equipment Request</h2>
    
  </div>
  <div class="mt-2 intro-y">
    Please use this form to request IT equipment, phones, and specialty software for NEW HIRES ONLY! If the new employee will be working on the Production Floor and does not require any hardware, please do not use this form!
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
                    <div class="font-medium">Managers Name</div>
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
                  placeholder="Managers Name"
                  v-model="newHireDetail.manager_name"
                  required
                />
               
              </div>
            </div>
            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Manager or Requester Email</div>
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
                  placeholder="Manager or Requester Email"
                  v-model="newHireDetail.manager_email"
                />
               
              </div>
            </div>
            
            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">New Hire Name</div>
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
                  placeholder="New Hire Name"
                  v-model="newHireDetail.new_employee_details"
                />
               
              </div>
            </div>
             
            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Equipment Type</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <TomSelect
              v-model="newHireDetail.equipment_type"
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
              <option value="Android">Android Phone</option>
              <option value="Desktop">Desktop PC</option>
              <option value="Laptop">Laptop</option>
              <option value="Touchscreen">Laptop (Touchscreen)</option>
              <option value="iPhone">iPhone *(Limited to Managers Only)</option>
              <option value="Printer">Printer</option>
              <option value="Signature-Pad">Signature Pad</option>
              <option value="Tablet">Tablet</option>
            </TomSelect>
            <!-- <multiselect v-model="equipmentValue" :options="equipmentTypes" :multiple="true" placeholder="Pick some" required></multiselect> -->
               
              <div class="form-help text-right">What type of equipment are you requesting?</div>
              <div class="form-help text-right">iPhones are issued to Managers or Supervisors only.  For special requests, 
                justification must be submitted for approval to the IT Manager or CEO.</div>
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
                  v-model="newHireDetail.employee_position"
                  placeholder="New Employee Position"
                />
              </div>
            </div>

            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">New Hire Start Date</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <input
                  id="email"
                  type="date"
                  class="form-control"
                  v-model="newHireDetail.hire_date"
                  placeholder="New Hire Start Date"
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
                <select id="Location"  class="form-select" @change="locationvalue($event)">
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
                 value="any"
                  >
                  any
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
                    <div class="font-medium">User to copy access</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <input
                  id="email"
                  type="text"
                  class="form-control"
                  v-model="newHireDetail.copy_access"
                  placeholder="Please provide network access required for new user"
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
                <!-- <multiselect v-model="categories" :options="departments" :multiple="true" placeholder="Pick some" required></multiselect> -->
                <select id="deparment"  class="form-select" @change="departmentValue($event)">
                  <option v-for="department in departments" :value="department.department_name">{{ department.department_name }}</option>
                </select>
              </div>
            </div>
             
              <div     
                class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Software Required</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <TomSelect
                      v-model="newHireDetail.software_required"
                      :options="{
                        placeholder: 'Select Software',
                        plugins: {
                          dropdown_header: {
                            title: 'Software',
                          },
                        },
                      }"
                      class="w-full"
                      multiple
                    >
                    <option value="Adobe Reader Pro">
                    Adobe Reader Pro
                  </option>
                  <option value="Modula App">
                    Modula App
                  </option>
                  <option value="Adobe Standard DC">
                    Adobe Standard DC
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
                  <option value="Email">
                    Email
                  </option>
                  <option value="Windchill">
                    Windchill
                  </option>
                  <option value="WMS">
                    WMS
                  </option>
                  <option value="Modula Academy">
                    Modula Academy
                  </option>
                </TomSelect>
               
             </div>
            </div>
            <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Additional Software</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <input
                  id="time"
                  v-model="newHireDetail.add_soft"
                  type="text"
                  class="form-control"
                />
                <div class="form-help text-right">List any additional software that will be required.
                </div>
              </div>
            </div>
            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Door Badge</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <TomSelect
                      v-model="newHireDetail.door_badge"
                      :options="{
                        placeholder: 'Select Door Badge',
                        plugins: {
                          dropdown_header: {
                            title: 'Door Badge',
                          },
                        },
                      }"
                      class="w-full"
                      multiple
                    >
                    <option value="Executive Access">
                       Executive Access
                      </option>
                      <option value="Supervisor Access">
                        Supervisor Access
                      </option>
                      <option value="Night Shift 1400 - 0300">
                        Night Shift 1400 - 0300
                      </option>
                      <option value="Day Shift 0545 - 1900">
                        Day Shift 0545 - 1900
                      </option>
                      <option value="Weekend Access">
                        Weekend Access
                      </option>
                      <option value="Restricted or Limited Access">
                        Restricted or Limited Access
                      </option>
                </TomSelect>
               
                <div class="form-help text-right">Select the type of access the new employee will need to the facility.</div>           
              </div>
            </div>
            <div
              class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left mt-2">
                  <div class="flex items-center">
                    <div class="font-medium">Special Needs /​ Disability Considerations</div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-3 xl:mt-0 flex-1">
                <select id="Location"  class="form-select" @change="shiftValue($event)" v-model="shiftType">
                  <option value="1">
                    Yes
                  </option>
                  <option value="0">
                    No
                  </option>
                </select>
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
import axios from 'axios';
import { API_BASE_URL } from '../../config'
import Multiselect from 'vue-multiselect'

const selectEquipment = ref([]);
export default {
  name: 'Test',
  components: { Multiselect },
  props: {
    msg: String
  },
  data(){
    return {
      departments:[],
      msg: [],
      newHireDetail: {},
      errors: {},
      success: false,
      radioButtonValue:'yes',
      shiftType:'Mon-Fri 1st Shift',
      location:'Franklin, OH',
      equipmentTypes:['Android Phone','Desktop PC',"Laptop","Laptop (Touchscreen)","iPhone *(Limited to Managers Only)","Printer","Signature Pad","Tablet"],
      equipmentValue:null,
      deparmentId:'',
    }
  },
        mounted(){
          this.getDepartments();
        },
  methods : {
    dataValue(event){
      console.log(event)
    },
      async getDepartments() {
             await axios.get(`${API_BASE_URL}/get_department`).then((res)=>{
                console.log('here',res.data.Department)
               
            this.departments=res.data.Department
              
              }).catch((err)=>{
                console.log(err)
              })
             
            },
            shiftValue(event){
             console.log(event.target.value)
             this.shiftType=event.target.value
            },
            onChange(event){
              this.radioButtonValue=event.target.value
            },
            locationvalue(event){
              this.location=event.target.value
            },
            departmentValue(event){
              console.log(event.target.value)
              this.deparmentId=event.target.value
            },
            createReport(e){
                 e.preventDefault();
                 this.newHireDetail.software_requested=this.radioButtonValue
                 this.newHireDetail.shiftType=this.shiftType
                 this.newHireDetail.department=this.deparmentId
                 this.newHireDetail.location=this.location
                 this.newHireDetail.equipmentTypes=this.equipmentValue
                // console.log(this.newHireDetail)
                // return false
                axios.post(`${API_BASE_URL}/add_new_equipment`,this.newHireDetail).then((res)=>{
                  if(res.status==200){
                      this.$toast.success(`Form Created Successfully!`);
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
const Door = ref(["1"]);
const Software = ref(["1"]);
</script>


<style>
fieldset[disabled] .multiselect{pointer-events:none}.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block}.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:"";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border:2px solid transparent;border-top-color:#41b883;box-shadow:0 0 0 1px transparent}.multiselect__spinner:before{animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);animation-iteration-count:infinite}.multiselect__spinner:after{animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);animation-iteration-count:infinite}.multiselect__loading-enter-active,.multiselect__loading-leave-active{transition:opacity .4s ease-in-out;opacity:1}.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0}.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:16px;-ms-touch-action:manipulation;touch-action:manipulation}.multiselect{box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e}.multiselect *{box-sizing:border-box}.multiselect:focus{outline:none}.multiselect--disabled{background:#ededed;pointer-events:none;opacity:.6}.multiselect--active{z-index:50}.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0}.multiselect--active .multiselect__select{transform:rotate(180deg)}.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0}.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;transition:border .1s ease;box-sizing:border-box;margin-bottom:8px;vertical-align:top}.multiselect__input:-ms-input-placeholder{color:#35495e}.multiselect__input::placeholder{color:#35495e}.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto}.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf}.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none}.multiselect__single{padding-left:5px;margin-bottom:8px}.multiselect__tags-wrap{display:inline}.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff;font-size:14px}.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis}.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;transition:all .2s ease;border-radius:5px}.multiselect__tag-icon:after{content:"\D7";color:#266d4d;font-size:14px}.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e}.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff}.multiselect__current{min-height:40px;overflow:hidden;padding:8px 30px 0 12px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8}.multiselect__current,.multiselect__select{line-height:16px;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer}.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;transition:transform .2s ease}.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 0;content:""}.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px}.multiselect--active .multiselect__placeholder{display:none}.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:50;-webkit-overflow-scrolling:touch}.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top}.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8}.multiselect__content::webkit-scrollbar{display:none}.multiselect__element{display:block}.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap}.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px;font-size:13px}.multiselect__option--highlight{background:#41b883;outline:none;color:#fff}.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff}.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700}.multiselect__option--selected:after{content:attr(data-selected);color:silver}.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select{background:#ededed;color:#a6a6a6}.multiselect__option--disabled{background:#ededed!important;color:#a6a6a6!important;cursor:text;pointer-events:none}.multiselect__option--group{background:#ededed;color:#35495e}.multiselect__option--group.multiselect__option--highlight{background:#35495e;color:#fff}.multiselect__option--group.multiselect__option--highlight:after{background:#35495e}.multiselect__option--disabled.multiselect__option--highlight{background:#dedede}.multiselect__option--group-selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--group-selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect-enter-active,.multiselect-leave-active{transition:all .15s ease}.multiselect-enter,.multiselect-leave-active{opacity:0}.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top}[dir=rtl] .multiselect{text-align:right}[dir=rtl] .multiselect__select{right:auto;left:1px}[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px}[dir=rtl] .multiselect__content{text-align:right}[dir=rtl] .multiselect__option:after{right:auto;left:0}[dir=rtl] .multiselect__clear{right:auto;left:12px}[dir=rtl] .multiselect__spinner{right:auto;left:1px}@keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}
</style>
