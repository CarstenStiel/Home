import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import sensitiveData from "../data/sensitiveData.json";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

// Überprüfung, ob Name und Passwort in sensitiveData.json nicht leer sind
if (sensitiveData.hue && sensitiveData.hue.username && sensitiveData.hue.bridgeIP) {
  // Nur wenn nicht leer, wird die "devices"-Route hinzugefügt
  routes.push({
    path: "/devices",
    component: () => import("../views/DeviceView.vue"),
  });
}

routes.push({
  path: "/test",
  component: () => import("../views/TestView.vue"),
});

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
