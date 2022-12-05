<template>
  <div class="intro-y flex items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Policies</h2>
  </div>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div
      class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2"
    >
<<<<<<< HEAD
      <a class="btn btn-primary shadow-md mr-2" href="/add-policies">Add Policies</a>
=======
      <a class="btn btn-primary shadow-md mr-2" href="#">Add Policies</a>
>>>>>>> 4a114a9b2d0b3fb277b7685b8a5c04ff0b8c0145
      
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
            v-for="(faker, fakerKey) in $_.take($f(), 9)"
            :key="fakerKey"
            class="intro-x"
          >
          <td>
              {{
                fakerKey+1
              }}
          </td>
            <td>
              <a href="" class="font-medium whitespace-nowrap">{{
                faker.products[0].name
              }}</a>
              <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                {{ faker.products[0].category }}
              </div>
            </td>
            <td>
              <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                {{ faker.products[0].category }}
              </div>
            </td>
            <td class="table-report__action w-56">
              <div class="flex justify-center items-center">
                <a class="flex items-center mr-3" href="javascript:;"
                  @click="editConfirmationModal = true">
                  <CheckSquareIcon class="w-4 h-4 mr-1" /> Edit
                </a>
                <a class="flex items-center mr-3" href="/PoliciesDetails">
                  <EyeIcon class="w-4 h-4 mr-1" /> View
                </a>
                <a
                  class="flex items-center text-danger"
                  href="javascript:;"
                  @click="deleteConfirmationModal = true"
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
        <h3 class="text-center text-2xl font-bold mb-3">Edit Policies</h3>
        <div class="grid grid-cols-12 gap-x-5">
<<<<<<< HEAD
              
=======
>>>>>>> 4a114a9b2d0b3fb277b7685b8a5c04ff0b8c0145
                <div class="col-span-12 2xl:col-span-6 mt-3">
                    <label for="update-profile-form-1" class="form-label"
                      >Policies Name</label
                    >
                    <input
                      id="update-profile-form-1"
                      type="text"
                      class="form-control"
                      placeholder="Policies Name"
                    />
                </div>
                
                <div class="col-span-12 2xl:col-span-6 mt-3">
                    <label for="update-profile-form-1" class="form-label"
<<<<<<< HEAD
                      >Policies Description</label>
                      <textarea
                      id="update-profile-form-5"
                      class="form-control"
                      placeholder="Enter Policies Description"
                      rows="4"></textarea>
=======
                      >Policies Description </label
                    >
                    <textarea
                            id="update-profile-form-5"
                            class="form-control"
                            placeholder="Enter Policies Description"
                          
                            rows="4"></textarea>
>>>>>>> 4a114a9b2d0b3fb277b7685b8a5c04ff0b8c0145
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
        <button type="button" class="btn btn-danger w-24">Delete</button>
      </div>
    </ModalBody>
  </Modal>
  <!-- END: Delete Confirmation Modal -->
</template>

<script setup>
import { ref } from "vue";

const deleteConfirmationModal = ref(false);
const editConfirmationModal = ref(false);
</script>
