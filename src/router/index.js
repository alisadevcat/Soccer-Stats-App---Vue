import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home";
import Leagues from "@/views/Leagues";
import Teams from "@/views/Teams";
import E404 from "@/views/E404";
import TeamCalendar from "@/views/TeamCalendar";
import LeagueCalendar from "@/views/LeagueCalendar";

const routes = [
  { name: "home", path: "/", component: Home },
  { name: "teams", path: "/teams", component: Teams },
  { name: "leagues", path: "/league", component: Leagues },
  { name: "team-calendar", path: "/team-calendar/:id", component: TeamCalendar, props: true },
  { name: "league-calendar", path: "/league-calendar/:id", component: LeagueCalendar, props: true },
  { path: "/:any(.*)", component: E404 },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;