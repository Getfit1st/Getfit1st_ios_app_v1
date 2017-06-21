"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var TabbedviewComponent = (function () {
    function TabbedviewComponent(router) {
        this.router = router;
    }
    TabbedviewComponent.prototype.navigate = function (pathNavigate) {
        if (pathNavigate == "home") {
            this.router.navigate(["/home"]);
        }
        else if (pathNavigate == "calendar") {
            this.router.navigate(["/calendar"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiYmVkdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJiZWR2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBeUM7QUFPekMsSUFBYSxtQkFBbUI7SUFDOUIsNkJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBRWxDLENBQUM7SUFDRCxzQ0FBUSxHQUFSLFVBQVMsWUFBWTtRQUVuQixFQUFFLENBQUEsQ0FBQyxZQUFZLElBQUksTUFBTSxDQUFDLENBQzFCLENBQUM7WUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxZQUFZLElBQUksVUFBVSxDQUFDLENBQ25DLENBQUM7WUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDdEMsQ0FBQztJQUNILENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBZlksbUJBQW1CO0lBTC9CLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLFdBQVcsRUFBRSwrQ0FBK0M7UUFDNUQsU0FBUyxFQUFFLENBQUMsMkNBQTJDLEVBQUUsb0NBQW9DLENBQUM7S0FDL0YsQ0FBQztxQ0FFNEIsZUFBTTtHQUR2QixtQkFBbUIsQ0FlL0I7QUFmWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLXRhYmJlZHZpZXdcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9zaGFyZWQvdGFiYmVkdmlldy90YWJiZWR2aWV3LmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9zaGFyZWQvdGFiYmVkdmlldy90YWJiZWR2aWV3LWNvbW1vbi5jc3NcIiwgXCIuL3NoYXJlZC90YWJiZWR2aWV3L3RhYmJlZHZpZXcuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFRhYmJlZHZpZXdDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG5cbiAgfVxuICBuYXZpZ2F0ZShwYXRoTmF2aWdhdGUpXG4gIHtcbiAgICBpZihwYXRoTmF2aWdhdGUgPT0gXCJob21lXCIpXG4gICAge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2hvbWVcIl0pO1xuICAgIH1cbiAgICBlbHNlIGlmKHBhdGhOYXZpZ2F0ZSA9PSBcImNhbGVuZGFyXCIpXG4gICAge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2NhbGVuZGFyXCJdKTtcbiAgICB9XG4gIH1cbn0iXX0=