import { createRouter, createWebHistory } from "vue-router";
import { Route, RouteConfig } from "vue-router";

import Home from "@/views/Home";
import Competitions from "@/views/Competitions";
import Teams from "@/views/Teams";
import E404 from "@/views/E404";
import TeamCalendar from "@/views/TeamCalendar";
import CompetitionCalendar from "@/views/CompetitionCalendar";

const routes = [
  { name: "home", path: "/", component: Home },
  { name: "teams", path: "/teams", component: Teams },
  { name: "competitions", path: "/competitions", component: Competitions },
  // { name: "team-calendar", path: "/team-calendar/:id/:team_name", component: TeamCalendar, props: true },
  {
    name: "team-calendar",
    path: "/team-calendar/:id",
    component: TeamCalendar,
    props: true,
    // meta: {
    //   breadCrumb() {
    //     const paramToPageB = this.$route.params.team_name;
    //     return [
    //       {
    //         text: paramToPageB,
    //       },
    //       {
    //         text: 'Команды',
    //       },
    //     ];
    //   },
    // },

    meta: {
      breadCrumb: [
        { title: route => `${route.params.team_name}`, active: true }, // make this title dynamic
      ],
   },
  },
  {
    name: "competition-calendar",
    path: "/competition-calendar/:id",
    component: CompetitionCalendar,
    props: true,
  },
  { path: "/:any(.*)", component: E404 },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;


router.beforeEach((to, from, next) => {
  to.meta.title = to.params.project_name_slug;
  next();
});