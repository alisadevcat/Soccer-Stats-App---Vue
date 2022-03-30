import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home";
import Competitions from "@/views/Competitions";
import Teams from "@/views/Teams";
import E404 from "@/views/E404";
import TeamCalendar from "@/views/TeamCalendar";
import CompetitionCalendar from "@/views/CompetitionCalendar";

const routes = [
  { name: "home", path: "/", component: Home },
  { name: "teams", path: "/teams", component: Teams },
  { name: "leagues", path: "/league", component: Competitions },
  { name: "team-calendar", path: "/team-calendar/:id", component: TeamCalendar, props: true },
  { name: "league-calendar", path: "/league-calendar/:id", component: CompetitionCalendar, props: true },
  { path: "/:any(.*)", component: E404 },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;