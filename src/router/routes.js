import Login from "../views/login/Index.vue";
import ChangePassword from "../views/changePassword/Index.vue";
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
  {
    path: "/change-password",
    name: "changePass",
    component: ChangePassword,
  },
];

export default routes;
