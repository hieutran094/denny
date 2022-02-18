import Login from "../views/login/Index.vue";

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

export default routes;
