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
                  class="font-medium landing-side -intro-x md:flex ml-5 mt-2 ">
                  Home
                </router-link>
                <div class="dropdown inline-block landing-side" data-tw-placement="top" >
                  <a class="dropdown-toggle font-medium landing-side -intro-x md:flex mt-2" aria-expanded="false" data-tw-toggle="dropdown">Forms</a>
                  <div class="dropdown-menu w-40  landing-dropdown">
                    <ul class="dropdown-content">
                      <li>
                        <router-link :to="{ name: 'Employee-Access' }" tag="a" class="-intro-x md:flex dropdown-item">
                            Employee-Access
                          </router-link>
                      </li>
                      <li>
                        <router-link :to="{ name: 'Facilities-Maintenance' }" tag="a" class="-intro-x md:flex dropdown-item">
                            Facilities-Maintenance
                          </router-link>
                      </li>
                      <li>
                        <router-link :to="{ name: 'Employee-Custody' }" tag="a" class="-intro-x md:flex dropdown-item">
                            Employee-Custody
                          </router-link>
                      </li>
                      <li>
                        <router-link :to="{ name: 'Hardware' }" tag="a" class="-intro-x md:flex dropdown-item">
                            Hardware & Software Request Form
                          </router-link>
                      </li>
                      <li>
                        <router-link :to="{ name: 'NewHireITEquipment' }" tag="a" class="-intro-x md:flex dropdown-item">
                            New Hire IT Equipment
                          </router-link>
                      </li>
                      <li>
                        <router-link :to="{ name: 'Modula-Termination-Notice' }" tag="a" class="-intro-x md:flex dropdown-item">
                            Modula-Termination-Notice
                          </router-link>
                      </li>
                      <li>
                        <router-link :to="{ name: 'IT-Move' }" tag="a" class="-intro-x md:flex dropdown-item">
                            IT Move Request Form
                          </router-link>
                      </li>
                      <li>
                        <router-link :to="{ name: 'Damaged' }" tag="a" class="-intro-x md:flex dropdown-item">
                            Damaged & Lost Equipment
                          </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
                <router-link :to="{ name: 'side-menu-add-product' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex ml-5 mt-2 landing-side ">
                  News & Announcements
                </router-link>
                <router-link :to="{ name: 'side-menu-add-product' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex ml-5 mt-2 landing-side ">
                  Company Strategy & Goals
                </router-link>
                <router-link :to="{ name: 'side-menu-add-product' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex ml-5 mt-2 landing-side">
                  Policies
                </router-link>
                <router-link :to="{ name: 'side-menu-add-product' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex ml-5 mt-2 landing-side">
                  New Employee Onboarding
                </router-link>
                <router-link :to="{ name: 'Purchasing' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex ml-5 mt-2 landing-side">
                  Purchasing
                </router-link>
                <router-link :to="{ name: 'Corporate' }" tag="a" data-tw-dismiss="modal"
                  class=" font-medium -intro-x md:flex ml-5 mt-2 landing-side">
                  Corporate Planning Department
                </router-link>
                <a href="https://access.paylocity.com" target="_blank" data-tw-dismiss="modal"
                  class=" font-medium -intro-x md:flex ml-5 mt-2 landing-side">
                  Paylocity
                </a>
                <router-link :to="{ name: 'side-menu-add-product' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex ml-5 mt-2 landing-side">
                  Departments
                </router-link>
                <router-link :to="{ name: 'side-menu-add-product' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex ml-5 mt-2 landing-side">
                  Training
                </router-link>
                <router-link :to="{ name: 'side-menu-add-product' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex ml-5 mt-2 landing-side">
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