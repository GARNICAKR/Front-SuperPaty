const routes = [
  {
    path: "/",
    component: () => import("layouts/storeLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "register", component: () => import("pages/registerUser.vue") },
      { path: "provedores", component: () => import("pages/provedores/provedores.vue") },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
