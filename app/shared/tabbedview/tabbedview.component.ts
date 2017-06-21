import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-tabbedview",
  templateUrl: "./shared/tabbedview/tabbedview.component.html",
  styleUrls: ["./shared/tabbedview/tabbedview-common.css", "./shared/tabbedview/tabbedview.css"]
})
export class TabbedviewComponent {
  constructor(private router: Router) {

  }
  navigate(pathNavigate)
  {
    if(pathNavigate == "home")
    {
      this.router.navigate(["/home"]);
    }
    else if(pathNavigate == "calendar")
    {
      this.router.navigate(["/calendar"]);
    }
  }
}