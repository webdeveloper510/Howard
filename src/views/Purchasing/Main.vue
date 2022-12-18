<template>
  <div>
   
    <div class="border-b border-white/[0.08]  md:-mt-5 -mx-3 sm:-mx-8 px-3 box sm:px-8 pt-3 mb-1">
      <div class="top-bar-boxed flex items-center my-4">
        <!-- BEGIN: Logo -->
        <router-link :to="{ name: 'side-menu-dashboard-overview-4' }" tag="a" class="-intro-x md:flex">
          <img class="h-16" alt="Midone Tailwind HTML Admin Template"
            src="https://www.cognitoforms.com/file/PY98Tpd3p2cUH_ojupJJzh6dKQWEicACg9A7BuMhySwbN2I0NPclvU6pOcXxgN0-" />
        </router-link>
        <!-- END: Logo -->
        <!-- BEGIN: Account Menu -->
        <div class="ml-auto flex">
          <router-link :to="{ name: 'landing' }" tag="a" class="font-medium -intro-x md:flex ml-3 mt-2">
          Home
        </router-link>
          <a href="https://access.paylocity.com" target="_blank" class="font-medium -intro-x md:flex mt-2 ml-5">
          Paylocity
        </a>
        <router-link :to="{ name: 'Corporate' }" tag="a" class=" font-medium -intro-x md:flex ml-5 mt-2 ">
          Corporate Planning Department
        </router-link>
        <router-link :to="{ name: 'login' }" tag="a" class="font-medium -intro-x md:flex mt-2 ml-5 ">
          Employee Relations
        </router-link>
        <router-link :to="{ name: 'login' }" tag="a" class="-intro-x md:flex ml-5">
          <button class="btn btn-elevated-rounded-dark mr-2 mb-2">
            <UserIcon class="w-4 h-4 mr-2" /> Login
          </button>

        </router-link>
        </div>
        
        <!-- END: Account Menu -->
      </div>
    </div>
    <div class="my-5 intro-y">
      <h2 class="text-3xl font-medium space large-tittle  leading-none mt-3 text-center">Purchasing</h2>
      <div class="saprater"></div>
      <div class="grid grid-cols-12 gap-6 mt-5">
        <div class="intro-y col-span-12 lg:col-span-8 md:col-span-8">
        
              
            <p class="text-base ">Purchasing is the process of buying or acquiring goods and services to make supply chain management more efficient. Goods, materials, and equipment procured in this process play a key role
              in improving the quality of products/services produced by the organization. Ultimately, the purchasing process impacts the product quality and helps in optimizing costs in the value chain.</p><br/>
            <p class="text-base  ">The purchasing department is responsible for procuring the goods, raw materials & services required to operate the company effectively. <br/><br/>
                Modula has specific needs when it comes to the sourcing and procurement of equipment, raw materials, and services. These needs define the purchasing process and how our Purchasing department functions. <br/>
                Based on our business needs, Modula sets the purchasing department’s responsibilities and streamlines its procurement plans to guard against demand-supply hurdles. </p>
            
          </div>
          <div class="intro-y col-span-12 lg:col-span-4 md:col-span-4">
            <img src="https://img.freepik.com/free-photo/closeup-people-using-digital-tablet_53876-16081.jpg?w=2000"/>
          </div>
        </div>
      <h2 class="text-3xl font-medium space leading-none mt-5 text-center">Purchasing Department Duties and Responsibilities</h2>
      <div class="saprater"></div>
     
      <p class="text-lg text-center mt-3">After establishing an effective purchase policy, the organization can implement 
        various purchasing department responsibilities and duties. These responsibilities are further categorized into competitive duties and non-competitive duties. </p>
       
        
        <div class="grid grid-cols-12 gap-6 mt-5">
          <div class="intro-y col-span-12 lg:col-span-8 md:col-span-8">
            <p class="text-lg font-bold">The competitive duties and responsibilities of the purchasing department include:</p>
            <p class="text-base"> 1. Following the state, local, and federal procurement laws <br/>
            2. Working with government agencies for subsidies and other benefits<br/>
            3. Acquiring goods at competitive rates<br/>
            4. Maintaining long-term exclusive partnerships with top vendors<br/>
            5. Placing best bids and acquiring orders before business competitors<br/>
            6. Sending lucrative proposals to acquire vendors in advance</p>
            <p class="text-lg my-3 font-bold"> The purchase department's responsibilities in a non-competitive aspect include:  </p>
            <p class="text-base"> 
                1. Researching goods and products carefully based on quality, prices, and delivery terms <br/>
                2. Evaluating vendors based on their business history and supplying capabilities <br/>
                3. Assessing the quality of goods at every level of the procurement process <br/>
                4. Creating transparency in delivery and order processes <br/>
                5. Building conclusive financial reports to calculate ROIs <br/>
                6. Exploring new fulfillment capabilities through industry conferences 
            </p>
          </div>
        
          <div class="intro-y col-span-12 lg:col-span-4 md:col-span-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT21pbK_4VXf_vC-KHmjXiqeRPdAPJR2nwrrg&usqp=CAU"/>
          
          </div>
          
        </div>
        <p class="text-base my-3">All purchasing department duties and responsibilities must be performed effectively to ensure the success of a business organization. </p>
      <div class="grid grid-cols-12 gap-6 mt-5">
    <!-- BEGIN: FAQ Menu -->
        <div class="intro-y col-span-12 lg:col-span-4 box p-5 text-center ">
           <h1 class="text-xl font-medium mb-3">Acquiring Goods at the Best Possible Price</h1>
           <p>The Purchasing departments must continuously evaluate materials based on quality and pricing. To maximize profitability, our Buyers need to procure goods efficiently. For example, buying small quantities from a large vendor is not economically practical. The procurement team must achieve
             bulk discounts on these orders and negotiate with alternate vendors for better pricing. </p>
        </div>
        <div class="intro-y col-span-12 lg:col-span-4 box p-5 text-center">
           <h1 class="text-xl font-medium mb-3">Procuring Raw Materials for Sustaining Operations</h1>
           <p>While procuring goods at the best price, the purchasing department must also maintain the purchases necessary for sustaining daily operations. From raw materials such as iron and plastic to machinery, production tools, 
            and even office supplies - they all need to be procured to keep the business running smoothly. </p>
        </div>
        <div class="intro-y col-span-12 lg:col-span-4 box p-5 text-center">
           <h1 class="text-xl font-medium mb-3">Compliance with Industry Protocols</h1>
           <p>In addition to sustaining operations, all goods and services procured by the purchasing department must also be compliant with industry standards and company policies. Vendors should ensure that the raw materials are good in quality before delivering large orders. The procurement department should also establish
             a specific purchasing policy that checks quality compliance at every level of the purchase.</p>
        </div>
        <div class="intro-y col-span-12 lg:col-span-4 box p-5 text-center">
            <h1 class="text-xl font-medium mb-3">Spending Limits</h1>
            <p>The primary procurement policy of our Buyers is to purchase goods at the best prices. The purchasing department strictly defines & follows spending limits for every item in the order.
               This way, the purchasing department does not overspend or cut costs unnecessarily. </p>
        </div>
        <div class="intro-y col-span-12 lg:col-span-4 box p-5 text-center">
            <h1 class="text-xl font-medium mb-3">Authorized Vendors</h1>
            <p>After determining the spending limits, the procurement procedure will also enlist all available authorized vendors. This list is maintained and updated regularly for ensuring access to the best vendors in the market. From large vendors to small-scale suppliers,
               all external parties involved in the procurement process are listed in the policy. </p>
        </div>
        <div class="intro-y col-span-12 lg:col-span-4 box p-5 text-center">
             <h1 class="text-xl font-medium mb-3">List of Supplies</h1>
             <p>In addition to the list of vendors, the procurement policy also makes lists of the purchased items. Office supplies and other daily necessary items are listed together. Similarly, industrial goods and other items required in bulk orders are listed separately.
               These lists are appropriately categorized for making precise orders for every purchase unit. </p>
        </div>
        <div class="intro-y col-span-12 lg:col-span-4 box p-5 text-center">
             <h1 class="text-xl font-medium mb-3">Prioritization</h1>
             <p>While making these lists, the purchasing department should follow a prioritization policy set by the purchasing managers and key business stakeholders. This policy highlights the purchases that go first in the budget. Based on this, the list of supplies can be customized before allocating purchase orders 
              - learn more about the difference between purchase requisition vs purchase order.  </p>
        </div>
        <div class="intro-y col-span-12 lg:col-span-4 box p-5 text-center">
            <h1 class="text-xl font-medium mb-3">Contract Negotiations Policies</h1>
            <p>Once the purchase orders are ready, the organization should follow strict rules on pricing negotiations. Under these policies, the purchasing department should not focus on lower prices at the cost of quality. Instead,
               the quality of goods should be optimized with a pricing comparison among vendors. </p>
        </div>
        <div class="intro-y col-span-12 lg:col-span-4 box p-5 text-center">
            <h1 class="text-xl font-medium mb-3">Vendor Management</h1>
            <p>During these negotiations, vendors and suppliers should be managed properly. The procurement policy should emphasize the importance of efficient vendor management. Ensuring accurate order placements, issuing detailed purchase orders, and sending advance intimations for urgent purchases are some policies that the organization must follow. These will help in building and sustaining a reliable,
               profitable, and long-term business partnership with vendors while preventing vendor fraud. </p>
        </div>
        <div class="intro-y col-span-12 lg:col-span-4 box p-5 text-center">
            <h1 class="text-xl font-medium mb-3">Legal Liabilities</h1>
            <p>Throughout this procedure, the purchasing policy must also adhere to state and federal purchasing laws. Under these strict guidelines, the staff should work coherently with government agencies.
               These policies also help in preventing conflicts between an organization and its suppliers.</p>
        </div>
  
    <!-- END: FAQ Menu -->
  
  </div>
    </div>
   
    <div class="py-5 intro-y">
      <h2 class="text-3xl font-medium space leading-none mt-3">Key Functions of the Purchasing Departments</h2>
      <div class="intro-y grid grid-cols-12 gap-6 mt-5">
        <div class="col-span-12 md:col-span-12">
          <p class="space text-base my-3">Our purchasing department functions are aligned with the Modula business objectives.  Here are some of the basic purchasing department functions: 
          </p>
          <ul>
            <li class="space text-base" >1) Identify business requirements for goods, materials, and services</li>
            <li class="space text-base" >2) Find reliable suppliers to meet these requirements</li>
            <li class="space text-base">3) Negotiate prices, build quality, and delivery terms</li>
            <li class="space text-base">4) Set up the order quantities and making bid requests on supply contracts</li>
            <li class="space text-base">5) Coordinate delivery and storage operations</li>
            <li class="space text-base">6) Run quality control and product testing</li>
            <li class="space text-base">7) Manage budgets based on ROIs and payments</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="-mx-3 md:-mx-5 lg:-mx-5 py-5 text-white">
        <div class="text-center">
        <div className="flex justify-center mt-3 mb-6 links">
          <a
            href="#!"
            type="button"
            className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="facebook-f"
              className="w-2 h-full mx-auto"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              ></path>
            </svg>
          </a>

          <a
            href="#!"
            type="button"
            className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="twitter"
              className="w-3 h-full mx-auto"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              ></path>
            </svg>
          </a>

          <a
            href="#!"
            type="button"
            className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              className="w-3 h-full mx-auto"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
          </a>

          <a
            href="#!"
            type="button"
            className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="instagram"
              className="w-3 h-full mx-auto"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              ></path>
            </svg>
          </a>

          <a
            href="#!"
            type="button"
            className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="linkedin-in"
              className="w-3 h-full mx-auto"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
              ></path>
            </svg>
          </a>

          <a
            href="#!"
            type="button"
            className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github"
              className="w-3 h-full mx-auto"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              ></path>
            </svg>
          </a>
        </div>
        </div>
    </div>
    
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import dom from "@left4code/tw-starter/dist/js/dom";

onMounted(() => {
  dom("body").removeClass("main").removeClass("error-page").removeClass("login").addClass("landing");
});
</script>
