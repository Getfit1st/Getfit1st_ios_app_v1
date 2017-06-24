"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var application_settings_1 = require("application-settings");
var LoginComponent = (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.user = new user_1.User();
    }
    LoginComponent.prototype.login = function () {
        console.log("inside login function");
        console.log("user name : " + this.user.email);
        console.log("password : " + this.user.password);
        if (this.userService.login(this.user)) {
            console.log("Inside login");
            application_settings_1.setBoolean("noBoolKey", true);
            this.noBoolKey = application_settings_1.hasKey("noBoolKey");
            //console.log("Bool Key---"this.noBoolKey);
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
        templateUrl: "pages/login/login.component.html",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLCtDQUE4QztBQUM5QywrREFBNkQ7QUFDN0QsMENBQXlDO0FBRXpDLDZEQVU4QjtBQVU5QixJQUFhLGNBQWM7SUFRekIsd0JBQW9CLE1BQWMsRUFBVSxXQUF3QjtRQUFoRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDbEUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBRUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FDckMsQ0FBQztZQUNHLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDNUIsaUNBQVUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyw2QkFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3JDLDJDQUEyQztZQUUzQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUNELElBQUksQ0FDSixDQUFDO1lBQ0MsS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFDekQsQ0FBQztJQUNILENBQUM7SUFDRCxpQ0FBUSxHQUFSO1FBRUUsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxrQ0FBa0M7UUFDbkMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQ3ZDLENBQUM7WUFDQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUNELElBQUksQ0FDSixDQUFDO1lBQ0MsS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFDekQsQ0FBQztJQUVILENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFoREQsSUFnREM7QUFoRFksY0FBYztJQVAxQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztRQUN4QixXQUFXLEVBQUUsa0NBQWtDO1FBQy9DLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO0tBQ3JFLENBQUM7cUNBVTRCLGVBQU0sRUFBdUIsMEJBQVc7R0FSekQsY0FBYyxDQWdEMUI7QUFoRFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCBwYWdlID0gcmVxdWlyZShcInVpL3BhZ2VcIik7XG5pbXBvcnQge1xuICAgIGdldEJvb2xlYW4sXG4gICAgc2V0Qm9vbGVhbixcbiAgICBnZXROdW1iZXIsXG4gICAgc2V0TnVtYmVyLFxuICAgIGdldFN0cmluZyxcbiAgICBzZXRTdHJpbmcsXG4gICAgaGFzS2V5LFxuICAgIHJlbW92ZSxcbiAgICBjbGVhclxufSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xuICBcbiAgdXNlcjogVXNlcjtcbiAgLy9pc0xvZ2dlZEluID0gZmFsc2U7XG4gcHVibGljIG5vQm9vbEtleTogYm9vbGVhbjtcbiBcbiAgXG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge1xuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gIH1cbiAgXG4gIGxvZ2luKClcbiAge1xuICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIGxvZ2luIGZ1bmN0aW9uXCIpO1xuICAgIGNvbnNvbGUubG9nKFwidXNlciBuYW1lIDogXCIrdGhpcy51c2VyLmVtYWlsKTtcbiAgICBjb25zb2xlLmxvZyhcInBhc3N3b3JkIDogXCIrdGhpcy51c2VyLnBhc3N3b3JkKTtcbiAgICBpZih0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcikpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkluc2lkZSBsb2dpblwiKTtcbiAgICAgICAgc2V0Qm9vbGVhbihcIm5vQm9vbEtleVwiLCB0cnVlKTtcbiAgICAgICAgdGhpcy5ub0Jvb2xLZXkgPSBoYXNLZXkoXCJub0Jvb2xLZXlcIik7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJCb29sIEtleS0tLVwidGhpcy5ub0Jvb2xLZXkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2hvbWVcIl0pO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmaW5kIHlvdXIgYWNjb3VudC5cIik7XG4gICAgfVxuICB9XG4gIHJlZ2lzdGVyKClcbiAge1xuICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIHJlZ2lzdGVyIGZ1bmN0aW9uXCIpO1xuICAgIGNvbnNvbGUubG9nKFwidXNlciBuYW1lIDogXCIrdGhpcy51c2VyLmVtYWlsKTtcbiAgICBjb25zb2xlLmxvZyhcInBhc3N3b3JkIDogXCIrdGhpcy51c2VyLnBhc3N3b3JkKTtcbiAgICAvL3RoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9ob21lXCJdKTtcbiAgIGlmKHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKSlcbiAgICB7XG4gICAgICBhbGVydChcImxvZ2dlZCBpbiBzdWNjZXNzZnVsbHlcIik7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbG9naW5cIl0pO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmaW5kIHlvdXIgYWNjb3VudC5cIik7XG4gICAgfVxuXG4gIH1cbn1cbiJdfQ==