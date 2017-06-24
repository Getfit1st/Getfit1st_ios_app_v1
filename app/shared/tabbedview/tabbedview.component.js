"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var application_settings_1 = require("application-settings");
var TabbedviewComponent = (function () {
    function TabbedviewComponent(router) {
        this.router = router;
    }
    TabbedviewComponent.prototype.navigate = function (pathNavigate) {
        if (pathNavigate == "home") {
            this.router.navigate(["/home"]);
        }
        else if (pathNavigate == "calendar") {
            this.router.navigate(["/home/calendar"]);
        }
        else if (pathNavigate == "settings") {
            console.log("Log out tapped---");
            application_settings_1.clear(); //clear all application settings
            this.router.navigate(["/login"]);
        }
    };
    return TabbedviewComponent;
}());
TabbedviewComponent = __decorate([
    core_1.Component({
        selector: "app-tabbedview",
        templateUrl: "./shared/tabbedview/tabbedview.component.html",
        styleUrls: ["./shared/tabbedview/tabbedview-common.css", "./shared/tabbedview/tabbedview.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], TabbedviewComponent);
exports.TabbedviewComponent = TabbedviewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiYmVkdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJiZWR2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBeUM7QUFDekMsNkRBVThCO0FBTzlCLElBQWEsbUJBQW1CO0lBQzlCLDZCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUVsQyxDQUFDO0lBQ0Qsc0NBQVEsR0FBUixVQUFTLFlBQVk7UUFFbkIsRUFBRSxDQUFBLENBQUMsWUFBWSxJQUFJLE1BQU0sQ0FBQyxDQUMxQixDQUFDO1lBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsWUFBWSxJQUFJLFVBQVUsQ0FBQyxDQUNuQyxDQUFDO1lBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxZQUFZLElBQUksVUFBVSxDQUFDLENBQ25DLENBQUM7WUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDdEIsNEJBQUssRUFBRSxDQUFDLENBQUEsZ0NBQWdDO1lBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM3QyxDQUFDO0lBQ0gsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQztBQXJCWSxtQkFBbUI7SUFML0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsV0FBVyxFQUFFLCtDQUErQztRQUM1RCxTQUFTLEVBQUUsQ0FBQywyQ0FBMkMsRUFBRSxvQ0FBb0MsQ0FBQztLQUMvRixDQUFDO3FDQUU0QixlQUFNO0dBRHZCLG1CQUFtQixDQXFCL0I7QUFyQlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7XG4gICAgZ2V0Qm9vbGVhbixcbiAgICBzZXRCb29sZWFuLFxuICAgIGdldE51bWJlcixcbiAgICBzZXROdW1iZXIsXG4gICAgZ2V0U3RyaW5nLFxuICAgIHNldFN0cmluZyxcbiAgICBoYXNLZXksXG4gICAgcmVtb3ZlLFxuICAgIGNsZWFyXG59IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLXRhYmJlZHZpZXdcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9zaGFyZWQvdGFiYmVkdmlldy90YWJiZWR2aWV3LmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9zaGFyZWQvdGFiYmVkdmlldy90YWJiZWR2aWV3LWNvbW1vbi5jc3NcIiwgXCIuL3NoYXJlZC90YWJiZWR2aWV3L3RhYmJlZHZpZXcuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFRhYmJlZHZpZXdDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG5cbiAgfVxuICBuYXZpZ2F0ZShwYXRoTmF2aWdhdGUpXG4gIHtcbiAgICBpZihwYXRoTmF2aWdhdGUgPT0gXCJob21lXCIpXG4gICAge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2hvbWVcIl0pO1xuICAgIH1cbiAgICBlbHNlIGlmKHBhdGhOYXZpZ2F0ZSA9PSBcImNhbGVuZGFyXCIpXG4gICAge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2hvbWUvY2FsZW5kYXJcIl0pO1xuICAgIH1cbiAgICBlbHNlIGlmKHBhdGhOYXZpZ2F0ZSA9PSBcInNldHRpbmdzXCIpXG4gICAge1xuICAgICAgY29uc29sZS5sb2coXCJMb2cgb3V0IHRhcHBlZC0tLVwiKTtcbiAgICAgICAgICAgICAgICAgY2xlYXIoKTsvL2NsZWFyIGFsbCBhcHBsaWNhdGlvbiBzZXR0aW5nc1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9sb2dpblwiXSk7XG4gICAgfVxuICB9XG59Il19