import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import HomeResponsiveMobile from "./pages/HomeResponsiveMobile.vue";
import Home from "./pages/Home.vue";
import HomeResponsiveMobileProfile from "./pages/HomeResponsiveMobileProfile.vue";
import HomeResponsiveMobileLateralMen from "./pages/HomeResponsiveMobileLateralMen.vue";
import HomeResponsiveMobileChat from "./pages/HomeResponsiveMobileChat.vue";
import MobileText from "./pages/MobileText.vue";
import HomeCrmChatOn from "./pages/HomeCrmChatOn.vue";
import "./global.css";

const routes = [
  {
    path: "/",
    name: "HomeResponsiveMobile",
    component: HomeResponsiveMobile,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/homeresponsivemobileprofile",
    name: "HomeResponsiveMobileProfile",
    component: HomeResponsiveMobileProfile,
  },
  {
    path: "/homeresponsivemobilelateralmenu",
    name: "HomeResponsiveMobileLateralMen",
    component: HomeResponsiveMobileLateralMen,
  },
  {
    path: "/homeresponsivemobilechat",
    name: "HomeResponsiveMobileChat",
    component: HomeResponsiveMobileChat,
  },
  {
    path: "/mobile",
    name: "MobileText",
    component: MobileText,
  },
  {
    path: "/homecrmchaton",
    name: "HomeCrmChatOn",
    component: HomeCrmChatOn,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, fromRoute, next) => {
  const documentTitle =
    toRoute?.meta && toRoute?.meta?.title
      ? toRoute?.meta?.title
      : "Prueba-Técnica";
  window.document.title = documentTitle;
  if (toRoute?.meta?.description) {
    addMetaTag(toRoute?.meta?.description);
  }
  next();
});

const addMetaTag = (value) => {
  let element = document.querySelector(`meta[name='description']`);

  if (element) {
    element.setAttribute("content", value);
  } else {
    element = `<meta name="description" content="${value}" />`;
    document.head.insertAdjacentHTML("beforeend", element);
  }
};

createApp(App).use(router).mount("#app");

export default router;
