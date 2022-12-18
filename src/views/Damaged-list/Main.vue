<template>
  <h2 class="intro-y text-lg font-medium mt-10">Damaged & Lost Equipment Report List</h2>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div
      class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2"
    >
      <a class="btn btn-primary shadow-md mr-2" href="/Howard/Damaged">Add Damaged & Lost Equipment Report </a>

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
            <th class="whitespace-nowrap">First NAME</th>
            <th class="text-center whitespace-nowrap">Location</th>
            <th class="text-center whitespace-nowrap">Phone</th>
            <th class="text-center whitespace-nowrap">Email</th>
            <th class="text-center whitespace-nowrap">Title</th>
            <th class="text-center whitespace-nowrap">Date Of Incident</th>
            <th class="text-center whitespace-nowrap">Time Of Incident</th>
            <th class="text-center whitespace-nowrap">Reported Date</th>
            <th class="text-center whitespace-nowrap">Reported Time</th>
            <th class="text-center whitespace-nowrap">Status</th>
            <th class="text-center whitespace-nowrap">Last Known Location</th>
            <th class="text-center whitespace-nowrap">Police#</th>
            <th class="text-center whitespace-nowrap">Station#</th>
            <th class="text-center whitespace-nowrap">Department</th>
          </tr>
        </thead>
        <tbody>
          <tr
          v-for="(form, index) in formsData"
            :key="index"
            class="intro-x zoom-in"
          >
          <td>
              {{
                index+1
              }}
          </td>
            <td class="font-medium whitespace-nowrap">{{
                form.first_name
              }}
              <!-- <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                {{  employee.first_name }}
              </div> -->
            </td>
            <td class="text-center">{{ form.location }}</td>
            <td class="text-center">{{ form.phone }}</td>
            <td class="text-center">{{ form.email ? form.email : '' }}</td>
          
            <td>
              {{ form.title }}
            </td>
            <td class="table-report__action w-56">
              {{ form.date_of_incident }}
            </td>
            <td class="table-report__action w-56">
              {{ form.time_of_incident }}
            </td>
            <td class="table-report__action w-56">
              {{ form.reported_date }}
            </td>
            <td class="table-report__action w-56">
              {{ form.reported_time }}
            </td>
            <td class="table-report__action w-56">
              {{ form.status }}
            </td>
            <td class="table-report__action w-56">
              {{ form.last_known_location }}
            </td>
            <td class="table-report__action w-56">
              {{ form.police_phone }}
            </td>
            <td class="table-report__action w-56">
              {{ form.station_phone }}
            </td>
            <td class="table-report__action w-56">
              {{ form.department }}
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
             axios.get(`${API_BASE_URL}/get_form/demage_reports`).then((res)=>{
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
