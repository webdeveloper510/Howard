<template>
  <h2 class="intro-y text-lg font-medium mt-10">Department List</h2>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div
      class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2"
    >
      <a href="/add-department" class="btn btn-primary shadow-md mr-2">Add Department</a>
      <Dropdown>
        <DropdownToggle class="btn px-2 box">
          <span class="w-5 h-5 flex items-center justify-center">
            <PlusIcon class="w-4 h-4" />
          </span>
        </DropdownToggle>
        <DropdownMenu class="w-40">
          <DropdownContent>
            <DropdownItem>
              <PrinterIcon class="w-4 h-4 mr-2" /> Print
            </DropdownItem>
            <DropdownItem>
              <FileTextIcon class="w-4 h-4 mr-2" /> Export to Excel
            </DropdownItem>
            <DropdownItem>
              <FileTextIcon class="w-4 h-4 mr-2" /> Export to PDF
            </DropdownItem>
          </DropdownContent>
        </DropdownMenu>
      </Dropdown>
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
      <table class="table table-report -mt-2">
        <thead>
          <tr>
            <th class="whitespace-nowrap"> S.No.</th>
            <th class="whitespace-nowrap">Department NAME</th>
            <th class="text-center whitespace-nowrap">Department Description</th>
            <th class="text-center whitespace-nowrap">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr
          v-for="(department, index) in departments"
            :key="index"
            class="intro-x"
          >
          <td>
              {{
                index+1
              }}
          </td>
          
            <td>
              <a href="" class="font-medium whitespace-nowrap">{{
                department.department_name
              }}</a>
              <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">
               
              </div>
            </td>
            <td class="text-center"> {{ department.description }}</td>
            <td class="table-report__action w-56">
              <div class="flex justify-center items-center">
                <a class="flex items-center mr-3" href="javascript:;"
                @click="editConfirmationModal = true">
                  <CheckSquareIcon class="w-4 h-4 mr-1" /> Edit
                </a>
                <a
                  class="flex items-center text-danger"
                  href="javascript:;"
                  @click="openModal(true,department.id)"
                >
                  <Trash2Icon class="w-4 h-4 mr-1" /> Delete
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
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
      <div class="p-5">
        <h3 class="text-center text-2xl font-bold mb-3">Edit Department</h3>
        <div class="grid grid-cols-12 gap-x-5">
             <div class="col-span-12 2xl:col-span-6">
                    <label for="update-profile-form-1" class="form-label"
                      >Department Name</label
                    >
                    <input
                      id="update-profile-form-1"
                      type="text"
                      class="form-control"
                      placeholder="Input text"
                    />
                </div>
             <div class="col-span-12">
                  <div class="mt-3">
                    <label for="update-profile-form-5" class="form-label"
                      >Department Description</label
                    >
                    <textarea
                      id="update-profile-form-5"
                      class="form-control"
                      placeholder="Adress"
                      rows="4"
                    ></textarea
                    >
                  </div>
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
        <button type="button" class="btn btn-primary w-24">Save</button>
      </div>
    </ModalBody>
  </Modal>
  <!-- END: edit Confirmation Modal -->


  <!-- BEGIN: Delete Confirmation Modal -->
  <Modal :show="deleteModalOpen"  @hidden="deleteModalOpen = false" >
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
                  @click="deleteModalOpen = false"
                  class="btn btn-outline-secondary w-24 mr-1"
                >
                  Cancel
                </button>
                <button type="button" class="btn btn-danger w-24" @click="deleteDeparment(this.departmentId)">Delete</button>
              </div>
            </ModalBody>
  </Modal>
  <!-- END: Delete Confirmation Modal -->
</template>

<script>
import { ref } from "vue";
import axios from 'axios'
import { API_BASE_URL } from '../../config'
export default {
   data() {
        return {
            isLoading: true,
             departments : [],
             deleteModalOpen:false,
             departmentId:''
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
            openModal(type,id){
              console.log(type,id)
              this.departmentId=id
              this.deleteModalOpen=type  
            },
            deleteDeparment(id) {
             
             axios.delete(`${API_BASE_URL}/delete_department/${id}`).then((res)=>{
                   console.log('res',res)
              if(res.status==200){
                this.getDepartments()
              this.deleteModalOpen=false;
              }
              else{
                this.getDepartments()
              this.deleteModalOpen=false;
              }
             })
            }
        }

<<<<<<< HEAD
}
=======
const deleteConfirmationModal = ref(false);
const editConfirmationModal = ref(false);
>>>>>>> 74a3897a632c5e9048c405dea435ca0d419bca36
</script>
