<template>
        <Header></Header>
  <div class="box1 p-4 md:w-3/4 my-5 mx-auto">
  <h2 class="intro-y text-lg font-medium text-center mt-10">Employee List</h2>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div
      class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2"
    >
      <a class="btn btn-dark shadow-md mr-2" href="/Howard/add-employee">Add Employee</a>
      <div class="hidden md:block mx-auto text-slate-500">
        Showing 1 to 10 of 150 entries
      </div>
      <div class="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
        <div class="w-56 relative text-slate-500">
          <input
            type="text"
            class="form-control w-56 box pr-10"
            placeholder="Search..."
          />
          <SearchIcon class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" />
        </div>
      </div>
    </div>
    <!-- BEGIN: Data List -->
    <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
                                      
    <div class="overflow-x-auto">
      <table class="table table-report  -mt-2">
        <thead>
          <tr>
            <th class="whitespace-nowrap">S.No.</th>
            <th class="whitespace-nowrap">Employee NAME</th>
            <th class="text-center whitespace-nowrap">Phone No</th>
            <th class="text-center whitespace-nowrap">Department</th>
            <th class="text-center whitespace-nowrap">Email</th>
            <th class="text-center whitespace-nowrap">Password</th>
            <th class="text-center whitespace-nowrap">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr
          v-for="(employee, index) in employee"
            :key="index"
            class="intro-x zoom-in"
          >
          <td>
              {{
                index+1
              }}
          </td>
            <td class="font-medium whitespace-nowrap">{{
                employee.first_name
              }}
              <!-- <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                {{  employee.first_name }}
              </div> -->
            </td>
            <td class="text-center">{{ employee.phone }}</td>
            <td class="text-center">{{ employee.department ? employee.department.department_name : '' }}</td>
            <td class="w-40">
              <div
                class="flex items-center justify-center"
                :class="{
                  'text-success': employee.email,
                  'text-danger': !employee.email,
                }"
              >
                <CheckSquareIcon class="w-4 h-4 mr-2" />
                {{ employee.email }}
              </div>
            </td>
            <td>
              {{ employee.password }}
            </td>
            <td class="table-report__action w-56">
              <div class="flex justify-center items-center">
                <a class="flex items-center mr-3" href="javascript:;"
                @click="openModal(true,employee,'edit')">
                  <CheckSquareIcon class="w-4 h-4 mr-1" /> Edit
                </a>
                <a
                  class="flex items-center text-danger"
                  href="javascript:;"
                  @click="openModal(true,employee,'delete')">

                  <Trash2Icon class="w-4 h-4 mr-1" /> Delete
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    <!-- END: Data List -->
    <!-- BEGIN: Pagination -->
    <div
      class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center"
    >
      <nav class="w-full sm:w-auto sm:mr-auto">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">
              <ChevronsLeftIcon class="w-4 h-4" />
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              <ChevronLeftIcon class="w-4 h-4" />
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">...</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">1</a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">...</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              <ChevronRightIcon class="w-4 h-4" />
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              <ChevronsRightIcon class="w-4 h-4" />
            </a>
          </li>
        </ul>
      </nav>
      <select class="w-20 form-select box mt-3 sm:mt-0">
        <option>10</option>
        <option>25</option>
        <option>35</option>
        <option>50</option>
      </select>
    </div>
    <!-- END: Pagination -->
  </div>

