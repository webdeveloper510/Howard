<template>
        <Header></Header>
  <div class="box1 p-4 md:w-3/4 my-5 mx-auto">
  <h2 class="intro-y text-lg text-center font-medium mt-10">Termination Notice List</h2>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div
      class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2"
    >
      <a class="btn btn-dark shadow-md mr-2" href="/Howard/Modula-Termination-Notice">Add Termination Notice </a>

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
            <th class="whitespace-nowrap">Manager Name</th>
            <th class="whitespace-nowrap">Manager Email</th>
            <th class="whitespace-nowrap">Title</th>
            <th class="whitespace-nowrap">Effective Date</th>
            <th class="whitespace-nowrap">Priority</th>
            <th class="whitespace-nowrap">Employee Job</th>
            <th class="text-center whitespace-nowrap">Badge</th>
            <th class="text-center whitespace-nowrap">Collected</th>
            <th class="text-center whitespace-nowrap">Location</th>
            <th class="text-center whitespace-nowrap">Instruction</th>
          </tr>
        </thead>
        <tbody>
          <tr
          v-for="(forms, index) in formsData"
            :key="index"
            class="intro-x zoom-in"
          >
          <td>
              {{
                index+1
              }}
          </td>
            <td class="font-medium whitespace-nowrap">{{
                forms.manager_name
              }}
              <!-- <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                {{  employee.first_name }}
              </div> -->
            </td>
            <td class="text-center">{{ forms.manager_email }}</td>
            <td class="text-center">{{ forms.title ? forms.title : '' }}</td>
            <td>
              {{ forms.effective_date }}
            </td>
            <td class="table-report__action w-56">
              {{ forms.priority }}
            </td>
            <td class="table-report__action w-56">
              {{ forms.emp_job_title }}
            </td>
            <td class="table-report__action w-56">
              {{ forms.badge }}
            </td>
            <td class="table-report__action w-56">
              {{ forms.collected }}
            </td>
            <td class="table-report__action w-56">
              {{ forms.location }}
            </td>
            <td class="table-report__action w-56">
              {{ forms.instruction }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    <!-- END: Data List -->
    <!-- BEGIN: Pagination -->
    <div class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
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
            formsData : [],
            departments : [],
            form:{},
             deleteConfirmationModal:false,
             editConfirmationModal:false,
             departmentId:''
        }
    },
    created() {
             this.getFormsData();
             this.getDepartments()
        },

      methods: {           
        getFormsData() {
          console.log(API_BASE_URL)
             axios.get(`${API_BASE_URL}/get_form/terminate_office`).then((res)=>{
               console.log(res.data)
               this.formsData=res?.data?.forms
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
              console.log(department_name)
              let body = {}
              body.department_id = this.form.department.id
              body.department_name = this.form.department.department_name
              body.email = this.form.email
              body.first_name = this.form.first_name
              body.password = this.form.password
              body.phone = this.form.phone
             
                axios.put(`${API_BASE_URL}/edit_employee/${this.form.id}`,body).then((res)=>{
                  // console.log(res.data.Department)
                  // this.departments=res?.data?.Department
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