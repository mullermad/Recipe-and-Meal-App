import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import MealsByName from "../views/MealsByName.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByIngrediant from "../views/MealsByIngrediant.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import MealDetails from '../views/MealDetails.vue'
import Ingrediants from "../views/Ingrediants.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
      {
        path: "/letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },
      {
        path: "/ingrediants",
        name: "ingrediant",
        component: Ingrediants,
      },
      {
        path: "/byingrediant/:ingrediant",
        name: "byIngrediant",
        component: MealsByIngrediant,
      },
      {
        path: "/mealdetail/:id",
        name: "mealdetail",
        component: MealDetails,
      },
    ],
  },
];

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router;