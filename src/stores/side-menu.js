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
        icon: "CreditCardIcon",
        pageName: "side-menu-point-of-sale",
        title: "Products & Services",
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
        pageName: "side-menu-crud-form",
        title: "Forms",
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
    
    ],
  }),
});
