"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.isLoggedIn = false;
        this.user = new user_1.User();
        this.user.email = "karteek42@gmail.com";
        this.user.password = "Assassin";
    }
    LoginComponent.prototype.submit = function () {
        if (this.isLoggedIn) {
            console.log("Already logged in");
            console.log("user name : " + this.user.email);
            console.log("password : " + this.user.password);
        }
        else {
            console.log("first time loggin in");
            console.log("user name : " + this.user.email);
            console.log("password : " + this.user.password);
            this.login();
        }
    };
    LoginComponent.prototype.login = function () {
        console.log("inside login function");
        console.log("user name : " + this.user.email);
        console.log("password : " + this.user.password);
        //this.router.navigate(["/home"]);
        if (this.userService.login(this.user)) {
            this.router.navigate(["/home"]);
        }
        else {
            alert("Unfortunately we could not find your account.");
        }
    };
    LoginComponent.prototype.register = function () {
        console.log("inside register function");
        console.log("user name : " + this.user.email);
        console.log("password : " + this.user.password);
        //this.router.navigate(["/home"]);
        if (this.userService.register(this.user)) {
            alert("logged in successfully");
            this.router.navigate(["/login"]);
        }
        else {
            alert("Unfortunately we could not find your account.");
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [user_service_1.UserService],
        templateUrl: "pages/login/login.html",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLCtDQUE4QztBQUM5QywrREFBNkQ7QUFDN0QsMENBQXlDO0FBUXpDLElBQWEsY0FBYztJQUl6Qix3QkFBb0IsTUFBYyxFQUFVLFdBQXdCO1FBQWhELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQURwRSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRWpCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxxQkFBcUIsQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDbEMsQ0FBQztJQUNELCtCQUFNLEdBQU47UUFFRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQztZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELENBQUM7UUFDRCxJQUFJLENBQUEsQ0FBQztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQztJQUVILENBQUM7SUFDRCw4QkFBSyxHQUFMO1FBRUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxrQ0FBa0M7UUFDbkMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQ3BDLENBQUM7WUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUNELElBQUksQ0FDSixDQUFDO1lBQ0MsS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFDekQsQ0FBQztJQUNILENBQUM7SUFDRCxpQ0FBUSxHQUFSO1FBRUUsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxrQ0FBa0M7UUFDbkMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQ3ZDLENBQUM7WUFDQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUNELElBQUksQ0FDSixDQUFDO1lBQ0MsS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFDekQsQ0FBQztJQUVILENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUF4REQsSUF3REM7QUF4RFksY0FBYztJQU4xQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztRQUN4QixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO0tBQ3JFLENBQUM7cUNBSzRCLGVBQU0sRUFBdUIsMEJBQVc7R0FKekQsY0FBYyxDQXdEMUI7QUF4RFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcbiAgLy8gWW91ciBUeXBlU2NyaXB0IGxvZ2ljIGdvZXMgaGVyZVxuICB1c2VyOiBVc2VyO1xuICBpc0xvZ2dlZEluID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7XG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgICB0aGlzLnVzZXIuZW1haWwgPSBcImthcnRlZWs0MkBnbWFpbC5jb21cIjtcbiAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSBcIkFzc2Fzc2luXCI7XG4gIH1cbiAgc3VibWl0KClcbiAge1xuICAgIGlmKHRoaXMuaXNMb2dnZWRJbil7Ly8gaWYgYWxyZWFkeSBsb2dnZWQgaW5cbiAgICAgIGNvbnNvbGUubG9nKFwiQWxyZWFkeSBsb2dnZWQgaW5cIik7XG4gICAgICBjb25zb2xlLmxvZyhcInVzZXIgbmFtZSA6IFwiK3RoaXMudXNlci5lbWFpbCk7XG4gICAgICBjb25zb2xlLmxvZyhcInBhc3N3b3JkIDogXCIrdGhpcy51c2VyLnBhc3N3b3JkKTtcbiAgICB9XG4gICAgZWxzZXsvLyBmaXJzdCB0aW1lIGxvZ2dpbmcgaW5cbiAgICAgIGNvbnNvbGUubG9nKFwiZmlyc3QgdGltZSBsb2dnaW4gaW5cIik7XG4gICAgICBjb25zb2xlLmxvZyhcInVzZXIgbmFtZSA6IFwiK3RoaXMudXNlci5lbWFpbCk7XG4gICAgICBjb25zb2xlLmxvZyhcInBhc3N3b3JkIDogXCIrdGhpcy51c2VyLnBhc3N3b3JkKTtcbiAgICAgIHRoaXMubG9naW4oKTtcbiAgICB9XG5cbiAgfVxuICBsb2dpbigpXG4gIHtcbiAgICBjb25zb2xlLmxvZyhcImluc2lkZSBsb2dpbiBmdW5jdGlvblwiKTtcbiAgICBjb25zb2xlLmxvZyhcInVzZXIgbmFtZSA6IFwiK3RoaXMudXNlci5lbWFpbCk7XG4gICAgY29uc29sZS5sb2coXCJwYXNzd29yZCA6IFwiK3RoaXMudXNlci5wYXNzd29yZCk7XG4gICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvaG9tZVwiXSk7XG4gICBpZih0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcikpXG4gICAge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2hvbWVcIl0pO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmaW5kIHlvdXIgYWNjb3VudC5cIik7XG4gICAgfVxuICB9XG4gIHJlZ2lzdGVyKClcbiAge1xuICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIHJlZ2lzdGVyIGZ1bmN0aW9uXCIpO1xuICAgIGNvbnNvbGUubG9nKFwidXNlciBuYW1lIDogXCIrdGhpcy51c2VyLmVtYWlsKTtcbiAgICBjb25zb2xlLmxvZyhcInBhc3N3b3JkIDogXCIrdGhpcy51c2VyLnBhc3N3b3JkKTtcbiAgICAvL3RoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9ob21lXCJdKTtcbiAgIGlmKHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKSlcbiAgICB7XG4gICAgICBhbGVydChcImxvZ2dlZCBpbiBzdWNjZXNzZnVsbHlcIik7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbG9naW5cIl0pO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmaW5kIHlvdXIgYWNjb3VudC5cIik7XG4gICAgfVxuXG4gIH1cbn1cbiJdfQ==