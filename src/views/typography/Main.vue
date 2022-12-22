<template>
  <Header></Header>


  <div class="grid grid-cols-12 gap-6 mt-5 box1 px-10 pb-10">
    <div class="col-span-12 intro-y text-center mt-8">
        <h2 class="text-lg font-medium mr-auto">Policies</h2>
      </div>
    <div
      class="intro-y col-span-12 flex  flex-wrap sm:flex-nowrap items-center mt-2"
    >
      
      <a class="btn btn-dark shadow-md mr-2" href="/Howard/add-policies">Add Policies</a>
      
      <div class="hidden md:block mx-auto text-slate-500">
        Showing 1 to 10 of 150 entries
      </div>
      
    </div>
    <!-- BEGIN: Data List -->
    <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
      <table class="table table-report -mt-2">
        <thead>
          <tr>
            <th class="whitespace-nowrap">S.No.</th>
            <th class="whitespace-nowrap">Policies NAME</th>
            <th class=" whitespace-nowrap">Description</th>
            <th class="text-center whitespace-nowrap">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr
          v-for="(policy, index) in policy"
          :key="index"
          :value="policy.id"
            class="intro-x"
          >
          <td>
              {{
                index+1
              }}
          </td>
            <td>
              <a href="" class="font-medium whitespace-nowrap">
                {{ policy.name }}
              </a>
            
            </td> 
            <td>
              <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                {{ policy.description }}
              </div>
            </td>
            <td class="table-report__action w-56">
              <div class="flex justify-center items-center">
                <a class="flex items-center mr-3" href="javascript:;"
                @click="openModal(true,policy,'edit')">
                  <CheckSquareIcon class="w-4 h-4 mr-1" /> Edit
                </a>
                <a class="flex items-center mr-3" :href="`/Howard/PoliciesDetails/${policy.id}`">
                  <EyeIcon class="w-4 h-4 mr-1" /> View
                </a>
                <a
                  class="flex items-center text-danger"
                  href="javascript:;"
                  @click="openModal(true,policy,'delete')"
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
   <form @submit.prevent="editPolicy" class="add-form">
      <div class="p-5">
        <h3 class="text-center text-2xl font-bold mb-3">Edit Policies</h3>
        <div class="grid grid-cols-12 gap-x-5">
                <div class="col-span-12 2xl:col-span-6 mt-3">
                    <label for="update-profile-form-1" class="form-label"
                      >Policies Name</label
                    >
                    <input
                      id="update-profile-form-1"
                      type="text"
                      class="form-control"
                      placeholder="Policies Name"
                      v-model="form.name"
                    />
                </div>
                
                <div class="col-span-12 2xl:col-span-6 mt-3">
                    <label for="update-profile-form-1" class="form-label"
                      >Policies Description </label
                    >
                    <textarea
                            id="update-profile-form-5"
                            class="form-control"
                            placeholder="Enter Policies Description"
                            v-model="form.description"
                            rows="4"></textarea>
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
        <button type="submit" class="btn btn-dark w-24">Save</button>
      </div>
    </form>
    </ModalBody>
  </Modal>
  <!-- END: edit Confirmation Modal -->

  <!-- BEGIN: Delete Confirmation Modal -->
  <Modal
    :show="deleteModalOpen"
    @hidden="deleteModalOpen = false"
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
          @click="deleteModalOpen = false"
          class="btn btn-outline-secondary w-24 mr-1"
        >
          Cancel
        </button>
        <button type="button" class="btn btn-danger w-24" @click="deletePolicy(form.id)">Delete</button>
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
            policy : [],
             deleteModalOpen:false,
             editConfirmationModal:false,
             form:{},
        }
    },
created() {
             this.getPolicy();
        },
      methods: {
        getPolicy() {
                    axios.get(`${API_BASE_URL}/get_policy`).then((res)=>{
                      console.log(res.data)
                      this.policy=res?.data?.policy
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
                this.deleteModalOpen=type  
              }             
              
            },

          editPolicy(e) {
              console.log(e)
              console.log(this.form)
              let body = {}
              body.name = this.form.name
              body.description = this.form.description
              console.log(body)
                axios.put(`${API_BASE_URL}/policy_edit/${this.form.id}`,body).then((res)=>{
                  if(res.status==200){
                      this.$toast.success(`Edit Successfully!`);
                      this.getPolicy()
                      this.editConfirmationModal=false
                    }
                    else{
                      this.$toast.error(`Some error Occure`);
                    }
                }).catch((err)=>{
                  console.log(err)
                })
            },
            deletePolicy(id) {             
             axios.delete(`${API_BASE_URL}/policy_delete/${id}`).then((res)=>{
                   console.log('res',res)
              if(res.status==200){
                this.$toast.success(`Delete Successfully!`);
                this.getPolicy()
              this.deleteModalOpen=false;
              }
              else{
              this.getPolicy()
              this.$toast.error(`Some error Occure`);
              this.deleteModalOpen=false;
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
