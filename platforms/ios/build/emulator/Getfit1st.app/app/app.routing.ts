import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { CalendarComponent } from "./pages/calendar/calendar.component";

export const routes = [
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent , children:[
      { path: "calendar", component: CalendarComponent },
  ]},
  
];

export const navigatableComponents = [
  LoginComponent,
  HomeComponent,
  CalendarComponent
];