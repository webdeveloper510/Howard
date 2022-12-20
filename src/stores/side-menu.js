import { defineStore } from "pinia";

export const useSideMenuStore = defineStore("sideMenu", {
  state: () => ({
    menu: [
      {
        icon: "HomeIcon",
        pageName: "side-menu-dashboard-overview-4",
        title: "Dashboard",
      },

      {
        icon: "InboxIcon",
        pageName: "side-menu-blog-layout-2",
        title: "Announcements/News",
      },
      {
        icon: "FileTextIcon",
        pageName: "side-menu-post",
        title: "Post",
      },

      {
        icon: "FilePlusIcon",
        pageName: "side-menu-wizard-layout-2",
        title: "How to use the Intranet Guide",
      },
      {
        icon: "FileTextIcon",
        pageName: "side-menu-Employee-Access",
        title: "Employee-Form",
        subMenu: [
          {
            icon: "",
            pageName: "side-menu-Employee-Access",
            title: "Employee-Access",
          },
          {
            icon: "",
            pageName: "side-menu-Facilities-Maintenance",
            title: "Facilities-Maintenance",
          },
          {
            icon: "",
            pageName: "side-menu-Employee-Custody",
            title: "Employee-Custody",
          },
          {
            icon: "",
            pageName: "side-menu-Hardware",
            title: "Hardware & Software Request Form",
          },
          
          {
            icon: "",
            pageName: "side-menu-NewHireITEquipment",
            title: "New Hire IT Equipment",
          },
          {
            icon: "",
            pageName: "side-menu-Modula-Termination-Notice",
            title: "Modula-Termination-Notice",
          },
          {
            icon: "",
            pageName: "side-menu-IT-Move",
            title: "IT Move Request Form",
          }
        ]
      },
      {
        icon: "FileTextIcon",
        pageName: "side-menu-list",
        title: "Lists",
        subMenu: [

          {
            icon: "",
            title: "Access-list",
            pageName: "side-menu-Access-list",
            
          },
          {
            title: "Facilities-list",
            pageName: "side-menu-Facilities-list",
            icon: "",
          },
          {
            title: "Custody-list",
            pageName: "side-menu-Custody-list",
            icon: "",
          },
          {
            title: "Damaged-list",
            pageName: "side-menu-Damaged-list",
            icon: "",
          },
          {
            title: "Equipment-Request-list",
            pageName: "side-menu-Equipment-Request-list",
            icon: "",
          },
          {
            title: "Termination-list",
            pageName: "side-menu-Termination-list",
            icon: "",
          },
          {
            title: "Hardware-Request-list",
            pageName: "side-menu-Hardware-Request-list",
            icon: "",
          },
          {
            title: "IT-Move-list",
            pageName: "side-menu-IT-Move-list",
            icon: "",
          },
         
        ]
      },
      {
        icon: "FilePlusIcon",
        pageName: "side-menu-typography",
        title: "Policies",
      },
      {
        icon: "GitPullRequestIcon",
        pageName: "side-menu-tab",
        title: "Departments",
      },
      {
        icon: "TrelloIcon",
        pageName: "side-menu-profile-overview-1",
        title: "Profile",
      },
      {
        icon: "UserCheckIcon",
        pageName: "side-menu-update-profile",
        title: "Update profile",
      },
      {
        icon: "UnlockIcon",
        pageName: "side-menu-change-password",
        title: "Change Password",
      },
      {
        icon: "AwardIcon",
        pageName: "side-menu-Goals",
        title: "Company Strategy & Goals",
      },
      {
        icon: "WindIcon",
        pageName: "side-menu-seller-detail",
        title: "Training",
      },
      {
        icon: "GitlabIcon",
        pageName: "side-menu-users-layout-2",
        title: "HR Information",
      },
      {
        icon: "UsersIcon",
        pageName: "side-menu-product-list",
        title: "All Employee",
      },
      
      {
        icon: "UserPlusIcon",
        pageName: "side-menu-add-product",
        title: "New Hire Onboard",
      },
      
      {
        icon: "MessageSquareIcon",
        pageName: "side-menu-chat",
        title: "Chat",
      },
      {
        icon: "LogInIcon",
        pageName: "login",
        title: "Login",
      },
      {
        icon: "LayoutIcon",
        pageName: "landing",
        title: "Landing",
      },
    ],
  }),
});
