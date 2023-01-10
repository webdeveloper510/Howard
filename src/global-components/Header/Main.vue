<template>
 <div class="border-b border-white/[0.08]  md:-mt-5 -mx-3 sm:-mx-8 px-10 box pt-3 mb-1">
    <div class="top-bar-boxed flex items-center my-4">
      <!-- BEGIN: Logo -->
      <router-link :to="{ name: 'landing' }" tag="a" class="-intro-x md:flex mx-auto">
        <img class="h-24" alt="Logo"
          src="../../assets/images/Website_logo.svg" />
      </router-link>
      <!-- END: Logo -->
      <!-- BEGIN: Account Menu -->
      <div class="">

        <!-- BEGIN: Slide Over Toggle -->

        <!-- BEGIN: Small Slide Over Toggle -->
        <button data-tw-toggle="modal" data-tw-target="#small-slide-over-size-preview" class="btn ">
          <AlignJustifyIcon class="block mx-auto w-10 h-10" />
        </button>
        <!-- END: Small Slide Over Toggle -->

        <!-- END: Slide Over Toggle -->
        <!-- BEGIN: Slide Over Content -->
        <div id="small-slide-over-size-preview" class="modal modal-slide-over" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-sm">
            <div class="modal-content">
              <div class="modal-header block py-5">
                <img
                  src="../../assets/images/Website_logo.svg"
                  class="img-fluid mx-auto my-3" />
                  <router-link :to="{ name: 'login' }" tag="a" class="-intro-x  ">
                    <button class="btn btn-elevated-rounded-dark md:flex mx-auto  mb-2">
                        <UserIcon class="w-4 h-4 mr-2" /> Login
                    </button>
                </router-link>
              </div>
              <div class="modal-body p-0 h-screen">
                <router-link :to="{ name: 'landing' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium landing-side -intro-x flex  mt-2 ">
                  <HomeIcon class="block mr-3"  />
                 <div class="font-bold"> Home </div> 
                </router-link>
                <router-link :to="{ name: 'company' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex mt-2 landing-side ">
                  <TargetIcon class="block mr-3"/>
                   <div class="font-bold">
                     Company Strategy & Goals
                   </div>
                </router-link>
                <router-link :to="{ name: 'announcements' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex mt-2 landing-side ">
                  <RssIcon class="block mr-3"/>
                   <div class="font-bold"> News & Announcements </div>
                </router-link>
                <router-link :to="{ name: 'typography' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex mt-2 landing-side">
                  <MapIcon class="block mr-3"/>
                   <div class="font-bold">
                    Policies
                    </div>
                </router-link>
                <router-link :to="{ name: 'PhoneNo' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex mt-2 landing-side">
                  <PhoneIcon class="block mr-3"/>
                   <div class="font-bold">
                     Phone Number
                   </div> 
                </router-link>
                <div class="dropdown inline-block landing-side" data-tw-placement="top" >
                  <a class="dropdown-toggle font-medium  -intro-x flex mt-2 cursor-pointer" aria-expanded="false" data-tw-toggle="dropdown">
                    <LayoutIcon class="block mr-3"/>
                   <div class="font-bold"> Forms </div></a>
                  <div class="dropdown-menu w-40  landing-dropdown">
                    <ul class="dropdown-content">
                      <li>
                        <router-link :to="{ name: 'Employee-Access' }" tag="a" class="-intro-x md:flex dropdown-item" data-tw-dismiss="modal">
                          Employee Access Badge Request
                          </router-link>
                      </li>
                      <li>
                        <router-link :to="{ name: 'Facilities-Maintenance' }" tag="a" class="-intro-x md:flex dropdown-item" data-tw-dismiss="modal">
                          Facilities Maintenance Request
                          </router-link>
                      </li>
                      <li>
                        <router-link :to="{ name: 'Employee-Custody' }" tag="a" class="-intro-x md:flex dropdown-item" data-tw-dismiss="modal">
                          Equipment Custody Record
                          </router-link>
                      </li>
                      <li>
                        <router-link :to="{ name: 'Hardware' }" tag="a" class="-intro-x md:flex dropdown-item" data-tw-dismiss="modal">
                          Hardware & Software Request
                          </router-link>
                      </li>
                      <li>
                        <router-link :to="{ name: 'NewHireITEquipment' }" tag="a" class="-intro-x md:flex dropdown-item" data-tw-dismiss="modal">
                          New Hire IT Equipment Form
                          </router-link>
                      </li>
                      <li>
                        <router-link :to="{ name: 'Modula-Termination-Notice' }" tag="a" class="-intro-x md:flex dropdown-item" data-tw-dismiss="modal">
                          Modula Termination Notice
                          </router-link>
                      </li>
                      <li>
                        <router-link :to="{ name: 'IT-Move' }" tag="a" class="-intro-x md:flex dropdown-item" data-tw-dismiss="modal">
                          IT Move Request
                          </router-link>
                      </li>
                      <li>
                        <router-link :to="{ name: 'Damaged' }" tag="a" class="-intro-x md:flex dropdown-item" data-tw-dismiss="modal">
                            Damaged & Lost Equipment
                          </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
                <router-link :to="{ name: 'Training' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex  mt-2 landing-side">
                  <WindIcon class="block mr-3"/>
                   <div class="font-bold"> Training </div>
                </router-link>
                <!-- <div class="dropdown inline-block landing-side" data-tw-placement="top" >
                  <a class="dropdown-toggle font-medium cursor-pointer -intro-x flex mt-2" aria-expanded="false" data-tw-toggle="dropdown">
                    <LayoutIcon class="block mr-3"/>
                   <div class="font-bold"> Lists </div></a>
                  <div class="dropdown-menu w-40  landing-dropdown">
                    <ul class="dropdown-content">
                      <li>
                        <router-link :to="{ name: 'Access-list' }" tag="a" class="-intro-x md:flex dropdown-item" data-tw-dismiss="modal">
                          Access List
                          </router-link>
                      </li>
                      <li>
                        <router-link :to="{ name: 'Facilities-list' }" tag="a" class="-intro-x md:flex dropdown-item" data-tw-dismiss="modal">
                          Facilities List
                          </router-link>
                      </li>
                      <li>
                        <router-link :to="{ name: 'Custody-list' }" tag="a" class="-intro-x md:flex dropdown-item" data-tw-dismiss="modal">
                          Custody List
                          </router-link>
                      </li>
                      <li>
                        <router-link :to="{ name: 'Hardware-Request-list' }" tag="a" class="-intro-x md:flex dropdown-item" data-tw-dismiss="modal">
                          Hardware Request List
                          </router-link>
                      </li>
                      <li>
                        <router-link :to="{ name: 'Equipment-Request-list' }" tag="a" class="-intro-x md:flex dropdown-item" data-tw-dismiss="modal">
                          Equipment Request List
                          </router-link>
                      </li>
                      <li>
                        <router-link :to="{ name: 'Termination-list' }" tag="a" class="-intro-x md:flex dropdown-item" data-tw-dismiss="modal">
                          Termination List
                          </router-link>
                      </li>
                      <li>
                        <router-link :to="{ name: 'IT-Move-list' }" tag="a" class="-intro-x md:flex dropdown-item" data-tw-dismiss="modal">
                          IT Move List
                          </router-link>
                      </li>
                      <li>
                        <router-link :to="{ name: 'Damaged-list' }" tag="a" class="-intro-x md:flex dropdown-item" data-tw-dismiss="modal">
                          Damaged List
                          </router-link>
                      </li>
                    </ul>
                  </div>
                </div> -->
                <div class="dropdown inline-block landing-side" data-tw-placement="top" >
                  <a class="dropdown-toggle font-medium cursor-pointer -intro-x flex mt-2" aria-expanded="false" data-tw-toggle="dropdown">
                    <LayoutIcon class="block mr-3"/>
                   <div class="font-bold"> Departments </div></a>
                  <div class="dropdown-menu w-40  landing-dropdown">
                    <ul class="dropdown-content">
                      <li>
                        <router-link :to="{ name: 'Access-list' }" tag="a" class="-intro-x md:flex dropdown-item" data-tw-dismiss="modal">
                          Business Development 
                          </router-link>
                      </li>
                      <li>
                        <router-link :to="{ name: 'Facilities-list' }" tag="a" class="-intro-x md:flex dropdown-item" data-tw-dismiss="modal">
                          Customer Service 
                          </router-link>
                      </li>
                      <li>
                        <router-link :to="{ name: 'Custody-list' }" tag="a" class="-intro-x md:flex dropdown-item" data-tw-dismiss="modal">
                          Facilities
                          </router-link>
                      </li>
                      <li>
                        <router-link :to="{ name: 'HrInput' }" tag="a" class="-intro-x md:flex dropdown-item" data-tw-dismiss="modal">
                          HR
                          </router-link>
                      </li>
                      <li>
                        <router-link :to="{ name: 'Equipment-Request-list' }" tag="a" class="-intro-x md:flex dropdown-item" data-tw-dismiss="modal">
                          Information Technology
                          </router-link>
                      </li>
                      <li>
                        <router-link :to="{ name: 'IT-Move-list' }" tag="a" class="-intro-x md:flex dropdown-item" data-tw-dismiss="modal">
                          Marketing
                          </router-link>
                      </li>
                      <li>
                        <router-link :to="{ name: 'Damaged-list' }" tag="a" class="-intro-x md:flex dropdown-item" data-tw-dismiss="modal">
                          Operations
                          </router-link>
                      </li>
                      <li>
                        <router-link :to="{ name: 'safety' }" tag="a" class="-intro-x md:flex dropdown-item" data-tw-dismiss="modal">
                          Safety & EHS 
                          </router-link>
                      </li>
                      <li>
                        <router-link :to="{ name: 'Damaged-list' }" tag="a" class="-intro-x md:flex dropdown-item" data-tw-dismiss="modal">
                          Sales 
                          </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <!-- <router-link :to="{ name: 'HrInput' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex mt-2 landing-side ">
                  <TargetIcon class="block mr-3"/>
                   <div class="font-bold">
                    HR Department Input
                   </div>
                </router-link>
                 -->
                <!-- <router-link :to="{ name: 'product-list' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex mt-2 landing-side">
                  <UserPlusIcon class="block mr-3"/>
                   <div class="font-bold">New Employee Onboarding
                    </div>
                </router-link>
                <router-link :to="{ name: 'Purchasing' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex mt-2 landing-side">
                  <ShoppingCartIcon class="block mr-3"/>
                   <div class="font-bold">
                     Purchasing
                   </div> 
                </router-link>
               
                <router-link :to="{ name: 'Corporate' }" tag="a" data-tw-dismiss="modal"
                  class=" font-medium -intro-x md:flex mt-2 landing-side">
                  <FileIcon class="block mr-3"/>
                   <div class="font-bold">
                    Corporate Planning Department
                    </div>
                </router-link>
                <a href="https://access.paylocity.com" target="_blank" data-tw-dismiss="modal"
                  class=" font-medium -intro-x md:flex mt-2 landing-side">
                  <DollarSignIcon class="block mr-3"/>
                   <div class="font-bold">
                    Paylocity
                    </div>
                </a> -->
                <!-- <router-link :to="{ name: 'tab' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex  mt-2 landing-side">
                  <GitPullRequestIcon class="block mr-3"/>
                   <div class="font-bold"> Departments </div>
                </router-link>
               
                <router-link :to="{ name: 'safety' }" tag="a" data-tw-dismiss="modal"
                  class="font-medium -intro-x md:flex mt-2 landing-side">
                  <ShieldIcon class="block mr-3"/>
                   <div class="font-bold"> Safety </div>
                </router-link> -->
               
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
