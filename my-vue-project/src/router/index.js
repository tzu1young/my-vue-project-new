import { createRouter, createWebHistory } from "vue-router";
import Swal from "sweetalert2";

import Layout from "@/layouts/BasicLayout.vue"; // 引入 Layout

import MembersHome from "@/views/MembersHome.vue";
import MembersLogin from "@/views/MembersLogin.vue";
import MembersForgotPwd1 from "@/views/MembersForgotPwd1.vue";
import MembersProfile from "@/views/MembersProfile.vue";
import MembersRegister from "@/views/MembersRegister.vue";
import MembersTest from "@/views/MembersTest.vue";
import MemberInformation from "@/views/MemberInformation.vue";
import MembersPassword from "@/views/MembersPassword.vue"
import MemberVerifyCode from "@/views/MemberVerifyCode.vue";
import ProductListView from "@/views/InsuranceProductView/ProductListView.vue";
import TravelView from "@/views/InsuranceProductView/TravelView.vue";
import TravelDetailView from "@/views/InsuranceProductView/TravelDetailView.vue";
import TravelIntroductionView from "@/views/InsuranceProductView/TravelIntroductionView.vue";
import TravelPolicyView from "@/views/InsuranceProductView/TravelPolicyView.vue";

import TravelComparisonView from "../views/InsuranceProductView/TravelComparisonView.vue";  //本次新增

const routes = [

  {
    path: "/membersLogin", // 相對路徑，拼接為 `/membersLogin`
    name: "MembersLogin",
    component: MembersLogin,
  }, {
    path: "/membersHome", // 相對路徑，拼接為 `/membersHome`
    name: "MembersHome",
    component: MembersHome, // 首頁
  },

  {
    path: "/membersforgotPwd1", // 相對路徑
    name: "MembersForgotPwd1",
    component: MembersForgotPwd1,
  },
  {
    path: "/membersprofile", // 相對路徑
    name: "MembersProfile",
    component: MembersProfile,
    meta: { requiresAuth: true }, // 需要登入
  },
  {
    path: "/membersregister", // 相對路徑
    name: "MembersRegister",
    component: MembersRegister,
  },
  {
    path: "/membersTest", // 相對路徑
    name: "MembersTest",
    component: MembersTest,
  },
  {
    path: "/memberInformation", // 相對路徑
    name: "MemberInformation",
    component: MemberInformation,
    meta: { requiresAuth: true }, // 需要登入
  },
  {
    path: "/membersPassword", // 相對路徑
    name: "MembersPassword",
    component: MembersPassword,
    meta: { requiresAuth: true }, // 需要登入
  },
  {
    path: "/memberVerifyCode", // 相對路徑
    name: "MemberVerifyCode",
    component: MemberVerifyCode,
  },

  { path: "/productlist", component: ProductListView, name: "productlist" },
  {
    path: "/productlist/travel",
    component: TravelView,
    name: "travel",
    redirect: "/productlist/travel/detail",
    children: [
      { path: "detail", component: TravelDetailView, name: "travel-detail" },
      { path: "introduction", component: TravelIntroductionView, name: "travel-introduction" },
      { path: "policy", component: TravelPolicyView, name: "travel-policy" }
    ]
  },
  { path: "/productlist/travel/comparison", component: TravelComparisonView, name: "comparison" },

  //category1
  {
    path: '/category:categoryid(\\d+)/',
    name: 'category1',
    component: TravelView,
    redirect: "/productlist/travel/detail",
    props: true
  }

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // 改用 createWebHistory
  routes,
});

// 全局路由守衛
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const isAuthenticated = sessionStorage.getItem("username"); // 判斷是否已登入
    if (!isAuthenticated) {
      // 顯示 SweetAlert 提示訊息
      await Swal.fire({
        title: "請先登入",
        text: "您尚未登入",
        icon: "warning",
        confirmButtonText: "前往登入",
      });
      // 跳轉到登入頁面
      next({ path: "/membersLogin" });
    } else {
      next(); // 已登入
    }
  } else {
    next(); // 不需要登入的頁面
  }
});

export default router;
