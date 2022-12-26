<template>
    <Header></Header>

    <div class="intro-y box1 p-5 md:w-3/4 mx-auto gap-6 mt-5">
        <div class="grid grid-cols-12 gap-6 mt-5">
            <div class="intro-y col-span-12 flex flex-wrap xl:flex-nowrap items-center mt-2">
                <div class="hidden xl:block mx-auto text-slate-500 text-base">
                    Showing 1 to 10 of 150 entries
                </div>
                <div class="w-full xl:w-auto flex items-center mt-3 xl:mt-0">
                    <div class="w-56 relative text-slate-500">
                        <input type="text" v-model="search" class="form-control w-56 box pr-10"
                            placeholder="Search..." />
                        <SearchIcon class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" />
                    </div>
                </div>
            </div>
            <!-- BEGIN: Data List -->
            <div class="intro-y col-span-12 overflow-auto 2xl:overflow-visible">
                <table class="table table-report -mt-2">
                    <thead>
                        <tr>
                            <th class="whitespace-nowrap">NAME</th>
                            <th class="text-center whitespace-nowrap">DIRECTORY</th>
                            <th class="text-center whitespace-nowrap">EXT</th>
                            <th class="text-center whitespace-nowrap">CELL</th>
                            <th class="text-center whitespace-nowrap">LOCALE</th>
                            <th class="text-center whitespace-nowrap">JOB TITLE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(faker, fakerKey) in $_.take($f(), 40)" :key="fakerKey" class="intro-x zoom-in">
                            <td class="">
                                <div class="flex items-center">
                                    <div class="">
                                        <div class="text-base mt-0.5">
                                            {{ faker.phones[0].name }}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td class="text-center">
                                {{ faker.phones[0].directory }}
                            </td>
                            <td class="text-center">
                                <a href="" class="font-medium whitespace-nowrap">{{ faker.phones[0].ext }}</a>
                            </td>
                            <td class="text-center capitalize">
                                {{ faker.phones[0].cell }}
                            </td>
                            <td class="text-center">
                                <div class="flex items-center justify-center">
                                    {{ faker.phones[0].locale }}
                                </div>
                            </td>
                            <td class="text-center">{{ faker.phones[0].job }}</td>
                        </tr>
                    </tbody>
                </table>
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
        <!-- BEGIN: Delete Confirmation Modal -->
        <Modal :show="deleteConfirmationModal" @hidden="deleteConfirmationModal = false">
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
                    <button type="button" @click="deleteConfirmationModal = false"
                        class="btn btn-outline-secondary w-24 mr-1">
                        Cancel
                    </button>
                    <button type="button" class="btn btn-danger w-24">Delete</button>
                </div>
            </ModalBody>
        </Modal>
        <!-- END: Delete Confirmation Modal -->
    </div>
</template>
  
<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import Header from "../../global-components/Header/Main.vue";
onMounted(() => {
    dom("body").removeClass("main").removeClass("error-page").removeClass("login").removeClass("landing").addClass("forms");
});
const deleteConfirmationModal = ref(false);
</script>

<script>
export default {
    data() {
        return {
            phones: [],
            search: ""
        };
    },
    computed: {
        filteredProducts() {
            return this.phones.filter(p => {
                // return true if the product should be visible

                // in this example we just check if the search string
                // is a substring of the product name (case insensitive)
                return p.name.toLowerCase().indexOf(this.search.toLowerCase()) != -1;
            });
        }
    }
};

</script>
  