"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var firebase = require("nativescript-plugin-firebase");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    /*register(user: User) {
      alert("About to register: " + user.email);
    }*/
    UserService.prototype.login = function (user) {
        firebase.login({
            type: firebase.LoginType.PASSWORD,
            email: user.email,
            password: user.password
        }).then(function (result) {
            JSON.stringify(result);
            return true;
        }, function (errorMessage) {
            console.log(errorMessage);
            return false;
        });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUV4RCx1REFBMEQ7QUFLMUQsSUFBYSxXQUFXO0lBQ3BCLHFCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFFcEM7O09BRUc7SUFFSCwyQkFBSyxHQUFMLFVBQU0sSUFBVTtRQUNkLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDZixJQUFJLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRO1lBQ2pDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDeEIsQ0FBQyxDQUFDLElBQUksQ0FDSCxVQUFVLE1BQU07WUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDLEVBQ0QsVUFBVSxZQUFZO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUIsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUMsQ0FDSixDQUFDO0lBQ0YsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQztBQXZCWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7cUNBRWlCLFdBQUk7R0FEckIsV0FBVyxDQXVCdkI7QUF2Qlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi91c2VyXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG4gIC8qcmVnaXN0ZXIodXNlcjogVXNlcikge1xuICAgIGFsZXJ0KFwiQWJvdXQgdG8gcmVnaXN0ZXI6IFwiICsgdXNlci5lbWFpbCk7XG4gIH0qL1xuXG4gIGxvZ2luKHVzZXI6IFVzZXIpIHtcbiAgICBmaXJlYmFzZS5sb2dpbih7XG4gICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELFxuICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXG4gIH0pLnRoZW4oXG4gICAgICBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICApO1xuICB9XG59Il19