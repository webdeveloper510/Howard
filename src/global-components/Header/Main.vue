<template>
    <div class="border-b border-white/[0.08]  md:-mt-5 -mx-3 sm:-mx-8 px-3 box pt-3 mb-1">
    <div class="top-bar-boxed flex items-center my-4">
      <!-- BEGIN: Logo -->
      <router-link :to="{ name: 'side-menu-dashboard-overview-4' }" tag="a" class="-intro-x md:flex">
        <img class="h-16" alt="Midone Tailwind HTML Admin Template"
          src="https://www.cognitoforms.com/file/PY98Tpd3p2cUH_ojupJJzh6dKQWEicACg9A7BuMhySwbN2I0NPclvU6pOcXxgN0-" />
      </router-link>
      <!-- END: Logo -->
      <!-- BEGIN: Account Menu -->
      <div class="ml-auto flex">

        <!-- BEGIN: Slide Over Toggle -->

        <!-- BEGIN: Small Slide Over Toggle -->
        <a href="javascript:;" data-tw-toggle="modal" data-tw-target="#small-slide-over-size-preview" class="btn ">
          <AlignJustifyIcon class="block mx-auto" />
        </a>
        <!-- END: Small Slide Over Toggle -->

        <!-- END: Slide Over Toggle -->
        <!-- BEGIN: Slide Over Content -->
        <div id="small-slide-over-size-preview" class="modal modal-slide-over" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-sm">
            <div class="modal-content">
              <div class="modal-header block py-5">
                <img
                  src="https://www.cognitoforms.com/file/PY98Tpd3p2cUH_ojupJJzh6dKQWEicACg9A7BuMhySwbN2I0NPclvU6pOcXxgN0-"
                  class="img-fluid" />
                <h2 class="font-medium text-base text-center">User Name</h2>
              </div>
              <div class="modal-body p-0">
                <router-link :to="{ name: 'landing' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex ml-5 mt-2 ">
                  Home
                </router-link>
                <router-link :to="{ name: 'side-menu-add-product' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex ml-5 mt-2 ">
                  Forms
                </router-link>
                <div class="dropdown">
                  <button class="dropdown-toggle btn btn-primary" aria-expanded="false" data-tw-toggle="dropdown">Show
                    Dropdown</button>
                  <div class="dropdown-menu w-40">
                    <ul class="dropdown-content">
                      <li>
                        <a href="" class="dropdown-item">Employee-Access</a>
                      </li>
                      <li>
                        <a href="" class="dropdown-item">Facilities-Maintenance</a>
                      </li>
                      <li>
                        <a href="" class="dropdown-item">Employee-Custody</a>
                      </li>
                      <li>
                        <a href="" class="dropdown-item">Hardware & Software Request Form </a>
                      </li>
                      <li>
                        <a href="" class="dropdown-item">New Hire IT Equipment </a>
                      </li>
                      <li>
                        <a href="" class="dropdown-item">Modula-Termination-Notice </a>
                      </li>
                      <li>
                        <a href="" class="dropdown-item">IT Move Request Form </a>
                      </li>
                      <li>
                        <a href="" class="dropdown-item">Damaged & Lost Equipment</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <router-link :to="{ name: 'side-menu-add-product' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex ml-5 mt-2 ">
                  News & Announcements
                </router-link>
                <router-link :to="{ name: 'side-menu-add-product' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex ml-5 mt-2 ">
                  Company Strategy & Goals
                </router-link>
                <router-link :to="{ name: 'side-menu-add-product' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex ml-5 mt-2 ">
                  Policies
                </router-link>
                <router-link :to="{ name: 'side-menu-add-product' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex ml-5 mt-2 ">
                  New Employee Onboarding
                </router-link>
                <router-link :to="{ name: 'Purchasing' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex ml-5 mt-2 ">
                  Purchasing
                </router-link>
                <router-link :to="{ name: 'Corporate' }" tag="a" data-tw-dismiss="modal"
                  class=" font-medium -intro-x md:flex ml-5 mt-2 ">
                  Corporate Planning Department
                </router-link>
                <a href="https://access.paylocity.com" target="_blank" data-tw-dismiss="modal"
                  class=" font-medium -intro-x md:flex ml-5 mt-2 ">
                  Paylocity
                </a>
                <router-link :to="{ name: 'side-menu-add-product' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex ml-5 mt-2 ">
                  Departments
                </router-link>
                <router-link :to="{ name: 'side-menu-add-product' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex ml-5 mt-2 ">
                  Training
                </router-link>
                <router-link :to="{ name: 'side-menu-add-product' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex ml-5 mt-2 ">
                  Safety
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Slide Over Content -->
      </div>
      <!-- END: Account Menu -->
    </div>
  </div>
</template>