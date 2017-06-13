import { Component } from "@angular/core";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginComponent {
  // Your TypeScript logic goes here
  user: User;
  isLoggedIn = false;
  constructor(private router: Router, private userService: UserService) {
    this.user = new User();
  }
  submit()
  {
    if(this.isLoggedIn){// if already logged in
      console.log("Already logged in");
      console.log("user name : "+this.user.email);
      console.log("password : "+this.user.password);
    }
    else{// first time logging in
      console.log("first time loggin in");
      console.log("user name : "+this.user.email);
      console.log("password : "+this.user.password);
      this.login();
    }

  }
  login()
  {
    console.log("inside login function");
    console.log("user name : "+this.user.email);
    console.log("password : "+this.user.password);
    this.router.navigate(["/home"]);
   /* if(this.userService.login(this.user))
    {
      this.router.navigate(["/home"]);
    }
    else
    {
      alert("Unfortunately we could not find your account.");
    }*/
  }
}
