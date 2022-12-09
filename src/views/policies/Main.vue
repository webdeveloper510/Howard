<template>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Policies Details </h2>
    </div>
    <div class="intro-y grid grid-cols-12 gap-6 mt-5">
    <!-- BEGIN: Blog Layout -->
    <div
      class="intro-y col-span-12 md:col-span-12 box px-5 py-6 z-10"
    > 
    <h1 class="text-3xl font-bold mb-4">{{ policy.name }}</h1>
      <p>{{ policy.description }}. </p>   
    </div>
    <!-- END: Blog Layout -->

  </div>
  </template>  
  <script>
 import { ref } from "vue";
import axios from 'axios'
import { API_BASE_URL } from '../../config'
import { useRoute } from "vue-router";

export default {
   data() {
        return {
            isLoading: true,
            policy : [],
             deleteModalOpen:false,
             editConfirmationModal:false,
             form:{},
             departmentId:''
        }
    },
    created() {
      const route =useRoute()
      this.getPolicyDetail(route.params.id);
        },
    methods: {           
         getPolicyDetail(id) {
                axios.get(`${API_BASE_URL}/view/${id}`).then((res)=>{
                  console.log(res.data)
                  this.policy=res?.data?.policy
                }).catch((err)=>{
                  console.log(err)
                }) 
           },      
         
        }

}
  
 
  </script>
  