<template>
  <div class="intro-y flex items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Change Password</h2>
  </div>
  <div class="grid grid-cols-12 gap-6">
    <!-- BEGIN: Profile Menu -->
    <!-- END: Profile Menu -->
    <div class="col-span-12 lg:col-span-12 2xl:col-span-12">
      
      <!-- BEGIN: Change Password -->
      <div class="intro-y box lg:mt-5">
        <div class="relative flex items-center p-5">
          <div class="w-12 h-12 image-fit">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="rounded-full"
              :src="$f()[0].photos[0]"
            />
          </div>
          <div class="ml-4 mr-auto">
            <div class="font-medium text-base">
              {{ $f()[0].users[0].name }}
            </div>
            <div class="text-slate-500">{{ $f()[0].jobs[0] }}</div>
          </div>
        
        </div>
        <div
          class="flex items-center border-b border-slate-200/60 dark:border-darkmode-400"
        >
          
        </div>
        <div class="p-5">
          <div>
            <label for="change-password-form-1" class="form-label"
              >Old Password</label
            >
            <input
              id="change-password-form-1"
              type="password"
              class="form-control"
              placeholder="Input text"
            />
          </div>
          <div class="mt-3">
            <label for="change-password-form-2" class="form-label"
              >New Password</label
            >
            <input
              id="change-password-form-2"
              type="password"
              class="form-control"
              placeholder="Input text"
            />
          </div>
          <div class="mt-3">
            <label for="change-password-form-3" class="form-label"
              >Confirm New Password</label
            >
            <input
              id="change-password-form-3"
              type="password"
              class="form-control"
              placeholder="Input text"
            />
          </div>
          <button type="button" class="btn btn-dark mt-4">
            Change Password
          </button>
        </div>
      </div>
      <!-- END: Change Password -->
    </div>
  </div>
   <!-- BEGIN: Success Notification -->
 <PreviewComponent class="intro-y box mt-5" v-slot="{ toggle }">
        <div
          class="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400"
        >
          <h2 class="font-medium text-base mr-auto">Success Notification</h2>
          
        </div>
        <div class="p-5">
          <Preview>
            <div class="text-center">
              <!-- BEGIN: Notification Content -->
              <Notification refKey="successNotification" class="flex">
                <CheckCircleIcon class="text-success" />
                <div class="ml-4 mr-4">
                  <div class="font-medium">Message Saved!</div>
                  <div class="text-slate-500 mt-1">
                    The message will be sent in 5 minutes.
                  </div>
                </div>
                  <!-- BEGIN: Failed Notification Content -->
                <div
                  id="failed-notification-content"
                  class="toastify-content hidden flex"
                >
                  <XCircleIcon class="text-danger" />
                  <div class="ml-4 mr-4">
                    <div class="font-medium">Registration failed!</div>
                    <div class="text-slate-500 mt-1">
                      Please check the fileld form.
                    </div>
                  </div>
                </div>
            <!-- END: Failed Notification Content -->
              </Notification>
              <!-- END: Notification Content -->
              <!-- BEGIN: Notification Toggle -->
              <button
                class="btn btn-dark"
                @click="successNotificationToggle"
              >
                Show Notification
              </button>
              <!-- END: Notification Toggle -->
            </div>
          </Preview>
          
        </div>
      </PreviewComponent>
      <!-- END: Success Notification -->
</template>
<script setup>
import { ref, provide } from "vue";




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

</script>