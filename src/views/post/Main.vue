<template>
  <Header></Header>
  <div class="box1 p-5 mt-3 md:w-3/4 mx-auto">
    <div class="intro-y sm:flex-row text-center mt-3">
    <h2 class="text-lg font-medium mr-auto">Add New Post</h2>
  </div>
  <div class="pos intro-y grid grid-cols-12 gap-5 mt-5">
    <!-- BEGIN: Post Content -->
    <div class="intro-y col-span-12 lg:col-span-8">
      <input
        type="text"
        class="intro-y form-control py-3 px-4  pr-10"
        placeholder="Title"
      />
      <TabGroup class="post intro-y overflow-hidden  mt-5">
        <TabList
          class="post__tabs nav-tabs flex-col sm:flex-row bg-slate-200 dark:bg-darkmode-800"
        >
          <Tab :fullWidth="false" class="w-full sm:w-40 py-0 px-0" tag="button">
            <Tippy
              content="Fill in the article content"
              class="tooltip w-full flex items-center justify-center py-4"
              aria-controls="content"
              aria-selected="true"
            >
              <FileTextIcon class="w-4 h-4 mr-2" /> Content
            </Tippy>
          </Tab>
          <Tab :fullWidth="false" class="w-full sm:w-40 py-0 px-0" tag="button">
            <Tippy
              content="Adjust the meta title"
              class="tooltip w-full flex items-center justify-center py-4"
              aria-selected="false"
            >
              <CodeIcon class="w-4 h-4 mr-2" /> Meta Title
            </Tippy>
          </Tab>
          <Tab :fullWidth="false" class="w-full sm:w-40 py-0 px-0" tag="button">
            <Tippy
              content="Use search keywords"
              class="tooltip w-full flex items-center justify-center py-4"
              aria-selected="false"
            >
              <AlignLeftIcon class="w-4 h-4 mr-2" /> Keywords
            </Tippy>
          </Tab>
        </TabList>
        <TabPanels class="post__content">
          <TabPanel class="p-5">
            <div
              class="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5"
            >
              <div
                class="font-medium flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5"
              >
                <ChevronDownIcon class="w-4 h-4 mr-2" /> Text Content
              </div>
              <div class="mt-5">
                <ClassicEditor v-model="editorData" />
              </div>
            </div>
           
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
    <!-- END: Post Content -->
    <!-- BEGIN: Post Info -->
    <div class="col-span-12 lg:col-span-4">
      <div class="intro-y  p-5">
        <div>
          <label class="form-label">Written By</label>
          <Dropdown>
            <DropdownToggle
              tag="div"
              class="btn w-full btn-outline-secondary dark:bg-darkmode-800 dark:border-darkmode-800 flex items-center justify-start"
              role="button"
            >
              <div class="w-6 h-6 image-fit mr-3">
                <img
                  class="rounded"
                  alt="Midone Tailwind HTML Admin Template"
                  :src="$f()[0].photos[0]"
                />
              </div>
              <div class="truncate">{{ $f()[0].users[0].name }}</div>
              <ChevronDownIcon class="w-4 h-4 ml-auto" />
            </DropdownToggle>
            <DropdownMenu class="w-full">
              <DropdownContent>
                <DropdownItem
                  v-for="(faker, fakerKey) in $_.take($f(), 5)"
                  :key="fakerKey"
                >
                  <div class="w-6 h-6 absolute image-fit mr-3">
                    <img
                      class="rounded"
                      alt="Midone Tailwind HTML Admin Template"
                      :src="faker.photos[0]"
                    />
                  </div>
                  <div class="ml-8 pl-1">{{ faker.users[0].name }}</div>
                </DropdownItem>
              </DropdownContent>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div class="mt-3">
          <label for="post-form-2" class="form-label">Post Date</label>
          <Litepicker
            id="post-form-2"
            v-model="salesReportFilter"
            :options="{
              autoApply: false,
              showWeekNumbers: true,
              dropdowns: {
                minYear: 1990,
                maxYear: null,
                months: true,
                years: true,
              },
            }"
            class="form-control"
          />
        </div>
        <div class="mt-3">
          <label for="post-form-3" class="form-label">Department</label>
          <TomSelect
            id="post-form-3"
            v-model="categories"
            class="w-full"
            multiple
          >
          <option
          v-for="(departments, value) in departments"
          :key="value"
          :value="departments.id"
         >
          {{ departments.department_name }}
         </option>
          </TomSelect>
        </div>
        <div class="mt-3">
          <label for="post-form-4" class="form-label">Tags</label>
          <TomSelect id="post-form-4" v-model="tags" class="w-full" multiple>
            <option value="1">Leonardo DiCaprio</option>
            <option value="2">Johnny Deep</option>
            <option value="3">Robert Downey, Jr</option>
            <option value="4">Samuel L. Jackson</option>
            <option value="5">Morgan Freeman</option>
          </TomSelect>
        </div>
        <div class="form-check form-switch flex flex-col items-start mt-3">
          <label for="post-form-5" class="form-check-label ml-0 mb-2"
            >Published</label
          >
          <input id="post-form-5" class="form-check-input" type="checkbox" />
        </div>
        <div class="form-check form-switch flex flex-col items-start mt-3">
          <label for="post-form-6" class="form-check-label ml-0 mb-2"
            >Show Author Name</label
          >
          <input id="post-form-6" class="form-check-input" type="checkbox" />
        </div>
      </div>
       <!-- END: Basic Notification -->
    </div>
    <!-- END: Post Info -->
  </div>
  <button
        type="button"
        class="btn btn-dark mr-2 flex items-center ml-0 md:ml-auto"
      >
        Save
      </button>
  </div>

  
</template>

<script setup>
import { ref, provide } from "vue";
import { onMounted } from "vue";
import dom from "@left4code/tw-starter/dist/js/dom";
import Header from "../../global-components/Header/Main.vue";
const categories = ref(["1", "2"]);
const tags = ref(["1", "2"]);
const salesReportFilter = ref("");
const editorData = ref("<p>Content of the editor.</p>");
// Success notification
const successNotification = ref();
provide("bind[successNotification]", (el) => {
  // Binding
  successNotification.value = el;
});
const successNotificationToggle = () => {
  // Show notification
  successNotification.value.showToast();
};

onMounted(() => {
  dom("body").removeClass("main").removeClass("error-page").removeClass("login").removeClass("landing").addClass("forms");
});
</script>

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
             editConfirmationModal:false,
             form:{},
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
         
        }

}
</script>