<!-- BEGIN: edit Confirmation Modal -->
<Modal
    :show="editConfirmationModal"
    @hidden="editConfirmationModal = false"
  >
    <ModalBody class="p-0">
      <form @submit.prevent="editEmployee" class="add-form">
      <div class="p-5">
        <h3 class="text-center text-2xl font-bold mb-3">Edit Employee</h3>
        <div class="grid grid-cols-12 gap-x-5">
              
                <div class="col-span-12 2xl:col-span-6 mt-3">
                    <label for="update-profile-form-1" class="form-label"
                      >Employee Name</label
                    >
                    <input
                      id="update-profile-form-1"
                      type="text"
                      class="form-control"
                      placeholder="Employee Name"
                      v-model="form.first_name"
                    />
                </div>
                <div class="col-span-12 2xl:col-span-6 mt-3">
                    <label for="update-profile-form-1" class="form-label"
                      >Phone No.</label
                    >
                    <input
                      id="update-profile-form-1"
                      type="number"
                      class="form-control"
                      placeholder="Phone No."
                      v-model="form.phone"
                    />
                </div>
                <div class="col-span-12 2xl:col-span-6 mt-3">
                    <label for="update-profile-form-1" class="form-label"
                      >Department</label
                    >
                    <select id="category"  v-model="form.department_id" class="form-select">
                  <option
                    v-for="(department, index) in departments"
                      :key="index"
                      :value="department.id"
                    >
                      {{ department.department_name }}
                  </option>
                </select>
                </div>
                <div class="col-span-12 2xl:col-span-6 mt-3">
                    <label for="update-profile-form-1" class="form-label"
                      >Email</label
                    >
                    <input
                      id="update-profile-form-1"
                      type="email"
                      class="form-control"
                      placeholder="Enter email"
                      v-model="form.email"
                    />
                </div>
                <div class="col-span-12 2xl:col-span-6 mt-3">
                    <label for="update-profile-form-1" class="form-label"
                      >Password</label>
                    <input
                      id="update-profile-form-1"
                      type="password"
                      class="form-control"
                      v-model="form.password"
                      placeholder="Input text"/>
                </div>
        </div>
       </div>
      <div class="px-5 pb-8 text-right">
        <button
          type="button"
          @click="editConfirmationModal = false"
          class="btn btn-outline-secondary w-24 mr-1"
        >
          Cancel
        </button>
        <button type="submit"  class="btn btn-dark w-24">Save</button>
      </div>
    </form>
    </ModalBody>
  </Modal>
  <!-- END: edit Confirmation Modal -->

  <!-- BEGIN: Delete Confirmation Modal -->
  <Modal
    :show="deleteConfirmationModal"
    @hidden="deleteConfirmationModal = false"
  >
    <ModalBody class="p-0">
      <div class="p-5 text-center">
        <XCircleIcon class="w-16 h-16 text-danger mx-auto mt-3" />
        <div class="text-3xl mt-5">Are you sure?</div>
        <div class="text-slate-500 mt-2">
          Do you really want to delete these records? <br />This process cannot
          be undone.
        </div>
      </div>
      <div class="px-5 pb-8 text-center">
        <button
          type="button"
          @click="deleteConfirmationModal = false"
          class="btn btn-outline-secondary w-24 mr-1"
        >
          Cancel
        </button>
        <button type="button" class="btn btn-danger w-24" @click="deleteEmployee(form.id)">Delete</button>
      </div>
    </ModalBody>
  </Modal>
  <!-- END: Delete Confirmation Modal -->

   <!-- BEGIN: Success Notification Content -->
          <div id="success-notification-content"
              class="toastify-content hidden flex"
            >
              <CheckCircleIcon class="text-success" />
              <div class="ml-4 mr-4">
                <div class="font-medium">Employee Update Successfully!</div>
                <div class="text-slate-500 mt-1">
                  Please check your Employee
                </div>
              </div>
            </div>
            <!-- END: Success Notification Content -->
            <!-- BEGIN: Failed Notification Content -->
            <div
              id="failed-notification-content"
              class="toastify-content hidden flex"
            >
              <XCircleIcon class="text-danger" />
              <div class="ml-4 mr-4">
                <div class="font-medium">Employee Update failed!</div>
                <div class="text-slate-500 mt-1">
                  Please check the fileld form.
                </div>
              </div>
            </div>
            <!-- END: Failed Notification Content -->

          </div>

</template>

<script>

import { ref } from "vue";
import axios from 'axios'
import { API_BASE_URL } from '../../config'
export default {
   data() {
        return {
            isLoading: true,
            employee : [],
            departments : [],
            form:{},
             deleteConfirmationModal:false,
             editConfirmationModal:false,
             departmentId:''
        }
    },
    created() {
             this.getEmployee();
             this.getDepartments()
        },

      methods: {           
        getEmployee() {
          console.log(API_BASE_URL)
             axios.get(`${API_BASE_URL}/get_employee`).then((res)=>{
               console.log(res.data.employee)
               this.employee=res?.data?.employee
             }).catch((err)=>{
               console.log(err)
             })
            
           },

           openModal(type,data,flag){
             this.form=data
             console.log(this.form)
              if(flag=='edit'){
                this.editConfirmationModal=type  
              }
              else{
                this.deleteConfirmationModal=type  
              }             
              
            },
            getDepartments() {
                  axios.get(`${API_BASE_URL}/get_department`).then((res)=>{
                    console.log(res.data.Department)
                    this.departments=res?.data?.Department
                  }).catch((err)=>{
                    console.log(err)
                  })
                
                },
            editEmployee(e) {
              let body = {}
              body.department_id = this.form.department_id
              body.department_name = this.form.department.department_name
              body.email = this.form.email
              body.first_name = this.form.first_name
              body.password = this.form.password
              body.phone = this.form.phone
                           
                axios.put(`${API_BASE_URL}/edit_employee/${this.form.id}`,body).then((res)=>{
                  if(res.status==200){
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
                        this.getEmployee()
                        this.editConfirmationModal=false
                      }
                      else{
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
               
                }).catch((err)=>{
                  console.log(err)
                })
            },
            deleteEmployee(id) {             
             axios.delete(`${API_BASE_URL}/delete_employee/${id}`).then((res)=>{
                   console.log('res',res)
              if(res.status==200){
                this.$toast.success(`Delete Employee Successfully!`);
                this.getEmployee()
              this.deleteConfirmationModal=false;
              }
              else{
              this.getEmployee()
              this.$toast.error(`Some error Occure`);
              this.deleteConfirmationModal=false;
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