import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Account from "../views/Account.vue";
import Bag from "../views/Bag.vue";
import Carousel from "../views/Carousel.vue";
import CreateApple from "../views/CreateApple.vue";
import Forget from "../views/Forget.vue";
import iPhone from "../views/iPhone.vue";
import Signin from "../views/Signin.vue";
import Products from "../views/Products.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Account",
    name: "Account",
    component:Account,
  },
  {
    path:"/Bag",
    name:"Bag",
    component:Bag,
  },
  {
    path:"/Carousel",
    name:"Carousel",
    component:Carousel,
  },
  {
    path:"/CreateApple",
    name:"CreateApple",
    component:CreateApple,
  },
  {
    path:"/Forget",
    name:"Forget",
    component:Forget,
  },
  {
    path:"/iPhone",
    name:"iPhone",
    component:iPhone,
  },
  {
    path:"/Signin",
    name:"Signin",
    component:Signin,
  },
  {
    path:"/Products",
    name:"Products",
    component:Products,
  },
  

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
