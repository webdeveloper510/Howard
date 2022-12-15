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
        icon: "HardDriveIcon",
        pageName: "side-menu-file-manager",
        title: "Task & Process Information",
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
        title: "Employee-Access",
      },
      {
        icon: "FileTextIcon",
        pageName: "side-menu-Facilities-Maintenance",
        title: "Facilities-Maintenance",
      },
      {
        icon: "FileTextIcon",
        pageName: "side-menu-Employee-Custody",
        title: "Employee-Custody",
      },
      {
        icon: "FileTextIcon",
        pageName: "side-menu-Damaged",
        title: "Damaged & Lost Equipment",
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
        icon: "UsersIcon",
        pageName: "side-menu-NewHireITEquipment",
        title: "New Hire IT Equipment",
      },
      {
        icon: "UsersIcon",
        pageName: "side-menu-Modula-Termination-Notice",
        title: "Modula-Termination-Notice",
      },
      {
        icon: "UsersIcon",
        pageName: "side-menu-IT-Move",
        title: "IT Move Request Form",
      },
      {
        icon: "UserPlusIcon",
        pageName: "side-menu-add-product",
        title: "New Hire Onboard",
      },
      {
        icon: "UserPlusIcon",
        pageName: "side-menu-Hardware",
        title: "Hardware & Software Request Form",
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
